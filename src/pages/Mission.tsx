import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Lightbulb, Globe, Award, Heart } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import Card from '../components/Card';

const Mission: React.FC = () => {
  const values = [
    {
      icon: Target,
      title: 'Equality',
      description: 'Advocating for equal rights and opportunities regardless of gender, race, or background.',
      color: 'from-treepurple-500 to-treegreen-400'
    },
    {
      icon: Users,
      title: 'Empowerment',
      description: 'Providing tools, knowledge, and support to help individuals reach their full potential.',
      color: 'from-treegreen-500 to-treepurple-300'
    },
    {
      icon: Lightbulb,
      title: 'Expression',
      description: 'Creating safe spaces for authentic self-expression and meaningful dialogue.',
      color: 'from-treegreen-400 to-treepurple-400'
    }
  ];

  const achievements = [
    { year: '2024', milestone: 'Reached 250+ active members across campus' },
    { year: '2023', milestone: 'Launched the "Know Your Rights" educational series' },
    { year: '2023', milestone: 'Organized first inter-college gender equality summit' },
    { year: '2022', milestone: 'Established partnership with local NGOs and legal aid centers' },
    { year: '2022', milestone: 'Founded Kamakshi & HeForShe Society' }
  ];

  const testimonials = [
    {
      name: 'Dr. Priya Sharma',
      role: 'Faculty Advisor',
      text: 'The dedication and impact of this society continues to inspire me. Their approach to gender equality education is both comprehensive and compassionate.',
      image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Rahul Patel',
      role: 'Student Member',
      text: 'Joining this society opened my eyes to the importance of allyship. The workshops and discussions have made me a better advocate for equality.',
      image: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Anita Desai',
      role: 'Alumni & Mentor',
      text: 'Even after graduation, I remain connected to this community. The bonds formed here and the mission we shared continue to guide my professional work.',
      image: 'https://images.pexels.com/photos/3768911/pexels-photo-3768911.jpeg?auto=compress&cs=tinysrgb&w=300'
    }
  ];

  return (
    <div>
      <PageHeader
        title="Our Mission"
        subtitle="Building bridges of understanding, creating waves of change, and fostering a community where everyone belongs."
        gradient="from-treepurple-500 via-treegreen-400 to-treegreen-200"
      />

      {/* Mission Statement */}
  <div className="py-16 bg-gradient-to-b from-treegreen-50 via-treepurple-50 to-treegreen-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              What We Stand For
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Kamakshi & HeForShe is more than a society—we're a movement dedicated to creating a world where gender equality isn't just an ideal, but a lived reality. Through education, advocacy, and community building, we work to dismantle barriers and build bridges of understanding.
            </p>
          </motion.div>

          {/* Core Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="text-center p-8 h-full">
                  <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-r ${value.color} rounded-full flex items-center justify-center`}>
                    <value.icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{value.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Vision Section */}
          <div className="py-16 bg-gradient-to-r from-treepurple-100 to-treegreen-100 dark:from-gray-800 dark:to-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center mb-6">
                <Globe className="text-purple-600 mr-3" size={32} />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                We envision a future where every individual, regardless of their gender identity, has equal access to opportunities, resources, and respect. Our work today shapes the inclusive tomorrow we want to see.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Award className="text-purple-600 mt-1" size={20} />
                  <p className="text-gray-700 dark:text-gray-300">Creating educational programs that raise awareness about gender rights and equality</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Heart className="text-pink-600 mt-1" size={20} />
                  <p className="text-gray-700 dark:text-gray-300">Building supportive communities where every voice is heard and valued</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="text-blue-600 mt-1" size={20} />
                  <p className="text-gray-700 dark:text-gray-300">Empowering individuals to become advocates and changemakers in their communities</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Team collaboration"
                className="rounded-lg shadow-xl w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg"></div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Timeline */}
  <div className="py-16 bg-gradient-to-b from-treegreen-50 via-treepurple-50 to-treegreen-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Key milestones in our mission to promote gender equality</p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-600 to-pink-600"></div>
            
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center mb-8 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <Card className="p-6">
                    <div className="text-lg font-bold text-purple-600 dark:text-purple-400 mb-2">{achievement.year}</div>
                    <p className="text-gray-700 dark:text-gray-300">{achievement.milestone}</p>
                  </Card>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-600 rounded-full border-4 border-white dark:border-gray-900"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
  <div className="py-16 bg-gradient-to-b from-treegreen-100 via-treepurple-50 to-treegreen-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">What Our Community Says</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Voices from our members, advisors, and partners</p>
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
                    className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{testimonial.name}</h4>
                  <p className="text-purple-600 dark:text-purple-400 text-sm mb-4">{testimonial.role}</p>
                  <p className="text-gray-600 dark:text-gray-300 italic">"{testimonial.text}"</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;