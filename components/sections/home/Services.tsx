'use client';

import {
  Ruler,
  Palette,
  Building2,
  Home,
  Lightbulb,
  FileCheck,
  type LucideIcon,
} from 'lucide-react';
import { motion, useInView, type Variants } from 'motion/react';
import { useRef } from 'react';

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

const SERVICES: Service[] = [
  {
    icon: Building2,
    title: 'Arquitetura Residencial',
    description:
      'Projetos arquitetônicos completos para residências que refletem seu estilo de vida e personalidade.',
  },
  {
    icon: Home,
    title: 'Design de Interiores',
    description:
      'Ambientes interiores sofisticados com seleção cuidadosa de materiais, cores e mobiliário.',
  },
  {
    icon: Ruler,
    title: 'Projetos Comerciais',
    description:
      'Espaços comerciais que unem identidade de marca com funcionalidade e conforto.',
  },
  {
    icon: Palette,
    title: 'Consultoria de Design',
    description:
      'Orientação especializada para escolha de acabamentos, cores e elementos decorativos.',
  },
  {
    icon: Lightbulb,
    title: 'Projeto Luminotécnico',
    description:
      'Iluminação estratégica que valoriza ambientes e cria atmosferas únicas.',
  },
  {
    icon: FileCheck,
    title: 'Acompanhamento de Obra',
    description:
      'Gestão e fiscalização para garantir que o projeto seja executado com perfeição.',
  },
] as const;

const ANIMATION_CONFIG = {
  viewport: {
    once: true,
    margin: '-100px',
  },
  transitions: {
    header: { duration: 0.3 },
    item: { duration: 0.3, stagger: 0.1 },
  },
} as const;

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const iconHover: Variants = {
  rest: { scale: 1, rotate: 0 },
  hover: { scale: 1.1, rotate: 5 },
};

export function Services() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, ANIMATION_CONFIG.viewport);

  return (
    <section id="services" className="bg-muted py-20 lg:py-32" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          transition={ANIMATION_CONFIG.transitions.header}
          className="mb-16 max-w-2xl"
        >
          <div className="mb-6">
            <span className="text-primary text-sm tracking-widest uppercase">
              Nossos Serviços
            </span>
          </div>
          <h2 className="text-foreground mb-6 text-3xl tracking-tight sm:text-4xl lg:text-5xl">
            Soluções Completas
            <br />
            em Arquitetura
          </h2>
          <p className="text-muted-foreground">
            Oferecemos um portfólio completo de serviços para transformar seus
            espaços em ambientes extraordinários.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={fadeInUp}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                transition={{
                  duration: ANIMATION_CONFIG.transitions.item.duration,
                  delay: index * ANIMATION_CONFIG.transitions.item.stagger,
                }}
                whileHover={{ y: -10 }}
                className="group rounded-2xl bg-white p-8 transition-all duration-300 hover:shadow-lg"
              >
                <div className="mb-6">
                  <motion.div
                    variants={iconHover}
                    initial="rest"
                    whileHover="hover"
                    className="bg-primary/10 text-accent group-hover:bg-accent inline-flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-300 group-hover:text-white"
                  >
                    <Icon className="text-primary h-7 w-7" />
                  </motion.div>
                </div>

                <h3 className="text-foreground mb-3 text-xl">
                  {service.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
