import { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/home/Hero';
import Services from '@/components/services/Services';
import Resume from '@/components/resume/Resume';
import Work from '@/components/work/Work';
import Contact from '@/components/contact/Contact';
import Footer from '@/components/layout/Footer';

export default function Index() {
  // Set body to dark theme
  useEffect(() => {
    document.body.classList.add('dark');
    // Create directory for profile image if it doesn't exist yet
    const dir = '/assets/images';
    
    return () => {
      document.body.classList.remove('dark');
    };
  }, []);

  return (
    <div className="min-h-screen bg-dark-bg text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Resume />
        <Work />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}