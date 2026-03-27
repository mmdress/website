'use client';

import { useState } from 'react';

import { ProjectCategory } from '@/utils/enums';

import { CategoryFilter } from './CategoryFilter';
import { CatalogProjectCard } from './CatalogProjectCard';
import type { CatalogProject } from './types';
import { PORTFOLIO_PROJECTS } from '../home/data';

const projectsData: CatalogProject[] = [
  ...PORTFOLIO_PROJECTS.map((project) => ({
    ...project,
    category: project.category as Exclude<ProjectCategory, ProjectCategory.All>,
    location: '',
    year: '',
    area: '',
    tags: [],
  })),
];

const CATEGORIES: ProjectCategory[] = [
  ProjectCategory.All,
  ProjectCategory.Kitchen,
  ProjectCategory.LivingRoom,
  ProjectCategory.DiningRoom,
  ProjectCategory.Bedroom,
  ProjectCategory.Bathroom,
  ProjectCategory.Office,
];

export function ProjectsCatalog() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>(
    ProjectCategory.All,
  );

  const filteredProjects =
    activeCategory === ProjectCategory.All
      ? projectsData
      : projectsData.filter((project) => project.category === activeCategory);


  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <CategoryFilter
          categories={CATEGORIES}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        {/* Projects Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <CatalogProjectCard
              key={project.id}
              project={project}

            />
          ))}
        </div>
      </div>
    </section>
  );
}
