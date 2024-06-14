import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";



export const metadata: Metadata = {
  title: "Spotlight",
  description: "Best place to find info on latest company updates",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='relative'>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
