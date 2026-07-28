import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Parke Ustam | İstanbul, Anadolu Yakası, Gebze, Kocaeli Parke Ustası",
  description: "20 yılı aşkın tecrübemizle İstanbul, Anadolu Yakası, Gebze ve Kocaeli bölgelerinde profesyonel parke döşeme, laminat, sistre ve cila hizmetleri sunuyoruz.",
  keywords: ["Parke Ustam", "Parke Döşeme", "Laminat Parke", "Parke Ustası", "İstanbul Parke Ustası", "Anadolu Yakası Parke", "Gebze Parke Ustası", "Kocaeli Parke", "Parke Döşeme Fiyatı"],
  openGraph: {
    title: "Parke Ustam | Profesyonel Parke Döşeme",
    description: "20 yılı aşkın tecrübemizle İstanbul, Anadolu Yakası, Gebze ve Kocaeli genelinde profesyonel parke döşeme hizmeti.",
    url: "https://parkeustam.com",
    siteName: "Parke Ustam",
    locale: "tr_TR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning className="scroll-smooth">
      <head>
        <meta name="google-site-verification" content="nxNAelE9Xq4PEkBsAt_2pd6MJv2gfB8jfbX00f1LKeg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HomeAndConstructionBusiness",
              "name": "Parke Ustam",
              "image": "https://parkeustam.com/images/hero-bg.png",
              "url": "https://parkeustam.com",
              "telephone": "+905355067130",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Gebze",
                "addressRegion": "Kocaeli",
                "addressCountry": "TR"
              },
              "areaServed": ["İstanbul", "Kocaeli", "Gebze", "Anadolu Yakası"]
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
