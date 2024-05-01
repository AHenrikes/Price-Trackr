import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from '@clerk/nextjs'
import "@/styles/globals.css";
import Aside from "@/components/Aside";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Price-Trackr",
  description: "Web app to track local retails prices",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className}`}>
          <header className="fixed grid grid-rows-[90px,auto] h-screen w-20 border-r gap-36">
            <Aside />
          </header>

          <main>
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}