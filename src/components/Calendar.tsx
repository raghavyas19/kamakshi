import React, { useState } from 'react';
import { Calendar as CalendarIcon, Clock, MapPin, Users, Filter, ChevronLeft, ChevronRight, Search } from 'lucide-react';

const Calendar: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [viewMode, setViewMode] = useState<'month' | 'list'>('list');
  const [filterType, setFilterType] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const eventTypes = [
    { id: 'all', label: 'All Events', color: 'gray' },
    { id: 'workshop', label: 'Workshops', color: 'purple' },
    { id: 'awareness', label: 'Awareness', color: 'pink' },
    { id: 'social', label: 'Social', color: 'blue' },
    { id: 'meeting', label: 'Meetings', color: 'green' }
  ];

  const events = [
    {
      id: 1,
      title: 'Women in Leadership Summit',
      description: 'Join us for an inspiring summit featuring successful women leaders sharing their journeys and insights.',
      date: '2024-04-15',
      time: '10:00 AM - 4:00 PM',
      location: 'Main Auditorium',
      type: 'workshop',
      attendees: 150,
      status: 'upcoming',
      speaker: 'Dr. Priya Sharma, CEO TechCorp',
      registrationLink: '#',
      image: 'https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 2,
      title: 'Know Your Rights Workshop',
      description: 'Educational session covering workplace rights, legal protections, and resources for support.',
      date: '2024-04-20',
      time: '2:00 PM - 5:00 PM',
      location: 'Conference Room A',
      type: 'awareness',
      attendees: 80,
      status: 'upcoming',
      speaker: 'Advocate Sneha Reddy',
      registrationLink: '#',
      image: 'https://images.pexels.com/photos/3184302/pexels-photo-3184302.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 3,
      title: 'Mental Health Awareness Week Opening',
      description: 'Kick-off event for our mental health awareness week with expert talks and interactive sessions.',
      date: '2024-04-25',
      time: '11:00 AM - 1:00 PM',
      location: 'Student Center',
      type: 'awareness',
      attendees: 120,
      status: 'upcoming',
      speaker: 'Dr. Arjun Mehta, Psychologist',
      registrationLink: '#',
      image: 'https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 4,
      title: 'Monthly Team Meeting',
      description: 'Regular monthly meeting to discuss ongoing projects, plan upcoming events, and team coordination.',
      date: '2024-04-30',
      time: '7:00 PM - 8:30 PM',
      location: 'Society Room',
      type: 'meeting',
      attendees: 25,
      status: 'upcoming',
      speaker: 'Core Team',
      registrationLink: '#',
      image: 'https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 5,
      title: 'International Women\'s Day Celebration',
      description: 'Grand celebration with cultural performances, inspiring talks, and recognition ceremonies.',
      date: '2024-03-08',
      time: '4:00 PM - 8:00 PM',
      location: 'Main Ground',
      type: 'social',
      attendees: 300,
      status: 'completed',
      speaker: 'Various Speakers',
      registrationLink: '#',
      image: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 6,
      title: 'Skill Development Bootcamp',
      description: 'Intensive training program focusing on professional skills, communication, and career development.',
      date: '2024-03-15',
      time: '9:00 AM - 6:00 PM',
      location: 'Training Center',
      type: 'workshop',
      attendees: 60,
      status: 'completed',
      speaker: 'Industry Experts',
      registrationLink: '#',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const filteredEvents = events.filter(event => {
    const matchesFilter = filterType === 'all' || event.type === filterType;
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const upcomingEvents = filteredEvents.filter(event => event.status === 'upcoming');
  const pastEvents = filteredEvents.filter(event => event.status === 'completed');

  const getEventTypeColor = (type: string) => {
    const eventType = eventTypes.find(t => t.id === type);
    switch (eventType?.color) {
      case 'purple': return 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300';
      case 'pink': return 'bg-pink-100 text-pink-700 dark:bg-pink-900 dark:text-pink-300';
      case 'blue': return 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300';
      case 'green': return 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300';
      default: return 'bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  return (
    <section id="calendar" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
            Event <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Calendar</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Stay updated with our upcoming events, workshops, and activities. Join us in creating meaningful 
            change through education, awareness, and community building.
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col lg:flex-row gap-6 mb-12">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search events..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-200"
            />
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2 lg:gap-3">
            {eventTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setFilterType(type.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  filterType === type.id
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {type.label}
              </button>
            ))}
          </div>

          {/* View Mode Toggle */}
          <div className="flex bg-gray-100 dark:bg-gray-800 rounded-full p-1">
            <button
              onClick={() => setViewMode('list')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                viewMode === 'list'
                  ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-md'
                  : 'text-gray-600 dark:text-gray-400'
              }`}
            >
              List View
            </button>
            <button
              onClick={() => setViewMode('month')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                viewMode === 'month'
                  ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-md'
                  : 'text-gray-600 dark:text-gray-400'
              }`}
            >
              Month View
            </button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 rounded-2xl text-center">
            <CalendarIcon className="w-8 h-8 mx-auto mb-2" />
            <div className="text-2xl font-bold">{upcomingEvents.length}</div>
            <div className="text-sm opacity-90">Upcoming Events</div>
          </div>
          <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-6 rounded-2xl text-center">
            <Users className="w-8 h-8 mx-auto mb-2" />
            <div className="text-2xl font-bold">{events.reduce((sum, event) => sum + event.attendees, 0)}</div>
            <div className="text-sm opacity-90">Total Participants</div>
          </div>
          <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white p-6 rounded-2xl text-center">
            <Clock className="w-8 h-8 mx-auto mb-2" />
            <div className="text-2xl font-bold">{pastEvents.length}</div>
            <div className="text-sm opacity-90">Events Completed</div>
          </div>
          <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-6 rounded-2xl text-center">
            <MapPin className="w-8 h-8 mx-auto mb-2" />
            <div className="text-2xl font-bold">5+</div>
            <div className="text-sm opacity-90">Event Venues</div>
          </div>
        </div>

        {viewMode === 'list' && (
          <div className="space-y-12">
            {/* Upcoming Events */}
            {upcomingEvents.length > 0 && (
              <div>
                <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 flex items-center">
                  <Clock className="w-8 h-8 mr-3 text-purple-600" />
                  Upcoming Events
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {upcomingEvents.map((event) => (
                    <div
                      key={event.id}
                      className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group transform hover:scale-105"
                    >
                      <div className="relative h-48">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute top-4 left-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getEventTypeColor(event.type)}`}>
                            {eventTypes.find(t => t.id === event.type)?.label}
                          </span>
                        </div>
                        <div className="absolute top-4 right-4 bg-white dark:bg-gray-800 rounded-xl p-3 text-center shadow-lg">
                          <div className="text-sm font-medium text-gray-600 dark:text-gray-400">
                            {new Date(event.date).toLocaleDateString('en', { month: 'short' })}
                          </div>
                          <div className="text-xl font-bold text-purple-600">
                            {new Date(event.date).getDate()}
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-200">
                          {event.title}
                        </h4>
                        
                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                          {event.description}
                        </p>

                        <div className="space-y-2 mb-6">
                          <div className="flex items-center text-gray-600 dark:text-gray-300 text-sm">
                            <Clock className="w-4 h-4 mr-2 text-purple-600" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center text-gray-600 dark:text-gray-300 text-sm">
                            <MapPin className="w-4 h-4 mr-2 text-purple-600" />
                            <span>{event.location}</span>
                          </div>
                          <div className="flex items-center text-gray-600 dark:text-gray-300 text-sm">
                            <Users className="w-4 h-4 mr-2 text-purple-600" />
                            <span>{event.attendees} expected participants</span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                          <div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">Speaker</div>
                            <div className="text-sm font-medium text-gray-800 dark:text-white">{event.speaker}</div>
                          </div>
                          <button className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-full hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-200 shadow-md">
                            Register Now
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Past Events */}
            {pastEvents.length > 0 && (
              <div>
                <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 flex items-center">
                  <CalendarIcon className="w-8 h-8 mr-3 text-gray-500" />
                  Past Events
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {pastEvents.map((event) => (
                    <div
                      key={event.id}
                      className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group opacity-90"
                    >
                      <div className="relative h-40">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="px-2 py-1 bg-gray-800/80 text-white text-xs rounded-full">
                            Completed
                          </span>
                        </div>
                      </div>
                      
                      <div className="p-5">
                        <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
                          {event.title}
                        </h4>
                        
                        <div className="space-y-1 mb-4">
                          <div className="flex items-center text-gray-500 dark:text-gray-400 text-xs">
                            <CalendarIcon className="w-3 h-3 mr-2" />
                            <span>{new Date(event.date).toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center text-gray-500 dark:text-gray-400 text-xs">
                            <Users className="w-3 h-3 mr-2" />
                            <span>{event.attendees} participants</span>
                          </div>
                        </div>

                        <button className="text-sm text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium transition-colors duration-200">
                          View Highlights →
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {viewMode === 'month' && (
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                {selectedDate.toLocaleDateString('en', { month: 'long', year: 'numeric' })}
              </h3>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1))}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                </button>
                <button
                  onClick={() => setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1))}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                >
                  <ChevronRight className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                </button>
              </div>
            </div>
            
            <div className="text-center py-16">
              <CalendarIcon className="w-16 h-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
              <p className="text-gray-500 dark:text-gray-400">
                Monthly calendar view coming soon! For now, explore our events in the list view above.
              </p>
            </div>
          </div>
        )}

        {/* Newsletter Signup */}
        <div className="mt-20 bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-12 text-center text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">Never Miss an Event</h3>
          <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
            Subscribe to our calendar updates and get notified about upcoming events, workshops, and special programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-6 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-4 focus:ring-white/30"
            />
            <button className="px-8 py-3 bg-white text-purple-600 font-semibold rounded-full hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calendar;