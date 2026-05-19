import Image from "next/image";
import Link from "next/link";
import { Award, Target, Users, BookOpen } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-brand-classic-cream font-sans">
      <Header />

      <main className="flex-1">
        {/* Hero / Introduction Section */}
        <section className="py-16 px-8 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-brand-deep-navy mb-6">
              Math Spark: Igniting a Passion for Mathematics
            </h1>
            <p className="text-xl text-brand-dark-slate max-w-3xl mx-auto leading-relaxed text-pretty">
              At Math Spark, we believe that mathematics is more than just numbers and equations—it’s a way of seeing the world, a tool for problem-solving, and a spark that can ignite a lifetime of curiosity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-brand-soft-blue/10">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-brand-deep-navy mb-6">Meet Our Founder</h2>
              <p className="text-lg text-brand-dark-slate leading-relaxed">
                Math Spark was founded by <strong className="text-brand-deep-navy">Mukund Neema</strong>, a freshman at Ardrey Kell High School with a singular passion for mathematics and education.
              </p>
              <p className="text-lg text-brand-dark-slate leading-relaxed">
                Despite his youth, Mukund brings <strong className="text-brand-orange text-xl">four years of teaching experience</strong> to the table, having worked with students across various grade levels to demystify complex concepts and build foundational strength.
              </p>
              <p className="text-lg text-brand-dark-slate leading-relaxed">
                Mukund’s journey in math has been guided by world-class mentors, including <strong className="text-brand-deep-navy">Dr. Harold Reiter</strong> and <strong className="text-brand-deep-navy">Samarth Kassereni</strong>. Their mentorship has instilled in him a deep understanding of pedagogical excellence—knowing not just <em className="text-brand-soft-blue font-semibold">what</em> to teach, but <em className="text-brand-soft-blue font-semibold">how</em> to inspire.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full max-w-md aspect-[4/5] bg-brand-classic-cream rounded-2xl border-4 border-dashed border-brand-soft-blue/30 flex items-center justify-center overflow-hidden shadow-inner group">
                {/* Placeholder for Founder's Picture */}
                <div className="text-center p-8">
                  <Users className="w-20 h-20 text-brand-soft-blue mx-auto mb-4 opacity-50" />
                  <p className="text-brand-soft-blue font-bold text-xl uppercase tracking-widest">Founder Photo</p>
                  <p className="text-brand-dark-slate/60 mt-2 font-medium">Mukund Neema</p>
                  <div className="mt-6 w-16 h-1 bg-brand-orange mx-auto rounded-full"></div>
                </div>
                {/* Decorative overlay */}
                <div className="absolute inset-0 bg-brand-deep-navy/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="bg-brand-deep-navy text-white py-20 px-8 overflow-hidden relative">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
                  <Target className="text-brand-orange w-10 h-10" />
                  Our Mission
                </h2>
                <p className="text-xl text-white/90 leading-relaxed mb-6">
                  Our mission is simple: to <span className="text-brand-orange font-black underline decoration-wavy decoration-white/20 underline-offset-8 leading-loose">'spark'</span> a deep interest and proficiency in math for kids and middle schoolers.
                </p>
                <p className="text-lg text-white/80 leading-relaxed">
                  We understand that many students view math as a hurdle to be cleared. At Math Spark, we transform that hurdle into a gateway. By blending professional expertise with a youthful, relatable perspective, we create an environment where students feel comfortable asking questions, making mistakes, and ultimately, excelling.
                </p>
              </div>
              <div className="md:w-1/2 flex justify-center">
                 <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
                    <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/10 flex flex-col items-center text-center hover:bg-white/15 transition-colors">
                       <BookOpen className="w-8 h-8 text-brand-orange mb-3" />
                       <span className="font-bold text-sm sm:text-base">Engaging Curriculum</span>
                    </div>
                    <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/10 flex flex-col items-center text-center hover:bg-white/15 transition-colors">
                       <Users className="w-8 h-8 text-brand-soft-blue mb-3" />
                       <span className="font-bold text-sm sm:text-base">Relatable Mentors</span>
                    </div>
                    <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/10 flex flex-col items-center text-center col-span-2 hover:bg-white/15 transition-colors">
                       <Award className="w-8 h-8 text-yellow-400 mb-3" />
                       <span className="font-bold">Confidence & Mastery</span>
                    </div>
                 </div>
              </div>
            </div>
          </div>
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-soft-blue/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        </section>

        {/* Why Math Spark? Section */}
        <section className="py-24 px-8 max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-brand-deep-navy text-center mb-16">Why Math Spark?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-3xl shadow-lg border border-brand-soft-blue/10 flex flex-col items-center text-center hover:-translate-y-2 transition-transform">
              <div className="w-16 h-16 bg-brand-orange/10 rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-brand-orange" />
              </div>
              <h3 className="text-2xl font-bold text-brand-deep-navy mb-4">Experienced Instruction</h3>
              <p className="text-brand-dark-slate/80">
                Led by a founder with four years of hands-on teaching experience, bringing fresh energy and deep knowledge.
              </p>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-lg border border-brand-soft-blue/10 flex flex-col items-center text-center hover:-translate-y-2 transition-transform">
              <div className="w-16 h-16 bg-brand-soft-blue/10 rounded-2xl flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-brand-soft-blue" />
              </div>
              <h3 className="text-2xl font-bold text-brand-deep-navy mb-4">Elite Mentorship</h3>
              <p className="text-brand-dark-slate/80">
                Curriculum and approach influenced by experts in the field like Dr. Harold Reiter and Samarth Kassereni.
              </p>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-lg border border-brand-soft-blue/10 flex flex-col items-center text-center hover:-translate-y-2 transition-transform">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-brand-deep-navy mb-4">Student-Centric</h3>
              <p className="text-brand-dark-slate/80">
                Designed specifically for kids and middle schoolers to build confidence and joy in learning.
              </p>
            </div>
          </div>

          <div className="mt-24 bg-brand-orange rounded-3xl p-12 text-center text-white shadow-xl relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-6">Ready to find your 'inner mathematician'?</h2>
              <p className="text-xl mb-10 text-white/90 max-w-2xl mx-auto">
                Join us at Math Spark, and let’s turn that curiosity into mastery together.
              </p>
              <Link href="/courses" className="inline-block bg-white text-brand-orange px-10 py-5 rounded-xl font-bold text-xl hover:bg-brand-classic-cream transition-colors shadow-lg">
                Explore Our Courses
              </Link>
            </div>
            {/* Background pattern */}
            <div className="absolute top-0 right-0 opacity-10 transform translate-x-1/4 -translate-y-1/4">
               <svg width="400" height="400" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="40" fill="none" stroke="white" strokeWidth="2" strokeDasharray="5,5" />
                  <path d="M 20 20 L 80 80 M 80 20 L 20 80" stroke="white" strokeWidth="1" />
               </svg>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
