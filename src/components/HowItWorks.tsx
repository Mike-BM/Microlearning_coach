import React from 'react';
import { MessageSquare, BookOpen, Award, ArrowRight } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: MessageSquare,
      title: 'Connect WhatsApp',
      description: 'Simply send a message to our WhatsApp number to get started',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: BookOpen,
      title: 'Choose Your Path',
      description: 'Select from vocational skills, English, or digital courses',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Award,
      title: 'Learn & Earn',
      description: 'Complete lessons, take quizzes, and earn certificates',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Start learning in under 2 minutes. It's that simple.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon className="h-8 w-8" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
                {index < steps.length - 1 && (
                  <ArrowRight className="hidden md:block absolute top-8 -right-8 h-6 w-6 text-gray-400" />
                )}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <button className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-green-700 hover:to-green-800 transform hover:scale-105 transition-all duration-200 shadow-lg">
            Start Your Free Trial
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;