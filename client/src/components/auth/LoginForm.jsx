"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FiEye, FiEyeOff, FiMail, FiLock } from "react-icons/fi";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { useToast } from "@/components/ui/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";

// Form validation schema
const formSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  rememberMe: z.boolean().default(false),
});

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      // Replace with your actual authentication logic
      console.log("Login attempt with:", data);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      toast({
        title: "Success!",
        description: "You have been logged in successfully.",
      });

      // Redirect or update state after successful login
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Login failed",
        description:
          error.message || "Please check your credentials and try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
  };

  return (
    <motion.div
      className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 md:p-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="space-y-6"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div className="space-y-2 text-center" variants={itemVariants}>
          <h1 className="text-2xl md:text-3xl font-serif text-[#6B4F3B]">
            Welcome Back
          </h1>
          <p className="text-sm text-[#333333]/70">
            Sign in to access your account
          </p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#333333]">Email</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-[#A7BFA3]" />
                        <Input
                          placeholder="hello@example.com"
                          type="email"
                          className="pl-10 bg-[#F8F3E9]/30 border-[#A7BFA3]/30 focus-visible:ring-[#D46A6A] focus-visible:border-[#D46A6A]"
                          {...field}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#333333]">Password</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-[#A7BFA3]" />
                        <Input
                          placeholder="••••••••"
                          type={showPassword ? "text" : "password"}
                          className="pl-10 bg-[#F8F3E9]/30 border-[#A7BFA3]/30 focus-visible:ring-[#D46A6A] focus-visible:border-[#D46A6A]"
                          {...field}
                        />
                        <button
                          type="button"
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-[#A7BFA3] hover:text-[#D46A6A]"
                          onClick={() => setShowPassword(!showPassword)}
                          tabIndex="-1"
                        >
                          {showPassword ? <FiEyeOff /> : <FiEye />}
                        </button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex items-center justify-between">
                <FormField
                  control={form.control}
                  name="rememberMe"
                  render={({ field }) => (
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="rememberMe"
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        className="data-[state=checked]:bg-[#A7BFA3] data-[state=checked]:border-[#A7BFA3]"
                      />
                      <label
                        htmlFor="rememberMe"
                        className="text-xs font-medium leading-none text-[#333333]/80 cursor-pointer"
                      >
                        Remember me
                      </label>
                    </div>
                  )}
                />

                <Link
                  href="/forgot-password"
                  className="text-xs font-medium text-[#D46A6A] hover:underline"
                >
                  Forgot password?
                </Link>
              </div>

              <Button
                variant="default"
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#D46A6A] hover:bg-[#C15A5A] text-white"
              >
                {isLoading ? (
                  <div className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Signing in...
                  </div>
                ) : (
                  "Sign in"
                )}
              </Button>
            </form>
          </Form>
        </motion.div>

        <motion.div className="relative" variants={itemVariants}>
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-[#A7BFA3]/20" />
          </div>
          <div className="relative flex justify-center text-xs">
            <span className="bg-white px-2 text-[#333333]/60">
              or continue with
            </span>
          </div>
        </motion.div>

        <motion.div className="grid grid-cols-2 gap-4" variants={itemVariants}>
          <Button
            variant="outline"
            className="border-[#A7BFA3]/30 hover:bg-[#A7BFA3]/10"
            onClick={() => console.log("Google sign in")}
          >
            <FaGoogle className="mr-2 text-red-500" />
            Google
          </Button>
          <Button
            variant="outline"
            className="border-[#A7BFA3]/30 hover:bg-[#A7BFA3]/10"
            onClick={() => console.log("Facebook sign in")}
          >
            <FaFacebook className="mr-2 text-blue-600" />
            Facebook
          </Button>
        </motion.div>

        <motion.p
          className="text-center text-sm text-[#333333]/70"
          variants={itemVariants}
        >
          Don't have an account?{" "}
          <Link
            href="/signup"
            className="font-medium text-[#D46A6A] hover:underline"
          >
            Sign up
          </Link>
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default LoginForm;
