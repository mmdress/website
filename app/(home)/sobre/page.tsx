import { PageHeader } from '@/components/layout';

export default function Sobre() {
  return (
    <PageHeader
      title={
        <span>
          Transformando Espaços,{' '}
          <span className="text-primary">Criando Experiências</span>
        </span>
      }
      description="Somos uma empresa de arquitetura e design de interiores dedicada a criar ambientes que inspiram, acolhem e refletem a essência de cada cliente."
      badge="Sobre a MMDress"
      backgroundImage={{
        src: '/images/about/header.jpg',
        alt: 'Sobre a MMDress',
      }}
    />
  );
}
