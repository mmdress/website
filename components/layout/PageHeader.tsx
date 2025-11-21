import Image from 'next/image';
import { ReactNode } from 'react';

import { cn } from '@/utils/functions';

interface PageHeaderProps {
  title: ReactNode;
  description: string;
  badge?: string;
  backgroundImage?: {
    src: string;
    alt: string;
  };
  className?: string;
}

export function PageHeader({
  title,
  description,
  badge,
  backgroundImage,
  className,
}: PageHeaderProps) {
  const hasBackgroundImage = !!backgroundImage;

  return (
    <header
      className={cn(
        'relative flex max-h-104 items-center overflow-hidden bg-zinc-800 py-20 text-white',
        className,
      )}
    >
      {hasBackgroundImage && (
        <div className="absolute inset-0">
          <Image
            src={backgroundImage.src}
            alt={backgroundImage.alt}
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-r from-zinc-800 via-zinc-800/90 to-transparent" />
        </div>
      )}

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {badge && (
            <div className="mb-6 flex items-center gap-3">
              <div className="bg-primary h-px w-12" />
              <span className="text-primary text-sm tracking-[0.3em] uppercase">
                {badge}
              </span>
            </div>
          )}

          <h1 className="mb-6 text-5xl tracking-tight sm:text-6xl lg:text-7xl">
            {title}
          </h1>

          <p className="text-xl leading-relaxed text-white/70">{description}</p>
        </div>
      </div>
    </header>
  );
}
