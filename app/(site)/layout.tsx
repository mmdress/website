import { Header } from '@/components/layout';

interface ISiteLayoutProps {
  children: React.ReactNode;
}

export default function SiteLayout({ children }: ISiteLayoutProps) {
  return (
    /* Remove the h-[200vh] when the page is ready */
    <div className="flex h-[200vh] min-h-screen flex-col">
      <Header />
      {children}
    </div>
  );
}
