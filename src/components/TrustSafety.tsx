import React from 'react';
import { Shield, CheckCircle, Users, MessageCircle, Eye, Star } from 'lucide-react';

export default function TrustSafety() {
  const safetyFeatures = [
    {
      icon: CheckCircle,
      title: "Identity Verification",
      description: "All members verify their identity through email, phone, and photo ID"
    },
    {
      icon: Star,
      title: "Review System",
      description: "Rate and review every interaction to maintain community standards"
    },
    {
      icon: MessageCircle,
      title: "Secure Messaging",
      description: "Built-in chat system keeps conversations safe and documented"
    },
    {
      icon: Users,
      title: "Meet Publicly First",
      description: "We recommend initial meetings in public spaces for everyone's safety"
    },
    {
      icon: Eye,
      title: "Community Guidelines",
      description: "Clear rules and active moderation ensure a positive environment"
    },
    {
      icon: Shield,
      title: "24/7 Support",
      description: "Our team is always available to help resolve any issues"
    }
  ];

  return (
    <section id="safety" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Shield className="h-4 w-4" />
            <span>Your Safety is Our Priority</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trust & Safety Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We've built comprehensive safety measures to ensure every skill exchange 
            is secure, fair, and positive for everyone involved.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {safetyFeatures.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-blue-800 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16">
          <div className="bg-gradient-to-r from-blue-800 to-emerald-800 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Community Guidelines</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              SkillSwap is built on trust, respect, and mutual learning. Here are our core principles:
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div>
                <h4 className="font-semibold mb-2">🤝 Be Respectful</h4>
                <p className="text-blue-100 text-sm">Treat every community member with kindness and respect</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">⚖️ Trade Fairly</h4>
                <p className="text-blue-100 text-sm">Ensure exchanges are balanced and mutually beneficial</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">🛡️ Stay Safe</h4>
                <p className="text-blue-100 text-sm">Meet in public spaces and trust your instincts</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}