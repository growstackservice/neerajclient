import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import './globals.css';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],

});


export const metadata: Metadata = {
  title: 'Neerja Bhatia - Transform Your Leadership from the Inside Out',
  description: 'Navigate pressures, ignite purpose, and build high-trust teams—guided by Neerja Bhatia\'s Living Intelligence approach.',
  keywords: 'leadership coaching, executive coaching, team coaching, living intelligence, leadership development',
  authors: [{ name: 'Neerja Bhatia' }],
  openGraph: {
    title: 'Neerja Bhatia - Transform Your Leadership from the Inside Out',
    description: 'Navigate pressures, ignite purpose, and build high-trust teams—guided by Neerja Bhatia\'s Living Intelligence approach.',
    type: 'website',
  },
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </head>
      <body className={dmSans.className}>
        {children}
      </body>
    </html>
  );
}