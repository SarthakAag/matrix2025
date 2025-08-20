import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Calculator, Cpu, Shield } from 'lucide-react';

const Home = () => {
  const applications = [
    {
      icon: Cpu,
      title: 'Artificial Intelligence',
      description: 'Neural networks and machine learning algorithms',
    },
    {
      icon: Calculator,
      title: 'Computer Graphics',
      description: '3D transformations and rendering systems',
    },
    {
      icon: Shield,
      title: 'Cryptography',
      description: 'Secure communication and data protection',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-6">
              <span className="text-white">Matrix</span>
              <br />
              <span className="text-green-400">Club</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl sm:text-2xl text-gray-300 mb-12 leading-relaxed"
          >
            Unlocking the mathematical foundations of
            <br />
            <span className="text-green-400 font-semibold">modern technology</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <a
              href="/about"
              className="px-8 py-3 bg-gradient-to-r from-green-600 to-green-400 text-black font-semibold rounded-full hover:shadow-lg hover:shadow-green-400/25 transition-all duration-300 transform hover:-translate-y-1"
            >
              Discover More
            </a>
            <a
              href="/events"
              className="px-8 py-3 border-2 border-green-400 text-green-400 font-semibold rounded-full hover:bg-green-400 hover:text-black transition-all duration-300"
            >
              Upcoming Events
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="animate-bounce"
          >
            <ChevronDown size={32} className="text-green-400 mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* Applications Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Where <span className="text-green-400">Mathematics</span> Meets Reality
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Explore how matrix theory powers the technologies that shape our digital world
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {applications.map((app, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-green-900/30 rounded-2xl p-8 hover:border-green-400/50 transition-all duration-300 group hover:-translate-y-2"
              >
                <div className="text-green-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <app.icon size={48} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{app.title}</h3>
                <p className="text-gray-400">{app.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;