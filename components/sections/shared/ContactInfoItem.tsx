import type { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';

interface ContactInfoItemProps {
  icon: LucideIcon;
  label: string;
  children: ReactNode;
}

export function ContactInfoItem({
  icon: Icon,
  label,
  children,
}: ContactInfoItemProps) {
  return (
    <div className="flex items-start gap-4">
      <div className="mt-1">
        <Icon className="text-primary h-5 w-5" />
      </div>
      <div>
        <div className="mb-1 text-sm tracking-wide text-white/60 uppercase">
          {label}
        </div>
        {children}
      </div>
    </div>
  );
}
