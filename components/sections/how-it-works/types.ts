export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface Benefit {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}
