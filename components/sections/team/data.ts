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
    image: '/images/team/douglas.jpg',
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
    name: 'Alliance - Vidros e Espelhos',
    logo: '/images/partners/alliance.jpeg',
  },
  {
    name: 'Art Luz - Vidros e Espelhos',
    logo: '/images/partners/art-luz.png',
  },
  {
    name: 'Biadola - Tintas',
    logo: '/images/partners/biadola.jpeg',
  },
  {
    name: 'Casa Pinezi - Louças e Metais',
    logo: '/images/partners/casa-pinezi.png',
  },
  {
    name: 'CESTAC - Ar Condicionado',
    logo: '/images/partners/cestac.png',
  },
  {
    name: 'Clima UP - Ar Condicionado',
    logo: '/images/partners/clima-up.png',
  },
  {
    name: 'Dexco - Louças e Metais',
    logo: '/images/partners/dexco.png',
  },
  {
    name: 'Dunelli - Móveis Soltos',
    logo: '/images/partners/dunelli.jpeg',
  },
  {
    name: 'Grupo MSA - Indústria de Móveis',
    logo: '/images/partners/grupo-msa.jpeg',
  },
  {
    name: 'Home Fatto - Eletrodomésticos',
    logo: '/images/partners/home-fatto.png',
  },
  {
    name: 'Ilumine Light - Iluminação',
    logo: '/images/partners/ilumine-light.png',
  },
  {
    name: 'Maxi Banho - Louças e Metais',
    logo: '/images/partners/maxi-banho.jpeg',
  },
  {
    name: 'Nova Arte Acabamentos - Louças, Metais e Porcelanatos',
    logo: '/images/partners/nova-arte.png',
  },
  {
    name: 'Portobello Shop - Louças, Metais e Porcelanatos',
    logo: '/images/partners/portobello.jpeg',
  },
  {
    name: 'Rossi - Mármores',
    logo: '/images/partners/rossi.jpeg',
  },
  {
    name: 'Santa Bárbara Acabamentos - Pisos e Revestimentos',
    logo: '/images/partners/santa-barbara.png',
  },
  {
    name: 'SEV Exclusivv - Vidros e Espelhos',
    logo: '/images/partners/sev-exclusivv.png',
  },
  {
    name: 'Staccato - Pisos, Revestimentos, Louças e Metais',
    logo: '/images/partners/staccato.png',
  },
  {
    name: 'Trinti - Móveis Soltos',
    logo: '/images/partners/trinti.png',
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
