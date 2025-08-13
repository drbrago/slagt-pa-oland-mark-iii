import type { Metadata } from 'next';
import { Bebas_Neue, Roboto_Slab } from 'next/font/google';
import './globals.css';
import ClientLayout from '@/components/ClientLayout';

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  variable: '--font-logo',
  weight: '400',
});
const robotoSlab = Roboto_Slab({
  subsets: ['latin'],
  variable: '--font-hero',
});

export const metadata: Metadata = {
  title: 'Slakt på Öland Mark III',
  description:
    'Ett surrealistiskt postapokalyptiskt zombie-skräck-rollspel i Sverige, byggt på Year Zero Engine (Fria Ligan open source).',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="sv" className={`${bebasNeue.variable} ${robotoSlab.variable}`}>
      <body className="bg-ink text-albescent-white-100">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:bg-albescent-white-100 focus:text-blood focus:p-2 focus:rounded"
        >
          Hoppa till huvudinnehållet
        </a>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
