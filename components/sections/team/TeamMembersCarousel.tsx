'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui';

import { MemberCard } from './MemberCard';
import { OTHER_MEMBERS } from './data';

export function TeamMembersCarousel() {
  return (
    <section className="bg-accent/70 py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <span className="text-primary mb-6 block text-sm font-semibold tracking-widest uppercase">
            Nossa Equipe
          </span>
          <h2 className="text-foreground mb-6 text-3xl tracking-tight sm:text-4xl lg:text-5xl">
            Talentos que Fazem a Diferença
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl leading-relaxed">
            Profissionais dedicados que transformam cada projeto em realidade
            com excelência e atenção aos detalhes.
          </p>
        </div>

        <div className="mx-auto max-w-7xl">
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {OTHER_MEMBERS.map((member) => (
                <CarouselItem
                  key={member.id}
                  className="pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <MemberCard
                    member={member}
                    variant="compact"
                    showFullBio={false}
                    maxSpecialties={2}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-12 hidden md:flex lg:-left-16" />
            <CarouselNext className="-right-12 hidden md:flex lg:-right-16" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
