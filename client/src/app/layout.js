import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/Footer";
import BarbaWrapper from "@/components/ui/BarbaWrapper";
import PreloaderWrapper from "@/components/ui/PreloaderWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Preetizen - Sustainable Fashion",
  description: "Eco-conscious clothing crafted by local artisans",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <PreloaderWrapper>
          <BarbaWrapper>
            <Navbar />
            {children}
            <Footer />
          </BarbaWrapper>
        </PreloaderWrapper>
      </body>
    </html>
  );
}
