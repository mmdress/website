import {
  Phone,
  Mail,
  Clock,
  MapPin,
} from 'lucide-react';
import type { ContactInfo, InfoCard } from './types';
import { SOCIAL_LINKS } from '@/utils/constants';

export { SOCIAL_LINKS };
export const CONTACT_INFO: ContactInfo[] = [
  {
    icon: Phone,
    label: 'Telefone / WhatsApp',
    content: '(11) 94363-7873',
    href: 'tel:+5511943637873',
  },
  {
    icon: Mail,
    label: 'E-mail',
    content: 'contato@mmdress.arq.br',
    href: 'mailto:contato@mmdress.arq.br',
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
  src: 'https://images.unsplash.com/photo-1723271198638-8035292089a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBvZmZpY2UlMjBidWlsZGluZyUyMGZhY2FkZXxlbnwxfHx8fDE3NjE0MjQzMjV8MA&ixlib=rb-4.1.0&q=80&w=1080',
  alt: 'Fachada MMDress Arquitetura',
};
