"use client"; 
import { Button } from "@/components/ui/button";
import Navbar from "@/components/ui/Navbar";
import { FaWrench, FaCar } from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  const router = useRouter();

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('https://source.unsplash.com/1600x900/?car,garage')",
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="relative text-center text-white z-10 mt-16">
        <h1 className="text-5xl font-bold mb-4 animate-fadeIn">Onsite Mechanic Assistance</h1>
        <p className="text-lg text-gray-300 animate-fadeIn">Get instant mechanic help anytime, anywhere!</p>
      </div>

      {/* User Selection */}
      <div className="relative mt-8 flex flex-col md:flex-row gap-4 z-10">
        <Button
          onClick={() => router.push("/login?type=owner")}
          className="flex items-center gap-2 px-6 py-3 text-lg bg-blue-500 hover:bg-blue-600"
        >
          <FaCar /> I Need a Mechanic
        </Button>

        <Button
          onClick={() => router.push("/login?type=mechanic")}
          className="flex items-center gap-2 px-6 py-3 text-lg bg-green-500 hover:bg-green-600"
        >
          <FaWrench /> I Am a Mechanic
        </Button>
      </div>

      {/* How It Works Section */}
      <div className="relative mt-12 w-full max-w-5xl text-center z-10">
        <h2 className="text-3xl font-semibold text-white mb-6">How It Works?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-gray-800 text-white shadow-lg">
            <CardContent className="p-6">
              <h3 className="font-semibold text-xl">Step 1</h3>
              <p className="text-gray-300">Sign up and select your role.</p>
            </CardContent>
          </Card>
          <Card className="bg-gray-800 text-white shadow-lg">
            <CardContent className="p-6">
              <h3 className="font-semibold text-xl">Step 2</h3>
              <p className="text-gray-300">Find or accept a service request.</p>
            </CardContent>
          </Card>
          <Card className="bg-gray-800 text-white shadow-lg">
            <CardContent className="p-6">
              <h3 className="font-semibold text-xl">Step 3</h3>
              <p className="text-gray-300">Get help or provide service instantly!</p>
            </CardContent>
          </Card>
        </div>
      </div>
{/* Subscription Plans Section */}
<div className="relative mt-12 w-full max-w-4xl text-center z-10">
  <h2 className="text-3xl font-bold text-white mb-6">Mechanic Subscription Plans</h2>
  
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    
    {/* Silver Plan */}
    <motion.div whileHover={{ scale: 1.05 }}>
      <Card className="bg-gray-800 border-2 border-gray-500 shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl text-gray-300">Silver Plan</CardTitle>
          <p className="text-gray-400">Basic Features for ₹999/month</p>
        </CardHeader>
        <CardContent className="text-center">
          <ul className="text-gray-400 space-y-2">
            <li>✅ 5 Job Requests Per Day</li>
            <li>✅ Standard Visibility</li>
            <li>✅ Basic Support</li>
          </ul>
          <Button className="mt-4 bg-gray-600 hover:bg-gray-700 w-full">
            Subscribe Now
          </Button>
        </CardContent>
      </Card>
    </motion.div>

    {/* Gold Plan */}
    <motion.div whileHover={{ scale: 1.05 }}>
      <Card className="bg-yellow-600 border-2 border-yellow-400 shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl text-yellow-100">Gold Plan</CardTitle>
          <p className="text-yellow-200">Premium Features for ₹1999/month</p>
        </CardHeader>
        <CardContent className="text-center">
          <ul className="text-yellow-100 space-y-2">
            <li>🌟 Unlimited Job Requests</li>
            <li>🌟 High Visibility</li>
            <li>🌟 Priority Support</li>
          </ul>
          <Button className="mt-4 bg-yellow-500 hover:bg-yellow-600 w-full">
            Subscribe Now
          </Button>
        </CardContent>
      </Card>
    </motion.div>

  </div>
   </div>
    </div>
  );
}
