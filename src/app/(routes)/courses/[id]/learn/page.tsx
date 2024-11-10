"use client";
import { Course } from "@/lib/course-data";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ArrowLeft, CreditCard } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function LearnPage({ params }: { params: { id: string } }) {
  const course = Course.find((c) => c.id === params.id);

  const [isDialogOpen, setDialogOpen] = useState(false);

  const { data: session } = useSession();
  const router = useRouter();

  if (!course) {
    return null;
  }

  const handlePayment = () => {
    if (!session) {
      setDialogOpen(true);
      return;
    } else {
      router.push(`/courses/${course.id}/learn/payment`);
    }
  };

  const handleLogin = () => {
    signIn("google");
    setDialogOpen(false); // Close the dialog after redirecting to login
  };

  return (
    <div className="space-y-6 mt-6 px-4">
      <div className="mb-6">
        <Link href={`/courses/${course.id}`}>
          <Button variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to {course.title}
          </Button>
        </Link>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-16rem)]">
        {/* Module List */}
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

        {/* Video Player */}
        <Card className="lg:col-span-2 h-full">
          <div className="relative aspect-video w-full h-full">
            <iframe
              className="w-full h-full rounded-sm "
              src="https://www.youtube.com/embed/deNzYrTvqCs?si=zeMEE-6ireE0CGQp"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </Card>
      </div>
      <Card className="bg-gradient-to-r from-primary/10 via-primary/5 to-background border-primary/20">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <CreditCard className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Get Full Access</h3>
                <p className="text-muted-foreground">
                  Unlock all modules and features
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                {/* <p className="text-2xl font-bold">${course.price}</p> */}
                <p className="text-sm text-muted-foreground">
                  One-time payment
                </p>
              </div>
              <Button onClick={handlePayment}>Payment</Button>
              <AlertDialog
                open={isDialogOpen}
                onOpenChange={() => setDialogOpen(false)}
              >
                <AlertDialogPortal>
                  <AlertDialogOverlay />
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Login Required</AlertDialogTitle>
                      <AlertDialogDescription>
                        You need to be logged in to proceed with the payment.
                        Would you like to log in now?
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <div className="flex justify-end">
                      <AlertDialogCancel onClick={() => setDialogOpen(false)}>
                        Cancel
                      </AlertDialogCancel>
                      <AlertDialogAction onClick={handleLogin}>
                        Log In
                      </AlertDialogAction>
                    </div>
                  </AlertDialogContent>
                </AlertDialogPortal>
              </AlertDialog>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
