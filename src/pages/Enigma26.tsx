import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Trophy, Users, Star, ExternalLink } from 'lucide-react';

const Enigma26 = () => {
  const timeline = [
    {
      time: '9:00 AM',
      title: 'Registration & Welcome',
      description: 'Check-in and welcome breakfast',
    },
    {
      time: '10:00 AM',
      title: 'Opening Ceremony',
      description: 'Keynote speech and event overview',
    },
    {
      time: '11:00 AM',
      title: 'Matrix Challenge Round 1',
      description: 'Individual problem-solving competition',
    },
    {
      time: '12:30 PM',
      title: 'Lunch Break',
      description: 'Networking and refreshments',
    },
    {
      time: '2:00 PM',
      title: 'Team Formation & Round 2',
      description: 'Collaborative matrix applications challenge',
    },
    {
      time: '4:00 PM',
      title: 'Industry Panel',
      description: 'Matrix mathematics in the real world',
    },
    {
      time: '5:30 PM',
      title: 'Awards Ceremony',
      description: 'Recognition and prizes',
    },
  ];

  const prizes = [
    {
      place: '1st Place',
      prize: '$1,000 Cash Prize + Internship Opportunities',
      icon: Trophy,
      color: 'text-yellow-400',
    },
    {
      place: '2nd Place',
      prize: '$500 Cash Prize + Tech Swag Package',
      icon: Star,
      color: 'text-gray-300',
    },
    {
      place: '3rd Place',
      prize: '$250 Cash Prize + Matrix Club Merchandise',
      icon: Star,
      color: 'text-amber-600',
    },
  ];

  const speakers = [
    {
      name: 'Dr. Maria Rodriguez',
      title: 'Senior Data Scientist, Google',
      topic: 'Matrix Operations in Large-Scale ML Systems',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Prof. James Chen',
      title: 'MIT Computer Science Department',
      topic: 'Quantum Computing and Matrix Theory',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Sarah Kim',
      title: 'Lead Graphics Engineer, NVIDIA',
      topic: '3D Transformations in Game Engines',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-block p-8 bg-gradient-to-br from-green-900/30 to-black/50 rounded-3xl border border-green-400/30 mb-8">
              <h1 className="text-6xl sm:text-7xl font-bold mb-4">
                <span className="text-green-400">ENIGMA</span>
                <span className="text-white">'26</span>
              </h1>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Annual Matrix Mathematics Challenge
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join us for our flagship event featuring competitive problem-solving, industry insights, 
              and networking opportunities in the world of matrix mathematics and its applications.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid md:grid-cols-3 gap-6 mb-12"
          >
            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 border border-green-900/30 rounded-xl p-6">
              <Calendar className="text-green-400 mb-3 mx-auto" size={32} />
              <p className="text-white font-semibold">April 10, 2024</p>
              <p className="text-gray-400">Wednesday</p>
            </div>
            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 border border-green-900/30 rounded-xl p-6">
              <Clock className="text-green-400 mb-3 mx-auto" size={32} />
              <p className="text-white font-semibold">9:00 AM - 6:00 PM</p>
              <p className="text-gray-400">Full Day Event</p>
            </div>
            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 border border-green-900/30 rounded-xl p-6">
              <MapPin className="text-green-400 mb-3 mx-auto" size={32} />
              <p className="text-white font-semibold">Convention Center</p>
              <p className="text-gray-400">University Campus</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-green-600 to-green-400 text-black font-semibold rounded-full hover:shadow-lg hover:shadow-green-400/25 transition-all duration-300 transform hover:-translate-y-1"
            >
              Register Now
              <ExternalLink size={18} className="ml-2" />
            </a>
            <a
              href="#timeline"
              className="px-8 py-3 border-2 border-green-400 text-green-400 font-semibold rounded-full hover:bg-green-400 hover:text-black transition-all duration-300"
            >
              View Schedule
            </a>
          </motion.div>
        </div>
      </section>

      {/* Event Highlights */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-900/10 to-black/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Event Highlights</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Experience the perfect blend of competition, learning, and networking
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-gradient-to-br from-gray-900/50 to-black/50 border border-green-900/30 rounded-2xl p-8 hover:border-green-400/50 transition-all duration-300">
                <Users className="text-green-400 mx-auto mb-4" size={48} />
                <h3 className="text-xl font-semibold text-white mb-3">300+ Participants</h3>
                <p className="text-gray-400">Students from universities across the region</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-gradient-to-br from-gray-900/50 to-black/50 border border-green-900/30 rounded-2xl p-8 hover:border-green-400/50 transition-all duration-300">
                <Trophy className="text-green-400 mx-auto mb-4" size={48} />
                <h3 className="text-xl font-semibold text-white mb-3">$1,750 Prize Pool</h3>
                <p className="text-gray-400">Cash prizes and internship opportunities</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-gradient-to-br from-gray-900/50 to-black/50 border border-green-900/30 rounded-2xl p-8 hover:border-green-400/50 transition-all duration-300">
                <Star className="text-green-400 mx-auto mb-4" size={48} />
                <h3 className="text-xl font-semibold text-white mb-3">Industry Experts</h3>
                <p className="text-gray-400">Keynote speakers from top tech companies</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section id="timeline" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Event Timeline</h2>
            <p className="text-xl text-gray-400">A full day of challenges, learning, and networking</p>
          </motion.div>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-6"
              >
                <div className="flex-shrink-0 w-24 text-right">
                  <span className="text-green-400 font-semibold">{item.time}</span>
                </div>
                <div className="flex-shrink-0 w-4 h-4 bg-green-400 rounded-full"></div>
                <div className="flex-1 bg-gradient-to-br from-gray-900/50 to-black/50 border border-green-900/30 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Speakers */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900/20 to-black/40">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Featured Speakers</h2>
            <p className="text-xl text-gray-400">Learn from industry leaders and academic experts</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {speakers.map((speaker, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-900/50 to-black/50 border border-green-900/30 rounded-2xl overflow-hidden hover:border-green-400/50 transition-all duration-300"
              >
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">{speaker.name}</h3>
                  <p className="text-green-400 text-sm mb-3">{speaker.title}</p>
                  <p className="text-gray-400 text-sm">{speaker.topic}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Prizes */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Prizes & Recognition</h2>
            <p className="text-xl text-gray-400">Compete for exciting prizes and career opportunities</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {prizes.map((prize, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-gradient-to-br from-gray-900/50 to-black/50 border border-green-900/30 rounded-2xl p-8 hover:border-green-400/50 transition-all duration-300">
                  <prize.icon className={`${prize.color} mx-auto mb-4`} size={48} />
                  <h3 className="text-xl font-semibold text-white mb-3">{prize.place}</h3>
                  <p className="text-gray-400">{prize.prize}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Enigma26;