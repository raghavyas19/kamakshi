import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { useDarkMode } from '../contexts/DarkModeContext';

const Navbar: React.FC = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/mission', label: 'Mission' },
    { path: '/members', label: 'Members' },
    { path: '/domains', label: 'Domains' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/rights', label: 'Rights' },
    { path: '/blogs', label: 'Blogs' },
    { path: '/calendar', label: 'Calendar' },
    { path: '/volunteers', label: 'Volunteers' },
    { path: '/news', label: 'News' },
  ];

  return (
  <nav className="bg-transparent backdrop-blur-md border-b-0 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="flex-shrink-0"
          >
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-treepurple-500 to-treegreen-400 rounded-full flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-sm">K&H</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-treepurple-500 to-treegreen-400 bg-clip-text text-transparent">
                Kamakshi & HeForShe
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    location.pathname === link.path
                      ? 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300'
                      : 'text-gray-600 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Dark Mode Toggle & Mobile Menu */}
          <div className="flex items-center space-x-2">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-white/30 dark:bg-gray-800/30 text-treepurple-700 dark:text-treegreen-200 hover:bg-treegreen-100/40 dark:hover:bg-treepurple-900/40 transition-colors"
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-white/30 dark:bg-gray-800/30 text-treepurple-700 dark:text-treegreen-200 hover:bg-treegreen-100/40 dark:hover:bg-treepurple-900/40 transition-colors"
            >
              {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-purple-100 dark:border-gray-700"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ${
                    location.pathname === link.path
                      ? 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300'
                      : 'text-gray-600 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;