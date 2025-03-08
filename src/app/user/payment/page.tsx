"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FaCreditCard, FaMoneyBillWave, FaCheckCircle } from "react-icons/fa";

export default function PaymentPage() {
  const [amount, setAmount] = useState("");
  const [paymentStatus, setPaymentStatus] = useState("Pending");

  const handlePayment = async () => {
    if (!amount) {
      alert("Please enter an amount!");
      return;
    }

    setPaymentStatus("Processing...");

    // Simulating a payment delay
    setTimeout(() => {
      setPaymentStatus("Completed");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 flex flex-col items-center justify-center">
      {/* Header */}
      <motion.div initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }} className="text-center">
        <h1 className="text-3xl font-bold">Make a Payment</h1>
        <p className="text-gray-400">Securely pay your mechanic</p>
      </motion.div>

      {/* Payment Form */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.5 }} className="mt-6 w-full max-w-md">
        <Card className="bg-gray-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FaCreditCard /> Enter Payment Details
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input
              placeholder="Enter Amount (₹)"
              type="number"
              className="bg-gray-700 text-white border-gray-600"
              onChange={(e) => setAmount(e.target.value)}
            />
            <Button className="bg-blue-500 hover:bg-blue-600 w-full" onClick={handlePayment}>
              Pay Now
            </Button>
          </CardContent>
        </Card>
      </motion.div>

      {/* Payment Status */}
      <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.5 }} className="mt-6 w-full max-w-md">
        <Card className="bg-gray-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FaMoneyBillWave /> Payment Status
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className={`text-lg ${paymentStatus === "Completed" ? "text-green-400" : "text-yellow-400"}`}>
              {paymentStatus}
            </p>
            {paymentStatus === "Completed" && (
              <p className="text-green-500 flex items-center mt-2">
                <FaCheckCircle className="mr-2" /> Payment Successful!
              </p>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
