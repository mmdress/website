import Image from 'next/image';

import { Badge } from '@/components/ui';

import type { TeamMember } from './types';

interface MemberCardProps {
  member: TeamMember;
}

export function MemberCard({ member }: MemberCardProps) {
  const specialties = member.specialties;

  return (
    <div className="h-full bg-white p-8">
      <div className="bg-muted relative mb-6 aspect-3/4 overflow-hidden rounded-lg">
        <Image
          src={member.image}
          alt="Foto do membro da equipe"
          width={400}
          height={533}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="mb-4">
        <span className="text-primary text-sm tracking-widest uppercase">
          {member.role}
        </span>
      </div>

      <h3 className="text-foreground mb-3 text-2xl">{member.name}</h3>

      <p className="text-muted-foreground mb-4 line-clamp-3 text-sm leading-relaxed">
        {member.bio}
      </p>

      <div className="border-border mb-6 border-t pt-4">
        <div className="text-muted-foreground mb-2 text-xs tracking-wide uppercase">
          Especialidades
        </div>
        <div className="flex flex-wrap gap-1">
          {specialties.map((specialty, index) => (
            <Badge key={index}>{specialty}</Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
