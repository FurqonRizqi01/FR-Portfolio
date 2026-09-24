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
  githubUrl?: string;
  liveUrl?: string;
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
    githubUrl: "https://github.com/rizkifauzi123/MJ_Rent_Cars.git",
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
    githubUrl: "https://github.com/FurqonRizqi01/lms-stt-fatahillah.git",
  },

  {
    slug: "gomuter",
    number: "03",
    title: "GoMuter",
    category: "Mobile App & Backend",
    year: "2026",
    image: "/images/projects/Gomuter.jpg",
    preview: "desktop",
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
    githubUrl: "https://github.com/FurqonRizqi01/GoMuter.git",
  },

  {
    slug: "smart-home-energy",
    number: "04",
    title: "Smart Home Energy",
    category: "Independent Study AI Platform",
    year: "2024",
    image: "/images/projects/Smart-Home-Energy.png",
    preview: "desktop",
    description:
      "An AI-assisted platform for exploring household electricity usage through conversational analysis of uploaded CSV energy data.",
    problem:
      "Household energy datasets can be difficult to understand without manually filtering rows, comparing appliances, and interpreting patterns across a CSV file.",
    solution:
      "Built a React and Go application that accepts household energy CSV data and lets users ask questions about their electricity usage. The analysis workflow now uses a Qwen model through Hugging Face after replacing the initial Tapas-based approach with a more capable conversational model.",
    stack: [
      "React",
      "Golang",
      "Qwen",
      "Hugging Face API",
      "CSV Analysis",
    ],
    // Replace these placeholder URLs with the real repository and deployment.
    githubUrl: "https://github.com/FurqonRizqi01/smart-home-energy.git",
  },

  {
    slug: "movie-app",
    number: "05",
    title: "Movie App",
    category: "Frontend Development Project",
    year: "2023",
    image: "/images/projects/Movie-App.png",
    preview: "desktop",
    description:
      "A React movie discovery interface that presents currently showing titles and their public metadata from a movie REST API.",
    problem:
      "Movie information from an external API needed to be transformed into a clear, responsive interface that made currently showing titles easy to browse.",
    solution:
      "Created an academic frontend project in React that fetches and renders movie titles and related metadata from a REST API. The application is a discovery catalog only and does not host, stream, or distribute movies.",
    stack: [
      "React",
      "REST API",
      "JavaScript",
      "Responsive UI",
    ],
    // Replace these placeholder URLs with the real repository and deployment.
    githubUrl: "https://github.com/FurqonRizqi01/PemrogramanFrontend/tree/MovieApps/Movie-Apps",
    liveUrl: "https://movie-app-lime-delta-97.vercel.app/",
  },
] satisfies Project[];
