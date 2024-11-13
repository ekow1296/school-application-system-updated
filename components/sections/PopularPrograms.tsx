"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, Clock } from "lucide-react";

const programs = [
  {
    id: 1,
    name: "Computer Science",
    level: "Bachelor's",
    duration: "4 years",
    students: "2500+",
  },
  {
    id: 2,
    name: "Business Administration",
    level: "Master's",
    duration: "2 years",
    students: "1800+",
  },
  {
    id: 3,
    name: "Data Science",
    level: "Master's",
    duration: "2 years",
    students: "1200+",
  },
];

export default function PopularPrograms() {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Popular Programs</h2>
          <Button variant="outline">Explore All</Button>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program) => (
            <Card key={program.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">{program.name}</CardTitle>
                    <Badge variant="secondary" className="mt-2">
                      {program.level}
                    </Badge>
                  </div>
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-2" />
                    Duration: {program.duration}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="h-4 w-4 mr-2" />
                    Students: {program.students}
                  </div>
                  <Button className="w-full mt-4">Learn More</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}