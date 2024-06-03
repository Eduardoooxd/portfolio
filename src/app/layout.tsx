import Footer from "@/components/footer";
import Header from "@/components/header";
import { WEBSITE_METADATA } from "@/config/metadata";
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import "./globals.css";

interface RootLayoutProps {
  children: React.ReactNode;
}

const inter = Inter({ subsets: ["latin"] });

export const metadata = WEBSITE_METADATA;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="h-full overflow-x-hidden">
      <body
        className={cn(
          "bg-background flex min-h-full flex-col antialiased",
          inter.className
        )}
      >
        {/* TODO: Find better background */}
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>

        <div className="bg-[#dbd7fb] absolute -top-4 -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
