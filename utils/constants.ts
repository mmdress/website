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
