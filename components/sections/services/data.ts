import {
  ClipboardCheck,
  ClipboardList,
  FileStack,
  HardHat,
  Layers3,
  Shield,
  Sofa,
  Sparkles,
  TreePine,
  Users,
  Clock,
} from 'lucide-react';
import type { Service, ProcessStep, Differential } from './types';

export const SERVICES: Service[] = [
  {
    icon: Layers3,
    title: 'Projeto de Interiores 3D',
    subtitle: 'Visualização realista antes da obra',
    description:
      'Desenvolvemos o projeto de interiores com modelagem 3D, permitindo a visualização realista dos ambientes antes da execução. Nessa etapa definimos layout, mobiliários, marcenaria, iluminação, revestimentos, cores e decoração, garantindo que o cliente visualize o resultado final e tome decisões com segurança antes do início da obra.',
    features: [
      'Modelagem 3D e visualização realista dos ambientes',
      'Layout, mobiliários, marcenaria, iluminação e revestimentos',
      'Definição de cores e decoração',
      'Decisões com segurança antes do início da obra',
    ],
    image: '/images/services/service-01.jpg',
    color: 'bg-[#CDAA1C]',
  },
  {
    icon: FileStack,
    title: 'Projeto Executivo Civil',
    subtitle: 'Projetos técnicos para a execução',
    description:
      'Elaboramos todos os projetos técnicos necessários para a execução da obra, incluindo detalhamentos de elétrica, hidráulica, iluminação, pontos de ar-condicionado, paginação de revestimentos, forro de gesso, marmoraria, marcenaria e demais detalhamentos construtivos. O projeto executivo é fundamental para que a obra aconteça de forma organizada, sem improvisos e com redução de erros.',
    features: [
      'Elétrica, hidráulica, iluminação e ar-condicionado',
      'Paginação de revestimentos, forro, marmoraria e marcenaria',
      'Demais detalhamentos construtivos',
      'Obra organizada, sem improvisos e com menos erros',
    ],
    image: '/images/services/service-02.jpg',
    color: 'bg-[#2C2C2C]',
  },
  {
    icon: ClipboardList,
    title: 'Memoriais Descritivos e Quantitativos',
    subtitle: 'Especificação e quantitativos',
    description:
      'Desenvolvemos memoriais descritivos com especificação de todos os materiais, acabamentos, equipamentos e itens do projeto, além dos quantitativos para orçamento e compras. Essa etapa garante mais controle financeiro, organização e planejamento da obra.',
    features: [
      'Especificação de materiais, acabamentos e equipamentos',
      'Quantitativos para orçamento e compras',
      'Mais controle financeiro e organização',
      'Planejamento integrado da obra',
    ],
    image: '/images/services/service-03.jpg',
    color: 'bg-[#CDAA1C]',
  },
  {
    icon: HardHat,
    title: 'Obra e Reforma Completa',
    subtitle: 'Do início à finalização',
    description:
      'Executamos obras e reformas completas, desde o início até a finalização, com equipe especializada e planejamento de todas as etapas. Nosso objetivo é garantir qualidade de execução, cumprimento de prazos e fidelidade ao projeto desenvolvido.',
    features: [
      'Equipe especializada e planejamento de etapas',
      'Qualidade de execução e cumprimento de prazos',
      'Fidelidade ao projeto desenvolvido',
    ],
    image: '/images/services/service-04.jpg',
    color: 'bg-[#2C2C2C]',
  },
  {
    icon: ClipboardCheck,
    title: 'Acompanhamento e Gerenciamento de Obra',
    subtitle: 'Coordenação técnica integral',
    description:
      'Realizamos o acompanhamento técnico e gerenciamento da obra, coordenando fornecedores, cronograma, compras de materiais, entregas e execução dos serviços. Esse serviço proporciona mais tranquilidade ao cliente e garante que a obra siga conforme o projeto e o planejamento.',
    features: [
      'Coordenação de fornecedores e cronograma',
      'Compras de materiais e controle de entregas',
      'Acompanhamento da execução dos serviços',
      'Obra alinhada ao projeto e ao planejamento',
    ],
    image: '/images/services/service-05.jpg',
    color: 'bg-[#CDAA1C]',
  },
  {
    icon: Sofa,
    title: 'Marcenaria Personalizada',
    subtitle: 'Projetos sob medida',
    description:
      'Desenvolvemos projetos de marcenaria sob medida, pensados exclusivamente para cada ambiente e necessidade do cliente, unindo estética, funcionalidade e aproveitamento inteligente dos espaços.',
    features: [
      'Projetos exclusivos por ambiente e necessidade',
      'Estética e funcionalidade em equilíbrio',
      'Aproveitamento inteligente dos espaços',
    ],
    image: '/images/services/service-06.jpg',
    color: 'bg-[#2C2C2C]',
  },
  {
    icon: Sparkles,
    title: 'Produção e Ambientação',
    subtitle: 'Entrega pronta para uso',
    description:
      'Após a finalização da obra, realizamos a produção e ambientação dos ambientes, com decoração, objetos, quadros, tapetes, almofadas, enxoval e todos os detalhes finais, entregando o espaço pronto para uso.',
    features: [
      'Decoração, objetos, quadros, tapetes e almofadas',
      'Enxoval e acabamento dos detalhes finais',
      'Espaço entregue pronto para uso',
    ],
    image: '/images/services/service-07.jpg',
    color: 'bg-[#CDAA1C]',
  },
  {
    icon: TreePine,
    title: 'Paisagismo',
    subtitle: 'Externas, varandas e jardins',
    description:
      'Desenvolvemos projetos de paisagismo para áreas externas, varandas e jardins, integrando arquitetura, interiores e natureza, criando ambientes mais acolhedores, valorizando o imóvel e proporcionando bem-estar.',
    features: [
      'Projetos para áreas externas, varandas e jardins',
      'Integração entre arquitetura, interiores e natureza',
      'Valorização do imóvel e bem-estar',
    ],
    image: '/images/services/service-08.jpg',
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
