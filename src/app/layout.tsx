'use client';

import React from 'react';
import { CustomProvider } from 'rsuite';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';
import 'rsuite/dist/rsuite.min.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`} suppressHydrationWarning={true}>
      <body className="antialiased">
        <CustomProvider theme="dark">
          {children}
        </CustomProvider>
      </body>
    </html>
  );
}
