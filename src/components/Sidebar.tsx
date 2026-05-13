'use client';

import React, { useState } from 'react';
import { Home, BookOpen, Trophy, HelpCircle, LogOut, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Sidebar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Home', icon: Home, href: '/dashboard' },
    { name: 'Lessons', icon: BookOpen, href: '/lessons' },
    { name: 'Leaderboard', icon: Trophy, href: '/leaderboard' },
    { name: 'Help', icon: HelpCircle, href: '/help' },
  ];

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Mobile Toggle Button */}
      <button 
        onClick={toggleSidebar}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-brand-deep-navy text-white rounded-lg shadow-lg"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <aside className={`
        w-64 bg-brand-deep-navy text-brand-classic-cream flex flex-col min-h-screen fixed left-0 top-0 z-40 transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="p-6">
          <div className="flex items-center gap-2 mb-10">
            <Link href="/" className="flex items-center gap-2">
              <img src="/logo.png" alt="Math Spark" className="h-10 object-contain brightness-0 invert" />
            </Link>
          </div>

          <nav className="space-y-2">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-brand-soft-blue text-brand-deep-navy font-semibold'
                      : 'hover:bg-white/10 text-brand-classic-cream/80'
                  }`}
                >
                  <item.icon size={20} />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="mt-auto p-6">
          <button className="flex items-center gap-3 px-4 py-3 w-full rounded-lg hover:bg-white/10 text-brand-classic-cream/80 transition-colors">
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
