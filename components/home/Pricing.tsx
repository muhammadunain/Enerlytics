import React from 'react'

const Pricing = () => {
  return (
     <section id="pricing" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Flexible Plans for Every Portfolio Size
          </h2>
          <p className="text-xl text-slate-300 mb-8 leading-relaxed">
            Start with our free energy assessment, then choose the plan that fits your needs. 
            From individual properties to large commercial portfolios, we have solutions that scale with your business.
          </p>
          <button className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-emerald-500/25">
            Get Custom Pricing
          </button>
        </div>
      </section>
  )
}

export default Pricing