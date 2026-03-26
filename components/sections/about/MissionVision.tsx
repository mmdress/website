import { MISSION_VISION_ITEMS } from './data';

export function MissionVision() {
  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-3">
          {MISSION_VISION_ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title}>
                <div className="bg-accent text-primary mb-6 inline-flex h-14 w-14 items-center justify-center">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="text-foreground mb-4 text-2xl">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
