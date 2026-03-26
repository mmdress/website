import type { LucideIcon } from 'lucide-react';

export interface HistoryImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface HistoryContent {
  label: string;
  title: string;
  titleHighlight: string;
  paragraphs: readonly string[];
}

export interface MissionVisionItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface CoreValue {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface AboutStat {
  icon: LucideIcon;
  value: string;
  label: string;
}

export interface ValuesSectionHeader {
  label: string;
  title: string;
  description: string;
}
