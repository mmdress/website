'use client';

import type { FieldError } from 'react-hook-form';
import type { ReactNode } from 'react';

import { Label } from '@/components/ui';

interface FormFieldProps {
  label: string;
  id: string;
  error?: FieldError;
  required?: boolean;
  children: ReactNode;
}

export function FormField({
  label,
  id,
  error,
  required = true,
  children,
}: FormFieldProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id} required={required}>
        {label}
      </Label>
      {children}
      {error && <p className="text-destructive text-sm">{error.message}</p>}
    </div>
  );
}
