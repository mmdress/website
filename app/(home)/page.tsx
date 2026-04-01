import type { Metadata } from 'next';

import {
  About,
  Differentials,
  Founder,
  Hero,
  Portfolio,
  Services,
  Testimonials,
  Contact,
} from '@/components/sections/home';

export const metadata: Metadata = {
  title: 'Início',
  description:
    'Arquitetura e design de interiores: projetos que transformam espaços em experiências únicas, do conceito à entrega.',
  openGraph: {
    description:
      'Arquitetura e design de interiores: projetos que transformam espaços em experiências únicas, do conceito à entrega.',
    images: [{ url: '/images/home/hero-01.jpg', alt: 'MMDress' }],
  },
};

export default function Home() {
  return (
    <div className="relative w-screen">
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Differentials />
      <Founder />
      <Testimonials />
      <Contact />
    </div>
  );
}
