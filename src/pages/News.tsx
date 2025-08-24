import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Newspaper, TrendingUp, Calendar, ExternalLink, Eye, Heart, Share, Search, Filter, Star } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import Card from '../components/Card';

const News: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { key: 'all', label: 'All News' },
    { key: 'legal', label: 'Legal Updates' },
    { key: 'policy', label: 'Policy Changes' },
    { key: 'inspiration', label: 'Inspiring Stories' },
    { key: 'awareness', label: 'Awareness' },
    { key: 'global', label: 'Global News' }
  ];

  const newsArticles = [
    {
      id: 1,
      title: 'Supreme Court Strengthens Workplace Harassment Prevention',
      excerpt: 'New guidelines mandate stricter compliance with POSH Act, ensuring safer workplaces for women across all sectors.',
      content: 'The Supreme Court has issued comprehensive guidelines strengthening the Prevention of Sexual Harassment (POSH) Act implementation...',
      category: 'legal',
      date: '2024-11-20',
      readTime: '4 min read',
      views: 2340,
      likes: 89,
      featured: true,
      source: 'The Hindu',
      sourceUrl: '#',
      image: 'https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Supreme Court', 'POSH Act', 'Workplace Safety']
    },
    {
      id: 2,
      title: 'Global Gender Gap Report 2024: India\'s Progress',
      excerpt: 'India improves its ranking in the Global Gender Gap Index, showing significant progress in education and health outcomes.',
      content: 'The World Economic Forum\'s latest Global Gender Gap Report shows India has made notable strides...',
      category: 'global',
      date: '2024-11-18',
      readTime: '6 min read',
      views: 1890,
      likes: 134,
      featured: true,
      source: 'Economic Times',
      sourceUrl: '#',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Gender Gap', 'Global Report', 'Progress']
    },
    {
      id: 3,
      title: 'New Maternity Leave Amendments Benefit Working Mothers',
      excerpt: 'Government announces extended maternity leave provisions and flexible work arrangements for new mothers in public sector.',
      content: 'The Ministry of Personnel has announced significant amendments to maternity leave policies...',
      category: 'policy',
      date: '2024-11-15',
      readTime: '5 min read',
      views: 3450,
      likes: 201,
      featured: false,
      source: 'Times of India',
      sourceUrl: '#',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Maternity Leave', 'Policy', 'Working Mothers']
    },
    {
      id: 4,
      title: 'Teen Activist Wins National Award for Gender Equality Work',
      excerpt: 'Priya Sharma, 17, receives recognition for her grassroots campaign that reached over 10,000 students across rural schools.',
      content: 'At just 17 years old, Priya Sharma has become a beacon of hope for gender equality in rural India...',
      category: 'inspiration',
      date: '2024-11-12',
      readTime: '3 min read',
      views: 4200,
      likes: 312,
      featured: true,
      source: 'Indian Express',
      sourceUrl: '#',
      image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Youth Activism', 'Awards', 'Rural Education']
    },
    {
      id: 5,
      title: 'Digital Safety Guidelines for Women Released',
      excerpt: 'Ministry of Electronics and IT launches comprehensive digital safety framework addressing online harassment and privacy.',
      content: 'The government has released new guidelines aimed at protecting women in digital spaces...',
      category: 'awareness',
      date: '2024-11-10',
      readTime: '7 min read',
      views: 1650,
      likes: 78,
      featured: false,
      source: 'Livemint',
      sourceUrl: '#',
      image: 'https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Digital Safety', 'Guidelines', 'Online Security']
    },
    {
      id: 6,
      title: 'Women Entrepreneurs Breaking Barriers in Tech',
      excerpt: 'Study shows 40% increase in women-led tech startups, challenging traditional gender stereotypes in the industry.',
      content: 'A recent study by the Startup Association reveals a remarkable trend in the tech industry...',
      category: 'inspiration',
      date: '2024-11-08',
      readTime: '8 min read',
      views: 2890,
      likes: 156,
      featured: false,
      source: 'Business Standard',
      sourceUrl: '#',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Women Entrepreneurs', 'Technology', 'Startups']
    },
    {
      id: 7,
      title: 'UN Women Launches New Initiative in India',
      excerpt: 'Partnership with Indian government aims to empower 1 million women through skill development and economic opportunities.',
      content: 'UN Women has announced a groundbreaking partnership with the Government of India...',
      category: 'global',
      date: '2024-11-05',
      readTime: '5 min read',
      views: 2150,
      likes: 189,
      featured: false,
      source: 'The Wire',
      sourceUrl: '#',
      image: 'https://images.pexels.com/photos/3768911/pexels-photo-3768911.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['UN Women', 'Skill Development', 'Economic Empowerment']
    },
    {
      id: 8,
      title: 'Legal Aid for Women: New Free Consultation Program',
      excerpt: 'Bar Council of India launches nationwide program providing free legal consultation for women facing harassment or discrimination.',
      content: 'The Bar Council of India has initiated a comprehensive legal aid program...',
      category: 'legal',
      date: '2024-11-03',
      readTime: '4 min read',
      views: 1780,
      likes: 95,
      featured: false,
      source: 'Legal News India',
      sourceUrl: '#',
      image: 'https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Legal Aid', 'Free Consultation', 'Bar Council']
    }
  ];

  const filteredArticles = newsArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredArticles = filteredArticles.filter(article => article.featured);
  const regularArticles = filteredArticles.filter(article => !article.featured);

  const inspiringStories = [
    {
      title: 'From Village to Parliament',
      description: 'How Sita Devi overcame poverty and discrimination to become the youngest woman MP',
      image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=300',
      achievement: 'Youngest Woman MP at 28'
    },
    {
      title: 'The STEM Pioneer',
      description: 'Dr. Kavitha Menon breaks glass ceiling as first woman to lead space mission',
      image: 'https://images.pexels.com/photos/3768911/pexels-photo-3768911.jpeg?auto=compress&cs=tinysrgb&w=300',
      achievement: 'First Woman Mission Director'
    },
    {
      title: 'Social Entrepreneur',
      description: 'Reshma Khan\'s NGO has educated over 50,000 girls in rural Rajasthan',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=300',
      achievement: '50,000+ Girls Educated'
    }
  ];

  return (
    <div>
      <PageHeader
        title="News & Inspiration"
        subtitle="Stay informed about gender rights, policy changes, and inspiring stories of change"
        gradient="from-blue-600 via-purple-600 to-orange-600"
      />

      {/* Search and Filter */}
      <div className="py-8 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search news, topics, or tags..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
                />
              </div>
            </div>
            <div className="lg:w-64">
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-800 dark:text-white appearance-none"
                >
                  {categories.map(category => (
                    <option key={category.key} value={category.key}>
                      {category.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Articles */}
      {featuredArticles.length > 0 && (
        <div className="py-16 bg-gradient-to-r from-purple-50 to-orange-50 dark:from-gray-800 dark:to-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <div className="flex items-center justify-center mb-4">
                <TrendingUp className="text-purple-600 mr-2" size={32} />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Breaking News</h2>
              </div>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Latest updates on gender equality and women's rights
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {featuredArticles.slice(0, 3).map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Card className="h-full overflow-hidden group cursor-pointer">
                    <div className="relative">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Breaking
                      </div>
                      <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                        {article.readTime}
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 px-2 py-1 rounded text-sm">
                          {categories.find(cat => cat.key === article.category)?.label}
                        </span>
                        <div className="flex items-center space-x-2 text-gray-500 text-sm">
                          <Calendar size={14} />
                          <span>{new Date(article.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-purple-600 transition-colors">
                        {article.title}
                      </h3>
                      
                      <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                        {article.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-4 text-gray-500">
                          <div className="flex items-center space-x-1">
                            <Eye size={14} />
                            <span>{article.views}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Heart size={14} />
                            <span>{article.likes}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-gray-500">Source:</span>
                          <span className="font-medium text-gray-700 dark:text-gray-300">{article.source}</span>
                          <ExternalLink size={14} className="text-purple-600" />
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Regular Articles */}
      <div className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Latest Updates
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              {filteredArticles.length} {filteredArticles.length === 1 ? 'article' : 'articles'} found
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularArticles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full overflow-hidden group cursor-pointer">
                  <div className="relative">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                      {article.readTime}
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs">
                        {categories.find(cat => cat.key === article.category)?.label}
                      </span>
                      <div className="flex items-center space-x-1 text-gray-500 text-xs">
                        <Calendar size={12} />
                        <span>{new Date(article.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-purple-600 transition-colors">
                      {article.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-3 line-clamp-2 text-sm">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center space-x-3 text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Eye size={12} />
                          <span>{article.views}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Heart size={12} />
                          <span>{article.likes}</span>
                        </div>
                      </div>
                      <span className="text-gray-500">{article.source}</span>
                    </div>

                    <div className="mt-3 flex flex-wrap gap-1">
                      {article.tags.slice(0, 2).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 px-2 py-1 rounded text-xs"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-12"
            >
              <Newspaper size={64} className="text-gray-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">No articles found</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Try adjusting your search terms or filters to find what you're looking for.
              </p>
            </motion.div>
          )}
        </div>
      </div>

      {/* Inspiring Stories Sidebar */}
      <div className="py-16 bg-gradient-to-r from-orange-50 to-pink-50 dark:from-gray-800 dark:to-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center mb-4">
              <Star className="text-orange-500 mr-2" size={32} />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Inspiring Stories</h2>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Celebrating women who are making a difference
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {inspiringStories.map((story, index) => (
              <motion.div
                key={story.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="text-center p-6">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{story.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{story.description}</p>
                  <div className="bg-orange-100 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 px-3 py-2 rounded-full text-sm font-medium">
                    {story.achievement}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter & Submission CTA */}
      <div className="py-16 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Stay Informed & Share Stories
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Get the latest updates on gender equality and share inspiring stories from your community
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
              >
                <Newspaper size={18} />
                <span>Subscribe to Updates</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-colors flex items-center justify-center space-x-2"
              >
                <Share size={18} />
                <span>Submit News</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default News;