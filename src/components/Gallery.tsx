import React, { useState } from 'react';
import { X, Calendar, MapPin, Users, Play } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedMedia, setSelectedMedia] = useState<any>(null);

  const galleryItems = [
    {
      id: 1,
      type: 'image',
      src: 'https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'International Women\'s Day Celebration',
      date: 'March 8, 2024',
      location: 'Main Auditorium',
      participants: 200,
      description: 'A vibrant celebration featuring inspiring talks from women leaders, cultural performances, and recognition of outstanding contributions to gender equality.'
    },
    {
      id: 2,
      type: 'image',
      src: 'https://images.pexels.com/photos/3184302/pexels-photo-3184302.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Know Your Rights Workshop',
      date: 'February 15, 2024',
      location: 'Conference Hall',
      participants: 85,
      description: 'An educational workshop covering legal rights, workplace equality, and resources for support. Interactive sessions helped students understand their rights and responsibilities.'
    },
    {
      id: 3,
      type: 'video',
      src: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'HeForShe Campaign Launch',
      date: 'January 20, 2024',
      location: 'Campus Grounds',
      participants: 150,
      description: 'Launch of our campus-wide HeForShe campaign with male students and faculty joining hands to support gender equality initiatives.'
    },
    {
      id: 4,
      type: 'image',
      src: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Leadership Training Program',
      date: 'December 10, 2023',
      location: 'Training Center',
      participants: 60,
      description: 'Intensive leadership development program focusing on building confidence, communication skills, and leadership abilities among participants.'
    },
    {
      id: 5,
      type: 'image',
      src: 'https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Mental Health Awareness Week',
      date: 'November 15, 2023',
      location: 'Student Center',
      participants: 120,
      description: 'A week-long series of events focused on mental health awareness, stress management, and creating supportive communities.'
    },
    {
      id: 6,
      type: 'video',
      src: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Community Outreach Program',
      date: 'October 25, 2023',
      location: 'Local Community Center',
      participants: 80,
      description: 'Extending our impact beyond campus through community education programs and awareness drives in local neighborhoods.'
    },
    {
      id: 7,
      type: 'image',
      src: 'https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Annual Awards Ceremony',
      date: 'September 20, 2023',
      location: 'Grand Hall',
      participants: 250,
      description: 'Recognizing outstanding contributions to gender equality and empowerment through our annual awards ceremony featuring inspiring success stories.'
    },
    {
      id: 8,
      type: 'image',
      src: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Skill Development Bootcamp',
      date: 'August 18, 2023',
      location: 'Innovation Lab',
      participants: 45,
      description: 'Intensive skill-building sessions covering professional development, digital literacy, and entrepreneurship for empowering career growth.'
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-gray-800 dark:via-purple-900 dark:to-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
            Chamber of <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Tales</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Explore the moments that define our journey - from impactful events to meaningful connections 
            that drive our mission forward.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:scale-105"
              onClick={() => setSelectedMedia(item)}
            >
              <div className="aspect-w-4 aspect-h-3 relative">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {item.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                      <Play className="w-8 h-8 text-purple-600 group-hover:text-white ml-1" />
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-bold text-lg mb-2 line-clamp-2">{item.title}</h3>
                  <div className="flex items-center text-sm space-x-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{new Date(item.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      <span>{item.participants}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedMedia && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
            <div className="relative bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <button
                onClick={() => setSelectedMedia(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
              >
                <X className="w-6 h-6 text-gray-600 dark:text-gray-300" />
              </button>
              
              <div className="p-0">
                <img
                  src={selectedMedia.src}
                  alt={selectedMedia.title}
                  className="w-full h-64 md:h-96 object-cover rounded-t-2xl"
                />
                <div className="p-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-4">
                    {selectedMedia.title}
                  </h3>
                  
                  <div className="flex flex-wrap gap-6 mb-6 text-sm">
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <Calendar className="w-4 h-4 mr-2 text-purple-600" />
                      <span>{selectedMedia.date}</span>
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <MapPin className="w-4 h-4 mr-2 text-purple-600" />
                      <span>{selectedMedia.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <Users className="w-4 h-4 mr-2 text-purple-600" />
                      <span>{selectedMedia.participants} participants</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                    {selectedMedia.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;