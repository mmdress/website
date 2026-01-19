import Image from 'next/image';

import { BRAND_PARTNERS } from './data';

export function BrandPartners() {
  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <span className="text-primary mb-6 block text-sm font-semibold tracking-widest uppercase">
            Parceiros
          </span>
          <h2 className="text-foreground mb-6 text-3xl tracking-tight sm:text-4xl lg:text-5xl">
            Marcas de Confiança
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl leading-relaxed">
            Trabalhamos com as melhores marcas do mercado para garantir
            qualidade, durabilidade e sofisticação em cada projeto.
          </p>
        </div>

        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
            {BRAND_PARTNERS.map((partner, index) => (
              <div
                key={index}
                className="bg-muted/30 border-border hover:border-accent group flex aspect-square items-center justify-center border p-6 transition-all duration-300"
              >
                <div className="relative flex h-full w-full items-center justify-center">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={200}
                    height={200}
                    className="h-full w-full object-contain opacity-60 grayscale transition-opacity duration-300 group-hover:opacity-100 group-hover:grayscale-0"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground text-sm">
            E muitas outras marcas de excelência que garantem o padrão de
            qualidade MMDress
          </p>
        </div>
      </div>
    </section>
  );
}
