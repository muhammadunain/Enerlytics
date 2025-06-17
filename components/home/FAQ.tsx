import { faqs } from '@/constants'
import React from 'react'

const FAQ = () => {
  return (
    <section className="py-20 bg-slate-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="p-6 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700">
                <h3 className="text-xl font-bold text-white mb-4">{faq.question}</h3>
                <p className="text-slate-300 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default FAQ