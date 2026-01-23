'use client';

import { Calendar, Clock, CheckCircle2 } from 'lucide-react';

export function TimelineSection() {
  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-6 flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-primary" />
            <span className="text-sm uppercase tracking-[0.3em] text-primary font-semibold">
              Prazos & Cronograma
            </span>
            <div className="h-px w-12 bg-primary" />
          </div>
          <h2 className="mb-6 text-4xl tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Transparência Total
          </h2>
          <p className="text-xl leading-relaxed text-muted-foreground">
            Prazos claros e realistas para cada fase do seu projeto
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl">
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary/5 transition-transform duration-500 group-hover:scale-150" />

            <div className="relative">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10">
                <Clock className="h-8 w-8 text-primary" />
              </div>

              <h3 className="mb-4 text-2xl font-semibold text-foreground">
                Projeto 3D
              </h3>

              <p className="mb-6 text-muted-foreground">
                Visualização imersiva e realista
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm text-muted-foreground">
                    Prazo: 10-15 dias
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm text-muted-foreground">
                    Pode ser antecipado
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl border-2 border-primary bg-white p-8 shadow-xl transition-all duration-300 hover:shadow-2xl">
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary/10 transition-transform duration-500 group-hover:scale-150" />

            <div className="absolute right-4 top-4">
              <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                Completo
              </span>
            </div>

            <div className="relative">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-primary">
                <Calendar className="h-8 w-8 text-white" />
              </div>

              <h3 className="mb-4 text-2xl font-semibold text-foreground">
                Projeto Executivo
              </h3>

              <p className="mb-6 text-muted-foreground">
                Documentação técnica completa
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm text-muted-foreground">
                    Prazo: 40 dias úteis
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm text-muted-foreground">
                    Inclui marcenaria
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl">
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary/5 transition-transform duration-500 group-hover:scale-150" />

            <div className="relative">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10">
                <CheckCircle2 className="h-8 w-8 text-primary" />
              </div>

              <h3 className="mb-4 text-2xl font-semibold text-foreground">
                Execução de Obra
              </h3>

              <p className="mb-6 text-muted-foreground">
                Do início ao fim com você
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm text-muted-foreground">
                    Acompanhamento total
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm text-muted-foreground">
                    Gestão ativa da obra
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            * Prazos definidos conforme a complexidade e necessidades específicas
            de cada cliente
          </p>
        </div>
      </div>
    </section>
  );
}
