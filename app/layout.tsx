import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./styles/globals.css";

const Roboto = Roboto_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "JIULH",
	openGraph: {
		title: "JIULH",
		description: "Определённо человек",
		url: "https://jiulh-site.vercel.app/",
		images: "https://jiulh-site.vercel.app/static/jiulh.png"
	},
	icons: {
		icon: '/static/jiulh.png',
		shortcut: '/static/jiulh.png',
		apple: '/static/jiulh.png'
	},
	twitter: {
		card: "summary"
	},
	other: {
		"theme-color": "#747b27"
	}
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
	return (
		<html lang="en">
			<body className={Roboto.className}>{children}</body>
		</html>
	);
}
