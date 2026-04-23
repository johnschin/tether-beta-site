import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request Beta Access | Tether",
  description:
    "Join a small group of forward-thinking employers piloting Tether — confidential AI resilience coaching for employees navigating workplace change, AI rollout, and restructuring.",
  alternates: { canonical: "https://tetheredconsulting.com/beta" },
  openGraph: {
    url: "https://tetheredconsulting.com/beta",
    title: "Request Beta Access | Tether",
    description:
      "Join the Tether beta. Confidential AI resilience coaching for employees navigating workplace change.",
  },
};

export default function BetaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
