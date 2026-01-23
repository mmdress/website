'use client';

import { Building2, Hammer, Wrench } from 'lucide-react';

export function IntegratedSolution() {
  return (
    <section className="bg-linear-to-b from-white to-zinc-50 py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <div className="mb-6 flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-primary" />
            <span className="text-sm uppercase tracking-[0.3em] text-primary font-semibold">
              Solução Integrada
            </span>
            <div className="h-px w-12 bg-primary" />
          </div>
          <h2 className="mb-6 text-4xl tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Arquitetura + Marcenaria + Obra
          </h2>
          <p className="text-xl leading-relaxed text-muted-foreground">
            Tudo em um só lugar para garantir perfeição, economia de tempo e
            resultado excepcional
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="group relative overflow-hidden rounded-2xl border border-[#CDAA1C]/20 bg-white p-8 shadow-lg transition-all duration-300 hover:border-[#CDAA1C]/40 hover:shadow-xl lg:p-10">
            <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-[#CDAA1C]/8 transition-transform duration-500 group-hover:scale-150" />

            <div className="relative">
              <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-[#CDAA1C] shadow-md">
                <Building2 className="h-10 w-10 text-white" />
              </div>

              <h3 className="mb-4 text-3xl font-semibold text-foreground">
                Arquitetura
              </h3>

              <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
                Projetos completos e personalizados que refletem seu estilo de
                vida e necessidades.
              </p>

              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#CDAA1C]" />
                  <span className="text-sm text-muted-foreground">
                    Projetos 3D realistas
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#CDAA1C]" />
                  <span className="text-sm text-muted-foreground">
                    Plantas executivas detalhadas
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#CDAA1C]" />
                  <span className="text-sm text-muted-foreground">
                    Especificação de materiais
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#CDAA1C]" />
                  <span className="text-sm text-muted-foreground">
                    Design inteligente e funcional
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl border border-[#2C2C2C]/20 bg-white p-8 shadow-lg transition-all duration-300 hover:border-[#2C2C2C]/40 hover:shadow-xl lg:p-10">
            <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-[#2C2C2C]/8 transition-transform duration-500 group-hover:scale-150" />

            <div className="relative">
              <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-[#2C2C2C] shadow-md">
                <Wrench className="h-10 w-10 text-white" />
              </div>

              <h3 className="mb-4 text-3xl font-semibold text-foreground">
                Marcenaria
              </h3>

              <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
                Fabricação própria sob medida com acabamento de alto padrão e
                design exclusivo.
              </p>

              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#2C2C2C]" />
                  <span className="text-sm text-muted-foreground">
                    Móveis sob medida exclusivos
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#2C2C2C]" />
                  <span className="text-sm text-muted-foreground">
                    Fabricação própria
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#2C2C2C]" />
                  <span className="text-sm text-muted-foreground">
                    Alto padrão de acabamento
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#2C2C2C]" />
                  <span className="text-sm text-muted-foreground">
                    Precisão técnica garantida
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl border border-[#CDAA1C]/20 bg-white p-8 shadow-lg transition-all duration-300 hover:border-[#CDAA1C]/40 hover:shadow-xl lg:p-10">
            <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-[#CDAA1C]/8 transition-transform duration-500 group-hover:scale-150" />

            <div className="relative">
              <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-[#CDAA1C] shadow-md">
                <Hammer className="h-10 w-10 text-white" />
              </div>

              <h3 className="mb-4 text-3xl font-semibold text-foreground">
                Obra
              </h3>

              <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
                Gestão completa e acompanhamento ativo para garantir qualidade e
                cumprimento de prazos.
              </p>

              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#CDAA1C]" />
                  <span className="text-sm text-muted-foreground">
                    Gestão ativa do início ao fim
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#CDAA1C]" />
                  <span className="text-sm text-muted-foreground">
                    Diário de obra com fotos
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#CDAA1C]" />
                  <span className="text-sm text-muted-foreground">
                    Resolução rápida de imprevistos
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#CDAA1C]" />
                  <span className="text-sm text-muted-foreground">
                    Controle de qualidade rigoroso
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex flex-col items-center gap-4 rounded-2xl border-2 border-primary/30 bg-primary/8 px-8 py-6 shadow-sm">
            <p className="text-lg font-semibold text-foreground">
              O resultado? Economia de tempo, custos otimizados e perfeita
              sintonia entre todas as etapas.
            </p>
            <p className="text-sm text-muted-foreground">
              Um único parceiro, do conceito à entrega final.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
