import type { InfoCard } from './types';

interface InfoCardItemProps {
  card: InfoCard;
}

export function InfoCardItem({ card }: InfoCardItemProps) {
  const Icon = card.icon;

  return (
    <div className="bg-muted rounded-2xl p-8">
      <div className="mb-4 flex items-start gap-4">
        <div className="bg-accent text-primary flex h-12 w-12 shrink-0 items-center justify-center rounded-xl">
          <Icon className="h-6 w-6" />
        </div>
        <div>
          <h4 className="text-foreground mb-2 text-lg">{card.title}</h4>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {card.description}
          </p>
        </div>
      </div>
    </div>
  );
}
