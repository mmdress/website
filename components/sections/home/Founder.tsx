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
    title: 'Arquitetura e Urbanismo - FAU-USP',
    subtitle: 'Especialização em Design de Interiores e Sustentabilidade',
  },
  {
    icon: Briefcase,
    label: 'Experiência',
    title: '15+ Anos de Atuação',
    subtitle: '150+ Projetos Executados com Excelência',
  },
  {
    icon: Award,
    label: 'Reconhecimentos',
    title: 'CAU/BR Ativa | CREA Registrada',
    subtitle: 'Premiações em Design de Interiores e Arquitetura Residencial',
  },
] as const;

export function Founder() {
  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="aspect-4/5 overflow-hidden rounded-2xl">
                <Image
                  src="/images/home/founder.jpg"
                  alt="Mariana Medeiros - Fundadora"
                  width={800}
                  height={1000}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
              {/* Decorative Element */}
              <div className="border-accent absolute -right-6 -bottom-6 -z-10 h-32 w-32 rounded-2xl border-2" />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="mb-6">
              <span className="text-primary text-sm tracking-widest uppercase">
                Fundadora
              </span>
            </div>

            <h2 className="text-foreground mb-4 text-3xl tracking-tight sm:text-4xl lg:text-5xl">
              Mariana Medeiros
            </h2>

            <div className="text-primary mb-8 text-xl font-semibold tracking-wide uppercase">
              Arquiteta & Urbanista
            </div>

            {/* Quote */}
            <div className="bg-muted relative mb-8 rounded-xl p-8">
              <Quote className="text-primary/20 absolute top-4 left-4 h-10 w-10" />
              <p className="text-foreground pl-6 leading-relaxed italic">
                &quot;Acredito que arquitetura vai além de criar espaços
                bonitos. É sobre entender profundamente as pessoas, seus sonhos
                e sua forma de viver, e traduzir isso em ambientes que inspiram,
                acolhem e transformam vidas.&quot;
              </p>
            </div>

            {/* Biography */}
            <div className="text-muted-foreground mb-8 space-y-4 leading-relaxed">
              <p>
                Formada pela FAU-USP, Mariana fundou a MMDress Arquitetura e
                Interiores em 2009, após anos de experiência em renomados
                escritórios de arquitetura. Sua visão única de unir estética
                refinada com funcionalidade inteligente se tornou a assinatura
                do escritório.
              </p>

              <p>
                Com mais de 15 anos de experiência, já liderou mais de 150
                projetos residenciais e comerciais, sempre com foco na
                satisfação total do cliente e na excelência de cada detalhe.
              </p>
            </div>

            {/* Credentials */}
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
