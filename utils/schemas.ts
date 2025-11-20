import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  email: z.email('E-mail inválido'),
  phone: z.string().min(11, 'Prencha com um número de telefone válido'),
  subject: z.string().min(1, 'Selecione um assunto'),
  message: z.string().min(10, 'Mensagem deve ter pelo menos 10 caracteres'),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const SUBJECT_OPTIONS = [
  { value: 'quote', label: 'Solicitar Orçamento' },
  { value: 'consultation', label: 'Consultoria' },
  { value: 'project', label: 'Projeto Completo' },
  { value: 'renovation', label: 'Reforma' },
  { value: 'doubt', label: 'Dúvidas' },
  { value: 'other', label: 'Outro' },
] as const;
