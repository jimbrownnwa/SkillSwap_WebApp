import React from 'react';
import { Star, MapPin, MessageCircle, Coins } from 'lucide-react';

export default function FeaturedSkills() {
  const skillExchanges = [
    {
      id: 1,
      user: {
        name: "Sarah Chen",
        image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150",
        rating: 4.9,
        trades: 23
      },
      offering: "Guitar Lessons",
      wanting: "Tax Preparation",
      distance: "2.3 miles away",
      credits: 150,
      description: "Beginner to intermediate guitar lessons"
    },
    {
      id: 2,
      user: {
        name: "Mike Rodriguez",
        image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150",
        rating: 4.8,
        trades: 31
      },
      offering: "Web Design",
      wanting: "Plumbing Repair",
      distance: "1.8 miles away",
      credits: 200,
      description: "Modern responsive websites"
    },
    {
      id: 3,
      user: {
        name: "Emma Wilson",
        image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150",
        rating: 5.0,
        trades: 18
      },
      offering: "French Tutoring",
      wanting: "Dog Walking",
      distance: "3.1 miles away",
      credits: 120,
      description: "Native French speaker, all levels"
    },
    {
      id: 4,
      user: {
        name: "David Park",
        image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=150",
        rating: 4.7,
        trades: 27
      },
      offering: "Yoga Classes",
      wanting: "Car Maintenance",
      distance: "2.9 miles away",
      credits: 175,
      description: "Hatha and Vinyasa yoga instructor"
    },
    {
      id: 5,
      user: {
        name: "Lisa Thompson",
        image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150",
        rating: 4.9,
        trades: 42
      },
      offering: "Cooking Classes",
      wanting: "Photography",
      distance: "1.5 miles away",
      credits: 250,
      description: "Italian cuisine specialist"
    },
    {
      id: 6,
      user: {
        name: "James Anderson",
        image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150",
        rating: 4.6,
        trades: 15
      },
      offering: "Home Repair",
      wanting: "Spanish Lessons",
      distance: "4.2 miles away",
      credits: 180,
      description: "Handyman with 20+ years experience"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Skill Exchanges
          </h2>
          <p className="text-xl text-gray-600">
            Connect with neighbors ready to trade skills
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillExchanges.map((exchange) => (
            <div key={exchange.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src={exchange.user.image}
                  alt={exchange.user.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{exchange.user.name}</h3>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600">{exchange.user.rating}</span>
                    <span className="text-sm text-gray-400">({exchange.user.trades} trades)</span>
                  </div>
                </div>
                <div className="flex items-center space-x-1 text-emerald-600">
                  <Coins className="h-4 w-4" />
                  <span className="text-sm font-medium">{exchange.credits}</span>
                </div>
              </div>
              
              <div className="space-y-3 mb-4">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <div className="text-sm text-blue-600 font-medium">Offering</div>
                  <div className="font-semibold text-gray-900">{exchange.offering}</div>
                  <div className="text-sm text-gray-600">{exchange.description}</div>
                </div>
                <div className="p-3 bg-emerald-50 rounded-lg">
                  <div className="text-sm text-emerald-600 font-medium">Looking for</div>
                  <div className="font-semibold text-gray-900">{exchange.wanting}</div>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-1 text-gray-500">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">{exchange.distance}</span>
                </div>
                <button className="bg-blue-800 hover:bg-blue-900 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center space-x-1">
                  <MessageCircle className="h-4 w-4" />
                  <span>Connect</span>
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            View All Skill Exchanges
          </button>
        </div>
      </div>
    </section>
  );
}