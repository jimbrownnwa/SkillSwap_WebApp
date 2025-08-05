import React from 'react';
import { User, Handshake, ArrowRightLeft } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: User,
      title: "List Your Skills",
      description: "Share what you can teach and what you'd like to learn. Set your availability and preferences."
    },
    {
      icon: Handshake,
      title: "Find Matches",
      description: "Browse nearby neighbors with complementary skills. Use our smart matching algorithm."
    },
    {
      icon: ArrowRightLeft,
      title: "Make the Trade",
      description: "Connect safely, schedule your exchange, and start learning from each other."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How SkillSwap Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Three simple steps to start exchanging skills with your neighbors
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-blue-800 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="h-10 w-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}