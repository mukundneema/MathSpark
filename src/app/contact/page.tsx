import type { Metadata } from "next";
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MessageSquare } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: "Contact Us | Math Spark Support",
  description: "Have questions or want to book a math tutoring session? Reach out to the Math Spark team. We're here to help you on your learning journey.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-brand-classic-cream flex flex-col font-sans">
      <Header />

      <main className="flex-1 max-w-7xl mx-auto px-8 py-16 w-full">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-brand-deep-navy mb-4">Get in Touch</h1>
          <p className="text-xl text-brand-dark-slate/70 max-w-2xl mx-auto leading-relaxed">
            We love hearing from students and parents! Whether you have a question about our curriculum, want to book a session, or just want to say hi, we're here to help.
          </p>
        </div>

        <ContactForm />

        {/* FAQs */}
        <div className="mt-24 space-y-12">
          <h2 className="text-4xl font-bold text-brand-deep-navy text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                q: "What age groups do you teach?",
                a: "We specialize in working with elementary and middle school students, typically ranging from 3rd to 8th grade. Our curriculum is designed to be age-appropriate and engaging for these foundational years."
              },
              {
                q: "How long is a typical tutoring session?",
                a: "Standard sessions are 60 minutes long. However, we also offer 45-minute sessions for younger students and 90-minute intensive sessions for advanced topics or competition prep."
              },
              {
                q: "Do you offer group classes or only 1-on-1?",
                a: "While our primary focus is on personalized 1-on-1 instruction, we do occasionally offer small-group workshops (max 4 students) for specific topics like \"Algebra Jumpstart\" or \"Math Olympiad Basics.\""
              },
              {
                q: "What if we need to cancel or reschedule?",
                a: "We ask for at least 24 hours' notice for any cancellations or rescheduling. This allows us to offer the time slot to another student on our waiting list."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white p-8 rounded-3xl border border-brand-soft-blue/10 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-brand-deep-navy mb-4 flex items-start gap-2">
                  <MessageSquare className="text-brand-orange shrink-0 mt-1" size={20} />
                  {faq.q}
                </h3>
                <p className="text-brand-dark-slate/70 leading-relaxed pl-7">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
