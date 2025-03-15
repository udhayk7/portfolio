import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Wrench, Users, Database, Star } from 'lucide-react';

const skills = {
  'Languages': {
    icon: <Code2 className="w-6 h-6" />,
    description: 'Programming languages I work with',
    items: [
      { name: 'Python', icon: '🐍' },
      { name: 'JavaScript', icon: '🌟' },
      { name: 'TypeScript', icon: '💪' },
      { name: 'C/C++', icon: '⚡' },
      { name: 'Java', icon: '☕' },
      { name: 'Swift', icon: '🎯' },
    ]
  },
  'Technologies & Design': {
    icon: <Wrench className="w-6 h-6" />,
    description: 'Tools, technologies, and design expertise',
    items: [
      { name: 'React', icon: '⚛️' },
      { name: 'Next.js', icon: '🔥' },
      { name: 'TailwindCSS', icon: '🎨' },
      { name: 'Flutter', icon: '📱' },
      { name: 'Docker', icon: '🐳' },
    ]
  },
  'Database': {
    icon: <Database className="w-6 h-6" />,
    description: 'Database technologies I work with',
    items: [
      { name: 'PostgreSQL', icon: '🐘' },
      { name: 'MongoDB', icon: '🍃' },
      { name: 'Supabase', icon: '⚡' },
      { name: 'Redis', icon: '🚀' },
    ]
  },
  'Soft Skills': {
    icon: <Users className="w-6 h-6" />,
    description: 'Professional skills and attributes',
    items: [
      { name: 'Team Leadership', icon: '👥' },
      { name: 'Communication', icon: '💬' },
      { name: 'Problem-Solving', icon: '🧩' },
      { name: 'Adaptability', icon: '🔄' },
    ]
  },
};

function SkillItem({ name, icon, delay }: { 
  name: string; 
  icon: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ 
        scale: 1.05,
        backgroundColor: 'rgba(255, 255, 255, 0.1)'
      }}
      className="glass-effect p-4 rounded-xl flex items-center space-x-3 cursor-pointer transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
    >
      <span className="text-2xl transform transition-transform duration-300 group-hover:scale-110">
        {icon}
      </span>
      <span className="font-medium text-gray-200">{name}</span>
    </motion.div>
  );
}

function SkillCategory({ title, icon, description, items, index }: {
  title: string;
  icon: React.ReactNode;
  description: string;
  items: Array<{ name: string; icon: string }>;
  index: number;
}) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="relative group"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-xy"></div>
      <div className="relative glass-effect rounded-xl p-6 space-y-6">
        <div className="flex items-center space-x-4">
          <div className="p-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-lg text-white transform group-hover:scale-110 transition-transform">
            {icon}
          </div>
          <div>
            <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              {title}
            </h3>
            <p className="text-sm text-gray-400">{description}</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {items.map((skill, skillIndex) => (
            <SkillItem
              key={skill.name}
              {...skill}
              delay={index * 0.2 + skillIndex * 0.1}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-20 relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(124,58,237,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(99,102,241,0.1),transparent_50%)]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16 space-y-4">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block"
            >
              <Star className="w-12 h-12 text-yellow-400 animate-pulse-slow" />
            </motion.div>
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              Skills & Expertise
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              A comprehensive overview of my technical abilities and professional expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {Object.entries(skills).map(([title, { icon, description, items }], index) => (
              <SkillCategory
                key={title}
                title={title}
                icon={icon}
                description={description}
                items={items}
                index={index}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}