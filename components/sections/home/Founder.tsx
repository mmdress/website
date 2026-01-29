import Image from 'next/image';

import {
  Award,
  Briefcase,
  GraduationCap,
  Quote,
  type LucideIcon,
} from 'lucide-react';

interface Credential {
  icon: LucideIcon;
  label: string;
  title: string;
  subtitle: string;
}

const CREDENTIALS: Credential[] = [
  {
    icon: GraduationCap,
    label: 'Formação',
    title: 'Arquitetura e Urbanismo',
    subtitle: 'Trajetória sólida com consistência e dedicação',
  },
  {
    icon: Briefcase,
    label: 'Experiência',
    title: '20+ Anos de Atuação',
    subtitle: 'Projetos entregues com excelência e responsabilidade',
  },
  {
    icon: Award,
    label: 'Reconhecimento',
    title: 'Liderança & Visão Estratégica',
    subtitle: 'Clientes que indicam, confiam e voltam',
  },
] as const;

export function Founder() {
  return (
    <section id="founder" className="bg-white py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="relative z-10 aspect-4/5 overflow-hidden rounded-2xl">
                <Image
                  src="/images/home/founder.jpg"
                  alt="Marcia Nadinho - Fundadora"
                  width={800}
                  height={1000}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
              <div className="border-primary absolute -right-6 -bottom-6 h-32 w-32 rounded-2xl border-2" />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="mb-6">
              <span className="text-primary text-sm tracking-widest uppercase">
                Fundadora
              </span>
            </div>

            <h2 className="text-foreground mb-4 text-3xl tracking-tight sm:text-4xl lg:text-5xl">
              Marcia Nadinho
            </h2>

            <div className="text-primary mb-8 text-xl font-semibold tracking-wide">
              Fundadora & CEO da MMDress Arquitetura & Interiores
            </div>

            <div className="bg-muted relative mb-8 rounded-xl p-8">
              <Quote className="text-primary/20 absolute top-4 left-4 h-10 w-10" />
              <p className="text-foreground pl-6 leading-relaxed italic">
                &quot;Há profissionais que projetam espaços. E há aqueles que
                transformam vidas através deles. Espaços precisam fazer sentido
                para quem vive neles. Precisam acolher, facilitar, inspirar e
                permanecer relevantes com o passar do tempo.&quot;
              </p>
            </div>

            <div className="text-muted-foreground mb-8 space-y-4 leading-relaxed">
              <p>
                A história de Marcia Nadinho começa muito antes da MMDress.
                Começa com uma inquietação genuína: entender pessoas. Entender
                seus sonhos, suas rotinas, seus silêncios e desejos mais
                profundos. Desde cedo, ela percebeu que arquitetura não é apenas
                técnica — é sensibilidade, escuta e responsabilidade.
              </p>

              <p>
                Formada em Arquitetura e Urbanismo, Márcia construiu sua
                trajetória com consistência, dedicação e um olhar atento aos
                detalhes. Ao longo dos anos, amadureceu uma visão muito clara:
                espaços precisam fazer sentido para quem vive neles.
              </p>

              <p>
                Sob sua liderança, a MMDress se tornou sinônimo de organização,
                estética refinada, transparência e entregas feitas com
                responsabilidade. Marcia acompanha cada projeto de perto,
                conduzindo decisões com firmeza e cuidado. Seus clientes não se
                sentem apenas atendidos — sentem-se amparados.
              </p>
            </div>

            <div className="space-y-4">
              {CREDENTIALS.map((credential) => {
                const Icon = credential.icon;
                return (
                  <div
                    key={credential.label}
                    className="flex items-start gap-4"
                  >
                    <div className="bg-accent/80 text-primary flex h-12 w-12 shrink-0 items-center justify-center rounded-xl">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="text-muted-foreground mb-1 text-sm tracking-wide uppercase">
                        {credential.label}
                      </div>
                      <div className="text-foreground">
                        {credential.title}
                        <br />
                        <span className="text-muted-foreground text-sm">
                          {credential.subtitle}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
