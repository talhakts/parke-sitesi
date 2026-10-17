import { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Hero } from '@/components/sections/Hero';
import { TrustBadges } from '@/components/sections/TrustBadges';
import { PriceCalculator } from '@/components/sections/PriceCalculator';
import { WhyUs } from '@/components/sections/WhyUs';
import { Contact } from '@/components/sections/Contact';
import { CircleDollarSign, MapPin, HelpCircle, AlertCircle, Trash2, Layers } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Parke Döşeme Fiyatları 2026 | İşçilik ve Metrekare Maliyetleri",
  description: "İstanbul ve Anadolu Yakası'nda 2026 güncel laminat parke döşeme, süpürgelik ve eski zemin söküm işçilik faktörleri. Şeffaf maliyet rehberi ve ücretsiz keşif.",
  keywords: [
    "parke döşeme fiyatları",
    "parke işçilik fiyatları",
    "laminat parke m2 fiyatı",
    "pendik parke döşeme fiyatları",
    "parke montaj fiyatı",
    "süpürgelik montaj fiyatı",
    "eski parke sökümü fiyatı"
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
    answer: "Sitemizdeki fiyat hesaplama aracı ve temel fiyat bilgilendirmelerimiz profesyonel 'işçilik' bedellerini kapsar. Müşterilerimiz parkeyi diledikleri yapı market veya markadan kendileri temin edebilir; ya da talep edilirse kaliteli anlaşmalı üreticilerimizden malzeme dahil anahtar teslim teklif sunuyoruz."
  },
  {
    question: "Net fiyat ne zaman kesinleşir?",
    answer: "En net ve kesin fiyat, ustanızın mekanınıza gelerek lazer metre ile yapacağı ücretsiz keşif ve zemin düzlük (şap/mastar) incelemesinin hemen ardından yazılı olarak verilir. Keşif sonrası anlaşılan şartlar dışında asla sürpriz ek masraf çıkarılmaz."
  },
  {
    question: "Eşyalı evlerde işçilik fiyatı neden farklıdır?",
    answer: "Eşyalı evlerde mobilyaların zarar görmeden oda oda taşınması, zemin altının süpürülüp temizlenmesi ve montaj sonrası mobilyaların tekrar yerleştirilmesi ilave iş gücü ve mesai gerektirdiğinden cüzi bir eşya taşıma payı yansıtılır."
  },
  {
    question: "Eski parkelerin sökümü ücrete tabi midir?",
    answer: "Evet. Mevcut eski laminat veya yapışkanlı ahşap parkelerin sökülmesi, süpürgeliklerin çıkarılması, çivi ve harç artıklarının kazınması ile molozların çuvallanması ayrı bir işçilik kalemidir. Keşif sırasında alan incelenerek fiyata şeffaf biçimde eklenir."
  },
  {
    question: "Metrekare büyüklüğü arttıkça işçilik fiyatı nasıl değişir?",
    answer: "Toplam döşeme alanı büyüdükçe (örneğin 100 m² ve üzeri açık veya geniş planlı dairelerde) birim metrekare işçilik bedeli daha ekonomik hale gelir. Buna karşılık çok küçük, kolonlu ve fazla girintili odalarda kesim firesi ve köşe işçiliği arttığı için birim maliyet farklılaşabilir."
  },
  {
    question: "Fiyat teklifine süpürgelik montajı dahil midir?",
    answer: "Süpürgelik montajı tül metre (metre uzunluğu) üzerinden hesaplanır. Standart plastik süpürgelik ile 8-10 cm beyaz lake MDF gönye kesimli lüks süpürgeliklerin montaj işçiliği farklıdır. Keşif sırasında toplam tül metre ölçülerek teklife kalem olarak yansıtılır."
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
        description="İstanbul genelinde laminat parke döşeme, süpürgelik montajı ve zemin hazırlığı işçilik faktörlerini inceleyin. Sürpriz ek maliyet olmadan şeffaf fiyatlandırma ve yerinde ücretsiz keşif."
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
                  <strong>Önemli Bilgilendirme:</strong> İnternet üzerinde piyasa gerçekleriyle uyuşmayan gerçek dışı aşırı düşük fiyat vaatlerine karşı dikkatli olunuz. Yetersiz genleşme payı bırakılan veya mastarsız şap üzerine yapılan acemi montajlar, birkaç ay sonra parkelerin kabarmasına ve yüksek tamir masraflarına yol açar.
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

          {/* Section: İşçilik vs. Malzeme Ayrımı (Priority 6) */}
          <div className="glass p-8 sm:p-10 rounded-3xl border border-border/60 space-y-6">
            <div className="flex items-center gap-3 text-primary">
              <Layers className="w-6 h-6" />
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground">İşçilik vs. Malzeme: Fiyatlandırma Nasıl Yapılır?</h3>
            </div>
            <p className="text-foreground/80 leading-relaxed text-sm sm:text-base">
              Zemin yenileme projelerinde bütçenizi doğru yönetebilmeniz için malzeme ve işçilik kalemlerinin ayrımını bilmeniz önemlidir:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 rounded-2xl bg-background/70 border border-border/50 space-y-3">
                <span className="font-bold text-primary text-lg block">1. Salt İşçilik Kalemleri</span>
                <ul className="text-xs sm:text-sm text-foreground/80 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                    <span><strong>Laminat Montajı:</strong> Metrekare bazında zemin kilitli döşeme işçiliği.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                    <span><strong>Şilte Serimi:</strong> Nem bariyeri ve akustik izolasyonun döşenmesi.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                    <span><strong>Süpürgelik Montajı:</strong> Duvar çevresi tül metre ölçümü ve 45° gönye kesimi.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                    <span><strong>Kapı Altı Uyarlamaları:</strong> Yükselen zemin kotuna göre kapı altı traşlama.</span>
                  </li>
                </ul>
              </div>

              <div className="p-5 rounded-2xl bg-background/70 border border-border/50 space-y-3">
                <span className="font-bold text-primary text-lg block">2. Malzeme Kalemleri</span>
                <ul className="text-xs sm:text-sm text-foreground/80 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                    <span><strong>Parke Paketleri:</strong> Net alan üzerine %5-10 fire payı eklenerek hesaplanan paket miktarı.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                    <span><strong>Zemin Şiltesi:</strong> 2-3 mm kapalı hücreli veya yerden ısıtma delikli şilte rulosu.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                    <span><strong>Süpürgelik ve Profiller:</strong> Boy bazında lake MDF profiller ve eşik geçiş çıtaları.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                    <span><strong>Sarf Malzemeler:</strong> Montaj yapıştırıcısı, çivi ve akrilik mastik dolguları.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Dedicated Section: Eski Parke Sökümü ve Zemin Hazırlığı (Priority 2 & 6 Anchor Target) */}
          <div id="eski-parke-sokumu" className="scroll-mt-24 glass p-8 sm:p-10 rounded-3xl border border-primary/30 space-y-6">
            <div className="flex items-center gap-3 text-primary">
              <Trash2 className="w-6 h-6" />
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground">Eski Parke Sökümü ve Zemin Hazırlığı İşçiliği</h3>
            </div>
            <p className="text-foreground/80 leading-relaxed text-sm sm:text-base">
              Yeni parkenizin uzun ömürlü olması, altındaki zeminin düzgünlüğüne ve temizliğine bağlıdır. Mevcut eski zeminlerin söküm ve hazırlık süreci şu aşamalardan oluşur:
            </p>
            <div className="grid md:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-background/60 border border-border/40 space-y-2">
                <span className="font-semibold text-foreground text-sm block">1. Söküm ve Ayrıştırma</span>
                <p className="text-xs text-foreground/70 leading-relaxed">
                  Eski laminat veya yapışkanlı parkeler duvara ve kapı kasalarına zarar vermeden sökülür, eski süpürgelikler çıkarılır.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-background/60 border border-border/40 space-y-2">
                <span className="font-semibold text-foreground text-sm block">2. Çivi, Harç ve Toz Temizliği</span>
                <p className="text-xs text-foreground/70 leading-relaxed">
                  Beton şap üzerindeki harç tümsekleri kazınır, eski çiviler sökülür ve zemin süpürülerek tozdan arındırılır.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-background/60 border border-border/40 space-y-2">
                <span className="font-semibold text-foreground text-sm block">3. Moloz Çuvallama ve Zemin Düzeltme</span>
                <p className="text-xs text-foreground/70 leading-relaxed">
                  Çıkan atıklar düzenli şekilde çuvallanır. Şapta 2 mm üzerinde kot farkı varsa lokal tamir harcı veya tesviye uygulanır.
                </p>
              </div>
            </div>
            <div className="p-4 rounded-2xl bg-background/60 border border-border/40 text-xs sm:text-sm text-foreground/70">
              * Söküm işçilik fiyatı, mevcut zeminin kilitli laminat mı yoksa ziftli/yapışkanlı masif parke mi olduğuna ve moloz nakliye ihtiyacına göre yerinde keşifte belirlenir.
            </div>
          </div>

          {/* İlçelere Doğal İç Bağlantılar */}
          <div className="glass p-8 rounded-3xl border border-border/50 space-y-4">
            <div className="flex items-center gap-2 text-primary font-bold text-lg">
              <MapPin className="w-5 h-5 shrink-0" />
              <h3>Bölgesel Parke İşçilik Fiyatları ve Keşif</h3>
            </div>
            <p className="text-sm text-foreground/70 leading-relaxed">
              Öncelikli olarak İstanbul Anadolu Yakası ve Kocaeli ilçelerine yerinde ücretsiz keşif desteği sunuyoruz:
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

          <Accordion defaultValue={["faq-0"]} className="w-full space-y-3">
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
