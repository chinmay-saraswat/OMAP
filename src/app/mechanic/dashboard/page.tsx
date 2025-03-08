"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FaMoneyBillWave, FaWrench, FaCheckCircle, FaClock } from "react-icons/fa";

export default function MechanicDashboard() {
  const router = useRouter();
  const [jobRequests] = useState([
    { id: 1, user: "John Doe", issue: "Flat Tire", location: "5 km away", status: "Pending" },
    { id: 2, user: "Jane Smith", issue: "Battery Dead", location: "Nearby", status: "Pending" },
  ]);
  
  const [completedJobs] = useState([
    { id: 101, user: "Alex Johnson", date: "Mar 1, 2024", issue: "Oil Change", earnings: "₹500" },
    { id: 102, user: "Chris Brown", date: "Feb 20, 2024", issue: "Engine Overheat", earnings: "₹1200" },
  ]);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <motion.div initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }} className="p-6">
        <h1 className="text-3xl font-bold">Welcome, Mechanic!</h1>
        <p className="text-gray-400">Manage job requests and track your earnings.</p>
      </motion.div>

      {/* Dashboard Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        
        {/* Job Requests */}
        <motion.div whileHover={{ scale: 1.05 }} className="cursor-pointer">
          <Card onClick={() => router.push("/mechanic/jobs")} className="bg-blue-600 hover:bg-blue-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FaWrench /> New Job Requests
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Check and accept service requests from nearby users.</p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Active Jobs */}
        <motion.div whileHover={{ scale: 1.05 }} className="cursor-pointer">
          <Card className="bg-green-600 hover:bg-green-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FaClock /> Ongoing Jobs
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Track jobs in progress and update service status.</p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Earnings */}
        <motion.div whileHover={{ scale: 1.05 }} className="cursor-pointer">
  <Card className="bg-gray-800 hover:bg-gray-700">
    <CardHeader>
      <CardTitle className="flex items-center gap-2">
        <FaMoneyBillWave /> Earnings
      </CardTitle>
    </CardHeader>
    <CardContent>
      <p>Check your total earnings and completed job history.</p>
      <Button 
        className="mt-4 bg-blue-500 hover:bg-blue-600 w-full" 
        onClick={() => router.push("/mechanic/earnings")}
      >
        View Earnings
      </Button>
    </CardContent>
  </Card>
</motion.div>

      </div>

      {/* Job Requests Section */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.5 }} className="p-6">
        <h2 className="text-2xl font-bold mb-4">Pending Job Requests</h2>
        <div className="space-y-4">
          {jobRequests.map((job) => (
            <Card key={job.id} className="bg-gray-800 hover:bg-gray-700">
              <CardContent className="p-4 flex justify-between items-center">
                <div>
                  <p className="font-bold text-lg">{job.user}</p>
                  <p className="text-gray-400">{job.issue} - {job.location}</p>
                </div>
                <Button className="bg-green-500 hover:bg-green-600" onClick={() => router.push("/mechanic/tracking")}>
                  Accept
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>

      {/* Completed Jobs Table */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.5 }} className="p-6">
        <h2 className="text-2xl font-bold mb-4">Completed Jobs</h2>
        <Table className="bg-gray-800 rounded-lg">
          <TableHeader>
            <TableRow className="bg-gray-700">
              <TableHead className="text-white">Date</TableHead>
              <TableHead className="text-white">User</TableHead>
              <TableHead className="text-white">Issue</TableHead>
              <TableHead className="text-white">Earnings</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {completedJobs.map((job) => (
              <TableRow key={job.id}>
                <TableCell>{job.date}</TableCell>
                <TableCell>{job.user}</TableCell>
                <TableCell>{job.issue}</TableCell>
                <TableCell className="text-green-400">{job.earnings}</TableCell>
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
              <AvatarImage src="https://source.unsplash.com/100x100/?mechanic" alt="Mechanic" />
              <AvatarFallback>M</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-lg font-semibold">David Mechanic</p>
              <p className="text-gray-400">david.mechanic@example.com</p>
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
