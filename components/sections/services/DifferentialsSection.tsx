import { DIFFERENTIALS } from './data';

export function DifferentialsSection() {
  return (
    <section className="relative overflow-hidden bg-foreground py-20 text-white lg:py-32">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute left-20 top-20 h-96 w-96 rounded-full bg-primary blur-3xl" />
        <div className="absolute bottom-20 right-20 h-96 w-96 rounded-full bg-primary blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-6 flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-primary" />
            <span className="text-sm uppercase tracking-[0.3em] text-primary font-semibold">
              Diferenciais
            </span>
            <div className="h-px w-12 bg-primary" />
          </div>
          <h2 className="mb-6 text-4xl tracking-tight sm:text-5xl lg:text-6xl">
            Por Que Nos Escolher
          </h2>
          <p className="text-xl leading-relaxed text-white/70">
            Compromisso com excelência em cada projeto
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {DIFFERENTIALS.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="group text-center">
                <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/20 transition-colors duration-300 group-hover:bg-primary">
                  <Icon className="h-10 w-10 text-primary transition-colors duration-300 group-hover:text-[#2C2C2C]" />
                </div>
                <h3 className="mb-3 text-2xl">{item.title}</h3>
                <p className="leading-relaxed text-white/70">
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
