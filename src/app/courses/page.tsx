'use client';

import React from 'react';
import Header from '@/components/Header';
import Link from 'next/link';

const courses = [
  {
    id: 'algebra-1',
    title: 'Algebra 1',
    description: 'Introduction to algebraic concepts and techniques',
    icon: '√x',
  },
  {
    id: 'geometry',
    title: 'Geometry',
    description: 'Study of shapes, sizes, and the properties of space',
    icon: '⊿',
  },
  {
    id: 'calculus',
    title: 'Calculus',
    description: 'Limits, derivatives, integrals, and their applications',
    icon: '∫',
  },
  {
    id: 'trigonometry',
    title: 'Trigonometry',
    description: 'Study of relationships between sides and angles of triangles',
    icon: '⊿b',
  },
  {
    id: 'statistics',
    title: 'Statistics',
    description: 'Collection, analysis, interpretation, and presentation of data',
    icon: '📊',
  },
  {
    id: 'pre-algebra',
    title: 'Pre-Algebra',
    description: 'Fundamental math concepts for middle schoolers',
    icon: '123',
  },
];

export default function CourseCatalog() {
  return (
    <div className="min-h-screen bg-brand-classic-cream flex flex-col">
      <Header />

      <main className="flex-1 max-w-7xl mx-auto px-8 py-12 w-full">
        <h1 className="text-5xl font-bold text-brand-deep-navy text-center mb-16">Course Catalog</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-3xl p-8 shadow-sm border border-brand-soft-blue/10 flex flex-col items-center text-center hover:shadow-md transition-shadow"
            >
              <div className="w-24 h-24 bg-brand-soft-blue/10 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-4xl font-bold text-brand-soft-blue">{course.icon}</span>
              </div>
              <h2 className="text-3xl font-bold text-brand-deep-navy mb-4">{course.title}</h2>
              <p className="text-brand-dark-slate/70 mb-8 text-lg">
                {course.description}
              </p>
              <Link
                href={`/lessons/${course.id}`}
                className="mt-auto bg-brand-soft-blue/60 hover:bg-brand-soft-blue text-brand-deep-navy font-bold py-3 px-8 rounded-xl transition-colors"
              >
                View Course
              </Link>
            </div>
          ))}
        </div>
      </main>

      <footer className="py-8 text-center text-brand-dark-slate/40 text-sm">
        © 2026 Math Spark. All rights reserved.
      </footer>
    </div>
  );
}
