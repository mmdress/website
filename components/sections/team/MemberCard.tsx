import Image from 'next/image';
import { GraduationCap, Linkedin, Instagram, Mail } from 'lucide-react';

import { Badge } from '@/components/ui';
import { SocialLink } from '@/components/sections/team';

import type { TeamMember } from './types';

interface MemberCardProps {
  member: TeamMember;
  variant?: 'detailed' | 'compact';
  showFullBio?: boolean;
  maxSpecialties?: number;
}

export function MemberCard({
  member,
  variant = 'detailed',
  showFullBio = true,
  maxSpecialties,
}: MemberCardProps) {
  const isCompact = variant === 'compact';
  const specialties = maxSpecialties
    ? member.specialties.slice(0, maxSpecialties)
    : member.specialties;

  return (
    <div className={isCompact ? 'h-full bg-white p-8' : ''}>
      <div
        className={`bg-muted relative overflow-hidden rounded-lg ${
          isCompact ? 'mb-6 aspect-3/4' : 'aspect-3/4'
        }`}
      >
        <Image
          src={member.image}
          alt={member.name}
          width={isCompact ? 400 : 600}
          height={isCompact ? 533 : 800}
          className="h-full w-full object-cover"
        />
      </div>

      <div className={isCompact ? 'mb-4' : ''}>
        <span
          className={`text-primary tracking-widest uppercase ${
            isCompact ? 'text-sm' : 'text-sm'
          }`}
        >
          {member.role}
        </span>
      </div>

      <h3
        className={`text-foreground mb-3 ${
          isCompact ? 'text-2xl' : 'text-3xl sm:text-4xl'
        }`}
      >
        {member.name}
      </h3>

      <p
        className={`text-muted-foreground mb-4 leading-relaxed ${
          isCompact ? 'line-clamp-3 text-sm' : showFullBio ? '' : 'line-clamp-3'
        }`}
      >
        {showFullBio ? member.bio : member.description}
      </p>

      <div
        className={`border-border border-b pb-4 ${isCompact ? 'mb-4' : 'mb-6'}`}
      >
        <div className={`flex items-start ${isCompact ? 'gap-2' : 'gap-3'}`}>
          <GraduationCap
            className={`text-primary mt-1 shrink-0 ${
              isCompact ? 'h-4 w-4' : 'h-5 w-5'
            }`}
          />
          <div>
            <div
              className={`text-muted-foreground mb-1 tracking-wide uppercase ${
                isCompact ? 'text-xs' : 'text-sm'
              }`}
            >
              Formação
            </div>
            <div className={`text-foreground ${isCompact ? 'text-sm' : ''}`}>
              {member.education}
            </div>
          </div>
        </div>
      </div>

      <div className={isCompact ? 'mb-6' : 'mb-8'}>
        <div
          className={`text-muted-foreground tracking-wide uppercase ${
            isCompact ? 'mb-2 text-xs' : 'mb-3 text-sm'
          }`}
        >
          Especialidades
        </div>
        <div className={`flex flex-wrap ${isCompact ? 'gap-1' : 'gap-2'}`}>
          {specialties.map((specialty, index) => (
            <Badge key={index}>{specialty}</Badge>
          ))}
        </div>
      </div>

      <div className={`flex items-center ${isCompact ? 'gap-3' : 'gap-4'}`}>
        <SocialLink
          href={member.social.linkedin}
          icon={<Linkedin className={isCompact ? 'h-4 w-4' : 'h-5 w-5'} />}
        />
        <SocialLink
          href={member.social.instagram}
          icon={<Instagram className={isCompact ? 'h-4 w-4' : 'h-5 w-5'} />}
        />
        <SocialLink
          href={`mailto:${member.social.email}`}
          icon={<Mail className={isCompact ? 'h-4 w-4' : 'h-5 w-5'} />}
        />
      </div>
    </div>
  );
}
