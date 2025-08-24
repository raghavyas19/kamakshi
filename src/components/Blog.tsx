import React, { useState } from 'react';
import { ThumbsUp, ThumbsDown, MessageSquare, ExternalLink, Filter, Search, TrendingUp } from 'lucide-react';

const Blog: React.FC = () => {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [votes, setVotes] = useState<{[key: number]: {upvotes: number, downvotes: number, userVote: string | null}}>({});

  const blogCategories = [
    { id: 'all', label: 'All Posts', count: 24 },
    { id: 'empowerment', label: 'Empowerment', count: 8 },
    { id: 'rights', label: 'Rights & Laws', count: 6 },
    { id: 'stories', label: 'Success Stories', count: 5 },
    { id: 'awareness', label: 'Awareness', count: 5 }
  ];

  const blogs = [
    {
      id: 1,
      title: 'Breaking Barriers: Women in STEM Leadership',
      excerpt: 'Exploring the journey of women breaking through the glass ceiling in science, technology, engineering, and mathematics fields.',
      author: 'Dr. Priya Sharma',
      authorImage: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=150',
      date: '2024-03-15',
      readTime: '8 min read',
      category: 'empowerment',
      featured: true,
      upvotes: 42,
      downvotes: 2,
      comments: 18,
      tags: ['STEM', 'Leadership', 'Glass Ceiling'],
      externalLink: '#'
    },
    {
      id: 2,
      title: 'Understanding Workplace Harassment Laws in India',
      excerpt: 'A comprehensive guide to the POSH Act and how it protects employees from sexual harassment at workplace.',
      author: 'Advocate Sneha Reddy',
      authorImage: 'https://images.pexels.com/photos/3763152/pexels-photo-3763152.jpeg?auto=compress&cs=tinysrgb&w=150',
      date: '2024-03-12',
      readTime: '12 min read',
      category: 'rights',
      featured: false,
      upvotes: 38,
      downvotes: 1,
      comments: 14,
      tags: ['POSH Act', 'Workplace Safety', 'Legal Rights'],
      externalLink: '#'
    },
    {
      id: 3,
      title: 'From Doubt to Confidence: My Entrepreneurship Journey',
      excerpt: 'A personal story of overcoming self-doubt and societal expectations to build a successful startup.',
      author: 'Kavya Patel',
      authorImage: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
      date: '2024-03-10',
      readTime: '6 min read',
      category: 'stories',
      featured: false,
      upvotes: 56,
      downvotes: 0,
      comments: 23,
      tags: ['Entrepreneurship', 'Self-confidence', 'Startup'],
      externalLink: '#'
    },
    {
      id: 4,
      title: 'Mental Health and Gender: Breaking the Stigma',
      excerpt: 'Addressing the unique mental health challenges faced by different genders and the importance of seeking help.',
      author: 'Dr. Arjun Mehta',
      authorImage: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=150',
      date: '2024-03-08',
      readTime: '10 min read',
      category: 'awareness',
      featured: true,
      upvotes: 34,
      downvotes: 3,
      comments: 16,
      tags: ['Mental Health', 'Stigma', 'Awareness'],
      externalLink: '#'
    },
    {
      id: 5,
      title: 'Equal Pay: Progress and Challenges Ahead',
      excerpt: 'Analyzing the current state of pay equality and what needs to be done to achieve true wage parity.',
      author: 'Prof. Rahul Singh',
      authorImage: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
      date: '2024-03-05',
      readTime: '9 min read',
      category: 'rights',
      featured: false,
      upvotes: 29,
      downvotes: 4,
      comments: 12,
      tags: ['Equal Pay', 'Wage Gap', 'Labor Rights'],
      externalLink: '#'
    },
    {
      id: 6,
      title: 'Raising Confident Daughters in a Digital Age',
      excerpt: 'Practical strategies for parents to nurture confidence and resilience in young girls navigating social media.',
      author: 'Anisha Verma',
      authorImage: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=150',
      date: '2024-03-02',
      readTime: '7 min read',
      category: 'empowerment',
      featured: false,
      upvotes: 45,
      downvotes: 2,
      comments: 20,
      tags: ['Parenting', 'Digital Age', 'Confidence'],
      externalLink: '#'
    }
  ];

  // Initialize votes state
  React.useEffect(() => {
    const initialVotes: {[key: number]: {upvotes: number, downvotes: number, userVote: string | null}} = {};
    blogs.forEach(blog => {
      initialVotes[blog.id] = {
        upvotes: blog.upvotes,
        downvotes: blog.downvotes,
        userVote: null
      };
    });
    setVotes(initialVotes);
  }, []);

  const handleVote = (blogId: number, voteType: 'up' | 'down') => {
    setVotes(prev => {
      const blogVotes = prev[blogId] || { upvotes: 0, downvotes: 0, userVote: null };
      const newVotes = { ...prev };
      
      if (blogVotes.userVote === voteType) {
        // Remove vote if clicking the same button
        newVotes[blogId] = {
          ...blogVotes,
          upvotes: voteType === 'up' ? blogVotes.upvotes - 1 : blogVotes.upvotes,
          downvotes: voteType === 'down' ? blogVotes.downvotes - 1 : blogVotes.downvotes,
          userVote: null
        };
      } else {
        // Add new vote or change existing vote
        newVotes[blogId] = {
          upvotes: voteType === 'up' 
            ? (blogVotes.userVote === 'down' ? blogVotes.upvotes + 1 : blogVotes.upvotes + 1)
            : (blogVotes.userVote === 'up' ? blogVotes.upvotes - 1 : blogVotes.upvotes),
          downvotes: voteType === 'down'
            ? (blogVotes.userVote === 'up' ? blogVotes.downvotes + 1 : blogVotes.downvotes + 1)
            : (blogVotes.userVote === 'down' ? blogVotes.downvotes - 1 : blogVotes.downvotes),
          userVote: voteType
        };
      }
      
      return newVotes;
    });
  };

  const filteredBlogs = blogs.filter(blog => {
    const matchesFilter = filter === 'all' || blog.category === filter;
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         blog.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  const featuredBlogs = blogs.filter(blog => blog.featured);
  const trendingBlogs = [...blogs].sort((a, b) => (votes[b.id]?.upvotes || b.upvotes) - (votes[a.id]?.upvotes || a.upvotes)).slice(0, 3);

  return (
    <section id="blog" className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-gray-800 dark:via-purple-900 dark:to-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
            Blog <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Vault</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Dive into thoughtful articles, inspiring stories, and educational content created by our community 
            to spark meaningful conversations about gender equality and empowerment.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col lg:flex-row gap-6 mb-12">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search articles, topics, or tags..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-200"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 lg:gap-4">
            {blogCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  filter === category.id
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600'
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
            {/* Featured Articles */}
            {filter === 'all' && (
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
                  <TrendingUp className="w-6 h-6 mr-2 text-purple-600" />
                  Featured Articles
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {featuredBlogs.map((blog) => (
                    <div
                      key={blog.id}
                      className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group transform hover:scale-105"
                    >
                      <div className="p-6">
                        <div className="flex items-center mb-4">
                          <img
                            src={blog.authorImage}
                            alt={blog.author}
                            className="w-10 h-10 rounded-full mr-3"
                          />
                          <div>
                            <div className="font-medium text-gray-800 dark:text-white text-sm">{blog.author}</div>
                            <div className="text-gray-500 dark:text-gray-400 text-xs">
                              {new Date(blog.date).toLocaleDateString()} • {blog.readTime}
                            </div>
                          </div>
                        </div>
                        
                        <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-200">
                          {blog.title}
                        </h4>
                        
                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                          {blog.excerpt}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1 mb-4">
                          {blog.tags.map((tag, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 text-xs rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Voting and Actions */}
                        <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                          <div className="flex items-center space-x-4">
                            <button
                              onClick={() => handleVote(blog.id, 'up')}
                              className={`flex items-center space-x-1 px-3 py-1 rounded-full text-sm transition-colors duration-200 ${
                                votes[blog.id]?.userVote === 'up'
                                  ? 'bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300'
                                  : 'text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700'
                              }`}
                            >
                              <ThumbsUp className="w-4 h-4" />
                              <span>{votes[blog.id]?.upvotes || blog.upvotes}</span>
                            </button>
                            <button
                              onClick={() => handleVote(blog.id, 'down')}
                              className={`flex items-center space-x-1 px-3 py-1 rounded-full text-sm transition-colors duration-200 ${
                                votes[blog.id]?.userVote === 'down'
                                  ? 'bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-300'
                                  : 'text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700'
                              }`}
                            >
                              <ThumbsDown className="w-4 h-4" />
                              <span>{votes[blog.id]?.downvotes || blog.downvotes}</span>
                            </button>
                            <div className="flex items-center space-x-1 text-gray-500 text-sm">
                              <MessageSquare className="w-4 h-4" />
                              <span>{blog.comments}</span>
                            </div>
                          </div>
                          <a
                            href={blog.externalLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 text-sm font-medium transition-colors duration-200"
                          >
                            Read More
                            <ExternalLink className="w-4 h-4 ml-1" />
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* All Articles */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                {filter === 'all' ? 'All Articles' : `${blogCategories.find(c => c.id === filter)?.label} Articles`}
                <span className="text-gray-500 text-lg ml-2">({filteredBlogs.length})</span>
              </h3>
              
              <div className="space-y-8">
                {filteredBlogs.map((blog) => (
                  <div
                    key={blog.id}
                    className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                  >
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <img
                            src={blog.authorImage}
                            alt={blog.author}
                            className="w-12 h-12 rounded-full mr-4"
                          />
                          <div>
                            <div className="font-medium text-gray-800 dark:text-white">{blog.author}</div>
                            <div className="text-gray-500 dark:text-gray-400 text-sm">
                              {new Date(blog.date).toLocaleDateString()} • {blog.readTime}
                            </div>
                          </div>
                        </div>
                        <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 text-xs rounded-full font-medium">
                          {blogCategories.find(c => c.id === blog.category)?.label}
                        </span>
                      </div>
                      
                      <h4 className="text-2xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-200">
                        {blog.title}
                      </h4>
                      
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                        {blog.excerpt}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {blog.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-sm rounded-full hover:bg-purple-100 dark:hover:bg-purple-900 hover:text-purple-600 dark:hover:text-purple-300 cursor-pointer transition-colors duration-200"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                      {/* Voting and Actions */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                        <div className="flex items-center space-x-6">
                          <button
                            onClick={() => handleVote(blog.id, 'up')}
                            className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-200 ${
                              votes[blog.id]?.userVote === 'up'
                                ? 'bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300 shadow-md'
                                : 'text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-green-600'
                            }`}
                          >
                            <ThumbsUp className="w-5 h-5" />
                            <span className="font-medium">{votes[blog.id]?.upvotes || blog.upvotes}</span>
                          </button>
                          <button
                            onClick={() => handleVote(blog.id, 'down')}
                            className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-200 ${
                              votes[blog.id]?.userVote === 'down'
                                ? 'bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-300 shadow-md'
                                : 'text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-red-600'
                            }`}
                          >
                            <ThumbsDown className="w-5 h-5" />
                            <span className="font-medium">{votes[blog.id]?.downvotes || blog.downvotes}</span>
                          </button>
                          <div className="flex items-center space-x-2 text-gray-500">
                            <MessageSquare className="w-5 h-5" />
                            <span className="font-medium">{blog.comments} comments</span>
                          </div>
                        </div>
                        <a
                          href={blog.externalLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-full hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-200 shadow-md"
                        >
                          Read Article
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </a>
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
              {/* Trending Posts */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
                <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-orange-500" />
                  Trending
                </h4>
                <div className="space-y-4">
                  {trendingBlogs.map((blog, index) => (
                    <div key={blog.id} className="flex items-start space-x-3 pb-4 border-b border-gray-100 dark:border-gray-700 last:border-b-0">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                        {index + 1}
                      </div>
                      <div>
                        <h5 className="font-medium text-gray-800 dark:text-white text-sm leading-tight mb-1 hover:text-purple-600 dark:hover:text-purple-400 cursor-pointer transition-colors duration-200">
                          {blog.title}
                        </h5>
                        <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                          <ThumbsUp className="w-3 h-3 mr-1" />
                          {votes[blog.id]?.upvotes || blog.upvotes}
                          <span className="mx-1">•</span>
                          <span>{blog.comments} comments</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl shadow-lg p-6 text-white">
                <h4 className="text-xl font-bold mb-6">Community Stats</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Total Articles</span>
                    <span className="font-bold text-2xl">24</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Active Contributors</span>
                    <span className="font-bold text-2xl">12</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Monthly Readers</span>
                    <span className="font-bold text-2xl">500+</span>
                  </div>
                </div>
              </div>

              {/* Write for Us */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
                <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Write for Us</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6">
                  Have a story to share? Join our community of writers and contribute to the conversation about gender equality.
                </p>
                <button className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-full hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-200 shadow-md">
                  Submit Your Article
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;