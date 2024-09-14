import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./Navbar";

const gilroyRegular = localFont({
  src: "./fonts/Gilroy-Regular.woff",
  variable: "--font-gilroy-regular",
});

const gilroyBold = localFont({
  src: "./fonts/Gilroy-Extrabold.woff",
  variable: "--font-gilroy-bold",
  weight: "900",
});

export const metadata: Metadata = {
  title: "Bohdan Kondratskyi",
  description: "Portfolio of a legendary developer/gymrat",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${gilroyRegular.variable} ${gilroyBold.variable} antialiased !p-7 2xl:overflow-hidden font-gilroy`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
