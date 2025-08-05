import React from 'react';
import { 
  Laptop, 
  Hammer, 
  Music, 
  MessageSquare, 
  ChefHat, 
  Dumbbell,
  Paintbrush,
  Calculator,
  Heart,
  BookOpen
} from 'lucide-react';

export default function SkillCategories() {
  const categories = [
    {
      name: "Tech & Digital",
      icon: Laptop,
      count: 247,
      gradient: "from-blue-500 to-blue-600"
    },
    {
      name: "Home & Garden",
      icon: Hammer,
      count: 189,
      gradient: "from-emerald-500 to-emerald-600"
    },
    {
      name: "Music & Arts",
      icon: Music,
      count: 156,
      gradient: "from-purple-500 to-purple-600"
    },
    {
      name: "Language Exchange",
      icon: MessageSquare,
      count: 134,
      gradient: "from-orange-500 to-orange-600"
    },
    {
      name: "Cooking & Food",
      icon: ChefHat,
      count: 112,
      gradient: "from-red-500 to-red-600"
    },
    {
      name: "Fitness & Health",
      icon: Dumbbell,
      count: 98,
      gradient: "from-green-500 to-green-600"
    },
    {
      name: "Arts & Crafts",
      icon: Paintbrush,
      count: 87,
      gradient: "from-pink-500 to-pink-600"
    },
    {
      name: "Business & Finance",
      icon: Calculator,
      count: 76,
      gradient: "from-indigo-500 to-indigo-600"
    },
    {
      name: "Health & Wellness",
      icon: Heart,
      count: 65,
      gradient: "from-teal-500 to-teal-600"
    },
    {
      name: "Education & Tutoring",
      icon: BookOpen,
      count: 123,
      gradient: "from-yellow-500 to-yellow-600"
    }
  ];

  return (
    <section id="categories" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Browse Skill Categories
          </h2>
          <p className="text-xl text-gray-600">
            Find exactly what you're looking for
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((category, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${category.gradient} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <category.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2 text-sm lg:text-base">
                {category.name}
              </h3>
              <p className="text-gray-500 text-sm">
                {category.count} skills available
              </p>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-emerald-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}