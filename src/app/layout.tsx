import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Uzman Parke | Profesyonel Parke Döşeme ve Sistre Cila",
  description: "20 yılı aşkın tecrübemizle lüks ve kaliteli parke döşeme, laminat, sistre ve cila hizmetleri sunuyoruz. Ücretsiz keşif ve uygun fiyat garantisiyle.",
  keywords: ["Parke Döşeme", "Laminat Parke", "Parke Ustası", "Laminat Parke Ustası", "Parke Döşeme Fiyatı", "Parke İşçiliği"],
  openGraph: {
    title: "Uzman Parke | Profesyonel Parke Döşeme",
    description: "20 yılı aşkın tecrübemizle lüks ve kaliteli parke döşeme hizmeti.",
    url: "https://uzmanparke.com",
    siteName: "Uzman Parke",
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
