import React, { useState } from 'react';
import { Check, Star, Crown, Zap } from 'lucide-react';
import MPesaPayment from './MPesaPayment';

interface PricingProps {
  onSubscribe: () => void;
}

const Pricing: React.FC<PricingProps> = ({ onSubscribe }) => {
  const [showPayment, setShowPayment] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<any>(null);

  const plans = [
    {
      name: 'Basic',
      price: 500,
      period: '/month',
      description: 'Perfect for getting started',
      icon: Zap,
      features: [
        '1 learning path',
        '5-minute daily lessons',
        'Basic progress tracking',
        'WhatsApp support',
        'Mobile access'
      ],
      color: 'border-gray-200',
      buttonColor: 'bg-gray-900 hover:bg-gray-800',
      popular: false
    },
    {
      name: 'Premium',
      price: 1200,
      period: '/month',
      description: 'Most popular choice',
      icon: Star,
      features: [
        '3 learning paths',
        '5-minute daily lessons',
        'Advanced analytics',
        'Priority WhatsApp support',
        'Certificates & badges',
        'Offline content access',
        'Custom learning schedule'
      ],
      color: 'border-green-500 ring-2 ring-green-500',
      buttonColor: 'bg-green-600 hover:bg-green-700',
      popular: true
    },
    {
      name: 'Pro',
      price: 2500,
      period: '/month',
      description: 'For serious learners',
      icon: Crown,
      features: [
        'Unlimited learning paths',
        'Personalized AI coaching',
        'Live expert sessions',
        '1-on-1 mentorship',
        'Industry certifications',
        'Job placement assistance',
        'Team collaboration tools'
      ],
      color: 'border-purple-200',
      buttonColor: 'bg-purple-600 hover:bg-purple-700',
      popular: false
    }
  ];

  const handleSubscribe = (plan: any) => {
    setSelectedPlan(plan);
    setShowPayment(true);
  };

  const handlePaymentSuccess = (transactionId: string) => {
    console.log('Payment successful:', transactionId);
    setShowPayment(false);
    onSubscribe();
  };

  const handlePaymentCancel = () => {
    setShowPayment(false);
    setSelectedPlan(null);
  };

  return (
    <>
      <section id="pricing" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
              Start with a 7-day free trial. Pay securely with M-PESA. Cancel anytime.
            </p>
            <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
              💳 Pay with M-PESA • Secure & Instant
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white border-2 ${plan.color} rounded-2xl p-8 ${
                  plan.popular ? 'transform scale-105 shadow-2xl' : 'shadow-lg'
                } transition-all duration-300 hover:shadow-xl`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <div className={`inline-flex p-3 rounded-lg mb-4 ${
                    plan.popular ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-600'
                  }`}>
                    <plan.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-gray-900">KSh {plan.price.toLocaleString()}</span>
                    <span className="text-gray-600 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">≈ ${(plan.price / 130).toFixed(0)} USD</p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button
                  onClick={() => handleSubscribe(plan)}
                  className={`w-full ${plan.buttonColor} text-white py-4 rounded-lg font-semibold text-lg transition-colors`}
                >
                  Pay with M-PESA
                </button>
                
                <p className="text-center text-sm text-gray-500 mt-4">
                  7-day free trial • Cancel anytime
                </p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <div className="bg-gray-50 rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Why M-PESA?
              </h3>
              <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-600">
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-green-600">✓</span>
                  <span>Instant payments</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-green-600">✓</span>
                  <span>No credit card needed</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-green-600">✓</span>
                  <span>Secure & trusted</span>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <p className="text-gray-600 mb-4">
                Need a custom plan for your organization?
              </p>
              <button className="text-green-600 font-semibold hover:text-green-700 transition-colors">
                Contact Sales →
              </button>
            </div>
          </div>
        </div>
      </section>

      {showPayment && selectedPlan && (
        <MPesaPayment
          amount={selectedPlan.price}
          planName={selectedPlan.name}
          onSuccess={handlePaymentSuccess}
          onCancel={handlePaymentCancel}
        />
      )}
    </>
  );
};

export default Pricing;