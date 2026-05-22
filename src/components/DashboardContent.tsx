'use client';

import React from 'react';
import Sidebar from '@/components/Sidebar';
import { 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';
import { Bell, Search, Star, ChevronRight, Calendar, Clock } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const sparkData = [
  { day: 'Mon', sparks: 10 },
  { day: 'Tue', sparks: 15 },
  { day: 'Wed', sparks: 12 },
  { day: 'Thu', sparks: 25 },
  { day: 'Fri', sparks: 30 },
  { day: 'Sat', sparks: 20 },
  { day: 'Sun', sparks: 40 },
];

const lessons = [
  { id: 1, title: 'Fraction Heroes', date: 'Today', time: '4:00 PM', icon: '/assets/fraction-heroes-icon.png' },
  { id: 2, title: 'Geometry Explorers', date: 'Tomorrow', time: '2:30 PM', icon: '/assets/geometry-explorers-icon.png' },
  { id: 3, title: 'Pre-Algebra', date: 'May 15', time: '5:00 PM', icon: '/assets/pre-algebra-icon.png' },
];

const leaderboard = [
  { id: 1, name: 'Ayan', sparks: 125, avatar: '👤' },
  { id: 2, name: 'Anna', sparks: 98, avatar: '👤' },
  { id: 3, name: 'Sarah', sparks: 87, avatar: '👤' },
];

export default function DashboardContent() {
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
              placeholder="Search lessons, topics..." 
              className="w-full pl-10 pr-4 py-2 bg-white rounded-full border border-brand-soft-blue/20 focus:outline-none focus:ring-2 focus:ring-brand-soft-blue/50 text-brand-dark-slate"
            />
          </div>
          
          <div className="flex items-center gap-6">
            <Link 
              href="/help"
              className="relative p-2 text-brand-dark-slate hover:bg-brand-soft-blue/10 rounded-full transition-colors"
            >
              <Bell size={22} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-brand-orange rounded-full border-2 border-brand-classic-cream"></span>
            </Link>
            <Link 
              href="/profile"
              className="flex items-center gap-3 bg-white p-1 pr-4 rounded-full border border-brand-soft-blue/20 hover:bg-brand-soft-blue/5 transition-colors cursor-pointer"
            >
              <div className="w-8 h-8 bg-brand-soft-blue rounded-full flex items-center justify-center text-brand-deep-navy font-bold overflow-hidden">
                <Image src="/assets/avatar-astronaut.png" alt="Profile" width={32} height={32} />
              </div>
              <span className="text-sm font-semibold text-brand-dark-slate">Emily Johnson</span>
            </Link>
          </div>
        </header>

        <h1 className="text-3xl font-bold text-brand-deep-navy mb-8 tracking-tight">Student Dashboard</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Progress & Chart */}
          <div className="lg:col-span-2 space-y-8">
            {/* Progress Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-brand-soft-blue/20 shadow-sm flex items-center gap-6">
                <div className="relative w-24 h-24 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="48"
                      cy="48"
                      r="40"
                      stroke="#f1f5f9"
                      strokeWidth="8"
                      fill="transparent"
                    />
                    <circle
                      cx="48"
                      cy="48"
                      r="40"
                      stroke="#89a5d1"
                      strokeWidth="8"
                      strokeDasharray="251.2"
                      strokeDashoffset="82.896"
                      strokeLinecap="round"
                      fill="transparent"
                    />
                  </svg>
                  <span className="absolute text-xl font-bold text-brand-deep-navy">67%</span>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-brand-dark-slate/60 uppercase tracking-wider">Overall Progress</h3>
                  <p className="text-2xl font-bold text-brand-deep-navy">Excellent!</p>
                  <p className="text-sm text-green-600 font-medium">+5% from last week</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-brand-soft-blue/20 shadow-sm">
                <h3 className="text-sm font-semibold text-brand-dark-slate/60 uppercase tracking-wider mb-2">Lessons Completed</h3>
                <div className="flex items-end gap-2 mb-2">
                  <span className="text-4xl font-bold text-brand-deep-navy">12</span>
                  <span className="text-lg text-brand-dark-slate/40 mb-1">/ 16</span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-brand-soft-blue h-full w-3/4 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Sparks Earned Chart */}
            <div className="bg-white p-6 rounded-2xl border border-brand-soft-blue/20 shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-2">
                  <h2 className="text-xl font-bold text-brand-deep-navy">Sparks Earned</h2>
                  <Image src="/assets/bronze-spark-badge.png" alt="Badge" width={24} height={24} />
                </div>
                <select className="bg-slate-50 border border-slate-200 text-sm rounded-lg px-2 py-1 focus:outline-none">
                  <option>Last 7 days</option>
                  <option>Last 30 days</option>
                </select>
              </div>
              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={sparkData}>
                    <defs>
                      <linearGradient id="colorSparks" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#FF8C00" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#FF8C00" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis 
                      dataKey="day" 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fill: '#64748b', fontSize: 12 }} 
                      dy={10}
                    />
                    <YAxis 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fill: '#64748b', fontSize: 12 }} 
                    />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#fff', 
                        borderRadius: '12px', 
                        border: '1px solid #e2e8f0',
                        boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' 
                      }} 
                    />
                    <Area 
                      type="monotone" 
                      dataKey="sparks" 
                      stroke="#FF8C00" 
                      strokeWidth={3} 
                      fillOpacity={1} 
                      fill="url(#colorSparks)" 
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Right Column - Upcoming & Leaderboard */}
          <div className="space-y-8">
            {/* Upcoming Lessons */}
            <div className="bg-white p-6 rounded-2xl border border-brand-soft-blue/20 shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-brand-deep-navy">Upcoming Lessons</h2>
                <Link href="/courses" className="text-brand-soft-blue hover:text-brand-deep-navy transition-colors">
                  <ChevronRight size={20} />
                </Link>
              </div>
              <div className="space-y-4">
                {lessons.map((lesson) => (
                  <Link 
                    key={lesson.id} 
                    href={`/lessons/${lesson.id}`}
                    className="flex items-center gap-4 p-3 hover:bg-brand-soft-blue/5 rounded-xl transition-colors cursor-pointer group"
                  >
                    <div className="w-12 h-12 bg-brand-classic-cream rounded-lg flex items-center justify-center overflow-hidden">
                      {lesson.icon.startsWith('/') ? (
                         <Image src={lesson.icon} alt={lesson.title} width={32} height={32} className="object-contain" />
                      ) : (
                         <span className="text-2xl">{lesson.icon}</span>
                      )}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-brand-deep-navy group-hover:text-brand-soft-blue transition-colors">{lesson.title}</h4>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="flex items-center gap-1 text-xs text-brand-dark-slate/60">
                          <Calendar size={12} />
                          {lesson.date}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-brand-dark-slate/60">
                          <Clock size={12} />
                          {lesson.time}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              <Link 
                href="/courses"
                className="block w-full text-center mt-6 py-3 bg-brand-soft-blue/10 text-brand-soft-blue font-bold rounded-xl hover:bg-brand-soft-blue/20 transition-colors"
              >
                View Schedule
              </Link>
            </div>

            {/* Leaderboard */}
            <div className="bg-white p-6 rounded-2xl border border-brand-soft-blue/20 shadow-sm">
              <h2 className="text-xl font-bold text-brand-deep-navy mb-6">Leaderboard</h2>
              <div className="space-y-4">
                {leaderboard.map((user, index) => (
                  <div key={user.id} className="flex items-center gap-4">
                    <span className={`w-6 text-center font-bold ${index === 0 ? 'text-brand-orange' : 'text-brand-dark-slate/40'}`}>
                      {index + 1}
                    </span>
                    <div className="w-10 h-10 bg-brand-soft-blue/20 rounded-full flex items-center justify-center text-xl">
                      {user.avatar}
                    </div>
                    <span className="flex-1 font-semibold text-brand-deep-navy">{user.name}</span>
                    <div className="flex items-center gap-1 font-bold text-brand-orange">
                      <Star size={14} fill="currentColor" />
                      <span>{user.sparks}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Daily Challenge Promo */}
            <div className="bg-brand-soft-blue rounded-2xl p-6 text-white relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-lg font-bold mb-2">Daily Challenge</h3>
                <p className="text-white/80 text-sm mb-4">Complete today's math puzzle and earn bonus sparks!</p>
                <Link 
                  href="/courses"
                  className="inline-block bg-white text-brand-soft-blue px-6 py-2 rounded-lg font-bold text-sm hover:bg-brand-classic-cream transition-colors"
                >
                  Play Now
                </Link>
              </div>
              <div className="absolute right-[-20px] bottom-[-20px] opacity-20">
                <Star size={100} fill="currentColor" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
