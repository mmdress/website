import { PageHeader } from '@/components/layout';
import { ProjectsCatalog, ProjectsStats } from '@/components/sections/projects';
import { CTA } from '@/components/sections/shared';

export default function Projetos() {
  return (
    <div className="pt-20 lg:pt-24">
      <PageHeader
        badge="Portfolio"
        title={
          <span>
            Projetos que Inspiram
            <br />
            <span className="text-primary">e Transformam</span>
          </span>
        }
        description="Conheça uma seleção dos nossos trabalhos mais recentes que exemplificam nossa abordagem única ao design e à arquitetura."
        backgroundImage={{
          src: '/images/projects/header.jpg',
          alt: 'Projetos',
        }}
      />
      <ProjectsCatalog />
      <ProjectsStats />
      <CTA />
    </div>
  );
}
