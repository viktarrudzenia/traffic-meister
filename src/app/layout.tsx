import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';

import ContentWrapper from '@/layout/ContentWrapper';
import AppWrapper from '@/layout/AppWrapper';
import Header from '@/layout/Header';
import Footer from '@/layout/Footer';
import TmErrorBoundary from '@/shared/components/TmErrorBoundary';

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
      <body className={roboto.className}>
        <AppWrapper>
          <Header />
          <ContentWrapper>{children}</ContentWrapper>
          <Footer />
        </AppWrapper>
      </body>
    </html>
  );
}
