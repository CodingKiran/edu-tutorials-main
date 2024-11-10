"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Calendar, GraduationCap, Users } from "lucide-react";
import { Course } from "@/lib/course-data";
import Image from "next/image";

export default function CourseDetails() {
  const { id } = useParams();

  const fallbackImage =
    "https://cdn.pixabay.com/photo/2014/07/06/13/55/calculator-385506_1280.jpg";

  console.log("Fetched ID:", id);
  const course = Course.find((course) => course.id === id);
  console.log("Found Course:", course);

  return (
    <main className="container mx-auto px-4 py-8 ">
      <div className="mb-6">
        <Link href="/courses">
          <Button variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Courses
          </Button>
        </Link>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl">{course?.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video relative mb-6 overflow-hidden rounded-lg">
                <Image
                  src={
                    course?.image &&
                    typeof course.image === "string" &&
                    course.image.trim() !== ""
                      ? course.image
                      : fallbackImage
                  }
                  alt={course?.title || "Course "}
                  className="object-cover w-full h-full"
                  width={800}
                  height={600}
                />
              </div>
              <p className="text-lg text-muted-foreground mb-6">
                {course?.description}
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-muted-foreground" />
                  <span className="text-sm">
                    Instructor: {course?.instructor}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-muted-foreground" />
                  <span className="text-sm">Section: {course?.section}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-muted-foreground" />
                  <span className="text-sm">Semester: {course?.semester}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Course Syllabus</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-6 space-y-2">
                {course?.syllabus.map((item, index) => (
                  <li key={index} className="text-muted-foreground">
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          {/* <Card>
            <CardHeader>
              <CardTitle>Prerequisites</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-6 space-y-2">
                {course?.prerequisites.map((prerequisite, index) => (
                  <li key={index} className="text-muted-foreground">
                    {prerequisite}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card> */}

          <Card>
            <CardHeader>
              <CardTitle>Learning Objectives</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-6 space-y-2">
                {course?.objectives.map((objective, index) => (
                  <li key={index} className="text-muted-foreground">
                    {objective}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Button className="w-full" size="lg">
            Enroll in Course
          </Button>
        </div>
      </div>
    </main>
  );
}
