import Image from "next/image";
import Link from "next/link";
import { Sparkles, Brain, ShieldCheck, Target, GraduationCap, ArrowRight, CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TutorsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-brand-classic-cream font-sans">
      <Header />

      <main className="flex-1">
        {/* Hero Section - Meet the Lead Tutor */}
        <section className="bg-brand-deep-navy text-white py-20 px-8">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-2/3 space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-brand-soft-blue font-semibold text-sm">
                <Sparkles size={16} />
                <span>MEET OUR LEAD TUTOR</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Mukund Neema
              </h1>
              <p className="text-xl text-white/80 max-w-2xl leading-relaxed">
                Lead Tutor and visionary behind Math Spark. A freshman at Ardrey Kell High School with four years of dedicated mathematics education experience.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link href="/courses" className="bg-brand-orange text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-600 transition-colors shadow-lg shadow-orange-900/20">
                  Book a Session
                </Link>
                <div className="flex items-center gap-2 text-white/60">
                   <ShieldCheck size={20} className="text-brand-soft-blue" />
                   <span className="font-medium">4+ Years Teaching Experience</span>
                </div>
              </div>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-8 border-white/10 overflow-hidden shadow-2xl bg-brand-classic-cream flex items-center justify-center">
                {/* Placeholder for Mukund's Picture */}
                <div className="text-brand-deep-navy flex flex-col items-center">
                   <Image 
                     src="/logo-v3.png" 
                     alt="Math Spark Logo" 
                     width={100} 
                     height={100} 
                     className="opacity-20 absolute"
                   />
                   <span className="font-bold text-lg relative z-10 text-center px-4">Mukund Neema</span>
                   <span className="text-sm opacity-60 relative z-10">Lead Tutor</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Unique Approach Section */}
        <section className="py-24 px-8 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-16 items-start">
             <div className="md:w-1/2">
                <h2 className="text-4xl font-bold text-brand-deep-navy mb-8">Connecting Through Relatability</h2>
                <p className="text-lg text-brand-dark-slate leading-relaxed mb-6">
                  Mukund's approach is unique: he combines the rigorous standards of high-level mathematics with the relatability and enthusiasm of a student who is currently navigating the same academic landscape as his pupils.
                </p>
                <p className="text-lg text-brand-dark-slate leading-relaxed">
                  This bridge allows him to connect with kids and middle schoolers in a way that traditional educators often cannot. He understands the pressures, the common pitfalls, and the excitement of discovering a new concept.
                </p>
             </div>
             <div className="md:w-1/2 bg-white rounded-3xl p-8 md:p-12 border border-brand-soft-blue/10 shadow-xl">
                <blockquote className="space-y-6">
                   <p className="text-2xl font-medium text-brand-deep-navy italic leading-relaxed">
                     "My goal is to make math more than just a subject—I want it to be a language that every student feels confident speaking."
                   </p>
                   <footer className="flex items-center gap-4">
                      <div className="w-12 h-1 bg-brand-orange rounded-full"></div>
                      <span className="font-bold text-brand-dark-slate uppercase tracking-wider">Mukund Neema</span>
                   </footer>
                </blockquote>
             </div>
          </div>
        </section>

        {/* The Spark Method Section */}
        <section className="bg-white py-24 px-8 border-y border-brand-soft-blue/10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl font-bold text-brand-deep-navy">The 'Spark' Method</h2>
              <p className="text-xl text-brand-dark-slate/60 max-w-2xl mx-auto">Our teaching philosophy is built on three core pillars designed to unlock student potential.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-brand-classic-cream p-10 rounded-3xl border border-brand-soft-blue/5 space-y-6 hover:shadow-lg transition-shadow group">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-brand-orange group-hover:text-white transition-colors">
                  <Brain size={32} />
                </div>
                <h3 className="text-2xl font-bold text-brand-deep-navy">Intuitive Learning</h3>
                <p className="text-brand-dark-slate/80 leading-relaxed">
                  We move beyond rote memorization. We help students understand the <strong>why</strong> behind the <strong>what</strong>, making math intuitive and logical.
                </p>
              </div>

              <div className="bg-brand-classic-cream p-10 rounded-3xl border border-brand-soft-blue/5 space-y-6 hover:shadow-lg transition-shadow group">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-brand-orange group-hover:text-white transition-colors">
                  <Target size={32} />
                </div>
                <h3 className="text-2xl font-bold text-brand-deep-navy">Building Confidence</h3>
                <p className="text-brand-dark-slate/80 leading-relaxed">
                  Math anxiety is a real hurdle. We create a supportive environment where students feel empowered to take risks and learn from their mistakes.
                </p>
              </div>

              <div className="bg-brand-classic-cream p-10 rounded-3xl border border-brand-soft-blue/5 space-y-6 hover:shadow-lg transition-shadow group">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-brand-orange group-hover:text-white transition-colors">
                  <Sparkles size={32} />
                </div>
                <h3 className="text-2xl font-bold text-brand-deep-navy">'Spark' Moments</h3>
                <p className="text-brand-dark-slate/80 leading-relaxed">
                  We focus on creating those "aha!" moments where a complex concept suddenly becomes clear. These sparks ignite genuine passion.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mentorship Section */}
        <section className="py-24 px-8 bg-brand-classic-cream">
           <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                 <div className="order-2 lg:order-1 flex flex-col gap-6">
                    <div className="flex gap-6 p-6 bg-white rounded-2xl shadow-sm border border-brand-soft-blue/5">
                       <div className="w-12 h-12 bg-brand-soft-blue/10 rounded-xl flex-shrink-0 flex items-center justify-center text-brand-soft-blue">
                          <GraduationCap size={24} />
                       </div>
                       <div>
                          <h4 className="font-bold text-brand-deep-navy text-xl">Dr. Harold Reiter</h4>
                          <p className="text-brand-dark-slate/70">A renowned figure in math education whose insights into problem-solving shaped our approach.</p>
                       </div>
                    </div>
                    <div className="flex gap-6 p-6 bg-white rounded-2xl shadow-sm border border-brand-soft-blue/5">
                       <div className="w-12 h-12 bg-brand-soft-blue/10 rounded-xl flex-shrink-0 flex items-center justify-center text-brand-soft-blue">
                          <GraduationCap size={24} />
                       </div>
                       <div>
                          <h4 className="font-bold text-brand-deep-navy text-xl">Samarth Kassereni</h4>
                          <p className="text-brand-dark-slate/70">An expert mentor whose strategies for mathematical proficiency are integrated into every lesson.</p>
                       </div>
                    </div>
                 </div>
                 <div className="order-1 lg:order-2 space-y-8">
                    <h2 className="text-4xl font-bold text-brand-deep-navy leading-tight">Curriculum Influenced by Excellence</h2>
                    <p className="text-lg text-brand-dark-slate leading-relaxed">
                      Our teaching methods and curriculum are deeply influenced by elite educational programs and the mentorship of world-class experts. We ensure that our students are receiving a world-class education that prepares them for both academic success and competitive mathematics.
                    </p>
                    <div className="h-1 w-20 bg-brand-orange rounded-full"></div>
                 </div>
              </div>
           </div>
        </section>

        {/* What to Expect Section */}
        <section className="py-24 px-8 bg-brand-deep-navy text-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold">What to Expect in a 1-on-1 Session</h2>
              <p className="mt-4 text-white/60">Tailored to the individual needs of each student.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Assessment & Goal Setting", desc: "We begin by identifying current strengths and areas for growth to set clear, achievable milestones." },
                { title: "Targeted Instruction", desc: "Focused work on specific concepts, using the 'Spark' method to ensure deep understanding." },
                { title: "Guided Practice", desc: "Students work through challenging problems with real-time feedback and support." },
                { title: "Confidence Reinforcement", desc: "We celebrate wins and build the mental resilience needed for advanced mathematics." },
                { title: "Actionable Takeaways", desc: "Every session ends with clear next steps to ensure continued progress." },
              ].map((item, idx) => (
                <div key={idx} className="p-8 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="flex items-center gap-3 mb-4">
                     <CheckCircle2 className="text-brand-orange" size={24} />
                     <h3 className="text-xl font-bold">{item.title}</h3>
                  </div>
                  <p className="text-white/70 leading-relaxed">{item.desc}</p>
                </div>
              ))}
              <div className="p-8 bg-brand-orange rounded-3xl flex flex-col justify-between group cursor-pointer hover:bg-orange-500 transition-colors">
                 <h3 className="text-2xl font-bold">Ready to Start?</h3>
                 <Link href="/courses" className="flex items-center justify-between font-bold text-lg group-hover:translate-x-2 transition-transform">
                    View Course Catalog
                    <ArrowRight size={24} />
                 </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
