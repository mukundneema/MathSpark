import React from 'react';
import Header from '@/components/Header';
import Link from 'next/link';

export default function PlaceholderPage({ title }: { title: string }) {
  return (
    <div className="min-h-screen bg-brand-classic-cream flex flex-col font-sans">
      <Header />
      <main className="flex-1 max-w-4xl mx-auto px-8 py-20 text-center">
        <h1 className="text-5xl font-bold text-brand-deep-navy mb-8">{title}</h1>
        <p className="text-xl text-brand-dark-slate mb-12">
          This page is currently under construction. We're working hard to bring you the best Math tutoring experience!
        </p>
        <Link href="/" className="inline-block bg-brand-orange text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-600 transition-colors">
          Back to Home
        </Link>
      </main>
      <footer className="py-8 text-center text-brand-dark-slate/40 text-sm mt-auto">
        © 2026 Math Spark. All rights reserved.
      </footer>
    </div>
  );
}
