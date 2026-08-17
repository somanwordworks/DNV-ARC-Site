import Navbar    from '@/components/Navbar';
import Hero      from '@/components/Hero';
import Ticker    from '@/components/Ticker';
import Ecosystem from '@/components/Ecosystem';
import About     from '@/components/About';
import Contact   from '@/components/Contact';
import Footer    from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <Ecosystem />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
