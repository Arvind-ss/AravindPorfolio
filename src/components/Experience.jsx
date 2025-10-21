import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Experience.css';
import { HiOutlineOfficeBuilding } from 'react-icons/hi';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const experiences = [
    {
      company: 'Tech Innovations Inc.',
      role: 'Senior Frontend Engineer',
      period: '2023 - Present',
      description: [
        'Led the development of a scalable React-based dashboard serving 100K+ users',
        'Implemented micro-frontend architecture reducing load times by 40%',
        'Mentored junior developers and established coding standards',
        'Collaborated with design team to create seamless user experiences'
      ],
      icon: <HiOutlineOfficeBuilding />
    },
    {
      company: 'Digital Solutions Ltd.',
      role: 'Frontend Developer',
      period: '2021 - 2023',
      description: [
        'Built responsive web applications using React.js and Next.js',
        'Integrated RESTful APIs and GraphQL endpoints',
        'Optimized application performance achieving 95+ Lighthouse scores',
        'Participated in agile development cycles and code reviews'
      ],
      icon: <HiOutlineOfficeBuilding />
    },
    {
      company: 'StartUp Ventures',
      role: 'Junior Frontend Developer',
      period: '2020 - 2021',
      description: [
        'Developed user-facing features for e-commerce platform',
        'Worked with React, TypeScript, and Tailwind CSS',
        'Implemented responsive designs across multiple devices',
        'Collaborated with backend team for API integration'
      ],
      icon: <HiOutlineOfficeBuilding />
    }
  ];

  return (
    <section className="experience section" id="experience" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Experience
        </motion.h2>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <div className="timeline-icon">
                <span className="icon">{exp.icon}</span>
              </div>
              
              <div className="timeline-content">
                <motion.h3
                  className="company-name"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: index * 0.2 + 0.2 }}
                >
                  {exp.company}
                </motion.h3>
                
                <motion.p
                  className="role"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: index * 0.2 + 0.3 }}
                >
                  {exp.role}
                </motion.p>
                
                <motion.p
                  className="period"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: index * 0.2 + 0.4 }}
                >
                  {exp.period}
                </motion.p>
                
                <motion.ul
                  className="description-list"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: index * 0.2 + 0.5 }}
                >
                  {exp.description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </motion.ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

