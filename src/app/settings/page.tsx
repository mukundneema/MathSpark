import React from 'react';
import SettingsContent from '@/components/SettingsContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Profile Settings | Math Spark',
  description: 'Manage your account settings, avatar, and notification preferences.',
};

export default function SettingsPage() {
  return <SettingsContent />;
}
