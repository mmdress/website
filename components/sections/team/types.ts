import { type LucideIcon } from 'lucide-react';

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  education?: string;
  specialties: string[];
  bio: string;
}

export interface BrandPartner {
  name: string;
  logo: string;
}

export interface TeamValue {
  icon: LucideIcon;
  title: string;
  description: string;
}

