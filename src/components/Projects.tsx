import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  demoLink?: string;
  features: string[];
  tech: string[];
}

const projects: Project[] = [
  {
    title: 'NutriGuard - Personalized Nutrition App',
    description: 'AI-powered diet and nutrition recommendation system that analyzes user health data to suggest personalized meal plans.',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80',
    features: [
      'AI-powered diet recommendations',
      'Personalized meal planning',
      'Health data analysis',
      'Nutrition tracking',
    ],
    tech: ['Python', 'TensorFlow', 'React Native', 'Node.js', 'MongoDB'],
  },
  {
    title: 'Healthcare Web App',
    description: 'A comprehensive healthcare platform featuring AI-powered symptom analysis, hospital finder, and appointment booking system with smartwatch integration capabilities.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80',
    features: [
      'AI-powered symptom analysis',
      'Hospital finder and appointment booking',
      'Secure medical history storage',
      'Smartwatch integration (planned)',
    ],
    tech: ['React', 'Node.js', 'MongoDB', 'TensorFlow', 'WebSocket'],
  },
  {
    title: 'MediBharat - Health Record Management',
    description: 'Secure platform for uploading, managing, and sharing medical reports with AI-driven summaries to highlight key findings.',
    image: 'https://images.unsplash.com/photo-1587370560942-ad2a04eabb6d?auto=format&fit=crop&q=80',
    features: [
      'Secure medical report management',
      'AI-driven report summaries',
      'Privacy-focused sharing',
      'Hospital integration',
    ],
    tech: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Docker'],
  },
  {
    title: 'AquaSentinel - Smart Water Monitoring',
    description: 'IoT-based system for real-time monitoring of water quality, level, pH, and purity with mobile app integration.',
    image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&q=80',
    features: [
      'Real-time water quality monitoring',
      'IoT sensor integration',
      'Mobile app connectivity',
      'Solar power compatibility',
    ],
    tech: ['IoT Sensors', 'React Native', 'Node.js', 'MongoDB', 'MQTT'],
  },
  {
    title: 'Smart Agricultural Monitoring System',
    description: 'Advanced IoT and AI-driven agricultural monitoring system developed for IIT Madras Hackathon, helping farmers optimize crop management.',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80',
    features: [
      'Soil health monitoring',
      'Real-time moisture tracking',
      'AI-powered insights',
      'Mobile app integration',
    ],
    tech: ['Python', 'TensorFlow', 'IoT Sensors', 'React Native', 'Node.js'],
  },
  {
    title: 'Full-Stack E-commerce Platform',
    description: 'Built during Productathon, a platform connecting farmers and artisans with customers, featuring location-based product discovery.',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80',
    features: [
      'Location-based product discovery',
      'Farmer-artisan marketplace',
      'Real-time inventory management',
      'Secure payment integration',
    ],
    tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Redux'],
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 transform hover:scale-[1.02]"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 mb-2">
          {project.title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {project.description}
        </p>

        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
            Key Features:
          </h4>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
            {project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
            Technologies:
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 text-sm bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-gray-700 dark:to-gray-600 rounded-full text-gray-700 dark:text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {project.demoLink && (
          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-lg transition-colors"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            View Demo
          </a>
        )}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
            Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}