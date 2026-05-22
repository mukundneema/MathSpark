'use client';

import React from 'react';
import Sidebar from '@/components/Sidebar';
import { Search, Bell, Star, Trophy, Clock, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const studentData = {
  name: 'Emily Johnson',
  bio: "I'm a math explorer who loves solving puzzles and leveling up!",
  level: 5,
  progress: 65,
  avatar: '/assets/avatar-astronaut.png',
  sparks: 1250,
  badges: [
    { id: 1, name: 'Star Sparker', icon: '/assets/star-sparker-badge.png', description: "You owned the week! This badge proves you're one of our top 3 problem-solvers across the entire platform." },
    { id: 2, name: 'Platinum Spark', icon: '/assets/platinum-spark-badge.png', description: "Elite status! 5,000 Sparks puts you in the top tier of Math Spark students. Incredible work!" },
    { id: 3, name: '5-Day Streak', icon: '/assets/streak-badge.png', description: "Unstoppable! You've logged in and practiced for 5 days in a row. Keep that momentum going!" },
    { id: 4, name: 'Course Finisher', icon: '/assets/course-finisher-badge.png', description: "Mission Accomplished! You've successfully completed every lesson and practice problem in a full course." },
  ],
  history: [
    { id: 1, sparks: 50, action: 'Course Completion', detail: 'Fraction Heroes', date: '2 hours ago' },
    { id: 2, sparks: 10, action: 'Lesson Finished', detail: 'Introduction to Decimals', date: 'Today, 10:30 AM' },
    { id: 3, sparks: 5, action: 'Daily Quiz', detail: 'Multiplication Master', date: 'Yesterday' },
    { id: 4, sparks: 15, action: 'Puzzle Solved', detail: 'The Great Geometry Mystery', date: 'May 18' },
  ]
};

export default function ProfileContent() {
  return (
    <div className="flex bg-brand-classic-cream min-h-screen font-sans">
      <Sidebar />
      
      <main className="flex-1 lg:ml-64 p-4 md:p-8">
        {/* Top Header */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 pt-12 lg:pt-0">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-brand-dark-slate/40" size={18} />
            <input 
              type="text" 
              placeholder="Search achievements..." 
              className="w-full pl-10 pr-4 py-2 bg-white rounded-full border border-brand-soft-blue/20 focus:outline-none focus:ring-2 focus:ring-brand-soft-blue/50 text-brand-dark-slate"
            />
          </div>
          
          <div className="flex items-center gap-6">
            <button className="relative p-2 text-brand-dark-slate hover:bg-brand-soft-blue/10 rounded-full transition-colors">
              <Bell size={22} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-brand-orange rounded-full border-2 border-brand-classic-cream"></span>
            </button>
            <div className="flex items-center gap-3 bg-white p-1 pr-4 rounded-full border border-brand-soft-blue/20">
              <div className="w-8 h-8 bg-brand-soft-blue rounded-full flex items-center justify-center text-brand-deep-navy font-bold overflow-hidden">
                <Image src={studentData.avatar} alt="Profile" width={32} height={32} />
              </div>
              <span className="text-sm font-semibold text-brand-dark-slate">{studentData.name}</span>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Profile Info */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-8 rounded-3xl border border-brand-soft-blue/20 shadow-sm text-center">
              <div className="relative w-32 h-32 mx-auto mb-6">
                <div className="w-full h-full rounded-full bg-brand-soft-blue/20 flex items-center justify-center overflow-hidden border-4 border-brand-soft-blue/10">
                  <Image src={studentData.avatar} alt={studentData.name} width={128} height={128} />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-brand-orange text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  LEVEL {studentData.level}
                </div>
              </div>
              <h2 className="text-2xl font-bold text-brand-deep-navy mb-2">{studentData.name}</h2>
              <p className="text-brand-dark-slate/70 text-sm mb-6 leading-relaxed">
                {studentData.bio}
              </p>
              
              <div className="space-y-4 pt-6 border-t border-brand-classic-cream">
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-semibold text-brand-dark-slate">Next Level Progress</span>
                  <span className="text-brand-soft-blue font-bold">{studentData.progress}%</span>
                </div>
                <div className="w-full bg-brand-classic-cream h-3 rounded-full overflow-hidden">
                  <div 
                    className="bg-brand-soft-blue h-full rounded-full transition-all duration-1000"
                    style={{ width: `${studentData.progress}%` }}
                  ></div>
                </div>
              </div>

              <Link 
                href="/settings"
                className="mt-8 block w-full py-3 border-2 border-brand-soft-blue/20 text-brand-soft-blue font-bold rounded-xl hover:bg-brand-soft-blue/5 transition-colors"
              >
                Edit Profile
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="bg-brand-deep-navy p-6 rounded-3xl text-white">
              <h3 className="text-lg font-bold mb-4">Quick Stats</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 p-4 rounded-2xl">
                  <div className="text-brand-orange mb-1">
                    <Star size={20} fill="currentColor" />
                  </div>
                  <div className="text-xl font-bold">{studentData.sparks}</div>
                  <div className="text-xs text-white/60">Total Sparks</div>
                </div>
                <div className="bg-white/10 p-4 rounded-2xl">
                  <div className="text-brand-soft-blue mb-1">
                    <Trophy size={20} />
                  </div>
                  <div className="text-xl font-bold">{studentData.badges.length}</div>
                  <div className="text-xs text-white/60">Badges Earned</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Achievements & History */}
          <div className="lg:col-span-2 space-y-8">
            {/* Badges Section */}
            <div className="bg-white p-8 rounded-3xl border border-brand-soft-blue/20 shadow-sm">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-brand-deep-navy">Spark Badges</h2>
                <span className="text-sm font-semibold text-brand-soft-blue bg-brand-soft-blue/10 px-4 py-1 rounded-full">
                  {studentData.badges.length} Earned
                </span>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {studentData.badges.map((badge) => (
                  <div key={badge.id} className="group relative flex flex-col items-center text-center">
                    <div className="w-20 h-20 mb-3 relative group-hover:scale-110 transition-transform duration-300 cursor-help">
                      <Image src={badge.icon} alt={badge.name} width={80} height={80} className="object-contain" />
                    </div>
                    <span className="text-xs font-bold text-brand-deep-navy uppercase tracking-wider">{badge.name}</span>
                    
                    {/* Tooltip on hover */}
                    <div className="absolute bottom-full mb-4 left-1/2 -translate-x-1/2 w-48 p-3 bg-brand-deep-navy text-white text-[10px] leading-normal rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 shadow-xl">
                      {badge.description}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-brand-deep-navy"></div>
                    </div>
                  </div>
                ))}
                
                {/* Locked Badges Placeholder */}
                {[1, 2, 3, 4].map((i) => (
                  <div key={`locked-${i}`} className="flex flex-col items-center text-center opacity-20 grayscale">
                    <div className="w-20 h-20 mb-3 bg-brand-classic-cream rounded-full flex items-center justify-center border-4 border-dashed border-brand-dark-slate/20">
                      <Star size={32} />
                    </div>
                    <span className="text-xs font-bold text-brand-dark-slate uppercase tracking-wider">Locked</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Earning History */}
            <div className="bg-white p-8 rounded-3xl border border-brand-soft-blue/20 shadow-sm">
              <h2 className="text-2xl font-bold text-brand-deep-navy mb-8">Spark Earning History</h2>
              
              <div className="space-y-4">
                {studentData.history.map((item) => (
                  <div 
                    key={item.id} 
                    className="flex items-center gap-4 p-4 hover:bg-brand-classic-cream/50 rounded-2xl transition-colors border border-transparent hover:border-brand-soft-blue/10"
                  >
                    <div className="w-12 h-12 bg-brand-orange/10 rounded-full flex items-center justify-center text-brand-orange shrink-0">
                      <Image src="/assets/history-icon.png" alt="Spark" width={24} height={24} />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <h4 className="font-bold text-brand-deep-navy">Earned {item.sparks} Sparks</h4>
                        <span className="text-xs text-brand-dark-slate/40 flex items-center gap-1">
                          <Clock size={12} />
                          {item.date}
                        </span>
                      </div>
                      <p className="text-sm text-brand-dark-slate/70">
                        {item.action}: <span className="font-semibold">{item.detail}</span>
                      </p>
                    </div>
                    <ChevronRight size={18} className="text-brand-dark-slate/20" />
                  </div>
                ))}
              </div>
              
              <button className="w-full mt-8 py-3 text-brand-dark-slate/40 font-bold text-sm hover:text-brand-soft-blue transition-colors">
                View Full History
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
