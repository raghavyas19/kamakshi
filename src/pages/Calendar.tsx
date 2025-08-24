import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar as CalendarIcon, MapPin, Clock, Users, Search, Filter, ChevronLeft, ChevronRight } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import Card from '../components/Card';

const Calendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [viewMode, setViewMode] = useState<'month' | 'list'>('list');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { key: 'all', label: 'All Events', color: 'gray' },
    { key: 'workshop', label: 'Workshops', color: 'purple' },
    { key: 'seminar', label: 'Seminars', color: 'blue' },
    { key: 'campaign', label: 'Campaigns', color: 'pink' },
    { key: 'social', label: 'Social Events', color: 'green' },
    { key: 'meeting', label: 'Meetings', color: 'orange' }
  ];

  const events = [
    {
      id: 1,
      title: 'Women in Leadership: Panel Discussion',
      description: 'Join industry leaders as they share insights on breaking barriers and achieving leadership roles in various sectors.',
      date: '2024-12-15',
      time: '2:00 PM - 4:00 PM',
      location: 'Main Auditorium, Block A',
      category: 'seminar',
      attendees: 120,
      maxAttendees: 200,
      status: 'upcoming',
      organizer: 'Sarah Johnson',
      tags: ['leadership', 'career', 'panel'],
      registrationLink: '#'
    },
    {
      id: 2,
      title: 'Digital Safety and Privacy Workshop',
      description: 'Learn essential skills to protect yourself online, including privacy settings, safe browsing, and handling cyberbullying.',
      date: '2024-12-20',
      time: '10:00 AM - 12:00 PM',
      location: 'Computer Lab, Block B',
      category: 'workshop',
      attendees: 45,
      maxAttendees: 50,
      status: 'upcoming',
      organizer: 'Tech Team',
      tags: ['safety', 'digital', 'privacy'],
      registrationLink: '#'
    },
    {
      id: 3,
      title: 'Legal Rights Awareness Campaign',
      description: 'Campus-wide awareness drive about fundamental legal rights and available legal aid services.',
      date: '2024-12-22',
      time: '9:00 AM - 5:00 PM',
      location: 'Campus Grounds',
      category: 'campaign',
      attendees: 0,
      maxAttendees: 500,
      status: 'upcoming',
      organizer: 'Legal Aid Team',
      tags: ['rights', 'legal', 'awareness'],
      registrationLink: '#'
    },
    {
      id: 4,
      title: 'New Year Celebration & Networking',
      description: 'Celebrate achievements of the past year and network with fellow members and supporters.',
      date: '2024-12-31',
      time: '6:00 PM - 9:00 PM',
      location: 'Student Center Hall',
      category: 'social',
      attendees: 80,
      maxAttendees: 150,
      status: 'upcoming',
      organizer: 'Event Committee',
      tags: ['celebration', 'networking', 'social'],
      registrationLink: '#'
    },
    {
      id: 5,
      title: 'Monthly Core Team Meeting',
      description: 'Regular meeting for core team members to discuss ongoing projects and plan upcoming initiatives.',
      date: '2024-12-28',
      time: '3:00 PM - 5:00 PM',
      location: 'Conference Room, Admin Block',
      category: 'meeting',
      attendees: 15,
      maxAttendees: 20,
      status: 'upcoming',
      organizer: 'Core Team',
      tags: ['meeting', 'planning', 'internal'],
      registrationLink: '#'
    },
    {
      id: 6,
      title: 'Gender Equality in Education Seminar',
      description: 'Exploring challenges and solutions for achieving gender equality in educational institutions.',
      date: '2024-11-25',
      time: '1:00 PM - 4:00 PM',
      location: 'Lecture Hall 1',
      category: 'seminar',
      attendees: 95,
      maxAttendees: 100,
      status: 'completed',
      organizer: 'Education Committee',
      tags: ['education', 'equality', 'seminar'],
      registrationLink: '#'
    },
    {
      id: 7,
      title: 'Self-Defense Workshop',
      description: 'Basic self-defense techniques and personal safety awareness for all students.',
      date: '2024-11-20',
      time: '10:00 AM - 1:00 PM',
      location: 'Sports Complex',
      category: 'workshop',
      attendees: 60,
      maxAttendees: 60,
      status: 'completed',
      organizer: 'Safety Committee',
      tags: ['safety', 'self-defense', 'practical'],
      registrationLink: '#'
    },
    {
      id: 8,
      title: 'Mental Health Awareness Campaign',
      description: 'Week-long campaign focusing on mental health resources and destigmatizing mental health discussions.',
      date: '2024-11-15',
      time: 'All Day',
      location: 'Various Campus Locations',
      category: 'campaign',
      attendees: 300,
      maxAttendees: 500,
      status: 'completed',
      organizer: 'Mental Health Team',
      tags: ['mental-health', 'awareness', 'campus-wide'],
      registrationLink: '#'
    }
  ];

  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const upcomingEvents = filteredEvents.filter(event => event.status === 'upcoming');
  const pastEvents = filteredEvents.filter(event => event.status === 'completed');

  const getCategoryColor = (category: string) => {
    const cat = categories.find(c => c.key === category);
    return cat?.color || 'gray';
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'upcoming': return 'text-green-600 bg-green-100 dark:text-green-400 dark:bg-green-900';
      case 'completed': return 'text-gray-600 bg-gray-100 dark:text-gray-400 dark:bg-gray-800';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div>
      <PageHeader
        title="Event Calendar"
        subtitle="Stay updated with our upcoming events, workshops, and community gatherings"
        gradient="from-blue-600 via-purple-600 to-pink-600"
      />

      {/* Controls */}
      <div className="py-8 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search events, topics, or tags..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="lg:w-64">
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-800 dark:text-white appearance-none"
                >
                  {categories.map(category => (
                    <option key={category.key} value={category.key}>
                      {category.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* View Toggle */}
            <div className="flex bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
              <button
                onClick={() => setViewMode('list')}
                className={`px-4 py-2 rounded-md transition-colors ${
                  viewMode === 'list'
                    ? 'bg-white dark:bg-gray-700 text-purple-600 dark:text-purple-400 shadow'
                    : 'text-gray-600 dark:text-gray-300'
                }`}
              >
                List View
              </button>
              <button
                onClick={() => setViewMode('month')}
                className={`px-4 py-2 rounded-md transition-colors ${
                  viewMode === 'month'
                    ? 'bg-white dark:bg-gray-700 text-purple-600 dark:text-purple-400 shadow'
                    : 'text-gray-600 dark:text-gray-300'
                }`}
              >
                Month View
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Upcoming Events
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              {upcomingEvents.length} {upcomingEvents.length === 1 ? 'event' : 'events'} scheduled
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium bg-${getCategoryColor(event.category)}-100 text-${getCategoryColor(event.category)}-700 dark:bg-${getCategoryColor(event.category)}-900 dark:text-${getCategoryColor(event.category)}-300`}>
                        {categories.find(cat => cat.key === event.category)?.label}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(event.status)}`}>
                        {event.status === 'upcoming' ? 'Upcoming' : 'Completed'}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      {event.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                      {event.description}
                    </p>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-gray-600 dark:text-gray-300">
                        <CalendarIcon size={16} className="mr-2 text-purple-600" />
                        <span className="font-medium">
                          {new Date(event.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </span>
                      </div>
                      <div className="flex items-center text-gray-600 dark:text-gray-300">
                        <Clock size={16} className="mr-2 text-purple-600" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center text-gray-600 dark:text-gray-300">
                        <MapPin size={16} className="mr-2 text-purple-600" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center text-gray-600 dark:text-gray-300">
                        <Users size={16} className="mr-2 text-purple-600" />
                        <span>{event.attendees} / {event.maxAttendees} registered</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        Organized by {event.organizer}
                      </div>
                      {event.status === 'upcoming' && (
                        <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                          Register Now
                        </button>
                      )}
                    </div>

                    {/* Progress bar for registrations */}
                    <div className="mt-4">
                      <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-1">
                        <span>Registration Progress</span>
                        <span>{Math.round((event.attendees / event.maxAttendees) * 100)}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-purple-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${(event.attendees / event.maxAttendees) * 100}%` }}
                        ></div>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {event.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 px-2 py-1 rounded text-xs"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {upcomingEvents.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-12"
            >
              <CalendarIcon size={64} className="text-gray-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">No upcoming events found</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Check back later for new events or adjust your search filters.
              </p>
            </motion.div>
          )}
        </div>
      </div>

      {/* Past Events */}
      {pastEvents.length > 0 && (
        <div className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Past Events
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Recent events and their success stories
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pastEvents.slice(0, 6).map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full opacity-75 hover:opacity-100 transition-opacity">
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium bg-${getCategoryColor(event.category)}-100 text-${getCategoryColor(event.category)}-700 dark:bg-${getCategoryColor(event.category)}-900 dark:text-${getCategoryColor(event.category)}-300`}>
                          {categories.find(cat => cat.key === event.category)?.label}
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(event.status)}`}>
                          Completed
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                        {event.title}
                      </h3>

                      <div className="flex items-center text-gray-600 dark:text-gray-300 text-sm mb-3">
                        <CalendarIcon size={14} className="mr-1" />
                        <span>
                          {new Date(event.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric'
                          })}
                        </span>
                      </div>

                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500 dark:text-gray-400">
                          {event.attendees} attendees
                        </span>
                        <button className="text-purple-600 dark:text-purple-400 hover:underline">
                          View Details
                        </button>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Stats */}
      <div className="py-16 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Event Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="text-3xl font-bold mb-2">50+</div>
                <div className="text-lg opacity-90">Events Organized</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">2000+</div>
                <div className="text-lg opacity-90">Total Attendees</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">25</div>
                <div className="text-lg opacity-90">Workshop Sessions</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">95%</div>
                <div className="text-lg opacity-90">Satisfaction Rate</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Never Miss an Event
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Subscribe to our newsletter and get notified about upcoming events, workshops, and important updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
              />
              <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;