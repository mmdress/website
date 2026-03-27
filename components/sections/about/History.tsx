import Image from 'next/image';

import { HISTORY_CONTENT, HISTORY_IMAGE } from './data';

export function History() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative order-2 lg:order-1">
            <div className="relative z-10 aspect-4/5 overflow-hidden rounded-2xl">
              <Image
                src={HISTORY_IMAGE.src}
                alt={HISTORY_IMAGE.alt}
                width={HISTORY_IMAGE.width}
                height={HISTORY_IMAGE.height}
                className="h-full w-full object-cover"
                priority
              />
            </div>
            <div className="border-primary absolute -right-6 -bottom-6 hidden h-32 w-32 rounded-2xl border-2 sm:block" />
          </div>

          <div className="order-1 lg:order-2">
            <div className="mb-6">
              <span className="text-primary text-sm tracking-widest uppercase font-bold">
                {HISTORY_CONTENT.label}
              </span>
            </div>

            <h2 className="text-foreground mb-6 text-3xl tracking-tight sm:text-4xl lg:text-5xl">
              {HISTORY_CONTENT.title}
              <br />
              {HISTORY_CONTENT.titleHighlight}
            </h2>

            <div className="text-muted-foreground space-y-4 leading-relaxed">
              {HISTORY_CONTENT.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
