import type { LucideIcon } from 'lucide-react';

export interface Service {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  image: string;
  color: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface Differential {
  icon: LucideIcon;
  title: string;
  description: string;
}
