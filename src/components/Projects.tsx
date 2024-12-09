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
    title: 'Healthcare App',
    description: 'AI-powered healthcare solution designed to improve access to medical services, including features like symptom checking, hospital booking, and telemedicine.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80',
    demoLink: 'https://kerala-healthcare-fipcxqpfv-udhays-projects-6787150c.vercel.app/',
    features: [
      'Symptom checker with AI-powered analysis',
      'Hospital search and appointment booking',
      'Telemedicine for remote consultations',
      'Regular health check-ups for rural areas',
    ],
    tech: ['React', 'Material UI', 'FastAPI', 'PostgreSQL', 'TensorFlow'],
  },
  {
    title: 'Smart Fluid Container',
    description: 'IoT-enabled fluid container designed for water tanks with real-time monitoring and quality analysis capabilities.',
    image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&q=80',
    features: [
      'Real-time water level monitoring',
      'Water quality analysis',
      'Germ detection using IoT sensors',
      'Mobile app integration',
    ],
    tech: ['IoT Sensors', 'Python', 'React Native', 'AWS IoT Core'],
  },
  {
    title: 'Twitter Sentiment Analysis Dashboard',
    description: 'Interactive dashboard for analyzing public sentiment towards tech companies using real-time social media data.',
    image: 'https://images.unsplash.com/photo-1611605698335-8b1569810432?auto=format&fit=crop&q=80',
    demoLink: 'https://lnkd.in/gZVcAjgh',
    features: [
      'Real-time sentiment distribution',
      'Entity-wise sentiment analysis',
      'Interactive word clouds',
      'Dynamic data visualization',
    ],
    tech: ['Python', 'Streamlit', 'NLTK', 'Plotly'],
  },
  {
    title: 'Bank Marketing Prediction',
    description: 'Data-driven solution built to predict customer subscription behavior for term deposits using bank marketing campaign data.',
    image: 'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&q=80',
    demoLink: 'https://lnkd.in/gjr5rVxM',
    features: [
      'Predictive modeling of customer behavior',
      'Comprehensive data preprocessing',
      'Feature importance analysis',
      'Model performance visualization',
    ],
    tech: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib', 'Seaborn'],
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
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
                className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300"
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
            className="inline-flex items-center px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors"
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
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}