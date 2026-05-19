import type { Metadata } from "next";
import React from 'react';
import courseData from '@/data/courses.json';
import LessonClient from './LessonClient';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const { id } = await params;
  const course = courseData.courses.find(c => c.id === id);

  return {
    title: course ? `${course.title} | Math Spark` : "Lesson | Math Spark",
    description: course ? course.description : "Dive into our interactive math lessons and build your skills with Math Spark.",
  };
}

export default async function LessonView({ params }: Props) {
  const { id } = await params;
  const course = courseData.courses.find(c => c.id === id);

  if (!course) {
    return (
      <div className="min-h-screen bg-brand-classic-cream flex flex-col">
        <Header />
        <main className="flex-1 flex flex-col items-center justify-center p-8 text-center">
          <h1 className="text-4xl font-bold text-brand-deep-navy mb-4">Course Not Found</h1>
          <Link href="/courses" className="text-brand-orange font-bold hover:underline">Back to Catalog</Link>
        </main>
        <Footer />
      </div>
    );
  }

  return <LessonClient course={course as any} />;
}
