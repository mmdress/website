import { Target, Sparkles, Heart, Users, type LucideIcon } from 'lucide-react';

interface Value {
  icon: LucideIcon;
  title: string;
  description: string;
}

const VALUES: Value[] = [
  {
    icon: Target,
    title: 'Excelência',
    description:
      'Compromisso inegociável presente na escuta atenta, rigor técnico e cuidado absoluto com cada detalhe, do conceito à entrega final.',
  },
  {
    icon: Sparkles,
    title: 'Inovação',
    description:
      'Olhar inquieto e visionário que busca constantemente novas soluções, unindo estética, funcionalidade e inteligência em projetos atuais e atemporais.',
  },
  {
    icon: Heart,
    title: 'Paixão',
    description:
      'Amor genuíno pela arquitetura e pelas histórias dos clientes, traduzido em dedicação integral e cuidado verdadeiro em transformar sonhos em realidade.',
  },
  {
    icon: Users,
    title: 'Parceria',
    description:
      'Relações sólidas baseadas em confiança, transparência e respeito. Caminhamos juntos oferecendo segurança e clareza, porque projetar é também cuidar.',
  },
] as const;

const VALUES_CONTENT = {
  label: 'Nossos Valores',
  title: 'O Que Nos Move',
  description:
    'Princípios que guiam cada decisão, cada traço e cada experiência criada pela MMDress, refletindo a essência de sua fundadora e o cuidado com cada cliente.',
} as const;

export function Values() {
  return (
    <section className="bg-accent/70 py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="text-primary mb-6 block text-sm tracking-widest uppercase">
            {VALUES_CONTENT.label}
          </span>
          <h2 className="text-foreground mb-6 text-3xl tracking-tight sm:text-4xl lg:text-5xl">
            {VALUES_CONTENT.title}
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            {VALUES_CONTENT.description}
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((value) => {
            const Icon = value.icon;
            return (
              <div
                key={value.title}
                className="rounded-lg bg-white p-8 text-center"
              >
                <div className="bg-accent text-primary mb-6 inline-flex h-16 w-16 items-center justify-center">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="text-foreground mb-3 text-xl">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
