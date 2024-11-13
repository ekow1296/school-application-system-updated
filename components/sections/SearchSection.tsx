"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, MapPin } from "lucide-react";

export default function SearchSection() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("");
  const [activeTab, setActiveTab] = useState("undergraduate");

  const handleSearch = () => {
    const params = new URLSearchParams({
      q: searchQuery,
      location: location,
      level: activeTab,
    });
    router.push(`/schools?${params.toString()}`);
  };

  return (
    <section className="py-16 bg-muted/50">
      <div className="container px-4">
        <Card className="p-6">
          <Tabs defaultValue="undergraduate" className="mb-6">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger 
                value="undergraduate" 
                onClick={() => setActiveTab("undergraduate")}
              >
                Undergraduate
              </TabsTrigger>
              <TabsTrigger 
                value="postgraduate" 
                onClick={() => setActiveTab("postgraduate")}
              >
                Postgraduate
              </TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search for schools, programs, or courses..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Where to study?"
                className="pl-10"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <Button 
              className="w-full"
              onClick={handleSearch}
            >
              Search Programs
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
}