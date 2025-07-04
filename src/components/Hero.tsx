import React from 'react';
import { MessageCircle, PlayCircle, CheckCircle2, Clock, Users, Smartphone } from 'lucide-react';

interface HeroProps {
  onGetStarted: () => void;
}

const Hero: React.FC<HeroProps> = ({ onGetStarted }) => {
  return (
    <section className="relative bg-gradient-to-br from-green-50 via-white to-green-50 pt-16 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full mb-6">
              <MessageCircle className="h-4 w-4 mr-2" />
              Learn via WhatsApp • Pay with M-PESA
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Master Skills in
              <span className="text-green-600 block">5 Minutes Daily</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
              Get personalized microlearning lessons delivered directly to your WhatsApp. 
              Perfect for busy professionals and students in Kenya and across Africa.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button
                onClick={onGetStarted}
                className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                Start Learning Free
              </button>
              <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold hover:border-green-600 hover:text-green-600 transition-colors flex items-center justify-center">
                <PlayCircle className="h-5 w-5 mr-2" />
                Watch Demo
              </button>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start space-x-6 text-sm text-gray-600">
              <div className="flex items-center">
                <CheckCircle2 className="h-4 w-4 text-green-600 mr-1" />
                Free 7-day trial
              </div>
              <div className="flex items-center">
                <Smartphone className="h-4 w-4 text-green-600 mr-1" />
                M-PESA payments
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="h-4 w-4 text-green-600 mr-1" />
                Cancel anytime
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-sm mx-auto">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-green-600 p-2 rounded-full">
                  <MessageCircle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">LearnBot</div>
                  <div className="text-sm text-green-600">• Online now</div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="bg-green-100 p-3 rounded-lg ml-auto max-w-xs">
                  <p className="text-sm text-green-800">Habari! Ready for today's lesson? 🇰🇪</p>
                </div>
                
                <div className="bg-gray-100 p-3 rounded-lg max-w-xs">
                  <p className="text-sm text-gray-800">📚 <strong>Digital Marketing Basics</strong></p>
                  <p className="text-sm text-gray-600 mt-1">Lesson 5: Social Media Strategy</p>
                  <p className="text-xs text-gray-500 mt-2">⏱️ 5 min read • 🎯 Beginner</p>
                </div>
                
                <div className="bg-gray-100 p-3 rounded-lg max-w-xs">
                  <p className="text-sm text-gray-800">Quick tip: Use the 80/20 rule for content - 80% value, 20% promotion! 💡</p>
                  <div className="mt-2 text-xs text-gray-500">
                    💳 Next payment: KSh 500 via M-PESA
                  </div>
                </div>
                
                <div className="bg-green-100 p-3 rounded-lg ml-auto max-w-xs">
                  <p className="text-sm text-green-800">Asante! Send me today's quiz 🧠</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-3">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-green-600" />
                <span className="text-sm font-medium">5 min/day</span>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-3">
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4 text-green-600" />
                <span className="text-sm font-medium">50k+ learners</span>
              </div>
            </div>

            <div className="absolute top-1/2 -right-8 bg-green-600 text-white rounded-lg shadow-lg p-3 transform -translate-y-1/2">
              <div className="text-center">
                <Smartphone className="h-6 w-6 mx-auto mb-1" />
                <div className="text-xs font-medium">M-PESA</div>
                <div className="text-xs">Ready</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;