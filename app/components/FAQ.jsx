'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const faqs = [
    {
      id: 1,
      q: 'Wie lange dauert die Erstellung einer Website?',
      a: 'In der Regel <strong>7 Tage</strong> – je nach Umfang und wie schnell du Feedback gibst.'
    },
    {
      id: 2,
      q: 'Was kostet ein Chatbot?',
      a: 'Unsere Chatbots starten ab <strong>599 €</strong>. Danach <strong>199 €/Monat für 6 Monate</strong> (Anpassungen), anschließend <strong>99 €/Monat</strong>.'
    },
    {
      id: 3,
      q: 'Brauche ich technisches Wissen?',
      a: 'Nein. Wir erklären alles verständlich und kümmern uns um Setup, Hosting und Anpassungen.'
    },
    {
      id: 4,
      q: 'Kann ich später Änderungen vornehmen lassen?',
      a: 'Klar! Wir übernehmen das gerne – oder zeigen dir, wie du kleine Änderungen selbst machst.'
    }
  ];

  return (
    <section style={{
      padding: '5rem 2rem',
      maxWidth: '900px',
      margin: '0 auto'
    }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ textAlign: 'center', marginBottom: '3rem' }}
      >
        <h2 style={{
          fontSize: 'clamp(2rem, 4vw, 2.5rem)',
          fontWeight: '700',
          color: 'white',
          marginBottom: '1rem'
        }}>
          Fragen? Wir erklären es dir!
        </h2>
        <p style={{ color: '#cbd5e1', fontSize: '1.1rem' }}>
          Klicke auf eine Frage – die Antwort erscheint sofort.
        </p>
      </motion.div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {faqs.map((faq, index) => (
          <motion.div
            key={faq.id}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            style={{
              background: 'rgba(10, 31, 60, 0.4)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '16px',
              overflow: 'hidden',
              cursor: 'pointer'
            }}
            whileHover={{
              borderColor: 'rgba(37, 99, 235, 0.5)',
              boxShadow: '0 8px 30px rgba(37, 99, 235, 0.2)'
            }}
            onClick={() => toggleFaq(faq.id)}
          >
            <div style={{
              padding: '1.5rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '1rem'
            }}>
              <strong style={{
                color: 'white',
                fontSize: '1.1rem',
                flex: 1
              }}>
                {faq.q}
              </strong>
              <motion.span
                animate={{ rotate: openFaq === faq.id ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                style={{
                  color: '#2563EB',
                  fontSize: '1.5rem',
                  fontWeight: 'bold'
                }}
              >
                ▼
              </motion.span>
            </div>

            <AnimatePresence>
              {openFaq === faq.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ overflow: 'hidden' }}
                >
                  <div
                    style={{
                      padding: '0 1.5rem 1.5rem 1.5rem',
                      color: '#e2e8f0',
                      fontSize: '1.05rem',
                      lineHeight: '1.7',
                      borderTop: '1px solid rgba(255,255,255,0.1)',
                      paddingTop: '1rem'
                    }}
                    dangerouslySetInnerHTML={{ __html: faq.a }}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
