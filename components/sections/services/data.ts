import {
  Ruler,
  Palette,
  Building2,
  Home,
  Lightbulb,
  FileCheck,
  Sparkles,
  Users,
  Clock,
  Shield,
} from 'lucide-react';
import type { Service, ProcessStep, Differential } from './types';

export const SERVICES: Service[] = [
  {
    icon: Building2,
    title: 'Arquitetura Residencial',
    subtitle: 'Projetos arquitetônicos completos',
    description:
      'Criamos projetos arquitetônicos que refletem seu estilo de vida e personalidade, desde a análise do terreno até o acompanhamento final da obra.',
    features: [
      'Análise de terreno e viabilidade',
      'Projeto arquitetônico completo',
      'Aprovação em órgãos públicos',
      'Detalhamento técnico executivo',
      'Acompanhamento de obra',
    ],
    image:
      'https://images.unsplash.com/photo-1753715613388-7e03410b1dce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmFsJTIwcHJvamVjdCUyMHBsYW5uaW5nfGVufDF8fHx8MTc2MTE3NTg2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: 'bg-[#CDAA1C]',
  },
  {
    icon: Home,
    title: 'Design de Interiores',
    subtitle: 'Ambientes sofisticados e funcionais',
    description:
      'Transformamos espaços em ambientes únicos com seleção cuidadosa de materiais, cores e mobiliário que refletem sua personalidade.',
    features: [
      'Conceito e moodboard personalizado',
      'Layout e distribuição de ambientes',
      'Especificação de acabamentos',
      'Projeto de marcenaria sob medida',
      'Seleção de mobiliário e decoração',
    ],
    image:
      'https://images.unsplash.com/photo-1620714223589-a0ad3b4aaac9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmlvciUyMGRlc2lnbiUyMGNvbnN1bHRhdGlvbnxlbnwxfHx8fDE3NjExMzQzNDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: 'bg-[#2C2C2C]',
  },
  {
    icon: Ruler,
    title: 'Projetos Comerciais',
    subtitle: 'Espaços que potencializam negócios',
    description:
      'Desenvolvemos espaços comerciais que unem identidade de marca com funcionalidade, conforto e otimização de custos.',
    features: [
      'Análise de fluxo e ergonomia',
      'Projeto de layout comercial',
      'Identidade visual do espaço',
      'Otimização de custos',
      'Cronograma de execução',
    ],
    image:
      'https://images.unsplash.com/photo-1758518729685-f88df7890776?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWFtJTIwbWVldGluZ3xlbnwxfHx8fDE3NjExNDA5Njh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: 'bg-[#CDAA1C]',
  },
  {
    icon: Palette,
    title: 'Consultoria de Design',
    subtitle: 'Orientação especializada',
    description:
      'Fornecemos orientação especializada para escolha de acabamentos, cores e elementos decorativos alinhados ao seu estilo.',
    features: [
      'Análise de necessidades e estilo',
      'Paleta de cores personalizada',
      'Especificação de materiais',
      'Orientação de compras',
      'Relatório detalhado de recomendações',
    ],
    image:
      'https://images.unsplash.com/photo-1760650396717-771ebebd58c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwcmVub3ZhdGlvbiUyMGRlc2lnbnxlbnwxfHx8fDE3NjExNzU4NjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: 'bg-[#2C2C2C]',
  },
  {
    icon: Lightbulb,
    title: 'Projeto Luminotécnico',
    subtitle: 'Iluminação estratégica',
    description:
      'Criamos projetos de iluminação estratégica que valorizam ambientes e criam atmosferas únicas e acolhedoras.',
    features: [
      'Estudo de iluminação natural',
      'Projeto de iluminação artificial',
      'Seleção de luminárias',
      'Automação e controle',
      'Eficiência energética',
    ],
    image:
      'https://images.unsplash.com/photo-1638454668466-e8dbd5462f20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhcGFydG1lbnQlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjEwOTI5OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: 'bg-[#CDAA1C]',
  },
  {
    icon: FileCheck,
    title: 'Acompanhamento de Obra',
    subtitle: 'Gestão e fiscalização completa',
    description:
      'Gerenciamos e fiscalizamos sua obra para garantir que o projeto seja executado com perfeição e dentro do prazo.',
    features: [
      'Visitas técnicas periódicas',
      'Verificação de qualidade',
      'Alinhamento com fornecedores',
      'Registro fotográfico',
      'Relatórios de progresso',
    ],
    image:
      'https://images.unsplash.com/photo-1599110906632-28d25094470f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3QlMjBibHVlcHJpbnQlMjBkZXNpZ258ZW58MXx8fHwxNzYxMTc1ODExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: 'bg-[#2C2C2C]',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Primeiro Contato',
    description:
      'Agendamento de reunião inicial para entender suas necessidades, expectativas e estilo de vida.',
  },
  {
    number: '02',
    title: 'Análise e Diagnóstico',
    description:
      'Visita técnica ao local, análise do espaço, medições e levantamento de possibilidades.',
  },
  {
    number: '03',
    title: 'Proposta Comercial',
    description:
      'Apresentação de proposta detalhada com escopo de serviços, prazos e investimento.',
  },
  {
    number: '04',
    title: 'Desenvolvimento',
    description:
      'Criação do conceito, moodboard, plantas e renderizações 3D do seu projeto.',
  },
  {
    number: '05',
    title: 'Detalhamento',
    description:
      'Especificação completa de materiais, acabamentos, marcenaria e documentação técnica.',
  },
  {
    number: '06',
    title: 'Execução',
    description:
      'Acompanhamento da obra, gestão de fornecedores e controle de qualidade até a entrega final.',
  },
];

export const DIFFERENTIALS: Differential[] = [
  {
    icon: Sparkles,
    title: 'Design Exclusivo',
    description:
      'Cada projeto é único e personalizado conforme seu estilo e necessidades.',
  },
  {
    icon: Users,
    title: 'Equipe Multidisciplinar',
    description:
      'Arquitetos, designers e engenheiros trabalhando em conjunto.',
  },
  {
    icon: Clock,
    title: 'Compromisso com Prazos',
    description:
      'Cronograma detalhado e respeito aos prazos acordados.',
  },
  {
    icon: Shield,
    title: 'Qualidade Garantida',
    description:
      'Acompanhamento rigoroso e padrões elevados de excelência.',
  },
];
