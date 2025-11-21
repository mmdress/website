import { Eye, Target, Award, type LucideIcon } from 'lucide-react';

interface MissionVisionItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

const MISSION_VISION_ITEMS: MissionVisionItem[] = [
  {
    icon: Eye,
    title: 'Missão',
    description:
      'Criar ambientes únicos e funcionais que reflitam a personalidade e atendam às necessidades de cada cliente, utilizando design inovador, materiais de qualidade e processos transparentes, superando expectativas em cada projeto.',
  },
  {
    icon: Target,
    title: 'Visão',
    description:
      'Ser referência nacional em arquitetura e design de interiores, reconhecida pela excelência criativa, sustentabilidade e capacidade de transformar espaços em experiências memoráveis que inspiram e valorizam a vida das pessoas.',
  },
  {
    icon: Award,
    title: 'Compromisso',
    description:
      'Entregar projetos que unem estética refinada e funcionalidade inteligente, respeitando prazos, orçamentos e o meio ambiente, mantendo comunicação transparente e construindo relacionamentos baseados em confiança mútua.',
  },
] as const;

export function MissionVision() {
  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-3">
          {MISSION_VISION_ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title}>
                <div className="bg-accent text-primary mb-6 inline-flex h-14 w-14 items-center justify-center">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="text-foreground mb-4 text-2xl">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
