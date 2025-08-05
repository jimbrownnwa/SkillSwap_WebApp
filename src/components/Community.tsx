import React from 'react';
import { Quote, Trophy, Users, TrendingUp } from 'lucide-react';

export default function Community() {
  const testimonials = [
    {
      name: "Rachel Martinez",
      skill: "Learned Spanish",
      text: "Trading my web design skills for Spanish lessons was amazing! Maria is a fantastic teacher.",
      image: "https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Tom Wilson",
      skill: "Fixed my deck",
      text: "John taught me basic carpentry in exchange for computer help. My deck looks fantastic now!",
      image: "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Anna Kim",
      skill: "Piano lessons",
      text: "Swapped my photography skills for piano lessons. It's been such a rewarding experience!",
      image: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=150"
    }
  ];

  const stats = [
    { label: "Active Members", value: "2,847", icon: Users },
    { label: "Skills Traded", value: "5,290", icon: TrendingUp },
    { label: "Success Rate", value: "96%", icon: Trophy }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Thriving Community
          </h2>
          <p className="text-xl text-gray-600">
            Real stories from real neighbors
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Recent Successful Trades</h3>
            <div className="space-y-6">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <div className="flex items-start space-x-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                        <span className="text-sm text-emerald-600 bg-emerald-100 px-2 py-1 rounded-full">
                          {testimonial.skill}
                        </span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <Quote className="h-5 w-5 text-gray-400 mt-1 flex-shrink-0" />
                        <p className="text-gray-600 italic">{testimonial.text}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Community Stats</h3>
              <div className="space-y-6">
                {stats.map((stat, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-800 rounded-lg flex items-center justify-center">
                      <stat.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                      <div className="text-gray-600">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-emerald-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">💡 Skill of the Week</h4>
                <p className="text-gray-600 text-sm">
                  <strong>Urban Gardening</strong> - Learn to grow fresh herbs and vegetables in small spaces. 
                  Perfect for apartment dwellers!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}