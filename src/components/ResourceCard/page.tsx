"use client";

import { Resource } from "@/lib/resource-data";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Download, ExternalLink } from "lucide-react";

interface ResourceCardProps {
  resource: Resource;
}

export function ResourceCard({ resource }: ResourceCardProps) {
  return (
    <Card className="p-6">
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-semibold">{resource.title}</h3>
          <p className="text-muted-foreground mt-1">{resource.description}</p>
        </div>
        
        <div className="flex items-center gap-2">
          <Button variant="outline" asChild>
            <a href={resource.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
              Visit Resource
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </div>

        {resource.pdfs && resource.pdfs.length > 0 && (
          <Accordion type="single" collapsible>
            <AccordionItem value="downloads">
              <AccordionTrigger>Downloads</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-3 pt-2">
                  {resource.pdfs.map((pdf, index) => (
                    <div key={index} className="flex items-start justify-between gap-4">
                      <div>
                        <h4 className="font-medium">{pdf.title}</h4>
                        <p className="text-sm text-muted-foreground">{pdf.description}</p>
                        <p className="text-sm text-muted-foreground mt-1">{pdf.fileSize}</p>
                      </div>
                      <Button variant="ghost" size="sm" asChild>
                        <a href={pdf.fileUrl} download className="inline-flex items-center">
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </a>
                      </Button>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        )}
      </div>
    </Card>
  );
}