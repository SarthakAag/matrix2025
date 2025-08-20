import React from 'react';
import { Instagram, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const socialLinks = [
    {
      name: 'Instagram',
      icon: Instagram,
      url: '#',
      color: 'hover:text-pink-400',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: '#',
      color: 'hover:text-blue-400',
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:contact@matrixclub.com',
      color: 'hover:text-green-400',
    },
  ];

  return (
    <footer className="relative z-10 bg-gradient-to-t from-black via-gray-900/50 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              <span className="text-green-400">Matrix</span> Club
            </h3>
            <p className="text-gray-400 mb-8 max-w-md mx-auto">
              Exploring the mathematical foundations of modern technology through matrix theory and applications.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center space-x-6 mb-8"
          >
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                className={`text-gray-400 ${link.color} transition-colors duration-200 p-2 rounded-full hover:bg-white/10`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <link.icon size={24} />
              </a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <a
              href="#"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-green-600 to-green-400 text-black font-semibold rounded-full hover:shadow-lg hover:shadow-green-400/25 transition-all duration-300 transform hover:-translate-y-1"
            >
              Join Us
              <ExternalLink size={18} className="ml-2" />
            </a>
          </motion.div>

          <div className="mt-12 pt-8 border-t border-gray-800 text-gray-500">
            <p>&copy; 2024 Matrix Club. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;