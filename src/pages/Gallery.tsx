import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, Calendar, MapPin } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import Card from '../components/Card';

const Gallery: React.FC = () => {
  const [selectedMedia, setSelectedMedia] = useState<any>(null);
  const [filter, setFilter] = useState<string>('all');

  const mediaItems = [
    {
      id: 1,
      type: 'image',
      src: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
      thumbnail: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=400',
      title: 'Women\'s Rights Workshop',
      description: 'Interactive session on workplace equality and legal rights with over 100 participants.',
      date: '2024-11-15',
      location: 'Main Auditorium',
      category: 'workshops'
    },
    {
      id: 2,
      type: 'image',
      src: 'https://images.pexels.com/photos/7092613/pexels-photo-7092613.jpeg?auto=compress&cs=tinysrgb&w=800',
      thumbnail: 'https://images.pexels.com/photos/7092613/pexels-photo-7092613.jpeg?auto=compress&cs=tinysrgb&w=400',
      title: 'Gender Equality Panel Discussion',
      description: 'Expert panel featuring industry leaders discussing modern gender challenges.',
      date: '2024-10-28',
      location: 'Conference Hall',
      category: 'events'
    },
    {
      id: 3,
      type: 'image',
      src: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800',
      thumbnail: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400',
      title: 'Member Recognition Ceremony',
      description: 'Celebrating outstanding contributions and achievements of our dedicated members.',
      date: '2024-10-10',
      location: 'Student Center',
      category: 'achievements'
    },
    {
      id: 4,
      type: 'image',
      src: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=800',
      thumbnail: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=400',
      title: 'Community Outreach Program',
      description: 'Engaging with local communities to spread awareness about gender equality.',
      date: '2024-09-20',
      location: 'Community Center',
      category: 'outreach'
    },
    {
      id: 5,
      type: 'image',
      src: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=800',
      thumbnail: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=400',
      title: 'Leadership Training Session',
      description: 'Developing leadership skills among society members for effective advocacy.',
      date: '2024-09-05',
      location: 'Training Room',
      category: 'workshops'
    },
    {
      id: 6,
      type: 'image',
      src: 'https://images.pexels.com/photos/3768911/pexels-photo-3768911.jpeg?auto=compress&cs=tinysrgb&w=800',
      thumbnail: 'https://images.pexels.com/photos/3768911/pexels-photo-3768911.jpeg?auto=compress&cs=tinysrgb&w=400',
      title: 'Annual Society Meet',
      description: 'Annual gathering bringing together members, alumni, and supporters.',
      date: '2024-08-15',
      location: 'Grand Hall',
      category: 'events'
    },
    {
      id: 7,
      type: 'image',
      src: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
      thumbnail: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400',
      title: 'Safe Spaces Discussion',
      description: 'Creating and maintaining safe spaces for open dialogue and expression.',
      date: '2024-08-01',
      location: 'Discussion Room',
      category: 'workshops'
    },
    {
      id: 8,
      type: 'image',
      src: 'https://images.pexels.com/photos/3785424/pexels-photo-3785424.jpeg?auto=compress&cs=tinysrgb&w=800',
      thumbnail: 'https://images.pexels.com/photos/3785424/pexels-photo-3785424.jpeg?auto=compress&cs=tinysrgb&w=400',
      title: 'Volunteer Appreciation Day',
      description: 'Recognizing the hard work and dedication of our amazing volunteers.',
      date: '2024-07-20',
      location: 'Garden Area',
      category: 'achievements'
    }
  ];

  const categories = [
    { key: 'all', label: 'All' },
    { key: 'workshops', label: 'Workshops' },
    { key: 'events', label: 'Events' },
    { key: 'achievements', label: 'Achievements' },
    { key: 'outreach', label: 'Outreach' }
  ];

  const filteredItems = filter === 'all' ? mediaItems : mediaItems.filter(item => item.category === filter);

  return (
    <div>
      <PageHeader
        title="Chamber of Tales"
        subtitle="Capturing moments of change, celebration, and community building"
        gradient="from-pink-600 via-purple-600 to-blue-600"
      />

      {/* Filter Buttons */}
      <div className="py-8 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setFilter(category.key)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  filter === category.key
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-gray-700'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="py-8 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            <AnimatePresence>
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  onClick={() => setSelectedMedia(item)}
                  className="cursor-pointer"
                >
                  <Card className="overflow-hidden group">
                    <div className="relative">
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      {item.type === 'video' && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                          <Play size={48} className="text-white" />
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <h3 className="text-white font-semibold text-sm mb-1">{item.title}</h3>
                        <div className="flex items-center text-white/80 text-xs">
                          <Calendar size={12} className="mr-1" />
                          {new Date(item.date).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Visual Journey</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="text-3xl font-bold mb-2">200+</div>
                <div className="text-lg opacity-90">Photos Captured</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">25+</div>
                <div className="text-lg opacity-90">Events Documented</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">50+</div>
                <div className="text-lg opacity-90">Stories Shared</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">2000+</div>
                <div className="text-lg opacity-90">Memories Created</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedMedia(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="max-w-4xl w-full bg-white dark:bg-gray-800 rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedMedia.src}
                  alt={selectedMedia.title}
                  className="w-full h-64 md:h-96 object-cover"
                />
                <button
                  onClick={() => setSelectedMedia(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-black bg-opacity-50 rounded-full flex items-center justify-center text-white hover:bg-opacity-70 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {selectedMedia.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {selectedMedia.description}
                </p>
                
                <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-1" />
                    {new Date(selectedMedia.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                  <div className="flex items-center">
                    <MapPin size={16} className="mr-1" />
                    {selectedMedia.location}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;