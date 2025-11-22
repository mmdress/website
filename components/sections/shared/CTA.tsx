import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import { Button } from '@/components/ui';
import { ROUTES } from '@/utils/routes';

const CTA_CONTENT = {
  label: 'Vamos Conversar',
  title: {
    line1: 'Pronto para Transformar',
    line2: 'Seu Espaço?',
  },
  description:
    'Entre em contato e descubra como podemos criar o projeto perfeito para você. Agende uma consulta sem compromisso.',
  buttonText: 'Solicitar Orçamento',
} as const;

export function CTA() {
  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-accent border-primary relative overflow-hidden border-l-4 p-12 text-center lg:p-16">
          <div className="mx-auto max-w-2xl">
            <div className="mb-6 flex items-center justify-center gap-3">
              <div className="bg-accent h-px w-12" />
              <span className="text-accent text-sm tracking-[0.3em] uppercase">
                {CTA_CONTENT.label}
              </span>
              <div className="bg-accent h-px w-12" />
            </div>

            <h2 className="text-primary mb-6 text-4xl tracking-tight sm:text-5xl lg:text-6xl">
              {CTA_CONTENT.title.line1}
              <br />
              {CTA_CONTENT.title.line2}
            </h2>

            <p className="text-muted-foreground mb-10 text-xl leading-relaxed">
              {CTA_CONTENT.description}
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild className="px-12 py-6 font-semibold uppercase">
                <Link href={ROUTES.CONTACT}>
                  {CTA_CONTENT.buttonText}
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
