"use client";

import { Button } from "@/components/ui/button";
import { GraduationCap, Search, BookOpen } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-primary/10 via-primary/5 to-background">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="text-center">
          <GraduationCap className="mx-auto h-16 w-16 text-primary mb-6" />
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            Find Your Perfect School
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Search and apply to thousands of schools worldwide. Get personalized recommendations
            and track your applications all in one place.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg" className="gap-2">
              <Search className="h-4 w-4" />
              Start Searching
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <BookOpen className="h-4 w-4" />
              Browse Programs
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}