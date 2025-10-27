'use client';

import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section style={{
      padding: '5rem 2rem',
      maxWidth: '1000px',
      margin: '0 auto'
    }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{
          background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.2) 0%, rgba(0, 229, 255, 0.2) 100%)',
          backdropFilter: 'blur(20px)',
          border: '2px solid rgba(37, 99, 235, 0.3)',
          borderRadius: '30px',
          padding: '4rem 2rem',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Animated Background Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            position: 'absolute',
            top: '-50%',
            right: '-20%',
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(37, 99, 235, 0.4) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(40px)'
          }}
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          style={{
            position: 'absolute',
            bottom: '-50%',
            left: '-20%',
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(0, 229, 255, 0.4) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(40px)'
          }}
        />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: '800',
              color: 'white',
              marginBottom: '1.5rem'
            }}
          >
            Bereit für den nächsten Schritt?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{
              fontSize: '1.2rem',
              color: '#cbd5e1',
              marginBottom: '2.5rem',
              maxWidth: '600px',
              margin: '0 auto 2.5rem'
            }}
          >
            Wir nehmen uns Zeit für dein Projekt – kurz schreiben, und wir melden uns.
          </motion.p>

          <motion.a
            href="https://calendly.com/fknm-digital/30min"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 20px 50px rgba(37, 99, 235, 0.5)'
            }}
            whileTap={{ scale: 0.95 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              background: 'linear-gradient(135deg, #2563EB 0%, #1d4ed8 100%)',
              color: 'white',
              padding: '18px 40px',
              borderRadius: '50px',
              textDecoration: 'none',
              fontWeight: '700',
              fontSize: '1.2rem',
              boxShadow: '0 15px 40px rgba(37, 99, 235, 0.4)'
            }}
          >
            🚀 Jetzt Termin buchen
          </motion.a>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            style={{
              marginTop: '2rem',
              display: 'flex',
              justifyContent: 'center',
              gap: '2rem',
              flexWrap: 'wrap'
            }}
          >
            {['✓ Kostenlose Beratung', '✓ Keine Verpflichtung', '✓ Schnelle Antwort'].map((text, i) => (
              <span
                key={i}
                style={{
                  color: '#94a3b8',
                  fontSize: '0.95rem',
                  fontWeight: '500'
                }}
              >
                {text}
              </span>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
