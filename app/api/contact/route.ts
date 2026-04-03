import { NextResponse } from 'next/server';
import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';

import { contactFormPayloadSchema } from '@/utils/schemas';

export const runtime = 'nodejs';

const ses = new SESClient({
  region: process.env.AWS_REGION,
  credentials:
    process.env.AWS_ACCESS_KEY_ID && process.env.AWS_SECRET_ACCESS_KEY
      ? {
          accessKeyId: process.env.AWS_ACCESS_KEY_ID,
          secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        }
      : undefined,
});

function requiredEnv(name: string) {
  const value = process.env[name];
  if (!value) throw new Error(`Missing env var: ${name}`);
  return value;
}

export async function POST(req: Request) {
  try {
    const json = await req.json();
    const parsed = contactFormPayloadSchema.safeParse(json);

    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, error: 'VALIDATION_ERROR', issues: parsed.error.issues },
        { status: 400 },
      );
    }

    const data = parsed.data;

    const from = requiredEnv('AWS_SES_FROM').trim();
    const to = requiredEnv('AWS_SES_TO');

    const subjectValue = (data.subject ?? '').trim();
    const emailSubject = subjectValue
      ? `Formulário de Contato (Website) - ${subjectValue}`
      : 'Formulário de Contato (Website)';

    const utmLines: string[] = [];
    const utmFields = [
      ['utm_source', 'Fonte (utm_source)'],
      ['utm_medium', 'Mídia (utm_medium)'],
      ['utm_campaign', 'Campanha (utm_campaign)'],
      ['utm_term', 'Termo (utm_term)'],
      ['utm_content', 'Conteúdo (utm_content)'],
      ['utm_referrer', 'Referrer (utm_referrer)'],
      ['gclid', 'Google Click ID (gclid)'],
      ['fbclid', 'Facebook Click ID (fbclid)'],
    ] as const;

    for (const [key, label] of utmFields) {
      const value = data[key];
      if (value) utmLines.push(`${label}: ${value}`);
    }

    const textBody = [
      'Nova mensagem de formulário de contato (Website)',
      '',
      `Nome: ${data.name}`,
      `E-mail: ${data.email}`,
      `Telefone: ${data.phone?.trim() || '-'}`,
      `Assunto: ${subjectValue || '-'}`,
      '',
      'Mensagem:',
      data.message,
      '',
      ...(utmLines.length > 0
        ? ['', '--- Dados de Rastreamento ---', ...utmLines, '']
        : []),
    ].join('\n');

    await ses.send(
      new SendEmailCommand({
        Source: from,
        Destination: { ToAddresses: [to] },
        ReplyToAddresses: [data.email],
        Message: {
          Subject: { Data: emailSubject, Charset: 'UTF-8' },
          Body: {
            Text: { Data: textBody, Charset: 'UTF-8' },
          },
        },
      }),
    );

    return NextResponse.json({ ok: true });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : 'Unknown server error';
    return NextResponse.json(
      { ok: false, error: 'SERVER_ERROR', message },
      { status: 500 },
    );
  }
}

