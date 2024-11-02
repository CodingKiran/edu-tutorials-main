import { notFound } from "next/navigation";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Folder } from "lucide-react";
import Link from "next/link";
import { resourceCategories } from "@/lib/resource-data";

export function generateStaticParams() {
  return resourceCategories.map((category) => ({
    category: category.slug,
  }));
}

export default function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const category = resourceCategories.find((c) => c.slug === params.category);

  if (!category) {
    notFound();
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-8">
        <Link
          href="/resources"
          className="inline-flex items-center text-primary hover:text-primary/80"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Categories
        </Link>
        <h1 className="text-4xl font-bold mt-4">{category.title}</h1>
        <p className="text-muted-foreground mt-2">{category.description}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {category.subcategories.map((subcategory) => (
          <Link
            key={subcategory.slug}
            href={`/resources/${category.slug}/${subcategory.slug}`}
          >
            <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Folder className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold">{subcategory.title}</h2>
                  <p className="text-muted-foreground mt-1">
                    {subcategory.description}
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
