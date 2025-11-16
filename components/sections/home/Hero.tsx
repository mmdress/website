"use client";

import { useEffect, useState, useCallback, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle,
  Clock,
  DollarSign,
  Home,
  Award,
  Palette,
  Ruler,
  Hammer,
  Wrench,
  Box,
  Sparkles,
  CircleArrowDown,
  Mouse,
} from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

import { Button } from "@/components/ui";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui";
import { ROUTES } from "@/lib/utils";

interface SlideWrapperProps {
  src: string;
  alt: string;
  overlayOpacity?: string;
  priority?: boolean;
  children: ReactNode;
}

function SlideWrapper({
  src,
  alt,
  overlayOpacity = "bg-black/30",
  priority = false,
  children,
}: SlideWrapperProps) {
  return (
    <div className="relative w-full h-full">
      <Image
        src={src}
        alt={alt}
        width={1536}
        height={1024}
        className="w-full h-full object-cover"
        priority={priority}
      />
      <div className={`absolute inset-0 ${overlayOpacity}`} />
      {children}
    </div>
  );
}

const slides = [
  {
    id: 1,
    src: "https://picsum.photos/seed/2/1536/1024",
    alt: "Slide 2",
    title: "<span>Arquitetura</span> e Interiores",
    subtitle: "Design exclusivo para cada espaço",
    buttonText: "Nossos serviços",
    buttonLink: ROUTES.SERVICES,
    benefits: [
      {
        icon: Palette,
        text: "Projetos arquitetônicos personalizados",
      },
      {
        icon: Ruler,
        text: "Design de interiores completo",
      },
      {
        icon: Sparkles,
        text: "Consultoria em decoração e ambientação",
      },
      {
        icon: Home,
        text: "Reformas e adequações residenciais",
      },
      {
        icon: CheckCircle,
        text: "Acompanhamento do projeto à execução",
      },
    ],
  },
  {
    id: 2,
    src: "https://picsum.photos/seed/3/1536/1024",
    alt: "Slide 3",
    title: "Marcenaria <span>Especializada</span>",
    subtitle: "Móveis sob medida com excelência",
    buttonText: "Entre em contato",
    buttonLink: ROUTES.CONTACT,
    benefits: [
      {
        icon: Hammer,
        text: "Móveis planejados sob medida",
      },
      {
        icon: Box,
        text: "Armários, estantes e painéis personalizados",
      },
      {
        icon: Wrench,
        text: "Acabamentos de alta qualidade",
      },
      {
        icon: Ruler,
        text: "Projetos exclusivos para seu espaço",
      },
      {
        icon: CheckCircle,
        text: "Materiais nobres e duráveis",
      },
    ],
  },
];

const benefits = [
  {
    icon: Award,
    text: "Sem atrasos, prazo em contrato",
  },
  {
    icon: DollarSign,
    text: "Orçamento definido desde o início",
  },
  {
    icon: Clock,
    text: "Cuidamos de tudo para facilitar sua vida",
  },
  {
    icon: Home,
    text: "Projetos residenciais e comerciais",
  },
  {
    icon: CheckCircle,
    text: "Design exclusivo e funcionalidade garantida",
  },
];

const statistics = [
  { value: "+150", label: "Projetos entregues" },
  { value: "+25 MIL", label: "M² Projetados" },
  { value: "+7", label: "Anos de experiência" },
];

export function Hero() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });

    return () => {
      api?.off("select", () => {
        setCurrent(api.selectedScrollSnap() + 1);
      });
    };
  }, [api]);

  const scrollTo = useCallback(
    (index: number) => {
      api?.scrollTo(index);
    },
    [api]
  );

  const totalSlides = 1 + slides.length;

  return (
    <div className="relative w-full">
      <Carousel
        className="w-full h-full"
        setApi={setApi}
        plugins={[
          Autoplay({
            delay: 4000,
            stopOnMouseEnter: true,
            stopOnInteraction: false,
          }),
        ]}
      >
        <CarouselContent className="h-[768px] md:h-[1024px]">
          {/* Main Hero Slide */}
          <CarouselItem className="h-full p-0">
            <SlideWrapper
              src="https://picsum.photos/seed/1/1536/1024"
              alt="Design de interiores moderno"
              overlayOpacity="bg-black/40"
              priority={true}
            >
              <div className="absolute inset-0 flex flex-col justify-center px-4 z-10 bg-black/50">
                <div className="max-w-2xl space-y-6 px-8 md:px-12 lg:px-16">
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight drop-shadow-lg">
                    Bem-vindo à <span className="text-primary">MMDress</span>
                  </h1>

                  <p className="text-xl md:text-2xl font-semibold text-white drop-shadow-md">
                    Aqui o seu projeto também é o nosso sonho!
                  </p>

                  <p className="hidden md:block text-base md:text-lg text-white/90 leading-relaxed drop-shadow-md">
                    <strong>Deixa que nós cuidamos de tudo</strong>, desde o
                    projeto até a entrega final. Enquanto isso, você só se
                    concentra no que realmente <strong>importa</strong>.
                  </p>

                  <div className="space-y-4 pt-4">
                    {benefits.map((benefit, index) => {
                      const Icon = benefit.icon;
                      return (
                        <div key={index} className="flex items-start gap-3">
                          <Icon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                          <p className="text-white text-sm md:text-base drop-shadow-sm">
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
                      className="text-base md:text-lg px-8 py-6 bg-primary hover:bg-primary/90"
                    >
                      <Link
                        href={ROUTES.SERVICES}
                        className="text-white font-semibold"
                      >
                        Solicitar orçamento
                      </Link>
                    </Button>
                  </div>

                  <div className="flex flex-wrap gap-2 sm:gap-4 md:gap-8 pt-8 border-t">
                    {statistics.map((stat, index) => (
                      <div key={index} className="flex-1 min-w-24">
                        <p className="text-2xl md:text-3xl font-bold text-primary drop-shadow-lg">
                          {stat.value}
                        </p>
                        <p className="text-xs md:text-base text-white/80 drop-shadow-sm">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </SlideWrapper>
          </CarouselItem>

          {/* Other Slides */}
          {slides.map((slide) => (
            <CarouselItem key={slide.id} className="h-full p-0">
              <SlideWrapper
                src={slide.src}
                alt={slide.alt}
                priority={slide.id === 1}
              >
                <div className="absolute inset-0 flex flex-col justify-center px-4 z-10">
                  <div className="max-w-3xl space-y-6 px-8 md:px-12 lg:px-16">
                    <h1
                      className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight drop-shadow-lg [&>span]:text-primary"
                      dangerouslySetInnerHTML={{ __html: slide.title }}
                    />
                    <p className="text-xl md:text-2xl font-semibold text-white drop-shadow-md">
                      {slide.subtitle}
                    </p>

                    {slide.benefits && (
                      <div className="space-y-4 pt-4">
                        {slide.benefits.map((benefit, index) => {
                          const Icon = benefit.icon;
                          return (
                            <div key={index} className="flex items-start gap-3">
                              <Icon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                              <p className="text-white text-sm md:text-base drop-shadow-sm">
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
                        className="text-base md:text-lg px-8 py-6 bg-primary hover:bg-primary/90"
                      >
                        <Link
                          href={slide.buttonLink}
                          className="text-white font-semibold"
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
        <CarouselPrevious className="hidden md:flex left-4 bg-white/10 text-white hover:bg-white/20" />
        <CarouselNext className="hidden md:flex right-4 bg-white/10 text-white hover:bg-white/20" />
      </Carousel>

      {/* Dots Navigation */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              current === index + 1
                ? "w-8 bg-primary"
                : "w-2 bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <Mouse className="md:block hidden w-6 h-6 text-white/80 drop-shadow-lg" />
        <CircleArrowDown className="block md:hidden w-6 h-6 text-white/80 drop-shadow-lg" />
      </div>
    </div>
  );
}
