"use client";

import { Button } from "@/components/ui/button";
import { BookOpen, Search, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-purple-50 via-purple-50/50 to-white hero-pattern">
      <div className="container px-4 py-32 md:py-48 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="flex justify-center mb-6"
          >
            <div className="relative">
              <div className="bg-white p-4 rounded-2xl shadow-lg">
                <BookOpen className="h-16 w-16 text-purple-600" />
              </div>
              <Sparkles className="h-6 w-6 text-purple-400 absolute -top-2 -right-2 animate-pulse" />
            </div>
          </motion.div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6 gradient-text">
            Your Journey to Academic Excellence Starts Here
          </h1>
          <p className="text-xl text-purple-700/80 mb-8 leading-relaxed">
            Join thousands of students who found their perfect educational path through EnraPortal.
            Let's make your academic dreams come true!
          </p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 gap-2 shadow-lg shadow-purple-200 hover:shadow-purple-300 transition-all duration-300">
              <Search className="h-4 w-4" />
              Start Your Journey
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 gap-2">
              <BookOpen className="h-4 w-4" />
              Explore Programs
            </Button>
          </motion.div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}