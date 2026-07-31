import { createHash } from 'crypto';

const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;
const ACCESS_TOKEN = process.env.META_CONVERSIONS_API_ACCESS_TOKEN;
const API_VERSION = 'v21.0';

function hash(value: string): string {
  return createHash('sha256').update(value.trim().toLowerCase()).digest('hex');
}

interface SendLeadEventParams {
  eventId: string;
  email: string;
  phone: string;
  firstName: string;
  sourceUrl: string;
  clientIp?: string;
  userAgent?: string;
  fbp?: string;
  fbc?: string;
}

/**
 * Sends a server-side "Lead" event to the Meta Conversions API.
 * Uses the same event_id as the client-side pixel event so Meta
 * deduplicates the two. Best-effort: never throws, since a tracking
 * failure must not block the actual contact form submission.
 */
export async function sendMetaLeadEvent(
  params: SendLeadEventParams,
): Promise<void> {
  if (!PIXEL_ID || !ACCESS_TOKEN) return;

  const phoneDigits = params.phone.replace(/\D/g, '');
  const phoneE164 = phoneDigits.startsWith('55')
    ? phoneDigits
    : `55${phoneDigits}`;

  const userData: Record<string, unknown> = {
    em: [hash(params.email)],
    ph: [hash(phoneE164)],
    fn: [hash(params.firstName)],
  };

  if (params.clientIp) userData.client_ip_address = params.clientIp;
  if (params.userAgent) userData.client_user_agent = params.userAgent;
  if (params.fbp) userData.fbp = params.fbp;
  if (params.fbc) userData.fbc = params.fbc;

  const body = {
    data: [
      {
        event_name: 'Lead',
        event_time: Math.floor(Date.now() / 1000),
        event_id: params.eventId,
        event_source_url: params.sourceUrl,
        action_source: 'website',
        user_data: userData,
      },
    ],
  };

  try {
    await fetch(
      `https://graph.facebook.com/${API_VERSION}/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      },
    );
  } catch {
    // best-effort; do not fail the contact flow if Meta is unreachable
  }
}
