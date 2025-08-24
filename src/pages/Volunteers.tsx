import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Globe, Mail, CheckCircle, Star, Award, UserPlus } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import Card from '../components/Card';

const Volunteers: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    year: '',
    branch: '',
    interests: [] as string[],
    experience: '',
    availability: '',
    motivation: '',
    skills: '',
    socialMedia: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [newsletter, setNewsletter] = useState('');
  const [isNewsletterSubmitted, setIsNewsletterSubmitted] = useState(false);

  const volunteerOpportunities = [
    {
      icon: Users,
      title: 'Event Organization',
      description: 'Help organize workshops, seminars, and awareness campaigns',
      commitment: '4-6 hours/week',
      skills: ['Event Planning', 'Communication', 'Coordination'],
      color: 'from-purple-600 to-purple-400'
    },
    {
      icon: Globe,
      title: 'Digital Content Creation',
      description: 'Create engaging content for social media and website',
      commitment: '3-5 hours/week',
      skills: ['Writing', 'Design', 'Social Media'],
      color: 'from-blue-600 to-blue-400'
    },
    {
      icon: Heart,
      title: 'Community Outreach',
      description: 'Engage with local communities and build partnerships',
      commitment: '5-7 hours/week',
      skills: ['Communication', 'Networking', 'Public Speaking'],
      color: 'from-pink-600 to-pink-400'
    },
    {
      icon: Star,
      title: 'Research & Policy',
      description: 'Research gender equality topics and policy analysis',
      commitment: '3-4 hours/week',
      skills: ['Research', 'Analysis', 'Writing'],
      color: 'from-green-600 to-green-400'
    }
  ];

  const benefits = [
    {
      title: 'Skill Development',
      description: 'Gain valuable experience in leadership, communication, and project management',
      icon: '🚀'
    },
    {
      title: 'Networking',
      description: 'Connect with like-minded individuals, mentors, and industry professionals',
      icon: '🤝'
    },
    {
      title: 'Recognition',
      description: 'Receive certificates, recommendations, and public recognition for your contributions',
      icon: '🏆'
    },
    {
      title: 'Impact',
      description: 'Make a real difference in promoting gender equality and social justice',
      icon: '✨'
    },
    {
      title: 'Personal Growth',
      description: 'Develop confidence, empathy, and a deeper understanding of social issues',
      icon: '🌱'
    },
    {
      title: 'Career Benefits',
      description: 'Enhance your resume with meaningful volunteer experience and achievements',
      icon: '📈'
    }
  ];

  const testimonials = [
    {
      name: 'Rahul Patel',
      role: 'Former Volunteer, Now Software Engineer',
      text: 'Volunteering with Kamakshi & HeForShe taught me leadership skills I use daily in my career. The experience of organizing events and leading teams was invaluable.',
      image: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=150',
      duration: '2 years'
    },
    {
      name: 'Ananya Sharma',
      role: 'Current Volunteer & Psychology Student',
      text: 'Being part of this community has given me purpose and direction. The friendships I\'ve made and the skills I\'ve gained are priceless.',
      image: 'https://images.pexels.com/photos/3768911/pexels-photo-3768911.jpeg?auto=compress&cs=tinysrgb&w=150',
      duration: '1.5 years'
    },
    {
      name: 'Maya Gupta',
      role: 'Alumni & HR Professional',
      text: 'The communication and advocacy skills I developed as a volunteer directly contributed to my success in human resources.',
      image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=150',
      duration: '3 years'
    }
  ];

  const interestOptions = [
    'Event Organization',
    'Content Writing',
    'Social Media Management',
    'Research & Analysis',
    'Public Speaking',
    'Community Outreach',
    'Graphic Design',
    'Photography/Videography',
    'Legal Aid Support',
    'Counseling Support',
    'Workshop Facilitation',
    'Translation Services'
  ];

  const handleInterestChange = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to backend
    setIsSubmitted(true);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsNewsletterSubmitted(true);
    setTimeout(() => {
      setIsNewsletterSubmitted(false);
      setNewsletter('');
    }, 3000);
  };

  return (
    <div>
      <PageHeader
        title="Join Our Mission"
        subtitle="Become a volunteer and help us create a more equitable and just world for everyone"
        gradient="from-pink-600 via-purple-600 to-blue-600"
      />

      {/* Why Volunteer */}
      <div className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Volunteer With Us?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Join a community of passionate changemakers and gain valuable experiences while making a real impact
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 text-center h-full">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{benefit.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Volunteer Opportunities */}
      <div className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Volunteer Opportunities
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Find the perfect role that matches your interests and skills
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {volunteerOpportunities.map((opportunity, index) => (
              <motion.div
                key={opportunity.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full">
                  <div className={`w-16 h-16 bg-gradient-to-r ${opportunity.color} rounded-full flex items-center justify-center mb-4`}>
                    <opportunity.icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{opportunity.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{opportunity.description}</p>
                  <div className="mb-4">
                    <div className="text-sm font-medium text-purple-600 dark:text-purple-400 mb-2">
                      Commitment: {opportunity.commitment}
                    </div>
                    <div className="text-sm font-medium text-gray-900 dark:text-white mb-2">Skills Gained:</div>
                    <div className="flex flex-wrap gap-2">
                      {opportunity.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 px-2 py-1 rounded text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Volunteer Stories
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Hear from our amazing volunteers about their experiences
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="p-6 text-center h-full">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{testimonial.name}</h4>
                  <p className="text-purple-600 dark:text-purple-400 text-sm mb-2">{testimonial.role}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">Volunteered for {testimonial.duration}</p>
                  <p className="text-gray-600 dark:text-gray-300 italic">"{testimonial.text}"</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Volunteer Application Form */}
      <div className="py-16 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Apply to Volunteer
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Ready to make a difference? Fill out the form below to join our volunteer community
            </p>
          </motion.div>

          <Card className="p-8">
            {isSubmitted ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-12"
              >
                <CheckCircle size={64} className="text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Application Submitted!
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Thank you for your interest in volunteering with us. We'll review your application and get back to you within 3-5 business days.
                </p>
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-lg p-4">
                  <p className="text-blue-700 dark:text-blue-300">
                    <strong>What's next?</strong> Our team will contact you via email or phone to schedule a brief orientation session.
                  </p>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Year of Study
                    </label>
                    <select
                      value={formData.year}
                      onChange={(e) => setFormData({...formData, year: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
                    >
                      <option value="">Select Year</option>
                      <option value="1st">1st Year</option>
                      <option value="2nd">2nd Year</option>
                      <option value="3rd">3rd Year</option>
                      <option value="4th">4th Year</option>
                      <option value="postgrad">Post Graduate</option>
                      <option value="alumni">Alumni</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Branch/Department
                  </label>
                  <input
                    type="text"
                    value={formData.branch}
                    onChange={(e) => setFormData({...formData, branch: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
                    placeholder="e.g., Computer Science, Psychology, etc."
                  />
                </div>

                {/* Interests */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Areas of Interest * (Select all that apply)
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {interestOptions.map((interest) => (
                      <label key={interest} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={formData.interests.includes(interest)}
                          onChange={() => handleInterestChange(interest)}
                          className="mr-2 text-purple-600 focus:ring-purple-500 border-gray-300 dark:border-gray-600"
                        />
                        <span className="text-sm text-gray-700 dark:text-gray-300">{interest}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Previous Experience
                  </label>
                  <textarea
                    rows={3}
                    value={formData.experience}
                    onChange={(e) => setFormData({...formData, experience: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
                    placeholder="Describe any relevant volunteer experience, internships, or leadership roles"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Availability *
                  </label>
                  <select
                    required
                    value={formData.availability}
                    onChange={(e) => setFormData({...formData, availability: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
                  >
                    <option value="">Select your availability</option>
                    <option value="2-4 hours/week">2-4 hours per week</option>
                    <option value="4-6 hours/week">4-6 hours per week</option>
                    <option value="6-8 hours/week">6-8 hours per week</option>
                    <option value="8+ hours/week">8+ hours per week</option>
                    <option value="flexible">Flexible schedule</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Why do you want to volunteer with us? *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.motivation}
                    onChange={(e) => setFormData({...formData, motivation: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
                    placeholder="Share your motivation and what you hope to contribute and gain from this experience"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Special Skills or Talents
                  </label>
                  <textarea
                    rows={2}
                    value={formData.skills}
                    onChange={(e) => setFormData({...formData, skills: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
                    placeholder="e.g., Graphic design, public speaking, language skills, etc."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Social Media Handles (Optional)
                  </label>
                  <input
                    type="text"
                    value={formData.socialMedia}
                    onChange={(e) => setFormData({...formData, socialMedia: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
                    placeholder="Instagram, LinkedIn, Twitter handles"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center space-x-2 font-medium"
                >
                  <UserPlus size={20} />
                  <span>Submit Application</span>
                </button>
              </form>
            )}
          </Card>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Subscribe to our newsletter for volunteer opportunities, events, and impact stories
            </p>
          </motion.div>

          <Card className="p-8 text-center">
            {isNewsletterSubmitted ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="py-8"
              >
                <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Successfully Subscribed!
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Thank you for subscribing. You'll receive our latest updates and volunteer opportunities.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    required
                    value={newsletter}
                    onChange={(e) => setNewsletter(e.target.value)}
                    placeholder="Enter your email address"
                    className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
                  />
                  <button
                    type="submit"
                    className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center space-x-2 font-medium"
                  >
                    <Mail size={16} />
                    <span>Subscribe</span>
                  </button>
                </div>
              </form>
            )}
          </Card>
        </div>
      </div>

      {/* Contact Information */}
      <div className="py-16 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Questions About Volunteering?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Our team is here to help you get started on your volunteer journey
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="mailto:volunteers@kamakshi-heforshe.edu"
                whileHover={{ scale: 1.05 }}
                className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
              >
                <Mail size={18} />
                <span>volunteers@kamakshi-heforshe.edu</span>
              </motion.a>
              <motion.a
                href="tel:+919876543210"
                whileHover={{ scale: 1.05 }}
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                +91 98765 43210
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Volunteers;