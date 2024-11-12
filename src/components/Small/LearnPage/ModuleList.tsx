import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Course } from "@/lib/course-data";

export default function ModuleList({ params }: { params: { id: string } }) {
  const course = Course.find((c) => c.id === params.id);

  if (!course) {
    return <div className="p-4">Course not found.</div>; // Fallback UI
  }
  return (
    <Card className="lg:col-span-1 h-full">
      <CardHeader>
        <CardTitle>{course.title}</CardTitle>
      </CardHeader>
      <ScrollArea className="h-[calc(100%-5rem)]">
        <div className="space-y-2 p-4">
          {course.syllabus.map((topic, index) => (
            <Card
              key={index}
              className="relative cursor-pointer transition-colors"
            >
              <CardContent className="p-4">
                <div className="flex items-start space-x-4">
                  <div>
                    <h3 className="font-medium">Module {index + 1}</h3>
                    <p className="text-sm text-muted-foreground">{topic}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </Card>
  );
}
