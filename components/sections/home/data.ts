import {
  Home,
  Palette,
  PenTool,
  Shield,
  Eye,
  Layers,
  Gem,
  Sparkles,
  Target,
  LayoutDashboard,
  Users,
  ShoppingCart,
  Ruler,
  Award,
  FileText,
  Clock,
  Headphones,
  Building2,
  GraduationCap,
  Briefcase,
  type LucideIcon,
} from 'lucide-react';

import { ProjectCategory } from '@/utils/enums';
import { ROUTES } from '@/utils/routes';

import type { Project } from './ProjectCard';
import type { Testimonial } from './TestimonialCard';

// Hero Section Data
export interface HeroSlide {
  id: number;
  src: string;
  alt: string;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  benefits: {
    icon: LucideIcon;
    text: string;
  }[];
}

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    src: '/images/home/hero-02.jpg',
    alt: 'Slide 2',
    title: 'Arquitetura e Interiores de <span>Alto Padrão</span>',
    subtitle:
      'Design autoral pensado para cada espaço, cada rotina e cada detalhe',
    buttonText: 'Nossos serviços',
    buttonLink: ROUTES.SERVICES,
    benefits: [
      {
        icon: PenTool,
        text: 'Soluções exclusivas para valorizar espaço e estilo de vida',
      },
      {
        icon: Eye,
        text: 'Ambientes elegantes, funcionais e atemporais',
      },
      {
        icon: Palette,
        text: 'Curadoria estética com harmonia e personalidade',
      },
      {
        icon: Home,
        text: 'Planejamento inteligente para modernizar ambientes',
      },
      {
        icon: Shield,
        text: 'Gestão completa com fidelidade ao projeto',
      },
    ],
  },
  {
    id: 2,
    src: '/images/home/hero-03.jpg',
    alt: 'Slide 3',
    title: 'Marcenaria <span>Especializada</span>',
    subtitle: 'Móveis sob medida criados com precisão, estética e excelência',
    buttonText: 'Entre em contato',
    buttonLink: ROUTES.CONTACT,
    benefits: [
      {
        icon: PenTool,
        text: 'Projetados exclusivamente para o seu espaço com estética refinada',
      },
      {
        icon: Layers,
        text: 'Soluções únicas que aliam organização e sofisticação',
      },
      {
        icon: Eye,
        text: 'Curadoria de materiais e detalhes que elevam o resultado',
      },
      {
        icon: Home,
        text: 'Cada peça nasce a partir do projeto arquitetônico',
      },
      {
        icon: Gem,
        text: 'Seleção criteriosa para garantir beleza e longevidade',
      },
    ],
  },
];

export const HERO_BENEFITS = [
  {
    icon: Eye,
    text: 'Olhar sensível, estratégico e profundamente autoral',
  },
  {
    icon: Target,
    text: 'Projetos pensados para pessoas que reconhecem valor e estética',
  },
  {
    icon: Sparkles,
    text: 'Espaços que refletem quem você é e elevam sua rotina',
  },
  {
    icon: Gem,
    text: 'Luxo contemporâneo com leveza, sofisticação e precisão',
  },
  {
    icon: Shield,
    text: 'Exclusivo, atemporal e inspirador em cada detalhe',
  },
];

export const HERO_STATISTICS = [
  { value: '+300', label: 'Projetos entregues' },
  { value: '+25 MIL', label: 'M² Projetados' },
  { value: '+7', label: 'Anos de experiência' },
];

// About Section Data
export interface AboutStat {
  icon: LucideIcon;
  value: string;
  label: string;
}

export const ABOUT_STATS: AboutStat[] = [
  {
    icon: Building2,
    value: '300+',
    label: 'Projetos',
  },
  {
    icon: GraduationCap,
    value: '15+',
    label: 'Anos',
  },
  {
    icon: Users,
    value: '200+',
    label: 'Clientes Satisfeitos',
  },
  {
    icon: Award,
    value: '100%',
    label: 'Dedicação',
  },
];

export const ABOUT_IMAGE = {
  src: '/images/home/about.jpg',
  alt: 'Luxury Interior Design',
  width: 1536,
  height: 1024,
} as const;

// Services Section Data
export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const SERVICES: Service[] = [
  {
    icon: Eye,
    title: 'Design Personalizado',
    description:
      'Projetos exclusivos com renderizações 3D realistas, permitindo visualizar cada ambiente com clareza e segurança antes da execução.',
  },
  {
    icon: Users,
    title: 'Gestão Completa',
    description:
      'Coordenamos equipes, fornecedores e cronogramas, eliminando preocupações e garantindo harmonia em todas as etapas.',
  },
  {
    icon: Palette,
    title: 'Curadoria de Materiais',
    description:
      'Seleção cuidadosa de materiais e acabamentos, otimizando seu tempo e assegurando escolhas coerentes com o conceito.',
  },
  {
    icon: Ruler,
    title: 'Marcenaria Exclusiva',
    description:
      'Marcenaria sob medida com soluções inteligentes, acabamento refinado e total integração ao projeto.',
  },
  {
    icon: Building2,
    title: 'Expertise Comprovada',
    description:
      'Equipe de arquitetos experientes com portfólio sólido, assegurando excelência técnica e atenção aos detalhes.',
  },
  {
    icon: Shield,
    title: 'Transparência Financeira',
    description:
      'Orçamentos claros e estudos de viabilidade desde o início, proporcionando previsibilidade e controle financeiro.',
  },
];

// Differentials Section Data
export interface Differential {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const DIFFERENTIALS: Differential[] = [
  {
    icon: LayoutDashboard,
    title: 'Design Personalizado',
    description:
      'Desenvolvemos projetos exclusivos, com renderizações 3D realistas, permitindo que você visualize cada ambiente com clareza e segurança antes do início da execução.',
  },
  {
    icon: Users,
    title: 'Gestão Completa',
    description:
      'Coordenamos equipes, fornecedores e cronogramas, eliminando preocupações e garantindo harmonia, organização e eficiência em todas as etapas do projeto.',
  },
  {
    icon: ShoppingCart,
    title: 'Curadoria de Materiais',
    description:
      'Selecionamos cuidadosamente materiais, acabamentos e fornecedores, otimizando seu tempo e assegurando escolhas coerentes com o conceito e qualidade desejada.',
  },
  {
    icon: Ruler,
    title: 'Marcenaria Exclusiva',
    description:
      'Projetamos e executamos marcenaria sob medida, com soluções inteligentes, acabamento refinado e total integração ao projeto arquitetônico e de interiores.',
  },
  {
    icon: Award,
    title: 'Expertise Comprovada',
    description:
      'Nossa equipe reúne arquitetos e profissionais experientes, com um portfólio sólido de projetos entregues, assegurando excelência técnica e atenção absoluta aos detalhes.',
  },
  {
    icon: FileText,
    title: 'Transparência Financeira',
    description:
      'Apresentamos orçamentos claros e estudos de viabilidade desde o início, proporcionando previsibilidade, controle financeiro e tranquilidade ao longo do processo.',
  },
  {
    icon: Clock,
    title: 'Compromisso com Prazos',
    description:
      'Cumprimos rigorosamente o cronograma estabelecido em contrato, oferecendo segurança, organização e previsibilidade para o seu planejamento.',
  },
  {
    icon: Headphones,
    title: 'Suporte Contínuo',
    description:
      'Mantemos um acompanhamento próximo e comunicação constante, com atualizações frequentes e suporte pós-entrega para total tranquilidade.',
  },
];

// Portfolio Section Data
export const PORTFOLIO_PROJECTS: Project[] = [
  /* Kitchen */
  {
    id: 1,
    title: 'Cozinha Azul com Ilha em Mármore',
    category: ProjectCategory.Kitchen,
    image: '/images/projects/kitchen-01.jpg',
    description: 'Marcenaria azul e bancada em mármore com visual sofisticado.',
  },
  {
    id: 2,
    title: 'Cozinha Clássica com Mesa Central',
    category: ProjectCategory.Kitchen,
    image:
      '/images/projects/kitchen-02.jpg',
    description: 'Armários brancos e madeira criam um ambiente leve e acolhedor.',
  },
  {
    id: 3,
    title: 'Cozinha Industrial com Prateleiras Abertas',
    category: ProjectCategory.Kitchen,
    image:
      '/images/projects/kitchen-03.jpg',
    description: 'Madeira, metal e tijolo aparente compõem um estilo urbano.',
  },
  /* Living Room */
  {
    id: 4,
    title: 'Sala de Estar Clara com Arte em Destaque',
    category: ProjectCategory.LivingRoom,
    image: '/images/projects/living-room-01.jpg',
    description: 'Base neutra com detalhes em azul para um visual leve.',
  },
  {
    id: 5,
    title: 'Sala de Estar Neutra com Composição Botânica',
    category: ProjectCategory.LivingRoom,
    image:
      '/images/projects/living-room-02.jpg',
    description: 'Tons suaves e elementos naturais trazem calma ao ambiente.',
  },
  {
    id: 6,
    title: 'Sala Escandinava com Painel de Madeira',
    category: ProjectCategory.LivingRoom,
    image:
      '/images/projects/living-room-03.jpg',
    description: 'Madeira clara e linhas simples reforcam o conforto visual.',
  },
  /* Dining Room */
  {
    id: 7,
    title: 'Sala de Jantar com Mesa em Madeira Natural',
    category: ProjectCategory.DiningRoom,
    image: '/images/projects/dining-room-01.jpg',
    description: 'Composicao acolhedora com pendente amplo e decoracao organica.',
  },
  {
    id: 8,
    title: 'Sala de Jantar Clara com Mesa Orgânica',
    category: ProjectCategory.DiningRoom,
    image: '/images/projects/dining-room-02.jpg',
    description: 'Luz natural e madeira clara deixam o ambiente mais leve.',
  },
  {
    id: 9,
    title: 'Jantar Compacto Integrado à Cozinha',
    category: ProjectCategory.DiningRoom,
    image: '/images/projects/dining-room-03.jpg',
    description: 'Mesa redonda cria um canto funcional e acolhedor.',
  },
  /* Bedroom */
  {
    id: 10,
    title: 'Quarto Contemporâneo com Iluminação Quente',
    category: ProjectCategory.Bedroom,
    image: '/images/projects/bedroom-01.jpg',
    description: 'Painel amadeirado e luz indireta reforcam o aconchego.',
  },
  {
    id: 11,
    title: 'Quarto Infantil com Beliche e Estudo',
    category: ProjectCategory.Bedroom,
    image: '/images/projects/bedroom-02.jpg',
    description: 'Solucao compacta que une descanso, brincadeira e apoio escolar.',
  },
  {
    id: 12,
    title: 'Quarto Aconchegante com Toques Rústicos',
    category: ProjectCategory.Bedroom,
    image: '/images/projects/bedroom-03.jpg',
    description: 'Madeira escura e tecidos suaves criam um clima acolhedor.',
  },
  /* Bathroom */
  {
    id: 13,
    title: 'Banheiro Elegante com Marcenaria Azul',
    category: ProjectCategory.Bathroom,
    image: '/images/projects/bathroom-01.jpg',
    description: 'Contraste entre azul, madeira e metais dourados destaca o ambiente.',
  },
  {
    id: 14,
    title: 'Banheiro Minimalista com Banheira Integrada',
    category: ProjectCategory.Bathroom,
    image: '/images/projects/bathroom-02.jpg',
    description: 'Volumes retos e luz indireta criam um visual sereno.',
  },
  {
    id: 15,
    title: 'Banheiro Compacto com Espelho Redondo',
    category: ProjectCategory.Bathroom,
    image: '/images/projects/bathroom-03.jpg',
    description: 'Layout funcional com box de vidro e marcenaria leve.',
  },
  /* Office */
  {
    id: 16,
    title: 'Home Office com Estante de Parede Inteira',
    category: ProjectCategory.Office,
    image: '/images/projects/office-01.jpg',
    description: 'Prateleiras amplas e bancada longa favorecem a organizacao.',
  },
  {
    id: 17,
    title: 'Escritório Planejado com Iluminação Embutida',
    category: ProjectCategory.Office,
    image: '/images/projects/office-02.jpg',
    description: 'Marcenaria escura e luz quente criam um ambiente mais reservado.',
  },
  {
    id: 18,
    title: 'Home Office Criativo com Painel Perfurado',
    category: ProjectCategory.Office,
    image: '/images/projects/office-03.jpg',
    description: 'Mesa clara e plantas trazem leveza para a rotina de trabalho.',
  },
  /* Other */
  {
    id: 19,
    title: 'Cozinha Clássica Azul com Janela Arqueada',
    category: ProjectCategory.Other,
    image: '/images/projects/other-01.jpg',
    description: 'Composicao tradicional com marcenaria azul e metais dourados.',
  },
  {
    id: 20,
    title: 'Sala de Estar com Vista para a Natureza',
    category: ProjectCategory.Other,
    image: '/images/projects/other-02.jpg',
    description: 'Grandes esquadrias e tons verdes conectam interior e paisagem.',
  },
  {
    id: 21,
    title: 'Cozinha Integrada com Jantar Compacto',
    category: ProjectCategory.Other,
    image: '/images/projects/other-03.jpg',
    description: 'Linguagem clean com marcenaria clara e detalhes em preto.',
  },
  {
    id: 22,
    title: 'Sala de Pé-Direito Duplo com Sofá em U',
    category: ProjectCategory.Other,
    image: '/images/projects/other-04.jpg',
    description: 'Ambiente amplo com vidro generoso e mobiliario marcante.',
  },
  {
    id: 23,
    title: 'Loft Contemporâneo com Integração Total',
    category: ProjectCategory.Other,
    image: '/images/projects/other-05.jpg',
    description: 'Concreto, madeira e mezanino definem a proposta do espaço.',
  },
  {
    id: 24,
    title: 'Living com Pé-Direito Alto e Madeira Clara',
    category: ProjectCategory.Other,
    image: '/images/projects/other-06.jpg',
    description: 'Ambiente integrado com muita luz natural e acabamento acolhedor.',
  },
];

export const PORTFOLIO_CATEGORIES: ProjectCategory[] = [
  ProjectCategory.All,
  ProjectCategory.Kitchen,
  ProjectCategory.LivingRoom,
  ProjectCategory.DiningRoom,
  ProjectCategory.Bedroom,
  ProjectCategory.Bathroom,
  ProjectCategory.Office,
  ProjectCategory.Other,
];

// Founder Section Data
export interface FounderCredential {
  icon: LucideIcon;
  label: string;
  title: string;
  subtitle: string;
}

export const FOUNDER_CREDENTIALS: FounderCredential[] = [
  {
    icon: GraduationCap,
    label: 'Formação',
    title: 'Arquitetura e Urbanismo',
    subtitle: 'Trajetória sólida com consistência e dedicação',
  },
  {
    icon: Briefcase,
    label: 'Experiência',
    title: '20+ Anos de Atuação',
    subtitle: 'Projetos entregues com excelência e responsabilidade',
  },
  {
    icon: Award,
    label: 'Reconhecimento',
    title: 'Liderança & Visão Estratégica',
    subtitle: 'Clientes que indicam, confiam e voltam',
  },
];

// Testimonials Section Data
export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Ana Florin',
    text: 'Escritório impecável e atendimento excelente! A equipe é muito atenciosa e receptiva. Indico de olhos fechados!',
  },
  {
    name: 'Vinicius Maciel',
    text: 'Oi boa tarde! Gostaria de compartilhar minha experiência com a MMDRESS,foi uma experiência incrível,eu nunca tinha feito uma reforma com uma empresa de arquitetura antes, contratei a MMDRESS para fazer uma reforma em um apartamento de 45m, e tenho que confessar, fiquei muito surpreendido com o resultado, ficou incrível eles são muito atenciosos e cuidadosos, muito obrigado MMDRESS pela atenção e cuidado com o meu apartamento. Quero agradecer toda equipe, Mirella, Geovana, David, Yuri, Douglas e Márcia. Até a próxima',
  },
  {
    name: 'Rosa Rose',
    text: 'Tive uma ótima experiência com a empresa. Profissionais competentes, atendimento organizado e soluções criativas. Destaque para a Geovana, muito atenciosa, profissional e sempre disposta a ajudar. Excelente liderança e cuidado com os detalhes!',
  },
  {
    name: 'Isabela Lopes',
    text: 'Minha experiência foi excelente, todos os profissionais são muito bem capacitados com a liderança da Márcia, Douglas Geovana e o Davi, o ambiente é muito bom e bem humorado.',
  },
  {
    name: 'Felipe Shiroma',
    text: 'Estava em busca de um lugar que cuidasse tanto da reforma quanto dos móveis planejados, e encontrei a MMdress. Recebi suporte completo durante toda a obra e fiquei extremamente satisfeito com o resultado. Sem dúvida, é o lugar certo onde: "Mãos que projetam sonhos!"',
  },
  {
    name: 'Tatiane Rodrigues',
    text: 'Super recomendo a MMDRESS, tive acompanhamento total do projeto, Márcia e sua equipe teve muita paciência em me atender e deixar os móveis do jeitinho que eu gostaria. Além disso me deu vários toques no apartamento que me ajudou MT em toda a decoração e finalização. Os móveis são de excelente qualidade e valores e condições de pagamento são ótimos. Quem visita meu apartamento fica encantado.',
  },
  {
    name: 'Lidiane Venâncio Coutinho',
    text: 'Excelente atendimento super indico a empresa MMDRESS Equipe capacitados desde o início da execução do projeto a entrega da obra final'
  },
  {
    name: 'Márcio Lupianes',
    text: 'Já realizei dois projetos com MMDress aos quais fiquei muito satisfeito com a criatividade em relação a arquitetura/ desenho, quanto a qualidade dos materiais. Assim como o suporte durante toda a obra.'
  }
];
