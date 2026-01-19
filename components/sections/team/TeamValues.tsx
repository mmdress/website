import { TEAM_VALUES } from './data';

export function TeamValues() {
  return (
    <section className="bg-accent/70 py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-16 text-center">
            <span className="text-primary mb-6 block text-sm font-semibold tracking-widest uppercase">
              Nossos Valores
            </span>
            <h2 className="text-foreground mb-6 text-3xl tracking-tight sm:text-4xl lg:text-5xl">
              O Que Nos Une
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Princípios que guiam nossa equipe e refletem em cada projeto que
              desenvolvemos.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {TEAM_VALUES.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="rounded-lg bg-white p-8 text-center"
                >
                  <div className="bg-accent text-primary mb-6 inline-flex h-16 w-16 items-center justify-center">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-foreground mb-3 text-xl">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
