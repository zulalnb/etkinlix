import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Acme } from "next/font/google";
import "./globals.css";
import { EventProvider } from "@/context/EventProvider";
import { Header } from "@/components/Header";
import { SecondaryHeader } from "@/components/SecondaryHeader";

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
			<body className={`${galanoGrotesque.variable} ${acme.variable}`}>
				<a
					href="#main-content"
					className="focus:text-pink absolute -top-10 left-0 z-1000 bg-white px-3 py-2 text-black transition-[top] duration-200 ease-in focus:top-2 focus:outline-2 focus:outline-solid"
				>
					İçeriğe atla
				</a>
				<EventProvider>
					<Header />
					<SecondaryHeader />
					{children}
				</EventProvider>
				<SpeedInsights />
			</body>
		</html>
	);
}
