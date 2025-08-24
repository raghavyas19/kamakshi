import React from 'react';
import { BookOpen, Users, Megaphone, Heart, Globe, Lightbulb, UserCheck, Calendar } from 'lucide-react';

const Domains: React.FC = () => {
  const domains = [
    {
      icon: BookOpen,
      title: 'Education & Awareness',
      description: 'Conducting workshops, seminars, and awareness campaigns on gender equality, rights, and empowerment.',
      activities: ['Rights education workshops', 'Gender sensitivity training', 'Legal awareness sessions'],
      color: 'from-purple-500 to-blue-500'
    },
    {
      icon: Users,
      title: 'Community Building',
      description: 'Creating safe spaces for dialogue, support, and collaboration among all genders.',
      activities: ['Support groups', 'Peer mentoring programs', 'Community discussions'],
      color: 'from-pink-500 to-purple-500'
    },
    {
      icon: Megaphone,
      title: 'Advocacy & Policy',
      description: 'Advocating for policy changes and raising voice against gender-based discrimination.',
      activities: ['Policy research', 'Advocacy campaigns', 'Institutional reforms'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Heart,
      title: 'Mental Health & Wellness',
      description: 'Providing emotional support and promoting mental wellness within our community.',
      activities: ['Counseling support', 'Wellness workshops', 'Stress management sessions'],
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Globe,
      title: 'Digital Outreach',
      description: 'Leveraging digital platforms to spread awareness and connect with broader audiences.',
      activities: ['Social media campaigns', 'Online webinars', 'Digital storytelling'],
      color: 'from-green-500 to-blue-500'
    },
    {
      icon: Lightbulb,
      title: 'Research & Innovation',
      description: 'Conducting research on gender issues and developing innovative solutions.',
      activities: ['Gender studies research', 'Innovation projects', 'Data analysis'],
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: UserCheck,
      title: 'Skill Development',
      description: 'Empowering individuals through skill-building programs and professional development.',
      activities: ['Leadership training', 'Professional workshops', 'Career guidance'],
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Calendar,
      title: 'Events & Celebrations',
      description: 'Organizing events to celebrate achievements and raise awareness on important issues.',
      activities: ['International Days celebrations', 'Award ceremonies', 'Cultural events'],
      color: 'from-teal-500 to-green-500'
    }
  ];

  const collaborations = [
    { name: 'KSAC (Knowledge Sharing & Academic Council)', description: 'Academic collaboration and knowledge exchange' },
    { name: 'Student Welfare Committee', description: 'Student support and welfare initiatives' },
    { name: 'Legal Aid Cell', description: 'Legal assistance and awareness programs' },
    { name: 'Mental Health Club', description: 'Mental wellness and counseling support' }
  ];

  return (
    <section id="domains" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
            Our <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Domains</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We work across multiple domains to create comprehensive impact in gender empowerment and equality.
          </p>
        </div>

        {/* Domains Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {domains.map((domain, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105 border border-gray-100 dark:border-gray-600"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${domain.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <domain.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                {domain.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                {domain.description}
              </p>
              
              <div className="space-y-2">
                {domain.activities.map((activity, idx) => (
                  <div key={idx} className="flex items-center text-sm">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2 flex-shrink-0"></div>
                    <span className="text-gray-500 dark:text-gray-400">{activity}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Collaborations Section */}
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6">
              Our <span className="text-purple-600">Collaborations</span>
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We work closely with various campus organizations to maximize our impact and reach.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {collaborations.map((collab, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-purple-500"
              >
                <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
                  {collab.name}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {collab.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-200 shadow-lg">
              Partner With Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Domains;