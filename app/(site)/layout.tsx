interface ISiteLayoutProps {
  children: React.ReactNode;
}

export default function SiteLayout({
  children,
}: ISiteLayoutProps) {
  return (
    /* Remove the h-[200vh] when the page is ready */
    <div className="min-h-screen flex flex-col bg-foreground mt-20 lg:mt-24 h-[200vh]">
      {children}
    </div>
  );
}
