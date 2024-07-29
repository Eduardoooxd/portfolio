import Header from '@/components/header';
import { Toaster } from '@/components/shared/toaster';
import ThemeSwitch from '@/components/theme-switch';
import ActiveSectionProvider from '@/context/active-section-context';
import ThemeContextProvider from '@/context/theme-context';
import { WEBSITE_METADATA } from '@/lib/data';
import { cn } from '@/lib/utils';
import CSPostHogProvider from '@/providers/posthog';
import { Inter } from 'next/font/google';
import Footer from '../components/footer';
import './globals.css';

interface RootLayoutProps {
  children: React.ReactNode;
}

const inter = Inter({ subsets: ['latin'] });

export const metadata = WEBSITE_METADATA;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="h-full overflow-x-hidden !scroll-smooth">
      <CSPostHogProvider>
        <body className={cn('flex min-h-full flex-col bg-background antialiased', inter.className)}>
          <ThemeContextProvider>
            <ActiveSectionProvider>
              <Header />
              {children}
              <Footer />
            </ActiveSectionProvider>
            <ThemeSwitch />
            <Toaster />
          </ThemeContextProvider>
        </body>
      </CSPostHogProvider>
    </html>
  );
}
