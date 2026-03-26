import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui';

import { TestimonialCard, type Testimonial } from './TestimonialCard';
import { TESTIMONIALS } from './data';

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-accent/70 py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 lg:mb-20">
            <div className="mb-6">
              <span className="text-primary text-sm tracking-widest uppercase font-bold">
                Depoimentos
              </span>
            </div>
            <h2 className="text-foreground mb-6 text-3xl tracking-tight sm:text-4xl lg:text-5xl">
              Experiências que Inspiram
            </h2>
            <p className="text-muted-foreground max-w-3xl text-lg">
              Descubra como nossos projetos personalizados transformam ambientes
              e criam histórias de satisfação em cada detalhe.
            </p>
          </div>

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
