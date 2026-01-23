interface Stat {
  value: string;
  label: string;
}

const STATS: Stat[] = [
  {
    value: '300+',
    label: 'Projetos Entregues',
  },
  {
    value: '15+',
    label: 'Anos de Mercado',
  },
  {
    value: '98%',
    label: 'Satisfação dos Clientes',
  },
  {
    value: '25+',
    label: 'Prêmios e Reconhecimentos',
  },
] as const;

export function ProjectsStats() {
  return (
    <section className="bg-foreground py-20 text-white lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Resultados que Comprovam
            <br />
            Nossa Excelência
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-12">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-primary mb-3 text-5xl lg:text-6xl">
                {stat.value}
              </div>
              <div className="text-sm tracking-wide text-white/80 uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
