'use client';

import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import { Search, Bell, Save, Lock, Mail, User, Info } from 'lucide-react';
import Image from 'next/image';

const avatars = [
  { id: 'astronaut', src: '/assets/avatar-astronaut.png', name: 'Astronaut' },
  { id: 'owl', src: '/assets/avatar-owl.png', name: 'Owl' },
  { id: 'robot', src: '/assets/avatar-robot.png', name: 'Robot' },
];

export default function SettingsContent() {
  const [selectedAvatar, setSelectedAvatar] = useState('astronaut');
  const [formData, setFormData] = useState({
    name: 'Emily Johnson',
    email: 'mathspark2026@gmail.com',
    bio: "I'm a math explorer who loves solving puzzles and leveling up!",
    parentEmail: 'mathspark2026@gmail.com',
    difficulty: 'Intermediate',
    notifyLessons: true,
    notifyLeaderboard: true,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Settings saved successfully!');
  };

  return (
    <div className="flex bg-brand-classic-cream min-h-screen font-sans">
      <Sidebar />
      
      <main className="flex-1 lg:ml-64 p-4 md:p-8">
        {/* Top Header */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 pt-12 lg:pt-0">
          <h1 className="text-3xl font-bold text-brand-deep-navy tracking-tight">Profile Settings</h1>
          
          <div className="flex items-center gap-6">
            <button className="relative p-2 text-brand-dark-slate hover:bg-brand-soft-blue/10 rounded-full transition-colors">
              <Bell size={22} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-brand-orange rounded-full border-2 border-brand-classic-cream"></span>
            </button>
            <div className="flex items-center gap-3 bg-white p-1 pr-4 rounded-full border border-brand-soft-blue/20">
              <div className="w-8 h-8 bg-brand-soft-blue rounded-full flex items-center justify-center text-brand-deep-navy font-bold overflow-hidden">
                <Image src="/assets/avatar-astronaut.png" alt="Profile" width={32} height={32} />
              </div>
              <span className="text-sm font-semibold text-brand-dark-slate">{formData.name}</span>
            </div>
          </div>
        </header>

        <form onSubmit={handleSubmit} className="max-w-4xl space-y-8 pb-12">
          {/* Account Info Section */}
          <div className="bg-white p-8 rounded-3xl border border-brand-soft-blue/20 shadow-sm">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-brand-soft-blue/10 rounded-lg text-brand-soft-blue">
                <User size={20} />
              </div>
              <h2 className="text-xl font-bold text-brand-deep-navy">Account Info</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-2">
                <label className="text-sm font-bold text-brand-dark-slate flex items-center gap-2">
                  Display Name
                  <Info size={14} className="text-brand-dark-slate/20" />
                </label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="e.g., MathMaster2026" 
                  className="w-full px-4 py-3 bg-brand-classic-cream/30 border border-brand-soft-blue/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-soft-blue/30 text-brand-dark-slate"
                />
                <p className="text-[10px] text-brand-dark-slate/40">What should we call you on the leaderboard?</p>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-brand-dark-slate">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-dark-slate/30" size={18} />
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-3 bg-brand-classic-cream/30 border border-brand-soft-blue/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-soft-blue/30 text-brand-dark-slate"
                  />
                </div>
                <p className="text-[10px] text-brand-dark-slate/40">Where we send your progress reports and notifications.</p>
              </div>
            </div>

            <div className="space-y-2 mb-8">
              <label className="text-sm font-bold text-brand-dark-slate">Current Bio</label>
              <textarea 
                name="bio"
                value={formData.bio}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-4 py-3 bg-brand-classic-cream/30 border border-brand-soft-blue/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-soft-blue/30 text-brand-dark-slate resize-none"
              ></textarea>
              <p className="text-[10px] text-brand-dark-slate/40">Your bio will appear here for all your peers to see!</p>
            </div>

            <button type="button" className="flex items-center gap-2 text-brand-soft-blue font-bold text-sm hover:underline decoration-2">
              <Lock size={16} />
              Change Password
            </button>
          </div>

          {/* Avatar & Preferences Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Avatar Selection */}
            <div className="bg-white p-8 rounded-3xl border border-brand-soft-blue/20 shadow-sm">
              <h2 className="text-xl font-bold text-brand-deep-navy mb-6">Avatar Selection</h2>
              <div className="grid grid-cols-3 gap-4">
                {avatars.map((avatar) => (
                  <button
                    key={avatar.id}
                    type="button"
                    onClick={() => setSelectedAvatar(avatar.id)}
                    className={`relative p-2 rounded-2xl transition-all duration-300 border-2 ${
                      selectedAvatar === avatar.id 
                        ? 'border-brand-soft-blue bg-brand-soft-blue/5' 
                        : 'border-transparent bg-brand-classic-cream/50 hover:bg-brand-classic-cream'
                    }`}
                  >
                    <Image src={avatar.src} alt={avatar.name} width={80} height={80} className="w-full h-auto" />
                    {selectedAvatar === avatar.id && (
                      <div className="absolute top-1 right-1 w-5 h-5 bg-brand-soft-blue text-white rounded-full flex items-center justify-center">
                        <Save size={10} />
                      </div>
                    )}
                  </button>
                ))}
              </div>
              <p className="mt-6 text-xs text-brand-dark-slate/50 text-center italic">
                "Pick a character that represents your inner math genius!"
              </p>
            </div>

            {/* Notifications & Learning */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-3xl border border-brand-soft-blue/20 shadow-sm">
                <h2 className="text-xl font-bold text-brand-deep-navy mb-6">Notifications</h2>
                <div className="space-y-4">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <div className="relative">
                      <input 
                        type="checkbox" 
                        name="notifyLessons"
                        checked={formData.notifyLessons}
                        onChange={handleInputChange}
                        className="peer sr-only" 
                      />
                      <div className="w-10 h-6 bg-brand-classic-cream rounded-full peer-checked:bg-brand-soft-blue transition-colors"></div>
                      <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-4 shadow-sm"></div>
                    </div>
                    <span className="text-sm font-semibold text-brand-dark-slate group-hover:text-brand-soft-blue transition-colors">New lessons & courses</span>
                  </label>

                  <label className="flex items-center gap-3 cursor-pointer group">
                    <div className="relative">
                      <input 
                        type="checkbox" 
                        name="notifyLeaderboard"
                        checked={formData.notifyLeaderboard}
                        onChange={handleInputChange}
                        className="peer sr-only" 
                      />
                      <div className="w-10 h-6 bg-brand-classic-cream rounded-full peer-checked:bg-brand-soft-blue transition-colors"></div>
                      <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-4 shadow-sm"></div>
                    </div>
                    <span className="text-sm font-semibold text-brand-dark-slate group-hover:text-brand-soft-blue transition-colors">Leaderboard updates</span>
                  </label>
                </div>
              </div>

              <div className="bg-white p-8 rounded-3xl border border-brand-soft-blue/20 shadow-sm">
                <h2 className="text-xl font-bold text-brand-deep-navy mb-6">Learning Settings</h2>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-brand-dark-slate">Preferred Difficulty</label>
                    <select 
                      name="difficulty"
                      value={formData.difficulty}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-brand-classic-cream/30 border border-brand-soft-blue/10 rounded-xl focus:outline-none text-brand-dark-slate"
                    >
                      <option>Beginner</option>
                      <option>Intermediate</option>
                      <option>Advanced</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Parent Info Section */}
          <div className="bg-brand-soft-blue/5 p-8 rounded-3xl border border-brand-soft-blue/20 border-dashed">
            <h2 className="text-xl font-bold text-brand-deep-navy mb-2">Parent/Guardian Email</h2>
            <p className="text-sm text-brand-dark-slate/60 mb-6">
              This is where we send weekly 'Spark Reports' so your family can celebrate your wins with you!
            </p>
            <div className="relative max-w-md">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-dark-slate/30" size={18} />
              <input 
                type="email" 
                name="parentEmail"
                value={formData.parentEmail}
                onChange={handleInputChange}
                className="w-full pl-12 pr-4 py-3 bg-white border border-brand-soft-blue/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-soft-blue/30 text-brand-dark-slate"
              />
            </div>
          </div>

          {/* Form Actions */}
          <div className="flex items-center justify-end gap-4 pt-4">
            <button type="button" className="px-8 py-3 text-brand-dark-slate font-bold hover:text-brand-soft-blue transition-colors">
              Discard Changes
            </button>
            <button type="submit" className="flex items-center gap-2 bg-brand-orange text-white px-10 py-4 rounded-2xl font-bold hover:bg-brand-orange/90 transition-all shadow-lg hover:shadow-brand-orange/20 active:scale-95">
              <Save size={20} />
              Save Changes
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
