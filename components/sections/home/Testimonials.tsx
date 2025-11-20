import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui';

import { TestimonialCard, type Testimonial } from './TestimonialCard';

const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Ana Paula e Carlos',
    role: 'Proprietários de Apartamento',
    image:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop',
    text: 'A MMDress transformou nosso apartamento antigo em um lar moderno e acolhedor. A atenção aos detalhes e o profissionalismo da equipe superaram todas as nossas expectativas.',
  },
  {
    name: 'Ricardo Mendes',
    role: 'Empresário',
    image:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop',
    text: 'Reforma completa do meu escritório. Projeto impecável, prazo cumprido e orçamento respeitado. A MMDress entendeu perfeitamente o conceito que eu queria transmitir.',
  },
  {
    name: 'Juliana e Felipe',
    role: 'Casal',
    image:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop',
    text: 'Desde o primeiro contato até a entrega final, a experiência foi excepcional. O projeto 3D nos ajudou a visualizar tudo antes da execução. Recomendamos de olhos fechados!',
  },
  {
    name: 'Marina Costa',
    role: 'Advogada',
    image:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop',
    text: 'A escolha pela MMDress foi a melhor decisão. Eles cuidaram de absolutamente tudo, desde o projeto até a escolha dos móveis. O resultado ficou ainda melhor do que imaginei.',
  },
  {
    name: 'Pedro e Camila',
    role: 'Médicos',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
    text: 'Profissionalismo, criatividade e comprometimento. A equipe da MMDress nos apresentou soluções que otimizaram cada centímetro do nosso espaço. Estamos muito satisfeitos!',
  },
  {
    name: 'Lucas Oliveira',
    role: 'Arquiteto',
    image:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop',
    text: 'Como profissional da área, posso afirmar que a qualidade técnica e estética dos projetos da MMDress é excepcional. A execução foi impecável e o acompanhamento constante fez toda a diferença.',
  },
] as const;

export function Testimonials() {
  return (
    <section className="bg-muted py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <div className="mb-16 lg:mb-20">
            <h2 className="text-foreground mb-6 text-3xl tracking-tight sm:text-4xl lg:text-5xl">
              Experiências que Inspiram
            </h2>
            <p className="text-muted-foreground max-w-3xl text-lg">
              Descubra como nossos projetos personalizados transformam ambientes
              e criam histórias de satisfação em cada detalhe.
            </p>
          </div>

          {/* Testimonials Carousel */}
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {TESTIMONIALS.map((testimonial) => (
                <CarouselItem
                  key={testimonial.name}
                  className="pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <TestimonialCard testimonial={testimonial} />
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Navigation */}
            <div className="mt-8 flex justify-end gap-2">
              <CarouselPrevious className="static translate-y-0" />
              <CarouselNext className="static translate-y-0" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
