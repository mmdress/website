import { PageHeader } from '@/components/layout';
import {
  ProcessSteps,
  IntegratedSolution,
  TimelineSection,
  BenefitsSection,
} from '@/components/sections/how-it-works';
import { CTA } from '@/components/sections/shared';

export default function HowItWorks() {
  return (
    <div className="pt-20 lg:pt-24">
      <PageHeader
        badge="Como Funciona"
        title={
          <span className="truncate">
            Projetando Sonhos.
            <br />
            <span className="text-primary">Construindo Realidades.</span>
          </span>
        }
        description="Uma jornada completa de encantamento, onde cada etapa é pensada para transformar sua visão em um espaço único, do primeiro contato à entrega final."
        backgroundImage={{
          src: '/images/how-it-works/header.jpg',
          alt: 'Como Funciona',
        }}
      />
      <IntegratedSolution />
      <ProcessSteps />
      <TimelineSection />
      <BenefitsSection />
      <CTA />
    </div>
  );
}
