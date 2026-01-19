import { CONTACT_DATA } from '@/utils/constants';

export function MapSection() {
  return (
    <section className="bg-muted py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-foreground mb-4 text-3xl tracking-tight sm:text-4xl">
            Nossa Localização
          </h2>
          <p className="text-muted-foreground">
            Visite nosso showroom e escritório
          </p>
        </div>

        <div className="aspect-video overflow-hidden rounded-2xl bg-white lg:aspect-21/9">
          <iframe
            src={CONTACT_DATA.address.googleMapsUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="MMDress Arquitetura - Localização"
          />
        </div>
      </div>
    </section>
  );
}
