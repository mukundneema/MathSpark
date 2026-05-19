'use client';

import React, { useState } from 'react';
import { Mail, Send, MessageSquare, Calendar, Laptop, MapPin } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
      {/* Contact Information */}
      <div className="space-y-8">
        <div className="bg-white rounded-3xl p-10 shadow-sm border border-brand-soft-blue/10 space-y-8">
          <h2 className="text-3xl font-bold text-brand-deep-navy">Contact Information</h2>
          
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-brand-orange/10 rounded-xl flex items-center justify-center text-brand-orange shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="font-bold text-brand-deep-navy text-lg">General Inquiries</h3>
                <p className="text-brand-dark-slate/70 font-medium">info@mathspark.edu</p>
                <p className="text-brand-dark-slate/50 text-sm mt-1">(555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-brand-soft-blue/10 rounded-xl flex items-center justify-center text-brand-soft-blue shrink-0">
                <Calendar size={24} />
              </div>
              <div>
                <h3 className="font-bold text-brand-deep-navy text-lg">Session Booking</h3>
                <p className="text-brand-dark-slate/70 font-medium">bookings@mathspark.edu</p>
                <p className="text-brand-dark-slate/50 text-sm mt-1">Available for 1-on-1 and group workshops.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600 shrink-0">
                <Laptop size={24} />
              </div>
              <div>
                <h3 className="font-bold text-brand-deep-navy text-lg">Technical Support</h3>
                <p className="text-brand-dark-slate/70 font-medium">support@mathspark.edu</p>
                <p className="text-brand-dark-slate/50 text-sm mt-1">Live Chat: Mon - Fri, 9 AM - 5 PM EST</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-brand-deep-navy text-white p-8 rounded-3xl relative overflow-hidden group">
           <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-2">Join the Spark!</h3>
              <p className="text-white/70">At Math Spark, we believe that open communication is the first step toward building a successful learning partnership.</p>
           </div>
           <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
              <MapPin size={120} />
           </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-white rounded-3xl p-10 shadow-xl border border-brand-soft-blue/10">
        {submitted ? (
          <div className="h-full flex flex-col items-center justify-center text-center space-y-6 py-12">
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
              <Send size={40} />
            </div>
            <h2 className="text-3xl font-bold text-brand-deep-navy">Message Sent!</h2>
            <p className="text-brand-dark-slate/70 text-lg">
              Thank you for reaching out. We'll get back to you as soon as possible.
            </p>
            <button 
              onClick={() => setSubmitted(false)}
              className="bg-brand-deep-navy text-white px-8 py-3 rounded-xl font-bold hover:bg-brand-dark-slate transition-colors"
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-bold text-brand-deep-navy">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full px-6 py-4 rounded-xl bg-brand-classic-cream border border-brand-soft-blue/20 focus:outline-none focus:border-brand-orange transition-colors text-brand-deep-navy font-medium"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-bold text-brand-deep-navy">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full px-6 py-4 rounded-xl bg-brand-classic-cream border border-brand-soft-blue/20 focus:outline-none focus:border-brand-orange transition-colors text-brand-deep-navy font-medium"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="block text-sm font-bold text-brand-deep-navy">Subject</label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-6 py-4 rounded-xl bg-brand-classic-cream border border-brand-soft-blue/20 focus:outline-none focus:border-brand-orange transition-colors text-brand-deep-navy font-medium appearance-none"
              >
                <option>General Inquiry</option>
                <option>Session Booking</option>
                <option>Technical Support</option>
                <option>Feedback</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-bold text-brand-deep-navy">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="How can we help you?"
                className="w-full px-6 py-4 rounded-xl bg-brand-classic-cream border border-brand-soft-blue/20 focus:outline-none focus:border-brand-orange transition-colors text-brand-deep-navy font-medium resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-brand-orange text-white py-4 rounded-xl font-bold text-lg hover:bg-orange-600 transition-colors shadow-lg shadow-orange-900/20 flex items-center justify-center gap-2 group"
            >
              Send Message
              <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
