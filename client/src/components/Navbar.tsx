import { LayoutDashboard, LogOutIcon } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import AuthComponent from "./AuthComponent";
import { useAppSelector, useAppDispatch } from "@/hooks/hooks";
import { logout } from "@/redux/slice/authSlice";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ModeToggle } from "./mode-toggle";
import { toast } from "sonner";

export default function Navbar() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout()).then(() => {
      toast.success("Logged out successfully");
    });
    navigate("/");
  };

  const { user } = useAppSelector((state) => state.auth);

  const dashboardPath =
    user?.role === "teacher" ? "/t-dashboard/home" : "/dashboard-panel/home";

  return (
    <nav
      aria-label="Main navigation"
      className="fixed top-0 left-0 w-full z-50 bg-white/85 dark:bg-black/85 backdrop-blur-xl border-b border-neutral-200/80 dark:border-neutral-800/80 shadow-xs dark:shadow-md transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 sm:py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          to={"/"}
          className="text-2xl font-extrabold tracking-tight hover:opacity-90 transition-opacity flex items-center gap-1"
        >
          <span className="text-black dark:text-white">Class</span>
          <span className="text-emerald-500 dark:text-emerald-400">Buddy</span>
        </Link>

        {/* Right side controls */}
        <div className="flex items-center gap-2.5 sm:gap-4">
          <ModeToggle />
          {user ? (
            <div className="flex items-center gap-2.5 sm:gap-3 text-neutral-900 dark:text-white">
              {/* Dashboard Action Button in Navbar */}
              <Button
                asChild
                variant="outline"
                size="sm"
                className="bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30 hover:border-emerald-500/50 font-semibold shadow-xs hover:shadow-sm transition-all duration-200 active:scale-95 cursor-pointer rounded-lg px-3 py-1.5 h-9 gap-1.5 sm:gap-2"
              >
                <Link
                  to={dashboardPath}
                  aria-label="Go to Dashboard"
                  className="flex items-center gap-1.5 sm:gap-2"
                >
                  <LayoutDashboard className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" aria-hidden="true" />
                  <span className="text-xs sm:text-sm">Dashboard</span>
                </Link>
              </Button>

              {/* User Avatar Dropdown (Dashboard removed, focused on User Account & Actions) */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button
                    type="button"
                    className="rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/60 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-neutral-950 transition-transform active:scale-95 cursor-pointer p-0.5"
                    aria-label="User account menu"
                  >
                    <Avatar className="w-8 h-8 ring-1 ring-emerald-500/30 hover:ring-emerald-500/60 transition-all">
                      <AvatarImage
                        src={user.image_url}
                        alt={user.full_name || "User avatar"}
                        className="object-cover"
                      />
                      <AvatarFallback className="bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 text-xs font-semibold">
                        {user.full_name ? user.full_name.charAt(0).toUpperCase() : "U"}
                      </AvatarFallback>
                    </Avatar>
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="w-56 bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-white shadow-xl rounded-xl p-1.5"
                  align="end"
                  sideOffset={8}
                >
                  <DropdownMenuLabel className="font-normal p-2.5">
                    <div className="flex flex-col space-y-1.5">
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-sm font-semibold leading-none text-neutral-900 dark:text-neutral-100 truncate">
                          {user.full_name || "User"}
                        </p>
                        <span className="text-[10px] font-medium uppercase tracking-wider px-1.5 py-0.5 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 shrink-0">
                          {user.role}
                        </span>
                      </div>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400 truncate">
                        {user.email}
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator className="bg-neutral-200/80 dark:bg-neutral-800/80 my-1" />
                  <DropdownMenuItem
                    className="cursor-pointer text-red-600 dark:text-red-400 focus:bg-red-50 focus:text-red-700 dark:focus:bg-red-950/30 dark:focus:text-red-300 font-medium rounded-lg px-2.5 py-2 gap-2 transition-colors duration-150"
                    onClick={handleLogout}
                  >
                    <LogOutIcon className="w-4 h-4 text-red-500 dark:text-red-400 shrink-0" aria-hidden="true" />
                    <span>Logout</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ) : (
            <AuthComponent />
          )}
        </div>
      </div>
    </nav>
  );
}
