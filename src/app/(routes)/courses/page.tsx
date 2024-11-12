"use client";

import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";

import CourseList from "@/components/CourseList/CourseList";

const semesters = ["I", "II", "III", "IV"];
const sections = ["A&F", "Regular", "FM"];

export default function Courses() {
  const [selectedSemester, setSelectedSemester] = useState<string>("");
  const [selectedSection, setSelectedSection] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState("");
  const clearSelections = () => {
    setSelectedSemester("");
    setSelectedSection("");
    setSearchQuery("");
  };
  return (
    <div className="container mx-auto p-4 min-h-screen">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Available Courses</h1>

        <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-4 mb-8">
          <div className="relative">
            <Input
              placeholder="Search courses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
          </div>

          <Select value={selectedSemester} onValueChange={setSelectedSemester}>
            <SelectTrigger>
              <SelectValue placeholder="Select Semester" />
            </SelectTrigger>
            <SelectContent>
              {semesters.map((semester) => (
                <SelectItem key={semester} value={semester}>
                  {semester}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={selectedSection} onValueChange={setSelectedSection}>
            <SelectTrigger>
              <SelectValue placeholder="Select Section" />
            </SelectTrigger>
            <SelectContent>
              {sections.map((section) => (
                <SelectItem key={section} value={section}>
                  {section}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button
            onClick={clearSelections}
            className="col-span-1 md:col-span-1 lg:col-span-1 px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-800"
          >
            Clear Selections
          </Button>
        </div>

        <CourseList
          semester={selectedSemester}
          section={selectedSection}
          searchQuery={searchQuery}
        />
      </main>
    </div>
  );
}
