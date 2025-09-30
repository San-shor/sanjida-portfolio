import Hero from '@/components/Hero';
import Projects from '@/components/Projects';

import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className='min-h-screen bg-background text-foreground'>
      <Header />
      <main>
        <Hero />

        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
