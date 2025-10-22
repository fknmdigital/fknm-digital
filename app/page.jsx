'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <>
      <header className="container">
        <div className="logo" aria-label="FKNM Digital Logo">FKNM</div>
      </header>

      <main className="container">
        <section>
          <h1>Wir bringen dein Unternehmen online – mit Stil & Automatisierung.</h1>
          <p>Moderne Websites & individuelle Chatbots – schnell umgesetzt, fair bepreist.<br /><strong>Neue Website in 7 Tagen</strong> – inkl. Setup & Go-Live.</p>
          <a href="https://calendly.com/fknm-digital/30min" className="btn" target="_blank" rel="noopener">Termin buchen</a>
        </section>

        <section>
          <h2>Unsere Leistungen</h2>
          <p>Fokus auf Wirkung, Geschwindigkeit und Benutzerfreundlichkeit.</p>
          <div className="card"><h3>Webdesign</h3><p>Moderne, schnelle Websites – klar strukturiert & mobil-optimiert.</p></div>
          <div className="card"><h3>Website-Relaunch</h3><p>Neugestaltung & technische Optimierung – inkl. Basis-SEO.</p></div>
          <div className="card"><h3>Chatbot-Integration</h3><p>Automatisierte Kommunikation, Termin- & Angebotsanfragen.</p></div>
          <div className="card"><h3>Automatisierung</h3><p>Vereinfachte Abläufe & Terminverwaltung.</p></div>
          <div className="card"><h3>Laufende Betreuung</h3><p>Auf Wunsch regelmäßige Updates & Support.</p></div>
        </section>

        <section>
          <h2>So läuft’s ab</h2>
          <div className="card">
            <ul>
              <li><strong>Analyse & Planung</strong>: Ziele, Inhalte, Designideen – kurz & konkret.</li>
              <li><strong>Umsetzung & Optimierung</strong>: Website oder Chatbot-Anpassung – schnell & sauber.</li>
              <li><strong>Launch & Betreuung</strong>: Go-Live + laufende Pflege, wenn du möchtest.</li>
            </ul>
          </div>
        </section>

        <section>
          <h2>Referenz</h2>
          <div className="card">
            <p>Relaunch + Chatbot-Integration – Anfragen & Termine 24/7.</p>
            <h3>Vorteile des Chatbots</h3>
            <ul>
              <li>Keine Anfragen mehr verpassen – auch nachts</li>
              <li>Mehr Termine durch einfache Buchung</li>
              <li>Weniger Routineanrufe für dein Team</li>
            </ul>
          </div>
        </section>

        <section>
          <h2>Preise – Webdesign</h2>
          <p>Transparent & fair – nach dem Erstgespräch bekommst du ein Festpreis-Angebot.</p>
          <div className="card">
            <ul>
              <li>Website-Refresh</li>
              <li>Relaunch</li>
              <li>Relaunch + Chatbot</li>
            </ul>
          </div>
        </section>

        <section>
          <h2>Chatbot-Pakete</h2>
          <p>Nur der Chatbot – ohne Webdesign. Individuell auf deine Abläufe zugeschnitten.</p>
          <div className="card">
            <ul>
              <li>Chatbot Starter</li>
              <li>Chatbot Pro</li>
            </ul>
            <p><strong>Laufende Betreuung & Hosting:</strong> <strong>199 €/Monat für die ersten 6 Monate</strong> (Anpassungsphase), danach <strong>99 €/Monat</strong>.</p>
          </div>
        </section>

        <section>
          <h2>FAQ</h2>
          <div className="card">
            <p><strong>Wie lange dauert die Erstellung einer Website?</strong><br />In der Regel <strong>7 Tage</strong> – je nach Umfang und Feedbackgeschwindigkeit.</p>
          </div>
          <div className="card">
            <p><strong>Was kostet ein Chatbot?</strong><br />Unsere Chatbots starten ab <strong>599 €</strong>. Danach <strong>199 €/Monat für 6 Monate</strong> (Anpassungen), anschließend <strong>99 €/Monat</strong>.</p>
          </div>
          <div className="card">
            <p><strong>Brauche ich technisches Wissen?</strong><br />Nein. Wir kümmern uns um Setup, Hosting und Anpassungen.</p>
          </div>
          <div className="card">
            <p><strong>Kann ich später Änderungen vornehmen lassen?</strong><br />Klar – wir übernehmen das gerne oder zeigen dir kleine Änderungen.</p>
          </div>
          <div className="card">
            <p><strong>Wie läuft die Zusammenarbeit ab?</strong><br />In drei Schritten: Erstgespräch → Umsetzung → Launch & Betreuung.</p>
          </div>
        </section>

        <section style={{ textAlign: 'center' }}>
          <h2>Kontakt</h2>
          <p>Kurz schreiben – wir melden uns zeitnah zur Terminvereinbarung.<br />Unsere Telefonnummer erhältst du nach deiner Anfrage – so nehmen wir uns Zeit für jedes Projekt.</p>
          <a href="https://calendly.com/fknm-digital/30min" className="btn" target="_blank" rel="noopener">Termin buchen</a>
        </section>

        {/* IMPRESSUM */}
        <section id="impressum">
          <h2>Impressum</h2>
          <div className="card">
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

        {/* DATENSCHUTZ */}
        <section id="datenschutz">
          <h2>Datenschutzerklärung</h2>
          <div className="card">
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
      </main>

      <footer className="container">
        <p>© 2025 FKNM Digital – Websites & Chatbots mit Stil</p>
        <a href="#impressum">Impressum</a> | <a href="#datenschutz">Datenschutz</a>
      </footer>

      {/* Partikel-Hintergrund – direkt im HTML */}
      <script dangerouslySetInnerHTML={{
        __html: `
          const script = document.createElement('script');
          script.src = 'https://cdn.jsdelivr.net/npm/tsparticles@2.12.0/tsparticles.bundle.min.js';
          script.onload = () => {
            tsParticles.load('tsparticles', {
              fpsLimit: 30,
              particles: {
                number: { value: 12 },
                color: { value: "#2563EB" },
                opacity: { value: 0.15 },
                size: { value: { min: 1, max: 4 } },
                move: { enable: true, speed: 0.7 }
              },
              interactivity: { detectsOn: "canvas", events: { onhover: { enable: false } } }
            });
            const div = document.createElement('div');
            div.id = 'tsparticles';
            div.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;z-index:-1;pointer-events:none';
            document.body.appendChild(div);
          };
          document.head.appendChild(script);
        `
      }} />
    </>
  );
}
