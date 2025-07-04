import React from 'react';
import { MessageCircle, Clock, Trophy, BookOpen, Smartphone, Zap } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: MessageCircle,
      title: 'WhatsApp Integration',
      description: 'Learn directly from your favorite messaging app. No downloads needed.',
      color: 'text-green-600 bg-green-100'
    },
    {
      icon: Clock,
      title: '5-Minute Lessons',
      description: 'Bite-sized content that fits into your busy schedule perfectly.',
      color: 'text-blue-600 bg-blue-100'
    },
    {
      icon: BookOpen,
      title: 'Diverse Skills',
      description: 'Vocational training, English, digital skills, and much more.',
      color: 'text-purple-600 bg-purple-100'
    },
    {
      icon: Trophy,
      title: 'Certificates & Badges',
      description: 'Earn recognized credentials as you complete courses.',
      color: 'text-yellow-600 bg-yellow-100'
    },
    {
      icon: Smartphone,
      title: 'Mobile-First',
      description: 'Designed for learning on the go, wherever you are.',
      color: 'text-red-600 bg-red-100'
    },
    {
      icon: Zap,
      title: 'AI-Powered',
      description: 'Personalized learning paths adapted to your pace and goals.',
      color: 'text-indigo-600 bg-indigo-100'
    }
  ];

  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose LearnBot?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We've reimagined learning for the mobile age. Get personalized, bite-sized lessons 
            that actually fit into your life.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`inline-flex p-3 rounded-lg ${feature.color} mb-4`}>
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;