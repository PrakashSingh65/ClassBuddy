import axios, { AxiosError } from "axios";
import type { InternalAxiosRequestConfig } from "axios";

/**
 * Normalizes the API base URL to ensure it always includes the `/api/v1` prefix
 * regardless of whether the environment variable has a trailing slash or omitted `/api/v1`.
 */
export const getApiBaseUrl = (): string => {
  const raw = (import.meta.env.VITE_API_BASE_URL || "http://localhost:8000/api/v1").trim();
  const clean = raw.replace(/\/+$/, "");
  return clean.endsWith("/api/v1") ? clean : `${clean}/api/v1`;
};

const VITE_API_URL = getApiBaseUrl();
const CLIENT_ID = import.meta.env.VITE_OAUTH_CLIENT_ID || "classbuddy-web";

let memoryToken: string | null = null;

export const setAccessToken = (token: string | null) => {
  memoryToken = token;
  if (token) {
    sessionStorage.setItem("cb_access_token", token);
  } else {
    sessionStorage.removeItem("cb_access_token");
  }
};

export const getAccessToken = (): string | null => {
  if (memoryToken) return memoryToken;
  if (typeof window !== "undefined") {
    return sessionStorage.getItem("cb_access_token");
  }
  return null;
};

export const axiosClient = axios.create({
  baseURL: VITE_API_URL,
  withCredentials: true,
});

// Flag and queue to manage concurrent token refreshes
let isRefreshing = false;
let failedQueue: Array<{
  resolve: (token: string) => void;
  reject: (err: unknown) => void;
}> = [];

const processQueue = (error: unknown, token: string | null = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else if (token) {
      prom.resolve(token);
    }
  });
  failedQueue = [];
};

// Request Interceptor: Attach Bearer token header if present + cookies via withCredentials: true
axiosClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = getAccessToken();
    if (token && !config.headers["Authorization"]) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor: 429 Error & Automatic Cookie/Bearer Token Refresh on 401
axiosClient.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as InternalAxiosRequestConfig & { _retry?: boolean };

    if (error.response?.status === 429) {
      error.message =
        (error.response?.data as { detail?: string })?.detail ||
        "Too many requests. Please try again later.";
      return Promise.reject(error);
    }

    // Handle 401 Unauthorized for API requests (excluding auth/oauth endpoints)
    if (
      error.response?.status === 401 &&
      originalRequest &&
      !originalRequest._retry &&
      !originalRequest.url?.includes("/oauth/token") &&
      !originalRequest.url?.includes("/oauth/revoke")
    ) {
      if (isRefreshing) {
        // Queue concurrent requests while refresh is in progress
        return new Promise((resolve, reject) => {
          failedQueue.push({
            resolve: () => resolve(axiosClient(originalRequest)),
            reject: (err) => reject(err),
          });
        });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        const params = new URLSearchParams();
        params.append("grant_type", "refresh_token");
        params.append("client_id", CLIENT_ID);

        const refreshHeaders: Record<string, string> = {
          "Content-Type": "application/x-www-form-urlencoded",
        };
        const currentToken = getAccessToken();
        if (currentToken) {
          refreshHeaders["Authorization"] = `Bearer ${currentToken}`;
        }

        // Perform token refresh via separate axios call sending and receiving HttpOnly cookies
        const refreshResponse = await axios.post(`${VITE_API_URL}/oauth/token`, params, {
          withCredentials: true,
          headers: refreshHeaders,
        });

        if (refreshResponse.data?.access_token) {
          setAccessToken(refreshResponse.data.access_token);
        }

        processQueue(null, "token_updated");
        return axiosClient(originalRequest);
      } catch (refreshError) {
        processQueue(refreshError, null);
        setAccessToken(null);
        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);

