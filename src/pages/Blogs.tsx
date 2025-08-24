import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ThumbsUp, ThumbsDown, Eye, Calendar, User, Search, Filter, TrendingUp, Star } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import Card from '../components/Card';

const Blogs: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [votes, setVotes] = useState<{[key: number]: {upvotes: number, downvotes: number, userVote: 'up' | 'down' | null}}>({});

  const categories = [
    { key: 'all', label: 'All Posts' },
    { key: 'rights', label: 'Rights & Laws' },
    { key: 'workplace', label: 'Workplace Equality' },
    { key: 'empowerment', label: 'Empowerment' },
    { key: 'stories', label: 'Personal Stories' },
    { key: 'awareness', label: 'Awareness' }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'Understanding Workplace Rights: A Comprehensive Guide',
      excerpt: 'Navigate the complexities of workplace equality laws and understand your rights as an employee...',
      content: 'Full blog content would be loaded from external source...',
      author: 'Sarah Johnson',
      authorImage: 'https://images.pexels.com/photos/3768911/pexels-photo-3768911.jpeg?auto=compress&cs=tinysrgb&w=150',
      date: '2024-11-15',
      category: 'workplace',
      readTime: '8 min read',
      views: 1250,
      upvotes: 45,
      downvotes: 3,
      featured: true,
      tags: ['workplace', 'rights', 'equality'],
      externalLink: '#' // Would link to Google Docs/Notion
    },
    {
      id: 2,
      title: 'Breaking Barriers: Women in STEM',
      excerpt: 'Exploring the challenges and triumphs of women pursuing careers in Science, Technology, Engineering, and Mathematics...',
      content: 'Full blog content would be loaded from external source...',
      author: 'Priya Nair',
      authorImage: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=150',
      date: '2024-11-12',
      category: 'empowerment',
      readTime: '6 min read',
      views: 890,
      upvotes: 38,
      downvotes: 2,
      featured: false,
      tags: ['STEM', 'career', 'inspiration'],
      externalLink: '#'
    },
    {
      id: 3,
      title: 'The Power of Consent: Education and Awareness',
      excerpt: 'Understanding consent in all its forms and the importance of comprehensive education on the topic...',
      content: 'Full blog content would be loaded from external source...',
      author: 'Maya Sharma',
      authorImage: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=150',
      date: '2024-11-10',
      category: 'awareness',
      readTime: '10 min read',
      views: 1450,
      upvotes: 62,
      downvotes: 5,
      featured: true,
      tags: ['consent', 'education', 'awareness'],
      externalLink: '#'
    },
    {
      id: 4,
      title: 'Legal Remedies for Gender Discrimination',
      excerpt: 'A detailed guide on legal options available for those facing gender-based discrimination...',
      content: 'Full blog content would be loaded from external source...',
      author: 'Ananya Gupta',
      authorImage: 'https://images.pexels.com/photos/3768911/pexels-photo-3768911.jpeg?auto=compress&cs=tinysrgb&w=150',
      date: '2024-11-08',
      category: 'rights',
      readTime: '12 min read',
      views: 780,
      upvotes: 34,
      downvotes: 1,
      featured: false,
      tags: ['legal', 'discrimination', 'remedies'],
      externalLink: '#'
    },
    {
      id: 5,
      title: 'From Survivor to Advocate: My Journey',
      excerpt: 'A personal account of transformation from surviving harassment to becoming an advocate for change...',
      content: 'Full blog content would be loaded from external source...',
      author: 'Anonymous Contributor',
      authorImage: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=150',
      date: '2024-11-05',
      category: 'stories',
      readTime: '7 min read',
      views: 2100,
      upvotes: 89,
      downvotes: 4,
      featured: true,
      tags: ['personal', 'advocacy', 'inspiration'],
      externalLink: '#'
    },
    {
      id: 6,
      title: 'Economic Empowerment: Financial Independence for Women',
      excerpt: 'Strategies and resources for achieving financial independence and economic empowerment...',
      content: 'Full blog content would be loaded from external source...',
      author: 'Isha Reddy',
      authorImage: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=150',
      date: '2024-11-03',
      category: 'empowerment',
      readTime: '9 min read',
      views: 950,
      upvotes: 41,
      downvotes: 2,
      featured: false,
      tags: ['finance', 'independence', 'empowerment'],
      externalLink: '#'
    }
  ];

  // Initialize votes
  React.useEffect(() => {
    const initialVotes: any = {};
    blogPosts.forEach(post => {
      initialVotes[post.id] = {
        upvotes: post.upvotes,
        downvotes: post.downvotes,
        userVote: null
      };
    });
    setVotes(initialVotes);
  }, []);

  const handleVote = (postId: number, voteType: 'up' | 'down') => {
    setVotes(prev => {
      const currentVote = prev[postId];
      let newUpvotes = currentVote.upvotes;
      let newDownvotes = currentVote.downvotes;
      let newUserVote: 'up' | 'down' | null = voteType;

      // Handle voting logic
      if (currentVote.userVote === voteType) {
        // Remove vote if clicking same button
        newUserVote = null;
        if (voteType === 'up') newUpvotes--;
        else newDownvotes--;
      } else if (currentVote.userVote) {
        // Switch vote
        if (currentVote.userVote === 'up') {
          newUpvotes--;
          newDownvotes++;
        } else {
          newDownvotes--;
          newUpvotes++;
        }
      } else {
        // New vote
        if (voteType === 'up') newUpvotes++;
        else newDownvotes++;
      }

      return {
        ...prev,
        [postId]: {
          upvotes: newUpvotes,
          downvotes: newDownvotes,
          userVote: newUserVote
        }
      };
    });
  };

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = filteredPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div>
      <PageHeader
        title="Blog Vault"
        subtitle="Stories, insights, and knowledge sharing for gender empowerment"
        gradient="from-purple-600 via-pink-600 to-orange-600"
      />

      {/* Search and Filter */}
      <div className="py-8 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search blogs, topics, or tags..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
                />
              </div>
            </div>

            {/* Category Filter */}
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

      {/* Featured Blogs */}
      {featuredPosts.length > 0 && (
        <div className="py-16 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <div className="flex items-center justify-center mb-4">
                <TrendingUp className="text-purple-600 mr-2" size={32} />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Featured Posts</h2>
              </div>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Most popular and impactful stories from our community
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {featuredPosts.slice(0, 3).map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Card className="h-full overflow-hidden">
                    <div className="relative">
                      <div className="bg-gradient-to-r from-purple-600 to-pink-600 h-48 flex items-center justify-center">
                        <Star size={48} className="text-white" />
                      </div>
                      <div className="absolute top-4 left-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center space-x-2 mb-3">
                        <span className="bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 px-2 py-1 rounded text-sm">
                          {categories.find(cat => cat.key === post.category)?.label}
                        </span>
                        <span className="text-gray-500 text-sm">{post.readTime}</span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <Eye size={16} />
                            <span>{post.views}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar size={16} />
                            <span>{new Date(post.date).toLocaleDateString()}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <img
                            src={post.authorImage}
                            alt={post.author}
                            className="w-8 h-8 rounded-full object-cover"
                          />
                          <span className="text-sm font-medium text-gray-900 dark:text-white">
                            {post.author}
                          </span>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => handleVote(post.id, 'up')}
                            className={`flex items-center space-x-1 px-2 py-1 rounded transition-colors ${
                              votes[post.id]?.userVote === 'up'
                                ? 'bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400'
                                : 'text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800'
                            }`}
                          >
                            <ThumbsUp size={16} />
                            <span>{votes[post.id]?.upvotes || 0}</span>
                          </button>
                          <button
                            onClick={() => handleVote(post.id, 'down')}
                            className={`flex items-center space-x-1 px-2 py-1 rounded transition-colors ${
                              votes[post.id]?.userVote === 'down'
                                ? 'bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-400'
                                : 'text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800'
                            }`}
                          >
                            <ThumbsDown size={16} />
                            <span>{votes[post.id]?.downvotes || 0}</span>
                          </button>
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

      {/* All Posts */}
      <div className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              All Posts
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              {filteredPosts.length} {filteredPosts.length === 1 ? 'post' : 'posts'} found
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 px-2 py-1 rounded text-sm">
                        {categories.find(cat => cat.key === post.category)?.label}
                      </span>
                      <span className="text-gray-500 text-sm">{post.readTime}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Eye size={16} />
                          <span>{post.views}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar size={16} />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <img
                          src={post.authorImage}
                          alt={post.author}
                          className="w-8 h-8 rounded-full object-cover"
                        />
                        <span className="text-sm font-medium text-gray-900 dark:text-white">
                          {post.author}
                        </span>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => handleVote(post.id, 'up')}
                          className={`flex items-center space-x-1 px-2 py-1 rounded transition-colors ${
                            votes[post.id]?.userVote === 'up'
                              ? 'bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400'
                              : 'text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800'
                          }`}
                        >
                          <ThumbsUp size={16} />
                          <span>{votes[post.id]?.upvotes || 0}</span>
                        </button>
                        <button
                          onClick={() => handleVote(post.id, 'down')}
                          className={`flex items-center space-x-1 px-2 py-1 rounded transition-colors ${
                            votes[post.id]?.userVote === 'down'
                              ? 'bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-400'
                              : 'text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800'
                          }`}
                        >
                          <ThumbsDown size={16} />
                          <span>{votes[post.id]?.downvotes || 0}</span>
                        </button>
                      </div>
                    </div>

                    <div className="mt-4">
                      <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors">
                        Read Full Post
                      </button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-12"
            >
              <div className="text-6xl mb-4">📝</div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">No posts found</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Try adjusting your search terms or filters to find what you're looking for.
              </p>
            </motion.div>
          )}
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Share Your Story
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Have a story, insight, or experience that could inspire others? We'd love to feature your voice in our blog.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Submit Your Blog
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;