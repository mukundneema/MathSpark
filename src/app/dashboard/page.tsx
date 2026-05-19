import type { Metadata } from "next";
import React from 'react';
import DashboardContent from '@/components/DashboardContent';

export const metadata: Metadata = {
  title: "Student Dashboard | Math Spark",
  description: "Track your progress, earn sparks, and view your upcoming math lessons on the Math Spark student dashboard.",
};

export default function DashboardPage() {
  return <DashboardContent />;
}
