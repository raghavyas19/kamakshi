import React, { useState } from 'react';
import { Newspaper, TrendingUp, Calendar, ExternalLink, Filter, Search, Heart, Share2 } from 'lucide-react';

const News: React.FC = () => {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const newsCategories = [
    { id: 'all', label: 'All News', count: 18 },
    { id: 'laws', label: 'Laws & Reforms', count: 6 },
    { id: 'achievements', label: 'Achievements', count: 4 },
    { id: 'inspiration', label: 'Inspiration', count: 5 },
    { id: 'global', label: 'Global Updates', count: 3 }
  ];

  const newsArticles = [
    {
      id: 1,
      title: 'New Amendment Strengthens Workplace Harassment Laws',
      excerpt: 'Recent amendments to the POSH Act introduce stricter penalties and expanded coverage for workplace sexual harassment prevention.',
      content: 'The Ministry of Women and Child Development has announced significant amendments to the Prevention of Sexual Harassment (POSH) Act, enhancing protection for women in workplace environments...',
      category: 'laws',
      date: '2024-03-18',
      source: 'Ministry of WCD',
      featured: true,
      verified: true,
      impact: 'high',
      image: 'https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg?auto=compress&cs=tinysrgb&w=400',
      tags: ['POSH Act', 'Workplace Safety', 'Legal Reform'],
      externalLink: '#'
    },
    {
      id: 2,
      title: 'Indian Women Win International STEM Competition',
      excerpt: 'Team of four Indian women students wins prestigious global technology competition, showcasing innovation in AI healthcare solutions.',
      content: 'A remarkable team of Indian women engineering students has secured first place in the International STEM Innovation Challenge 2024...',
      category: 'achievements',
      date: '2024-03-15',
      source: 'Education Ministry',
      featured: true,
      verified: true,
      impact: 'high',
      image: 'https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg?auto=compress&cs=tinysrgb&w=400',
      tags: ['STEM', 'Achievement', 'Innovation'],
      externalLink: '#'
    },
    {
      id: 3,
      title: 'Supreme Court Ruling on Equal Inheritance Rights',
      excerpt: 'Landmark judgment ensures daughters have equal rights to ancestral property, regardless of when the father died.',
      content: 'In a groundbreaking verdict, the Supreme Court has ruled that daughters have equal inheritance rights to ancestral property...',
      category: 'laws',
      date: '2024-03-12',
      source: 'Supreme Court of India',
      featured: false,
      verified: true,
      impact: 'critical',
      image: 'https://images.pexels.com/photos/3184302/pexels-photo-3184302.jpeg?auto=compress&cs=tinysrgb&w=400',
      tags: ['Property Rights', 'Legal Victory', 'Inheritance'],
      externalLink: '#'
    },
    {
      id: 4,
      title: 'Women-Led Startups Show 40% Growth in 2024',
      excerpt: 'New report reveals significant increase in women entrepreneurs, with female-led startups showing remarkable growth and innovation.',
      content: 'According to the latest startup ecosystem report, women-led startups in India have demonstrated exceptional performance...',
      category: 'achievements',
      date: '2024-03-10',
      source: 'Startup India Initiative',
      featured: false,
      verified: true,
      impact: 'medium',
      image: 'https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=400',
      tags: ['Entrepreneurship', 'Startups', 'Economic Growth'],
      externalLink: '#'
    },
    {
      id: 5,
      title: 'From Adversity to Advocacy: Rural Teacher\'s Journey',
      excerpt: 'Inspiring story of a rural teacher who overcame personal challenges to become a leading voice for girls\' education in her district.',
      content: 'Sunita Devi\'s journey from a shy rural girl to an influential educator and advocate is nothing short of inspiring...',
      category: 'inspiration',
      date: '2024-03-08',
      source: 'Community Contributor',
      featured: true,
      verified: true,
      impact: 'medium',
      image: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=400',
      tags: ['Education', 'Rural Development', 'Inspiration'],
      externalLink: '#'
    },
    {
      id: 6,
      title: 'Global Gender Pay Gap Narrows to 16%',
      excerpt: 'World Economic Forum report shows progress in closing gender pay gap globally, though significant work remains.',
      content: 'The latest Global Gender Gap Report 2024 reveals encouraging trends in wage equality while highlighting areas needing attention...',
      category: 'global',
      date: '2024-03-05',
      source: 'World Economic Forum',
      featured: false,
      verified: true,
      impact: 'medium',
      image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=400',
      tags: ['Pay Gap', 'Global Trends', 'Economic Equality'],
      externalLink: '#'
    }
  ];

  const filteredNews = newsArticles.filter(article => {
    const matchesFilter = filter === 'all' || article.category === filter;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  const featuredNews = newsArticles.filter(article => article.featured);
  const trendingNews = [...newsArticles].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 3);

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'critical': return 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300';
      case 'high': return 'bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300';
      case 'medium': return 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300';
      default: return 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300';
    }
  };

  return (
    <section id="news" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
            News & <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Inspiration</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Stay informed about the latest developments in gender equality, legal reforms, inspiring achievements, 
            and global progress in women's rights and empowerment.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col lg:flex-row gap-6 mb-12">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search news articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-200"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 lg:gap-4">
            {newsCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  filter === category.id
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600'
                }`}
              >
                {category.label} ({category.count})
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured News */}
            {filter === 'all' && (
              <div className="mb-16">
                <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 flex items-center">
                  <TrendingUp className="w-8 h-8 mr-3 text-purple-600" />
                  Featured Stories
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {featuredNews.slice(0, 2).map((article) => (
                    <div
                      key={article.id}
                      className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group transform hover:scale-105"
                    >
                      <div className="relative h-48">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute top-4 left-4 flex gap-2">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getImpactColor(article.impact)}`}>
                            {article.impact.toUpperCase()} IMPACT
                          </span>
                          {article.verified && (
                            <span className="px-2 py-1 bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 text-xs font-medium rounded-full">
                              ✓ VERIFIED
                            </span>
                          )}
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span>{new Date(article.date).toLocaleDateString()}</span>
                          <span className="mx-2">•</span>
                          <span>{article.source}</span>
                        </div>
                        
                        <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-200">
                          {article.title}
                        </h4>
                        
                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                          {article.excerpt}
                        </p>

                        <div className="flex flex-wrap gap-1 mb-4">
                          {article.tags.map((tag, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 text-xs rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <button className="flex items-center text-gray-500 hover:text-purple-600 transition-colors duration-200">
                              <Heart className="w-4 h-4 mr-1" />
                              <span className="text-sm">12</span>
                            </button>
                            <button className="flex items-center text-gray-500 hover:text-purple-600 transition-colors duration-200">
                              <Share2 className="w-4 h-4 mr-1" />
                              <span className="text-sm">Share</span>
                            </button>
                          </div>
                          <a
                            href={article.externalLink}
                            className="flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 text-sm font-medium transition-colors duration-200"
                          >
                            Read Full Story
                            <ExternalLink className="w-4 h-4 ml-1" />
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* All News */}
            <div>
              <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">
                {filter === 'all' ? 'Latest Updates' : `${newsCategories.find(c => c.id === filter)?.label}`}
                <span className="text-gray-500 text-lg ml-2">({filteredNews.length})</span>
              </h3>
              
              <div className="space-y-8">
                {filteredNews.map((article) => (
                  <div
                    key={article.id}
                    className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                  >
                    <div className="md:flex">
                      <div className="md:w-1/3">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-48 md:h-full object-cover"
                        />
                      </div>
                      <div className="md:w-2/3 p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                            <Calendar className="w-4 h-4 mr-2" />
                            <span>{new Date(article.date).toLocaleDateString()}</span>
                            <span className="mx-2">•</span>
                            <span>{article.source}</span>
                          </div>
                          <div className="flex gap-2">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getImpactColor(article.impact)}`}>
                              {article.impact.toUpperCase()}
                            </span>
                            {article.verified && (
                              <span className="px-2 py-1 bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 text-xs font-medium rounded-full">
                                ✓ VERIFIED
                              </span>
                            )}
                          </div>
                        </div>
                        
                        <h4 className="text-2xl font-bold text-gray-800 dark:text-white mb-3 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200 cursor-pointer">
                          {article.title}
                        </h4>
                        
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                          {article.excerpt}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-6">
                          {article.tags.map((tag, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-sm rounded-full hover:bg-purple-100 dark:hover:bg-purple-900 hover:text-purple-600 dark:hover:text-purple-300 cursor-pointer transition-colors duration-200"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <button className="flex items-center text-gray-500 hover:text-purple-600 transition-colors duration-200">
                              <Heart className="w-5 h-5 mr-1" />
                              <span>18</span>
                            </button>
                            <button className="flex items-center text-gray-500 hover:text-purple-600 transition-colors duration-200">
                              <Share2 className="w-5 h-5 mr-1" />
                              <span>Share</span>
                            </button>
                          </div>
                          <a
                            href={article.externalLink}
                            className="flex items-center px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-full hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-200 shadow-md"
                          >
                            Read Article
                            <ExternalLink className="w-4 h-4 ml-2" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              {/* Trending News */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
                <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-orange-500" />
                  Trending Now
                </h4>
                <div className="space-y-4">
                  {trendingNews.map((article, index) => (
                    <div key={article.id} className="flex items-start space-x-3 pb-4 border-b border-gray-100 dark:border-gray-700 last:border-b-0">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                        {index + 1}
                      </div>
                      <div>
                        <h5 className="font-medium text-gray-800 dark:text-white text-sm leading-tight mb-1 hover:text-purple-600 dark:hover:text-purple-400 cursor-pointer transition-colors duration-200">
                          {article.title}
                        </h5>
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                          <span>{new Date(article.date).toLocaleDateString()}</span>
                          <span className="mx-1">•</span>
                          <span>{article.source}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Impact Stats */}
              <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl shadow-lg p-6 text-white">
                <h4 className="text-xl font-bold mb-6 flex items-center">
                  <Newspaper className="w-5 h-5 mr-2" />
                  This Month
                </h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>New Laws</span>
                    <span className="font-bold text-2xl">3</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Success Stories</span>
                    <span className="font-bold text-2xl">8</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Global Updates</span>
                    <span className="font-bold text-2xl">5</span>
                  </div>
                </div>
              </div>

              {/* Submit News */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
                <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Share News</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6">
                  Know about a recent development or inspiring story? Share it with our community.
                </p>
                <button className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-full hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-200 shadow-md">
                  Submit News
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;