import { BarChart2, CheckCircle, ChevronRight, Play, Sparkles, Zap } from 'lucide-react'
import React from 'react'

const Hero = () => {
  return (
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 bg-gradient-to-b from-slate-900 to-slate-800">
        {/* Enhanced Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-80 h-80 bg-emerald-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
          <div className="absolute bottom-40 right-1/4 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-3000"></div>
          
          {/* Animated particles */}
          <div className="absolute inset-0 z-0 opacity-30">
            <div className="stars-container">
              {[...Array(20)].map((_, i) => (
                <div 
                  key={i} 
                  className="absolute rounded-full bg-white w-1 h-1 animate-twinkle"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 5}s`,
                    animationDuration: `${3 + Math.random() * 5}s`
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Branded badge */}
            <div className="inline-flex items-center px-4 py-2 bg-slate-800/50 backdrop-blur-sm rounded-full border border-slate-700 mb-6 animate-fadeIn">
              <Sparkles className="h-4 w-4 text-emerald-400 mr-2" />
              <span className="text-sm font-medium text-slate-300">Enerlytics — Smart Energy Management</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl  font-bold text-white leading-tight mb-6 animate-fadeInUp">
              Take Control of Your{' '}
              <span className="relative">
                <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-blue-500 bg-clip-text text-transparent">
                  Energy Future
                </span>
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-10 leading-relaxed animate-fadeInUp animation-delay-200">
              Transform your property portfolio with intelligent energy management.
              <br className="hidden md:block" />
              <span className="text-emerald-400 font-semibold">Reduce costs by up to 40%</span>, 
              <span className="text-blue-400 font-semibold"> cut CO₂ emissions by 25%</span>, and accelerate your path to net zero.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-14 animate-fadeInUp animation-delay-400">
              <button className="group bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-emerald-500/30 flex items-center">
                Get Your Energy Assessment
                <ChevronRight className="inline-block ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="group flex items-center text-white px-8 py-4 rounded-full font-semibold text-lg border border-slate-600 hover:border-emerald-400 transition-all duration-300 hover:bg-slate-800/50 backdrop-blur-sm">
                <Play className="h-5 w-5 mr-2 text-emerald-400 group-hover:scale-110 transition-transform" />
                Watch Demo
              </button>
            </div>

            {/* Enhanced Trust Signals */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-slate-300 text-sm mb-12 animate-fadeInUp animation-delay-600">
              <div className="flex items-center bg-slate-800/30 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-700/50 hover:border-emerald-500/50 transition-colors">
                <CheckCircle className="h-4 w-4 text-emerald-400 mr-2" />
                No credit card required
              </div>
              <div className="flex items-center bg-slate-800/30 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-700/50 hover:border-emerald-500/50 transition-colors">
                <Zap className="h-4 w-4 text-emerald-400 mr-2" />
                Results in 24 hours
              </div>
              <div className="flex items-center bg-slate-800/30 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-700/50 hover:border-emerald-500/50 transition-colors">
                <BarChart2 className="h-4 w-4 text-emerald-400 mr-2" />
                Free energy audit included
              </div>
            </div>
            
            {/* Client logos */}
            
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-20 -left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
      </section>
  )
}

export default Hero