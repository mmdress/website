import type { Metadata } from 'next';

import { PageHeader } from '@/components/layout';
import { ServiceWrapper } from '@/components/sections/services/ServiceWrapper';
import { DifferentialsSection } from '@/components/sections/services/DifferentialsSection';
import { CTA } from '@/components/sections/shared';

export const metadata: Metadata = {
  title: 'Nossos Serviços',
  description:
    'Do projeto de interiores em 3D ao executivo civil, obra, marcenaria, ambientação e paisagismo — acompanhamento integrado em cada etapa.',
  openGraph: {
    description:
      'Do projeto de interiores em 3D ao executivo civil, obra, marcenaria, ambientação e paisagismo — acompanhamento integrado em cada etapa.',
    images: [{ url: '/images/services/header.jpg', alt: 'Nossos Serviços' }],
  },
};

export default function Services() {
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
      <ServiceWrapper />
      <DifferentialsSection />
      <CTA />
    </div>
  );
}
