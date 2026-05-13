'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="bg-brand-deep-navy text-white px-8 py-4 flex items-center justify-between shadow-md">
      <div className="flex items-center gap-4">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo-v3.png"
            alt="Math Spark Logo"
            width={50}
            height={50}
            className="rounded-full"
          />
          <span className="text-2xl font-bold tracking-tight hidden sm:inline">Math Spark</span>
        </Link>
      </div>

      <nav className="flex items-center gap-8 font-medium">
        <Link href="/" className="hover:text-brand-soft-blue transition-colors">Home</Link>
        <Link href="/courses" className="hover:text-brand-soft-blue transition-colors">Courses</Link>
        <Link href="/dashboard" className="hover:text-brand-soft-blue transition-colors">Profile</Link>
      </nav>
    </header>
  );
};

export default Header;
