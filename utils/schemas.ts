import { z } from 'zod';

import { digitsOnlyPhone } from '@/utils/phone';

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Nome deve ter pelo menos 2 caracteres' })
    .max(100, { message: 'Nome deve ter no máximo 100 caracteres' }),
  email: z.email({ message: 'E-mail inválido' }),
  phone: z
    .string()
    .min(1, { message: 'Telefone é obrigatório' })
    .refine(
      (val) => {
        const d = digitsOnlyPhone(val);
        return d.length === 10 || d.length === 11;
      },
      { message: 'Informe um telefone válido com DDD' },
    ),
  subject: z.string().min(1, { message: 'Assunto é obrigatório' }),
  message: z
    .string()
    .min(10, { message: 'Mensagem deve ter pelo menos 10 caracteres' })
    .max(1000, { message: 'Mensagem deve ter no máximo 1000 caracteres' }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const utmParamsSchema = z.object({
  utm_source: z.string().optional(),
  utm_medium: z.string().optional(),
  utm_campaign: z.string().optional(),
  utm_term: z.string().optional(),
  utm_content: z.string().optional(),
  utm_referrer: z.string().optional(),
  gclid: z.string().optional(),
  fbclid: z.string().optional(),
});

export type UtmParamsData = z.infer<typeof utmParamsSchema>;

export const contactFormPayloadSchema = contactFormSchema.extend(utmParamsSchema.shape);
export type ContactFormPayload = z.infer<typeof contactFormPayloadSchema>;

export const SUBJECT_OPTIONS = [
  { value: 'quote', label: 'Solicitar Orçamento' },
  { value: 'consultation', label: 'Consultoria' },
  { value: 'project', label: 'Projeto Completo' },
  { value: 'renovation', label: 'Reforma' },
  { value: 'doubt', label: 'Dúvidas' },
  { value: 'other', label: 'Outro' },
] as const;
