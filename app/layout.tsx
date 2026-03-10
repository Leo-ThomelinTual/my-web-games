import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const JetBrains = JetBrains_Mono({
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "My games lab",
  description: "My web games lab",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${JetBrains.variable} antialiased bg-black`}>
        {children}
      </body>
    </html>
  );
}
