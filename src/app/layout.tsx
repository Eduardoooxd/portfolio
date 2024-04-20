import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { WEBSITE_METADATA } from "@/config/metadata";
import { cn } from "@/lib/utils";
import "./globals.css";

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata = WEBSITE_METADATA;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="h-full">
      <body
        className={cn("bg-background flex min-h-full flex-col antialiased")}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
