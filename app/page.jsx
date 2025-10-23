'use client';

import { useEffect, useRef } from 'react';

export default function Home() {
  const container = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/tsparticles@2.12.0/tsparticles.bundle.min.js';
      script.onload = () => {
        window.tsParticles.load(container.current, {
          fpsLimit: 30,
          particles: {
            number: { value: 60 },
            color: { value: "#00e5ff" },
            opacity: { value: 0.4 },
            size: { value: { min: 1, max: 3 } },
            move: {
              enable: true,
              speed: 0.4,
              direction: "none",
              random: true,
              straight: false
            }
          },
          interactivity: { events: { onhover: { enable: false } } },
          background: { color: "#000000" }
        });
      };
      document.head.appendChild(script);
    }
  }, []);

  return (
    <>
      {/* Hintergrund */}
      <div ref={container} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }} />

      {/* Inhalt */}
      <div style={{ position: 'relative', color: 'white', padding: '2rem', fontFamily: 'system-ui', maxWidth: '800px', margin: '0 auto' }}>
        <h1>Wir bringen dein Unternehmen online</h1>
        <p>Moderne Websites & Chatbots – in 7 Tagen.</p>
        <h2>Webdesign</h2>
        <p>Klare, schnelle Websites – mobil-optimiert.</p>
        <h2>Chatbot-Integration</h2>
        <p>Automatisierte Kommunikation – 24/7.</p>
        <h2>Impressum</h2>
        <p>Felix Frank Klemens und Nils Müller<br />Unterstraße 21, 54317 Osburg<br />E-Mail: fknm.digital@gmail.com</p>
        <a href="https://calendly.com/fknm-digital/30min" style={{ display: 'inline-block', background: '#2563EB', color: 'white', padding: '10px 20px', borderRadius: '30px', textDecoration: 'none', marginTop: '1rem' }}>
          Termin buchen
        </a>
      </div>

      {/* Tidio */}
      <script src="//code.tidio.co/ydzqdxqp9yiyfs3zaqkhgrmza5q0sqej.js" async></script>
    </>
  );
}
