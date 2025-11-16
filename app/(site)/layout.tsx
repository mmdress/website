import { Header } from "@/components/layout";

interface ISiteLayoutProps {
  children: React.ReactNode;
}

export default function SiteLayout({
  children,
}: ISiteLayoutProps) {
  return (
    /* Remove the h-[200vh] when the page is ready */
    <div className="min-h-screen flex flex-col h-[200vh]">
      <Header />
      {children}
    </div>
  );
}
