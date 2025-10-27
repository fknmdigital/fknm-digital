'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{
      padding: '4rem 2rem 2rem',
      maxWidth: '1200px',
      margin: '0 auto',
      borderTop: '1px solid rgba(255,255,255,0.1)'
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '3rem',
        marginBottom: '3rem'
      }}>
        {/* Brand */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div style={{
            background: 'linear-gradient(135deg, #0A1F3C 0%, #2563EB 100%)',
            color: 'white',
            padding: '0 18px',
            height: '44px',
            display: 'inline-flex',
            alignItems: 'center',
            borderRadius: '8px',
            fontWeight: 'bold',
            fontSize: '1.25rem',
            marginBottom: '1rem',
            boxShadow: '0 4px 15px rgba(37, 99, 235, 0.3)'
          }}>
            FKNM
          </div>
          <p style={{ color: '#94a3b8', lineHeight: '1.7', marginTop: '1rem' }}>
            Moderne Websites & Chatbots für Unternehmen, die online durchstarten wollen.
          </p>
        </motion.div>

        {/* Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 style={{ color: 'white', marginBottom: '1rem', fontSize: '1.1rem', fontWeight: '600' }}>
            Services
          </h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {['Webdesign', 'Website-Relaunch', 'Chatbot-Integration'].map((service, i) => (
              <li key={i} style={{ marginBottom: '0.7rem' }}>
                <a
                  href="#services"
                  style={{
                    color: '#94a3b8',
                    textDecoration: 'none',
                    transition: 'color 0.3s'
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#2563EB'}
                  onMouseLeave={(e) => e.target.style.color = '#94a3b8'}
                >
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 style={{ color: 'white', marginBottom: '1rem', fontSize: '1.1rem', fontWeight: '600' }}>
            Kontakt
          </h3>
          <ul style={{ listStyle: 'none', padding: 0, color: '#94a3b8' }}>
            <li style={{ marginBottom: '0.7rem' }}>
              📞 <a 
                href="tel:+4915122855923" 
                style={{ color: '#94a3b8', textDecoration: 'none' }}
                onMouseEnter={(e) => e.target.style.color = '#2563EB'}
                onMouseLeave={(e) => e.target.style.color = '#94a3b8'}
              >
                +49 151 22855923
              </a>
            </li>
            <li style={{ marginBottom: '0.7rem' }}>
              ✉️ <a 
                href="mailto:fknm.digital@gmail.com"
                style={{ color: '#94a3b8', textDecoration: 'none' }}
                onMouseEnter={(e) => e.target.style.color = '#2563EB'}
                onMouseLeave={(e) => e.target.style.color = '#94a3b8'}
              >
                fknm.digital@gmail.com
              </a>
            </li>
            <li style={{ marginBottom: '0.7rem' }}>
              📍 Unterstraße 21, 54317 Osburg
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
        style={{
          paddingTop: '2rem',
          borderTop: '1px solid rgba(255,255,255,0.1)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}
      >
        <p style={{ color: '#64748b', fontSize: '0.9rem', margin: 0 }}>
          © {new Date().getFullYear()} FKNM Digital. Alle Rechte vorbehalten.
        </p>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <Link 
            href="/impressum"
            style={{
              color: '#94a3b8',
              textDecoration: 'none',
              fontSize: '0.9rem',
              transition: 'color 0.3s'
            }}
            onMouseEnter={(e) => e.target.style.color = '#2563EB'}
            onMouseLeave={(e) => e.target.style.color = '#94a3b8'}
          >
            Impressum
          </Link>
          <Link 
            href="/datenschutz"
            style={{
              color: '#94a3b8',
              textDecoration: 'none',
              fontSize: '0.9rem',
              transition: 'color 0.3s'
            }}
            onMouseEnter={(e) => e.target.style.color = '#2563EB'}
            onMouseLeave={(e) => e.target.style.color = '#94a3b8'}
          >
            Datenschutz
          </Link>
        </div>
      </motion.div>
    </footer>
  );
}
