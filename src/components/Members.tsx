import React, { useState } from 'react';
import { Crown, Star, Award, Mail, Linkedin, Instagram } from 'lucide-react';

const Members: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<number | null>(null);

  const memberOfMonth = {
    name: "Anisha Verma",
    role: "Content Creator & Advocate",
    image: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400",
    achievement: "Led the 'Know Your Rights' campaign reaching 500+ students",
    description: "Anisha has been instrumental in creating educational content and organizing awareness workshops. Her dedication to women's rights education has made a lasting impact on our community.",
    contributions: ["Created 15+ educational blogs", "Organized 3 major workshops", "Mentored 20+ new members"],
    social: {
      email: "anisha@example.com",
      linkedin: "linkedin.com/in/anisha-verma",
      instagram: "@anisha_advocates"
    }
  };

  const teamMembers = [
    {
      name: "Kavya Patel",
      role: "President",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Leading the society with vision and passion for gender equality.",
      achievements: ["Founded campus mentorship program", "Increased membership by 200%"],
      social: { email: "kavya@example.com", linkedin: "linkedin.com/in/kavya-patel" }
    },
    {
      name: "Rahul Singh",
      role: "Vice President",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Championing male involvement in gender equality initiatives.",
      achievements: ["Launched HeForShe ambassador program", "Coordinated with 5+ NGOs"],
      social: { email: "rahul@example.com", instagram: "@rahul_heforshe" }
    },
    {
      name: "Shreya Gupta",
      role: "Event Coordinator",
      image: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Organizing impactful events that bring our community together.",
      achievements: ["Organized 15+ successful events", "Created volunteer network of 50+ students"],
      social: { email: "shreya@example.com", linkedin: "linkedin.com/in/shreya-gupta" }
    },
    {
      name: "Arjun Mehta",
      role: "Content Lead",
      image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Creating compelling content that educates and inspires action.",
      achievements: ["Published 25+ articles", "Grew social media following by 300%"],
      social: { email: "arjun@example.com", instagram: "@arjun_writes" }
    },
    {
      name: "Priyanka Sharma",
      role: "Outreach Manager",
      image: "https://images.pexels.com/photos/3763152/pexels-photo-3763152.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Building partnerships and expanding our reach across communities.",
      achievements: ["Established 10+ community partnerships", "Launched inter-college collaboration"],
      social: { email: "priyanka@example.com", linkedin: "linkedin.com/in/priyanka-sharma" }
    },
    {
      name: "Vikram Joshi",
      role: "Technology Lead",
      image: "https://images.pexels.com/photos/3785076/pexels-photo-3785076.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Developing digital solutions to amplify our impact and reach.",
      achievements: ["Built society website", "Created digital awareness campaigns"],
      social: { email: "vikram@example.com", linkedin: "linkedin.com/in/vikram-joshi" }
    }
  ];

  return (
    <section id="members" className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-gray-800 dark:via-purple-900 dark:to-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
            Our <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Team</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Meet the passionate individuals driving change and making a difference in our community.
          </p>
        </div>

        {/* Member of the Month */}
        <div className="mb-20">
          <div className="text-center mb-8">
            <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-3 rounded-full font-bold text-lg mb-4">
              <Crown className="w-6 h-6 mr-2" />
              Member of the Month
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden max-w-4xl mx-auto">
            <div className="md:flex">
              <div className="md:w-1/3">
                <img
                  src={memberOfMonth.image}
                  alt={memberOfMonth.name}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-2/3 p-8">
                <div className="flex items-center mb-4">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mr-3">
                    {memberOfMonth.name}
                  </h3>
                  <Star className="w-6 h-6 text-yellow-500 fill-current" />
                </div>
                <p className="text-purple-600 dark:text-purple-400 font-semibold mb-4">
                  {memberOfMonth.role}
                </p>
                <div className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 p-4 rounded-xl mb-6">
                  <div className="flex items-center mb-2">
                    <Award className="w-5 h-5 text-purple-600 dark:text-purple-400 mr-2" />
                    <span className="font-semibold text-gray-800 dark:text-white">Achievement</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">{memberOfMonth.achievement}</p>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {memberOfMonth.description}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  {memberOfMonth.contributions.map((contribution, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mr-2"></div>
                      <span className="text-sm text-gray-600 dark:text-gray-300">{contribution}</span>
                    </div>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a href={`mailto:${memberOfMonth.social.email}`} className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-purple-100 dark:hover:bg-purple-800 transition-colors duration-200">
                    <Mail className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                  </a>
                  <a href={`https://${memberOfMonth.social.linkedin}`} target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-blue-100 dark:hover:bg-blue-800 transition-colors duration-200">
                    <Linkedin className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                  </a>
                  <a href={`https://instagram.com/${memberOfMonth.social.instagram.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-pink-100 dark:hover:bg-pink-800 transition-colors duration-200">
                    <Instagram className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Members Grid */}
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Core <span className="text-purple-600">Team</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer transform hover:scale-105"
              onClick={() => setSelectedMember(selectedMember === index ? null : index)}
            >
              <div className="relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                  {member.name}
                </h4>
                <p className="text-purple-600 dark:text-purple-400 font-semibold mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                  {member.description}
                </p>
                
                {selectedMember === index && (
                  <div className="border-t pt-4 mt-4 animate-fadeIn">
                    <div className="mb-4">
                      <h5 className="font-semibold text-gray-800 dark:text-white mb-2">Key Achievements:</h5>
                      {member.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-start mb-1">
                          <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                          <span className="text-sm text-gray-600 dark:text-gray-300">{achievement}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex space-x-3">
                      <a href={`mailto:${member.social.email}`} className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-purple-100 dark:hover:bg-purple-800 transition-colors duration-200">
                        <Mail className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                      </a>
                      {member.social.linkedin && (
                        <a href={`https://${member.social.linkedin}`} target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-blue-100 dark:hover:bg-blue-800 transition-colors duration-200">
                          <Linkedin className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                        </a>
                      )}
                      {member.social.instagram && (
                        <a href={`https://instagram.com/${member.social.instagram.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-pink-100 dark:hover:bg-pink-800 transition-colors duration-200">
                          <Instagram className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Members;