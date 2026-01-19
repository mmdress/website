import { SOCIAL_LINKS } from './data';

export function SocialMediaLinks() {
  return (
    <div>
      <div className="text-muted-foreground mb-4 text-sm tracking-wide uppercase">
        Redes Sociais
      </div>
      <div className="flex items-center gap-4">
        {SOCIAL_LINKS.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="border-border text-foreground hover:bg-primary hover:border-primary flex h-12 w-12 items-center justify-center rounded-lg border transition-all duration-300 hover:text-white"
            aria-label={social.label}
          >
            <social.icon className="h-6 w-6" />
          </a>
        ))}
      </div>
    </div>
  );
}
