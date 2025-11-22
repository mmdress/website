import { PageHeader } from '@/components/layout';

export default function Team() {
  return (
    <div className="pt-20 lg:pt-24">
      <PageHeader
        badge="Nossa Equipe"
        title={
          <span className="truncate">
            Profissionais Apaixonados
            <br />
            <span className="text-primary">por Design</span>
          </span>
        }
        description="Conheça os talentos que transformam sonhos em realidade através de criatividade, técnica e dedicação integral a cada projeto."
        backgroundImage={{
          src: '/images/team/header.jpg',
          alt: 'Nossa Equipe',
        }}
      />
    </div>
  );
}
