'use client'
import { Menu, X, Zap } from 'lucide-react';
import React, { useEffect, useState } from 'react'
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
      const handleScroll = () => {
        setScrolled(window.scrollY > 50);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  return (
     <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Zap className="h-8 w-8 text-emerald-400" />
              <span className="ml-2 text-2xl font-bold text-white">Enerlytics</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-slate-300 hover:text-emerald-400 transition-colors">Features</a>
              <a href="#how-it-works" className="text-slate-300 hover:text-emerald-400 transition-colors">How It Works</a>
              <a href="#pricing" className="text-slate-300 hover:text-emerald-400 transition-colors">Pricing</a>
              <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-full font-semibold transition-colors">
                Get Started
              </button>
            </div>

            <button 
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-md">
            <div className="px-4 py-4 space-y-4">
              <a href="#features" className="block text-slate-300 hover:text-emerald-400">Features</a>
              <a href="#how-it-works" className="block text-slate-300 hover:text-emerald-400">How It Works</a>
              <a href="#pricing" className="block text-slate-300 hover:text-emerald-400">Pricing</a>
              <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-full font-semibold">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>
  )
}

export default Navbar