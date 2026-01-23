import { PageHeader } from '@/components/layout';

export default function HowItWorks() {
  return (
    <div className="pt-20 lg:pt-24">
      <PageHeader
        badge="Como Funciona"
        title={
          <span className="truncate">
            Do Sonho à Realidade:
            <br />
            <span className="text-primary">Nosso Processo</span>
          </span>
        }
        description="Um método estruturado e transparente que garante excelência em cada etapa do seu projeto, do primeiro contato à entrega final."
        backgroundImage={{
          src: '/images/how-it-works/header.jpg',
          alt: 'Como Funciona',
        }}
      />
    </div>
  );
}
