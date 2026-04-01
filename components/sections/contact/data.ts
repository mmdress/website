import {
  Phone,
  Mail,
  Clock,
  MapPin,
} from 'lucide-react';
import type { ContactInfo, InfoCard } from './types';
import { CONTACT_DATA, SOCIAL_LINKS } from '@/utils/constants';

export { SOCIAL_LINKS };

export const CONTACT_INFO: ContactInfo[] = [
  {
    icon: Phone,
    label: 'Telefone / WhatsApp',
    content: CONTACT_DATA.whatsapp.phone,
    href: CONTACT_DATA.whatsapp.url,
  },
  {
    icon: Mail,
    label: 'E-mail',
    content: CONTACT_DATA.email,
    href: `mailto:${CONTACT_DATA.email}`,
  },
  {
    icon: Clock,
    label: 'Horário de Atendimento',
    content: 'Segunda a Sexta: 8h às 20h',
  },
];

export const INFO_CARDS: InfoCard[] = [
  {
    icon: MapPin,
    title: 'Localização Privilegiada',
    description:
      'Situado em uma das principais avenidas do bairro Ipiranga, com fácil acesso e estacionamento próximo.',
  },
  {
    icon: Clock,
    title: 'Visite Nosso Showroom',
    description:
      'Agendamento prévio recomendado para melhor atendê-lo. Entre em contato para marcar sua visita.',
  },
];

export const OFFICE_IMAGE = {
  src: '/images/contact/office.jpeg',
  alt: 'Fachada MMDress Arquitetura',
};
