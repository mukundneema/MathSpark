import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Scale, ShieldCheck, UserCheck, Sparkles, FileText, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service | Math Spark",
  description: "Read the Terms of Service for Math Spark, the educational platform for elementary and middle school students.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-brand-classic-cream font-sans">
      <Header />

      <main className="flex-1 py-20 px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 md:p-16 shadow-xl border border-brand-soft-blue/10">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-brand-orange/10 rounded-2xl text-brand-orange">
                <Scale size={32} />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-brand-deep-navy">Terms of Service</h1>
            </div>

            <p className="text-brand-dark-slate/60 font-medium mb-12">Last Updated: May 24, 2026</p>

            <div className="prose prose-lg max-w-none text-brand-dark-slate space-y-12">
              <section>
                <p className="text-xl leading-relaxed">
                  Welcome to Math Spark! By accessing or using our platform, you agree to comply with and be bound by the following Terms of Service. Please read them carefully.
                </p>
              </section>

              <section className="space-y-6">
                <div className="flex items-center gap-3">
                  <Globe className="text-brand-soft-blue" size={24} />
                  <h2 className="text-2xl font-bold text-brand-deep-navy m-0">1. Introduction</h2>
                </div>
                <p>
                  Math Spark is an educational platform designed to ignite a passion for mathematics in students (typically elementary and middle school age). Our services include 1-on-1 tutoring, recorded lessons, and interactive learning tools.
                </p>
              </section>

              <section className="space-y-6">
                <div className="flex items-center gap-3">
                  <UserCheck className="text-brand-soft-blue" size={24} />
                  <h2 className="text-2xl font-bold text-brand-deep-navy m-0">2. Account Registration and Safety</h2>
                </div>
                <ul className="list-none p-0 space-y-4">
                  <li className="bg-brand-classic-cream/30 p-4 rounded-xl border-l-4 border-brand-orange">
                    <strong className="text-brand-deep-navy">Parents and Guardians:</strong> Accounts for students under the age of 18 must be created and managed by a parent or legal guardian. By creating an account, you consent to your child's use of the platform.
                  </li>
                  <li className="bg-brand-classic-cream/30 p-4 rounded-xl border-l-4 border-brand-soft-blue">
                    <strong className="text-brand-deep-navy">Students:</strong> Students are expected to use the platform for educational purposes only. Account credentials must be kept secure.
                  </li>
                </ul>
              </section>

              <section className="space-y-6">
                <div className="flex items-center gap-3">
                  <Sparkles className="text-brand-orange" size={24} />
                  <h2 className="text-2xl font-bold text-brand-deep-navy m-0">3. The 'Spark' Reward System</h2>
                </div>
                <p>
                  Math Spark features a gamified reward system where students earn "Sparks" for completing lessons, solving problems, and maintaining streaks.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-white border border-brand-soft-blue/10 rounded-2xl">
                    <h4 className="font-bold text-brand-deep-navy mb-2">Nature of Sparks</h4>
                    <p className="text-sm">Sparks are non-monetary virtual points and have no real-world cash value.</p>
                  </div>
                  <div className="p-4 bg-white border border-brand-soft-blue/10 rounded-2xl">
                    <h4 className="font-bold text-brand-deep-navy mb-2">Usage</h4>
                    <p className="text-sm">Used for ranking on the leaderboard and unlocking digital achievements.</p>
                  </div>
                  <div className="p-4 bg-white border border-brand-soft-blue/10 rounded-2xl">
                    <h4 className="font-bold text-brand-deep-navy mb-2">Abuse</h4>
                    <p className="text-sm">Cheating or exploits may result in account suspension.</p>
                  </div>
                </div>
              </section>

              <section className="space-y-6">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="text-brand-soft-blue" size={24} />
                  <h2 className="text-2xl font-bold text-brand-deep-navy m-0">4. User Conduct</h2>
                </div>
                <p>
                  We strive to maintain a professional and encouraging environment. Users must not:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Use offensive or inappropriate language in bios or community areas.</li>
                  <li>Attempt to disrupt or interfere with the platform's security.</li>
                  <li>Share account access with unauthorized users.</li>
                </ul>
              </section>

              <section className="space-y-6">
                <div className="flex items-center gap-3">
                  <FileText className="text-brand-soft-blue" size={24} />
                  <h2 className="text-2xl font-bold text-brand-deep-navy m-0">5. Intellectual Property</h2>
                </div>
                <p>
                  All curriculum materials, including videos, practice problems, and text content, are the property of Math Spark and its founder, Mukund Neema. These materials are for personal, non-commercial use only and may not be redistributed without permission.
                </p>
              </section>

              <section className="space-y-6">
                <div className="flex items-center gap-3">
                  <Sparkles className="text-brand-soft-blue" size={24} />
                  <h2 className="text-2xl font-bold text-brand-deep-navy m-0">6. Modifications to Service</h2>
                </div>
                <p>
                  Math Spark reserves the right to modify or discontinue any part of the service at any time. We will notify parents/guardians of any significant changes to the Terms of Service.
                </p>
              </section>

              <div className="mt-16 pt-8 border-t border-brand-classic-cream text-center">
                <p className="text-brand-dark-slate/60">
                  Questions about our terms? Contact us at <a href="mailto:mathspark2026@gmail.com" className="text-brand-orange font-bold hover:underline">mathspark2026@gmail.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
