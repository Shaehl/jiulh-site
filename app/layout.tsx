import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JIULH",
  themeColor: "#747b27",
  openGraph: {
    title: "JIULH",
    description: "Определённо человек",
    siteName: "jiulh-site",
    url: "https://jiulh-site.vercel.app/",
    images: "https://jiulh-site.vercel.app/static/jiulh.png"
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
