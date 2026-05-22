import React from 'react';
import ProfileContent from '@/components/ProfileContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My Profile | Math Spark',
  description: 'Track your math journey, view your achievements, and see your Spark history.',
};

export default function ProfilePage() {
  return <ProfileContent />;
}
