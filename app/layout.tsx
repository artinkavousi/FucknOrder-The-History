import './globals.css';
import React from 'react';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'Fuck N Order',
  description: 'Satirical, citation-backed interactive history.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
