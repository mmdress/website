import { Eye, Calendar, DollarSign, BadgeCheck } from 'lucide-react';
import type { ProcessStep, Benefit } from './types';

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Primeiro Contato & Conexão',
    description:
      'Atendimento humanizado e rápido via WhatsApp, e-mail ou site. Escuta ativa das suas dores, desejos e expectativas com linguagem clara e acolhedora.',
  },
  {
    number: '02',
    title: 'Reunião Diagnóstica',
    description:
      'Bate-papo inicial presencial ou online para análise profunda do seu estilo de vida, orientação técnica e alinhamento de expectativas, prazos e investimentos.',
  },
  {
    number: '03',
    title: 'Proposta & Contratação',
    description:
      'Proposta comercial clara e personalizada com transparência total em valores, prazos e escopo. Contrato detalhado e postura consultiva.',
  },
  {
    number: '04',
    title: 'Criação & Desenvolvimento',
    description:
      'Projetos 3D imersivos em 10-15 dias e executivo completo em 40 dias úteis. Atenção extrema aos detalhes com soluções personalizadas e funcionais.',
  },
  {
    number: '05',
    title: 'Assessoria de Compras',
    description:
      'Curadoria estética e técnica durante toda a obra. Acompanhamento em lojas para escolhas assertivas de materiais e mobiliário com otimização de tempo e investimento.',
  },
  {
    number: '06',
    title: 'Execução & Acompanhamento',
    description:
      'Gestão ativa da obra do início ao fim com diário de obra, relatórios fotográficos e comunicação constante. Resolução rápida de imprevistos.',
  },
  {
    number: '07',
    title: 'Marcenaria Personalizada',
    description:
      'Fabricação própria sob encomenda com alto padrão de acabamento, precisão técnica e design exclusivo sob medida.',
  },
  {
    number: '08',
    title: 'Produção & Ambientação',
    description:
      'Montagem final com decoração e styling. Cuidado com cada detalhe para criar ambientes sensoriais, acolhedores e com estética sofisticada.',
  },
  {
    number: '09',
    title: 'Entrega & Pós-Obra',
    description:
      'Entrega técnica organizada e profissional com disponibilidade para ajustes. Suporte pós-obra e relacionamento contínuo para sua tranquilidade.',
  },
];

export const BENEFITS: Benefit[] = [
  {
    icon: Eye,
    title: 'Transparência Total',
    description:
      'Você acompanha cada etapa do processo com comunicação clara, relatórios detalhados e acesso direto à equipe responsável.',
  },
  {
    icon: Calendar,
    title: 'Prazos Realistas',
    description:
      'Cronogramas bem planejados e factíveis, considerando cada especificidade do projeto para evitar surpresas.',
  },
  {
    icon: DollarSign,
    title: 'Orçamento Controlado',
    description:
      'Gestão financeira rigorosa com orçamentos detalhados e acompanhamento constante para manter os custos sob controle.',
  },
  {
    icon: BadgeCheck,
    title: 'Qualidade Garantida',
    description:
      'Acompanhamento técnico em todas as etapas para assegurar que o resultado final supere suas expectativas.',
  },
];
