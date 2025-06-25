"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Toaster } from "@/components/ui/use-toast";
import LoginForm from "@/components/auth/LoginForm";
import SignupForm from "@/components/auth/SignupForm";

export default function AuthPage() {
  const [activeTab, setActiveTab] = useState("login");
  
  return (
    <div className="min-h-screen py-16 md:py-24 flex items-center justify-center bg-[#F8F3E9] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#A7BFA3]/5 -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#D46A6A]/5 -ml-32 -mb-32" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-md mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8 text-center"
          >
            <h1 className="text-3xl md:text-4xl font-serif text-[#6B4F3B] mb-2">PREETIZEN</h1>
            <p className="text-[#333333]/70">Sustainable fashion for conscious consumers</p>
          </motion.div>

          <Tabs
            defaultValue="login"
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger 
                value="login"
                className="data-[state=active]:bg-[#D46A6A] data-[state=active]:text-white"
              >
                Login
              </TabsTrigger>
              <TabsTrigger 
                value="register"
                className="data-[state=active]:bg-[#D46A6A] data-[state=active]:text-white"
              >
                Register
              </TabsTrigger>
            </TabsList>
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: activeTab === "login" ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: activeTab === "login" ? 20 : -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <TabsContent value="login" className="mt-0">
                    <LoginForm />
                  </TabsContent>
                  <TabsContent value="register" className="mt-0">
                    <SignupForm />
                  </TabsContent>
                </motion.div>
              </AnimatePresence>
            </div>
          </Tabs>
        </div>
      </div>
      <Toaster />
    </div>
  );
}