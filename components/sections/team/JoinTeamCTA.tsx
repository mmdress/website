export function JoinTeamCTA() {
  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="bg-foreground rounded-lg p-12 text-center text-white lg:p-16">
            <h2 className="mb-6 text-3xl tracking-tight sm:text-4xl">
              Quer Fazer Parte da Nossa Equipe?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-xl leading-relaxed text-white/80">
              Estamos sempre em busca de talentos apaixonados por arquitetura e
              design. Envie seu portfólio e currículo.
            </p>
            <a
              href="mailto:contato@mmdress.arq.br?subject=Oportunidade de Carreira"
              className="bg-primary hover:bg-primary/90 inline-block rounded-md px-10 py-4 font-semibold tracking-wide text-white uppercase transition-all duration-300"
            >
              Enviar Currículo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
