import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './About.css';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skills = [
    'React.js', 'Next.js', 'TypeScript', 'JavaScript',
    'Tailwind CSS', 'shadcn/ui', 'Node.js', 'Express.js',
    'MongoDB', 'PostgreSQL', 'REST API', 'GraphQL'
  ];

  return (
    <section className="about section" id="about" ref={ref}>
      <div className="container">
        <motion.div
          className="about-content"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            About Me
          </motion.h2>

          <div className="about-grid">
            <motion.div
              className="about-image-wrapper"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              <div className="about-image-placeholder">
                <span className="image-icon">👨‍💻</span>
              </div>
            </motion.div>

            <motion.div
              className="about-text"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              <p className="about-paragraph">
                With over 3.5 years of experience in web development, I specialize in 
                creating exceptional digital experiences that combine beautiful design 
                with robust functionality.
              </p>
              
              <p className="about-paragraph">
                My journey in tech has been driven by a passion for solving complex 
                problems and a commitment to continuous learning. I thrive in 
                collaborative environments where I can contribute to innovative 
                projects that make a real impact.
              </p>

              <p className="about-paragraph">
                When I'm not coding, you'll find me exploring the latest web 
                technologies, contributing to open-source projects, or mentoring 
                aspiring developers in the community.
              </p>

              <div className="skills-section">
                <h3 className="skills-title">Technical Skills</h3>
                <div className="skills-grid">
                  {skills.map((skill, index) => (
                    <motion.span
                      key={skill}
                      className="skill-tag"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.5 + index * 0.05 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

