'use client';

import { useState } from 'react';

import { ProjectCategory } from '@/utils/enums';

import { CategoryFilter } from './CategoryFilter';
import { CatalogProjectCard } from './CatalogProjectCard';
import type { CatalogProject } from './types';

const projectsData: CatalogProject[] = [
  {
    id: 1,
    title: 'Residência Alto Padrão',
    category: ProjectCategory.Residential,
    location: 'São Paulo, SP',
    year: '2024',
    area: '450m²',
    image:
      'https://images.unsplash.com/photo-1758448755952-42b404bc6f39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjByZXNpZGVudGlhbCUyMHByb2plY3R8ZW58MXx8fHwxNzYxMTc1OTEyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description:
      'Residência moderna que combina linhas contemporâneas com conforto e sofisticação. Projeto completo de arquitetura e interiores.',
    tags: ['Arquitetura', 'Interiores', 'Marcenaria'],
  },
  {
    id: 2,
    title: 'Residência Minimalista',
    category: ProjectCategory.Residential,
    location: 'Campinas, SP',
    year: '2024',
    area: '320m²',
    image:
      'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwbGl2aW5nJTIwcm9vbXxlbnwxfHx8fDE3NjA3ODk4NDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description:
      'Design clean com linhas puras e funcionalidade. Ambientes integrados que valorizam a luz natural e a simplicidade elegante.',
    tags: ['Interiores', 'Minimalismo', 'Design'],
  },
  {
    id: 3,
    title: 'Hotel Boutique',
    category: ProjectCategory.Commercial,
    location: 'Rio de Janeiro, RJ',
    year: '2023',
    area: '1200m²',
    image:
      'https://images.unsplash.com/photo-1695706807850-8c66b24b3413?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3RlbCUyMGxvYmJ5fGVufDF8fHx8MTc2MTA5Njg3NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description:
      'Projeto de hotel boutique com lobby sofisticado e ambientes que transmitem exclusividade e conforto aos hóspedes.',
    tags: ['Comercial', 'Hospitalidade', 'Luxo'],
  },
  {
    id: 4,
    title: 'Suite Contemporânea',
    category: ProjectCategory.Residential,
    location: 'São Paulo, SP',
    year: '2024',
    area: '85m²',
    image:
      'https://images.unsplash.com/photo-1704428382583-c9c7c1e55d94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBiZWRyb29tfGVufDF8fHx8MTc2MDgwNTY0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description:
      'Suite master elegante com design contemporâneo, combinando conforto e estilo em um espaço de descanso perfeito.',
    tags: ['Interiores', 'Dormitórios', 'Conforto'],
  },
  {
    id: 5,
    title: 'Escritório Corporativo',
    category: ProjectCategory.Commercial,
    location: 'São Paulo, SP',
    year: '2023',
    area: '650m²',
    image:
      'https://images.unsplash.com/photo-1703355685626-57abd3bfbd95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBvZmZpY2UlMjBzcGFjZXxlbnwxfHx8fDE3NjExMTkyMTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description:
      'Ambiente corporativo moderno que promove produtividade e bem-estar, com áreas colaborativas e espaços privados.',
    tags: ['Comercial', 'Corporativo', 'Produtividade'],
  },
  {
    id: 6,
    title: 'Cozinha Gourmet',
    category: ProjectCategory.Residential,
    location: 'Barueri, SP',
    year: '2024',
    area: '45m²',
    image:
      'https://images.unsplash.com/photo-1682888813795-192fca4a10d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwZGVzaWdufGVufDF8fHx8MTc2MDczMDM0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description:
      'Cozinha moderna com ilha central, acabamentos premium e funcionalidade para quem adora cozinhar e receber.',
    tags: ['Interiores', 'Cozinha', 'Marcenaria'],
  },
  {
    id: 7,
    title: 'Restaurante Premium',
    category: ProjectCategory.Commercial,
    location: 'São Paulo, SP',
    year: '2023',
    area: '280m²',
    image:
      'https://images.unsplash.com/photo-1759419038843-29749ac4cd2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwcmVzdGF1cmFudCUyMGludGVyaW9yfGVufDF8fHx8MTc2MTA4NzMyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description:
      'Restaurante elegante com atmosfera sofisticada, iluminação cuidadosa e design que proporciona experiência gastronômica única.',
    tags: ['Comercial', 'Gastronomia', 'Luxo'],
  },
  {
    id: 8,
    title: 'Banheiro Spa',
    category: ProjectCategory.Residential,
    location: 'São Paulo, SP',
    year: '2024',
    area: '28m²',
    image:
      'https://images.unsplash.com/photo-1688786219616-598ed96aa19d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiYXRocm9vbSUyMGRlc2lnbnxlbnwxfHx8fDE3NjExNzU5MTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description:
      'Banheiro com conceito de spa residencial, revestimentos nobres e tecnologia para máximo conforto e relaxamento.',
    tags: ['Interiores', 'Banheiro', 'Wellness'],
  },
  {
    id: 9,
    title: 'Terraço Integrado',
    category: ProjectCategory.Residential,
    location: 'Santos, SP',
    year: '2023',
    area: '120m²',
    image:
      'https://images.unsplash.com/photo-1694211493881-76411bdb31ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwdGVycmFjZSUyMGRlc2lnbnxlbnwxfHx8fDE3NjExNzU5MTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description:
      'Terraço com área gourmet e lounge, integrando ambientes internos e externos para aproveitar o clima e a vista.',
    tags: ['Áreas Externas', 'Lazer', 'Integração'],
  },
  {
    id: 10,
    title: 'Espaço Integrado',
    category: ProjectCategory.Residential,
    location: 'Alphaville, SP',
    year: '2023',
    area: '180m²',
    image:
      'https://images.unsplash.com/photo-1572457598110-2e060c4588ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjA3NTM3NzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description:
      'Living amplo com integração total entre sala de estar, jantar e cozinha, criando fluidez e amplitude visual.',
    tags: ['Interiores', 'Integração', 'Amplitude'],
  },
  {
    id: 11,
    title: 'Design de Luxo',
    category: ProjectCategory.Interiors,
    location: 'Moema, SP',
    year: '2024',
    area: '380m²',
    image:
      'https://images.unsplash.com/photo-1581784878214-8d5596b98a01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBpbnRlcmlvciUyMGRlc2lnbnxlbnwxfHx8fDE3NjA4MDU2NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description:
      'Apartamento de alto padrão com acabamentos exclusivos, marcenaria sob medida e design sofisticado em cada detalhe.',
    tags: ['Luxo', 'Alto Padrão', 'Exclusividade'],
  },
  {
    id: 12,
    title: 'Detalhes Arquitetônicos',
    category: ProjectCategory.Architecture,
    location: 'São Paulo, SP',
    year: '2023',
    area: '520m²',
    image:
      'https://images.unsplash.com/photo-1696401680571-f6e9986026d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmFsJTIwZGV0YWlsfGVufDF8fHx8MTc2MDc2Njk5Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description:
      'Projeto arquitetônico com atenção especial aos detalhes estruturais e estéticos que fazem a diferença.',
    tags: ['Arquitetura', 'Detalhamento', 'Estrutura'],
  },
];

const CATEGORIES: ProjectCategory[] = [
  ProjectCategory.All,
  ProjectCategory.Residential,
  ProjectCategory.Commercial,
  ProjectCategory.Interiors,
  ProjectCategory.Architecture,
];

export function ProjectsCatalog() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>(
    ProjectCategory.All,
  );

  const filteredProjects =
    activeCategory === ProjectCategory.All
      ? projectsData
      : projectsData.filter((project) => project.category === activeCategory);

  const handleProjectClick = (projectId: number) => {
    // TODO: Implement project detail modal or navigation
    console.log('Project clicked:', projectId);
  };

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
              onClick={() => handleProjectClick(project.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
