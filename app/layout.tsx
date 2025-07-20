import type { Metadata } from 'next';
import { Poiret_One, Red_Hat_Text, Roboto } from 'next/font/google';
import './globals.css';
import { Sidebar } from '@/components/Sidebar';

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
        <Sidebar />
        <main className="px-5 pt-30 pb-10 lg:ml-50">{children}</main>
        <div className="h-[1800px]">COKOLWIEK</div>
      </body>
    </html>
  );
}
