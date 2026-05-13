import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white font-sans">
      {/* Navigation */}
      <header className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-2">
          <Image
            src="/logo-v3.png"
            alt="Math Spark Logo"
            width={60}
            height={60}
            className="object-contain"
          />
          <span className="text-2xl font-bold tracking-tight text-brand-deep-navy">Math Spark</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8 text-brand-dark-slate font-medium">
          <a href="#" className="hover:text-brand-soft-blue transition-colors">About</a>
          <Link href="/courses" className="hover:text-brand-soft-blue transition-colors">Courses</Link>
          <a href="#" className="hover:text-brand-soft-blue transition-colors">Tutors</a>
          <a href="#" className="hover:text-brand-soft-blue transition-colors">Contact</a>
        </nav>

        <div className="flex items-center gap-6">
          <a href="#" className="text-brand-dark-slate font-medium hover:text-brand-soft-blue transition-colors">Log In</a>
          <Link href="/dashboard" className="bg-brand-orange text-white px-6 py-3 rounded-lg font-bold hover:bg-orange-600 transition-colors">
            Start Learning
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-brand-deep-navy relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 py-20 flex flex-col md:flex-row items-center justify-between min-h-[600px]">
          <div className="z-10 md:w-1/2 space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Learn Math <br /> with Confidence
            </h1>
            <p className="text-xl text-white/90 max-w-lg">
              Expert math tutoring to help you succeed. Personalized learning paths designed for your success.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/courses" className="bg-brand-orange text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-600 transition-colors">
                Start Learning
              </Link>
              <button className="bg-white text-brand-deep-navy px-8 py-4 rounded-lg font-bold text-lg hover:bg-brand-classic-cream transition-colors">
                Meet the Tutor
              </button>
            </div>
          </div>

          <div className="md:w-1/2 mt-12 md:mt-0 flex justify-end">
            <div className="relative w-[400px] h-[500px]">
              {/* Using the mockup image as a temporary placeholder for the tutor if we don't have a separate image */}
              <Image
                src="/tutor-hero.png"
                alt="Lead Tutor"
                fill
                className="object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-soft-blue/10 skew-x-12 transform translate-x-1/2"></div>
      </section>

      {/* Meet the Lead Tutor Section */}
      <section className="bg-brand-classic-cream py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2 order-2 md:order-1">
              <h2 className="text-4xl font-bold text-brand-deep-navy mb-6">Meet Your Lead Tutor</h2>
              <p className="text-lg text-brand-dark-slate leading-relaxed mb-6">
                With over 10 years of experience in mathematics education, our lead tutor is dedicated to making complex concepts simple and accessible for every student.
              </p>
              <p className="text-lg text-brand-dark-slate leading-relaxed mb-8 font-medium italic border-l-4 border-brand-orange pl-4">
                "My passion lies in helping kids and middle schoolers discover their 'inner mathematician' through fun, engaging, and supportive learning sessions."
              </p>
              <p className="text-lg text-brand-dark-slate leading-relaxed mb-8">
                Math Spark was founded on the belief that everyone can excel at math with the right guidance and spark of inspiration. We focus on building confidence as much as competence.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-orange flex items-center justify-center text-white text-xs font-bold">✓</div>
                  <span className="font-medium text-brand-deep-navy">Personalized 1-on-1 Sessions</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-orange flex items-center justify-center text-white text-xs font-bold">✓</div>
                  <span className="font-medium text-brand-deep-navy">Exam Preparation Experts</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-orange flex items-center justify-center text-white text-xs font-bold">✓</div>
                  <span className="font-medium text-brand-deep-navy">Confidence-Building Methods</span>
                </div>
              </div>
            </div>
            <div className="md:w-1/3 order-1 md:order-2 flex justify-center">
               <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-8 border-white overflow-hidden shadow-xl">
                  {/* Reuse mockup or placeholder */}
                  <div className="w-full h-full bg-brand-deep-navy flex items-center justify-center text-white text-2xl font-bold">
                    Lead Tutor
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-deep-navy text-white py-12">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <span className="text-2xl font-bold">MATH SPARK</span>
            <p className="mt-2 text-white/60">Igniting a passion for learning.</p>
          </div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-brand-orange transition-colors">Terms</a>
            <a href="#" className="hover:text-brand-orange transition-colors">Privacy</a>
            <a href="#" className="hover:text-brand-orange transition-colors">Cookies</a>
          </div>
          <div className="text-white/60">
            © 2026 Math Spark. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
