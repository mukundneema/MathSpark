import type { Metadata } from "next";
import HelpContent from "@/components/HelpContent";

export const metadata: Metadata = {
  title: "Help Center | Math Spark Support",
  description: "Find answers to common questions about using the Math Spark platform, technical troubleshooting, and billing information.",
};

export default function Page() {
  return <HelpContent />;
}
