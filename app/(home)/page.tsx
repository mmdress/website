import {
  About,
  Differentials,
  Founder,
  Hero,
  Portfolio,
  Services,
  Testimonials,
  Contact,
} from '@/components/sections/home';

export default function Home() {
  return (
    <div className="relative w-screen">
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Differentials />
      <Founder />
      <Testimonials />
      <Contact />
    </div>
  );
}
