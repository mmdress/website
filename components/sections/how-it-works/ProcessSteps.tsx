'use client';

import { PROCESS_STEPS } from './data';

export function ProcessSteps() {
  return (
    <section className="bg-zinc-50 py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-6 flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-primary" />
            <span className="text-sm uppercase tracking-[0.3em] text-primary font-semibold">
              Jornada do Cliente
            </span>
            <div className="h-px w-12 bg-primary" />
          </div>
          <h2 className="mb-6 text-4xl tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Uma Experiência Completa
          </h2>
          <p className="text-xl leading-relaxed text-muted-foreground">
            Do primeiro contato à entrega final, cada etapa é pensada para
            encantar e transformar sonhos em realidade
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-linear-to-b from-primary/30 via-primary/60 to-primary/30 lg:block" />

          <div className="space-y-12 lg:space-y-24">
            {PROCESS_STEPS.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`relative grid items-center gap-8 lg:grid-cols-2 lg:gap-16 ${isEven ? '' : 'lg:grid-flow-dense'
                    }`}
                >
                  <div
                    className={`${isEven ? 'lg:text-right' : 'lg:col-start-2'
                      }`}
                  >
                    <div className="inline-block">
                      <div className="relative">
                        <span className="text-[120px] font-bold leading-none text-primary/15 lg:text-[180px]">
                          {step.number}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`${isEven ? '' : 'lg:col-start-1 lg:row-start-1'
                      }`}
                  >
                    <div className="group relative">
                      <div className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl lg:p-10">
                        <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary/8 transition-transform duration-500 group-hover:scale-150" />

                        <div className="relative">
                          <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-xl font-bold text-white shadow-md">
                            {step.number}
                          </div>

                          <h3 className="mb-4 text-3xl font-semibold text-foreground transition-colors duration-300 group-hover:text-primary">
                            {step.title}
                          </h3>

                          <p className="text-lg leading-relaxed text-muted-foreground">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute left-1/2 top-1/2 hidden h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-zinc-50 bg-primary shadow-lg lg:block" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
