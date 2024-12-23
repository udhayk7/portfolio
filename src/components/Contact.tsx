import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Linkedin, Mail, Github } from 'lucide-react';

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Get in Touch
          </h2>

          <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
            <div className="space-y-8">
              <div className="text-center mb-8">
                <p className="text-gray-600 dark:text-gray-300 text-lg">
                  Feel free to reach out! I'm always open to discussing new projects,
                  creative ideas, or opportunities to be part of your visions.
                </p>
              </div>
              
              <div className="space-y-6">
                <a
                  href="mailto:work.udhaykrishna@gmail.com"
                  className="flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors group"
                >
                  <Mail className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
                  <span className="text-lg">work.udhaykrishna@gmail.com</span>
                </a>
                
                <a
                  href="https://www.linkedin.com/in/udhay-krishna-432a06283"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors group"
                >
                  <Linkedin className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
                  <span className="text-lg">LinkedIn Profile</span>
                </a>

                <a
                  href="https://github.com/udhayk7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors group"
                >
                  <Github className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
                  <span className="text-lg">GitHub Profile</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
