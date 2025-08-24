import React, { useState } from 'react';
import { Heart, Users, Clock, Award, CheckCircle, Mail, Phone, User, MessageSquare } from 'lucide-react';

const Volunteers: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interests: [] as string[],
    experience: '',
    availability: '',
    motivation: '',
    skills: '',
    newsletter: true
  });

  const volunteerAreas = [
    {
      id: 'events',
      title: 'Event Organization',
      description: 'Help plan and execute workshops, awareness campaigns, and social events.',
      icon: '🎭',
      commitment: '5-10 hours/month',
      skills: ['Event Planning', 'Coordination', 'Communication']
    },
    {
      id: 'content',
      title: 'Content Creation',
      description: 'Write blogs, create social media content, and develop educational materials.',
      icon: '✍️',
      commitment: '3-6 hours/week',
      skills: ['Writing', 'Design', 'Social Media']
    },
    {
      id: 'outreach',
      title: 'Community Outreach',
      description: 'Connect with local communities, schools, and organizations to spread awareness.',
      icon: '🤝',
      commitment: '4-8 hours/month',
      skills: ['Public Speaking', 'Networking', 'Relationship Building']
    },
    {
      id: 'research',
      title: 'Research & Advocacy',
      description: 'Research gender-related topics, laws, and create advocacy materials.',
      icon: '📚',
      commitment: '6-12 hours/month',
      skills: ['Research', 'Analysis', 'Policy Understanding']
    },
    {
      id: 'mentorship',
      title: 'Peer Mentoring',
      description: 'Mentor new members and provide guidance on personal and professional growth.',
      icon: '🌟',
      commitment: '2-4 hours/week',
      skills: ['Empathy', 'Guidance', 'Active Listening']
    },
    {
      id: 'tech',
      title: 'Tech Support',
      description: 'Help with website maintenance, digital campaigns, and tech-related projects.',
      icon: '💻',
      commitment: '5-10 hours/month',
      skills: ['Web Development', 'Digital Tools', 'Technical Support']
    }
  ];

  const testimonials = [
    {
      name: 'Anisha Verma',
      role: 'Content Volunteer',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=150',
      quote: 'Volunteering with Kamakshi & HeForShe has been transformative. I\'ve grown personally while contributing to meaningful change.',
      duration: '1.5 years'
    },
    {
      name: 'Rahul Singh',
      role: 'Event Coordinator',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
      quote: 'Being part of this community has taught me the importance of male allies in gender equality. Every event we organize creates ripple effects.',
      duration: '2 years'
    },
    {
      name: 'Shreya Gupta',
      role: 'Outreach Volunteer',
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=150',
      quote: 'Through outreach activities, I\'ve connected with incredible people and learned so much about community building and social impact.',
      duration: '8 months'
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: 'Make Real Impact',
      description: 'Contribute to creating a more equitable society and see the direct impact of your work.'
    },
    {
      icon: Users,
      title: 'Build Network',
      description: 'Connect with like-minded individuals, mentors, and professionals in your field of interest.'
    },
    {
      icon: Award,
      title: 'Gain Experience',
      description: 'Develop valuable skills, gain leadership experience, and enhance your resume.'
    },
    {
      icon: Clock,
      title: 'Flexible Schedule',
      description: 'Choose volunteer opportunities that fit your schedule and availability.'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      if (name === 'newsletter') {
        setFormData(prev => ({ ...prev, newsletter: checked }));
      } else {
        // Handle interests checkboxes
        setFormData(prev => ({
          ...prev,
          interests: checked 
            ? [...prev.interests, value]
            : prev.interests.filter(interest => interest !== value)
        }));
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Volunteer application:', formData);
    alert('Thank you for your interest! We will contact you soon with next steps.');
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      interests: [],
      experience: '',
      availability: '',
      motivation: '',
      skills: '',
      newsletter: true
    });
  };

  return (
    <section id="volunteers" className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-gray-800 dark:via-purple-900 dark:to-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
            Join Our <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Movement</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Be part of the change you want to see. Join our community of passionate volunteers working 
            towards gender equality, empowerment, and social justice.
          </p>
        </div>

        {/* Impact Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div className="text-3xl font-bold text-gray-800 dark:text-white mb-2">50+</div>
            <div className="text-gray-600 dark:text-gray-300 text-sm">Active Volunteers</div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <div className="text-3xl font-bold text-gray-800 dark:text-white mb-2">500+</div>
            <div className="text-gray-600 dark:text-gray-300 text-sm">Hours Contributed</div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <div className="text-3xl font-bold text-gray-800 dark:text-white mb-2">1000+</div>
            <div className="text-gray-600 dark:text-gray-300 text-sm">Lives Impacted</div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-6 h-6 text-white" />
            </div>
            <div className="text-3xl font-bold text-gray-800 dark:text-white mb-2">25+</div>
            <div className="text-gray-600 dark:text-gray-300 text-sm">Events Organized</div>
          </div>
        </div>

        {/* Volunteer Areas */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6">
              Ways to <span className="text-purple-600">Contribute</span>
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Choose from various volunteer opportunities that match your interests, skills, and availability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {volunteerAreas.map((area) => (
              <div
                key={area.id}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group transform hover:scale-105"
              >
                <div className="p-8">
                  <div className="text-4xl mb-4">{area.icon}</div>
                  <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-200">
                    {area.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                    {area.description}
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <Clock className="w-4 h-4 mr-2 text-purple-600" />
                      <span>{area.commitment}</span>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Key Skills:</div>
                      <div className="flex flex-wrap gap-1">
                        {area.skills.map((skill, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 text-xs rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6">
              Why <span className="text-purple-600">Volunteer</span> With Us?
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-3">
                  {benefit.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6">
              Volunteer <span className="text-purple-600">Stories</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-bold text-gray-800 dark:text-white">{testimonial.name}</div>
                    <div className="text-purple-600 dark:text-purple-400 text-sm">{testimonial.role}</div>
                    <div className="text-gray-500 dark:text-gray-400 text-xs">Volunteer for {testimonial.duration}</div>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Volunteer Application Form */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-8 text-white text-center">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready to Make a Difference?</h3>
              <p className="text-xl opacity-90">
                Join our community of changemakers and help create a more equitable world.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="p-8">
              {/* Personal Information */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
                  <User className="w-5 h-5 mr-2 text-purple-600" />
                  Personal Information
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-200"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-200"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-200"
                      placeholder="+91 12345 67890"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Availability *
                    </label>
                    <select
                      name="availability"
                      required
                      value={formData.availability}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-200"
                    >
                      <option value="">Select availability</option>
                      <option value="weekends">Weekends only</option>
                      <option value="weekdays">Weekdays only</option>
                      <option value="flexible">Flexible schedule</option>
                      <option value="specific">Specific days/times</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Areas of Interest */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-6">
                  Areas of Interest *
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {volunteerAreas.map((area) => (
                    <label key={area.id} className="flex items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-xl hover:bg-purple-50 dark:hover:bg-purple-900 cursor-pointer transition-colors duration-200">
                      <input
                        type="checkbox"
                        name="interests"
                        value={area.id}
                        checked={formData.interests.includes(area.id)}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500 mr-3"
                      />
                      <div>
                        <div className="font-medium text-gray-800 dark:text-white text-sm">{area.title}</div>
                        <div className="text-gray-600 dark:text-gray-300 text-xs">{area.commitment}</div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Additional Information */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
                  <MessageSquare className="w-5 h-5 mr-2 text-purple-600" />
                  Tell Us More
                </h4>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Previous Experience
                    </label>
                    <textarea
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-200"
                      placeholder="Share any relevant volunteer experience or skills..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      What Motivates You? *
                    </label>
                    <textarea
                      name="motivation"
                      required
                      value={formData.motivation}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-200"
                      placeholder="Tell us why you want to volunteer with Kamakshi & HeForShe..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Skills & Talents
                    </label>
                    <textarea
                      name="skills"
                      value={formData.skills}
                      onChange={handleInputChange}
                      rows={2}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-200"
                      placeholder="List any special skills, talents, or expertise you can contribute..."
                    />
                  </div>
                </div>
              </div>

              {/* Newsletter Subscription */}
              <div className="mb-8">
                <label className="flex items-start">
                  <input
                    type="checkbox"
                    name="newsletter"
                    checked={formData.newsletter}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500 mt-1 mr-3"
                  />
                  <div>
                    <div className="font-medium text-gray-800 dark:text-white text-sm">
                      Subscribe to our newsletter
                    </div>
                    <div className="text-gray-600 dark:text-gray-300 text-xs">
                      Stay updated with volunteer opportunities, events, and impact stories
                    </div>
                  </div>
                </label>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="px-12 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-200 shadow-lg flex items-center mx-auto"
                >
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Submit Application
                </button>
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-4">
                  We'll review your application and get back to you within 3-5 business days.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Volunteers;