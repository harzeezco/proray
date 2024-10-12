import Footer from '@/layout/footer';
import Header from '@/layout/header';
import type { Metadata } from 'next';
import localFont from 'next/font/local';

import './globals.css';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: "proray || Empowering healthcare with radiation protection",
  description:
    "Empowering healthcare providers with industry-leading radiation protection solutions and a full range of high-quality medical equipment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="no-visible-scrollbar" lang="en">
      <head>
        <link rel="icon" href="/icon/logo.png" type="image/png " />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
