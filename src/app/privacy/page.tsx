import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield, Eye, Lock, UserCheck, Scale, Mail, Cookie } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Math Spark",
  description: "Learn how Math Spark protects the safety and privacy of our students and their families.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-brand-classic-cream font-sans">
      <Header />

      <main className="flex-1 py-20 px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 md:p-16 shadow-xl border border-brand-soft-blue/10">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-brand-soft-blue/10 rounded-2xl text-brand-soft-blue">
                <Shield size={32} />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-brand-deep-navy">Privacy Policy</h1>
            </div>

            <p className="text-brand-dark-slate/60 font-medium mb-12">Last Updated: May 24, 2026</p>

            <div className="prose prose-lg max-w-none text-brand-dark-slate space-y-12">
              <section>
                <p className="text-xl leading-relaxed">
                  At Math Spark, the safety and privacy of our students are our top priorities. This Privacy Policy outlines how we collect, use, and protect your information.
                </p>
              </section>

              <section className="space-y-6">
                <div className="flex items-center gap-3">
                  <Eye className="text-brand-soft-blue" size={24} />
                  <h2 className="text-2xl font-bold text-brand-deep-navy m-0">1. Information We Collect</h2>
                </div>
                <p>
                  We collect the minimum amount of information necessary to provide an excellent educational experience:
                </p>
                <ul className="list-disc pl-6 space-y-4">
                  <li>
                    <strong className="text-brand-deep-navy">Parent/Guardian Information:</strong> Name, email address, and billing information (for paid plans).
                  </li>
                  <li>
                    <strong className="text-brand-deep-navy">Student Information:</strong> First name (or nickname), grade level, and learning progress data (lessons completed, Sparks earned). We do not require students to provide their full name or contact information directly.
                  </li>
                </ul>
              </section>

              <section className="space-y-6">
                <div className="flex items-center gap-3">
                  <Scale className="text-brand-soft-blue" size={24} />
                  <h2 className="text-2xl font-bold text-brand-deep-navy m-0">2. How We Use Information</h2>
                </div>
                <p>We use the collected data to:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-brand-classic-cream/30 p-6 rounded-2xl border border-brand-soft-blue/10">
                    <ul className="list-disc pl-5 space-y-2 text-sm">
                      <li>Track student progress and award 'Sparks' and badges.</li>
                      <li>Personalize the learning experience.</li>
                    </ul>
                  </div>
                  <div className="bg-brand-classic-cream/30 p-6 rounded-2xl border border-brand-soft-blue/10">
                    <ul className="list-disc pl-5 space-y-2 text-sm">
                      <li>Communicate with parents regarding progress.</li>
                      <li>Improve curriculum and platform functionality.</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="space-y-6">
                <div className="flex items-center gap-3">
                  <Lock className="text-brand-orange" size={24} />
                  <h2 className="text-2xl font-bold text-brand-deep-navy m-0">3. Data Safety and Security</h2>
                </div>
                <p>
                  We implement industry-standard security measures to protect against unauthorized access to or alteration of data. We do not sell or trade student or parent information to third parties.
                </p>
              </section>

              <section className="space-y-6">
                <div className="flex items-center gap-3">
                  <UserCheck className="text-brand-soft-blue" size={24} />
                  <h2 className="text-2xl font-bold text-brand-deep-navy m-0">4. Parent Involvement and Rights</h2>
                </div>
                <p>Parents and legal guardians have the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Review the information we have collected about their child.</li>
                  <li>Request the deletion of their child's account and data.</li>
                  <li>Opt-out of specific communications.</li>
                </ul>
                <p>To exercise these rights, please contact us at <a href="mailto:mathspark2026@gmail.com" className="text-brand-orange font-bold hover:underline">mathspark2026@gmail.com</a>.</p>
              </section>

              <section className="space-y-6">
                <div className="flex items-center gap-3">
                  <Shield className="text-brand-soft-blue" size={24} />
                  <h2 className="text-2xl font-bold text-brand-deep-navy m-0">5. Compliance with COPPA</h2>
                </div>
                <p>
                  Math Spark is designed with the Children's Online Privacy Protection Act (COPPA) in mind. We require parental consent for all student accounts and prioritize the protection of data for users under 13.
                </p>
              </section>

              <section className="space-y-6">
                <div className="flex items-center gap-3">
                  <Cookie className="text-brand-orange" size={24} />
                  <h2 className="text-2xl font-bold text-brand-deep-navy m-0">6. Cookies and Tracking</h2>
                </div>
                <p>
                  We use minimal cookies strictly for functional purposes (maintaining login sessions). We do not use tracking cookies for advertising.
                </p>
              </section>

              <section className="space-y-6 pt-12 border-t border-brand-classic-cream">
                <div className="flex items-center gap-3">
                  <Mail className="text-brand-soft-blue" size={24} />
                  <h2 className="text-2xl font-bold text-brand-deep-navy m-0">7. Contact Us</h2>
                </div>
                <p>
                  If you have any questions about this Privacy Policy or our data practices, please reach out to our team at <a href="mailto:mathspark2026@gmail.com" className="text-brand-orange font-bold hover:underline">mathspark2026@gmail.com</a>.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
