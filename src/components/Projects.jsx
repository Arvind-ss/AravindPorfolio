import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Projects.css';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A modern e-commerce solution with real-time inventory management, secure payment processing, and personalized recommendations.',
      tech: ['React', 'Next.js', 'Stripe', 'MongoDB'],
      image: '🛒',
      github: 'https://github.com',
      live: 'https://example.com'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates, drag-and-drop interface, and team collaboration features.',
      tech: ['React', 'TypeScript', 'Firebase', 'Tailwind'],
      image: '✅',
      github: 'https://github.com',
      live: 'https://example.com'
    },
    {
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media managers with data visualization, scheduling, and multi-platform integration.',
      tech: ['Next.js', 'Chart.js', 'PostgreSQL', 'shadcn/ui'],
      image: '📊',
      github: 'https://github.com',
      live: 'https://example.com'
    },
    {
      title: 'Weather Forecast App',
      description: 'Beautiful weather application with detailed forecasts, location search, and interactive maps powered by multiple APIs.',
      tech: ['React', 'OpenWeather API', 'Mapbox', 'CSS'],
      image: '🌤️',
      github: 'https://github.com',
      live: 'https://example.com'
    },
    {
      title: 'Portfolio Generator',
      description: 'SaaS platform that helps developers create stunning portfolio websites with customizable templates and themes.',
      tech: ['Next.js', 'Prisma', 'Stripe', 'Vercel'],
      image: '💼',
      github: 'https://github.com',
      live: 'https://example.com'
    },
    {
      title: 'Recipe Sharing Platform',
      description: 'Community-driven recipe platform with user-generated content, ratings, reviews, and meal planning features.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB'],
      image: '🍳',
      github: 'https://github.com',
      live: 'https://example.com'
    }
  ];

  return (
    <section className="projects section" id="projects" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
            >
              <div className="project-image">
                <span className="project-icon">{project.image}</span>
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                      <span>GitHub</span>
                    </a>
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link">
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

