import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { districts } from "@/lib/districts";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.parkeustam.com"),
  title: "İstanbul Parke Ustası | İstanbul Parke Döşeme - Parke Ustam",
  description: "İstanbul parke ustası arayanlar için 30 yılı aşkın tecrübeyle profesyonel İstanbul parke döşeme, laminat parke, sistre cila ve süpürgelik montajı hizmeti sunuyoruz. Ücretsiz keşif ve uygun fiyatlar için hemen arayın.",
  keywords: [
    "istanbul parke ustası",
    "istanbul parke döşeme",
    "parke ustası",
    "parke döşeme",
    "laminat parke",
    "Parke Ustam",
    "Anadolu Yakası Parke",
    "Gebze Parke Ustası",
    "Kocaeli Parke Döşeme",
    "Parke Döşeme Fiyatı"
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "İstanbul Parke Ustası | İstanbul Parke Döşeme - Parke Ustam",
    description: "İstanbul parke ustası arayanlar için 30 yılı aşkın tecrübeyle profesyonel İstanbul parke döşeme, laminat parke ve sistre cila hizmeti.",
    url: "https://www.parkeustam.com",
    siteName: "Parke Ustam",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "İstanbul Parke Ustası | İstanbul Parke Döşeme - Parke Ustam",
    description: "İstanbul parke ustası arayanlar için 30 yılı aşkın tecrübeyle profesyonel İstanbul parke döşeme, laminat parke ve sistre cila hizmeti.",
  },
  verification: {
    google: "nxNAelE9Xq4PEkBsAt_2pd6MJv2gfB8jfbX00f1LKeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const allAreas = [
    "İstanbul",
    "Kocaeli",
    ...districts.map((d) => `${d.name}, ${d.region === "Kocaeli" ? "Kocaeli" : "İstanbul"}`)
  ];

  return (
    <html lang="tr" suppressHydrationWarning className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HomeAndConstructionBusiness",
              "name": "Parke Ustam",
              "image": "https://www.parkeustam.com/images/hero-bg.png",
              "url": "https://www.parkeustam.com",
              "telephone": "+905355067130",
              "priceRange": "₺₺",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Kadıköy",
                "addressRegion": "İstanbul",
                "addressCountry": "TR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "40.9901",
                "longitude": "29.0292"
              },
              "areaServed": allAreas,
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "148",
                "bestRating": "5",
                "worstRating": "1"
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday"
                  ],
                  "opens": "08:00",
                  "closes": "21:00"
                }
              ]
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


