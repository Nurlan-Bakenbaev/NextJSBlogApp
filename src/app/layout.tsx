import type { Metadata } from "next";
import { Inter, Oxygen } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProviderRedux from "@/components/Provider";
import ThemeProvider from "@/components/ThemeProvider";
const oxygen = Oxygen({ subsets: ["latin"], weight: "400" });
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by cnpmreate next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={`container_main `}>
          <div>
            <ProviderRedux>
              <ThemeProvider>
                <div className={`${oxygen.className} w-[80%]  mx-auto`}>
                  <Navbar />

                  <main className="h-screen">{children}</main>
                  <Footer />
                </div>
              </ThemeProvider>
            </ProviderRedux>
          </div>
        </div>
      </body>
    </html>
  );
}
