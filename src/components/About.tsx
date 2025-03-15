import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { User, Code2, Trophy, Rocket } from 'lucide-react';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 relative">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(124,58,237,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(99,102,241,0.1),transparent_50%)]" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12 space-y-4">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block"
            >
              <User className="w-12 h-12 text-indigo-400 animate-pulse-slow" />
            </motion.div>
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              About Me
            </h2>
          </div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass-effect rounded-xl p-6 relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-xy"></div>
              <div className="relative space-y-6">
                <p className="text-gray-300 leading-relaxed text-lg">
                  I'm Udhay Krishna, a passionate Full-Stack Developer, Mobile App Developer, and Data Enthusiast. I love building scalable web applications, crafting mobile apps with Flutter, and exploring data analytics and AI-driven solutions.
                </p>
                <p className="text-gray-300 leading-relaxed text-lg">
                  With a strong problem-solving mindset, I have won multiple hackathons and worked on innovative projects in healthcare, IoT, and smart systems.
                </p>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: <Code2 className="w-6 h-6" />,
                  title: "Full-Stack Dev",
                  description: "Building scalable web applications with modern technologies"
                },
                {
                  icon: <Trophy className="w-6 h-6" />,
                  title: "Hackathon Winner",
                  description: "Multiple wins in national-level competitions"
                },
                {
                  icon: <Rocket className="w-6 h-6" />,
                  title: "Tech Innovator",
                  description: "Creating solutions that make a difference"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="glass-effect p-6 rounded-xl relative group"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative">
                    <div className="p-3 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-lg w-fit mb-4 text-white transform group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}