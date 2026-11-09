import Navbar from '@/components/Navbar';
import ScrollHero from '@/components/ScrollHero';
import Products from '@/components/Products';
import Company from '@/components/Company';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <ScrollHero />
        <div className="theme-light">
          <div className="theme-bridge" aria-hidden />
          <Products />
          <Company />
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}
