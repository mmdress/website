import { MapPin } from 'lucide-react';

import { CONTACT_DATA } from '@/utils/constants';

import { ContactForm } from '../shared';
import { ContactInfoItem } from './ContactInfoItem';
import { SocialMediaLinks } from './SocialMediaLinks';
import { CONTACT_INFO } from './data';


export function ContactSection() {
  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 className="text-foreground mb-8 text-3xl tracking-tight sm:text-4xl">
              Informações de Contato
            </h2>

            <div className="mb-12 space-y-8">
              <ContactInfoItem
                info={{
                  icon: MapPin,
                  label: 'Endereço',
                  content: (
                    <p className="text-foreground">
                      {CONTACT_DATA.address.street}, {CONTACT_DATA.address.number}
                      <br />
                      {CONTACT_DATA.address.neighborhood}
                      <br />
                      {CONTACT_DATA.address.city} - {CONTACT_DATA.address.state} -{' '}
                      {CONTACT_DATA.address.zipCode}
                    </p>
                  ),
                }}
              />
              {CONTACT_INFO.map((info) => (
                <ContactInfoItem key={info.label} info={info} />
              ))}
            </div>

            <SocialMediaLinks />
          </div>
          <ContactForm theme="light" />
        </div>
      </div>
    </section>
  );
}
