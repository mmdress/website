import { Footer, Header } from '@/components/layout';

interface ISiteLayoutProps {
  children: React.ReactNode;
}

export default function SiteLayout({ children }: ISiteLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
