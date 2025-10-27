'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Services() {
  const [openServices, setOpenServices] = useState({});

  const toggleService = (id) => {
    setOpenServices(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const services = [
    {
      id: 'webdesign',
      title: 'Webdesign',
      icon: '🌐',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
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
      icon: '🔄',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
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
      icon: '🤖',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      short: 'Automatisierte Kommunikation, Termin- & Angebotsanfragen.',
      details: [
        'Beantwortet Standardfragen wie: „Was kostet das?", „Wann haben Sie geöffnet?"',
        'Sammelt Leads: Name, E-Mail, Anliegen – direkt per E-Mail.',
        'Bucht Termine über Calendly – Kunden wählen ihren Wunschtermin.',
        'Reduziert Routineanrufe – dein Team hat mehr Zeit für echte Gespräche.',
        'Läuft stabil – Hosting, Updates & Sicherheit inklusive.'
      ]
    }
  ];

  return (
    <section style={{
      padding: '5rem 2rem',
      maxWidth: '1100px',
      margin: '0 auto'
    }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ textAlign: 'center', marginBottom: '4rem' }}
      >
        <h2 style={{
          fontSize: 'clamp(2rem, 4vw, 2.5rem)',
          fontWeight: '700',
          color: 'white',
          marginBottom: '1rem'
        }}>
          Unsere Leistungen – einfach erklärt
        </h2>
        <p style={{ color: '#cbd5e1', fontSize: '1.1rem' }}>
          So verstehst du sofort, was du bekommst – ohne Fachchinesisch.
        </p>
      </motion.div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '2rem'
      }}>
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ y: -10 }}
            onClick={() => toggleService(service.id)}
            style={{
              background: 'rgba(10, 31, 60, 0.5)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '20px',
              padding: '2rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Gradient Background */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '6px',
              background: service.gradient,
              opacity: 0.8
            }} />

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              marginBottom: '1rem'
            }}>
              <motion.div
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.6 }}
                style={{
                  background: service.gradient,
                  width: '60px',
                  height: '60px',
                  borderRadius: '15px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2rem',
                  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)'
                }}
              >
                {service.icon}
              </motion.div>
              <h3 style={{
                color: 'white',
                margin: 0,
                fontSize: '1.5rem',
                fontWeight: '700'
              }}>
                {service.title}
              </h3>
            </div>

            <p style={{
              color: '#cbd5e1',
              fontSize: '1.05rem',
              lineHeight: '1.7',
              marginBottom: '1rem'
            }}>
              {service.short}
            </p>

            <motion.div
              initial={false}
              animate={{
                height: openServices[service.id] ? 'auto' : 0,
                opacity: openServices[service.id] ? 1 : 0
              }}
              transition={{ duration: 0.3 }}
              style={{
                overflow: 'hidden'
              }}
            >
              <div style={{
                paddingTop: '1rem',
                borderTop: '1px solid rgba(255,255,255,0.1)',
                marginTop: '1rem'
              }}>
                <ul style={{
                  color: '#e2e8f0',
                  paddingLeft: '1.5rem',
                  marginBottom: '1.5rem'
                }}>
                  {service.details.map((detail, i) => (
                    <li key={i} style={{ marginBottom: '0.8rem' }}>{detail}</li>
                  ))}
                </ul>
                <motion.a
                  href="https://calendly.com/fknm-digital/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => e.stopPropagation()}
                  style={{
                    display: 'inline-block',
                    background: service.gradient,
                    color: 'white',
                    padding: '10px 20px',
                    borderRadius: '25px',
                    textDecoration: 'none',
                    fontWeight: '600',
                    fontSize: '0.95rem'
                  }}
                >
                  → Interessiert? Direkt Termin buchen
                </motion.a>
              </div>
            </motion.div>

            <div style={{
              textAlign: 'center',
              marginTop: '1rem',
              color: '#94a3b8',
              fontSize: '1.2rem'
            }}>
              {openServices[service.id] ? '▲' : '▼'}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
