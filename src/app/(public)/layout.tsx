import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PRIME - Corporate Golf Membership",
  description: "Flexible access to 70+ premium golf courses across Thailand. 144 annual rounds with dedicated Personal Concierge service.",
};

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
