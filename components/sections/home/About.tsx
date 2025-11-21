'use client';

import Image from 'next/image';
import {
  Building2,
  Calendar,
  Heart,
  Users,
  type LucideIcon,
} from 'lucide-react';
import { motion, useInView, type Variants } from 'motion/react';
import { useRef } from 'react';

interface Stat {
  icon: LucideIcon;
  value: string;
  label: string;
}

const STATS: Stat[] = [
  {
    icon: Building2,
    value: '150+',
    label: 'Projetos',
  },
  {
    icon: Calendar,
    value: '15+',
    label: 'Anos',
  },
  {
    icon: Users,
    value: '200+',
    label: 'Clientes Satisfeitos',
  },
  {
    icon: Heart,
    value: '100%',
    label: 'Dedicação',
  },
] as const;

const ABOUT_IMAGE = {
  src: '/images/home/about.jpg',
  alt: 'Luxury Interior Design',
  width: 1536,
  height: 1024,
} as const;

const ANIMATION_CONFIG = {
  viewport: {
    once: true,
    margin: '-100px',
  },
  transitions: {
    slideIn: { duration: 0.8 },
    scaleIn: { duration: 0.6, delay: 0.4 },
    contentDelay: 0.2,
    statsBaseDelay: 0.6,
    statsStagger: 0.1,
  },
} as const;

const slideInFromLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const slideInFromRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1 },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function About() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, ANIMATION_CONFIG.viewport);

  return (
    <section id="about" className="bg-white py-20 lg:py-32" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image */}
          <motion.div
            variants={slideInFromLeft}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            transition={ANIMATION_CONFIG.transitions.slideIn}
            className="relative order-2 lg:order-1"
          >
            <div className="aspect-4/5 overflow-hidden rounded-2xl">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              >
                <Image
                  src={ABOUT_IMAGE.src}
                  alt={ABOUT_IMAGE.alt}
                  width={ABOUT_IMAGE.width}
                  height={ABOUT_IMAGE.height}
                  className="h-full w-full object-cover"
                  priority
                />
              </motion.div>
            </div>
            {/* Decorative Element */}
            <motion.div
              variants={scaleIn}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              transition={ANIMATION_CONFIG.transitions.scaleIn}
              className="border-accent absolute -right-6 -bottom-6 -z-10 h-32 w-32 rounded-2xl border-2"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            variants={slideInFromRight}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            transition={{
              ...ANIMATION_CONFIG.transitions.slideIn,
              delay: ANIMATION_CONFIG.transitions.contentDelay,
            }}
            className="order-1 lg:order-2"
          >
            <div className="mb-6">
              <span className="text-primary text-sm tracking-widest uppercase">
                Sobre Nós
              </span>
            </div>

            <h2 className="text-foreground mb-6 text-3xl tracking-tight sm:text-4xl lg:text-5xl">
              Design com Propósito
              <br />e Elegância
            </h2>

            <div className="text-muted-foreground space-y-4">
              <p>
                A MMDress Arquitetura e Interiores nasceu da paixão por criar
                ambientes que transcendem o convencional. Com anos de
                experiência no mercado, nos especializamos em projetos
                residenciais e comerciais que unem estética refinada e
                funcionalidade inteligente.
              </p>

              <p>
                Nossa filosofia se baseia em compreender profundamente as
                necessidades e sonhos de cada cliente, traduzindo-os em espaços
                únicos que contam histórias e inspiram emoções. Cada projeto é
                uma jornada colaborativa onde design, conforto e inovação se
                encontram.
              </p>

              <p>
                Do conceito inicial à entrega final, cuidamos de cada detalhe
                com dedicação e excelência, garantindo que seu espaço não apenas
                atenda, mas supere todas as expectativas.
              </p>
            </div>

            {/* Stats */}
            <div className="border-border mt-12 grid grid-cols-2 gap-6 border-t pt-8 sm:grid-cols-4 sm:gap-8">
              {STATS.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    variants={fadeInUp}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    transition={{
                      duration: ANIMATION_CONFIG.transitions.scaleIn.duration,
                      delay:
                        ANIMATION_CONFIG.transitions.statsBaseDelay +
                        index * ANIMATION_CONFIG.transitions.statsStagger,
                    }}
                    whileHover={{ y: -5 }}
                  >
                    <Icon className="text-primary mb-3 h-8 w-8" />
                    <div className="text-primary mb-2 text-3xl sm:text-4xl">
                      {stat.value}
                    </div>
                    <div className="text-muted-foreground text-sm tracking-wide uppercase">
                      {stat.label}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
