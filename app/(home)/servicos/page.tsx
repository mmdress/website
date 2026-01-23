import { PageHeader } from '@/components/layout';

export default function Services() {
  return (
    <div className="pt-20 lg:pt-24">
      <PageHeader
        badge="Nossos Serviços"
        title={
          <span className="truncate">
            Excelência em
            <br />
            <span className="text-primary">Cada Detalhe</span>
          </span>
        }
        description="Do conceito à execução, transformamos ambientes em experiências extraordinárias através de soluções completas em arquitetura e design."
        backgroundImage={{
          src: '/images/services/header.jpg',
          alt: 'Nossos Serviços',
        }}
      />
    </div>
  );
}
