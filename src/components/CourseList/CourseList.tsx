"use client";

import { CourseCard } from "@/components/CourseCard/CourseCard";
import { Course } from "@/lib/course-data";

interface CourseListProps {
  semester: string;
  section: string;
  searchQuery: string;
}

export default function CourseList({
  semester,
  section,
  searchQuery,
}: CourseListProps) {
  const filteredCourses = Course.filter((course) => {
    const matchesSemester = !semester || course.semester === semester;
    const matchesSection = !section || course.section === section;
    const matchesSearch =
      !searchQuery ||
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesSemester && matchesSection && matchesSearch;
  });

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {filteredCourses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
      {filteredCourses.length === 0 && (
        <div className="col-span-full text-center py-12">
          <p className="text-xl text-muted-foreground">
            No courses found matching your criteria.
          </p>
        </div>
      )}
    </div>
  );
}
