'use client';

import { useState } from 'react';

import { PageHeader } from '@/components/layout';
import {
  ServicesGrid,
  FeaturedService,
  DifferentialsSection,
} from '@/components/sections/services';
import { CTA } from '@/components/sections/shared';

export default function Services() {
  const [activeService, setActiveService] = useState(0);

  return (
    <div className="pt-20 lg:pt-24">
      <PageHeader
        badge="Nossos Serviços"
        title={
          <span className="truncate">
            Excelência em
            <br />
            <span className="text-primary">Cada Detalhe</span>
          </span>
        }
        description="Do projeto de interiores em 3D ao executivo civil, obra, marcenaria, ambientação e paisagismo — acompanhamento integrado em cada etapa."
        backgroundImage={{
          src: '/images/services/header.jpg',
          alt: 'Nossos Serviços',
        }}
      />
      <ServicesGrid onServiceClick={setActiveService} />
      <FeaturedService
        activeService={activeService}
        onServiceChange={setActiveService}
      />
      <DifferentialsSection />
      <CTA />
    </div>
  );
}
