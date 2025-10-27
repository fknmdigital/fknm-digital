'use client';

import { useEffect, useRef } from 'react';

export default function ParticleBackground() {
  const container = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/tsparticles@2.12.0/tsparticles.bundle.min.js';
      script.onload = () => {
        window.tsParticles.load(container.current, {
          fpsLimit: 60,
          particles: {
            number: { 
              value: 80,
              density: {
                enable: true,
                value_area: 800
              }
            },
            color: { value: "#00e5ff" },
            opacity: { 
              value: 0.5,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false
              }
            },
            size: { 
              value: { min: 1, max: 3 },
              random: true
            },
            move: {
              enable: true,
              speed: 0.8,
              direction: "none",
              random: true,
              straight: false,
              out_mode: "out",
              bounce: false
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#00e5ff",
              opacity: 0.2,
              width: 1
            }
          },
          interactivity: { 
            detect_on: "canvas",
            events: { 
              onhover: { 
                enable: true,
                mode: "grab"
              },
              onclick: {
                enable: true,
                mode: "push"
              },
              resize: true
            },
            modes: {
              grab: {
                distance: 140,
                line_linked: {
                  opacity: 0.5
                }
              },
              push: {
                particles_nb: 4
              }
            }
          },
          background: { color: "#000000" },
          retina_detect: true
        });
      };
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div 
      ref={container} 
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
        zIndex: -1 
      }} 
    />
  );
}
