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
      'Criar ambientes que vão além da estética, refletindo a essência, a história e o estilo de vida de cada cliente. Projetamos com sensibilidade, inteligência e excelência técnica, unindo design autoral, materiais de alta qualidade e processos transparentes para transformar sonhos em espaços funcionais, sofisticados e cheios de significado.',
  },
  {
    icon: Target,
    title: 'Visão',
    description:
      'Ser referência nacional em arquitetura e design de interiores, reconhecida pela capacidade de transformar espaços em experiências memoráveis, que inspiram, acolhem e valorizam a vida das pessoas — com criatividade, sustentabilidade e impacto positivo duradouro.',
  },
  {
    icon: Award,
    title: 'Compromisso',
    description:
      'Entregar projetos conduzidos com responsabilidade, ética e atenção absoluta aos detalhes. Unimos estética refinada e funcionalidade inteligente, respeitando prazos, orçamentos e o meio ambiente, mantendo uma comunicação clara e construindo relações baseadas em confiança, cuidado e excelência do início ao fim.',
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
