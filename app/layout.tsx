
import type { Metadata } from "next";
import "./globals.css";
import "antd/dist/reset.css";
<meta name="viewport" content="width=device-width, initial-scale=1" />

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "The Pet Vietnam",
  description: "Personal Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body className="min-h-screen flex flex-col relative overflow-x-hidden">

        {/* CONTENT */}
        <div className="relative z-10 flex flex-col flex-1">
          <Navbar />

          <main className="flex-1">
            {children}
          </main>

          <Footer />
        </div>

      </body>
    </html>
  );
}