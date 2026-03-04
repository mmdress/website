import Image from 'next/image';
import { GraduationCap } from 'lucide-react';

import { PARTNERS } from './data';
import { Badge } from '@/components/ui';

export function Partners() {
  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <span className="text-primary mb-6 block text-sm font-semibold tracking-widest uppercase">
            Sócios
          </span>
          <h2 className="text-foreground mb-6 text-3xl tracking-tight sm:text-4xl lg:text-5xl">
            Liderança e Visão
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl leading-relaxed">
            Conheça os sócios que lideram a MMDress com paixão, expertise e
            dedicação à excelência em cada projeto.
          </p>
        </div>

        <div className="space-y-32">
          {PARTNERS.map((member, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <div
                key={member.id}
                className={`grid items-start gap-12 lg:grid-cols-2 lg:gap-20 ${
                  isReversed ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={isReversed ? 'lg:order-2' : ''}>
                  <div className="bg-muted relative aspect-3/4 overflow-hidden rounded-lg">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={600}
                      height={800}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>

                <div className={isReversed ? 'lg:order-1' : ''}>
                  <div className="mb-6">
                    <span className="text-primary text-sm font-semibold tracking-widest uppercase">
                      {member.role}
                    </span>
                  </div>

                  <h2 className="text-foreground mb-4 text-3xl sm:text-4xl">
                    {member.name}
                  </h2>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {member.bio}
                  </p>

                  <div className="border-border mb-6 border-b pb-6">
                    <div className="flex items-start gap-3">
                      <GraduationCap className="text-primary mt-1 h-5 w-5 shrink-0" />
                      <div>
                        <div className="text-muted-foreground mb-1 text-sm tracking-wide uppercase">
                          Formação
                        </div>
                        <div className="text-foreground">
                          {member.education}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-8">
                    <div className="text-muted-foreground mb-3 text-sm tracking-wide uppercase">
                      Especialidades
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty, index) => (
                        <Badge key={index} variant="default">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
