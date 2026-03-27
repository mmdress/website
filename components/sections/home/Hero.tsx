'use client';

import { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import { CircleArrowDown, Mouse } from 'lucide-react';
import Autoplay from 'embla-carousel-autoplay';

import { Button } from '@/components/ui';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui';

import { SlideWrapper } from './SlideWrapper';
import { HERO_SLIDES, HERO_BENEFITS, HERO_STATISTICS } from './data';

export function Hero() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });

    return () => {
      api?.off('select', () => {
        setCurrent(api.selectedScrollSnap() + 1);
      });
    };
  }, [api]);

  const scrollTo = useCallback(
    (index: number) => {
      api?.scrollTo(index);
    },
    [api],
  );

  const totalSlides = 1 + HERO_SLIDES.length;

  return (
    <div className="relative w-full overflow-hidden">
      <Carousel
        className="h-full w-full"
        setApi={setApi}
        plugins={[
          Autoplay({
            delay: 4000,
            stopOnMouseEnter: true,
            stopOnInteraction: false,
          }),
        ]}
      >
        <CarouselContent className="ml-0 h-[832px] md:h-[1024px]">
          <CarouselItem className="h-full pl-0">
            <SlideWrapper
              src="/images/home/hero-01.jpg"
              alt="Design de interiores moderno"
              overlayOpacity="bg-black/40"
              priority={true}
            >
              <div className="absolute inset-0 z-10 flex flex-col justify-center bg-black/50 px-4">
                <div className="max-w-2xl space-y-6 px-8 md:px-12 lg:px-16">
                  <h1 className="text-3xl leading-tight font-bold text-white drop-shadow-lg md:text-4xl lg:text-5xl">
                    Bem-vindo à <span className="text-primary">MMDress</span>
                  </h1>

                  <p className="text-xl font-semibold text-white drop-shadow-md md:text-2xl">
                    Aqui o seu projeto também é o nosso sonho!
                  </p>

                  <p className="hidden text-base leading-relaxed text-white/90 drop-shadow-md md:block md:text-lg">
                    <strong>Deixa que nós cuidamos de tudo</strong>, desde o
                    projeto até a entrega final. Enquanto isso, você só se
                    concentra no que realmente <strong>importa</strong>.
                  </p>

                  <div className="space-y-4 pt-4">
                    {HERO_BENEFITS.map((benefit, index) => {
                      const Icon = benefit.icon;
                      return (
                        <div key={index} className="flex items-start gap-3">
                          <Icon className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                          <p className="text-sm text-white drop-shadow-sm md:text-base">
                            {benefit.text}
                          </p>
                        </div>
                      );
                    })}
                  </div>

                  <div className="pt-6">
                    <Button
                      asChild
                      size="lg"
                      className="bg-primary hover:bg-primary/90 px-8 py-6 text-base md:text-lg"
                    >
                      <Link
                        href="#contact"
                        className="font-semibold text-primary-foreground"
                      >
                        Solicitar orçamento
                      </Link>
                    </Button>
                  </div>

                  <div className="flex flex-wrap gap-2 border-t pt-8 sm:gap-4 md:gap-8">
                    {HERO_STATISTICS.map((stat, index) => (
                      <div key={index} className="min-w-24 flex-1">
                        <p className="text-primary text-2xl font-bold drop-shadow-lg md:text-3xl">
                          {stat.value}
                        </p>
                        <p className="text-xs text-white/80 drop-shadow-sm md:text-base">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </SlideWrapper>
          </CarouselItem>

          {HERO_SLIDES.map((slide) => (
            <CarouselItem key={slide.id} className="h-full pl-0">
              <SlideWrapper
                src={slide.src}
                alt={slide.alt}
                priority={false}
                overlayOpacity="bg-black/40"
              >
                <div className="absolute inset-0 z-10 flex flex-col justify-center px-4 bg-black/40">
                  <div className="max-w-3xl space-y-6 px-8 md:px-12 lg:px-16">
                    <h1
                      className="[&>span]:text-primary text-3xl leading-tight font-bold text-white drop-shadow-lg md:text-4xl lg:text-5xl"
                      dangerouslySetInnerHTML={{ __html: slide.title }}
                    />
                    <p className="text-xl font-semibold text-white drop-shadow-md md:text-2xl">
                      {slide.subtitle}
                    </p>

                    {slide.benefits && (
                      <div className="space-y-4 pt-4">
                        {slide.benefits.map((benefit, index) => {
                          const Icon = benefit.icon;
                          return (
                            <div key={index} className="flex items-start gap-3">
                              <Icon className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                              <p className="text-sm text-white drop-shadow-sm md:text-base">
                                {benefit.text}
                              </p>
                            </div>
                          );
                        })}
                      </div>
                    )}

                    <div className="pt-6">
                      <Button
                        asChild
                        size="lg"
                        className="bg-primary hover:bg-primary/90 px-8 py-6 text-base md:text-lg"
                      >
                        <Link
                          href={slide.buttonLink}
                          className="font-semibold text-primary-foreground"
                        >
                          {slide.buttonText}
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </SlideWrapper>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4 hidden bg-white/10 text-white hover:bg-white/20 md:flex" />
        <CarouselNext className="right-4 hidden bg-white/10 text-white hover:bg-white/20 md:flex" />
      </Carousel>

      <div className="absolute bottom-20 left-1/2 z-20 flex -translate-x-1/2 gap-3">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className="group flex h-6 w-6 items-center justify-center rounded-full"
            aria-label={`Go to slide ${index + 1}`}
          >
            <span
              className={`h-2 rounded-full transition-all duration-300 ${
                current === index + 1
                  ? 'bg-primary w-6'
                  : 'w-2 bg-white/50 group-hover:bg-white/70'
              }`}
            />
          </button>
        ))}
      </div>

      <div className="absolute bottom-6 left-1/2 z-20 -translate-x-1/2 animate-bounce">
        <Mouse className="hidden h-6 w-6 text-white/80 drop-shadow-lg md:block" />
        <CircleArrowDown className="block h-6 w-6 text-white/80 drop-shadow-lg md:hidden" />
      </div>
    </div>
  );
}
