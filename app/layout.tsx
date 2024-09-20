import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Excited from "@/components/shared/Excited";
import Footer from "@/components/shared/Footer";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className="w-full">
        <Navbar />
        {children}
        <Excited />
        <Footer />
      </body>
    </html>
  );
}
