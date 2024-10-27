"use client";

import "./globals.css";

import { inter } from "@/app/ui/fonts";
import Navbar from "@/components/Navbar/page";
import Footer from "@/components/Footer/page";
import { SessionProvider } from "next-auth/react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <SessionProvider>
        <body className={`${inter.className} antialiased`}>
          <Navbar />
          {children}
          <Footer />
        </body>
      </SessionProvider>
    </html>
  );
}
