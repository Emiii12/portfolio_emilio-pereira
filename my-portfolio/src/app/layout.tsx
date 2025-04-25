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

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Emilio Pereira · Portfolio",
    description: "Desarrollador front-end. Portfolio con tecnologías modernas.",
    openGraph: {
      title: "Emilio Pereira · Portfolio",
      description: "Desarrollador frontend. Portfolio con React, Next.js y más.",
      url: "https://emilio-pereira.vercel.app/",
      type: "website",
      images: [
        {
          url: "https://emilio-pereira.vercel.app/image/og-image.png",
          width: 1200,
          height: 630,
          alt: "Vista previa del portfolio de Emilio Pereira, desarrollador front-end"
        }
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Emilio Pereira · Portfolio",
      description: "Front-end Developer",
      images: ["https://emilio-pereira.vercel.app/image/og-image.png"]
    },
    other: {
      'linkedin:image': "https://emilio-pereira.vercel.app/image/og-image.png",
      'linkedin:title': "Emilio Pereira · Portfolio",
      'linkedin:description': "Desarrollador frontend. Portfolio con React, Next.js y más."
    },
    metadataBase: new URL("https://emilio-pereira.vercel.app")
  };
}

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
