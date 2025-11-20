import { Quote } from 'lucide-react';
import Image from 'next/image';

export interface Testimonial {
  name: string;
  role: string;
  image: string;
  text: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="flex h-full flex-col rounded-2xl bg-white p-8">
      {/* Quote Icon */}
      <Quote className="text-primary/30 mb-6 h-10 w-10" />

      {/* Testimonial Text */}
      <p className="text-foreground mb-8 grow leading-relaxed">
        &quot;{testimonial.text}&quot;
      </p>

      {/* Client Info */}
      <div className="flex items-center gap-4">
        <div className="shrink-0 overflow-hidden rounded-full">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            width={64}
            height={64}
            className="h-16 w-16 object-cover"
          />
        </div>
        <div>
          <div className="text-foreground mb-1">{testimonial.name}</div>
          <div className="text-muted-foreground text-sm">
            {testimonial.role}
          </div>
        </div>
      </div>
    </div>
  );
}
