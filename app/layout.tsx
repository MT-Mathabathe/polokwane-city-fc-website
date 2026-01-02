import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Polokwane City FC - Rise of the City",
  description: "Official website of Polokwane City FC. Experience the passion, power, and pride of South African football.",
  keywords: "Polokwane City FC, South African Football, PSL, Soccer, Rise of the City",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
