import {
  Building2,
  Calendar,
  Users,
  Heart,
  type LucideIcon,
} from 'lucide-react';

interface Stat {
  icon: LucideIcon;
  value: string;
  label: string;
}

const STATS: Stat[] = [
  {
    icon: Building2,
    value: '300+',
    label: 'Projetos Concluídos',
  },
  {
    icon: Calendar,
    value: '15+',
    label: 'Anos de Experiência',
  },
  {
    icon: Users,
    value: '200+',
    label: 'Clientes Satisfeitos',
  },
  {
    icon: Heart,
    value: '100%',
    label: 'Dedicação Total',
  },
] as const;

export function Stats() {
  return (
    <section className="bg-foreground py-20 lg:py-32">
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
