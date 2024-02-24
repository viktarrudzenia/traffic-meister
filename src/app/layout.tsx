import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';

import '@/shared/styles/globals.scss';

const roboto = Roboto({
  subsets: ['latin'],
  weight: '400',
});

export const metadata: Metadata = {
  title: 'Traffic Meister',
  description: 'The Traffic Meister application assignment',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
