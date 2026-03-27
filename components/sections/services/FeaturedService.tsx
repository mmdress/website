'use client';

import { CheckCircle } from 'lucide-react';
import Image from 'next/image';

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

  return (
    <section id="featured-service" className="bg-accent/70 py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative">
            <div className="absolute -left-8 -top-8 -z-10 hidden h-40 w-40 rounded-2xl bg-accent/10 sm:block" />
            <div className="relative aspect-3/4 overflow-hidden rounded-2xl">
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(max-width: 1023px) 100vw, min(720px, 50vw)"
                quality={92}
                className="object-cover"
                priority={activeService === 0}
              />
            </div>
            <div className="absolute -bottom-8 -right-8 -z-10 hidden h-40 w-40 rounded-2xl bg-primary/10 sm:block" />
          </div>

          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="h-px w-12 bg-primary" />
              <span className="text-sm uppercase tracking-[0.3em] text-primary font-semibold">
                Serviço em Destaque
              </span>
            </div>

            <h2 className="mb-6 text-3xl tracking-tight text-foreground sm:text-4xl lg:text-5xl">
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
