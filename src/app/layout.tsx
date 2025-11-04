import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Inter, Literata } from 'next/font/google';
import SplashScreen from '@/components/layout/SplashScreen';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const literata = Literata({
  subsets: ['latin'],
  variable: '--font-literata',
  weight: ['400', '700'],
  style: ['normal', 'italic']
});


export const metadata: Metadata = {
  title: 'Dharmagranth TV',
  description: 'Promoting dharmic values and teachings through spiritual media.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn('scroll-smooth', inter.variable, literata.variable)}>
      <body className={cn('font-body antialiased min-h-screen flex flex-col')}>
        <SplashScreen />
        <Header />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
