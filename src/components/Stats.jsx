import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Stats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    {
      number: '2.5+',
      label: 'Years of Experience',
      description: 'Building modern web applications with cutting-edge technologies'
    },
    {
      number: '10+',
      label: 'Projects Completed',
      description: 'From startups to enterprise solutions across various industries'
    },
    {
      number: '98%',
      label: 'Client Satisfaction',
      description: 'Delivering quality work that exceeds expectations'
    },
    {
      number: '100%',
      label: 'Code Quality',
      description: 'Clean, maintainable, and well-documented codebases'
    }
  ];

  return (
    <section 
      className="py-32 px-8 bg-white" 
      id="stats" 
      ref={ref}
      style={{ padding: '8rem 2rem', backgroundColor: '#FFFFFF' }}
    >
      <div 
        className="max-w-7xl mx-auto" 
        style={{ maxWidth: '80rem', margin: '0 auto' }}
      >
        <motion.div
          className="text-center mb-20"
          style={{ textAlign: 'center', marginBottom: '5rem' }}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary mb-4 tracking-tighter leading-tight"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 700, color: '#0C0C0C', marginBottom: '1rem', letterSpacing: '-0.03em', lineHeight: 1.1 }}
          >
            My work speaks through numbers
          </h2>
          <p 
            className="text-xl md:text-2xl text-gray-medium font-normal"
            style={{ fontSize: 'clamp(1.125rem, 2vw, 1.5rem)', color: '#86868B', fontWeight: 400 }}
          >
            Here's what I've achieved so far
          </p>
        </motion.div>

        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-8 bg-gray-light rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-2 hover:border-accent border-2 border-transparent"
              style={{ 
                textAlign: 'center', 
                padding: '2rem', 
                backgroundColor: '#F5F5F7', 
                borderRadius: '1.25rem', 
                transition: 'all 0.3s ease',
                border: '2px solid transparent'
              }}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 + 0.2, duration: 0.6 }}
            >
              <div 
                className="text-6xl md:text-7xl font-extrabold text-accent mb-4 tracking-tighter leading-none"
                style={{ fontSize: 'clamp(3.5rem, 6vw, 5rem)', fontWeight: 800, color: '#DE322D', marginBottom: '1rem', letterSpacing: '-0.02em', lineHeight: 1 }}
              >
                {stat.number}
              </div>
              <h3 
                className="text-xl font-bold text-primary mb-2 tracking-tight"
                style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0C0C0C', marginBottom: '0.5rem', letterSpacing: '-0.01em' }}
              >
                {stat.label}
              </h3>
              <p 
                className="text-base text-gray-medium leading-relaxed"
                style={{ fontSize: '0.95rem', color: '#86868B', lineHeight: 1.6 }}
              >
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;

