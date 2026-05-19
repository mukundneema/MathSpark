import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-brand-deep-navy text-white py-12">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <span className="text-2xl font-bold">MATH SPARK</span>
          <p className="mt-2 text-white/60">Igniting a passion for learning.</p>
        </div>
        <div className="flex gap-8 text-sm sm:text-base">
          <Link href="/terms" className="hover:text-brand-orange transition-colors">Terms</Link>
          <Link href="/privacy" className="hover:text-brand-orange transition-colors">Privacy</Link>
          <Link href="/cookies" className="hover:text-brand-orange transition-colors">Cookies</Link>
        </div>
        <div className="text-white/60 text-sm">
          © 2026 Math Spark. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
