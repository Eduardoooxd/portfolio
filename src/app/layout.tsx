import Header from '@/components/header';
import { Toaster } from '@/components/shared/toaster';
import ActiveSectionProvider from '@/context/active-section-context';
import { WEBSITE_METADATA } from '@/lib/data';
import { cn } from '@/lib/utils';
import { Inter } from 'next/font/google';
import Footer from '../components';
import './globals.css';

interface RootLayoutProps {
  children: React.ReactNode;
}

const inter = Inter({ subsets: ['latin'] });

export const metadata = WEBSITE_METADATA;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="h-full overflow-x-hidden !scroll-smooth">
      <body className={cn('flex min-h-full flex-col bg-background antialiased', inter.className)}>
        <ActiveSectionProvider>
          {/* TODO: Find better background */}
          <div className="absolute right-[11rem] top-[-6rem] -z-10 h-[31.25rem] w-[31.25rem] rounded-full bg-[#fbe2e3] blur-[10rem] dark:bg-[#946263] sm:w-[68.75rem]"></div>

          <div className="absolute -top-4 left-[-35rem] -z-10 h-[31.25rem] w-[50rem] rounded-full bg-[#dbd7fb] blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
          <Header />
          {children}
          <Footer />
          <Toaster />
        </ActiveSectionProvider>
      </body>
    </html>
  );
}
