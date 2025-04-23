import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";
import Navbar from "@/layout/Navbar/Navbar";
import { Providers } from "@/util/Providers";
import PageWrapper from "@/layout/PageWrapper/PageWrapper"; 
import Footer from "@/layout/Footer/Footer";

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], 
});

export const metadata: Metadata = {
  title: "Emilio Pereira - Portfolio",
  description: "This is my portfolio!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${firaCode.variable} antialiased`}>
        <Providers>
          <Navbar />
          <PageWrapper>
            {children}
          </PageWrapper>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
