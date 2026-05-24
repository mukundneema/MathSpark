'use client';

import React, { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Mail, Lock, ArrowRight, Loader2 } from 'lucide-react';
import Image from 'next/image';

const LoginForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/dashboard';
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Mock authentication
    setTimeout(() => {
      if (email && password) {
        // Set mock auth cookie
        document.cookie = 'auth_token=mock-token; path=/; max-age=3600';
        router.push(callbackUrl);
        router.refresh();
      } else {
        setError('Please enter both email and password.');
        setIsLoading(false);
      }
    }, 1000);
  };

  return (
    <div className="w-full max-w-md">
      <div className="bg-white rounded-2xl shadow-xl p-8 border border-brand-classic-cream">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-brand-deep-navy">Welcome Back</h1>
          <p className="text-brand-dark-slate/60 mt-2">Log in to continue your math journey</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="bg-red-50 text-red-500 p-3 rounded-lg text-sm font-medium border border-red-100">
              {error}
            </div>
          )}

          <div>
            <label className="block text-sm font-semibold text-brand-deep-navy mb-2" htmlFor="email">
              Email Address
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-brand-soft-blue">
                <Mail size={18} />
              </div>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full pl-10 pr-3 py-3 border border-brand-classic-cream rounded-xl focus:ring-2 focus:ring-brand-soft-blue focus:border-brand-soft-blue bg-brand-classic-cream/20 text-brand-dark-slate outline-none transition-all"
                placeholder="name@example.com"
                required
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-sm font-semibold text-brand-deep-navy" htmlFor="password">
                Password
              </label>
              <a href="#" className="text-xs font-semibold text-brand-soft-blue hover:text-brand-deep-navy transition-colors">
                Forgot password?
              </a>
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-brand-soft-blue">
                <Lock size={18} />
              </div>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full pl-10 pr-3 py-3 border border-brand-classic-cream rounded-xl focus:ring-2 focus:ring-brand-soft-blue focus:border-brand-soft-blue bg-brand-classic-cream/20 text-brand-dark-slate outline-none transition-all"
                placeholder="••••••••"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-brand-orange text-white py-3 rounded-xl font-bold text-lg hover:bg-orange-600 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <Loader2 className="animate-spin" size={20} />
            ) : (
              <>
                Log In
                <ArrowRight size={20} />
              </>
            )}
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-brand-classic-cream text-center">
          <p className="text-brand-dark-slate/60 text-sm">
            Don't have an account?{' '}
            <a href="#" className="font-bold text-brand-deep-navy hover:text-brand-orange transition-colors">
              Sign Up for Free
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
