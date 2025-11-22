import { MapPin, Phone, Mail, Instagram } from 'lucide-react';

import { CONTACT_DATA } from '@/utils/constants';
import { ContactForm, ContactInfoItem } from '@/shared-components';

export function Contact() {
  return (
    <section
      id="contact"
      className="bg-foreground/98 py-20 text-white lg:py-32"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Contact Info */}
          <div>
            <div className="mb-6">
              <span className="text-primary text-sm tracking-widest uppercase">
                Entre em Contato
              </span>
            </div>

            <h2 className="mb-6 text-3xl tracking-tight sm:text-4xl lg:text-5xl">
              Vamos Criar Algo
              <br />
              Extraordinário Juntos
            </h2>

            <p className="mb-12 leading-relaxed text-white/80">
              Estamos prontos para transformar seus sonhos em realidade. Entre
              em contato e agende uma conversa sem compromisso.
            </p>

            {/* Contact Details */}
            <div className="space-y-6">
              <ContactInfoItem icon={MapPin} label="Endereço">
                <a
                  href={CONTACT_DATA.address.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary text-white/90 transition-colors"
                >
                  {`${CONTACT_DATA.address.street}, ${CONTACT_DATA.address.number}`}
                  <br />
                  {`${CONTACT_DATA.address.neighborhood}`}
                  <br />
                  {`${CONTACT_DATA.address.city} - ${CONTACT_DATA.address.state} - CEP ${CONTACT_DATA.address.zipCode}`}
                </a>
              </ContactInfoItem>

              <ContactInfoItem icon={Phone} label="Telefone / WhatsApp">
                <a
                  href={CONTACT_DATA.whatsapp.url}
                  className="hover:text-primary text-white/90 transition-colors"
                >
                  {CONTACT_DATA.whatsapp.phone}
                </a>
              </ContactInfoItem>

              <ContactInfoItem icon={Mail} label="E-mail">
                <a
                  href={`mailto:${CONTACT_DATA.email}`}
                  className="hover:text-primary text-white/90 transition-colors"
                >
                  {CONTACT_DATA.email}
                </a>
              </ContactInfoItem>

              <ContactInfoItem icon={Instagram} label="Instagram">
                <a
                  href={CONTACT_DATA.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary text-white/90 transition-colors"
                >
                  @{CONTACT_DATA.instagram.username}
                </a>
              </ContactInfoItem>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
