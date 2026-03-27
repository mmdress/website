import { Footer, Header } from '@/components/layout';

interface ISiteLayoutProps {
  children: React.ReactNode;
}

export default function SiteLayout({ children }: ISiteLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
