"use client"; // Ensures useRouter works

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function Login() {
  const router = useRouter();
  const [userType, setUserType] = useState<"owner" | "mechanic">("owner");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <Card className="w-full max-w-md bg-gray-800 shadow-lg">
        <CardHeader>
          <CardTitle className="text-center text-2xl">Login</CardTitle>
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

          {/* Login Form */}
          <div className="space-y-4">
            <div>
              <Label>Email</Label>
              <Input type="email" placeholder="Enter your email" className="mt-1" />
            </div>
            <div>
              <Label>Password</Label>
              <Input type="password" placeholder="Enter your password" className="mt-1" />
            </div>

            <Button
              className="w-full mt-4"
              onClick={() => router.push(userType === "owner" ? "/user/dashboard" : "/mechanic/dashboard")}
            >
              Login
            </Button>

            <p className="text-center text-sm text-gray-400 mt-2">
              Don't have an account?{" "}
              <span
                className="text-blue-400 cursor-pointer hover:underline"
                onClick={() => router.push("/signup")}
              >
                Sign up
              </span>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
