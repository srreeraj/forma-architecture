export interface NavLink {
  label: string;
  href: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface Project {
  id: string;
  name: string;
  location: string;
  type: string;
  year: string;
}

export interface StorySectionProps {
  number: string;
  title: string;
  story: string;
  children?: React.ReactNode;
}