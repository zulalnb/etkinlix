import type { Metadata } from "next";
import localFont from "next/font/local";
import { Acme } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { SecondaryHeader } from "@/components/SecondaryHeader";
import { EventProvider } from "@/context/EventProvider";

// Load the font
const galanoGrotesque = localFont({
	src: [
		{
			path: "./fonts/GalanoGrotesqueBold.otf",
			weight: "700",
			style: "normal",
		},
		{
			path: "./fonts/GalanoGrotesqueExtraBold.otf",
			weight: "800",
			style: "normal",
		},
		{
			path: "./fonts/GalanoGrotesqueMedium.otf",
			weight: "500",
			style: "normal",
		},
		{
			path: "./fonts/GalanoGrotesqueRegular.otf",
			weight: "400",
			style: "normal",
		},
	],
	variable: "--font-galano",
});

const acme = Acme({
	weight: ["400"],
	style: ["normal"],
	subsets: ["latin"],
	display: "swap",
	variable: "--font-acme",
});

export const metadata: Metadata = {
	title: "Etkinlix - Tiyatro, Konser, Stand Up, Sinema ve Çocuk Etkinlikleri",
	description:
		"Etkinlix sayfası ile tiyatro, konser, stand-up, sinema ve çocuk etkinlikleri hakkında detaylı bilgilere ulaşın. Bilet al, takvimine ekle ve katılmak istediğin etkinlikleri takip et.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="tr">
			<EventProvider>
				<body className={`${galanoGrotesque.variable} ${acme.variable}`}>
					<Header />
					<SecondaryHeader />
					{children}
				</body>
			</EventProvider>
		</html>
	);
}
