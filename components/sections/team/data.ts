import { Award, GraduationCap, Briefcase } from 'lucide-react';

import type { TeamMember, BrandPartner, TeamValue } from './types';

export const PARTNERS: TeamMember[] = [
  {
    id: 1,
    name: 'Marcia Nadinho',
    role: 'Fundadora & CEO',
    image: '/images/team/marcia.jpg',
    education: 'Arquitetura e Urbanismo',
    specialties: [
      'Liderança Estratégica',
      'Gestão de Projetos',
      'Visão Comercial',
    ],
    bio: 'Márcia construiu sua trajetória de forma sólida e multidisciplinar, atuando em empresas de grande porte em posições estratégicas antes de fundar a MMDress. Movida por uma inquietação genuína de entender pessoas e seus sonhos, ela desenvolveu uma visão única que une sensibilidade estética, rigor técnico e gestão eficiente. Sob sua liderança, cada projeto é conduzido com critério, clareza e responsabilidade, criando espaços que fazem sentido e transformam vidas.',
  },
  {
    id: 2,
    name: 'Douglas Nadinho',
    role: 'Responsável Marcenaria',
    image: '/images/team/douglas.png',
    education: 'Formado em Administração',
    specialties: [
      'Gestão de Marcenaria',
      'Planejamento de Produção',
      'Controle de Qualidade',
    ],
    bio: 'À frente do setor de marcenaria da MMDress Arquitetura e Interiores, Douglas é o responsável por transformar ideias em realidade tangível, unindo técnica, precisão e criatividade em cada detalhe. Como sócio da empresa, sua missão é garantir que cada peça reflita a excelência, a funcionalidade e o design que são marcas registradas do nosso trabalho. Através da marcenaria, ele dá forma aos sonhos dos nossos clientes, criando ambientes personalizados que unem beleza, durabilidade e sofisticação. Com dedicação e visão estratégica, Douglas segue impulsionando a MMDress como referência em marcenaria de alto padrão, contribuindo para entregas impecáveis que encantam e surpreendem.',
  },
];

export const OTHER_MEMBERS: TeamMember[] = [
  {
    id: 1,
    name: 'Ana Fiorin',
    role: 'Designer de Interiores & Projetista',
    bio: 'Desenvolve projetos com dedicação, atenção aos detalhes e foco total nas necessidades do cliente.',
    image: '/images/team/ana-fiorin.jpg',
    specialties: ['Projetos de Interiores', 'Detalhamento Técnico'],
  },
  {
    id: 2,
    name: 'Apoena Mesquita',
    role: 'Arquiteta',
    bio: 'Atua no desenvolvimento dos projetos, garantindo soluções funcionais, estéticas e alinhadas às expectativas do cliente.',
    image: '/images/team/apoena-mesquita.jpg',
    specialties: ['Arquitetura', 'Desenvolvimento de Projetos'],
  },
  {
    id: 3,
    name: 'Geovana Borin',
    role: 'Arquiteta & Gerente Comercial',
    bio: 'Desenvolve os projetos e gerencia a área comercial com excelência, conectando estratégia, atendimento e resultados.',
    image: '/images/team/geovana-borin.jpg',
    specialties: [
      'Arquitetura',
      'Gestão Comercial',
      'Relacionamento com Clientes',
    ],
  },
  {
    id: 4,
    name: 'Isabela Lopes',
    role: 'Designer de Interiores & Projetista',
    bio: 'Responsável pelo desenvolvimento dos projetos e pelo suporte completo ao cliente ao longo de todo o processo.',
    image: '/images/team/isabela-lopes.jpg',
    specialties: ['Projetos de Interiores', 'Suporte ao Cliente'],
  },
  {
    id: 5,
    name: 'Lana Kristiny',
    role: 'Auxiliar de Projetos',
    bio: 'Auxilia todo o time de projetos, organiza e entrega documentações e acompanha as obras junto à equipe.',
    image: '/images/team/lana-kristiny.jpg',
    specialties: [
      'Apoio a Projetos',
      'Documentação',
      'Acompanhamento de Obras',
    ],
  },
  {
    id: 6,
    name: 'Catharina D’Almeida',
    role: 'Auxiliar De Projetos & Projetista',
    bio: 'Executa projetos civis com dedicação, atenção técnica e comprometimento com os prazos.',
    image: '/images/team/catharina-dalmeida.jpg',
    specialties: ['Projetos Civis', 'Detalhamento Técnico'],
  },
  {
    id: 7,
    name: 'Maria Zahner',
    role: 'Assistente de Projetos',
    bio: 'Executa projetos com excelência, apoia o time em todas as demandas, e dá suporte direto à gestão.',
    image: '/images/team/maria-zahner.jpg',
    specialties: ['Projetos de Interiores', 'Apoio a Projetos'],
  },
  {
    id: 8,
    name: 'Isabella Nadinho',
    role: 'Analista Executiva',
    bio: 'Responsável pela gestão do time executivo, orçamentos e acompanhamento das obras, garantindo alinhamento e eficiência.',
    image: '/images/team/isabella-nadinho.jpg',
    specialties: ['Gestão Executiva e orçamentária', 'Acompanhamento'],
  },
  {
    id: 9,
    name: 'Lilian Rodrigues',
    role: 'Assistente Administrativo',
    bio: 'Realiza o acompanhamento administrativo do início ao fim dos processos, atua no atendimento ao cliente e dá suporte às demandas do escritório, garantindo organização e eficiência no dia a dia',
    image: '/images/team/lilian-rodrigues.jpg',
    specialties: [
      'Rotinas Administrativas',
      'Atendimento ao Cliente',
      'Organização',
      'Suporte Operacional',
    ],
  },
];

export const BRAND_PARTNERS: BrandPartner[] = [
  {
    name: 'Tok&Stok',
    logo: 'https://images.unsplash.com/photo-1611915387288-fd8d2f5f928b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBmdXJuaXR1cmUlMjBicmFuZHxlbnwxfHx8fDE3NjExNDEyMDB8MA&ixlib=rb-4.1.0&q=80&w=400',
  },
  {
    name: 'Leroy Merlin',
    logo: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwaW1wcm92ZW1lbnQlMjBzdG9yZXxlbnwxfHx8fDE3NjExNDEyMDB8MA&ixlib=rb-4.1.0&q=80&w=400',
  },
  {
    name: 'Portobello',
    logo: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aWxlcyUyMG1hcmJsZXxlbnwxfHx8fDE3NjExNDEyMDB8MA&ixlib=rb-4.1.0&q=80&w=400',
  },
  {
    name: 'Tramontina',
    logo: 'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraXRjaGVuJTIwd2FyZXxlbnwxfHx8fDE3NjExNDEyMDB8MA&ixlib=rb-4.1.0&q=80&w=400',
  },
  {
    name: 'Deca',
    logo: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXRocm9vbSUyMGZpeHR1cmVzfGVufDF8fHx8MTc2MTE0MTIwMHww&ixlib=rb-4.1.0&q=80&w=400',
  },
  {
    name: 'Marcenaria Premium',
    logo: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kd29ya2luZ3xlbnwxfHx8fDE3NjExNDEyMDB8MA&ixlib=rb-4.1.0&q=80&w=400',
  },
];

export const TEAM_VALUES: TeamValue[] = [
  {
    icon: Award,
    title: 'Excelência',
    description: 'Buscamos a perfeição em cada detalhe dos nossos projetos.',
  },
  {
    icon: GraduationCap,
    title: 'Aprendizado Contínuo',
    description: 'Investimos constantemente em capacitação e atualização.',
  },
  {
    icon: Briefcase,
    title: 'Profissionalismo',
    description: 'Comprometimento total com prazos, qualidade e ética.',
  },
];
