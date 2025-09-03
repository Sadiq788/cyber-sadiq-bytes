import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Resume from '@/components/Resume';
import Projects from '@/components/Projects';
import CTF from '@/components/CTF';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Resume />
        <Projects />
        <CTF />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
