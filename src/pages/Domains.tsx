import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, Megaphone, Heart, Scale, Globe, Lightbulb, Award } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import BackgroundArt from "../components/BackgroundArt";
import Card from '../components/Card';

const Domains: React.FC = () => {
  const domains = [
    {
      icon: BookOpen,
      title: 'Education & Awareness',
      description: 'Conducting workshops, seminars, and awareness campaigns on gender equality, women\'s rights, and legal literacy.',
      activities: ['Rights Education Workshops', 'Legal Literacy Programs', 'Gender Sensitivity Training', 'Campus Awareness Drives'],
      color: 'from-blue-600 to-blue-400',
      stats: { events: '25+', participants: '800+' }
    },
    {
      icon: Users,
      title: 'Community Building',
      description: 'Creating safe spaces for students to connect, share experiences, and build supportive networks.',
      activities: ['Support Groups', 'Peer Mentorship', 'Safe Space Discussions', 'Community Forums'],
      color: 'from-purple-600 to-purple-400',
      stats: { groups: '12', members: '200+' }
    },
    {
      icon: Megaphone,
      title: 'Advocacy & Campaigns',
      description: 'Raising voices for policy changes and social reforms that promote gender equality and justice.',
      activities: ['Policy Advocacy', 'Social Media Campaigns', 'Petition Drives', 'Public Speaking Events'],
      color: 'from-pink-600 to-pink-400',
      stats: { campaigns: '15+', reach: '5000+' }
    },
    {
      icon: Heart,
      title: 'Support Services',
      description: 'Providing counseling support, resources, and assistance to those in need of help and guidance.',
      activities: ['Counseling Support', 'Resource Assistance', 'Crisis Intervention', 'Helpline Services'],
      color: 'from-green-600 to-green-400',
      stats: { sessions: '100+', helped: '150+' }
    },
    {
      icon: Scale,
      title: 'Legal Aid & Rights',
      description: 'Offering guidance on legal matters and connecting individuals with appropriate legal resources.',
      activities: ['Legal Consultation', 'Rights Information', 'Legal Resource Mapping', 'Court Support'],
      color: 'from-indigo-600 to-indigo-400',
      stats: { consultations: '50+', cases: '20+' }
    },
    {
      icon: Globe,
      title: 'Digital Outreach',
      description: 'Expanding our reach through digital platforms, content creation, and online engagement.',
      activities: ['Content Creation', 'Social Media Management', 'Online Workshops', 'Digital Campaigns'],
      color: 'from-cyan-600 to-cyan-400',
      stats: { followers: '3000+', content: '200+' }
    }
  ];

  const collaborations = [
    {
      name: 'Women\'s Rights Foundation',
      type: 'NGO Partnership',
      description: 'Joint workshops on legal rights and advocacy training',
      logo: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Legal Aid Society',
      type: 'Legal Support',
      description: 'Free legal consultation and support services',
      logo: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'KSAC (College Council)',
      type: 'Student Body',
      description: 'Campus-wide gender equality initiatives',
      logo: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Mental Health Collective',
      type: 'Counseling Services',
      description: 'Mental health support and counseling programs',
      logo: 'https://images.pexels.com/photos/3768911/pexels-photo-3768911.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  const upcomingInitiatives = [
    {
      title: 'Digital Mentorship Program',
      description: 'Connecting students with industry professionals for career guidance',
      timeline: 'Launching January 2024',
      icon: Lightbulb
    },
    {
      title: 'Inter-College Alliance',
      description: 'Building partnerships with other colleges for broader impact',
      timeline: 'February 2024',
      icon: Globe
    },
    {
      title: 'Recognition Awards Program',
      description: 'Formal recognition system for outstanding contributions',
      timeline: 'March 2024',
      icon: Award
    }
  ];

  return (
    <div className="relative">
      <BackgroundArt />
      <PageHeader
        title="Our Domains & Activities"
        subtitle="Comprehensive approach to gender empowerment across multiple domains"
        gradient="from-treepurple-500 via-treegreen-400 to-treegreen-200"
      />

      {/* Main Domains */}
  <div className="py-16 bg-gradient-to-b from-treegreen-50 via-treepurple-50 to-treegreen-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Working Domains
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We work across six key domains to create comprehensive impact in gender equality and empowerment
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {domains.map((domain, index) => (
              <motion.div
                key={domain.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full">
                  <div className={`w-16 h-16 bg-gradient-to-r ${domain.color} rounded-full flex items-center justify-center mb-6`}>
                    <domain.icon size={32} className="text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{domain.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{domain.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Activities:</h4>
                    <ul className="space-y-1">
                      {domain.activities.map((activity, idx) => (
                        <li key={idx} className="text-sm text-gray-600 dark:text-gray-300 flex items-center">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                    {Object.entries(domain.stats).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-lg font-bold text-purple-600 dark:text-purple-400">{value}</div>
                        <div className="text-xs text-gray-500 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Collaborations & Partnerships */}
      <div className="py-16 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-gray-800 dark:to-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Partnerships & Collaborations
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Working together with organizations that share our vision for gender equality
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {collaborations.map((collaboration, index) => (
              <motion.div
                key={collaboration.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6">
                  <div className="flex items-start space-x-4">
                    <img
                      src={collaboration.logo}
                      alt={collaboration.name}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                        {collaboration.name}
                      </h3>
                      <p className="text-purple-600 dark:text-purple-400 font-medium mb-2">
                        {collaboration.type}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300">
                        {collaboration.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* KSAC Collaboration Highlight */}
      <div className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center mb-6">
                <Users className="text-purple-600 mr-3" size={32} />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                  KSAC Partnership
                </h2>
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Our collaboration with the Kamakshi Student Activities Council (KSAC) has been instrumental in expanding our reach across campus and creating university-wide impact.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Award className="text-purple-600 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Joint Events</h4>
                    <p className="text-gray-600 dark:text-gray-300">Co-organized major campus events reaching 1000+ students</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Globe className="text-blue-600 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Policy Influence</h4>
                    <p className="text-gray-600 dark:text-gray-300">Contributed to campus policies promoting gender equality</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Heart className="text-pink-600 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Resource Sharing</h4>
                    <p className="text-gray-600 dark:text-gray-300">Shared resources for maximum community benefit</p>
                  </div>
                </div>
              </div>
              <BackgroundArt />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="KSAC collaboration"
                className="rounded-lg shadow-xl w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg"></div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Upcoming Initiatives */}
      <div className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Upcoming Initiatives
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              New programs and initiatives launching soon to expand our impact
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingInitiatives.map((initiative, index) => (
              <motion.div
                key={initiative.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="p-6 text-center h-full">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <initiative.icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{initiative.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{initiative.description}</p>
                  <div className="inline-block bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full text-sm font-medium">
                    {initiative.timeline}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Want to Get Involved?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join us in one or more of our domains and help create meaningful change in your community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/volunteers"
                whileHover={{ scale: 1.05 }}
                className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
              >
                Volunteer With Us
              </motion.a>
              <motion.a
                href="/calendar"
                whileHover={{ scale: 1.05 }}
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                View Upcoming Events
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Domains;