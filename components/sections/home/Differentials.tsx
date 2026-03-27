'use client';

import { type LucideIcon } from 'lucide-react';
import { motion, useInView, type Variants } from 'motion/react';
import { useRef } from 'react';

import { DIFFERENTIALS } from './data';

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
    <section
      id="differentials"
      className="bg-accent/70 py-16 lg:py-24"
      ref={ref}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            transition={ANIMATION_CONFIG.transitions.header}
            className="mb-16 lg:mb-20"
          >
            <span className="text-primary mb-6 block text-sm tracking-widest uppercase font-bold">
              Por que escolher a MMDress
            </span>
            <h2 className="text-foreground mb-6 max-w-3xl text-3xl tracking-tight sm:text-4xl lg:text-5xl">
              Excelência em cada etapa do seu projeto
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              Na MMDress, cada detalhe é pensado para oferecer segurança,
              fluidez e alto padrão do início ao fim. Nosso processo une design
              autoral, gestão eficiente e acompanhamento próximo, garantindo uma
              experiência tranquila e resultados excepcionais.
            </p>
          </motion.div>

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
                  <div className="mb-6">
                    <motion.div
                      variants={iconHover}
                      initial="rest"
                      whileHover="hover"
                      className="bg-muted text-foreground group-hover:bg-accent group-hover:text-primary flex h-16 w-16 items-center justify-center rounded-2xl transition-all duration-300"
                    >
                      <Icon className="h-8 w-8 text-primary" />
                    </motion.div>
                  </div>

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
