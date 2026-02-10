import { Award, GraduationCap, Briefcase } from 'lucide-react';

import type { TeamMember, BrandPartner, TeamValue } from './types';

export const PARTNERS: TeamMember[] = [
  {
    id: 1,
    name: 'Marcia Nadinho',
    role: 'Fundadora & CEO',
    description:
      'Arquiteta com mais de 20 anos de experiência multidisciplinar, unindo visão comercial, gestão estratégica e sensibilidade estética.',
    image:
      '/images/team/marcia.jpg',
    education: 'Arquitetura e Urbanismo',
    specialties: [
      'Liderança Estratégica',
      'Gestão de Projetos',
      'Visão Comercial',
    ],
    bio: 'Márcia construiu sua trajetória de forma sólida e multidisciplinar, atuando em empresas de grande porte em posições estratégicas antes de fundar a MMDress. Movida por uma inquietação genuína de entender pessoas e seus sonhos, ela desenvolveu uma visão única que une sensibilidade estética, rigor técnico e gestão eficiente. Sob sua liderança, cada projeto é conduzido com critério, clareza e responsabilidade, criando espaços que fazem sentido e transformam vidas.',
    social: {
      linkedin: '#',
      instagram: 'https://www.instagram.com/mmdress.arquitetura/',
      email: 'marcia@mmdress.arq.br',
    },
  },
  {
    id: 2,
    name: 'Douglas Nadinho',
    role: 'Sócio',
    description:
      'Criativo visionário especializado em criar ambientes únicos que refletem personalidade e estilo.',
    image:
      '/images/team/douglas.png',
    education: 'Design de Interiores - FAAP',
    specialties: [
      'Design de Interiores',
      'Seleção de Materiais',
      'Paleta de Cores',
    ],
    bio: 'Com formação pela FAAP e experiência internacional, Lucas traz uma visão contemporânea e sofisticada para cada projeto. Apaixonado por texturas, cores e composições, ele tem a habilidade única de traduzir a personalidade dos clientes em ambientes envolventes. Seu trabalho já foi publicado em diversas revistas de decoração.',
    social: {
      linkedin: '#',
      instagram: 'https://www.instagram.com/mmdress.arquitetura/',
      email: 'lucas@mmdress.arq.br',
    },
  },
];

export const OTHER_MEMBERS: TeamMember[] = [
  {
    id: 3,
    name: 'Beatriz Santos',
    role: 'Gerente de Projetos',
    description:
      'Coordena cada etapa do projeto garantindo excelência na execução, prazos e orçamentos.',
    image:
      'https://images.unsplash.com/photo-1758518727888-ffa196002e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzc3dvbWFuJTIwcG9ydHJhaXR8ZW58MXx8fHx8MTc2MDcwNDcwMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    education: 'Engenharia Civil - Politécnica',
    specialties: ['Gestão de Obras', 'Planejamento', 'Orçamentos'],
    bio: 'Engenheira civil com MBA em Gestão de Projetos, Beatriz é responsável por transformar ideias em realidade de forma organizada e eficiente. Sua expertise em coordenação de equipes e fornecedores garante que cada projeto seja entregue no prazo e dentro do orçamento, sem comprometer a qualidade.',
    social: {
      linkedin: '#',
      instagram: 'https://www.instagram.com/mmdress.arquitetura/',
      email: 'beatriz@mmdress.arq.br',
    },
  },
  {
    id: 4,
    name: 'Rafael Costa',
    role: 'Arquiteto Sênior',
    description:
      'Expertise em projetos comerciais e soluções arquitetônicas inovadoras e sustentáveis.',
    image:
      'https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzc21hbiUyMHBvcnRyYWl0fGVufDF8fHx8fDE3NjA3OTgzNjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    education: 'Arquitetura e Urbanismo - Mackenzie',
    specialties: ['Projetos Comerciais', 'BIM', 'Arquitetura Sustentável'],
    bio: 'Arquiteto formado pelo Mackenzie com especialização em sustentabilidade e tecnologia BIM. Rafael lidera projetos comerciais complexos, desde escritórios corporativos até espaços de varejo. Sua abordagem integra funcionalidade, identidade de marca e eficiência energética, sempre buscando soluções inovadoras.',
    social: {
      linkedin: '#',
      instagram: 'https://www.instagram.com/mmdress.arquitetura/',
      email: 'rafael@mmdress.arq.br',
    },
  },
  {
    id: 5,
    name: 'Carolina Oliveira',
    role: 'Arquiteta Junior',
    description:
      'Talento emergente com paixão por soluções criativas e sustentáveis em projetos residenciais.',
    image:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHByb2Zlc3Npb25hbCUyMHdvbWFufGVufDF8fHx8MTc2MTE0MTIwMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    education: 'Arquitetura e Urbanismo - FAAP',
    specialties: ['Desenho Técnico', 'SketchUp', 'Renderização'],
    bio: 'Recém-formada pela FAAP, Carolina traz energia e novas perspectivas para a equipe. Especializada em ferramentas de modelagem 3D e renderização, ela contribui para a visualização criativa dos projetos.',
    social: {
      linkedin: '#',
      instagram: 'https://www.instagram.com/mmdress.arquitetura/',
      email: 'carolina@mmdress.arq.br',
    },
  },
  {
    id: 6,
    name: 'Thiago Martins',
    role: 'Coordenador de Obras',
    description:
      'Experiência em gestão de equipes e execução de obras com foco em qualidade e prazos.',
    image:
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBzbWlsZXxlbnwxfHx8fDE3NjExNDEyMDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    education: 'Engenharia Civil - UNICAMP',
    specialties: ['Gestão de Obras', 'Fornecedores', 'Controle de Qualidade'],
    bio: 'Engenheiro civil com vasta experiência em coordenação de obras residenciais e comerciais. Thiago garante que cada detalhe seja executado com precisão, mantendo o padrão de excelência em todas as etapas.',
    social: {
      linkedin: '#',
      instagram: 'https://www.instagram.com/mmdress.arquitetura/',
      email: 'thiago@mmdress.arq.br',
    },
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

