import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StickyMobileBar } from "@/components/layout/StickyMobileBar";
import { CookieConsent } from "@/components/layout/CookieConsent";
import { siteConfig } from "@/config/site.config";
import { districts } from "@/lib/districts";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: "İstanbul Parke Ustası | Laminat Parke Döşeme – Parke Ustam",
  description: "İstanbul Anadolu Yakası başta olmak üzere tüm İstanbul ve Kocaeli bölgesinde uzman laminat parke döşeme, süpürgelik montajı ve parke tamiri hizmeti. Ücretsiz keşif için arayın.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "İstanbul Parke Ustası | Laminat Parke Döşeme – Parke Ustam",
    description: "İstanbul genelinde ve Anadolu Yakası'nda uzman işçilikle profesyonel laminat parke döşeme, süpürgelik montajı ve zemin çözümleri.",
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "İstanbul Parke Ustası | Laminat Parke Döşeme – Parke Ustam",
    description: "İstanbul genelinde ve Anadolu Yakası'nda uzman işçilikle profesyonel laminat parke döşeme, süpürgelik montajı ve zemin çözümleri.",
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
    "İstanbul Anadolu Yakası",
    "İstanbul Avrupa Yakası",
    "Kocaeli",
    ...districts.map((d) => `${d.name}, ${d.region === "Kocaeli" ? "Kocaeli" : "İstanbul"}`)
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "HomeAndConstructionBusiness",
        "@id": `${siteConfig.url}/#business`,
        "name": siteConfig.name,
        "url": siteConfig.url,
        "image": `${siteConfig.url}/images/hero-bg.webp`,
        "telephone": siteConfig.phoneRaw,
        "email": siteConfig.email,
        "priceRange": "₺₺",
        "areaServed": allAreas.slice(0, 25),
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": siteConfig.openingHoursSchema.days,
            "opens": siteConfig.openingHoursSchema.opens,
            "closes": siteConfig.openingHoursSchema.closes
          }
        ]
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        "url": siteConfig.url,
        "name": siteConfig.name,
        "description": "İstanbul parke ustası ve profesyonel parke döşeme hizmetleri",
        "publisher": {
          "@id": `${siteConfig.url}/#business`
        },
        "inLanguage": "tr-TR"
      }
    ]
  };

  return (
    <html lang="tr" suppressHydrationWarning className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
      </head>
      <body className="font-sans antialiased text-foreground bg-background">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1 pb-16 md:pb-0">
              {children}
            </main>
            <Footer />
            <StickyMobileBar />
            <CookieConsent />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
