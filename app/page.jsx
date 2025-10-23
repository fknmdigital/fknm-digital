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

      {/* Inhalt – sichtbar über Hintergrund */}
      <div style={{
        position: 'relative',
        color: 'white',
        padding: '2rem',
        fontFamily: 'system-ui, sans-serif',
        maxWidth: '800px',
        margin: '0 auto',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}>
        <h1>Willkommen bei FKNM Digital</h1>
        <p>Deine Website in 7 Tagen – inkl. Chatbot & Go-Live.</p>
        <p><strong>Leistungen:</strong></p>
        <ul>
          <li>Webdesign</li>
          <li>Website-Relaunch</li>
          <li>Chatbot-Integration</li>
        </ul>
        <a
          href="https://calendly.com/fknm-digital/30min"
          target="_blank"
          rel="noopener"
          style={{
            display: 'inline-block',
            background: '#2563EB',
            color: 'white',
            padding: '10px 20px',
            borderRadius: '30px',
            textDecoration: 'none',
            marginTop: '1rem'
          }}
        >
          Termin buchen
        </a>
      </div>

      {/* Tidio Chatbot */}
      <script src="//code.tidio.co/ydzqdxqp9yiyfs3zaqkhgrmza5q0sqej.js" async></script>
    </>
  );
}
