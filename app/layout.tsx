import type { Metadata } from "next";
import { Inter, Mochiy_Pop_One } from "next/font/google";
import "./globals.css";
import { InitialLoadProvider } from "@/components/providers/InitialLoadProvider";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const mochiyPopOne = Mochiy_Pop_One({
  variable: "--font-display",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CheesePay",
  description: "The cheesiest way to pay",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "CheesePay",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${mochiyPopOne.variable} antialiased bg-black flex justify-center font-sans`}
      >
        <div className="w-full max-w-[480px] min-h-dvh bg-black shadow-2xl relative overflow-x-hidden border-x border-zinc-900">
          <InitialLoadProvider>
            {children}
          </InitialLoadProvider>
        </div>
      </body>
    </html>
  );
}
