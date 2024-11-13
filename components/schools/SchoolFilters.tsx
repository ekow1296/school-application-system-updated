"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Search, X } from 'lucide-react';

export default function SchoolFilters() {
  const router = useRouter();
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    level: '',
    field: '',
    location: '',
    mode: '',
    format: ''
  });

  const removeFilter = (filter: string) => {
    setSelectedFilters(selectedFilters.filter(f => f !== filter));
  };

  const handleSearch = () => {
    const params = new URLSearchParams();
    
    if (formData.location) params.append('location', formData.location);
    if (formData.level) params.append('level', formData.level);
    if (formData.field) params.append('field', formData.field);
    if (formData.mode) params.append('mode', formData.mode);
    if (formData.format) params.append('format', formData.format);

    router.push(`/schools?${params.toString()}`);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold mb-4">Filters</h2>
        {selectedFilters.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {selectedFilters.map(filter => (
              <Badge key={filter} variant="secondary" className="px-2 py-1">
                {filter}
                <button onClick={() => removeFilter(filter)} className="ml-2">
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            ))}
            <Button 
              variant="link" 
              className="text-sm"
              onClick={() => setSelectedFilters([])}
            >
              Clear all
            </Button>
          </div>
        )}
      </div>

      <div className="space-y-4">
        <div>
          <Label>Degree Level</Label>
          <Select onValueChange={(value) => setFormData({ ...formData, level: value })}>
            <SelectTrigger>
              <SelectValue placeholder="Select level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="undergraduate">Undergraduate (Bachelor's)</SelectItem>
              <SelectItem value="masters">Master's</SelectItem>
              <SelectItem value="phd">PhD</SelectItem>
              <SelectItem value="doctorate">Professional Doctorate</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label>Field of Study</Label>
          <Select onValueChange={(value) => setFormData({ ...formData, field: value })}>
            <SelectTrigger>
              <SelectValue placeholder="Select field" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="business">Business</SelectItem>
              <SelectItem value="engineering">Engineering</SelectItem>
              <SelectItem value="arts">Arts & Humanities</SelectItem>
              <SelectItem value="science">Science</SelectItem>
              <SelectItem value="medicine">Medicine</SelectItem>
              <SelectItem value="law">Law</SelectItem>
              <SelectItem value="education">Education</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Separator />

        <div>
          <Label>Location</Label>
          <Input 
            placeholder="Enter city or country" 
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
          />
        </div>

        <div>
          <Label>Tuition Range (per year)</Label>
          <div className="pt-4 px-2">
            <Slider
              defaultValue={[0, 97000]}
              max={97000}
              step={1000}
              className="mt-2"
            />
            <div className="flex justify-between text-sm text-muted-foreground mt-2">
              <span>$0</span>
              <span>$97,000</span>
            </div>
          </div>
        </div>

        <Separator />

        <div>
          <Label>Mode of Attendance</Label>
          <Select onValueChange={(value) => setFormData({ ...formData, mode: value })}>
            <SelectTrigger>
              <SelectValue placeholder="Select mode" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="in-person">In-Person</SelectItem>
              <SelectItem value="online">Online</SelectItem>
              <SelectItem value="hybrid">Hybrid</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label>Study Format</Label>
          <Select onValueChange={(value) => setFormData({ ...formData, format: value })}>
            <SelectTrigger>
              <SelectValue placeholder="Select format" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="full-time">Full-time</SelectItem>
              <SelectItem value="part-time">Part-time</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button 
          className="w-full mt-6 bg-purple-600 hover:bg-purple-700"
          onClick={handleSearch}
        >
          <Search className="w-4 h-4 mr-2" />
          Search Schools
        </Button>
      </div>
    </div>
  );
}