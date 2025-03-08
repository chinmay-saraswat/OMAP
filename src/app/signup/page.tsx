"use client"; // Ensures useRouter works

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function Signup() {
  const router = useRouter();
  const [userType, setUserType] = useState<"owner" | "mechanic">("owner");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // Handle Input Change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Signup Submission (Dummy Navigation)
  const handleSignup = () => {
    if (!formData.name || !formData.email || !formData.password) {
      alert("Please fill all fields");
      return;
    }
    router.push(userType === "owner" ? "/user/dashboard" : "/mechanic/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <Card className="w-full max-w-md bg-gray-800 shadow-lg">
        <CardHeader>
          <CardTitle className="text-center text-2xl">Sign Up</CardTitle>
        </CardHeader>
        <CardContent>
          {/* User Type Selection */}
          <div className="flex justify-center gap-4 mb-4">
            <Button
              variant={userType === "owner" ? "default" : "outline"}
              onClick={() => setUserType("owner")}
            >
              Vehicle Owner
            </Button>
            <Button
              variant={userType === "mechanic" ? "default" : "outline"}
              onClick={() => setUserType("mechanic")}
            >
              Mechanic
            </Button>
          </div>

          {/* Signup Form */}
          <div className="space-y-4">
            <div>
              <Label>Name</Label>
              <Input type="text" name="name" placeholder="Enter your name" className="mt-1" onChange={handleChange} />
            </div>
            <div>
              <Label>Email</Label>
              <Input type="email" name="email" placeholder="Enter your email" className="mt-1" onChange={handleChange} />
            </div>
            <div>
              <Label>Password</Label>
              <Input type="password" name="password" placeholder="Create a password" className="mt-1" onChange={handleChange} />
            </div>

            <Button className="w-full mt-4" onClick={handleSignup}>
              Sign Up
            </Button>

            <p className="text-center text-sm text-gray-400 mt-2">
              Already have an account?{" "}
              <span
                className="text-blue-400 cursor-pointer hover:underline"
                onClick={() => router.push("/login")}
              >
                Login
              </span>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
