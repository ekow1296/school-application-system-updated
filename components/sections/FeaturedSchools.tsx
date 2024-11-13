"use client";

import { useState, useRef, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Star, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { motion, useAnimationControls } from "framer-motion";

const schools = [
  {
    id: 1,
    name: "Harvard University",
    location: "Cambridge, USA",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    programs: ["Business", "Law", "Medicine"]
  },
  {
    id: 2,
    name: "University of Oxford",
    location: "Oxford, UK",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1548793977-f3602d88d5f2?w=800&q=80",
    programs: ["Arts", "Sciences", "Engineering"]
  },
  {
    id: 3,
    name: "Stanford University",
    location: "Stanford, USA",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    programs: ["Computer Science", "Psychology", "Economics"]
  },
  {
    id: 4,
    name: "MIT",
    location: "Cambridge, USA",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    programs: ["Engineering", "Technology", "Innovation"]
  },
  {
    id: 5,
    name: "University of Tokyo",
    location: "Tokyo, Japan",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    programs: ["Science", "Technology", "Culture Studies"]
  }
];

// Duplicate schools array for seamless loop
const extendedSchools = [...schools, ...schools];

export default function FeaturedSchools() {
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimationControls();
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const startAnimation = async () => {
      if (!containerRef.current) return;

      const containerWidth = containerRef.current.scrollWidth / 2;
      
      await controls.start({
        x: -containerWidth,
        transition: {
          duration: 20,
          ease: "linear",
          repeat: Infinity,
        }
      });
    };

    startAnimation();
  }, [controls]);

  const handleMouseEnter = () => {
    setIsPaused(true);
    controls.stop();
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
    controls.start({
      x: -containerRef.current!.scrollWidth / 2,
      transition: {
        duration: 20,
        ease: "linear",
        repeat: Infinity,
      }
    });
  };

  return (
    <section className="py-16 bg-background relative overflow-hidden">
      <div className="container px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold gradient-text">Featured Schools</h2>
            <p className="text-muted-foreground mt-2">Discover top-rated institutions worldwide</p>
          </div>
          <Button variant="outline">View All</Button>
        </div>

        <div 
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <motion.div
            ref={containerRef}
            animate={controls}
            className="flex gap-6"
            style={{ width: "fit-content" }}
          >
            {extendedSchools.map((school, index) => (
              <motion.div
                key={`${school.id}-${index}`}
                className="flex-none w-[350px]"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 h-full">
                  <div className="relative h-48">
                    <Image
                      src={school.image}
                      alt={school.name}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="flex items-center bg-white/90 backdrop-blur-sm">
                        <Star className="h-4 w-4 mr-1 fill-yellow-400 text-yellow-400" />
                        {school.rating}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">{school.name}</h3>
                    <div className="flex items-center text-muted-foreground mb-3">
                      <MapPin className="h-4 w-4 mr-1" />
                      {school.location}
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {school.programs.map((program) => (
                        <Badge key={program} variant="outline" className="bg-purple-50">
                          {program}
                        </Badge>
                      ))}
                    </div>
                    <Button className="w-full bg-purple-600 hover:bg-purple-700">
                      View Programs
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {isPaused && (
            <>
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
            </>
          )}
        </div>
      </div>
    </section>
  );
}