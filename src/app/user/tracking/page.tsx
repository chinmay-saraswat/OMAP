"use client";

import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import { LatLngExpression } from "leaflet";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaCheckCircle, FaMapMarkerAlt, FaClock } from "react-icons/fa";

// ✅ Fix: Load `react-leaflet` dynamically (Next.js SSR issue)
const MapContainer = dynamic(() => import("react-leaflet").then((mod) => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import("react-leaflet").then((mod) => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import("react-leaflet").then((mod) => mod.Marker), { ssr: false });
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), { ssr: false });

export default function MechanicTracking() {
  const [mechanicLocation, setMechanicLocation] = useState<LatLngExpression>([28.7041, 77.1025]); // Delhi
  const [userLocation] = useState<LatLngExpression>([28.5355, 77.3910]); // Noida
  const [status, setStatus] = useState("On the way");

  useEffect(() => {
    const interval = setInterval(() => {
      setMechanicLocation((prev: any) => [prev[0] + 0.0005, prev[1] + 0.0005]);

      if (Math.abs((mechanicLocation as number[])[0] - (userLocation as number[])[0]) < 0.001) {
        setStatus("Arrived at location");
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [mechanicLocation, userLocation]);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
      {/* Header */}
      <motion.div initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }} className="p-6">
        <h1 className="text-3xl font-bold">Mechanic Tracking</h1>
        <p className="text-gray-400">Track your route to the customer in real time.</p>
      </motion.div>

      {/* Tracking Info */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.5 }} className="w-full max-w-lg">
        <Card className="bg-gray-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FaMapMarkerAlt /> Mechanic is {status}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300">
              Estimated Arrival: <FaClock className="inline-block text-yellow-400" /> 5 min
            </p>
          </CardContent>
        </Card>
      </motion.div>

      {/* Map */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.5 }} className="mt-6 w-full max-w-3xl h-96">
        <MapContainer center={mechanicLocation} zoom={13} style={{ width: "100%", height: "100%", borderRadius: "10px" }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={mechanicLocation}>
            <Popup>🔧 Mechanic</Popup>
          </Marker>
          <Marker position={userLocation}>
            <Popup>📍 User</Popup>
          </Marker>
        </MapContainer>
      </motion.div>

      {/* Buttons */}
      <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.5 }} className="mt-6 flex gap-4">
        <Button className="bg-green-500 hover:bg-green-600" onClick={() => setStatus("Service Completed")}>
          <FaCheckCircle className="mr-2" /> Mark as Completed
        </Button>
      </motion.div>
    </div>
  );
}
