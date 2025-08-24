import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Scale, BookOpen, AlertCircle, Send, CheckCircle, Shield, Heart, Users } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import Card from '../components/Card';
import BackgroundArt from '../components/BackgroundArt';

const Rights: React.FC = () => {
  const [newsSubmission, setNewsSubmission] = useState({
    title: '',
    content: '',
    source: '',
    submitterName: '',
    submitterEmail: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const rightsCategories = [
    {
      icon: Scale,
      title: 'Constitutional Rights',
      description: 'Fundamental rights guaranteed by the Indian Constitution',
      rights: [
        'Right to Equality (Article 14)',
        'Right against Discrimination (Article 15)',
        'Right to Life and Personal Liberty (Article 21)',
        'Right to Education (Article 21A)',
        'Right to Constitutional Remedies (Article 32)'
      ],
      color: 'from-blue-600 to-blue-400'
    },
    {
      icon: Shield,
      title: 'Workplace Rights',
      description: 'Legal protections in professional environments',
      rights: [
        'Equal Pay for Equal Work',
        'Maternity Benefits (Maternity Benefit Act, 1961)',
        'Prevention of Sexual Harassment (POSH Act, 2013)',
        'Right to Safe Working Conditions',
        'Protection against Gender Discrimination'
      ],
      color: 'from-purple-600 to-purple-400'
    },
    {
      icon: Heart,
      title: 'Personal & Family Rights',
      description: 'Rights related to personal and family matters',
      rights: [
        'Right to Marriage and Divorce',
        'Right to Property Ownership',
        'Protection against Domestic Violence (DV Act, 2005)',
        'Custody and Guardianship Rights',
        'Right to Maintenance and Support'
      ],
      color: 'from-pink-600 to-pink-400'
    },
    {
      icon: Users,
      title: 'Social & Political Rights',
      description: 'Rights for participation in social and political life',
      rights: [
        'Right to Vote and Political Participation',
        'Right to Freedom of Expression',
        'Right to Assembly and Association',
        'Right to Access Public Places',
        'Right to Social Security and Welfare'
      ],
      color: 'from-green-600 to-green-400'
    }
  ];

  const importantLaws = [
    {
      title: 'Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013',
      description: 'Comprehensive law to prevent and redress sexual harassment at workplace',
      keyPoints: [
        'Mandatory Internal Complaints Committee (ICC)',
        'Protection from retaliation',
        'Interim relief during inquiry',
        'Confidentiality maintenance'
      ]
    },
    {
      title: 'Protection of Women from Domestic Violence Act, 2005',
      description: 'Civil law providing protection from domestic violence',
      keyPoints: [
        'Protection orders from courts',
        'Residence orders',
        'Monetary relief',
        'Custody orders for children'
      ]
    },
    {
      title: 'Dowry Prohibition Act, 1961',
      description: 'Prohibits giving, taking, or demanding dowry',
      keyPoints: [
        'Punishment for giving/taking dowry',
        'Advertisement prohibition',
        'Special courts for trials',
        'Burden of proof on accused'
      ]
    },
    {
      title: 'Equal Remuneration Act, 1976',
      description: 'Ensures equal pay for equal work regardless of gender',
      keyPoints: [
        'Equal wages for same work',
        'No gender discrimination in recruitment',
        'Advisory committees',
        'Penalty for violations'
      ]
    }
  ];

  const helplineNumbers = [
    { name: 'National Women Helpline', number: '1091', available: '24/7' },
    { name: 'Women in Distress', number: '1092', available: '24/7' },
    { name: 'Domestic Violence Helpline', number: '181', available: '24/7' },
    { name: 'Child Marriage Prohibition', number: '1098', available: '24/7' },
    { name: 'Legal Aid', number: '15100', available: 'Mon-Fri, 10AM-6PM' }
  ];

  const handleSubmission = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to backend
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setNewsSubmission({
        title: '',
        content: '',
        source: '',
        submitterName: '',
        submitterEmail: ''
      });
    }, 3000);
  };

  return (
    <div className="relative">
      <BackgroundArt />
      <PageHeader
        title="Know Your Rights"
        subtitle="Understanding legal protections and resources for gender equality"
        gradient="from-treepurple-500 via-treegreen-400 to-treegreen-200"
      />

      {/* Rights Categories */}
  <div className="py-16 bg-gradient-to-b from-treegreen-50 via-treepurple-50 to-treegreen-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Your Fundamental Rights
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Knowledge is power. Understanding your rights is the first step toward equality and justice.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {rightsCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full">
                  <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-full flex items-center justify-center mb-4`}>
                    <category.icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{category.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{category.description}</p>
                  <ul className="space-y-2">
                    {category.rights.map((right, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <CheckCircle size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700 dark:text-gray-300">{right}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Important Laws */}
      <div className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Key Legal Protections
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Important laws that protect and empower women in various aspects of life
            </p>
          </motion.div>

            <div className="py-16 bg-gradient-to-b from-treegreen-50 via-treepurple-50 to-treegreen-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
            {importantLaws.map((law, index) => (
              <motion.div
                key={law.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full">
                  <div className="flex items-start space-x-3 mb-4">
                    <BookOpen className="text-purple-600 mt-1" size={24} />
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">{law.title}</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{law.description}</p>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Provisions:</h4>
                    <ul className="space-y-1">
                      {law.keyPoints.map((point, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-gray-700 dark:text-gray-300">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Helpline Numbers */}
      <div className="py-16 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Emergency Helplines</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Important numbers for immediate help and support
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {helplineNumbers.map((helpline, index) => (
              <motion.div
                key={helpline.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-md rounded-lg p-6 text-center text-white"
              >
                <h3 className="text-lg font-semibold mb-2">{helpline.name}</h3>
                <div className="text-3xl font-bold mb-2">{helpline.number}</div>
                <div className="text-sm opacity-80">{helpline.available}</div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center mt-8"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 max-w-2xl mx-auto">
              <AlertCircle className="mx-auto mb-4 text-yellow-300" size={48} />
              <h3 className="text-xl font-semibold text-white mb-2">Emergency Protocol</h3>
              <p className="text-white/90">
                In case of immediate danger, call 100 (Police) or 108 (Emergency Services) first. 
                These helplines provide specialized support and guidance.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* News Submission Form */}
      <div className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Submit News & Updates
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Help us keep the community informed about important legal updates and news
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
                  Submission Received!
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Thank you for your submission. Our team will review and verify the information before publishing.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmission} className="space-y-6">
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    News Title *
                  </label>
                  <input
                    type="text"
                    id="title"
                    required
                    value={newsSubmission.title}
                    onChange={(e) => setNewsSubmission({...newsSubmission, title: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
                    placeholder="Enter the news title"
                  />
                </div>

                <div>
                  <label htmlFor="content" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Content *
                  </label>
                  <textarea
                    id="content"
                    required
                    rows={6}
                    value={newsSubmission.content}
                    onChange={(e) => setNewsSubmission({...newsSubmission, content: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
                    placeholder="Provide detailed information about the news or update"
                  />
                </div>

                <div>
                  <label htmlFor="source" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Source/Reference
                  </label>
                  <input
                    type="url"
                    id="source"
                    value={newsSubmission.source}
                    onChange={(e) => setNewsSubmission({...newsSubmission, source: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
                    placeholder="https://example.com (optional)"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="submitterName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="submitterName"
                      required
                      value={newsSubmission.submitterName}
                      onChange={(e) => setNewsSubmission({...newsSubmission, submitterName: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="submitterEmail" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="submitterEmail"
                      required
                      value={newsSubmission.submitterEmail}
                      onChange={(e) => setNewsSubmission({...newsSubmission, submitterEmail: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg p-4">
                  <div className="flex items-start space-x-2">
                    <AlertCircle size={20} className="text-yellow-600 dark:text-yellow-400 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-yellow-800 dark:text-yellow-200 mb-1">Verification Process</h4>
                      <p className="text-sm text-yellow-700 dark:text-yellow-300">
                        All submissions are reviewed by our admin team for accuracy and relevance before being published. 
                        We may contact you for additional information if needed.
                      </p>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center space-x-2 font-medium"
                >
                  <Send size={20} />
                  <span>Submit for Review</span>
                </button>
              </form>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Rights;