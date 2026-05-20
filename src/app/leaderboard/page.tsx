import type { Metadata } from "next";
import LeaderboardContent from "@/components/LeaderboardContent";

export const metadata: Metadata = {
  title: "Leaderboard | Math Spark Community",
  description: "See where you rank in the Math Spark community! Earn sparks by completing lessons, solving problems, and being an active learner.",
};

export default function Page() {
  return <LeaderboardContent />;
}
