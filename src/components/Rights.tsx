import React, { useState } from 'react';
import { Scale, FileText, AlertTriangle, CheckCircle, ExternalLink, Send } from 'lucide-react';

const Rights: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('workplace');
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    source: '',
    category: 'legal',
    submitterName: '',
    submitterEmail: ''
  });

  const categories = [
    { id: 'workplace', label: 'Workplace Rights', icon: '💼' },
    { id: 'education', label: 'Educational Rights', icon: '🎓' },
    { id: 'legal', label: 'Legal Rights', icon: '⚖️' },
    { id: 'health', label: 'Health Rights', icon: '🏥' },
    { id: 'safety', label: 'Safety & Protection', icon: '🛡️' }
  ];

  const rightsData = {
    workplace: [
      {
        title: 'Equal Pay Act',
        description: 'Women have the right to equal pay for equal work. Discrimination in wages based on gender is illegal.',
        importance: 'high',
        resources: ['Labor Department Guidelines', 'Filing Complaints Process']
      },
      {
        title: 'Maternity Leave',
        description: 'Entitled to 26 weeks of paid maternity leave with job security under the Maternity Benefit Act.',
        importance: 'high',
        resources: ['Maternity Benefit Act 2017', 'Company Policy Guidelines']
      },
      {
        title: 'Sexual Harassment Prevention',
        description: 'Right to work in an environment free from sexual harassment with mandatory Internal Complaints Committee.',
        importance: 'critical',
        resources: ['POSH Act 2013', 'Complaint Filing Procedure']
      }
    ],
    education: [
      {
        title: 'Right to Education',
        description: 'Equal access to education at all levels without gender-based discrimination.',
        importance: 'high',
        resources: ['Right to Education Act', 'UGC Guidelines']
      },
      {
        title: 'Scholarship Programs',
        description: 'Special scholarships and financial assistance programs for girls and women in education.',
        importance: 'medium',
        resources: ['Government Scholarship Portal', 'Merit-based Programs']
      }
    ],
    legal: [
      {
        title: 'Domestic Violence Act',
        description: 'Protection from domestic violence with legal remedies including protection orders and shelter.',
        importance: 'critical',
        resources: ['Domestic Violence Act 2005', '1091 Helpline']
      },
      {
        title: 'Property Rights',
        description: 'Equal inheritance rights and property ownership for women under various personal laws.',
        importance: 'high',
        resources: ['Hindu Succession Act', 'Legal Aid Services']
      }
    ],
    health: [
      {
        title: 'Reproductive Rights',
        description: 'Right to reproductive health services, contraception, and safe abortion services.',
        importance: 'critical',
        resources: ['National Health Mission', 'Government Health Centers']
      }
    ],
    safety: [
      {
        title: 'Women Safety Apps',
        description: 'Access to emergency response systems and safety applications for immediate help.',
        importance: 'critical',
        resources: ['Himmat App', 'Police Emergency Services']
      }
    ]
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      title: '',
      description: '',
      source: '',
      category: 'legal',
      submitterName: '',
      submitterEmail: ''
    });
    alert('Thank you for your submission! We will review and verify the information.');
  };

  const getImportanceColor = (importance: string) => {
    switch (importance) {
      case 'critical': return 'text-red-600 bg-red-100 dark:bg-red-900 dark:text-red-300';
      case 'high': return 'text-orange-600 bg-orange-100 dark:bg-orange-900 dark:text-orange-300';
      case 'medium': return 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900 dark:text-yellow-300';
      default: return 'text-green-600 bg-green-100 dark:bg-green-900 dark:text-green-300';
    }
  };

  return (
    <section id="rights" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
            Know Your <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Rights</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Knowledge is power. Understanding your rights is the first step towards empowerment and equality. 
            Explore comprehensive information about legal rights, workplace protections, and available resources.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 rounded-2xl text-center">
            <Scale className="w-8 h-8 mx-auto mb-2" />
            <div className="text-2xl font-bold">50+</div>
            <div className="text-sm">Legal Rights Covered</div>
          </div>
          <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-6 rounded-2xl text-center">
            <FileText className="w-8 h-8 mx-auto mb-2" />
            <div className="text-2xl font-bold">25+</div>
            <div className="text-sm">Resource Documents</div>
          </div>
          <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white p-6 rounded-2xl text-center">
            <CheckCircle className="w-8 h-8 mx-auto mb-2" />
            <div className="text-2xl font-bold">100+</div>
            <div className="text-sm">Students Educated</div>
          </div>
          <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-6 rounded-2xl text-center">
            <AlertTriangle className="w-8 h-8 mx-auto mb-2" />
            <div className="text-2xl font-bold">24/7</div>
            <div className="text-sm">Support Available</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Categories Sidebar */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Categories</h3>
            <div className="space-y-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{category.icon}</span>
                    <span className="font-medium">{category.label}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Rights Content */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
                {categories.find(c => c.id === selectedCategory)?.label}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Essential information about your rights and protections in this area.
              </p>
            </div>

            <div className="space-y-6">
              {rightsData[selectedCategory as keyof typeof rightsData]?.map((right, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-600 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h4 className="text-xl font-bold text-gray-800 dark:text-white">
                      {right.title}
                    </h4>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getImportanceColor(right.importance)}`}>
                      {right.importance.toUpperCase()}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {right.description}
                  </p>
                  
                  <div className="border-t pt-4">
                    <h5 className="text-sm font-semibold text-gray-800 dark:text-white mb-2">Resources:</h5>
                    <div className="flex flex-wrap gap-2">
                      {right.resources.map((resource, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs rounded-full cursor-pointer hover:bg-purple-200 dark:hover:bg-purple-800 transition-colors duration-200"
                        >
                          {resource}
                          <ExternalLink className="w-3 h-3 ml-1" />
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Submission Form */}
        <div className="mt-20">
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-12">
            <div className="text-center mb-8">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
                Contribute to Our Knowledge Base
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Know about a legal update, new law, or important resource? Help us keep our community informed by submitting verified information.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Title *
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    required
                    value={formData.title}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-200"
                    placeholder="e.g., New Maternity Leave Policy Update"
                  />
                </div>
                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Category *
                  </label>
                  <select
                    id="category"
                    name="category"
                    required
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-200"
                  >
                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Description *
                </label>
                <textarea
                  id="description"
                  name="description"
                  required
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-200"
                  placeholder="Provide detailed information about the right, law, or update..."
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div>
                  <label htmlFor="source" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Source/Reference
                  </label>
                  <input
                    type="text"
                    id="source"
                    name="source"
                    value={formData.source}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-200"
                    placeholder="Official website, act name, etc."
                  />
                </div>
                <div>
                  <label htmlFor="submitterName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="submitterName"
                    name="submitterName"
                    required
                    value={formData.submitterName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-200"
                  />
                </div>
                <div>
                  <label htmlFor="submitterEmail" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="submitterEmail"
                    name="submitterEmail"
                    required
                    value={formData.submitterEmail}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-200"
                  />
                </div>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Submit Information
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rights;