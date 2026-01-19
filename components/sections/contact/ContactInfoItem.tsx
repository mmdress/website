import type { ContactInfo } from './types';

interface ContactInfoItemProps {
  info: ContactInfo;
}

export function ContactInfoItem({ info }: ContactInfoItemProps) {
  const { icon: Icon, label, content, href } = info;
  const Content = href ? 'a' : 'div';
  const contentProps = href
    ? {
      href,
      className: 'text-foreground hover:text-primary transition-colors',
    }
    : { className: 'text-foreground leading-relaxed' };

  return (
    <div className="flex items-start gap-4">
      <div className="bg-accent text-primary flex h-12 w-12 shrink-0 items-center justify-center rounded-xl">
        <Icon className="h-6 w-6" />
      </div>
      <div>
        <div className="text-muted-foreground mb-2 text-sm tracking-wide uppercase">
          {label}
        </div>
        <Content {...contentProps}>{content}</Content>
      </div>
    </div>
  );
}
