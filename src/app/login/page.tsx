import LoginForm from './LoginForm';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft } from 'lucide-react';

export default function Page() {
  return (
    <div className="min-h-screen bg-brand-classic-cream flex flex-col">
      <div className="p-6">
        <Link href="/" className="inline-flex items-center text-brand-deep-navy font-semibold hover:text-brand-soft-blue transition-colors">
          <ChevronLeft size={20} />
          Back to Home
        </Link>
      </div>
      
      <div className="flex-1 flex flex-col items-center justify-center p-6 -mt-12">
        <div className="mb-8">
          <Link href="/">
            <Image
              src="/logo-v3.png"
              alt="Math Spark Logo"
              width={80}
              height={80}
              className="object-contain"
            />
          </Link>
        </div>
        
        <LoginForm />
        
        <div className="mt-8 text-brand-dark-slate/40 text-xs">
          © {new Date().getFullYear()} Math Spark Tutoring. All rights reserved.
        </div>
      </div>
    </div>
  );
}
