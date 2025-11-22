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

const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Residência Minimalista',
    category: ProjectCategory.Residential,
    image:
      'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwbGl2aW5nJTIwcm9vbXxlbnwxfHx8fDE3NjA3ODk4NDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Design clean com linhas puras e funcionalidade',
  },
  {
    id: 2,
    title: 'Suite Contemporânea',
    category: ProjectCategory.Residential,
    image:
      'https://images.unsplash.com/photo-1704428382583-c9c7c1e55d94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBiZWRyb29tfGVufDF8fHx8MTc2MDgwNTY0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Elegância e conforto em perfeita harmonia',
  },
  {
    id: 3,
    title: 'Cozinha Moderna',
    category: ProjectCategory.Residential,
    image:
      'https://images.unsplash.com/photo-1682888813795-192fca4a10d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwZGVzaWdufGVufDF8fHx8MTc2MDczMDM0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Sofisticação e praticidade no dia a dia',
  },
  {
    id: 4,
    title: 'Detalhes Arquitetônicos',
    category: ProjectCategory.Architecture,
    image:
      'https://images.unsplash.com/photo-1696401680571-f6e9986026d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmFsJTIwZGV0YWlsfGVufDF8fHx8MTc2MDc2Njk5Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Precisão em cada elemento do projeto',
  },
  {
    id: 5,
    title: 'Espaço Integrado',
    category: ProjectCategory.Residential,
    image:
      'https://images.unsplash.com/photo-1572457598110-2e060c4588ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjA3NTM3NzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Ambientes que conversam entre si',
  },
  {
    id: 6,
    title: 'Design de Luxo',
    category: ProjectCategory.Interiors,
    image:
      'https://images.unsplash.com/photo-1581784878214-8d5596b98a01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBpbnRlcmlvciUyMGRlc2lnbnxlbnwxfHx8fDE3NjA4MDU2NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Sofisticação em cada detalhe',
  },
] as const;

const CATEGORIES: ProjectCategory[] = [
  ProjectCategory.All,
  ProjectCategory.Residential,
  ProjectCategory.Interiors,
  ProjectCategory.Architecture,
];

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
      return PROJECTS;
    }
    return PROJECTS.filter((project) => project.category === activeCategory);
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
            <span className="text-primary text-sm tracking-widest uppercase">
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
          {CATEGORIES.map((category) => (
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
