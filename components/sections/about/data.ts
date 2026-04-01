import {
  Award,
  Building2,
  Calendar,
  Eye,
  Heart,
  Sparkles,
  Target,
  Users,
} from 'lucide-react';

import type {
  AboutStat,
  CoreValue,
  HistoryContent,
  HistoryImage,
  MissionVisionItem,
  ValuesSectionHeader,
} from './types';

export const HISTORY_IMAGE: HistoryImage = {
  src: '/images/about/history.jpg',
  alt: 'Architecture Studio',
  width: 1080,
  height: 1350,
};

export const HISTORY_CONTENT: HistoryContent = {
  label: 'Nossa História',
  title: 'Uma Jornada de Paixão,',
  titleHighlight: 'Excelência e Propósito',
  paragraphs: [
    'A MMDress Arquitetura & Interiores nasce do olhar sensível, visionário e inquieto de Márcia Nadinho, arquiteta movida pela crença de que espaços bem pensados transformam não apenas ambientes, mas a forma de viver.',
    'Desde o início, a MMDress foi construída com base em dedicação profunda, sensibilidade estética e rigor técnico. Cada projeto sempre foi tratado como único, porque cada cliente carrega uma história, um sonho e uma expectativa que merecem ser respeitados e cuidadosamente traduzidos em forma, função e beleza.',
    'Ao longo de mais de 15 anos de trajetória, a MMDress consolidou-se no mercado por sua capacidade de unir arquitetura, interiores e execução com inteligência, elegância e responsabilidade. Projetos passaram a carregar uma assinatura reconhecível: ambientes sofisticados, acolhedores, atemporais e profundamente conectados com quem os habita.',
    'Hoje, a MMDress é reconhecida pela confiança que constrói, pela segurança que oferece e pela capacidade de transformar sonhos em experiências reais, entregando mais do que projetos, criando lugares que fazem sentido, acolhem e permanecem no tempo.',
  ],
};

export const MISSION_VISION_ITEMS: MissionVisionItem[] = [
  {
    icon: Eye,
    title: 'Missão',
    description:
      'Criar ambientes que vão além da estética, refletindo a essência, a história e o estilo de vida de cada cliente. Projetamos com sensibilidade, inteligência e excelência técnica, unindo design autoral, materiais de alta qualidade e processos transparentes para transformar sonhos em espaços funcionais, sofisticados e cheios de significado.',
  },
  {
    icon: Target,
    title: 'Visão',
    description:
      'Ser referência nacional em arquitetura e design de interiores, reconhecida pela capacidade de transformar espaços em experiências memoráveis, que inspiram, acolhem e valorizam a vida das pessoas, com criatividade, sustentabilidade e impacto positivo duradouro.',
  },
  {
    icon: Award,
    title: 'Compromisso',
    description:
      'Entregar projetos conduzidos com responsabilidade, ética e atenção absoluta aos detalhes. Unimos estética refinada e funcionalidade inteligente, respeitando prazos, orçamentos e o meio ambiente, mantendo uma comunicação clara e construindo relações baseadas em confiança, cuidado e excelência do início ao fim.',
  },
];

export const VALUES_HEADER: ValuesSectionHeader = {
  label: 'Nossos Valores',
  title: 'O Que Nos Move',
  description:
    'Princípios que guiam cada decisão, cada traço e cada experiência criada pela MMDress, refletindo a essência de sua fundadora e o cuidado com cada cliente.',
};

export const CORE_VALUES: CoreValue[] = [
  {
    icon: Target,
    title: 'Excelência',
    description:
      'Compromisso inegociável presente na escuta atenta, rigor técnico e cuidado absoluto com cada detalhe, do conceito à entrega final.',
  },
  {
    icon: Sparkles,
    title: 'Inovação',
    description:
      'Olhar inquieto e visionário que busca constantemente novas soluções, unindo estética, funcionalidade e inteligência em projetos atuais e atemporais.',
  },
  {
    icon: Heart,
    title: 'Paixão',
    description:
      'Amor genuíno pela arquitetura e pelas histórias dos clientes, traduzido em dedicação integral e cuidado verdadeiro em transformar sonhos em realidade.',
  },
  {
    icon: Users,
    title: 'Parceria',
    description:
      'Relações sólidas baseadas em confiança, transparência e respeito. Caminhamos juntos oferecendo segurança e clareza, porque projetar é também cuidar.',
  },
];

export const STATS: AboutStat[] = [
  {
    icon: Building2,
    value: '300+',
    label: 'Projetos Concluídos',
  },
  {
    icon: Calendar,
    value: '15+',
    label: 'Anos de Experiência',
  },
  {
    icon: Users,
    value: '200+',
    label: 'Clientes Satisfeitos',
  },
  {
    icon: Heart,
    value: '100%',
    label: 'Dedicação Total',
  },
];
