'use client';

import { useState, useEffect, useRef } from 'react';

export default function Home() {
  const container = useRef(null);
  const [openFaq, setOpenFaq] = useState(null);
  const [openServices, setOpenServices] = useState({});

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

  const toggleService = (id) => {
    setOpenServices(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const services = [
    {
      id: 'webdesign',
      title: 'Webdesign',
      short: 'Moderne, schnelle Websites – klar strukturiert & mobil-optimiert.',
      details: [
        'Deine Website ist oft der erste Eindruck – wir sorgen dafür, dass er überzeugt.',
        'Klares Design ohne überflüssiges Chaos – Fokus auf deine Botschaft.',
        'Funktioniert perfekt auf Handy, Tablet & Desktop.',
        'Meist innerhalb von 7 Tagen fertig – inkl. Basis-SEO.'
      ]
    },
    {
      id: 'relaunch',
      title: 'Website-Relaunch',
      short: 'Neugestaltung & technische Optimierung – inkl. Basis-SEO.',
      details: [
        'Deine alte Website wird modern, sicher und schneller.',
        'Technische Fehler werden behoben – Google findet dich besser.',
        'Du behältst deine Domain & E-Mails – nahtloser Übergang.'
      ]
    },
    {
      id: 'chatbot',
      title: 'Chatbot-Integration',
      short: 'Automatisierte Kommunikation, Termin- & Angebotsanfragen.',
      details: [
        'Beantwortet Standardfragen wie: „Was kostet das?“, „Wann haben Sie geöffnet?“',
        'Sammelt Leads: Name, E-Mail, Anliegen – direkt per E-Mail.',
        'Bucht Termine über Calendly – Kunden wählen ihren Wunschtermin.',
        'Reduziert Routineanrufe – dein Team hat mehr Zeit für echte Gespräche.',
        'Läuft stabil – Hosting, Updates & Sicherheit inklusive.'
      ]
    }
  ];

  const faqs = [
    {
      q: 'Wie lange dauert die Erstellung einer Website?',
      a: 'In der Regel **7 Tage** – je nach Umfang und wie schnell du Feedback gibst.'
    },
    {
      q: 'Was kostet ein Chatbot?',
      a: 'Unsere Chatbots starten ab **599 €**. Danach **199 €/Monat für 6 Monate** (Anpassungen), anschließend **99 €/Monat**.'
    },
    {
      q: 'Brauche ich technisches Wissen?',
      a: 'Nein. Wir erklären alles verständlich und kümmern uns um Setup, Hosting und Anpassungen.'
    },
    {
      q: 'Kann ich später Änderungen vornehmen lassen?',
      a: 'Klar! Wir übernehmen das gerne – oder zeigen dir, wie du kleine Änderungen selbst machst.'
    }
  ];

  return (
    <>
      <div ref={container} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }} />

      <div style={{
        position: 'relative',
        zIndex: 1,
        color: 'white',
        fontFamily: 'system-ui, sans-serif',
        padding: '2rem',
        maxWidth: '900px',
        margin: '0 auto',
        lineHeight: 1.6
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

        <section style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1>Wir bringen dein Unternehmen online – mit Stil & Automatisierung.</h1>
          <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
            Moderne Websites & individuelle Chatbots – schnell umgesetzt, fair bepreist.<br />
            <strong>Neue Website in 7 Tagen</strong> – inkl. Setup & Go-Live.
          </p>
          <a
            href="https://calendly.com/fknm-digital/30min"
            target="_blank"
            rel="noopener"
            style={{
              display: 'inline-block',
              background: '#2563EB',
              color: 'white',
              padding: '12px 28px',
              borderRadius: '30px',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '1.1rem',
              transition: 'background 0.3s, transform 0.2s',
              boxShadow: '0 4px 12px rgba(37, 99, 235, 0.3)'
            }}
            onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
          >
            📅 Termin buchen
          </a>
        </section>

        <section style={{ marginTop: '3rem' }}>
          <h2>Unsere Leistungen – einfach erklärt</h2>
          <p>So verstehst du sofort, was du bekommst – ohne Fachchinesisch.</p>

          {services.map((service) => (
            <div
              key={service.id}
              style={{
                background: 'rgba(10, 31, 60, 0.4)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '16px',
                padding: '1.8rem',
                marginTop: '1.8rem',
                transition: 'transform 0.3s, box-shadow 0.3s',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => e.target.style.transform = 'translateY(-4px)'}
              onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
              onClick={() => toggleService(service.id)}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{
                  background: '#2563EB',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold'
                }}>
                  {service.id === 'webdesign' ? '🌐' : service.id === 'relaunch' ? '🔄' : '🤖'}
                </span>
                <h3 style={{ color: '#2563EB', margin: 0 }}>{service.title}</h3>
              </div>
              <p style={{ marginTop: '1rem', fontSize: '1.05rem' }}>{service.short}</p>

              {openServices[service.id] && (
                <div style={{
                  marginTop: '1.5rem',
                  paddingTop: '1.5rem',
                  borderTop: '1px solid rgba(255,255,255,0.1)'
                }}>
                  <ul style={{ paddingLeft: '1.5rem' }}>
                    {service.details.map((d, i) => <li key={i}>{d}</li>)}
                  </ul>
                  <a
                    href="https://calendly.com/fknm-digital/30min"
                    target="_blank"
                    rel="noopener"
                    style={{
                      display: 'inline-block',
                      marginTop: '1.2rem',
                      color: '#2563EB',
                      textDecoration: 'underline'
                    }}
                  >
                    → Interessiert? Direkt Termin buchen
                  </a>
                </div>
              )}
            </div>
          ))}
        </section>

        <section style={{ marginTop: '4rem', textAlign: 'center' }}>
          <h2>Fragen? Wir erklären es dir!</h2>
          <p>Klicke auf eine Frage – die Antwort erscheint sofort.</p>

          {faqs.map((faq, i) => (
            <div
              key={i}
              style={{
                background: 'rgba(10, 31, 60, 0.3)',
                borderRadius: '12px',
                padding: '1.5rem',
                marginTop: '1.2rem',
                cursor: 'pointer'
              }}
              onClick={() => toggleFaq(i)}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <strong>{faq.q}</strong>
                <span>{openFaq === i ? '▲' : '▼'}</span>
              </div>
              {openFaq === i && (
                <div style={{ marginTop: '1rem', color: '#e2e8f0' }} dangerouslySetInnerHTML={{ __html: faq.a }} />
              )}
            </div>
          ))}
        </section>

        <section style={{ marginTop: '4rem', textAlign: 'center' }}>
          <h2>Bereit für den nächsten Schritt?</h2>
          <p>Wir nehmen uns Zeit für dein Projekt – kurz schreiben, und wir melden uns.</p>
          <a
            href="https://calendly.com/fknm-digital/30min"
            target="_blank"
            rel="noopener"
            style={{
              display: 'inline-block',
              background: '#2563EB',
              color: 'white',
              padding: '12px 28px',
              borderRadius: '30px',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '1.1rem',
              marginTop: '1.5rem',
              animation: 'pulse 2s infinite'
            }}
          >
            🚀 Jetzt Termin buchen
          </a>
        </section>

        <style jsx>{`
          @keyframes pulse {
            0% { box-shadow: 0 0 0 0 rgba(37, 99, 235, 0.4); }
            70% { box-shadow: 0 0 0 12px rgba(37, 99, 235, 0); }
            100% { box-shadow: 0 0 0 0 rgba(37, 99, 235, 0); }
          }
        `}</style>
      </div>

      <script src="//code.tidio.co/ydzqdxqp9yiyfs3zaqkhgrmza5q0sqej.js" async></script>
    </>
  );
}
