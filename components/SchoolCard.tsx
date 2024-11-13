"use client";

import { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, DollarSign, BarChart, Star, Globe, ImageIcon } from "lucide-react";
import Image from "next/image";

interface SchoolCardProps {
  name: string;
  location: string;
  programs: string[];
  tuition?: string;
  acceptanceRate?: string;
  rating: number;
  image: string;
  website?: string;
}

const defaultImage = "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80";

export default function SchoolCard({
  name,
  location,
  programs,
  tuition,
  acceptanceRate,
  rating,
  image,
  website
}: SchoolCardProps) {
  const [imageError, setImageError] = useState(false);
  const imageUrl = imageError ? defaultImage : (image || defaultImage);

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="grid md:grid-cols-3 gap-4">
        <div className="relative h-48 md:h-full bg-muted">
          {imageError ? (
            <div className="absolute inset-0 flex items-center justify-center bg-muted">
              <ImageIcon className="h-12 w-12 text-muted-foreground" />
            </div>
          ) : (
            <Image
              src={imageUrl}
              alt={`${name} campus`}
              fill
              className="object-cover transition-opacity duration-300"
              onError={() => setImageError(true)}
              sizes="(max-width: 768px) 100vw, 33vw"
              priority={false}
            />
          )}
        </div>
        <div className="p-6 md:col-span-2">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-2xl font-semibold">{name}</h3>
              <div className="flex items-center gap-2 text-muted-foreground mt-2">
                <MapPin className="h-4 w-4" />
                <span>{location}</span>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <span className="font-semibold">{rating.toFixed(1)}</span>
            </div>
          </div>

          {programs.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {programs.map((program, index) => (
                <Badge 
                  key={`${name}-${program}-${index}`} 
                  variant="secondary"
                >
                  {program}
                </Badge>
              ))}
            </div>
          )}

          <div className="mt-4 grid grid-cols-2 gap-4">
            {tuition && (
              <div className="flex items-center gap-2">
                <DollarSign className="h-4 w-4 text-muted-foreground" />
                <span>{tuition}/year</span>
              </div>
            )}
            {acceptanceRate && (
              <div className="flex items-center gap-2">
                <BarChart className="h-4 w-4 text-muted-foreground" />
                <span>Acceptance: {acceptanceRate}</span>
              </div>
            )}
          </div>

          <div className="mt-6 flex gap-4">
            <Button className="flex-1">Apply Now</Button>
            {website && (
              <Button 
                variant="outline" 
                className="flex-1"
                onClick={() => window.open(website, '_blank')}
              >
                <Globe className="h-4 w-4 mr-2" />
                Visit Website
              </Button>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
}