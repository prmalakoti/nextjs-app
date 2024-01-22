import Navbar from "@/components/navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blog App",
  description: "NextJs crud app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        <div className="rounded-lg">
          <Navbar />
        </div>
        <div className="mt-4 container mx-auto px-4">
          {children}
        </div>
      </body>
    </html>
  );
}
