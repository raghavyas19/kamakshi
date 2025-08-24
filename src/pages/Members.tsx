import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Award, Users, Heart, Linkedin as LinkedIn, Mail, Instagram } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import Card from '../components/Card';

const Members: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<any>(null);

  const coreTeam = [
    {
      name: 'Arjun Kapoor',
      role: 'President',
      image: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Final year Computer Science student passionate about gender equality and social justice.',
      contributions: ['Led 15+ workshops', 'Expanded membership by 200%', 'Established university partnerships'],
      achievements: ['Best Society Leader 2024', 'Social Impact Award'],
      social: { linkedin: '#', email: 'arjun@example.com', instagram: '#' }
    },
    {
      name: 'Priya Nair',
      role: 'Vice President',
      image: 'https://images.pexels.com/photos/3768911/pexels-photo-3768911.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Psychology major focused on mental health advocacy and inclusive community building.',
      contributions: ['Counseling support program', 'Mental health awareness campaigns', 'Safe space initiatives'],
      achievements: ['Community Builder Award', 'Mental Health Advocate 2024'],
      social: { linkedin: '#', email: 'priya@example.com', instagram: '#' }
    },
    {
      name: 'Rohit Singh',
      role: 'Events Coordinator',
      image: 'https://images.pexels.com/photos/3785424/pexels-photo-3785424.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Event management enthusiast organizing impactful programs that create lasting change.',
      contributions: ['50+ successful events', 'Inter-college collaborations', 'Corporate partnerships'],
      achievements: ['Event Excellence Award', 'Partnership Builder 2024'],
      social: { linkedin: '#', email: 'rohit@example.com', instagram: '#' }
    },
    {
      name: 'Sneha Patel',
      role: 'Content Head',
      image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Journalism student creating compelling content to spread awareness about gender equality.',
      contributions: ['100+ blog articles', 'Social media growth 300%', 'Educational video series'],
      achievements: ['Content Creator of the Year', 'Digital Impact Award'],
      social: { linkedin: '#', email: 'sneha@example.com', instagram: '#' }
    }
  ];

  const activeMembers = [
    {
      name: 'Maya Sharma',
      role: 'Research Volunteer',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400',
      contributions: ['Legal rights research', 'Policy analysis', 'Data collection']
    },
    {
      name: 'Karan Mehta',
      role: 'Outreach Coordinator',
      image: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=400',
      contributions: ['Community partnerships', 'Volunteer recruitment', 'External relations']
    },
    {
      name: 'Ananya Gupta',
      role: 'Workshop Facilitator',
      image: 'https://images.pexels.com/photos/3768911/pexels-photo-3768911.jpeg?auto=compress&cs=tinysrgb&w=400',
      contributions: ['Educational workshops', 'Skill development', 'Mentorship programs']
    },
    {
      name: 'Vikash Kumar',
      role: 'Tech Support',
      image: 'https://images.pexels.com/photos/3785424/pexels-photo-3785424.jpeg?auto=compress&cs=tinysrgb&w=400',
      contributions: ['Website development', 'Digital tools', 'Online presence']
    },
    {
      name: 'Isha Reddy',
      role: 'Finance Manager',
      image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=400',
      contributions: ['Budget management', 'Fundraising', 'Financial planning']
    },
    {
      name: 'Dev Agarwal',
      role: 'Social Media Manager',
      image: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=400',
      contributions: ['Instagram management', 'Content strategy', 'Engagement growth']
    }
  ];

  const memberOfMonth = {
    name: 'Sarah Johnson',
    role: 'Content Creator & Outreach Coordinator',
    image: 'https://images.pexels.com/photos/3768911/pexels-photo-3768911.jpeg?auto=compress&cs=tinysrgb&w=400',
    reason: 'Sarah\'s dedication to creating inclusive content and organizing impactful workshops has touched the lives of over 500 students this month. Her blog series on workplace equality has become our most-read content.',
    achievements: ['500+ students reached', 'Most-read blog series', '10 workshops organized', 'New member mentor']
  };

  return (
    <div>
      <PageHeader
        title="Our Members"
        subtitle="Meet the passionate changemakers driving our mission forward"
        gradient="from-blue-600 via-purple-600 to-pink-600"
      />

      {/* Member of the Month */}
      <div className="py-16 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-gray-800 dark:to-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <div className="flex items-center justify-center mb-4">
              <Star className="text-yellow-500 mr-2" size={32} />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Member of the Month</h2>
            </div>
            
            <Card className="max-w-4xl mx-auto p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-1">
                  <img
                    src={memberOfMonth.image}
                    alt={memberOfMonth.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-yellow-400"
                  />
                </div>
                <div className="lg:col-span-2 text-left">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{memberOfMonth.name}</h3>
                  <p className="text-purple-600 dark:text-purple-400 font-medium mb-4">{memberOfMonth.role}</p>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">{memberOfMonth.reason}</p>
                  <div className="grid grid-cols-2 gap-4">
                    {memberOfMonth.achievements.map((achievement, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Award size={16} className="text-yellow-500" />
                        <span className="text-sm text-gray-700 dark:text-gray-300">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Core Team */}
      <div className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Core Team</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">The leaders driving our vision and mission</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreTeam.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setSelectedMember(member)}
                className="cursor-pointer"
              >
                <Card className="text-center p-6 h-full hover:shadow-2xl transition-all duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{member.name}</h3>
                  <p className="text-purple-600 dark:text-purple-400 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{member.bio}</p>
                  <button className="text-purple-600 dark:text-purple-400 hover:underline text-sm font-medium">
                    View Details →
                  </button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Active Members */}
      <div className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Active Members</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Dedicated volunteers making a difference every day</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activeMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 text-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{member.name}</h3>
                  <p className="text-purple-600 dark:text-purple-400 font-medium mb-3">{member.role}</p>
                  <div className="space-y-1">
                    {member.contributions.map((contribution, idx) => (
                      <div key={idx} className="flex items-center justify-center space-x-2">
                        <Heart size={14} className="text-pink-500" />
                        <span className="text-sm text-gray-600 dark:text-gray-300">{contribution}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="py-16 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Our Community Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl font-bold mb-2">250+</div>
                <div className="text-lg opacity-90">Active Members</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-lg opacity-90">Events Organized</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">2000+</div>
                <div className="text-lg opacity-90">Lives Impacted</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">15+</div>
                <div className="text-lg opacity-90">Partner Organizations</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Member Detail Modal */}
      {selectedMember && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white dark:bg-gray-800 rounded-lg p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="text-center mb-6">
              <img
                src={selectedMember.image}
                alt={selectedMember.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{selectedMember.name}</h2>
              <p className="text-purple-600 dark:text-purple-400 font-medium mb-4">{selectedMember.role}</p>
              <p className="text-gray-600 dark:text-gray-300">{selectedMember.bio}</p>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Key Contributions</h3>
              <div className="space-y-2">
                {selectedMember.contributions.map((contribution, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Users size={16} className="text-purple-600" />
                    <span className="text-gray-700 dark:text-gray-300">{contribution}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Achievements</h3>
              <div className="space-y-2">
                {selectedMember.achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Award size={16} className="text-yellow-500" />
                    <span className="text-gray-700 dark:text-gray-300">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center space-x-4 mb-6">
              <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                <LinkedIn size={16} />
                <span>LinkedIn</span>
              </button>
              <button className="flex items-center space-x-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                <Mail size={16} />
                <span>Email</span>
              </button>
              <button className="flex items-center space-x-2 bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition-colors">
                <Instagram size={16} />
                <span>Instagram</span>
              </button>
            </div>

            <button
              onClick={() => setSelectedMember(null)}
              className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Members;