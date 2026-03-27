'use client';

import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { MessageCircle } from 'lucide-react';
import { toast } from 'sonner';

import {
  Button,
  Input,
  Textarea,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Card,
  CardContent,
  CardTitle,
  CardHeader,
} from '@/components/ui';
import { FormField } from '@/shared-components';
import { cn } from '@/utils/functions';
import {
  contactFormSchema,
  type ContactFormData,
  SUBJECT_OPTIONS,
} from '@/utils/schemas';
import { CONTACT_DATA } from '@/utils/constants';
import { formatBrazilPhoneMask } from '@/utils/phone';

interface ContactFormProps {
  theme?: 'light' | 'dark';
}

export function ContactForm({ theme = 'dark' }: ContactFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    control,
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    },
  });

  const subjectMapper = (subject: string) => {
    return SUBJECT_OPTIONS.find((option) => option.value === subject)?.label;
  };

  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, subject: subjectMapper(data.subject) }),
      });

      if (!response.ok) {
        let serverMessage = '';
        try {
          const payload = (await response.json()) as { message?: string };
          serverMessage = payload?.message ? ` (${payload.message})` : '';
        } catch {
          // ignore
        }

        throw new Error(`Falha ao enviar mensagem${serverMessage}`);
      }

      toast.success('Mensagem enviada com sucesso! Em breve entraremos em contato.');
      reset();
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'Erro inesperado ao enviar, tente novamente mais tarde.';
      toast.error(message);
    }
  };

  return (
    <Card className={theme}>
      <CardHeader>
        <CardTitle className="text-xl">Envie uma mensagem</CardTitle>
      </CardHeader>
      <CardContent>
        <a
          href={`${CONTACT_DATA.whatsapp.url}?text=Olá! Gostaria de solicitar um orçamento para meu projeto.`}
          target="_blank"
          rel="noopener noreferrer"
          className="group mb-8 flex w-full items-center justify-center gap-3 rounded-full bg-[#25D366] px-6 py-4 text-xs font-bold tracking-wide text-black uppercase transition-all duration-300 hover:bg-[#20BA5A] lg:text-base"
        >
          <MessageCircle className="h-5 w-5 transition-transform group-hover:scale-110" />
          Solicitar Orçamento via WhatsApp
        </a>

        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span
              className={cn(
                'px-4 tracking-wide uppercase',
                theme === 'light'
                  ? 'bg-white text-black'
                  : 'bg-card text-white',
              )}
            >
              ou
            </span>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6"
          suppressHydrationWarning
        >
          <FormField label="Nome Completo" id="name" error={errors.name}>
            <Input
              id="name"
              type="text"
              {...register('name')}
              className={cn(errors.name && 'border-destructive')}
              placeholder="Seu nome"
              aria-invalid={!!errors.name}
            />
          </FormField>

          <FormField label="E-mail" id="email" error={errors.email}>
            <Input
              id="email"
              type="email"
              {...register('email')}
              className={cn(errors.email && 'border-destructive')}
              placeholder="seu@email.com"
              aria-invalid={!!errors.email}
            />
          </FormField>

          <FormField label="Telefone" id="phone" error={errors.phone}>
            <Controller
              control={control}
              name="phone"
              render={({ field }) => (
                <Input
                  id="phone"
                  type="tel"
                  inputMode="numeric"
                  autoComplete="tel"
                  maxLength={15}
                  value={field.value}
                  onBlur={field.onBlur}
                  onChange={(e) =>
                    field.onChange(formatBrazilPhoneMask(e.target.value))
                  }
                  name={field.name}
                  ref={field.ref}
                  className={cn(errors.phone && 'border-destructive')}
                  placeholder="(11) 99999-9999"
                  aria-invalid={!!errors.phone}
                />
              )}
            />
          </FormField>

          <FormField label="Assunto" id="subject" error={errors.subject}>
            <Controller
              control={control}
              name="subject"
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger
                    id="subject"
                    className={cn(
                      'w-full',
                      errors.subject && 'border-destructive',
                    )}
                    aria-invalid={!!errors.subject}
                  >
                    <SelectValue placeholder="Selecione um assunto" />
                  </SelectTrigger>
                  <SelectContent className={theme}>
                    {SUBJECT_OPTIONS.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
          </FormField>

          <FormField label="Mensagem" id="message" error={errors.message}>
            <Textarea
              id="message"
              {...register('message')}
              rows={5}
              className={cn(
                'resize-none',
                errors.message && 'border-destructive',
              )}
              placeholder="Conte-nos sobre seu projeto..."
              aria-invalid={!!errors.message}
            />
          </FormField>

          <div className="space-y-2">
            <span className="text-muted-foreground text-sm">
              Campos com <span className="text-destructive">*</span> são
              obrigatórios
            </span>
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="bg-primary hover:bg-primary/90 w-full cursor-pointer rounded-full py-6 font-bold tracking-wide text-primary-foreground uppercase"
          >
            {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
