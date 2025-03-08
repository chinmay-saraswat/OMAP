"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { FaMapMarkerAlt, FaStar } from "react-icons/fa";

export default function Page() { // ✅ Rename function to `Page`
  const [search, setSearch] = useState("");
  
  const mechanics = [
    { id: 1, name: "John Doe", rating: 4.8, location: "2 km away", specialty: "Engine Repair" },
    { id: 2, name: "Jane Smith", rating: 4.5, location: "5 km away", specialty: "Battery & Electrical" },
    { id: 3, name: "David Mechanic", rating: 4.9, location: "1.5 km away", specialty: "Tire Replacement" },
  ];

  const filteredMechanics = mechanics.filter((m) =>
    m.name.toLowerCase().includes(search.toLowerCase()) || m.specialty.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 flex flex-col items-center">
      <motion.div initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }} className="text-center">
        <h1 className="text-3xl font-bold">Find a Mechanic</h1>
        <p className="text-gray-400">Choose from nearby professionals</p>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.5 }} className="mt-6 w-full max-w-lg">
        <Input 
          placeholder="Search mechanics..." 
          className="bg-gray-800 text-white border-gray-600"
          onChange={(e) => setSearch(e.target.value)}
        />
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.5 }} className="mt-6 w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMechanics.length > 0 ? (
          filteredMechanics.map((mechanic) => (
            <motion.div key={mechanic.id} whileHover={{ scale: 1.05 }}>
              <Card className="bg-gray-800 hover:bg-gray-700 cursor-pointer">
                <CardHeader className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={`https://source.unsplash.com/100x100/?mechanic,${mechanic.id}`} alt={mechanic.name} />
                    <AvatarFallback>{mechanic.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle>{mechanic.name}</CardTitle>
                    <p className="text-gray-400 text-sm">{mechanic.specialty}</p>
                  </div>
                </CardHeader>
                <CardContent className="flex justify-between items-center">
                  <p className="text-yellow-400 flex items-center">
                    <FaStar className="mr-1" /> {mechanic.rating}
                  </p>
                  <p className="text-gray-400 flex items-center">
                    <FaMapMarkerAlt className="mr-1 text-red-400" /> {mechanic.location}
                  </p>
                  <Button className="bg-blue-500 hover:bg-blue-600">
                    Hire
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))
        ) : (
          <p className="text-gray-400">No mechanics found.</p>
        )}
      </motion.div>
    </div>
  );
}
