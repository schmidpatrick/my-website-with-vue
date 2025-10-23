export interface Project {
  id: string;
  year: string;
  title: string;
  description: string;
  thumbnail?: string;
  path?: string;
}

export const projects: Project[] = [
  {
    id: "mobility-app",
    year: "2025",
    title: "Public Transport App Redesign",
    description:
      "A mobile app for public transportation that improves ticketing and trip planning with real-time data and accessibility features.",
    path: "/projects/mobility-app",
  },
  {
    id: "example",
    year: "2025",
    title: "Example Project Page",
    description:
      "A mobile app for public transportation that improves ticketing and trip planning with real-time data and accessibility features.",
    path: "/projects/example",
  },
  {
    id: "coffee-dashboard",
    year: "2023",
    title: "Coffee Roaster Dashboard",
    description:
      "A responsive web app that visualizes roasting profiles and quality metrics for small batch roasters.",
  },
  {
    id: "wellness-platform",
    year: "2022",
    title: "Wellness Platform",
    description:
      "A platform that helps users track their habits and progress towards mindfulness and health goals.",
  },
];
