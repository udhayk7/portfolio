import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Download } from 'lucide-react';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            About Me
          </h2>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8">
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              I am a passionate B.Tech student with a strong foundation in web development and data analysis. 
              My journey in technology has been driven by a desire to create impactful solutions that make a 
              difference in people's lives. I specialize in building scalable web applications and deriving 
              meaningful insights from data.
            </p>

            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              With expertise in modern web technologies and data analysis tools, I strive to bridge the gap 
              between complex technical solutions and user-friendly experiences. I'm constantly learning and 
              adapting to new technologies while maintaining a focus on writing clean, efficient code.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}