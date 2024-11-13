"use client";

import { School } from "@/types/school";
import SchoolCard from "@/components/SchoolCard";

interface SchoolsListProps {
  schools: School[];
}

export default function SchoolsList({ schools }: SchoolsListProps) {
  if (!Array.isArray(schools)) {
    console.error('Schools prop is not an array:', schools);
    return <div>Error: Invalid schools data</div>;
  }

  return (
    <div className="space-y-6">
      {schools.map((school) => (
        <SchoolCard
          key={school.id}
          name={school.name}
          location={school.location}
          programs={school.programs || []}
          tuition={school.tuition || "Contact school"}
          acceptanceRate={school.acceptanceRate || "N/A"}
          rating={school.rating || 0}
          image={school.image || "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80"}
        />
      ))}
    </div>
  );
}