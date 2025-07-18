import { CheckCircle, ChevronRight } from 'lucide-react'
import React from 'react'

const CallToAction = () => {
  return (
   <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Energy Performance?
          </h2>
          <p className="text-xl text-slate-300 mb-8 leading-relaxed">
            Join hundreds of property managers who are already saving money, reducing emissions, 
            and future-proofing their portfolios with Enerlytics.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button className="group cursor-pointer bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-emerald-500/25">
              Start Your Free Assessment
              <ChevronRight className="inline-block ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="text-white cursor-pointer px-8 py-4 rounded-full font-semibold text-lg border border-slate-600 hover:border-emerald-400 transition-colors">
              Schedule a Demo
            </button>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 text-slate-400 text-sm">
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-emerald-400 mr-2" />
              No credit card required
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-emerald-400 mr-2" />
              Free energy audit included
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-emerald-400 mr-2" />
              Results in 24 hours
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-emerald-400 mr-2" />
              Cancel anytime
            </div>
          </div>
        </div>
      </section>
  )
}

export default CallToAction