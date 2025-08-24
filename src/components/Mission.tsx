import React from 'react';
import { Heart, Users, Lightbulb, Target } from 'lucide-react';

const Mission: React.FC = () => {
  const values = [
    {
      icon: Heart,
      title: 'Equality',
      description: 'Creating a world where all genders have equal opportunities and representation.',
    },
    {
      icon: Users,
      title: 'Empowerment',
      description: 'Building confidence and skills to help individuals reach their full potential.',
    },
    {
      icon: Lightbulb,
      title: 'Expression',
      description: 'Providing safe spaces for authentic self-expression and meaningful dialogue.',
    },
    {
      icon: Target,
      title: 'Impact',
      description: 'Driving real change through education, advocacy, and community action.',
    },
  ];

  const testimonials = [
    {
      quote: "Kamakshi & HeForShe has been a transformative experience. It's more than just a society - it's a movement that empowers every voice.",
      author: "Priya Sharma",
      role: "Former President"
    },
    {
      quote: "The inclusive environment here helped me find my voice and understand the importance of gender equality in all aspects of life.",
      author: "Arjun Patel",
      role: "Active Member"
    },
    {
      quote: "Through workshops and events, I learned about rights I never knew I had. This society is truly changing lives.",
      author: "Sneha Reddy",
      role: "Volunteer Coordinator"
    }
  ];

  return (
    <section id="mission" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
            Our <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Mission</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We are a college-based gender empowerment society committed to creating inclusive spaces 
            where all genders can thrive through education, advocacy, and community building.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <value.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Vision Statement */}
        <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-3xl p-12 text-center text-white mb-20">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">Our Vision</h3>
          <p className="text-xl leading-relaxed max-w-4xl mx-auto">
            "To create a society where gender equality is not just an ideal, but a lived reality. 
            Where every individual, regardless of gender, has the opportunity to express themselves 
            authentically, pursue their dreams without barriers, and contribute to building a more 
            inclusive and equitable world for future generations."
          </p>
        </div>

        {/* Testimonials */}
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6">
            Voices from Our <span className="text-purple-600">Community</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-purple-600"
            >
              <p className="text-gray-600 dark:text-gray-300 mb-6 italic leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-gray-800 dark:text-white">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;