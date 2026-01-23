'use client';

import { CheckCircle } from 'lucide-react';
import Image from 'next/image';
import { useRef } from 'react';

import { SERVICES } from './data';

interface FeaturedServiceProps {
  activeService: number;
  onServiceChange: (index: number) => void;
}

export function FeaturedService({
  activeService,
  onServiceChange,
}: FeaturedServiceProps) {
  const service = SERVICES[activeService];
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section ref={sectionRef} id="featured-service" className="bg-accent/70 py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative">
            <div className="absolute -left-8 -top-8 -z-10 h-40 w-40 rounded-2xl bg-accent/10" />
            <div className="aspect-3/4 overflow-hidden rounded-2xl">
              <Image
                src={service.image}
                alt={service.title}
                width={600}
                height={800}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 -z-10 h-40 w-40 rounded-2xl bg-primary/10" />
          </div>

          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="h-px w-12 bg-primary" />
              <span className="text-sm uppercase tracking-[0.3em] text-primary font-semibold">
                Serviço em Destaque
              </span>
            </div>

            <h2 className="mb-6 text-4xl tracking-tight text-foreground sm:text-5xl">
              {service.title}
            </h2>

            <p className="mb-8 text-xl leading-relaxed text-muted-foreground">
              {service.description}
            </p>

            <div className="mb-10 space-y-4">
              {service.features.map((feature, idx) => (
                <div key={idx} className="group flex items-start gap-4">
                  <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded bg-primary/20">
                    <CheckCircle className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-muted-foreground transition-colors group-hover:text-primary">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex gap-3">
              {SERVICES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => onServiceChange(idx)}
                  className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                    idx === activeService
                      ? 'bg-primary'
                      : 'bg-zinc-200'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
