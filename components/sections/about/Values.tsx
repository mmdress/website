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
      'Comprometimento com a qualidade superior em cada detalhe do projeto, da concepção à entrega final.',
  },
  {
    icon: Sparkles,
    title: 'Inovação',
    description:
      'Busca constante por soluções criativas e tecnologias que elevam a experiência dos nossos clientes.',
  },
  {
    icon: Heart,
    title: 'Paixão',
    description:
      'Amor genuíno pelo que fazemos, traduzido em dedicação integral a cada projeto que desenvolvemos.',
  },
  {
    icon: Users,
    title: 'Parceria',
    description:
      'Relacionamento colaborativo com clientes, fornecedores e equipe, construindo confiança duradoura.',
  },
] as const;

const VALUES_CONTENT = {
  label: 'Nossos Valores',
  title: 'O Que Nos Move',
  description:
    'Princípios fundamentais que guiam cada decisão e cada projeto que desenvolvemos na MMDress.',
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
