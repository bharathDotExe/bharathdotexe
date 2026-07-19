import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  unishark,
  univault,
  palashtraining,
  suraksha,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "biography",
    title: "Biography",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "certifications",
    title: "Certifications",
  },
  {
    id: "achievements",
    title: "Achievements",
  },
  {
    id: "blog",
    title: "Blog",
  },
  {
    id: "resume",
    title: "Resume",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Web Developer",
    icon: web,
  },
  {
    title: "AI Agent Builder",
    icon: mobile,
  },
  {
    title: "Android Developer",
    icon: backend,
  },
  {
    title: "Startup Founder",
    icon: creator,
  },
];

const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "React JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "MongoDB", icon: mongodb },
  { name: "git", icon: git },
  { name: "figma", icon: figma },
  { name: "docker", icon: docker },
];

const experiences = [
  {
    title: "Founder & Full-Stack Developer",
    company_name: "UniShark",
    icon: creator,
    iconBg: "#383E56",
    date: "2024 - Present",
    points: [
      "A startup ecosystem platform connecting student founders, co-founders, developers, and investors.",
      "Founder-matching, investor discovery, and team-formation systems built end-to-end.",
      "Backend and database architecture owned solo as sole technical founder.",
    ],
  },
  {
    title: "AI Agent Builder",
    company_name: "Suraksha (In Progress)",
    icon: backend,
    iconBg: "#E6DEDD",
    date: "2026 - Present",
    points: [
      "Multi-agent AI system that verifies job/internship offer letters to catch fake recruitment scams targeting students in India.",
      "Building for a national AI Agent Builder hackathon.",
      "Tech: ADK Python, Gemini 2.5 Flash, Google Search tool, custom WHOIS MCP server, Supabase MCP, FastAPI, Next.js.",
    ],
  },
  {
    title: "Android Developer",
    company_name: "Univault",
    icon: mobile,
    iconBg: "#383E56",
    date: "2025",
    points: [
      "On-device secure vault for cards, passwords, and sensitive records with biometric (PIN/fingerprint) authentication.",
      "OCR-based document scanning with camera/gallery/PDF upload and real-time scan animation.",
      "Offline fallback parser for API-independent use.",
    ],
  },
  {
    title: "Full-Stack Web Developer",
    company_name: "Palash Training",
    icon: web,
    iconBg: "#E6DEDD",
    date: "2025 - Present",
    points: [
      "Live, database-driven training and education platform (palashtraining.com) with course, blog, and community management.",
      "Admin dashboard for content/user management and a blog system supporting article creation, editing, and media uploads.",
      "Full technical SEO: XML sitemaps, robots.txt, canonical URLs, Schema.org structured data, Open Graph tags, Core Web Vitals, Google Search Console/Analytics integration.",
      "Now the client's primary web presence.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Bharath built our entire platform from scratch with SEO in mind. Our traffic and leads have grown significantly.",
    name: "Client",
    designation: "Owner",
    company: "Palash Training",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  }
];

const projects = [
  {
    name: "UniShark",
    description:
      "A startup ecosystem platform connecting student founders, co-founders, developers, and investors. Founder-matching, investor discovery, and team-formation systems built end-to-end. Backend and database architecture owned solo.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "supabase", color: "green-text-gradient" },
      { name: "python", color: "pink-text-gradient" },
    ],
    image: unishark,
    source_code_link: "https://github.com/bharathDotExe/unishark",
  },
  {
    name: "Suraksha",
    description:
      "Multi-agent AI system that verifies job/internship offer letters to catch fake recruitment scams targeting students in India. (In Progress for AI Hackathon)",
    tags: [
      { name: "gemini", color: "blue-text-gradient" },
      { name: "fastapi", color: "green-text-gradient" },
      { name: "nextjs", color: "pink-text-gradient" },
    ],
    image: suraksha,
    source_code_link: "https://github.com/bharathDotExe",
  },
  {
    name: "Univault",
    description:
      "On-device secure vault for cards, passwords, and sensitive records with biometric authentication. Features OCR-based document scanning and offline parsing.",
    tags: [
      { name: "kotlin", color: "blue-text-gradient" },
      { name: "jetpack-compose", color: "green-text-gradient" },
      { name: "roomdb", color: "pink-text-gradient" },
    ],
    image: univault,
    source_code_link: "https://github.com/bharathDotExe/univault",
  },
  {
    name: "Palash Training",
    description:
      "Live, database-driven training and education platform with course, blog, and community management. Features full technical SEO and admin dashboard.",
    tags: [
      { name: "php", color: "blue-text-gradient" },
      { name: "mysql", color: "green-text-gradient" },
      { name: "seo", color: "pink-text-gradient" },
    ],
    image: palashtraining,
    source_code_link: "https://github.com/bharathDotExe/Palash-training-website",
    live_site_link: "https://palashtraining.com",
  },
];

const certifications = [
  {
    name: "Placeholder: Google Data Analytics",
    issuer: "Google",
    date: "2025",
    link: "#",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Placeholder: AWS Certified Cloud Practitioner",
    issuer: "AWS",
    date: "2025",
    link: "#",
    image: "https://via.placeholder.com/150",
  }
];

const achievements = [
  {
    title: "Winner - National AI Hackathon",
    organization: "HackIndia",
    date: "2026",
    description: "Built an AI system to verify job offer letters.",
  },
  {
    title: "Top Contributor",
    organization: "Open Source Project",
    date: "2025",
    description: "Contributed key features to popular open-source repository.",
  }
];

const blogPosts = [
  {
    title: "Building an AI Agent with Python and Next.js",
    date: "July 2026",
    category: "AI",
    summary: "Learn how to build a scalable multi-agent architecture.",
    link: "/blog/ai-agent-python-nextjs",
  },
  {
    title: "Mastering Technical SEO for React Apps",
    date: "June 2026",
    category: "SEO",
    summary: "A deep dive into JSON-LD, react-helmet, and static sitemaps.",
    link: "/blog/seo-react-apps",
  }
];

const biographyTimeline = [
  {
    year: "2024",
    title: "Started Serious Programming",
    description: "Began my journey into software development, learning Python and full-stack web technologies.",
  },
  {
    year: "2025",
    title: "Built Multiple Projects",
    description: "Launched UniShark, Univault, and Palash Training, gaining extensive experience in frontend, backend, and Android development.",
  },
  {
    year: "2026",
    title: "Learning Cloud Computing, Docker, Kubernetes, Backend, AI",
    description: "Expanding my expertise into cloud infrastructure, containerization, and artificial intelligence for scalable, intelligent systems.",
  },
  {
    year: "Future",
    title: "Vision",
    description: "Aiming to build cutting-edge AI systems and highly scalable cloud architectures that solve real-world problems globally.",
  }
];

export { services, technologies, experiences, testimonials, projects, certifications, achievements, blogPosts, biographyTimeline };
