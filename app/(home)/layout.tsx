import { AdSenseBanner, AdSenseScript } from '@/components/ads';
import { Footer, Header } from '@/components/layout';

interface ISiteLayoutProps {
  children: React.ReactNode;
}

export default function SiteLayout({ children }: ISiteLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      <AdSenseScript />
      <Header />
      <main className="flex-1">
        {children}
        <AdSenseBanner />
      </main>
      <Footer />
    </div>
  );
}
