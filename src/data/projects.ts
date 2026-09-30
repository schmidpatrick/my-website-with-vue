export interface Project {
  id: string;
  title: string;
  description: string;
  role: string;
  focus: string;
  scope: string;
  tools: string;
  year: string;
  read: number;
  path: string;
  thumbnail?: string;
}

export const projects: Project[] = [
  {
    id: "mobility-app",
    title: "Do we really need another public transport app?",
    description: "A different look at a redesign of a public transport app.",
    role: "Product Designer",
    focus: "Journey planning, Information hierarchy",
    scope: "Concept redesign",
    tools: "Figma, Miro",
    year: "2025",
    read: 5,
    path: "/projects/mobility-app",
  },
];
