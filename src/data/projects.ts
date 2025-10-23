export interface Project {
  id: string;
  year: string;
  role: string;
  timeToRead: number;
  title: string;
  description: string;
  thumbnail?: string;
  path?: string;
}

export const projects: Project[] = [
  {
    id: "mobility-app",
    year: "2025",
    role: "Product Designer",
    timeToRead: 5,
    title: "KVB App Redesign — Restoring Trust in Everyday Mobility",
    description:
      "A redesign of the KVB public transport app, exploring how thoughtful interface design and visual clarity can rebuild trust in an everyday mobility tool.",
    path: "/projects/mobility-app",
  },
  {
    id: "example",
    year: "2025",
    role: "Rolle",
    timeToRead: 5,
    title: "Example Project Page",
    description:
      "A mobile app for public transportation that improves ticketing and trip planning with real-time data and accessibility features.",
    path: "/projects/example",
  },
  {
    id: "coffee-dashboard",
    year: "2023",
    role: "Rolle",
    timeToRead: 5,
    title: "Coffee Roaster Dashboard",
    description:
      "A responsive web app that visualizes roasting profiles and quality metrics for small batch roasters.",
  },
  {
    id: "wellness-platform",
    year: "2022",
    role: "Rolle",
    timeToRead: 5,
    title: "Wellness Platform",
    description:
      "A platform that helps users track their habits and progress towards mindfulness and health goals.",
  },
];
