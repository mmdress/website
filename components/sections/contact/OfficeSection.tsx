import Image from 'next/image';

import { InfoCardItem } from './InfoCardItem';
import { INFO_CARDS, OFFICE_IMAGE } from './data';

export function OfficeSection() {
  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <span className="text-primary mb-6 block text-sm tracking-widest uppercase">
              Nosso Espaço
            </span>
            <h2 className="text-foreground mb-4 text-3xl tracking-tight sm:text-4xl">
              Conheça Nosso Escritório
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl">
              Um ambiente pensado para inspirar criatividade e receber nossos
              clientes com conforto e sofisticação.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
            {/* Main Facade Image */}
            <div className="md:col-span-2">
              <div className="bg-muted relative aspect-21/9 overflow-hidden rounded-2xl">
                <Image
                  src={OFFICE_IMAGE.src}
                  alt={OFFICE_IMAGE.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                />
                <div className="from-foreground/60 absolute inset-0 bg-linear-to-t to-transparent" />
                <div className="absolute right-0 bottom-0 left-0 p-8 text-white lg:p-12">
                  <h3 className="mb-2 text-2xl sm:text-3xl">
                    MMDress Arquitetura e Interiores
                  </h3>
                  <p className="text-white/90">
                    Av. Nazaré, 1729 - Ipiranga, São Paulo - SP
                  </p>
                </div>
              </div>
            </div>

            {/* Info Cards */}
            {INFO_CARDS.map((card) => (
              <InfoCardItem key={card.title} card={card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
