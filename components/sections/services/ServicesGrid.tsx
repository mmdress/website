'use client';

import { ChevronRight } from 'lucide-react';
import Image from 'next/image';

import { SERVICES } from './data';

interface ServicesGridProps {
  onServiceClick: (index: number) => void;
}

export function ServicesGrid({ onServiceClick }: ServicesGridProps) {
  const handleServiceClick = (index: number) => {
    onServiceClick(index);

    setTimeout(() => {
      const featuredSection = document.getElementById('featured-service');
      if (featuredSection) {
        const offset = 100;
        const elementPosition = featuredSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }, 100);
  };
  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-6 flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-primary" />
            <span className="text-sm uppercase tracking-[0.3em] text-primary font-semibold">
              O Que Fazemos
            </span>
            <div className="h-px w-12 bg-primary" />
          </div>
          <h2 className="mb-6 text-4xl tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Serviços Completos
          </h2>
          <p className="text-xl leading-relaxed text-muted-foreground">
            Soluções integradas para cada etapa do seu projeto
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group cursor-pointer"
                onClick={() => handleServiceClick(index)}
              >
                <div className="relative mb-6 aspect-4/3 overflow-hidden rounded-2xl">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div
                    className={`absolute inset-0 ${service.color} opacity-0 transition-opacity duration-500 group-hover:opacity-80`}
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <div className="flex h-20 w-20 items-center justify-center rounded-lg bg-white/20 backdrop-blur-sm">
                      <Icon className="h-10 w-10 text-white" />
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg ${service.color}`}
                    >
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl text-primary transition-colors duration-300 group-hover:text-accent">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-sm uppercase tracking-wider text-muted-foreground">
                    {service.subtitle}
                  </p>

                  <p className="leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>

                  <div className="pt-4">
                    <button className="group/btn inline-flex items-center gap-2 uppercase tracking-wider text-accent transition-all duration-300 hover:gap-3">
                      Ver Detalhes
                      <ChevronRight className="h-5 w-5 transition-transform group-hover/btn:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
