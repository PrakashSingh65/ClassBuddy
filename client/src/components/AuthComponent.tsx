import React, { useState } from "react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Mail, Lock, User, UserCog, Loader } from "lucide-react";
import { useAppDispatch } from "@/hooks/hooks";
import { login, register } from "@/redux/slice/authSlice";
import { toast } from "sonner";

interface IFormData {
  fullName: string;
  email: string;
  password: string;
  role: string;
  imageUrl: string;
}

export default function AuthComponent() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [uploadImage, setUploadImage] = useState<File | null>(null);
  const [formData, setFormData] = useState<IFormData>({
    fullName: "",
    email: "",
    password: "",
    role: "",
    imageUrl: "",
  });

  const dispatch = useAppDispatch();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      const file = files[0];
      try {
        const imageUrl = URL.createObjectURL(file);
        setFormData((prevData) => ({
          ...prevData,
          imageUrl,
        }));
        setUploadImage(file);
        e.target.value = "";
      } catch (error) {
        console.error("Error creating object URL:", error);
      }
    }
  };

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      return;
    }
    setLoading(true);

    try {
      const response = await dispatch(login({ email, password })).unwrap();
      if (response?.redirect_url) {
        window.location.href = response.redirect_url;
      }
    } catch (error: unknown) {
      const errorMessage =
        typeof error === "string" ? error : "Invalid Credentials";
      toast.error(errorMessage);
      setLoading(false);
    }
  };

  const handleSignUpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!uploadImage) {
      setLoading(false);
      toast.error("Please upload a profile image");
      return;
    }

    if (
      !formData.fullName ||
      !formData.email ||
      !formData.password ||
      !formData.role
    ) {
      setLoading(false);
      toast.error("Please fill in all fields");
      return;
    }

    setLoading(true);

    const formDataToSend = new FormData();
    formDataToSend.append("full_name", formData.fullName);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("password", formData.password);
    formDataToSend.append("role", formData.role);
    formDataToSend.append("image", uploadImage);

    try {
      await dispatch(register(formDataToSend)).unwrap();
      toast.success("Registration successful! Starting OAuth login...");
      const response = await dispatch(
        login({ email: formData.email, password: formData.password })
      ).unwrap();
      if (response?.redirect_url) {
        window.location.href = response.redirect_url;
      }
    } catch (error: unknown) {
      const errorMessage =
        typeof error === "string" ? error : "Registration failed";
      toast.error(errorMessage);
      setLoading(false);
    }
  };

  return (
    <Dialog>
      {/* Trigger */}
      <DialogTrigger asChild>
        <Button
          variant="secondary"
          className="rounded-xl px-6 py-2 bg-emerald-400 hover:bg-emerald-300 text-black font-bold shadow-md shadow-emerald-500/20 cursor-pointer transition-all hover:scale-105 active:scale-95 border-0"
        >
          Login
        </Button>
      </DialogTrigger>

      {/* Content */}
      <DialogContent className="sm:max-w-md bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-white rounded-2xl shadow-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            <span className="text-black dark:text-white">Welcome to </span>
            <span className="text-emerald-500 dark:text-emerald-400">ClassBuddy</span>
          </DialogTitle>
          <DialogDescription className="text-center text-neutral-600 dark:text-neutral-400">
            Please log in to your account or sign up to get started.
          </DialogDescription>
        </DialogHeader>

        {/* Tabs */}
        <Tabs defaultValue="login" className="w-full mt-4">
          <TabsList className="grid w-full grid-cols-2 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg p-1">
            <TabsTrigger value="login" className="data-[state=active]:bg-white data-[state=active]:text-emerald-700 data-[state=active]:shadow-2xs text-neutral-600 dark:data-[state=active]:bg-neutral-800 dark:data-[state=active]:text-emerald-300 dark:text-neutral-300 font-semibold">Log In</TabsTrigger>
            <TabsTrigger value="signup" className="data-[state=active]:bg-white data-[state=active]:text-emerald-700 data-[state=active]:shadow-2xs text-neutral-600 dark:data-[state=active]:bg-neutral-800 dark:data-[state=active]:text-emerald-300 dark:text-neutral-300 font-semibold">Sign Up</TabsTrigger>
          </TabsList>

          {/* LOGIN */}
          <TabsContent value="login">
            <form className="space-y-4 mt-6" onSubmit={handleLoginSubmit}>
              <div className="grid gap-2 w-full">
                <Label htmlFor="login_email" className="text-neutral-900 dark:text-white">
                  Email ID
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-emerald-500 dark:text-emerald-400" />
                  <Input
                    id="login_email"
                    type="email"
                    placeholder="Enter your Email ID"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 bg-neutral-50 dark:bg-neutral-900/90 border-neutral-200 dark:border-neutral-800 rounded-lg text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:border-emerald-500 dark:focus:border-emerald-400 focus:ring-emerald-500/20"
                    required
                  />
                </div>
              </div>

              <div className="grid gap-2 w-full">
                <Label htmlFor="login_password" className="text-neutral-900 dark:text-white">
                  Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-emerald-500 dark:text-emerald-400" />
                  <Input
                    id="login_password"
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="pl-10 bg-neutral-50 dark:bg-neutral-900/90 border-neutral-200 dark:border-neutral-800 rounded-lg text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:border-emerald-500 dark:focus:border-emerald-400 focus:ring-emerald-500/20"
                    required
                  />
                </div>
              </div>

              <DialogFooter className="flex justify-between mt-6">
                <DialogClose asChild>
                  <Button variant="secondary" className="rounded-lg bg-neutral-100 hover:bg-neutral-200 text-neutral-700 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800 border border-neutral-200 dark:border-neutral-800">
                    Cancel
                  </Button>
                </DialogClose>
                <Button type="submit" disabled={loading} className="bg-emerald-400 hover:bg-emerald-300 text-black font-bold shadow-md shadow-emerald-500/10 dark:shadow-emerald-500/20 border-0 cursor-pointer">
                  {loading && <Loader className="animate-spin mr-2" />}
                  Log In
                </Button>
              </DialogFooter>
            </form>
          </TabsContent>

          {/* SIGNUP */}
          <TabsContent value="signup">
            <form className="space-y-3 mt-6" onSubmit={handleSignUpSubmit}>
              {/* Avatar Upload */}

              <div className="flex justify-center">
                <input
                  type="file"
                  id="fileInput"
                  name="imageUrl"
                  className="hidden"
                  accept="image/*"
                  onChange={handleFileChange}
                />
                <label
                  htmlFor="fileInput"
                  className="cursor-pointer w-24 h-24 rounded-full border-2 border-dashed border-neutral-300 dark:border-neutral-700 flex items-center justify-center transition duration-300 ease-in-out hover:bg-emerald-50/50 dark:hover:bg-neutral-900 hover:border-emerald-500 dark:hover:border-emerald-400"
                  aria-label="Upload Image"
                >
                  {uploadImage ? (
                    <img
                      src={formData.imageUrl}
                      alt="Uploaded"
                      className="w-full h-full object-cover rounded-full"
                    />
                  ) : (
                    <span className="text-neutral-500 dark:text-neutral-400 text-center text-xs px-2">
                      Upload Image
                    </span>
                  )}
                </label>
              </div>

              <div className="grid gap-2 w-full">
                <Label htmlFor="fullName" className="text-neutral-900 dark:text-white">
                  FullName
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-emerald-500 dark:text-emerald-400" />
                  <Input
                    id="fullName"
                    placeholder="Enter your Full Name"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="pl-10 bg-neutral-50 dark:bg-neutral-900/90 border-neutral-200 dark:border-neutral-800 rounded-lg text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:border-emerald-500 dark:focus:border-emerald-400 focus:ring-emerald-500/20"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div className="grid gap-2">
                <Label htmlFor="signup_email" className="text-neutral-900 dark:text-white">
                  Email
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-emerald-500 dark:text-emerald-400 w-5 h-5" />
                  <Input
                    id="signup_email"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="pl-10 bg-neutral-50 dark:bg-neutral-900/90 border-neutral-200 dark:border-neutral-800 rounded-lg text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:border-emerald-500 dark:focus:border-emerald-400 focus:ring-emerald-500/20"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="role" className="text-neutral-900 dark:text-white">
                  Role
                </Label>
                <div className="relative">
                  <UserCog className="absolute left-3 top-1/2 -translate-y-1/2 text-emerald-500 dark:text-emerald-400 w-5 h-5" />
                  <Select
                    value={formData.role}
                    onValueChange={(e) =>
                      setFormData((prev) => ({ ...prev, role: e }))
                    }
                  >
                    <SelectTrigger className="w-full pl-10 bg-neutral-50 dark:bg-neutral-900/90 border-neutral-200 dark:border-neutral-800 rounded-lg text-neutral-900 dark:text-white focus:border-emerald-500 dark:focus:border-emerald-400 focus:ring-emerald-500/20">
                      <SelectValue placeholder="Select a Role" />
                    </SelectTrigger>
                    <SelectContent className="bg-white dark:bg-neutral-950 border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-white shadow-xl">
                      <SelectGroup>
                        <SelectLabel className="text-neutral-500 dark:text-neutral-400">
                          Roles
                        </SelectLabel>
                        <SelectItem
                          value="student"
                          className="text-neutral-900 dark:text-white focus:bg-emerald-50 focus:text-emerald-700 dark:focus:bg-neutral-900 dark:focus:text-emerald-300 cursor-pointer"
                        >
                          Student
                        </SelectItem>
                        <SelectItem
                          value="teacher"
                          className="text-neutral-900 dark:text-white focus:bg-emerald-50 focus:text-emerald-700 dark:focus:bg-neutral-900 dark:focus:text-emerald-300 cursor-pointer"
                        >
                          Teacher
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Password */}
              <div className="grid gap-2">
                <Label htmlFor="signup_password" className="text-neutral-900 dark:text-white">
                  Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-emerald-500 dark:text-emerald-400 w-5 h-5" />
                  <Input
                    id="signup_password"
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Enter your password"
                    className="pl-10 bg-neutral-50 dark:bg-neutral-900/90 border-neutral-200 dark:border-neutral-800 rounded-lg text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:border-emerald-500 dark:focus:border-emerald-400 focus:ring-emerald-500/20"
                    required
                  />
                </div>
              </div>

              <DialogFooter className="flex justify-between mt-6">
                <DialogClose asChild>
                  <Button variant="secondary" className="rounded-lg bg-neutral-100 hover:bg-neutral-200 text-neutral-700 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800 border border-neutral-200 dark:border-neutral-800">
                    Cancel
                  </Button>
                </DialogClose>
                <Button type="submit" disabled={loading} className="bg-emerald-400 hover:bg-emerald-300 text-black font-bold shadow-md shadow-emerald-500/10 dark:shadow-emerald-500/20 border-0 cursor-pointer">
                  {loading && <Loader className="animate-spin mr-2" />}
                  Sign Up
                </Button>
              </DialogFooter>
            </form>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
