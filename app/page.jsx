'use client';

import { useEffect, useRef } from 'react';

export default function Home() {
  const container = useRef(null);

  useEffect(() => {
    const loadParticles = async () => {
      const { tsParticles } = await import('tsparticles');
      tsParticles.load(container.current, {
        fpsLimit: 30,
        particles: {
          number: { value: 70 },
          color: { value: "#00e5ff" },
          opacity: { value: 0.5 },
          size: { value: { min: 1, max: 3 } },
          move: {
            enable: true,
            speed: 0.5,
            direction: "none",
            random: true,
            straight: false
          }
        },
        interactivity: { events: { onhover: { enable: false } } },
        background: { color: "#000000" }
      });
    };

    if (typeof window !== 'undefined') {
      loadParticles();
    }
  }, []);

  return (
    <>
      <div ref={container} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }} />

      <div style={{
        position: 'relative',
        color: 'white',
        fontFamily: 'system-ui, sans-serif',
        padding: '2rem',
        maxWidth: '900px',
        margin: '0 auto'
      }}>
        <header style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{
            background: '#0A1F3C',
            color: 'white',
            padding: '0 18px',
            height: '44px',
            display: 'inline-flex',
            alignItems: 'center',
            borderRadius: '6px',
            fontWeight: 'bold',
            fontSize: '1.25rem'
          }}>
            FKNM
          </div>
        </header>

        <h1>Wir bringen dein Unternehmen online – mit Stil & Automatisierung.</h1>
        <p>Moderne Websites & individuelle Chatbots – schnell umgesetzt, fair bepreist.<br /><strong>Neue Website in 7 Tagen</strong> – inkl. Setup & Go-Live.</p>

        <a
          href="https://calendly.com/fknm-digital/30min"
          target="_blank"
          rel="noopener"
          style={{
            display: 'inline-block',
            background: '#2563EB',
            color: 'white',
            padding: '10px 24px',
            borderRadius: '30px',
            textDecoration: 'none',
            fontWeight: '600',
            marginTop: '1rem'
          }}
        >
          Termin buchen
        </a>

        <h2 style={{ marginTop: '3rem' }}>Unsere Leistungen</h2>
        <p>Fokus auf Wirkung, Geschwindigkeit und Benutzerfreundlichkeit.</p>

        <div style={{ background: 'rgba(10,31,60,0.3)', padding: '1.5rem', borderRadius: '12px', marginTop: '1.5rem' }}>
          <h3 style={{ color: '#2563EB' }}>Webdesign</h3>
          <p>Moderne, schnelle Websites – klar strukturiert & mobil-optimiert.</p>
        </div>

        <div style={{ background: 'rgba(10,31,60,0.3)', padding: '1.5rem', borderRadius: '12px', marginTop: '1.5rem' }}>
          <h3 style={{ color: '#2563EB' }}>Chatbot-Integration</h3>
          <p>Automatisierte Kommunikation, Termin- & Angebotsanfragen – 24/7.</p>
        </div>

        <h2 style={{ marginTop: '3rem' }}>Preise</h2>
        <div style={{ background: 'rgba(10,31,60,0.3)', padding: '1.5rem', borderRadius: '12px', marginTop: '1.5rem' }}>
          <p><strong>Chatbot-Pakete:</strong></p>
          <ul>
            <li>Chatbot Starter</li>
            <li>Chatbot Pro</li>
          </ul>
          <p><strong>Laufende Betreuung & Hosting:</strong> <strong>199 €/Monat für die ersten 6 Monate</strong>, danach <strong>99 €/Monat</strong>.</p>
        </div>

        <h2 style={{ marginTop: '3rem' }}>Impressum</h2>
        <div style={{ background: 'rgba(10,31,60,0.3)', padding: '1.5rem', borderRadius: '12px', marginTop: '1.5rem' }}>
          <p><strong>Angaben gemäß § 5 TMG:</strong></p>
          <p>Felix Frank Klemens und Nils Müller<br />Unterstraße 21, 54317 Osburg<br />E-Mail: fknm.digital@gmail.com</p>
        </div>
      </div>

      <script src="//code.tidio.co/ydzqdxqp9yiyfs3zaqkhgrmza5q0sqej.js" async></script>
    </>
  );
}
