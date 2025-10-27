'use client';

import dynamic from 'next/dynamic';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';

// Lazy load ParticleBackground for better performance
const ParticleBackground = dynamic(() => import('./components/ParticleBackground'), {
  ssr: false,
  loading: () => null
});

export default function Home() {
  return (
    <>
      <ParticleBackground />
      
      <div style={{
        position: 'relative',
        zIndex: 1,
        color: 'white',
        fontFamily: 'system-ui, -apple-system, sans-serif'
      }}>
        <Navigation />
        <Hero />
        <Services />
        <FAQ />
        <CTA />
        <Footer />
      </div>

      {/* Tidio Chat Widget */}
      <script src="//code.tidio.co/ydzqdxqp9yiyfs3zaqkhgrmza5q0sqej.js" async></script>
    </>
  );
}
