'use client';

import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import { Search, ChevronDown, ChevronUp, Mail, HelpCircle, Laptop, CreditCard, BookOpen } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface FAQItemProps {
  question: string;
  answer: React.ReactNode;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-brand-soft-blue/10 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left hover:text-brand-soft-blue transition-colors group"
      >
        <span className="text-lg font-bold text-brand-deep-navy group-hover:text-brand-soft-blue">{question}</span>
        {isOpen ? (
          <ChevronUp className="text-brand-soft-blue shrink-0" size={20} />
        ) : (
          <ChevronDown className="text-brand-dark-slate/40 shrink-0" size={20} />
        )}
      </button>
      {isOpen && (
        <div className="pb-6 text-brand-dark-slate/70 leading-relaxed animate-in slide-in-from-top-2 duration-300">
          {answer}
        </div>
      )}
    </div>
  );
};

export default function HelpContent() {
  return (
    <div className="flex bg-brand-classic-cream min-h-screen font-sans">
      <Sidebar />
      
      <main className="flex-1 lg:ml-64 p-4 md:p-8">
        {/* Top Header */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12 pt-12 lg:pt-0">
          <div>
            <h1 className="text-4xl font-bold text-brand-deep-navy tracking-tight">Help Center</h1>
            <p className="text-brand-dark-slate/60 mt-1">Find answers and support for your Spark journey.</p>
          </div>
          
          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-brand-dark-slate/40" size={18} />
              <input 
                type="text" 
                placeholder="Search help topics..." 
                className="w-full pl-10 pr-4 py-2 bg-white rounded-full border border-brand-soft-blue/20 focus:outline-none focus:ring-2 focus:ring-brand-soft-blue/50 text-brand-dark-slate"
              />
            </div>
          </div>
        </header>

        {/* Support Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { title: 'My Account', icon: 'help-account-icon.png', desc: 'Manage your profile and settings.' },
            { title: 'Platform Guide', icon: 'help-courses-icon.png', desc: 'How to use our learning tools.' },
            { title: 'Billing', icon: 'help-billing-icon.png', desc: 'Plans, payments, and receipts.' },
            { title: 'Technical', icon: 'help-technical-icon.png', desc: 'Troubleshooting common issues.' },
          ].map((cat) => (
            <div key={cat.title} className="bg-white p-6 rounded-2xl border border-brand-soft-blue/10 shadow-sm hover:shadow-md transition-shadow text-center group cursor-pointer">
              <div className="w-16 h-16 bg-brand-classic-cream rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Image src={`/assets/${cat.icon}`} alt={cat.title} width={40} height={40} />
              </div>
              <h3 className="font-bold text-brand-deep-navy mb-2">{cat.title}</h3>
              <p className="text-sm text-brand-dark-slate/60">{cat.desc}</p>
            </div>
          ))}
        </div>

        <div className="space-y-12 max-w-4xl">
          {/* Platform Usage */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-brand-soft-blue/10 rounded-lg text-brand-soft-blue">
                <BookOpen size={24} />
              </div>
              <h2 className="text-2xl font-bold text-brand-deep-navy">Using the Math Spark Platform</h2>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-brand-soft-blue/10">
              <FAQItem 
                question="How do I start a lesson?" 
                answer={<p>Once you log in to your <strong>Student Dashboard</strong>, you'll see your current course under "My Learning." Simply click on the course card to view the module list, and click "Start" on the next available lesson.</p>}
              />
              <FAQItem 
                question="How do I track my progress?" 
                answer={<p>Your dashboard features a <strong>Progress Tracker</strong> that shows how many lessons you've completed in your current course. You can also see your "Sparks" (points) and any badges you've earned in the "Achievements" section.</p>}
              />
              <FAQItem 
                question="What if I get stuck on a problem?" 
                answer={<p>Every lesson includes a "Get a Hint" button. If you're still stuck after the hint, you can use the "Message Tutor" button to send a quick question to Mukund or our support team. We usually respond within a few hours during school days!</p>}
              />
            </div>
          </section>

          {/* Technical Support */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-green-100 rounded-lg text-green-600">
                <Laptop size={24} />
              </div>
              <h2 className="text-2xl font-bold text-brand-deep-navy">Technical Support</h2>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-brand-soft-blue/10">
              <FAQItem 
                question="The video won't play. What should I do?" 
                answer={
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Check your internet connection.</li>
                    <li>Refresh your browser page.</li>
                    <li>Ensure your browser is up to date (we recommend Chrome or Firefox).</li>
                    <li>If it still doesn't work, email us at <a href="mailto:support@mathspark.edu" className="text-brand-soft-blue font-bold hover:underline">support@mathspark.edu</a> with a screenshot of the error.</li>
                  </ol>
                }
              />
              <FAQItem 
                question="I forgot my password!" 
                answer={<p>Click the "Forgot Password" link on the login page. We'll send a reset link to the email address associated with your account.</p>}
              />
            </div>
          </section>

          {/* Billing */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-brand-orange/10 rounded-lg text-brand-orange">
                <CreditCard size={24} />
              </div>
              <h2 className="text-2xl font-bold text-brand-deep-navy">Billing & Subscriptions</h2>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-brand-soft-blue/10">
              <FAQItem 
                question="What are the different plans?" 
                answer={
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Self-Paced Spark:</strong> Access to all recorded courses, practice problems, and the student community.</li>
                    <li><strong>1-on-1 Mastery:</strong> Everything in the Self-Paced plan, plus weekly private sessions with Mukund Neema.</li>
                  </ul>
                }
              />
              <FAQItem 
                question="How do I pay for 1-on-1 sessions?" 
                answer={<p>Sessions are billed monthly at the start of each month. You can update your payment method in the "Parent Portal" section of the dashboard.</p>}
              />
              <FAQItem 
                question="What is your refund policy?" 
                answer={<p>We offer a 7-day money-back guarantee for our Self-Paced Spark plan if you're not satisfied. For 1-on-1 sessions, we require 24 hours' notice for cancellations to receive a session credit.</p>}
              />
            </div>
          </section>
        </div>

        {/* Contact Footer */}
        <div className="mt-16 bg-brand-deep-navy rounded-3xl p-10 text-white relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-2">Still need help?</h2>
            <p className="text-white/70">Our team is ready to answer your questions.</p>
          </div>
          <Link href="/contact" className="relative z-10 bg-brand-orange hover:bg-orange-600 text-white px-10 py-4 rounded-xl font-bold transition-colors flex items-center gap-3 group">
            <Mail size={20} className="group-hover:translate-x-1 transition-transform" />
            Contact Support
          </Link>
          <div className="absolute right-[-5%] bottom-[-20%] opacity-10">
             <HelpCircle size={200} />
          </div>
        </div>
      </main>
    </div>
  );
}
