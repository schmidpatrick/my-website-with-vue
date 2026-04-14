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
    title: "Restoring trust in a public transport app",
    description:
      "How clearer journey planning can rebuild confidence in a mobility app",
    role: "Product Designer",
    focus: "Confident route selection",
    scope: "Concept redesign",
    tools: "Figma, Miro",
    year: "2025",
    read: 5,
    path: "/projects/mobility-app",
  },
];
