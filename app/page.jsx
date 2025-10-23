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
      document.head.appendChild(script);
    }
  }, []);

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

        <section>
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
        </section>

        <section style={{ marginTop: '3rem' }}>
          <h2>Unsere Leistungen</h2>
          <p>Fokus auf Wirkung, Geschwindigkeit und Benutzerfreundlichkeit.</p>
          {[
            { title: "Webdesign", desc: "Moderne, schnelle Websites – klar strukturiert & mobil-optimiert." },
            { title: "Website-Relaunch", desc: "Neugestaltung & technische Optimierung – inkl. Basis-SEO." },
            { title: "Chatbot-Integration", desc: "Automatisierte Kommunikation, Termin- & Angebotsanfragen." },
            { title: "Automatisierung", desc: "Vereinfachte Abläufe & Terminverwaltung." },
            { title: "Laufende Betreuung", desc: "Auf Wunsch regelmäßige Updates & Support." }
          ].map((item, i) => (
            <div key={i} style={{ background: 'rgba(10,31,60,0.3)', padding: '1.5rem', borderRadius: '12px', marginTop: '1.5rem' }}>
              <h3 style={{ color: '#2563EB' }}>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </section>

        <section style={{ marginTop: '3rem' }}>
          <h2>So läuft’s ab</h2>
          <div style={{ background: 'rgba(10,31,60,0.3)', padding: '1.5rem', borderRadius: '12px', marginTop: '1.5rem' }}>
            <ul>
              <li><strong>Analyse & Planung</strong>: Ziele, Inhalte, Designideen – kurz & konkret.</li>
              <li><strong>Umsetzung & Optimierung</strong>: Website oder Chatbot-Anpassung – schnell & sauber.</li>
              <li><strong>Launch & Betreuung</strong>: Go-Live + laufende Pflege, wenn du möchtest.</li>
            </ul>
          </div>
        </section>

        <section style={{ marginTop: '3rem' }}>
          <h2>Referenz</h2>
          <div style={{ background: 'rgba(10,31,60,0.3)', padding: '1.5rem', borderRadius: '12px', marginTop: '1.5rem' }}>
            <p>Relaunch + Chatbot-Integration – Anfragen & Termine 24/7.</p>
            <h3>Vorteile des Chatbots</h3>
            <ul>
              <li>Keine Anfragen mehr verpassen – auch nachts</li>
              <li>Mehr Termine durch einfache Buchung</li>
              <li>Weniger Routineanrufe für dein Team</li>
            </ul>
          </div>
        </section>

        <section style={{ marginTop: '3rem' }}>
          <h2>Preise – Webdesign</h2>
          <p>Transparent & fair – nach dem Erstgespräch bekommst du ein Festpreis-Angebot.</p>
          <div style={{ background: 'rgba(10,31,60,0.3)', padding: '1.5rem', borderRadius: '12px', marginTop: '1.5rem' }}>
            <ul>
              <li>Website-Refresh</li>
              <li>Relaunch</li>
              <li>Relaunch + Chatbot</li>
            </ul>
          </div>
        </section>

        <section style={{ marginTop: '3rem' }}>
          <h2>Chatbot-Pakete</h2>
          <p>Nur der Chatbot – ohne Webdesign. Individuell auf deine Abläufe zugeschnitten.</p>
          <div style={{ background: 'rgba(10,31,60,0.3)', padding: '1.5rem', borderRadius: '12px', marginTop: '1.5rem' }}>
            <ul>
              <li>Chatbot Starter</li>
              <li>Chatbot Pro</li>
            </ul>
            <p><strong>Laufende Betreuung & Hosting:</strong> <strong>199 €/Monat für die ersten 6 Monate</strong> (Anpassungsphase), danach <strong>99 €/Monat</strong>.</p>
          </div>
        </section>

        <section style={{ marginTop: '3rem' }}>
          <h2>FAQ</h2>
          {[
            { q: "Wie lange dauert die Erstellung einer Website?", a: "In der Regel **7 Tage** – je nach Umfang und Feedbackgeschwindigkeit." },
            { q: "Was kostet ein Chatbot?", a: "Unsere Chatbots starten ab **599 €**. Danach **199 €/Monat für 6 Monate** (Anpassungen), anschließend **99 €/Monat**." },
            { q: "Brauche ich technisches Wissen?", a: "Nein. Wir kümmern uns um Setup, Hosting und Anpassungen." },
            { q: "Kann ich später Änderungen vornehmen lassen?", a: "Klar – wir übernehmen das gerne oder zeigen dir kleine Änderungen." },
            { q: "Wie läuft die Zusammenarbeit ab?", a: "In drei Schritten: Erstgespräch → Umsetzung → Launch & Betreuung." }
          ].map((item, i) => (
            <div key={i} style={{ background: 'rgba(10,31,60,0.3)', padding: '1.5rem', borderRadius: '12px', marginTop: '1.5rem' }}>
              <p><strong>{item.q}</strong><br />{item.a}</p>
            </div>
          ))}
        </section>

        <section style={{ marginTop: '3rem', textAlign: 'center' }}>
          <h2>Kontakt</h2>
          <p>Kurz schreiben – wir melden uns zeitnah zur Terminvereinbarung.<br />Unsere Telefonnummer erhältst du nach deiner Anfrage – so nehmen wir uns Zeit für jedes Projekt.</p>
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
        </section>

        <section id="impressum" style={{ marginTop: '3rem' }}>
          <h2>Impressum</h2>
          <div style={{ background: 'rgba(10,31,60,0.3)', padding: '1.5rem', borderRadius: '12px', marginTop: '1.5rem' }}>
            <p><strong>Angaben gemäß § 5 TMG:</strong></p>
            <p>
              Felix Frank Klemens und Nils Müller<br />
              Unterstraße 21<br />
              54317 Osburg<br />
              Deutschland
            </p>
            <p><strong>Kontakt:</strong><br />E-Mail: fknm.digital@gmail.com</p>
            <p><strong>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</strong><br />
              Felix Frank Klemens und Nils Müller<br />
              Unterstraße 21, 54317 Osburg
            </p>
          </div>
        </section>

        <section id="datenschutz" style={{ marginTop: '3rem' }}>
          <h2>Datenschutzerklärung</h2>
          <div style={{ background: 'rgba(10,31,60,0.3)', padding: '1.5rem', borderRadius: '12px', marginTop: '1.5rem' }}>
            <p><strong>1. Name und Kontaktdaten des Verantwortlichen</strong></p>
            <p>
              Verantwortlich im Sinne der DSGVO:<br />
              Felix Frank Klemens und Nils Müller<br />
              Unterstraße 21, 54317 Osburg<br />
              E-Mail: fknm.digital@gmail.com
            </p>
            <p><strong>2. Erhebung und Speicherung personenbezogener Daten</strong></p>
            <p>Beim Aufruf unserer Website werden keine personenbezogenen Daten erhoben. Bei Kontaktaufnahme werden Ihre Daten zur Bearbeitung gespeichert und nach Erledigung gelöscht.</p>
            <p><strong>4. Einsatz von Tidio-Chatbot</strong></p>
            <p>Unser Chatbot speichert Chats nur, wenn Sie aktiv eine Nachricht senden. Daten werden in der EU gespeichert.</p>
          </div>
        </section>

        <footer style={{ textAlign: 'center', padding: '2rem 0', color: '#94a3b8', marginTop: '3rem' }}>
          <p>© 2025 FKNM Digital – Websites & Chatbots mit Stil</p>
          <a href="#impressum" style={{ color: '#2563EB', textDecoration: 'none', margin: '0 10px' }}>Impressum</a>
          <a href="#datenschutz" style={{ color: '#2563EB', textDecoration: 'none', margin: '0 10px' }}>Datenschutz</a>
        </footer>
      </div>

      <script src="//code.tidio.co/ydzqdxqp9yiyfs3zaqkhgrmza5q0sqej.js" async></script>
    </>
  );
}
