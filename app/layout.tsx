import type { Metadata } from "next";
import { Space_Grotesk, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";

const displayFont = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

const dataFont = IBM_Plex_Mono({
  variable: "--font-data",
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "C-137 Archive",
  description: "A field archive of characters from the Rick and Morty universe.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${displayFont.variable} ${dataFont.variable} h-full antialiased`}
    >
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
