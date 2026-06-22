export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  stats?: { label: string; value: string }[];
}

export interface Skill {
  name: string;
  category: string;
  level?: number; // percentage
}

export interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
}
