import type { Metadata } from "next";
import { Inter, Oxygen } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProviderRedux from "@/components/Provider";
import ThemeProvider from "@/components/ThemeProvider";
import AuthProvider from "@/components/AuthProvider";
const oxygen = Oxygen({ subsets: ["latin"], weight: "400" });
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blog App ",
  description: "This is my Another CRUD APP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className={`container_main `}>
          <div>
            <AuthProvider>
              <ProviderRedux>
                <ThemeProvider>
                  <div
                    className={`${oxygen.className}px-2 md:px-10  w-[100%] md:w-[80]  mx-auto`}
                  >
                    <Navbar />
                    <main
                      className={` ${inter.className} min-h-screen h-full px-2`}
                    >
                      {children}
                    </main>
                    <Footer />
                  </div>
                </ThemeProvider>
              </ProviderRedux>
            </AuthProvider>
          </div>
        </div>
      </body>
    </html>
  );
}
