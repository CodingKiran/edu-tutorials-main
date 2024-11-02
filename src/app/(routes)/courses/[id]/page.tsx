"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Calendar, GraduationCap, Users } from "lucide-react";

export default function CourseDetails() {
  const { id } = useParams();

  interface Course {
    id: string;
    title: string;
    instructor: string;
    semester: string;
    section: string;
    description: string;
    image: string;
    syllabus: string[];
    objectives: string[];
    duration: string;
  }

  const courses: Course[] = [
    {
      id: "101",
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
      id: "102",
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
      id: "103",
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

  console.log("Fetched ID:", id);
  const course = courses.find((course) => course.id === id);
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
                <img
                  src={course?.image}
                  alt={course?.title}
                  className="object-cover w-full h-full"
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
