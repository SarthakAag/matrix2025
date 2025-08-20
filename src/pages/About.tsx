import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, BookOpen, Users } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Mission',
      description: 'To provide a platform for students to explore and apply matrix mathematics in real-world scenarios, fostering critical thinking and problem-solving skills.',
    },
    {
      icon: Eye,
      title: 'Vision',
      description: 'To become the leading student organization that bridges theoretical mathematics with practical applications in technology and innovation.',
    },
    {
      icon: BookOpen,
      title: 'Learning',
      description: 'We believe in learning through exploration, collaboration, and hands-on application of mathematical concepts to solve contemporary challenges.',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building a diverse community of mathematicians, engineers, and innovators who share a passion for matrix theory and its applications.',
    },
  ];

  const applications = [
    'Machine Learning & Neural Networks',
    'Computer Graphics & 3D Rendering',
    'Cryptography & Security Systems',
    'Image & Signal Processing',
    'Quantum Computing',
    'Data Science & Analytics',
    'Robotics & Control Systems',
    'Game Development',
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
              About <span className="text-green-400">Matrix Club</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              We are a community of passionate individuals dedicated to exploring the fascinating world of 
              matrix mathematics and its profound impact on modern technology and innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our Foundation</h2>
            <p className="text-xl text-gray-400">The principles that guide everything we do</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-green-900/30 rounded-2xl p-8 hover:border-green-400/50 transition-all duration-300"
              >
                <div className="text-green-400 mb-4">
                  <value.icon size={40} />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-900/10 to-black/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Real-World <span className="text-green-400">Applications</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Matrix mathematics isn't just theory – it's the backbone of technologies that power our modern world. 
              Here's how matrix theory connects to cutting-edge applications:
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {applications.map((app, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800/50 to-black/30 border border-green-900/30 rounded-lg p-4 text-center hover:border-green-400/50 transition-all duration-300"
              >
                <span className="text-white font-medium">{app}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-gray-300 text-lg max-w-4xl mx-auto">
              From the algorithms that power AI chatbots to the graphics engines that render your favorite games, 
              from the encryption that protects your data to the systems that enable autonomous vehicles – 
              matrix mathematics is everywhere, silently powering the digital revolution.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;