'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Play, CheckCircle2, ChevronRight, Video, FileText, HelpCircle, ArrowLeft, XCircle } from 'lucide-react';

interface Lesson {
  id: string;
  title: string;
  content: string;
  practice?: {
    question: string;
    answer: string;
    explanation?: string;
  }[];
}

interface Module {
  id: string;
  title: string;
  lessons: Lesson[];
}

interface Course {
  id: string;
  title: string;
  description: string;
  icon?: string;
  modules?: Module[];
}

export default function LessonClient({ course }: { course: Course }) {
  const [answers, setAnswers] = useState<{[key: number]: string}>({});
  const [results, setResults] = useState<{[key: number]: boolean | null}>({});

  const handleCheck = (index: number, correctAnswer: string) => {
    const userAnswer = answers[index] || '';
    if (userAnswer.trim().toLowerCase() === correctAnswer.toLowerCase()) {
      setResults(prev => ({ ...prev, [index]: true }));
    } else {
      setResults(prev => ({ ...prev, [index]: false }));
    }
  };

  const handleInputChange = (index: number, value: string) => {
    setAnswers(prev => ({ ...prev, [index]: value }));
    if (results[index] !== null) {
      setResults(prev => ({ ...prev, [index]: null }));
    }
  };

  const firstModule = course.modules?.[0];
  const firstLesson = firstModule?.lessons?.[0];

  return (
    <div className="min-h-screen bg-brand-classic-cream flex flex-col">
      <Header />

      <main className="flex-1 max-w-7xl mx-auto px-8 py-12 w-full">
        <div className="flex items-center gap-4 mb-8">
          <Link href="/courses" className="p-2 bg-white rounded-full text-brand-deep-navy hover:text-brand-orange transition-colors shadow-sm">
            <ArrowLeft size={20} />
          </Link>
          <div>
            <span className="text-sm font-bold text-brand-soft-blue uppercase tracking-widest">{course.title}</span>
            <h1 className="text-4xl font-bold text-brand-deep-navy">
              {firstLesson ? firstLesson.title : 'Course Overview'}
            </h1>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-8">
            {firstLesson ? (
              <>
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

                {/* Lesson Content */}
                <div className="bg-white rounded-3xl p-10 shadow-sm border border-brand-soft-blue/10">
                  <h2 className="text-2xl font-bold text-brand-deep-navy mb-6">Lesson Content</h2>
                  <div className="prose prose-lg max-w-none text-brand-dark-slate">
                    {firstLesson.content.split('\n\n').map((para, i) => (
                      <p key={i} className="mb-4 leading-relaxed whitespace-pre-line">
                        {para}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Practice Section */}
                {firstLesson.practice && firstLesson.practice.length > 0 && (
                  <div className="space-y-8">
                    <h2 className="text-3xl font-bold text-brand-deep-navy px-2">Practice Problems</h2>
                    {firstLesson.practice.map((prob, idx) => (
                      <div key={idx} className="bg-white rounded-3xl p-10 shadow-sm border border-brand-soft-blue/10">
                        <div className="flex items-center gap-3 mb-6">
                           <div className="w-10 h-10 bg-brand-orange text-white rounded-full flex items-center justify-center font-bold">
                              {idx + 1}
                           </div>
                           <h3 className="text-xl font-bold text-brand-deep-navy">Problem {idx + 1}</h3>
                        </div>
                        <div className="space-y-4 mb-8 text-xl text-brand-dark-slate">
                          <p>{prob.question}</p>
                        </div>
                        
                        <div className="flex flex-wrap gap-4 items-center">
                          <input
                            type="text"
                            value={answers[idx] || ''}
                            onChange={(e) => handleInputChange(idx, e.target.value)}
                            placeholder="Your answer"
                            className="bg-brand-classic-cream/50 border-2 border-brand-soft-blue/20 rounded-2xl px-6 py-4 text-xl w-full sm:w-64 focus:outline-none focus:border-brand-orange transition-colors font-medium text-brand-deep-navy"
                          />
                          <button
                            onClick={() => handleCheck(idx, prob.answer)}
                            className="bg-brand-deep-navy text-white font-bold px-8 py-4 rounded-2xl hover:bg-brand-dark-slate transition-colors"
                          >
                            Check
                          </button>
                          {results[idx] === true && (
                            <div className="flex items-center gap-2 text-green-600 font-bold animate-in zoom-in duration-300">
                              <CheckCircle2 size={32} />
                              <span>Correct!</span>
                            </div>
                          )}
                          {results[idx] === false && (
                            <div className="flex items-center gap-2 text-red-500 font-bold animate-in shake duration-300">
                               <XCircle size={32} />
                               <span>Try again!</span>
                            </div>
                          )}
                        </div>
                        {results[idx] === true && prob.explanation && (
                          <div className="mt-8 p-8 bg-green-50 rounded-3xl border border-green-100 text-green-800 animate-in slide-in-from-top duration-500">
                            <p className="font-bold text-lg mb-3 flex items-center gap-2">
                               <FileText size={20} />
                               Explanation
                            </p>
                            <p className="text-lg leading-relaxed">{prob.explanation}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <div className="bg-white rounded-3xl p-12 shadow-sm border border-brand-soft-blue/10 text-center">
                <FileText className="mx-auto text-brand-soft-blue/30 mb-4" size={64} />
                <h2 className="text-2xl font-bold text-brand-deep-navy mb-4">Content Coming Soon</h2>
                <p className="text-brand-dark-slate/60 text-lg">
                  We're currently preparing the lessons for this course. Check back soon for the full curriculum!
                </p>
              </div>
            )}
          </div>

          {/* Sidebar / Outline Area */}
          <div className="space-y-8">
            {/* Lesson Outline */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-brand-soft-blue/10">
              <h3 className="text-xl font-bold text-brand-deep-navy mb-6">Course Modules</h3>
              <div className="space-y-4">
                {course.modules && course.modules.length > 0 ? (
                  course.modules.map((module) => (
                    <div key={module.id} className="space-y-2">
                      <h4 className="font-bold text-brand-soft-blue text-sm uppercase tracking-wider px-2">{module.title}</h4>
                      {module.lessons.map((lesson) => (
                        <div
                          key={lesson.id}
                          className={`flex items-center justify-between p-4 rounded-2xl cursor-pointer transition-colors ${
                            firstLesson?.id === lesson.id
                              ? 'bg-brand-soft-blue/20 border-2 border-brand-soft-blue/30'
                              : 'hover:bg-brand-classic-cream/50'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div className={`w-3 h-3 rounded-full ${firstLesson?.id === lesson.id ? 'bg-brand-soft-blue' : 'bg-brand-soft-blue/30'}`}></div>
                            <span className={`font-semibold ${firstLesson?.id === lesson.id ? 'text-brand-deep-navy' : 'text-brand-dark-slate/60'}`}>
                              {lesson.title}
                            </span>
                          </div>
                          {firstLesson?.id === lesson.id && <ChevronRight size={20} className="text-brand-deep-navy" />}
                        </div>
                      ))}
                    </div>
                  ))
                ) : (
                  <p className="text-brand-dark-slate/40 italic px-2">No modules available yet.</p>
                )}
              </div>
            </div>

            {/* Need Help? */}
            <div className="bg-brand-orange/10 rounded-3xl p-8 border-2 border-brand-orange/20">
              <h3 className="text-xl font-bold text-brand-orange mb-4 flex items-center gap-2">
                <HelpCircle size={20} />
                Need Help?
              </h3>
              <p className="text-brand-dark-slate text-sm mb-4 leading-relaxed">
                Don't worry! Ask a tutor or watch the theory video again.
              </p>
              <Link 
                href="/contact"
                className="inline-block bg-brand-orange text-white px-6 py-2 rounded-xl font-bold text-sm hover:bg-orange-600 transition-colors shadow-sm"
              >
                Message Tutor
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
