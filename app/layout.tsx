import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JIULH",
  themeColor: "#0b5000",
  openGraph: {
    title: "JIULH",
    description: "Определённо человек"
    // url: ""
    // site_name: ""
    // image: ""
  },
  icons: {
    icon: '/static/jiulh.png',
    shortcut: '/static/jiulh.png',
    apple: '/static/jiulh.png'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
