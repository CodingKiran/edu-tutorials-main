import { Card } from "@/components/ui/card";
import { Folder } from "lucide-react";
import Link from "next/link";
import { resourceCategories } from "@/lib/resource-data";

export default function ResourcesPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold mb-8">Free Resources</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resourceCategories.map((category) => (
          <Link key={category.slug} href={`/resources/${category.slug}`}>
            <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Folder className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold">{category.title}</h2>
                  <p className="text-muted-foreground mt-1">
                    {category.description}
                  </p>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
