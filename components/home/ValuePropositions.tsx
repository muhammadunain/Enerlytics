import { BarChart3, DollarSign, Leaf, Zap } from 'lucide-react'
import React from 'react'

const ValuePropositions = () => {
  return (
    <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Enerlytics?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 hover:border-emerald-500/50 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mr-4">
                  <DollarSign className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Maximize Savings</h3>
              </div>
              <p className="text-slate-300 leading-relaxed">
                Turn energy efficiency into profit. Our platform identifies personalized retrofit opportunities with guaranteed ROI, helping you save hundreds to thousands annually per property.
              </p>
            </div>

            <div className="group p-8 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 hover:border-emerald-500/50 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mr-4">
                  <Leaf className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Reduce Environmental Impact</h3>
              </div>
              <p className="text-slate-300 leading-relaxed">
                Cut your carbon footprint with precision. Track real-time CO₂ emissions and follow our guided pathways to achieve your sustainability goals faster.
              </p>
            </div>

            <div className="group p-8 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 hover:border-emerald-500/50 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mr-4">
                  <BarChart3 className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Smart Analytics</h3>
              </div>
              <p className="text-slate-300 leading-relaxed">
                Make informed decisions with comprehensive energy insights. Monitor usage patterns, benchmark performance, and receive actionable recommendations tailored to your properties.
              </p>
            </div>

            <div className="group p-8 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 hover:border-emerald-500/50 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mr-4">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Easy Implementation</h3>
              </div>
              <p className="text-slate-300 leading-relaxed">
                From smart thermostats to solar installations, we match you with the right solutions. Get difficulty ratings, cost estimates, and payback periods for every recommendation.
              </p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default ValuePropositions