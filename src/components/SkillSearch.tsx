import React, { useState } from 'react';
import { Search, MapPin, Clock, Filter } from 'lucide-react';

export default function SkillSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [radius, setRadius] = useState('10');

  const categories = [
    'All Categories',
    'Tech & Digital',
    'Home & Garden',
    'Arts & Crafts',
    'Business & Finance',
    'Health & Wellness',
    'Education & Tutoring'
  ];

  return (
    <section id="browse-skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Find the Perfect Skill Match
          </h2>
          <p className="text-xl text-gray-600">
            Search for skills in your neighborhood
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
            <div className="grid lg:grid-cols-4 gap-4">
              <div className="lg:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="What skill do you need?"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-800 focus:border-transparent outline-none"
                  />
                </div>
              </div>
              
              <div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-800 focus:border-transparent outline-none"
                >
                  {categories.map((category, index) => (
                    <option key={index} value={category.toLowerCase().replace(/\s+/g, '-')}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <div className="flex space-x-2">
                  <div className="relative flex-1">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <select
                      value={radius}
                      onChange={(e) => setRadius(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-800 focus:border-transparent outline-none"
                    >
                      <option value="1">1 mile</option>
                      <option value="5">5 miles</option>
                      <option value="10">10 miles</option>
                      <option value="25">25 miles</option>
                    </select>
                  </div>
                  <button className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 rounded-lg transition-colors flex items-center space-x-2">
                    <Search className="h-5 w-5" />
                    <span className="hidden sm:block">Search</span>
                  </button>
                </div>
              </div>
            </div>
            
            <div className="mt-4 flex flex-wrap gap-2">
              <button className="flex items-center space-x-1 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors">
                <Clock className="h-4 w-4" />
                <span>Weekends</span>
              </button>
              <button className="flex items-center space-x-1 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors">
                <Clock className="h-4 w-4" />
                <span>Evenings</span>
              </button>
              <button className="flex items-center space-x-1 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors">
                <Filter className="h-4 w-4" />
                <span>Flexible</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}