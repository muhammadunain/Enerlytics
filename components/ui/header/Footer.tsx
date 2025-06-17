import { Mail, MapPin, Phone, Zap } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
     <footer className="bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-4">
                <Zap className="h-8 w-8 text-emerald-400" />
                <span className="ml-2 text-2xl font-bold text-white">Enerlytics</span>
              </div>
              <p className="text-slate-400 mb-6">
                Making energy efficiency simple, profitable, and measurable for property portfolios of all sizes.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-slate-400">
                  <Mail className="h-4 w-4 mr-2" />
                  hello@enerlytics.com
                </div>
                <div className="flex items-center text-slate-400">
                  <Phone className="h-4 w-4 mr-2" />
                  +44 (0) 20 XXXX XXXX
                </div>
                <div className="flex items-center text-slate-400">
                  <MapPin className="h-4 w-4 mr-2" />
                  London, UK
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Demo</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">API</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Cookie Policy</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Data Protection</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 Enerlytics. All rights reserved.</p>
          </div>
        </div>
      </footer>
  )
}

export default Footer