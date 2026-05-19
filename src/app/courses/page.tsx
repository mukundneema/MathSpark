import type { Metadata } from "next";
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import courseData from '@/data/courses.json';

export const metadata: Metadata = {
  title: "Course Catalog | Math Spark Adventures",
  description: "Explore our range of math courses including Pre-Algebra, Algebra 1, and Geometry. Designed to make mathematics intuitive and fun for students.",
};

export default function CourseCatalog() {
  const { courses } = courseData;

  return (
    <div className="min-h-screen bg-brand-classic-cream flex flex-col font-sans">
      <Header />

      <main className="flex-1 max-w-7xl mx-auto px-8 py-12 w-full">
        <h1 className="text-5xl font-bold text-brand-deep-navy text-center mb-16">Course Catalog</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-3xl p-8 shadow-sm border border-brand-soft-blue/10 flex flex-col items-center text-center hover:shadow-md transition-shadow group h-full"
            >
              <div className="w-24 h-24 bg-brand-soft-blue/10 rounded-2xl flex items-center justify-center mb-6 overflow-hidden group-hover:scale-105 transition-transform shrink-0">
                {course.icon && course.icon.startsWith('/') ? (
                  <Image src={course.icon} alt={course.title} width={80} height={80} className="object-contain" />
                ) : (
                  <span className="text-4xl font-bold text-brand-soft-blue">{course.icon || '📚'}</span>
                )}
              </div>
              <h2 className="text-3xl font-bold text-brand-deep-navy mb-4">{course.title}</h2>
              <p className="text-brand-dark-slate/70 mb-8 text-lg flex-1">
                {course.description}
              </p>
              <Link
                href={`/lessons/${course.id}`}
                className="mt-auto w-full bg-brand-soft-blue/60 hover:bg-brand-soft-blue text-brand-deep-navy font-bold py-3 px-8 rounded-xl transition-colors text-center"
              >
                View Course
              </Link>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
