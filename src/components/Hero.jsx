import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  const socialLinks = [
    { name: 'LinkedIn', url: 'https://linkedin.com', icon: '💼' },
    { name: 'GitHub', url: 'https://github.com', icon: '💻' },
    { name: 'Twitter', url: 'https://twitter.com', icon: '𝕏' },
    { name: 'Email', url: 'mailto:aravind@example.com', icon: '✉️' },
  ];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      className="min-h-screen flex items-center justify-center px-8 py-24 hero-section" 
      id="home"
      style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        padding: '6rem 2rem'
      }}
    >
      <div className="max-w-5xl mx-auto w-full hero-content" style={{ maxWidth: '80rem', margin: '0 auto', width: '100%' }}>
        <motion.div
          className="text-center"
          style={{ textAlign: 'center' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.p
            className="text-7xl font-medium text-gray-medium mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Hi, I'm
          </motion.p>
          
          <motion.h1
            className="text-7xl md:text-8xl lg:text-9xl font-extrabold text-primary mb-4 tracking-tighter leading-none"
            style={{ fontSize: 'clamp(4rem, 10vw, 7rem)', fontWeight: 800, color: 'var(--color-text)', marginBottom: '1rem', letterSpacing: '-0.03em', lineHeight: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Aravind
          </motion.h1>
          
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-semibold text-accent mb-8 tracking-tight leading-tight"
            style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', fontWeight: 600, color: 'var(--color-accent)', marginBottom: '2rem', letterSpacing: '-0.01em' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            Frontend Engineer with Full-Stack Expertise
          </motion.h2>
          
          <motion.p
            className="text-lg md:text-xl leading-relaxed text-gray-dark mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            I build fast, accessible, and SEO-friendly web applications using React.js, 
            Next.js, Tailwind CSS, and shadcn/ui.
             {/* With 2.5+ years of experience and strong 
            full-stack skills in JavaScript and TypeScript, I am passionate about creating 
            smooth user interfaces, maintaining excellent UI/UX, and writing clean, 
            maintainable code. */}
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <motion.button 
              className="hero-btn hero-btn-primary mt-4"
              onClick={scrollToContact}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Get in Touch</span>
              <span className="hero-btn-icon">→</span>
            </motion.button>
            
            <motion.a 
              href="/cv.pdf" 
              download 
              className="hero-btn hero-btn-secondary mt-4"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Download CV</span>
              {/* <span className="hero-btn-icon">↓</span> */}
            </motion.a>
          </motion.div>

          <motion.div
            className="flex gap-4 justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-light hover:bg-accent hover:shadow-lg hover:shadow-accent/30 transition-all duration-300"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.name}
              >
                <span className="text-2xl">{social.icon}</span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

