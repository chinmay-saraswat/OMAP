"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FaCar, FaWrench, FaHistory, FaMapMarkerAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa";


export default function UserDashboard() {
  const router = useRouter();
  const [mechanicRequests] = useState([
    { id: 1, name: "John Doe", status: "On the way", location: "5 km away" },
    { id: 2, name: "Jane Smith", status: "Arrived", location: "Nearby" },
  ]);
  
  const [serviceHistory] = useState([
    { id: 101, mechanic: "Alex Johnson", date: "Mar 1, 2024", issue: "Flat Tire" },
    { id: 102, mechanic: "Chris Brown", date: "Feb 20, 2024", issue: "Engine Overheat" },
  ]);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <motion.div initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }} className="p-6">
        <h1 className="text-3xl font-bold">Welcome, User!</h1>
        <p className="text-gray-400">Manage your requests and track mechanics easily.</p>
      </motion.div>

      {/* Dashboard Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        
        {/* Find Mechanic */}
        <motion.div whileHover={{ scale: 1.05 }} className="cursor-pointer">
          <Card onClick={() => router.push("/user/mechanics")} className="bg-blue-600 hover:bg-blue-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FaWrench /> Find a Mechanic
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Search for nearby mechanics and request service instantly.</p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Active Requests */}
       {/* Active Requests */}
<motion.div whileHover={{ scale: 1.05 }} className="cursor-pointer">
  <Card className="bg-green-600 hover:bg-green-700">
    <CardHeader>
      <CardTitle className="flex items-center gap-2">
        <FaClock /> Active Requests
      </CardTitle>
    </CardHeader>
    <CardContent>
      <p>Track your mechanic in real-time and stay updated.</p>
      <Button 
        className="mt-4 bg-blue-500 hover:bg-blue-600 w-full" 
        onClick={() => router.push("/user/tracking")}
      >
        Track Mechanic
      </Button>
    </CardContent>
  </Card>
</motion.div>


        {/* Service History */}
        <motion.div whileHover={{ scale: 1.05 }} className="cursor-pointer">
          <Card className="bg-gray-800 hover:bg-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FaHistory /> Service History
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>View all past services and mechanics who assisted you.</p>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Live Mechanic Requests */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.5 }} className="p-6">
        <h2 className="text-2xl font-bold mb-4">Live Mechanic Requests</h2>
        <div className="space-y-4">
          {mechanicRequests.map((request) => (
            <Card key={request.id} className="bg-gray-800 hover:bg-gray-700">
              <CardContent className="p-4 flex justify-between items-center">
                <div>
                  <p className="font-bold text-lg">{request.name}</p>
                  <p className="text-gray-400">{request.status}</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-red-400" />
                  <span>{request.location}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>

      {/* Service History Table */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.5 }} className="p-6">
        <h2 className="text-2xl font-bold mb-4">Service History</h2>
        <Table className="bg-gray-800 rounded-lg">
          <TableHeader>
            <TableRow className="bg-gray-700">
              <TableHead className="text-white">Date</TableHead>
              <TableHead className="text-white">Mechanic</TableHead>
              <TableHead className="text-white">Issue</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {serviceHistory.map((service) => (
              <TableRow key={service.id}>
                <TableCell>{service.date}</TableCell>
                <TableCell>{service.mechanic}</TableCell>
                <TableCell>{service.issue}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </motion.div>

      {/* Profile Section */}
      <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.5 }} className="p-6">
        <h2 className="text-2xl font-bold mb-4">Profile</h2>
        <Card className="bg-gray-800">
          <CardContent className="p-6 flex items-center gap-4">
            <Avatar>
              <AvatarImage src="https://source.unsplash.com/100x100/?person" alt="User" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-lg font-semibold">John Doe</p>
              <p className="text-gray-400">john.doe@example.com</p>
            </div>
            <Button className="ml-auto bg-red-500 hover:bg-red-600" onClick={() => router.push("/logout")}>
              Logout
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
