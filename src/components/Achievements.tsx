import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Trophy, Award, Medal } from 'lucide-react';

const achievements = [
  {
    category: 'Hackathon Achievements',
    icon: <Trophy className="w-8 h-8 text-yellow-400" />,
    items: [
      {
        title: '1st Prize - Genesis Hackathon',
        description: 'Won 1st place at Providence College of Engineering national-level hackathon',
        date: 'Feb 1-2, 2025',
        icon: '🥇',
        isHighlight: true
      },
      {
        title: '2nd Runners-Up - Hackatly-24',
        description: 'Secured 3rd place at Thalassery Engineering College hackathon',
        date: 'Oct 2024',
        icon: '🥉'
      },
      {
        title: 'IIT Madras Uzhavu Hackathon',
        description: 'Selected among Top 20 Teams during Shaastra 2025',
        date: 'Jan 2025',
        icon: '🎖️'
      },
      {
        title: 'NIT Calicut Hack4Good',
        description: 'Finalist at the national-level hackathon',
        date: 'Dec 28-29, 2024',
        icon: '🎖️'
      },
      {
        title: 'Innovate Hackathon',
        description: 'Finalist at InApp x IEEE Kerala YP hackathon',
        date: 'Jan 18-19, 2025',
        icon: '🎖️'
      }
    ]
  },
  {
    category: 'Competitions & Awards',
    icon: <Award className="w-8 h-8 text-purple-400" />,
    items: [
      {
        title: 'Empowering Youth for Viksit Bharat',
        description: 'Selected as a finalist in the national-level competition focused on innovative solutions for India\'s development',
        date: 'Dec 2024',
        icon: '🏆'
      },
      {
        title: 'RBI90 Quiz Competition',
        description: 'Qualified for state-level finals in RBI\'s 90th anniversary national quiz competition',
        date: '2024',
        icon: '🏆'
      }
    ]
  }
];

function AchievementCard({ achievement, delay }: { 
  achievement: { 
    title: string; 
    description: string; 
    date: string;
    icon: string;
    isHighlight?: boolean;
  }; 
  delay: number 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="group"
    >
      <div className={`relative glass-effect rounded-lg p-6 transition-all duration-300 ${
        achievement.isHighlight 
          ? 'hover:shadow-[0_0_30px_rgba(234,179,8,0.2)]'
          : 'hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]'
      }`}>
        {achievement.isHighlight && (
          <div className="absolute -inset-[1px] bg-gradient-to-r from-yellow-500/20 via-yellow-400/20 to-yellow-500/20 rounded-lg opacity-75 group-hover:opacity-100 transition-all duration-300" />
        )}
        <div className="relative">
          <div className="flex items-start space-x-4">
            <span className={`text-4xl transform transition-transform duration-300 ${
              achievement.isHighlight ? 'group-hover:scale-110 group-hover:rotate-12' : ''
            }`}>
              {achievement.icon}
            </span>
            <div>
              <h3 className={`text-xl font-semibold mb-2 ${
                achievement.isHighlight 
                  ? 'text-yellow-400'
                  : 'text-white'
              }`}>
                {achievement.title}
              </h3>
              <p className="text-gray-300 mb-2">
                {achievement.description}
              </p>
              <p className={`text-sm font-medium ${
                achievement.isHighlight 
                  ? 'text-yellow-400/80'
                  : 'text-indigo-400/80'
              }`}>
                {achievement.date}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function AchievementCategory({ category, items, icon, index }: {
  category: string;
  items: Array<{
    title: string;
    description: string;
    date: string;
    icon: string;
    isHighlight?: boolean;
  }>;
  icon: React.ReactNode;
  index: number;
}) {
  return (
    <div className="mb-12 last:mb-0">
      <div className="flex items-center space-x-3 mb-8">
        <div className="p-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-lg text-white transform hover:scale-110 transition-transform">
          {icon}
        </div>
        <h2 className="text-2xl font-bold text-white">
          {category}
        </h2>
      </div>
      <div className="grid gap-6">
        {items.map((achievement, itemIndex) => (
          <AchievementCard
            key={itemIndex}
            achievement={achievement}
            delay={index * 0.2 + itemIndex * 0.1}
          />
        ))}
      </div>
    </div>
  );
}

export default function Achievements() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="achievements" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center mb-12 space-x-3">
            <Medal className="w-10 h-10 text-yellow-400" />
            <h2 className="text-3xl font-bold text-center text-white">
              Achievements
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            {achievements.map((category, index) => (
              <AchievementCategory
                key={index}
                category={category.category}
                items={category.items}
                icon={category.icon}
                index={index}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}