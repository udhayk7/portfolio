import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
      </div>

      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Hi, I'm{' '}
            <span className="text-indigo-600 dark:text-indigo-400">
              Udhay Krishna
            </span>
          </h1>

          <div className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8">
            <TypeAnimation
              sequence={[
                'B.Tech Student',
                2000,
                'Web Developer',
                2000,
                'Data Analyst',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          <div className="text-lg text-gray-600 dark:text-gray-300 mb-12">
            <TypeAnimation
              sequence={[
                'Building Scalable Solutions',
                3000,
                'Creating Modern Web Apps',
                3000,
                'Data-Driven Decision Making',
                3000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="https://www.linkedin.com/in/udhay-krishna-432a06283"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/udhayk7"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-900 text-white hover:bg-gray-800 transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="mailto:work.udhaykrishna@gmail.com"
              className="p-3 rounded-full bg-red-600 text-white hover:bg-red-700 transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-gray-400 rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
}
