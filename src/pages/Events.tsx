import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Users, ExternalLink } from 'lucide-react';

const Events = () => {
  const upcomingEvents = [
    {
      title: 'Linear Algebra Workshop',
      date: '2024-03-15',
      time: '2:00 PM - 4:00 PM',
      location: 'Math Building, Room 201',
      description: 'Hands-on workshop covering eigenvalues, eigenvectors, and their applications in machine learning.',
      attendees: 45,
      status: 'upcoming',
      registerLink: '#',
      category: 'Workshop'
    },
    {
      title: 'AI & Matrix Mathematics Seminar',
      date: '2024-03-22',
      time: '6:00 PM - 8:00 PM',
      location: 'Engineering Auditorium',
      description: 'Guest lecture on how matrix operations power modern neural networks and deep learning.',
      attendees: 120,
      status: 'upcoming',
      registerLink: '#',
      category: 'Seminar'
    },
    {
      title: 'ENIGMA\'26 Annual Event',
      date: '2024-04-10',
      time: '9:00 AM - 6:00 PM',
      location: 'University Convention Center',
      description: 'Our flagship annual event featuring competitions, workshops, and industry talks.',
      attendees: 300,
      status: 'featured',
      registerLink: '#',
      category: 'Conference'
    },
  ];

  const pastEvents = [
    {
      title: 'Matrix Operations in Computer Graphics',
      date: '2024-02-20',
      time: '3:00 PM - 5:00 PM',
      location: 'CS Lab 3',
      description: 'Practical session on 3D transformations and rendering using matrix mathematics.',
      attendees: 38,
      status: 'completed',
      category: 'Workshop'
    },
    {
      title: 'Cryptography & Security Applications',
      date: '2024-01-25',
      time: '4:00 PM - 6:00 PM',
      location: 'Lecture Hall A',
      description: 'Exploring how matrices secure our digital communications and data.',
      attendees: 65,
      status: 'completed',
      category: 'Lecture'
    },
  ];

  const EventCard = ({ event, isUpcoming = true }: { event: any; isUpcoming?: boolean }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className={`bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border rounded-2xl p-6 hover:border-green-400/50 transition-all duration-300 group hover:-translate-y-1 ${
        event.status === 'featured' 
          ? 'border-green-400/70 ring-2 ring-green-400/20' 
          : 'border-green-900/30'
      }`}
    >
      <div className="flex justify-between items-start mb-4">
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
          event.status === 'featured' 
            ? 'bg-green-400 text-black' 
            : event.status === 'upcoming'
            ? 'bg-blue-900/50 text-blue-400 border border-blue-400/30'
            : 'bg-gray-700/50 text-gray-400'
        }`}>
          {event.category}
        </span>
        {event.status === 'featured' && (
          <span className="text-xs font-medium text-green-400">FLAGSHIP EVENT</span>
        )}
      </div>

      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-green-400 transition-colors duration-300">
        {event.title}
      </h3>
      
      <div className="space-y-2 mb-4">
        <div className="flex items-center text-gray-300 text-sm">
          <Calendar size={16} className="mr-2 text-green-400" />
          {new Date(event.date).toLocaleDateString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}
        </div>
        <div className="flex items-center text-gray-300 text-sm">
          <Clock size={16} className="mr-2 text-green-400" />
          {event.time}
        </div>
        <div className="flex items-center text-gray-300 text-sm">
          <MapPin size={16} className="mr-2 text-green-400" />
          {event.location}
        </div>
        <div className="flex items-center text-gray-300 text-sm">
          <Users size={16} className="mr-2 text-green-400" />
          {event.attendees} {isUpcoming ? 'registered' : 'attended'}
        </div>
      </div>

      <p className="text-gray-400 mb-6">{event.description}</p>

      {isUpcoming && event.registerLink && (
        <a
          href={event.registerLink}
          className={`inline-flex items-center px-6 py-2 rounded-full font-medium transition-all duration-300 ${
            event.status === 'featured'
              ? 'bg-gradient-to-r from-green-600 to-green-400 text-black hover:shadow-lg hover:shadow-green-400/25'
              : 'border border-green-400 text-green-400 hover:bg-green-400 hover:text-black'
          }`}
        >
          Register Now
          <ExternalLink size={16} className="ml-2" />
        </a>
      )}
    </motion.div>
  );

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
              Club <span className="text-green-400">Events</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Join us for workshops, seminars, and competitions that explore the fascinating world of matrix mathematics.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Upcoming Events</h2>
            <p className="text-xl text-gray-400">Don't miss these exciting opportunities to learn and connect</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {upcomingEvents.map((event, index) => (
              <EventCard key={index} event={event} />
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900/20 to-black/40">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Past Events</h2>
            <p className="text-xl text-gray-400">A look back at our recent successful events</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {pastEvents.map((event, index) => (
              <EventCard key={index} event={event} isUpcoming={false} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Stay <span className="text-green-400">Updated</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Follow our social media channels and join our mailing list to stay informed about upcoming events and activities.
            </p>
            <a
              href="#"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-green-600 to-green-400 text-black font-semibold rounded-full hover:shadow-lg hover:shadow-green-400/25 transition-all duration-300 transform hover:-translate-y-1"
            >
              Join Our Newsletter
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Events;