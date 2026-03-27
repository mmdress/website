import { CORE_VALUES, VALUES_HEADER } from './data';

export function Values() {
  return (
    <section className="bg-accent/70 py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="text-primary mb-6 block text-sm tracking-widest uppercase font-bold">
            {VALUES_HEADER.label}
          </span>
          <h2 className="text-foreground mb-6 text-3xl tracking-tight sm:text-4xl lg:text-5xl">
            {VALUES_HEADER.title}
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            {VALUES_HEADER.description}
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {CORE_VALUES.map((value) => {
            const Icon = value.icon;
            return (
              <div
                key={value.title}
                className="rounded-lg bg-white p-8 text-center"
              >
                <div className="bg-accent text-primary mb-6 inline-flex h-16 w-16 items-center justify-center">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="text-foreground mb-3 text-xl">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
