import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Cookie, ShieldCheck, Settings, Info, Eye } from "lucide-react";

export const metadata: Metadata = {
  title: "Cookies Policy | Math Spark",
  description: "Learn how Math Spark uses cookies to provide a functional and secure learning experience.",
};

export default function CookiesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-brand-classic-cream font-sans">
      <Header />

      <main className="flex-1 py-20 px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 md:p-16 shadow-xl border border-brand-soft-blue/10">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-brand-orange/10 rounded-2xl text-brand-orange">
                <Cookie size={32} />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-brand-deep-navy">Cookies Policy</h1>
            </div>

            <p className="text-brand-dark-slate/60 font-medium mb-12">Last Updated: May 24, 2026</p>

            <div className="prose prose-lg max-w-none text-brand-dark-slate space-y-12">
              <section>
                <p className="text-xl leading-relaxed">
                  Math Spark uses minimal cookies to ensure our platform functions correctly and securely. This policy explains what cookies are and how we use them.
                </p>
              </section>

              <section className="space-y-6">
                <div className="flex items-center gap-3">
                  <Info className="text-brand-soft-blue" size={24} />
                  <h2 className="text-2xl font-bold text-brand-deep-navy m-0">What are Cookies?</h2>
                </div>
                <p>
                  Cookies are small text files that are stored on your device when you visit a website. They are widely used to make websites work more efficiently and provide information to the owners of the site.
                </p>
              </section>

              <section className="space-y-6">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="text-brand-soft-blue" size={24} />
                  <h2 className="text-2xl font-bold text-brand-deep-navy m-0">How We Use Cookies</h2>
                </div>
                <p>
                  At Math Spark, we prioritize student privacy and only use cookies for essential functional purposes.
                </p>
                <div className="bg-brand-classic-cream/30 p-6 rounded-2xl border border-brand-soft-blue/10">
                  <h3 className="text-lg font-bold text-brand-deep-navy mb-4">Essential Cookies</h3>
                  <p className="text-sm mb-4">
                    These cookies are necessary for the platform to function and cannot be switched off in our systems.
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-sm">
                    <li><strong className="text-brand-deep-navy">Authentication:</strong> Maintaining your login session so you don't have to re-enter your password on every page.</li>
                    <li><strong className="text-brand-deep-navy">Security:</strong> Helping to detect and prevent security risks to our platform and your account.</li>
                    <li><strong className="text-brand-deep-navy">Preferences:</strong> Remembering basic site settings like your preferred language or region.</li>
                  </ul>
                </div>
              </section>

              <section className="space-y-6">
                <div className="flex items-center gap-3">
                  <Eye className="text-brand-soft-blue" size={24} />
                  <h2 className="text-2xl font-bold text-brand-deep-navy m-0">No Third-Party Tracking</h2>
                </div>
                <p>
                  Math Spark <strong className="text-brand-deep-navy">does not</strong> use advertising or tracking cookies. We do not sell your browsing data to third parties, and we do not follow your activity across other websites.
                </p>
              </section>

              <section className="space-y-6">
                <div className="flex items-center gap-3">
                  <Settings className="text-brand-soft-blue" size={24} />
                  <h2 className="text-2xl font-bold text-brand-deep-navy m-0">Managing Cookies</h2>
                </div>
                <p>
                  You can control and manage cookies through your browser settings. Most browsers allow you to block or delete cookies, but doing so may prevent you from using certain features of the Math Spark platform, such as logging into your dashboard.
                </p>
              </section>

              <div className="mt-16 pt-8 border-t border-brand-classic-cream text-center">
                <p className="text-brand-dark-slate/60">
                  Questions about our cookie usage? Contact us at <a href="mailto:mathspark2026@gmail.com" className="text-brand-orange font-bold hover:underline">mathspark2026@gmail.com</a>
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
