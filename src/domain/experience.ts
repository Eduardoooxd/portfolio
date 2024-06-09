export interface Experience {
  title: string;
  location: string;
  company?: {
    name: string;
    website: string;
  };
  description: string;
  icon: React.ReactElement;
  date: string;
  skills: string[];
}
