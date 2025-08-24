import React, { useState, useEffect } from 'react';
import { ChevronDown, Users, Calendar, Award } from 'lucide-react';

const Hero: React.FC = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const stats = [
    { icon: Users, label: 'Active Members', value: '150+' },
    { icon: Calendar, label: 'Events Organized', value: '25+' },
    { icon: Award, label: 'Awards Won', value: '8' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 dark:from-purple-900 dark:via-pink-900 dark:to-blue-900"></div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-300/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Animated Logo */}
        <div className={`mb-8 transition-all duration-1000 ${
          animate ? 'scale-100 opacity-100' : 'scale-150 opacity-0'
        }`}>
          <div className="w-24 h-24 mx-auto bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-full flex items-center justify-center mb-6 shadow-2xl animate-bounce">
            <span className="text-white font-bold text-3xl">K</span>
          </div>
        </div>

        {/* Main Content */}
        <div className={`transition-all duration-1000 delay-300 ${
          animate ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 dark:text-white mb-6">
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              Kamakshi & HeForShe
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4 max-w-4xl mx-auto leading-relaxed">
            Empowering all genders through equality, awareness, and inclusive community building
          </p>

          <div className="text-lg md:text-xl font-semibold text-purple-600 dark:text-purple-400 mb-12">
            💜 "Equality, Empowerment, Expression" 💜
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button 
              onClick={() => document.getElementById('volunteers')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Join Our Movement
            </button>
            <button 
              onClick={() => document.getElementById('mission')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 border-2 border-purple-600 text-purple-600 dark:text-purple-400 dark:border-purple-400 font-semibold rounded-full hover:bg-purple-600 hover:text-white dark:hover:bg-purple-400 dark:hover:text-gray-900 transform hover:scale-105 transition-all duration-200"
            >
              Learn More
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className={`bg-white/80 dark:bg-gray-800/80 p-6 rounded-2xl shadow-lg backdrop-blur-sm transition-all duration-500 delay-${(index + 1) * 200} ${
                animate ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              } hover:transform hover:scale-105`}>
                <stat.icon className="w-8 h-8 text-purple-600 dark:text-purple-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-800 dark:text-white mb-1">{stat.value}</div>
                <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-gray-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;