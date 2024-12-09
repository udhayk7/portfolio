import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skills = {
  'Programming Languages': [
    { name: 'Python', icon: '🐍' },
    { name: 'JavaScript', icon: '⚡' },
    { name: 'SQL', icon: '📊' },
  ],
  'Web Development': [
    { name: 'React', icon: '⚛️' },
    { name: 'FastAPI', icon: '🚀' },
    { name: 'PostgreSQL', icon: '🐘' },
  ],
  'Tools': [
    { name: 'Git', icon: '📦' },
    { name: 'Docker', icon: '🐳' },
    { name: 'Firebase', icon: '🔥' },
  ],
  'Data Analysis': [
    { name: 'Pandas', icon: '🐼' },
    { name: 'NumPy', icon: '🔢' },
    { name: 'Matplotlib', icon: '📈' },
  ],
};

function SkillCard({ name, icon, delay }: { name: string; icon: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay }}
      whileHover={{ scale: 1.05 }}
      className="bg-white dark:bg-gray-700 rounded-xl p-4 shadow-lg flex items-center space-x-3 hover:shadow-xl transition-shadow"
    >
      <span className="text-2xl">{icon}</span>
      <span className="text-gray-800 dark:text-gray-200 font-medium">{name}</span>
    </motion.div>
  );
}

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Skills
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {Object.entries(skills).map(([category, categorySkills], categoryIndex) => (
              <div key={category} className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
                  {category}
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  {categorySkills.map((skill, index) => (
                    <SkillCard
                      key={skill.name}
                      name={skill.name}
                      icon={skill.icon}
                      delay={categoryIndex * 0.2 + index * 0.1}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}