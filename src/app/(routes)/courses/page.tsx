import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { BookOpen } from "lucide-react";
import Image from "next/image";
// import Link from "next/link";

export default function Courses() {
  const courses = [
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
  return (
    <section className=" flex justify-center m-8 ">
      <ul className=" w-3/4 flex gap-4 justify-center items-center">
        {courses.map((each, i) => (
          <li key={i}>
            <Card>
              <Image
                className="px-8 py-4 w-fit"
                src={each.image}
                alt=""
                width={300}
                height={400}
              />
              <CardHeader>
                <CardTitle>{each.title} </CardTitle>
                <CardDescription>{each.description} </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-2">
                <p>
                  <span className="font-semibold">Semester: </span>
                  {each.semester}
                </p>
                <p>
                  <span className="font-semibold">Section: </span>
                  {each.section}
                </p>
                <p>
                  <span className="font-semibold">Duration: </span>
                  {each.duration}
                </p>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button className="w-full">
                  <BookOpen className="mr-2 h-4 w-4" />
                  View Course
                </Button>
              </CardFooter>
            </Card>
          </li>
        ))}
      </ul>
    </section>
  );
}
