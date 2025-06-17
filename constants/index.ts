import { Award, BarChart3, Building, DollarSign, Leaf, Monitor, Settings, Target, TrendingUp } from "lucide-react";

 export const stats = [
    { value: '£320K', label: 'Annual Savings Generated', icon: DollarSign },
    { value: '1,840', label: 'Tonnes CO₂ Reduced/Year', icon: Leaf },
    { value: '4.2', label: 'Years Average ROI', icon: TrendingUp },
    { value: '42%', label: 'Cost Reduction Potential', icon: BarChart3 }
  ];


  export const features = [
    {
      icon: Monitor,
      title: 'Real-Time Monitoring',
      description: 'Track daily, weekly, and monthly energy consumption with instant alerts for usage spikes.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Target,
      title: 'Personalized Recommendations',
      description: 'AI-powered suggestions with clear cost-benefit analysis and implementation timelines.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Building,
      title: 'Portfolio Management',
      description: 'Manage multiple properties from one dashboard with detailed reporting capabilities.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Award,
      title: 'EPC Integration',
      description: 'Comprehensive EPC rating analysis with 94.8% accuracy rate and compliance tracking.',
      color: 'from-orange-500 to-red-500'
    }
  ];


   export const steps = [
      {
        number: '01',
        title: 'Connect Your Data',
        description: 'Link your energy accounts and property information for instant analysis.',
        icon: Settings
      },
      {
        number: '02',
        title: 'Receive Recommendations',
        description: 'Get personalized retrofit suggestions ranked by impact and ROI.',
        icon: Target
      },
      {
        number: '03',
        title: 'Track Progress',
        description: 'Monitor savings in real-time and watch efficiency improvements.',
        icon: TrendingUp
      }
    ];
  
    export const benefits = [
      {
        category: 'Property Managers',
        items: [
          'Reduce operational costs across your entire portfolio',
          'Meet sustainability targets and ESG requirements',
          'Improve tenant satisfaction with lower energy bills',
          'Increase property values through efficiency improvements'
        ]
      },
      {
        category: 'Energy Consultants',
        items: [
          'Streamline client reporting with automated dashboards',
          'Identify new business opportunities across regions',
          'Demonstrate clear ROI to stakeholders',
          'Scale your practice with data-driven insights'
        ]
      },
      {
        category: 'Facility Managers',
        items: [
          'Optimize building performance with precision monitoring',
          'Reduce maintenance costs through predictive analytics',
          'Ensure compliance with energy regulations',
          'Implement cost-effective efficiency measures'
        ]
      }
    ];
  
   export const faqs = [
      {
        question: 'How quickly will I see results?',
        answer: 'Most clients see immediate insights within 24 hours of connecting their data, with actionable recommendations available instantly. Physical improvements typically show savings within the first month.'
      },
      {
        question: 'What types of properties do you support?',
        answer: 'Enerlytics works with residential (45%), commercial (30%), mixed-use (15%), and industrial (10%) properties across all regions.'
      },
      {
        question: 'How accurate are your savings projections?',
        answer: 'Our AI-powered recommendations have a 94.8% accuracy rate, with most clients achieving or exceeding projected savings within the first year.'
      },
      {
        question: 'Do you help with implementation?',
        answer: 'Yes, we provide detailed implementation guides, contractor recommendations, and project management support to ensure your retrofits deliver expected results.'
      }
    ];