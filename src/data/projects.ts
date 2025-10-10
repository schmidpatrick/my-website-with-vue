export interface Project {
  id: string;
  title: string;
  year: string;
  description: string;
  // Extend this later with images, tags, etc.
}

export const projects: Project[] = [
  {
    id: "smart-transit",
    title: "Smart Transit App",
    year: "2024",
    description:
      "A mobile app for public transportation that improves ticketing and trip planning with real-time data and accessibility features.",
  },
  {
    id: "coffee-dashboard",
    title: "Coffee Roaster Dashboard",
    year: "2023",
    description:
      "A responsive web app that visualizes roasting profiles and quality metrics for small batch roasters.",
  },
  {
    id: "wellness-platform",
    title: "Wellness Platform",
    year: "2022",
    description:
      "A platform that helps users track their habits and progress towards mindfulness and health goals.",
  },
];
