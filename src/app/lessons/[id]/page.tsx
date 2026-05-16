'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Link from 'next/link';
import { Play, CheckCircle2, ChevronRight, Video, FileText, HelpCircle } from 'lucide-react';

export default function LessonView({ params }: { params: { id: string } }) {
  const [answer, setAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const handleCheck = () => {
    if (answer.trim() === '3') {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  return (
    <div className="min-h-screen bg-brand-classic-cream flex flex-col">
      <Header />

      <main className="flex-1 max-w-7xl mx-auto px-8 py-12 w-full">
        <h1 className="text-4xl font-bold text-brand-deep-navy mb-8">Lesson View</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-8">
            {/* Video Player Placeholder */}
            <div className="bg-brand-deep-navy rounded-3xl aspect-video relative flex items-center justify-center overflow-hidden shadow-xl">
              <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                <Play className="text-white fill-current" size={48} />
              </div>
              
              {/* Video Controls Bar */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                <div className="flex items-center gap-4 text-white text-sm">
                  <Play size={20} className="fill-current" />
                  <div className="flex-1 bg-white/30 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-brand-soft-blue h-full w-1/3 rounded-full"></div>
                  </div>
                  <span>12:34</span>
                  <Video size={20} />
                </div>
              </div>
            </div>

            {/* Problem Section */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-brand-soft-blue/10">
              <h2 className="text-2xl font-bold text-brand-deep-navy mb-6">Problem</h2>
              <div className="space-y-4 mb-8 text-xl text-brand-dark-slate">
                <p>Solve for x:</p>
                <p className="text-3xl font-bold tracking-widest">2x + 5 = 11</p>
              </div>
              
              <div className="flex gap-4 items-center">
                <input
                  type="text"
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  placeholder="Enter your answer"
                  className="bg-brand-classic-cream/50 border-2 border-brand-soft-blue/20 rounded-2xl px-6 py-4 text-xl w-64 focus:outline-none focus:border-brand-soft-blue transition-colors"
                />
                <button
                  onClick={handleCheck}
                  className="bg-brand-soft-blue text-brand-deep-navy font-bold px-8 py-4 rounded-2xl hover:bg-brand-soft-blue/80 transition-colors"
                >
                  Check Answer
                </button>
                {isCorrect === true && (
                  <CheckCircle2 className="text-green-500" size={32} />
                )}
                {isCorrect === false && (
                  <span className="text-red-500 font-bold">Try again!</span>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar / Outline Area */}
          <div className="space-y-8">
            {/* Lesson Outline */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-brand-soft-blue/10">
              <h3 className="text-xl font-bold text-brand-deep-navy mb-6">Lesson Outline</h3>
              <div className="space-y-4">
                {[
                  { name: 'Introduction', active: false },
                  { name: 'Theory', active: true },
                  { name: 'Examples', active: false },
                  { name: 'Practice', active: false },
                ].map((item) => (
                  <div
                    key={item.name}
                    className={`flex items-center justify-between p-4 rounded-2xl cursor-pointer transition-colors ${
                      item.active
                        ? 'bg-brand-soft-blue/20 border-2 border-brand-soft-blue/30'
                        : 'hover:bg-brand-classic-cream/50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${item.active ? 'bg-brand-soft-blue' : 'bg-brand-soft-blue/30'}`}></div>
                      <span className={`font-semibold ${item.active ? 'text-brand-deep-navy' : 'text-brand-dark-slate/60'}`}>
                        {item.name}
                      </span>
                    </div>
                    {item.active && <ChevronRight size={20} className="text-brand-deep-navy" />}
                  </div>
                ))}
              </div>
            </div>

            {/* Notes Section */}
            <div className="bg-brand-soft-blue/20 rounded-3xl p-8 border-2 border-brand-soft-blue/30">
              <h3 className="text-xl font-bold text-brand-deep-navy mb-4 flex items-center gap-2">
                <FileText size={20} />
                Notes
              </h3>
              <div className="space-y-2 text-brand-deep-navy/80 font-mono text-lg">
                <p>(2x + 5) - 5 = 11 - 5</p>
                <p>2x = 6</p>
              </div>
            </div>

            {/* Need Help? */}
            <div className="bg-brand-orange/10 rounded-3xl p-8 border-2 border-brand-orange/20">
              <h3 className="text-xl font-bold text-brand-orange mb-4 flex items-center gap-2">
                <HelpCircle size={20} />
                Need Help?
              </h3>
              <p className="text-brand-dark-slate text-sm mb-4">
                Don't worry! Ask a tutor or watch the theory video again.
              </p>
              <Link 
                href="/contact"
                className="text-brand-orange font-bold text-sm hover:underline"
              >
                Message Tutor
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
