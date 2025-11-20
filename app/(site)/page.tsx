import { About, Differentials, Hero, Portfolio, Services } from '@/components/sections/home';

export default function Home() {
  return (
    <div className="relative h-[200vh] w-screen">
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Differentials />
    </div>
  );
}
