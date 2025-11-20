'use client';

import {
  LayoutDashboard,
  Users,
  ShoppingCart,
  Ruler,
  Award,
  FileText,
  Clock,
  Headphones,
  type LucideIcon,
} from 'lucide-react';
import { motion, useInView, type Variants } from 'motion/react';
import { useRef } from 'react';

interface Differential {
  icon: LucideIcon;
  title: string;
  description: string;
}

const DIFFERENTIALS: Differential[] = [
  {
    icon: LayoutDashboard,
    title: 'Design Personalizado',
    description:
      'Desenvolvemos projetos exclusivos com renderizações 3D fotorrealistas, permitindo que você visualize cada ambiente antes mesmo da execução começar.',
  },
  {
    icon: Users,
    title: 'Gestão Completa',
    description:
      'Coordenamos toda a equipe de profissionais e fornecedores, eliminando preocupações com múltiplos contatos e garantindo harmonia na execução.',
  },
  {
    icon: ShoppingCart,
    title: 'Curadoria de Materiais',
    description:
      'Selecionamos e adquirimos todos os materiais necessários, economizando seu tempo e garantindo escolhas certeiras para o seu projeto.',
  },
  {
    icon: Ruler,
    title: 'Marcenaria Exclusiva',
    description:
      'Projetamos e executamos móveis planejados sob medida, otimizando espaços e criando soluções funcionais que refletem seu estilo.',
  },
  {
    icon: Award,
    title: 'Expertise Comprovada',
    description:
      'Nossa equipe de arquitetos e engenheiros possui vasta experiência, com mais de 120 projetos entregues em São Paulo, assegurando excelência em cada detalhe.',
  },
  {
    icon: FileText,
    title: 'Transparência Financeira',
    description:
      'Apresentamos orçamento detalhado e estudo de viabilidade antes do início, garantindo total clareza sobre o investimento do seu projeto.',
  },
  {
    icon: Clock,
    title: 'Compromisso com Prazos',
    description:
      'Cumprimos rigorosamente o cronograma estabelecido em contrato, proporcionando segurança e previsibilidade para o seu planejamento.',
  },
  {
    icon: Headphones,
    title: 'Suporte Contínuo',
    description:
      'Mantemos você informado com atualizações constantes via WhatsApp e oferecemos assistência pós-entrega para sua total tranquilidade.',
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

export function Differentials() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, ANIMATION_CONFIG.viewport);

  return (
    <section className="bg-muted py-20 lg:py-32" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            transition={ANIMATION_CONFIG.transitions.header}
            className="mb-16 lg:mb-20"
          >
            <span className="text-primary mb-6 block text-sm tracking-widest uppercase">
              Por que escolher a <span className="font-bold">MMDress</span>
            </span>
            <h2 className="text-foreground mb-6 max-w-3xl text-3xl tracking-tight sm:text-4xl lg:text-5xl">
              Excelência em cada etapa do seu projeto
            </h2>
          </motion.div>

          {/* Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
            {DIFFERENTIALS.map((differential, index) => {
              const Icon = differential.icon;
              return (
                <motion.div
                  key={differential.title}
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
                  {/* Icon */}
                  <div className="mb-6">
                    <motion.div
                      variants={iconHover}
                      initial="rest"
                      whileHover="hover"
                      className="bg-muted text-foreground group-hover:bg-accent group-hover:text-primary flex h-16 w-16 items-center justify-center rounded-2xl transition-all duration-300"
                    >
                      <Icon className="h-8 w-8" />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <h3 className="text-foreground mb-3 text-xl font-semibold tracking-tight">
                    {differential.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {differential.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
