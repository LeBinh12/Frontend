import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Hero from '@/components/sections/Hero';
import Overview from '@/components/sections/Overview';
import Services from '@/components/sections/Services';
import Technologies from '@/components/sections/Technologies';
import Portfolio from '@/components/sections/Portfolio';
import Team from '@/components/sections/Team';
import Stats from '@/components/sections/Stats';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Overview />
        <Services />
        <Stats />
        <Portfolio />
        <Technologies />
        <Team />
      </main>
      <Footer />
    </div>
  );
}
