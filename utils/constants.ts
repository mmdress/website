import { Facebook, Instagram } from 'lucide-react';
import { ROUTES } from './routes';

export const CONTACT_DATA = {
  email: 'contato@mmdress.com.br',
  whatsapp: {
    url: 'https://wa.me/5511943637873',
    phone: '(11) 94363-7873',
  },
  instagram: {
    url: 'https://www.instagram.com/mmdressarquitetura/',
    username: 'mmdressarquitetura',
  },
  facebook: {
    url: 'https://www.facebook.com/mmdressarquitetura/',
    username: 'mmdressarquitetura',
  },
  address: {
    url: 'https://maps.app.goo.gl/yECQqrdHaNzJTKam9',
    street: 'Av. Nazaré',
    number: '1729',
    neighborhood: 'Ipiranga',
    city: 'São Paulo',
    state: 'SP',
    zipCode: '04263-200',
    googleMapsUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.1389049690933!2d-46.6093801!3d-23.599350800000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5d375565d231%3A0xd17f935053d58acd!2sMMDRESS%20Arquitetura%20e%20Interiores!5e0!3m2!1spt-BR!2sbr!4v1761177210521!5m2!1spt-BR!2sbr',
  }
};

export const NAV_ITEMS = [
  { href: ROUTES.HOME, label: 'Início' },
  { href: ROUTES.ABOUT, label: 'Sobre' },
  { href: ROUTES.SERVICES, label: 'Serviços' },
  { href: ROUTES.PROJECTS, label: 'Projetos' },
  { href: ROUTES.TEAM, label: 'Equipe' },
  { href: ROUTES.HOW_IT_WORKS, label: 'Como Funciona' },
  { href: ROUTES.CONTACT, label: 'Contato' },
] as const;

export const SOCIAL_LINKS = [
  {
    href: 'https://www.instagram.com/mmdress.arquitetura/',
    icon: Instagram,
    label: 'Instagram',
  },
  {
    href: 'https://www.facebook.com/mmdress.arquitetura',
    icon: Facebook,
    label: 'Facebook',
  },
] as const;
