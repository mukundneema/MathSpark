'use client';

import React, { useState, use } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Play, CheckCircle2, ChevronRight, Video, FileText, HelpCircle, ArrowLeft } from 'lucide-react';
import courseData from '@/data/courses.json';

export default function LessonView({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [answer, setAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const course = courseData.courses.find(c => c.id === id);

  if (!course) {
    return (
      <div className="min-h-screen bg-brand-classic-cream flex flex-col">
        <Header />
        <main className="flex-1 flex flex-col items-center justify-center p-8 text-center">
          <h1 className="text-4xl font-bold text-brand-deep-navy mb-4">Course Not Found</h1>
          <Link href="/courses" className="text-brand-orange font-bold hover:underline">Back to Catalog</Link>
        </main>
        <Footer />
      </div>
    );
  }

  const handleCheck = (correctAnswer: string) => {
    if (answer.trim().toLowerCase() === correctAnswer.toLowerCase()) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  // For now, we'll take the first lesson of the first module if it exists
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
                <div className="bg-white rounded-3xl p-8 shadow-sm border border-brand-soft-blue/10">
                  <h2 className="text-2xl font-bold text-brand-deep-navy mb-4">Lesson Content</h2>
                  <p className="text-lg text-brand-dark-slate leading-relaxed">
                    {firstLesson.content}
                  </p>
                </div>

                {/* Problem Section */}
                {firstLesson.practice && firstLesson.practice.length > 0 && (
                  <div className="bg-white rounded-3xl p-8 shadow-sm border border-brand-soft-blue/10">
                    <h2 className="text-2xl font-bold text-brand-deep-navy mb-6">Practice Problem</h2>
                    <div className="space-y-4 mb-8 text-xl text-brand-dark-slate">
                      <p>{firstLesson.practice[0].question}</p>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 items-center">
                      <input
                        type="text"
                        value={answer}
                        onChange={(e) => setAnswer(e.target.value)}
                        placeholder="Enter your answer"
                        className="bg-brand-classic-cream/50 border-2 border-brand-soft-blue/20 rounded-2xl px-6 py-4 text-xl w-full sm:w-64 focus:outline-none focus:border-brand-soft-blue transition-colors"
                      />
                      <button
                        onClick={() => handleCheck(firstLesson.practice[0].answer)}
                        className="bg-brand-soft-blue text-brand-deep-navy font-bold px-8 py-4 rounded-2xl hover:bg-brand-soft-blue/80 transition-colors"
                      >
                        Check Answer
                      </button>
                      {isCorrect === true && (
                        <div className="flex items-center gap-2 text-green-600 font-bold">
                          <CheckCircle2 size={32} />
                          <span>Correct!</span>
                        </div>
                      )}
                      {isCorrect === false && (
                        <span className="text-red-500 font-bold">Try again!</span>
                      )}
                    </div>
                    {isCorrect === true && firstLesson.practice[0].explanation && (
                      <div className="mt-6 p-6 bg-green-50 rounded-2xl border border-green-100 text-green-800">
                        <p className="font-bold mb-2">Explanation:</p>
                        <p>{firstLesson.practice[0].explanation}</p>
                      </div>
                    )}
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
              <p className="text-brand-dark-slate text-sm mb-4">
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
