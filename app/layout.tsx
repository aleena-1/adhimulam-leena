import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Adhimulam Leena | Full Stack Developer",
  description:
    "Premium portfolio for Adhimulam Leena, a Computer Science Engineering student focused on full-stack development, AI, cybersecurity, and distributed computing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
