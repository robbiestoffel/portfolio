import type { Metadata } from "next";
import { Sofadi_One } from "next/font/google";
import { Ubuntu } from "next/font/google";
import { Kalam } from "next/font/google";
import "./globals.css";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import Header from "../components/Header";

const sofadi = Sofadi_One({ subsets: ["latin"], weight: "400" });
const ubuntu = Ubuntu({ subsets: ["latin"], weight: "400" });
const kalam = Kalam({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
	title: "Robbie - Portfolio",
	description: "Personal website to display portfolio and links",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={sofadi.className}>
				<MantineProvider>
					<div className='bg-rose-950 text-stone-100'>
						<Header />
						{children}
					</div>
				</MantineProvider>
			</body>
		</html>
	);
}
