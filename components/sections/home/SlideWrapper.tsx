import Image from 'next/image';
import { ReactNode } from 'react';

interface SlideWrapperProps {
  src: string;
  alt: string;
  overlayOpacity?: string;
  priority?: boolean;
  children: ReactNode;
}

export function SlideWrapper({
  src,
  alt,
  overlayOpacity = 'bg-black/30',
  priority = false,
  children,
}: SlideWrapperProps) {
  return (
    <div className="relative h-full w-full">
      <Image
        src={src}
        alt={alt}
        width={1536}
        height={1024}
        className="h-full w-full object-cover"
        priority={priority}
      />
      <div className={`absolute inset-0 ${overlayOpacity}`} />
      {children}
    </div>
  );
}
