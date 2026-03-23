'use client';

import { useState } from 'react';
import { Quote } from 'lucide-react';

export interface Testimonial {
  name: string;
  text: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const MAX_TEXT_LENGTH = 180;

function getInitials(name: string): string {
  const parts = name
    .trim()
    .split(/\s+/)
    .filter(Boolean);

  if (parts.length === 0) {
    return '';
  }

  if (parts.length === 1) {
    return parts[0].charAt(0).toUpperCase();
  }

  return `${parts[0].charAt(0)}${parts[parts.length - 1].charAt(0)}`.toUpperCase();
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const isLongText = testimonial.text.length > MAX_TEXT_LENGTH;
  const displayText =
    isExpanded || !isLongText
      ? testimonial.text
      : `${testimonial.text.slice(0, MAX_TEXT_LENGTH).trimEnd()}...`;

  return (
    <div className="flex h-full flex-col rounded-2xl bg-white p-8">
      <Quote className="text-primary/30 mb-6 h-10 w-10" />

      <p className="text-foreground mb-8 grow leading-relaxed">
        &quot;{displayText}&quot;
        {isLongText ? (
          <>
            {' '}
            <button
              type="button"
              onClick={() => setIsExpanded((prev) => !prev)}
              className="text-primary font-semibold transition-opacity hover:opacity-80"
            >
              {isExpanded ? 'Ver menos' : 'Ver mais'}
            </button>
          </>
        ) : null}
      </p>

      <div className="flex items-center gap-4">
        <div className="shrink-0 overflow-hidden rounded-full bg-primary text-white flex items-center justify-center text-lg font-bold size-8">
          {getInitials(testimonial.name)}
        </div>
        <div className="text-foreground">{testimonial.name}</div>
      </div>
    </div>
  );
}
