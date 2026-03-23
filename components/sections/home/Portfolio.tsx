'use client';

import { useState, useRef, useMemo } from 'react';
import {
  motion,
  useInView,
  AnimatePresence,
  type Variants,
} from 'motion/react';

import { ProjectCategory } from '@/utils/enums';

import { ProjectCard, type Project } from './ProjectCard';
import { FilterButton } from './FilterButton';
import { PORTFOLIO_PROJECTS, PORTFOLIO_CATEGORIES } from './data';

const ANIMATION_CONFIG = {
  viewport: {
    once: true,
    margin: '-100px',
  },
  transitions: {
    header: { duration: 0.6 },
    filters: { duration: 0.6, delay: 0.2 },
    grid: { duration: 0.3 },
    item: { duration: 0.5, stagger: 0.1 },
  },
} as const;

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const fadeInUpSmall: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>(
    ProjectCategory.All,
  );
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, ANIMATION_CONFIG.viewport);

  const filteredProjects = useMemo(() => {
    if (activeCategory === ProjectCategory.All) {
      const categoriesWithProjects = new Map<ProjectCategory, Project>();

      for (const project of PORTFOLIO_PROJECTS) {
        if (!categoriesWithProjects.has(project.category) && project.category !== ProjectCategory.Other) {
          categoriesWithProjects.set(project.category, project);
        }
      }

      return Array.from(categoriesWithProjects.values());
    }

    return PORTFOLIO_PROJECTS.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="portfolio" className="bg-white py-20 lg:py-32" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          transition={ANIMATION_CONFIG.transitions.header}
          className="mb-12 max-w-2xl"
        >
          <div className="mb-6">
            <span className="text-primary text-sm tracking-widest uppercase font-bold">
              Projetos
            </span>
          </div>
          <h2 className="text-foreground mb-6 text-3xl tracking-tight sm:text-4xl lg:text-5xl">
            Nossos Projetos
          </h2>
          <p className="text-muted-foreground">
            Uma seleção dos nossos trabalhos mais recentes que exemplificam
            nossa abordagem única ao design.
          </p>
        </motion.div>

        <motion.div
          variants={fadeInUpSmall}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          transition={ANIMATION_CONFIG.transitions.filters}
          className="mb-12 flex flex-wrap gap-3"
        >
          {PORTFOLIO_CATEGORIES.map((category) => (
            <FilterButton
              key={category}
              category={category}
              isActive={activeCategory === category}
              onClick={() => setActiveCategory(category)}
            />
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={ANIMATION_CONFIG.transitions.grid}
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                isInView={isInView}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
