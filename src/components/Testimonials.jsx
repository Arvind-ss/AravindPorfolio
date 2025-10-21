import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Testimonials.css';

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Product Manager',
      company: 'Tech Innovations Inc.',
      quote: 'Working with Aravind was an absolute pleasure. His attention to detail and ability to translate complex requirements into elegant solutions is remarkable. The project was delivered ahead of schedule with exceptional quality.',
      avatar: '👩‍💼'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      company: 'Digital Solutions Ltd.',
      quote: 'Aravind\'s technical expertise and problem-solving skills are outstanding. He not only delivered a high-performance application but also improved our development workflow. A true professional!',
      avatar: '👨‍💻'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Design Lead',
      company: 'Creative Studio',
      quote: 'The collaboration was seamless! Aravind brought our designs to life with pixel-perfect precision and smooth animations. His understanding of both design and development is impressive.',
      avatar: '👩‍🎨'
    },
    {
      name: 'David Kim',
      role: 'Founder',
      company: 'StartUp Ventures',
      quote: 'Aravind helped us build our MVP from scratch. His full-stack capabilities and quick turnaround time were crucial to our launch. Highly recommended for any web development project!',
      avatar: '👨‍💼'
    },
    {
      name: 'Lisa Anderson',
      role: 'Marketing Director',
      company: 'E-Commerce Plus',
      quote: 'The website performance improvements Aravind implemented resulted in a 40% increase in conversions. His focus on user experience and SEO made a significant impact on our business.',
      avatar: '👩'
    },
    {
      name: 'James Wilson',
      role: 'Senior Developer',
      company: 'Code Masters',
      quote: 'Aravind is not just a great developer, but also an excellent team player. His code is clean, well-documented, and easy to maintain. A valuable asset to any development team.',
      avatar: '👨'
    }
  ];

  return (
    <section className="testimonials section" id="testimonials" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          What Clients Say
        </motion.h2>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="testimonial-card"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <div className="quote-icon">"</div>
              
              <p className="testimonial-quote">{testimonial.quote}</p>
              
              <div className="testimonial-author">
                <div className="author-avatar">{testimonial.avatar}</div>
                <div className="author-info">
                  <p className="author-name">{testimonial.name}</p>
                  <p className="author-role">{testimonial.role}</p>
                  <p className="author-company">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

