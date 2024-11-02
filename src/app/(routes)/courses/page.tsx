"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { BookOpen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Courses() {
  const courses = [
    {
      id: 101,
      title: "Accounting Standards & Reporting",
      instructor: "Tarak Anand",
      semester: "I",
      section: "A&F",
      description:
        "A comprehensive study of accounting standards and their application in financial reporting.",
      image:
        "https://cdn.pixabay.com/photo/2014/07/06/13/55/calculator-385506_1280.jpg",
      syllabus: [
        "Chapter 1: Introduction to Accounting Standards",
        "Chapter 2: Accounting Standard 1: Disclosure of Accounting Policies",
      ],
      objectives: [
        "To understand the theoretical framework of accounting standards.",
        "To apply accounting standards to practical situations.",
      ],
      duration: "3 hours per week",
    },
    {
      id: 102,
      title: "Organizational Behavior",
      instructor: "Tarak Anand",
      semester: "I",
      section: "A&F",
      description:
        "A study of individual behavior, group dynamics, and organizational processes.",
      image:
        "https://cdn.pixabay.com/photo/2014/07/06/13/55/calculator-385506_1280.jpg",
      syllabus: [
        "Chapter 1: Introduction to Organizational Behavior",
        "Chapter 2: Individual Behavior",
      ],
      objectives: [
        "To understand the concepts and theories of organizational behavior.",
        "To analyze individual and group behavior in organizations.",
      ],
      duration: "3 hours per week",
    },
    {
      id: 103,
      title: "Business Environment and Policy",
      instructor: "Tarak Anand",
      semester: "I",
      section: "A&F",
      description:
        "An analysis of the economic, political, legal, and social factors affecting business.",
      image:
        "https://cdn.pixabay.com/photo/2014/07/06/13/55/calculator-385506_1280.jpg",
      syllabus: [
        "Chapter 1: The Indian Economy",
        "Chapter 2: Government Policies and Business",
      ],
      objectives: [
        "To understand the Indian economic environment.",
        "To analyze the impact of government policies on business.",
      ],
      duration: "3 hours per week",
    },
  ];
  return (
    <div className="container mx-auto p-4 min-h-screen">
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {courses.map((course, i) => (
          <Card key={i} className="flex flex-col h-full">
            <CardHeader>
              <div className="aspect-video relative mb-4 overflow-hidden rounded-lg">
                <Image
                  src={course.image}
                  alt={course.title}
                  className="object-cover w-full h-full transition-transform hover:scale-105"
                  width={100}
                  height={100}
                />
              </div>
              <CardTitle className="line-clamp-2">{course.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">
                    Instructor:
                  </span>{" "}
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
                  View Course
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </ul>
    </div>
  );
}
