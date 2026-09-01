export type Project = {
  slug: string;
  number: string;
  title: string;
  category: string;
  year: string;
  image: string;
  preview: "desktop" | "mobile";
  description: string;
  problem: string;
  solution: string;
  stack: string[];
};

export const projects = [
  {
    slug: "mj-trans-bali",
    number: "01",
    title: "MJ Trans Bali",
    category: "Full-Stack Web Platform",
    year: "2026",
    image: "/images/projects/mj-trans-bali.png",
    preview: "desktop",
    description:
      "A transportation booking platform designed to simplify vehicle rental services in Bali.",
    problem:
      "Customers needed a simpler way to discover vehicles, understand rental options, and complete booking transactions without a fragmented process.",
    solution:
      "Built a full-stack booking platform with a focused customer experience, backend services, inventory workflows, and payment integration.",
    stack: [
      "Next.js",
      "Laravel",
      "MySQL",
      "Midtrans",
    ],
  },

  {
    slug: "stit-fatahilah-lms",
    number: "02",
    title: "STIT Fatahilah LMS",
    category: "Full-Stack Web Application",
    year: "2026",
    image: "/images/projects/stit-lms.png",
    preview: "desktop",
    description:
      "A learning management system that centralizes academic activities for students, lecturers, and administrators.",
    problem:
      "Academic activities and learning workflows needed one centralized platform with clear access for each institutional role.",
    solution:
      "Developed role-based LMS features for course management, learning activities, academic information, and administration workflows.",
    stack: [
      "React",
      "Express.js",
      "PostgreSQL",
      "Prisma",
    ],
  },

  {
    slug: "gomuter",
    number: "03",
    title: "GoMuter",
    category: "Mobile App & Backend",
    year: "2026",
    image: "/images/projects/Gomuter.jpeg",
    preview: "mobile",
    description:
      "A mobile application and backend platform designed to support practical mobility services through a focused user experience.",
    problem:
      "Users needed a mobile-first flow that could connect everyday mobility needs with reliable data and backend services.",
    solution:
      "Created a Flutter application backed by REST APIs, persistent data, and cloud services for a cohesive end-to-end workflow.",
    stack: [
      "Flutter",
      "Django REST",
      "PostgreSQL",
      "Supabase",
    ],
  },
] satisfies Project[];
