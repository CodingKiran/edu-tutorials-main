"use client";
import { useState } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";

import { Course } from "@/lib/course-data";
import { ArrowLeft, CreditCard } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import VideoPlayer from "@/components/Small/LearnPage/VideoPlayer";
import LoginDialogOpen from "@/components/Small/LearnPage/AlertComponent";
import ModuleList from "@/components/Small/LearnPage/ModuleList";

export default function LearnPage({ params }: { params: { id: string } }) {
  const course = Course.find((c) => c.id === params.id);

  const { data: session } = useSession();

  const [isDialogOpen, setDialogOpen] = useState(false);

  if (!course) {
    return null;
  }

  const handlePayment = async () => {
    if (!session) {
      setDialogOpen(true);
      return;
    }
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
        <ModuleList params={params} />
        <VideoPlayer />
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
                <p className="text-2xl font-bold">${course.price}</p>
                <p className="text-sm text-muted-foreground">
                  One-time payment
                </p>
              </div>
              <Button onClick={handlePayment}>Payment</Button>
              <LoginDialogOpen
                isDialogOpen={isDialogOpen}
                setDialogOpen={setDialogOpen}
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
