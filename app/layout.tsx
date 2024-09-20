import type { Metadata } from "next";
import { Sofadi_One } from "next/font/google";
import "./globals.css";
import { MantineProvider, createTheme } from "@mantine/core";
import '@mantine/core/styles.css';

const sofadi = Sofadi_One({ subsets: ["latin"], weight: '400' });

export const metadata: Metadata = {
  title: "Robbie - Portfolio",
  description: "Personal website to display portfolio and links",
};

// const theme = createTheme({
//   fontFamily: 'Sofadi One, cursive',
//   headings: {
//     fontFamily: 'Playpen Sans',
//     fontWeight: '800',
//   }
// });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={sofadi.className}>
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  );
}
