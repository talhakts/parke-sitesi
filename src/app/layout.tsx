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
  title: "İstanbul Parke Ustası | Laminat Parke Döşeme – Parke Ustam",
  description: "İstanbul Anadolu Yakası başta olmak üzere tüm İstanbul ve Kocaeli bölgesinde 30 yılı aşkın tecrübeyle garantili laminat parke döşeme, süpürgelik montajı ve parke tamiri hizmeti. Ücretsiz keşif için arayın.",
  keywords: [
    "istanbul parke ustası",
    "parke ustası",
    "parke döşeme",
    "laminat parke döşeme",
    "anadolu yakası parke ustası",
    "pendik parke ustası",
    "kartal parke ustası",
    "kadıköy parke ustası",
    "süpürgelik montajı",
    "parke tamiri",
    "Parke Ustam"
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "İstanbul Parke Ustası | Laminat Parke Döşeme – Parke Ustam",
    description: "İstanbul genelinde ve Anadolu Yakası'nda 30 yılı aşkın tecrübeyle profesyonel laminat parke döşeme, süpürgelik montajı ve zemin çözümleri.",
    url: "https://www.parkeustam.com",
    siteName: "Parke Ustam",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "İstanbul Parke Ustası | Laminat Parke Döşeme – Parke Ustam",
    description: "İstanbul genelinde ve Anadolu Yakası'nda 30 yılı aşkın tecrübeyle profesyonel laminat parke döşeme, süpürgelik montajı ve zemin çözümleri.",
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
        "@id": "https://www.parkeustam.com/#business",
        "name": "Parke Ustam",
        "url": "https://www.parkeustam.com",
        "image": "https://www.parkeustam.com/images/hero-bg.png",
        "telephone": "+905355067130",
        "email": "info@parkeustam.com",
        "priceRange": "₺₺",
        "areaServed": allAreas.slice(0, 25),
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
      },
      {
        "@type": "WebSite",
        "@id": "https://www.parkeustam.com/#website",
        "url": "https://www.parkeustam.com",
        "name": "Parke Ustam",
        "description": "İstanbul parke ustası ve profesyonel parke döşeme hizmetleri",
        "publisher": {
          "@id": "https://www.parkeustam.com/#business"
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


