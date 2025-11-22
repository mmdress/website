interface ISocialLinkProps {
  href: string;
  icon: React.ReactNode;
}

export function SocialLink({ href, icon }: ISocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="border-border text-muted-foreground hover:bg-primary hover:border-accent flex h-10 w-10 items-center justify-center rounded-lg border transition-all duration-300 hover:text-white"
    >
      {icon}
    </a>
  );
}
