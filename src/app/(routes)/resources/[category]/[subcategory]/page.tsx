import { notFound } from "next/navigation";
import { ResourceCard } from "@/components/ResourceCard/page";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { resourceCategories } from "@/lib/resource-data";

export function generateStaticParams() {
  const paths = [];
  for (const category of resourceCategories) {
    for (const subcategory of category.subcategories) {
      paths.push({
        category: category.slug,
        subcategory: subcategory.slug,
      });
    }
  }
  return paths;
}

export default function SubcategoryPage({
  params,
}: {
  params: { category: string; subcategory: string };
}) {
  const category = resourceCategories.find((c) => c.slug === params.category);
  const subcategory = category?.subcategories.find(
    (s) => s.slug === params.subcategory
  );

  if (!category || !subcategory) {
    notFound();
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-8">
        <Link
          href={`/resources/${category.slug}`}
          className="inline-flex items-center text-primary hover:text-primary/80"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to {category.title}
        </Link>
        <h1 className="text-4xl font-bold mt-4">{subcategory.title}</h1>
        <p className="text-muted-foreground mt-2">{subcategory.description}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {subcategory.resources.map((resource, index) => (
          <ResourceCard key={index} resource={resource} />
        ))}
      </div>
    </div>
  );
}
