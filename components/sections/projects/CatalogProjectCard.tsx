import { Calendar, MapPin, Tag } from 'lucide-react';
import Image from 'next/image';

import { PROJECT_CATEGORY_LABELS } from '@/utils/enums';

import type { CatalogProject } from './types';

interface CatalogProjectCardProps {
  project: CatalogProject;
  onClick: () => void;
}

export function CatalogProjectCard({
  project,
  onClick,
}: CatalogProjectCardProps) {
  return (
    <div className="group cursor-pointer" onClick={onClick}>
      <div className="bg-muted relative mb-6 aspect-4/5 overflow-hidden rounded-lg">
        <Image
          src={project.image}
          alt={project.title}
          width={600}
          height={750}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-black/90 via-black/50 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="text-white">
            <div className="text-primary mb-2 text-xs tracking-widest uppercase">
              {PROJECT_CATEGORY_LABELS[project.category]}
            </div>
            <h3 className="mb-2 text-xl">{project.title}</h3>
            <div className="flex items-center gap-4 text-sm text-white/80">
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                <span>{project.location}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{project.year}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="text-primary mb-2 flex items-center gap-2 text-xs tracking-wide uppercase">
          <Tag className="h-3 w-3" />
          <span>{PROJECT_CATEGORY_LABELS[project.category]}</span>
        </div>
        <h3 className="text-foreground group-hover:text-primary/80 mb-2 text-xl transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground mb-3 text-sm leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, idx) => (
            <span
              key={idx}
              className="bg-accent/80 text-muted-foreground px-3 py-1 text-xs tracking-wide uppercase"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
