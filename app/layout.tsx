import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const barlow = localFont({
  src: [
    {
      path: './src/fonts/BarlowCondensed-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './src/fonts/BarlowCondensed-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './src/fonts/BarlowCondensed-Bold.ttf',
      weight: '700',
      style: 'normal',      
    },
    {
      path: './src/fonts/BarlowCondensed-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable:'--font-barlow'
})


export const metadata: Metadata = {
  title: "SquareUp StartUp",
  description: "let\'s square up with us",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${barlow.variable}`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
