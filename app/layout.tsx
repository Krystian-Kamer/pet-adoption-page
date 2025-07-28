import type { Metadata } from 'next';
import { Poiret_One, Red_Hat_Text, Roboto } from 'next/font/google';
import './globals.css';
import { Menu } from '@/components/Menu';
import { Hero } from '@/components/Hero';
import { Footer } from '@/components/Footer';

const poiretOne = Poiret_One({
  variable: '--font-poiret-one',
  subsets: ['latin'],
  weight: '400',
});

const redHatText = Red_Hat_Text({
  variable: '--font-red-hat-text',
  subsets: ['latin'],
});

const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Adoptuj zwierzaka',
  description: 'Strona poświęcona adopcji zwierząt.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poiretOne.variable} ${redHatText.variable} ${roboto.variable} relative antialiased`}
      >
        <Menu />
        <Hero />
        <main className="bg-light 3xl:max-w-[1400px] 3xl:mx-auto z-10 min-h-[1300px] max-w-[1150px] px-5 pt-15 pb-10 shadow-xl shadow-black/40 sm:px-10 md:px-15 lg:ml-50 2xl:mx-auto">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
