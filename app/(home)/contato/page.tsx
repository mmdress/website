import type { Metadata } from 'next';

import { PageHeader } from '@/components/layout';
import { ContactSection, MapSection, OfficeSection } from '@/components/sections/contact';

export const metadata: Metadata = {
  title: 'Entre em Contato',
  description:
    'Estamos prontos para transformar seus sonhos em realidade. Entre em contato e agende uma conversa sem compromisso.',
  openGraph: {
    description:
      'Estamos prontos para transformar seus sonhos em realidade. Entre em contato e agende uma conversa sem compromisso.',
    images: [{ url: '/images/contact/header.jpg', alt: 'Entre em Contato' }],
  },
};

export default function Contact() {
  return (
    <div className="pt-20 lg:pt-24">
      <PageHeader
        badge="Entre em Contato"
        title={
          <span className="truncate">
            Vamos Criar Algo
            <br />
            <span className="text-primary">Extraordinário Juntos</span>
          </span>
        }
        description="Estamos prontos para transformar seus sonhos em realidade. Entre em contato e agende uma conversa sem compromisso."
        backgroundImage={{
          src: '/images/contact/header.jpg',
          alt: 'Entre em Contato',
        }}
      />
      <ContactSection />
      <MapSection />
      <OfficeSection />
    </div>
  );
}
