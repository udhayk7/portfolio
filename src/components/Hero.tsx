import { TypeAnimation } from 'react-type-animation';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Progress Line */}
      <motion.div 
        style={{ scaleX }}
        className="fixed top-16 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transform-gpu z-50"
      />

      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Profile Image */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mx-auto relative"
            >
              <div className="relative w-48 h-48 mx-auto mb-8 group">
                {/* Animated gradient border */}
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full opacity-75 group-hover:opacity-100 blur transition duration-1000 group-hover:duration-200 animate-gradient-xy"></div>
                
                {/* Image container */}
                <div className="relative rounded-full w-full h-full p-1 bg-gray-900">
                  <img
                    src="/profile.jpg"
                    alt="Udhay Krishna"
                    className="rounded-full w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Decorative elements */}
                <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
              </div>
            </motion.div>

            <h1 className="text-5xl sm:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-300 to-white">
              Hi, I'm Udhay Krishna
            </h1>

            <div className="text-2xl sm:text-3xl text-gray-300">
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
                className="font-medium"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center space-x-6 pt-8"
          >
            {[
              {
                href: "https://www.linkedin.com/in/udhay-krishna-432a06283",
                icon: <Linkedin className="w-6 h-6" />,
                gradient: "from-blue-500 to-blue-600"
              },
              {
                href: "https://github.com/udhayk7",
                icon: <Github className="w-6 h-6" />,
                gradient: "from-gray-700 to-gray-800"
              },
              {
                href: "mailto:work.udhaykrishna@gmail.com",
                icon: <Mail className="w-6 h-6" />,
                gradient: "from-red-500 to-red-600"
              }
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 rounded-full bg-gradient-to-r ${item.gradient} hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] text-white transform hover:scale-110 transition-all duration-300`}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

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
        <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-gray-500 rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
}