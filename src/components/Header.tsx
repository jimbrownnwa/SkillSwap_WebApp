import React, { useState } from 'react';
import { Users, Bell, User, LogIn, Menu, X } from 'lucide-react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Users className="h-8 w-8 text-blue-800" />
            <span className="text-2xl font-bold text-gray-900">SkillSwap</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#how-it-works" className="text-gray-600 hover:text-blue-800 transition-colors">How it Works</a>
            <a href="#browse-skills" className="text-gray-600 hover:text-blue-800 transition-colors">Browse Skills</a>
            <a href="#categories" className="text-gray-600 hover:text-blue-800 transition-colors">Categories</a>
            <a href="#safety" className="text-gray-600 hover:text-blue-800 transition-colors">Safety</a>
          </nav>
          
          {/* Desktop Auth & Notifications */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
              <Bell className="h-5 w-5" />
            </button>
            <a href="#login" className="text-gray-600 hover:text-blue-800 transition-colors font-medium">
              Log In
            </a>
            <button className="flex items-center space-x-2 bg-blue-800 text-white px-4 py-2 rounded-lg hover:bg-blue-900 transition-colors">
              <LogIn className="h-4 w-4" />
              <span>Sign Up</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
              <Bell className="h-5 w-5" />
            </button>
            <button
              onClick={toggleMobileMenu}
              className="p-2 text-gray-600 hover:text-blue-800 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#how-it-works"
                className="block px-3 py-2 text-gray-600 hover:text-blue-800 hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                How it Works
              </a>
              <a
                href="#browse-skills"
                className="block px-3 py-2 text-gray-600 hover:text-blue-800 hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Browse Skills
              </a>
              <a
                href="#categories"
                className="block px-3 py-2 text-gray-600 hover:text-blue-800 hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Categories
              </a>
              <a
                href="#safety"
                className="block px-3 py-2 text-gray-600 hover:text-blue-800 hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Safety
              </a>
              
              {/* Mobile Auth Links */}
              <div className="border-t border-gray-100 pt-3 mt-3">
                <a
                  href="#login"
                  className="block px-3 py-2 text-gray-600 hover:text-blue-800 hover:bg-gray-50 rounded-md transition-colors font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Log In
                </a>
                <a
                  href="#signup"
                  className="block mx-3 mt-2 px-4 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition-colors font-medium text-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Sign Up
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}