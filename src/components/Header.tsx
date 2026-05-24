'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { getCookie, deleteCookie } from '@/lib/utils';

const Header = () => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(!!getCookie('auth_token'));
  }, []);

  const handleLogout = () => {
    deleteCookie('auth_token');
    setIsLoggedIn(false);
    router.push('/');
    router.refresh();
  };

  return (
    <header className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto w-full bg-transparent">
      <div className="flex items-center gap-2">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo-v3.png"
            alt="Math Spark Logo"
            width={60}
            height={60}
            className="object-contain"
          />
          <span className="text-2xl font-bold tracking-tight text-brand-deep-navy">Math Spark</span>
        </Link>
      </div>
      
      <nav className="hidden md:flex items-center gap-8 text-brand-dark-slate font-medium">
        <Link href="/about" className="hover:text-brand-soft-blue transition-colors">About</Link>
        <Link href="/courses" className="hover:text-brand-soft-blue transition-colors">Courses</Link>
        <Link href="/tutors" className="hover:text-brand-soft-blue transition-colors">Tutors</Link>
        <Link href="/contact" className="hover:text-brand-soft-blue transition-colors">Contact</Link>
      </nav>

      <div className="flex items-center gap-6">
        {isLoggedIn ? (
          <>
            <Link href="/dashboard" className="text-brand-dark-slate font-medium hover:text-brand-soft-blue transition-colors">Dashboard</Link>
            <button 
              onClick={handleLogout}
              className="bg-brand-orange text-white px-6 py-3 rounded-lg font-bold hover:bg-orange-600 transition-colors"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link href="/login" className="text-brand-dark-slate font-medium hover:text-brand-soft-blue transition-colors">Log In</Link>
            <Link href="/login" className="bg-brand-orange text-white px-6 py-3 rounded-lg font-bold hover:bg-orange-600 transition-colors">
              Start Learning
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
