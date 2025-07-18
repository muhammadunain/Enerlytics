import React from 'react';
import { CheckIcon } from '@heroicons/react/24/solid';

interface PricingTierProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  buttonText: string;
}

const PricingTier: React.FC<PricingTierProps> = ({ 
  name, 
  price, 
  description, 
  features, 
  highlighted = false,
  buttonText
}) => {
  return (
    <div className={`rounded-2xl p-8 shadow-xl ${highlighted ? 'bg-gradient-to-b from-emerald-600 to-emerald-800 border-2 border-emerald-400 transform scale-105' : 'bg-slate-800'}`}>
      <div className="mb-6">
        <h3 className={`text-xl font-bold ${highlighted ? 'text-white' : 'text-emerald-400'}`}>{name}</h3>
        <div className="mt-4 flex items-baseline">
          <span className={`text-4xl font-extrabold ${highlighted ? 'text-white' : 'text-white'}`}>
            Coming Soon
          </span>
          {price !== 'Custom' && <span className={`ml-1 text-xl ${highlighted ? 'text-emerald-200' : 'text-slate-400'}`}>/month</span>}
        </div>
        <p className={`mt-2 text-sm ${highlighted ? 'text-emerald-100' : 'text-slate-300'}`}>{description}</p>
      </div>
      
      <ul className="mt-6 space-y-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <div className={`flex-shrink-0 ${highlighted ? 'text-emerald-300' : 'text-emerald-500'}`}>
              <CheckIcon className="h-5 w-5" />
            </div>
            <p className={`ml-3 text-sm ${highlighted ? 'text-white' : 'text-slate-300'}`}>{feature}</p>
          </li>
        ))}
      </ul>
      
      <div className="mt-8">
        <button 
          className={`w-full rounded-lg cursor-pointer py-3 px-4 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 ${
            highlighted 
              ? 'bg-white text-emerald-700 hover:bg-emerald-50 focus:ring-white' 
              : 'bg-emerald-600 text-white hover:bg-emerald-700 focus:ring-emerald-500'
          }`}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

const Pricing = () => {
  const pricingTiers = [
    {
      name: 'Starter',
      price: '$99',
      description: 'Perfect for individual properties or small portfolios.',
      features: [
        'Energy assessment for up to 3 properties',
        'Monthly consumption reports',
        'Basic efficiency recommendations',
        'Email support',
        'Access to knowledge base'
      ],
      buttonText: 'Get Started'
    },
    {
      name: 'Professional',
      price: '$299',
      description: 'Ideal for growing portfolios with advanced needs.',
      features: [
        'Energy assessment for up to 10 properties',
        'Weekly consumption analytics',
        'Advanced efficiency recommendations',
        'ROI calculations for improvements',
        'Priority email & phone support',
        'API access'
      ],
      highlighted: true,
      buttonText: 'Start Free Trial'
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'Tailored solutions for large commercial portfolios.',
      features: [
        'Unlimited property assessments',
        'Real-time energy monitoring',
        'Custom reporting dashboard',
        'Dedicated account manager',
        'On-site consultations',
        'Full API integration',
        'Compliance reporting'
      ],
      buttonText: 'Contact Sales'
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Flexible Plans for Every Portfolio Size
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Start with our free energy assessment, then choose the plan that fits your needs. 
            From individual properties to large commercial portfolios, we have solutions that scale with your business.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <PricingTier key={index} {...tier} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-slate-300 mb-6">
            Need a custom solution? We can tailor our services to your specific requirements.
          </p>
          <button className="bg-gradient-to-r  cursor-pointer from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-emerald-500/25">
            Get Custom Pricing
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
