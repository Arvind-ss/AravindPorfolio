import { useState, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import FAQ from './components/FAQ';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import './App.css';

function App() {
  const lenisRef = useRef(null);

  useEffect(() => {
    // Initialize Lenis smooth scroll immediately
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    lenisRef.current = lenis;

    // Setup requestAnimationFrame loop
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="app">
      <Navbar lenisInstance={lenisRef.current} />
      <main className="main-content">
        <Hero />
        <Stats />
        <About />
        <Experience />
        <Projects />
        <FAQ />
        <Testimonials />
        <Contact />
        
        <footer className="footer">
          <div className="container">
            <p className="footer-text">
              © {new Date().getFullYear()} Aravind. All rights reserved.
            </p>
            <p className="footer-subtitle">
              Built with React, Framer Motion, and ❤️
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
