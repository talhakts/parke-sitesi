import { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Hero } from '@/components/sections/Hero';
import { TrustBadges } from '@/components/sections/TrustBadges';
import { PriceCalculator } from '@/components/sections/PriceCalculator';
import { WhyUs } from '@/components/sections/WhyUs';
import { Contact } from '@/components/sections/Contact';
import { CircleDollarSign, MapPin, HelpCircle, AlertCircle } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Parke Döşeme Fiyatları 2026 | İşçilik ve Metrekare Maliyetleri",
  description: "İstanbul ve Anadolu Yakası'nda 2026 güncel laminat parke döşeme, süpürgelik ve eski zemin söküm işçilik fiyatları. Canlı hesaplama aracı ve ücretsiz keşif fırsatı.",
  keywords: [
    "parke döşeme fiyatları",
    "parke işçilik fiyatları",
    "laminat parke m2 fiyatı",
    "pendik parke döşeme fiyatları",
    "parke montaj fiyatı",
    "süpürgelik montaj fiyatı"
  ],
  alternates: {
    canonical: "/parke-doseme-fiyatlari",
  },
  openGraph: {
    title: "Parke Döşeme Fiyatları 2026 | İşçilik ve Metrekare Maliyetleri",
    description: "Şeffaf işçilik hesaplama aracı ve sürprizsiz fiyat politikasıyla Parke Ustam.",
    url: "https://www.parkeustam.com/parke-doseme-fiyatlari",
    siteName: "Parke Ustam",
    locale: "tr_TR",
    type: "website",
  },
};

const pricingFaqs = [
  {
    question: "Verilen fiyatlara malzeme dahil midir?",
    answer: "Sitemizdeki fiyat hesaplama aracı ve temel fiyat listelerimiz profesyonel 'işçilik' bedellerini kapsar. Müşterilerimiz parkeyi kendileri temin edebilir veya dilerlerse kaliteli anlaşmalı markalarımızdan malzeme dahil anahtar teslim teklif alabilirler."
  },
  {
    question: "Net fiyat ne zaman kesinleşir?",
    answer: "En net ve kesin fiyat, ustanızın mekanınıza gelerek lazer metre ile yapacağı ücretsiz keşif ve zemin düzlük incelemesinin hemen ardından yazılı olarak verilir. Keşif sonrası asla sürpriz ek masraf çıkarılmaz."
  },
  {
    question: "Eşyalı evlerde işçilik fiyatı neden farklıdır?",
    answer: "Eşyalı evlerde mobilyaların zarar görmeden oda oda taşınması, parke altına süpürülmesi ve montaj sonrası yerine yerleştirilmesi ilave iş gücü ve mesai gerektirdiğinden cüzi bir eşya taşıma payı yansıtılır."
  },
  {
    question: "Eski parkelerin sökümü ücrete tabi midir?",
    answer: "Mevcut parkenin sökülmesi, çivilerin temizlenmesi ve çıkan atıkların çuvallanması ek bir işçilik kalemidir. Keşif sırasında belirtilerek toplam fiyata şeffaf şekilde dahil edilir."
  }
];

export default function PricingGuidePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.parkeustam.com/parke-doseme-fiyatlari#webpage",
        "name": "Parke Döşeme Fiyatları ve İşçilik Maliyetleri Rehberi",
        "url": "https://www.parkeustam.com/parke-doseme-fiyatlari",
        "description": "İstanbul genelinde laminat parke döşeme ve süpürgelik montajı işçilik maliyeti hesaplama rehberi."
      },
      {
        "@type": "FAQPage",
        "mainEntity": pricingFaqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      }
    ]
  };

  return (
    <div className="flex flex-col w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="pt-20 bg-background/80 border-b border-border/30">
        <Breadcrumb items={[
          { name: 'Fiyat Rehberi' }
        ]} />
      </div>

      <Hero
        title="2026 Güncel"
        highlight="Parke Döşeme Fiyatları"
        subtitle="ve Şeffaf İşçilik Rehberi"
        description="İstanbul genelinde laminat parke döşeme, süpürgelik montajı ve zemin tamiri işçilik maliyetlerini inceleyin. Sürpriz ek maliyet olmadan şeffaf fiyatlandırma ve yerinde ücretsiz keşif."
        imageAlt="İstanbul parke döşeme işçilik fiyatları hesaplama"
      />

      <TrustBadges />

      {/* Maliyet Faktörleri */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl space-y-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <CircleDollarSign className="w-4 h-4" />
                <span>Şeffaf Fiyat Politikası</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight">
                Parke İşçilik Maliyetini <span className="text-primary">Etkileyen 5 Temel Unsur</span>
              </h2>
              <p className="text-foreground/80 leading-relaxed text-base sm:text-lg">
                Parke döşeme maliyetleri yalnızca metrekareye bağlı değildir. Uygulama yapılacak alanın fiziksel şartları ve ek hazırlıklar işçilik süresini ve gereken malzeme türünü doğrudan belirler.
              </p>
              <p className="text-foreground/70 leading-relaxed text-sm sm:text-base">
                Müşterilerimize her zaman net ve dürüst fiyat sunabilmek adına keşif sırasında zemini titizlikle inceliyor, yapılması gereken tüm işlemleri önceden listeleyerek onayınıza sunuyoruz.
              </p>

              <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs sm:text-sm text-foreground/80 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <span>
                  <strong>Önemli Not:</strong> İnternet üzerinde piyasa gerçekleriyle uyuşmayan gerçek dışı aşırı düşük fiyat vaatlerine karşı dikkatli olunuz. Düşük fiyatlı acemi işçilikler genleşme payı bırakılmaması sebebiyle parkelerinizin kabarmasına yol açabilir.
                </span>
              </div>
            </div>

            <div className="glass p-8 sm:p-10 rounded-3xl border border-border/60 shadow-xl space-y-4">
              <h3 className="text-2xl font-bold text-foreground mb-4">Maliyeti Belirleyen Faktörler</h3>
              <div className="space-y-3 text-sm text-foreground/80">
                <div className="p-3.5 rounded-xl bg-background/60 border border-border/40">
                  <span className="font-semibold text-foreground block">1. Net Metrekare Büyüklüğü</span>
                  <p className="text-xs text-foreground/70 mt-1">
                    Geniş metrajlı daire veya ofislerde birim m² işçilik maliyeti daha avantajlı hale gelir.
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-background/60 border border-border/40">
                  <span className="font-semibold text-foreground block">2. Eşyalı Ev / Boş Ev Durumu</span>
                  <p className="text-xs text-foreground/70 mt-1">
                    Eşyaların oda içinde taşınması ve korunması ilave iş gücü ve dikkat gerektirir.
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-background/60 border border-border/40">
                  <span className="font-semibold text-foreground block">3. Eski Zemin ve Şap Hazırlığı</span>
                  <p className="text-xs text-foreground/70 mt-1">
                    Eski halıfleks veya parke sökümü, harç pürüzlerinin kazınması ve zemin tesviyesi.
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-background/60 border border-border/40">
                  <span className="font-semibold text-foreground block">4. Süpürgelik Yüksekliği ve Malzemesi</span>
                  <p className="text-xs text-foreground/70 mt-1">
                    Standart süpürgelik ile 8-10 cm lake MDF gönye kesimli lüks süpürgelik işçiliği farklıdır.
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-background/60 border border-border/40">
                  <span className="font-semibold text-foreground block">5. Kat Sayısı ve Taşıma Durumu</span>
                  <p className="text-xs text-foreground/70 mt-1">
                    Asansörsüz yüksek katlarda malzeme taşıma organizasyonu süreye etki eder.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* İlçelere Doğal İç Bağlantılar */}
          <div className="glass p-8 rounded-3xl border border-border/50 space-y-4">
            <div className="flex items-center gap-2 text-primary font-bold text-lg">
              <MapPin className="w-5 h-5 shrink-0" />
              <h3>Bölgesel Parke İşçilik Fiyatları ve Keşif</h3>
            </div>
            <p className="text-sm text-foreground/70 leading-relaxed">
              Öncelikli olarak İstanbul Anadolu Yakası ve Kocaeli ilçelerine aynı gün ücretsiz keşif servisi sunuyoruz:
            </p>
            <div className="flex flex-wrap gap-2.5 pt-2">
              {[
                { name: "Pendik", href: "/istanbul/pendik" },
                { name: "Kartal", href: "/istanbul/kartal" },
                { name: "Maltepe", href: "/istanbul/maltepe" },
                { name: "Kadıköy", href: "/istanbul/kadikoy" },
                { name: "Tuzla", href: "/istanbul/tuzla" },
                { name: "Ümraniye", href: "/istanbul/umraniye" },
                { name: "Ataşehir", href: "/istanbul/atasehir" },
                { name: "Sultanbeyli", href: "/istanbul/sultanbeyli" },
                { name: "Gebze", href: "/kocaeli/gebze" },
              ].map((loc, idx) => (
                <Link
                  key={idx}
                  href={loc.href}
                  className="px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium bg-background border border-border hover:border-primary hover:text-primary transition-all shadow-sm"
                >
                  {loc.name} Parke Fiyatları ve Ustası
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Hesaplama Modülü */}
      <PriceCalculator />

      {/* SSS */}
      <section className="py-16 bg-muted/20 border-t border-border/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-8">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-2 text-primary text-sm font-semibold">
              <HelpCircle className="w-4 h-4" />
              <span>Sıkça Sorulan Sorular</span>
            </div>
            <h2 className="text-3xl font-bold text-foreground">
              Fiyatlandırma Hakkında Merak Edilenler
            </h2>
          </div>

          <Accordion className="w-full space-y-3">
            {pricingFaqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="glass px-6 rounded-xl border border-border/50"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70 leading-relaxed pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <WhyUs />
      <Contact />
    </div>
  );
}
