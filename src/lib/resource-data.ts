export interface Resource {
  title: string;
  description: string;
  type: string;
  url: string;
  pdfs?: {
    title: string;
    description: string;
    fileUrl: string;
    fileSize: string;
  }[];
}

export interface Subcategory {
  title: string;
  description: string;
  slug: string;
  resources: Resource[];
}

export interface ResourceCategory {
  title: string;
  description: string;
  slug: string;
  subcategories: Subcategory[];
}

export const resourceCategories: ResourceCategory[] = [
  {
    title: "Previous Exam Question Papers",
    description: "Previous Exam Question Papers",
    slug: "exam-papers",
    subcategories: [
      {
        title: "M.Com",
        description: "Exam papers for M.Com by year wise",
        slug: "m-com",
        resources: [
          {
            title: "2017",
            description: "Complete UI kit for modern web applications",
            type: "m-com",
            url: "https://www.figma.com",
            pdfs: [
              {
                title: "Accounting - 2017",
                description: "Detailed guide for all UI components",
                fileUrl: "/pdfs/ui-components-guide.pdf",
                fileSize: "2.8 MB",
              },
              {
                title: "Design System Documentation",
                description: "Implementation guidelines and best practices",
                fileUrl: "/pdfs/design-system-docs.pdf",
                fileSize: "3.2 MB",
              },
            ],
          },
        ],
      },
      {
        title: "Icon Packs",
        description: "High-quality icon collections",
        slug: "icons",
        resources: [
          {
            title: "Essential Icons Pack",
            description: "Versatile icon set for modern interfaces",
            type: "Icons",
            url: "https://icons.example.com",
            pdfs: [
              {
                title: "Icon Usage Guidelines",
                description: "Best practices for implementing icons",
                fileUrl: "/pdfs/icon-guidelines.pdf",
                fileSize: "1.5 MB",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "Development Tools",
    description: "Programming resources, libraries, and frameworks",
    slug: "development",
    subcategories: [
      {
        title: "Frontend Frameworks",
        description: "Modern frontend development frameworks",
        slug: "frameworks",
        resources: [
          {
            title: "Next.js Resources",
            description: "Complete guide to Next.js development",
            type: "Framework",
            url: "https://nextjs.org",
            pdfs: [
              {
                title: "Next.js Best Practices",
                description: "Advanced patterns and optimization techniques",
                fileUrl: "/pdfs/nextjs-best-practices.pdf",
                fileSize: "2.4 MB",
              },
              {
                title: "Server Components Guide",
                description: "Deep dive into React Server Components",
                fileUrl: "/pdfs/server-components.pdf",
                fileSize: "1.8 MB",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "Productivity Tools",
    description: "Apps and tools to boost your workflow",
    slug: "productivity",
    subcategories: [
      {
        title: "Task Management",
        description: "Tools for managing tasks and projects",
        slug: "task-management",
        resources: [
          {
            title: "Project Management Guide",
            description: "Comprehensive project management methodologies",
            type: "Guide",
            url: "https://example.com/pm-guide",
            pdfs: [
              {
                title: "Agile Methodology Guide",
                description: "Complete guide to Agile project management",
                fileUrl: "/pdfs/agile-guide.pdf",
                fileSize: "2.1 MB",
              },
            ],
          },
        ],
      },
    ],
  },
];
