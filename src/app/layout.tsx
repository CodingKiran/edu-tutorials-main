import "./globals.css";
import type { Metadata } from "next";
import { inter } from "@/app/ui/fonts";
import Navbar from "@/components/Navbar/page";
import Footer from "@/components/Footer/page";

export const metadata: Metadata = {
  title: "Edu Tutorials",
  description: "A platform for commerce students to learn the concepts easily",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
