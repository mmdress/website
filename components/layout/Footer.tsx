import Link from 'next/link';

import { ROUTES } from '@/utils/routes';
import { CONTACT_DATA, NAV_ITEMS, SOCIAL_LINKS } from '@/utils/constants';

// Legal pages configuration
const LEGAL_PAGES = [
  { href: ROUTES.PRIVACY_POLICY, label: 'Política de Privacidade' },
  { href: ROUTES.TERMS_OF_USE, label: 'Termos de Uso' },
] as const;

export function Footer() {
  const currentYear = new Date().getFullYear();

  const formatAddress = () => {
    const { street, number, neighborhood, city, state } = CONTACT_DATA.address;
    return `${street}, ${number}\n${neighborhood} - ${city}, ${state}`;
  };

  return (
    <footer className="border-border border-t bg-white">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <div className="text-foreground mb-1 text-2xl tracking-wider">
                MMDRESS
              </div>
              <div className="text-muted-foreground text-xs tracking-widest uppercase">
                Arquitetura & Interiores
              </div>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
              Transformando espaços em experiências únicas através de design
              sofisticado e funcional que reflete sua personalidade.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {SOCIAL_LINKS.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.href}
                    href={social.href}
                    target={
                      social.href.startsWith('http') ? '_blank' : undefined
                    }
                    rel={
                      social.href.startsWith('http')
                        ? 'noopener noreferrer'
                        : undefined
                    }
                    className="border-border hover:border-primary hover:text-primary flex h-10 w-10 items-center justify-center rounded-2xl border transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-foreground mb-4 text-sm tracking-wide uppercase">
              Navegação
            </h3>
            <ul className="space-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-foreground mb-4 text-sm tracking-wide uppercase">
              Contato
            </h3>
            <ul className="text-muted-foreground space-y-3">
              <li>
                <a
                  href={`mailto:${CONTACT_DATA.email}`}
                  className="hover:text-primary block transition-colors"
                >
                  {CONTACT_DATA.email}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT_DATA.whatsapp.url}
                  className="hover:text-primary block transition-colors"
                >
                  {CONTACT_DATA.whatsapp.phone}
                </a>
              </li>
              <li className="whitespace-pre-line">{formatAddress()}</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-border border-t pt-8">
          <div className="text-muted-foreground flex flex-col items-center justify-between gap-4 text-sm sm:flex-row">
            <p>
              © {currentYear} MMDress Arquitetura & Interiores. Todos os
              direitos reservados.
            </p>
            <div className="flex gap-6">
              {LEGAL_PAGES.map((page) => (
                <Link
                  key={page.href}
                  href={page.href}
                  className="hover:text-primary transition-colors"
                >
                  {page.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
