import React from 'react';
import { Heart, Instagram, Twitter, Linkedin, Mail, MapPin, Phone, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:contact@kamakshiheforshe.org', label: 'Email' }
  ];

  const quickLinks = [
    { label: 'About Us', href: '#mission' },
    { label: 'Our Team', href: '#members' },
    { label: 'Events', href: '#calendar' },
    { label: 'Blog', href: '#blog' },
    { label: 'Volunteer', href: '#volunteers' }
  ];

  const resources = [
    { label: 'Know Your Rights', href: '#rights' },
    { label: 'Legal Resources', href: '#' },
    { label: 'Support Services', href: '#' },
    { label: 'Educational Materials', href: '#' },
    { label: 'Crisis Helpline', href: 'tel:1091' }
  ];

  const importantContacts = [
    { label: 'Women Helpline', number: '1091', urgent: true },
    { label: 'Student Support', number: '+91 98765 43210', urgent: false },
    { label: 'Emergency', number: '112', urgent: true }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Organization Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">K</span>
                </div>
                <div>
                  <div className="font-bold text-xl">Kamakshi & HeForShe</div>
                  <div className="text-gray-400 text-sm">Gender Empowerment Society</div>
                </div>
              </div>
              
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Committed to creating a world of equality, empowerment, and expression. Join us in building 
                an inclusive society where every gender can thrive.
              </p>

              <div className="text-purple-400 font-semibold text-lg mb-6">
                💜 "Equality, Empowerment, Expression" 💜
              </div>

              {/* Contact Information */}
              <div className="space-y-3">
                <div className="flex items-center text-gray-300 text-sm">
                  <MapPin className="w-4 h-4 mr-3 text-purple-400 flex-shrink-0" />
                  <span>Student Activity Center, College Campus</span>
                </div>
                <div className="flex items-center text-gray-300 text-sm">
                  <Mail className="w-4 h-4 mr-3 text-purple-400 flex-shrink-0" />
                  <a href="mailto:contact@kamakshiheforshe.org" className="hover:text-purple-400 transition-colors duration-200">
                    contact@kamakshiheforshe.org
                  </a>
                </div>
                <div className="flex items-center text-gray-300 text-sm">
                  <Phone className="w-4 h-4 mr-3 text-purple-400 flex-shrink-0" />
                  <a href="tel:+919876543210" className="hover:text-purple-400 transition-colors duration-200">
                    +91 98765 43210
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-purple-400 transition-colors duration-200 text-sm flex items-center group"
                    >
                      <span>{link.label}</span>
                      <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-white">Resources</h3>
              <ul className="space-y-3">
                {resources.map((resource, index) => (
                  <li key={index}>
                    <a
                      href={resource.href}
                      className="text-gray-300 hover:text-purple-400 transition-colors duration-200 text-sm flex items-center group"
                    >
                      <span>{resource.label}</span>
                      <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Important Contacts & Newsletter */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-white">Important Contacts</h3>
              <div className="space-y-3 mb-8">
                {importantContacts.map((contact, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-gray-300 text-sm">{contact.label}</span>
                    <a
                      href={`tel:${contact.number}`}
                      className={`text-sm font-semibold ${
                        contact.urgent 
                          ? 'text-red-400 hover:text-red-300' 
                          : 'text-purple-400 hover:text-purple-300'
                      } transition-colors duration-200`}
                    >
                      {contact.number}
                    </a>
                  </div>
                ))}
              </div>

              {/* Newsletter Signup */}
              <div>
                <h4 className="text-lg font-bold mb-4 text-white">Stay Updated</h4>
                <p className="text-gray-300 text-sm mb-4">
                  Get the latest news, events, and opportunities delivered to your inbox.
                </p>
                <div className="flex flex-col space-y-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-200"
                  />
                  <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-200 shadow-md">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media & Bottom Bar */}
        <div className="border-t border-gray-800">
          <div className="py-8">
            {/* Social Media Links */}
            <div className="flex justify-center space-x-6 mb-8">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-200" />
                </a>
              ))}
            </div>

            {/* Mission Statement */}
            <div className="text-center mb-8">
              <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
                "We believe in a world where every individual, regardless of gender, has the opportunity to 
                achieve their full potential and contribute to society's progress. Together, we are building 
                that world, one step at a time."
              </p>
            </div>

            {/* Bottom Bar */}
            <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800">
              <div className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2024 Kamakshi & HeForShe. All rights reserved.
              </div>
              <div className="flex items-center space-x-6 text-sm">
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
                  Terms of Service
                </a>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
                  Code of Conduct
                </a>
              </div>
            </div>

            {/* Made with Love */}
            <div className="text-center mt-6 pt-6 border-t border-gray-800">
              <p className="text-gray-500 text-sm flex items-center justify-center">
                Made with <Heart className="w-4 h-4 mx-1 text-red-500 fill-current" /> for equality and empowerment
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;