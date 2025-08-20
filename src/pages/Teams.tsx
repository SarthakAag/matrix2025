import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const Teams = () => {
  const teamMembers = [
    {
      name: 'Alex Johnson',
      role: 'President',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Computer Science major with passion for AI and matrix applications',
      social: { github: '#', linkedin: '#', email: 'alex@matrixclub.com' }
    },
    {
      name: 'Sarah Chen',
      role: 'Vice-President',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Mathematics enthusiast specializing in linear algebra and cryptography',
      social: { github: '#', linkedin: '#', email: 'sarah@matrixclub.com' }
    },
    {
      name: 'Michael Rodriguez',
      role: 'Technical Lead',
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Software engineer with expertise in machine learning frameworks',
      social: { github: '#', linkedin: '#', email: 'michael@matrixclub.com' }
    },
    {
      name: 'Emily Davis',
      role: 'Event Coordinator',
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Organizing workshops and seminars on mathematical applications',
      social: { github: '#', linkedin: '#', email: 'emily@matrixclub.com' }
    },
    {
      name: 'David Kim',
      role: 'Research Head',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'PhD student researching quantum computing and matrix algorithms',
      social: { github: '#', linkedin: '#', email: 'david@matrixclub.com' }
    },
    {
      name: 'Lisa Wang',
      role: 'Designer',
      image: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Creative designer bringing visual appeal to mathematical concepts',
      social: { github: '#', linkedin: '#', email: 'lisa@matrixclub.com' }
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
              Our <span className="text-green-400">Team</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Meet the passionate individuals who make Matrix Club a thriving community of mathematical exploration and innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-green-900/30 rounded-2xl overflow-hidden hover:border-green-400/50 transition-all duration-300 group hover:-translate-y-2"
              >
                <div className="aspect-w-1 aspect-h-1 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                  <p className="text-green-400 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-300 text-sm mb-4">{member.bio}</p>
                  
                  <div className="flex space-x-3">
                    <a
                      href={member.social.github}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={member.social.linkedin}
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a
                      href={`mailto:${member.social.email}`}
                      className="text-gray-400 hover:text-green-400 transition-colors duration-200"
                    >
                      <Mail size={20} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-900/10 to-black/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Join Our <span className="text-green-400">Team</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Are you passionate about mathematics and its applications? We're always looking for 
              enthusiastic individuals to join our growing community.
            </p>
            <a
              href="#"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-green-600 to-green-400 text-black font-semibold rounded-full hover:shadow-lg hover:shadow-green-400/25 transition-all duration-300 transform hover:-translate-y-1"
            >
              Apply Now
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Teams;