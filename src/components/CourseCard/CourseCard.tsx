"use client";

import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";
import type { Course } from "@/lib/course-data";

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader>
        <div className="aspect-video relative mb-4 overflow-hidden rounded-lg">
          <img
            src={course.image}
            alt={course.title}
            className="object-cover w-full h-full transition-transform hover:scale-105"
          />
        </div>
        <CardTitle className="line-clamp-2">{course.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">
            <span className="font-medium text-foreground">Instructor:</span>{" "}
            {course.instructor}
          </p>
          <p className="text-sm text-muted-foreground">
            <span className="font-medium text-foreground">Section:</span>{" "}
            {course.section}
          </p>
          <p className="text-sm text-muted-foreground">
            <span className="font-medium text-foreground">Semester:</span>{" "}
            {course.semester}
          </p>

          <p className="text-sm text-muted-foreground line-clamp-2">
            {course.description}
          </p>
        </div>
      </CardContent>
      <CardFooter>
        <Link href={`/courses/${course.id}`} className="w-full">
          <Button className="w-full">
            <BookOpen className="mr-2 h-4 w-4" />
            Preview Course
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
