import { useState } from 'react';
import LandingAnimation from './components/LandingAnimation';
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
  const [showContent, setShowContent] = useState(false);

  const handleAnimationComplete = () => {
    setShowContent(true);
  };

  return (
    <div className="app">
      <LandingAnimation onComplete={handleAnimationComplete} />
      
      {showContent && (
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
      )}
    </div>
  );
}

export default App;
