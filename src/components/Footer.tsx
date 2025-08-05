import React from 'react';
import { Users, Facebook, Twitter, Instagram, Mail, Phone, MapPin, LogIn } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Users className="h-8 w-8 text-emerald-400" />
              <span className="text-2xl font-bold">SkillSwap</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Building stronger communities through skill sharing. Connect with neighbors, 
              learn new skills, and create meaningful relationships.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Community</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">How it Works</a></li>
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">Community Guidelines</a></li>
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">Safety Tips</a></li>
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">Success Stories</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">Report an Issue</a></li>
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 SkillSwap. All rights reserved. Built with ❤️ for community.
            </p>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center space-x-1 text-gray-400">
                  <span>Built with</span>
                  <span className="text-emerald-400 font-medium">Bolt.new</span>
                </div>
                <div className="flex items-center space-x-1 text-gray-400">
                  <Mail className="h-4 w-4" />
                  <span>support@skillswap.com</span>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <a href="#login" className="text-gray-300 hover:text-emerald-400 transition-colors text-sm">
                  Log In
                </a>
                <a href="#signup" className="flex items-center space-x-1 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                  <LogIn className="h-4 w-4" />
                  <span>Sign Up</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}