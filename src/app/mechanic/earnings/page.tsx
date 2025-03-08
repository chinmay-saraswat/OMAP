"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { FaMoneyBillWave, FaClock, FaCheckCircle } from "react-icons/fa";

export default function MechanicEarnings() {
  const [earnings] = useState([
    { month: "Jan", amount: 5000 },
    { month: "Feb", amount: 6500 },
    { month: "Mar", amount: 8000 },
    { month: "Apr", amount: 7500 },
    { month: "May", amount: 9000 },
  ]);

  const [paymentHistory] = useState([
    { id: 101, user: "Alex Johnson", date: "Mar 1, 2024", amount: "₹500" },
    { id: 102, user: "Chris Brown", date: "Feb 20, 2024", amount: "₹1200" },
    { id: 103, user: "Jane Smith", date: "Feb 10, 2024", amount: "₹700" },
  ]);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6">
      {/* Header */}
      <motion.div initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }} className="text-center">
        <h1 className="text-3xl font-bold">Earnings & Payments</h1>
        <p className="text-gray-400">Track your income and past payments.</p>
      </motion.div>

      {/* Earnings Summary */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.5 }} className="w-full max-w-lg mt-6">
        <Card className="bg-gray-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FaMoneyBillWave /> Total Earnings
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-green-400">₹32,000</p>
            <p className="text-gray-400">Last 5 months</p>
          </CardContent>
        </Card>
      </motion.div>

      {/* Earnings Chart */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.5 }} className="w-full max-w-3xl mt-6">
        <Card className="bg-gray-800">
          <CardHeader>
            <CardTitle>Earnings Over Time</CardTitle>
          </CardHeader>
          <CardContent className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={earnings}>
                <XAxis dataKey="month" stroke="#ccc" />
                <YAxis stroke="#ccc" />
                <Tooltip />
                <Bar dataKey="amount" fill="#4CAF50" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </motion.div>

      {/* Payment History Table */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7, duration: 0.5 }} className="w-full max-w-3xl mt-6">
        <Card className="bg-gray-800">
          <CardHeader>
            <CardTitle>Recent Payments</CardTitle>
          </CardHeader>
          <CardContent>
            <Table className="rounded-lg">
              <TableHeader>
                <TableRow className="bg-gray-700">
                  <TableHead className="text-white">Date</TableHead>
                  <TableHead className="text-white">User</TableHead>
                  <TableHead className="text-white">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {paymentHistory.map((payment) => (
                  <TableRow key={payment.id}>
                    <TableCell>{payment.date}</TableCell>
                    <TableCell>{payment.user}</TableCell>
                    <TableCell className="text-green-400">{payment.amount}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </motion.div>

      {/* Payment Status */}
      <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.5 }} className="w-full max-w-lg mt-6">
        <Card className="bg-gray-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FaClock /> Payment Status
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-yellow-400">Pending: ₹3,000</p>
            <p className="text-green-400">Paid: ₹29,000</p>
          </CardContent>
        </Card>
      </motion.div>

      {/* Withdraw Button */}
      <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, duration: 0.5 }} className="mt-6">
        <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition transform hover:scale-105">
          <FaCheckCircle className="mr-2 inline-block" /> Withdraw Earnings
        </button>
      </motion.div>
    </div>
  );
}
