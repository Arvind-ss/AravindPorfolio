import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import './FAQ.css';

const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What technologies do you specialize in?',
      answer: 'I specialize in modern frontend technologies including React.js, Next.js, TypeScript, and Tailwind CSS. I also have strong full-stack capabilities with Node.js, Express, and databases like MongoDB and PostgreSQL.'
    },
    {
      question: 'Do you work on freelance projects?',
      answer: 'Yes! I\'m open to freelance opportunities and consulting work. Feel free to reach out through the contact form below to discuss your project requirements and timeline.'
    },
    {
      question: 'What is your approach to web development?',
      answer: 'I follow a user-centric approach focusing on performance, accessibility, and SEO. I believe in writing clean, maintainable code and following best practices. I also emphasize responsive design and cross-browser compatibility.'
    },
    {
      question: 'How do you ensure code quality?',
      answer: 'I use TypeScript for type safety, write unit and integration tests, follow ESLint rules, conduct code reviews, and use CI/CD pipelines. I also stay updated with the latest best practices and design patterns.'
    },
    {
      question: 'What is your typical project workflow?',
      answer: 'I start with understanding requirements, then move to planning and wireframing. Development follows agile methodology with regular check-ins, code reviews, and testing. Finally, deployment and post-launch support ensure everything runs smoothly.'
    },
    {
      question: 'Can you help with existing projects?',
      answer: 'Absolutely! I can help with bug fixes, feature additions, performance optimization, refactoring, or complete redesigns of existing applications. I\'m experienced in working with legacy codebases.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq section" id="faq" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className={`faq-item ${openIndex === index ? 'active' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span className="question-text">{faq.question}</span>
                <motion.span
                  className="faq-icon"
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  +
                </motion.span>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    className="faq-answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="answer-text">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

