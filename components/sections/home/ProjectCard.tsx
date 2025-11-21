'use client';

import Image from 'next/image';
import { motion, type Variants } from 'motion/react';

import { ProjectCategory, PROJECT_CATEGORY_LABELS } from '@/utils/enums';

export interface Project {
  id: number;
  title: string;
  category: Exclude<ProjectCategory, ProjectCategory.All>;
  image: string;
  description: string;
}

const ANIMATION_CONFIG = {
  item: { duration: 0.5, stagger: 0.1 },
} as const;

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

interface ProjectCardProps {
  project: Project;
  index: number;
  isInView: boolean;
}

export function ProjectCard({ project, index, isInView }: ProjectCardProps) {
  return (
    <motion.div
      variants={scaleIn}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      transition={{
        duration: ANIMATION_CONFIG.item.duration,
        delay: index * ANIMATION_CONFIG.item.stagger,
      }}
      whileHover={{ y: -10 }}
      className="group bg-muted cursor-pointer overflow-hidden rounded-2xl"
    >
      <div className="relative aspect-4/5 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          width={600}
          height={750}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 flex items-end bg-linear-to-t from-black/80 via-black/40 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="text-white">
            <div className="text-primary mb-2 text-xs tracking-widest uppercase">
              {PROJECT_CATEGORY_LABELS[project.category]}
            </div>
            <h3 className="mb-2 text-xl">{project.title}</h3>
            <p className="text-sm text-white/80">{project.description}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
