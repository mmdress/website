import Image from 'next/image';

const HISTORY_IMAGE = {
  src: 'https://images.unsplash.com/photo-1661475765552-9a0c80c8b44e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmUlMjBzdHVkaW8lMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYxMTY1MjU2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  alt: 'Architecture Studio',
  width: 1080,
  height: 1350,
} as const;

const HISTORY_CONTENT = {
  label: 'Nossa História',
  title: 'Uma Jornada de',
  titleHighlight: 'Paixão e Excelência',
  paragraphs: [
    'A MMDress Arquitetura e Interiores nasceu em 2009 da visão de criar espaços que transcendem o convencional. Fundada por profissionais apaixonados por design e arquitetura, a empresa cresceu organicamente, conquistando a confiança de clientes em todo o Brasil.',
    'Ao longo de mais de 15 anos, desenvolvemos projetos residenciais e comerciais que se tornaram referência em qualidade, inovação e atenção aos detalhes. Cada projeto é tratado como único, combinando a visão criativa da nossa equipe com as necessidades específicas de cada cliente.',
    'Nossa trajetória é marcada por constante evolução, incorporando as mais recentes tendências de design sustentável, tecnologia e conforto, sempre mantendo a elegância atemporal como nossa assinatura.',
    'Hoje, somos reconhecidos pela capacidade de transformar sonhos em realidade, criando ambientes que não apenas atendem expectativas, mas as superam, estabelecendo novos padrões de qualidade e sofisticação.',
  ],
} as const;

export function History() {
  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative order-2 lg:order-1">
            <div className="relative z-10 aspect-4/5 overflow-hidden rounded-2xl">
              <Image
                src={HISTORY_IMAGE.src}
                alt={HISTORY_IMAGE.alt}
                width={HISTORY_IMAGE.width}
                height={HISTORY_IMAGE.height}
                className="h-full w-full object-cover"
                priority
              />
            </div>
            <div className="border-primary absolute -right-6 -bottom-6 h-32 w-32 rounded-2xl border-2" />
          </div>

          <div className="order-1 lg:order-2">
            <div className="mb-6">
              <span className="text-primary text-sm tracking-widest uppercase">
                {HISTORY_CONTENT.label}
              </span>
            </div>

            <h2 className="text-foreground mb-6 text-3xl tracking-tight sm:text-4xl lg:text-5xl">
              {HISTORY_CONTENT.title}
              <br />
              {HISTORY_CONTENT.titleHighlight}
            </h2>

            <div className="text-muted-foreground space-y-4 leading-relaxed">
              {HISTORY_CONTENT.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
