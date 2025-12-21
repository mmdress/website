import type { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';

export interface ContactInfo {
  icon: LucideIcon;
  label: string;
  content: ReactNode;
  href?: string;
}

export interface InfoCard {
  icon: LucideIcon;
  title: string;
  description: string;
}
