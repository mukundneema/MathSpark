'use client';

import React from 'react';
import Sidebar from '@/components/Sidebar';
import { Trophy, Star, TrendingUp, Info, Medal, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function LeaderboardContent() {
  const rankingTiers = [
    { name: 'Diamond', range: '5,000+ Sparks', icon: 'diamond-spark-badge.png', color: 'text-cyan-500' },
    { name: 'Platinum', range: '3,000 - 4,999 Sparks', icon: 'gold-medal.png', color: 'text-slate-300' }, // Using gold-medal as proxy
    { name: 'Gold', range: '1,500 - 2,999 Sparks', icon: 'gold-spark-badge.png', color: 'text-yellow-500' },
    { name: 'Silver', range: '500 - 1,499 Sparks', icon: 'silver-spark-badge.png', color: 'text-slate-400' },
    { name: 'Bronze', range: '0 - 499 Sparks', icon: 'bronze-spark-badge.png', color: 'text-orange-700' },
  ];

  const activities = [
    { name: 'Lesson Completed', sparks: '+10' },
    { name: 'Practice Problem Correct (1st Try)', sparks: '+5' },
    { name: 'Complete a Course Module', sparks: '+50' },
    { name: '5-Day Daily Streak', sparks: '+20' },
    { name: '10-Day Daily Streak', sparks: '+50' },
    { name: 'Help a Peer (Community Forum)', sparks: '+15' },
  ];

  const topSparkers = [
    { name: 'Ayan', sparks: 4250, tier: 'Platinum', avatar: 'A', medal: 'gold-medal.png' },
    { name: 'Anna', sparks: 3820, tier: 'Platinum', avatar: 'N', medal: 'silver-medal.png' },
    { name: 'Sarah', sparks: 3105, tier: 'Platinum', avatar: 'S', medal: 'bronze-medal.png' },
    { name: 'Michael', sparks: 2890, tier: 'Gold', avatar: 'M' },
    { name: 'Jessica', sparks: 2750, tier: 'Gold', avatar: 'J' },
    { name: 'David', sparks: 2400, tier: 'Gold', avatar: 'D' },
    { name: 'Emily', sparks: 1850, tier: 'Gold', avatar: 'E' },
  ];

  return (
    <div className="flex bg-brand-classic-cream min-h-screen font-sans">
      <Sidebar />
      
      <main className="flex-1 lg:ml-64 p-4 md:p-8">
        {/* Top Header */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12 pt-12 lg:pt-0">
          <div>
            <h1 className="text-4xl font-bold text-brand-deep-navy tracking-tight">Math Spark Leaderboard</h1>
            <p className="text-brand-dark-slate/60 mt-1">Celebrating our community's hard work and dedication.</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="bg-white px-6 py-2 rounded-full border border-brand-soft-blue/20 flex items-center gap-2 shadow-sm">
                <Star className="text-brand-orange" fill="currentColor" size={20} />
                <span className="font-bold text-brand-deep-navy">1,250 Sparks</span>
             </div>
          </div>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Main Leaderboard Table */}
          <div className="xl:col-span-2 space-y-8">
            <section className="bg-white rounded-3xl p-8 shadow-sm border border-brand-soft-blue/10">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-brand-deep-navy">This Week's Top Sparkers</h2>
                <div className="text-sm font-medium text-brand-dark-slate/40 flex items-center gap-2">
                   <TrendingUp size={16} />
                   Resets Monday 8:00 AM EST
                </div>
              </div>

              <div className="space-y-4">
                {topSparkers.map((student, idx) => (
                  <div 
                    key={student.name} 
                    className={`flex items-center gap-4 p-4 rounded-2xl transition-all ${idx < 3 ? 'bg-brand-classic-cream/30' : 'hover:bg-brand-classic-cream/20'}`}
                  >
                    <div className="w-8 text-center font-bold text-brand-dark-slate/40">
                      {idx + 1}
                    </div>
                    <div className="relative">
                      <div className="w-12 h-12 bg-brand-soft-blue rounded-full flex items-center justify-center text-brand-deep-navy font-bold text-xl shadow-sm">
                        {student.avatar}
                      </div>
                      {student.medal && (
                        <div className="absolute -bottom-1 -right-1 w-6 h-6">
                          <Image src={`/assets/${student.medal}`} alt="Medal" width={24} height={24} />
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-bold text-brand-deep-navy text-lg">{student.name}</h4>
                        <span className="text-xs px-2 py-0.5 bg-brand-deep-navy/5 text-brand-deep-navy rounded-full font-bold uppercase tracking-wider">{student.tier}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 font-black text-brand-orange text-xl">
                      <Star size={18} fill="currentColor" />
                      <span>{student.sparks.toLocaleString()}</span>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-10 p-6 bg-brand-soft-blue/5 rounded-2xl border border-dashed border-brand-soft-blue/20 text-center">
                 <p className="text-brand-dark-slate/60 italic">Keep pushing, keep solving, and keep sparking!</p>
              </div>
            </section>

            {/* How to Earn Table */}
            <section className="bg-white rounded-3xl p-8 shadow-sm border border-brand-soft-blue/10">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-brand-orange/10 rounded-lg text-brand-orange">
                  <Info size={24} />
                </div>
                <h2 className="text-2xl font-bold text-brand-deep-navy">How to Earn Sparks</h2>
              </div>
              
              <div className="overflow-hidden rounded-2xl border border-brand-soft-blue/5">
                <table className="w-full text-left">
                  <thead className="bg-brand-classic-cream/50">
                    <tr>
                      <th className="px-6 py-4 font-bold text-brand-deep-navy uppercase tracking-wider text-sm">Activity</th>
                      <th className="px-6 py-4 font-bold text-brand-deep-navy uppercase tracking-wider text-sm text-right">Sparks Earned</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-brand-soft-blue/5">
                    {activities.map((act) => (
                      <tr key={act.name} className="hover:bg-brand-classic-cream/20 transition-colors">
                        <td className="px-6 py-4 text-brand-dark-slate font-medium">{act.name}</td>
                        <td className="px-6 py-4 text-right">
                           <span className="bg-brand-orange/10 text-brand-orange font-black px-3 py-1 rounded-full text-sm">
                              {act.sparks}
                           </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </div>

          {/* Sidebar Area: Ranking Tiers */}
          <div className="space-y-8">
            <section className="bg-brand-deep-navy rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                   <Medal className="text-brand-orange" />
                   Ranking Tiers
                </h2>
                <div className="space-y-6">
                  {rankingTiers.map((tier) => (
                    <div key={tier.name} className="flex items-center gap-4 group">
                      <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-inner">
                        <Image src={`/assets/${tier.icon}`} alt={tier.name} width={40} height={40} />
                      </div>
                      <div>
                        <h4 className={`font-bold text-lg leading-tight ${tier.color}`}>{tier.name}</h4>
                        <p className="text-white/50 text-sm">{tier.range}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Decorative Background */}
              <div className="absolute right-[-20px] top-[-20px] opacity-10">
                 <Trophy size={180} />
              </div>
            </section>

            {/* CTA Card */}
            <div className="bg-brand-orange rounded-3xl p-8 text-white shadow-lg relative overflow-hidden group">
               <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4">Start Climbing!</h3>
                  <p className="text-white/80 mb-6 leading-relaxed">The best way to earn Sparks is to master new concepts. Choose a course and get started.</p>
                  <Link href="/courses" className="inline-flex items-center gap-2 bg-white text-brand-orange px-6 py-3 rounded-xl font-bold hover:bg-brand-classic-cream transition-colors">
                     Back to Lessons
                     <ArrowRight size={20} />
                  </Link>
               </div>
               <div className="absolute right-[-10px] bottom-[-10px] opacity-20 transform -rotate-12 group-hover:rotate-0 transition-transform">
                  <Star size={120} fill="currentColor" />
               </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
