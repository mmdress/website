import { STATS } from './data';

export function Stats() {
  return (
    <section className="bg-foreground py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-12">
          {STATS.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="text-center">
                <Icon className="text-primary mx-auto mb-4 h-12 w-12" />
                <div className="text-primary mb-3 text-5xl lg:text-6xl">
                  {stat.value}
                </div>
                <div className="text-sm tracking-wide text-white/80 uppercase">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
