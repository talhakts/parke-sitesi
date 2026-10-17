import { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Hero } from '@/components/sections/Hero';
import { TrustBadges } from '@/components/sections/TrustBadges';
import { PriceCalculator } from '@/components/sections/PriceCalculator';
import { WhyUs } from '@/components/sections/WhyUs';
import { Contact } from '@/components/sections/Contact';
import { CircleDollarSign, MapPin, HelpCircle, AlertCircle, Trash2, Layers, Calendar, ArrowRight, MessageCircle } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { pricingData, hasPricingData } from '@/data/pricing';
import { siteConfig } from '@/config/site.config';

export const metadata: Metadata = {
  title: "Parke Döşeme Fiyatları 2026 | Güncel İşçilik Rehberi",
  description: "İstanbul ve Anadolu Yakası 2026 güncel laminat parke döşeme, süpürgelik ve söküm işçilik fiyatları. Şeffaf hesaplama aracı ve ücretsiz yerinde keşif.",
  alternates: {
    canonical: "/parke-doseme-fiyatlari",
  },
  openGraph: {
    title: "Parke Döşeme Fiyatları 2026 | Güncel İşçilik Rehberi",
    description: "İstanbul genelinde 2026 laminat parke döşeme ve süpürgelik işçilik maliyeti hesaplama aracı ve şeffaf fiyat tarifesi.",
    url: "https://www.parkeustam.com/parke-doseme-fiyatlari",
    siteName: "Parke Ustam",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Parke Döşeme Fiyatları 2026 | Güncel İşçilik Rehberi",
    description: "İstanbul genelinde 2026 laminat parke döşeme ve süpürgelik işçilik maliyeti hesaplama aracı ve şeffaf fiyat tarifesi.",
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
  const isDataReady = hasPricingData();
  const lastUpdatedText = pricingData.lastUpdated || "2026 Sezonu (Yerinde Keşif ile Güncellenir)";

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

  const tableRows = [
    {
      title: "Laminat Parke Döşeme İşçiliği",
      unit: "1 m²",
      priceRange: isDataReady && pricingData.labor.laminatePerM2.min
        ? `${pricingData.labor.laminatePerM2.min} - ${pricingData.labor.laminatePerM2.max ?? pricingData.labor.laminatePerM2.min} TL`
        : "Ücretsiz Keşif ile Netleşir",
      detail: "Kilitli parke montajı, nem bariyeri ve şilte serimi dahil"
    },
    {
      title: "Süpürgelik Montajı (Lake / MDF / PVC)",
      unit: "1 Tül Metre",
      priceRange: isDataReady && pricingData.labor.skirtingPerMeter.min
        ? `${pricingData.labor.skirtingPerMeter.min} - ${pricingData.labor.skirtingPerMeter.max ?? pricingData.labor.skirtingPerMeter.min} TL`
        : "Ücretsiz Keşif ile Netleşir",
      detail: "45° gönye köşe kesimi ve akrilik mastik dolgusu dahil"
    },
    {
      title: "Eski Parke Sökümü ve Çuvallama",
      unit: "1 m²",
      priceRange: isDataReady && pricingData.labor.removalPerM2.min
        ? `${pricingData.labor.removalPerM2.min} - ${pricingData.labor.removalPerM2.max ?? pricingData.labor.removalPerM2.min} TL`
        : "Ücretsiz Keşif ile Netleşir",
      detail: "Mevcut parkelerin sökülmesi, çivi/harç kazıma ve moloz çuvallama"
    },
    {
      title: "Zemin Tesviyesi & Lokal Tamir",
      unit: "1 m²",
      priceRange: isDataReady && pricingData.labor.levelingPerM2.min
        ? `${pricingData.labor.levelingPerM2.min} - ${pricingData.labor.levelingPerM2.max ?? pricingData.labor.levelingPerM2.min} TL`
        : "Zemin Durumuna Göre Belirlenir",
      detail: "Mastar altı kot farklarının self-leveling harç ile düzeltilmesi"
    }
  ];

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
        description="İstanbul Anadolu Yakası, Gebze ve tüm İstanbul genelinde laminat parke döşeme, süpürgelik montajı ve zemin hazırlığı maliyetleri. Sürpriz ek masraf olmadan şeffaf teklif ve ücretsiz yerinde keşif."
        imageAlt="İstanbul parke döşeme işçilik fiyatları hesaplama"
      />

      <TrustBadges />

      {/* Fiyat Listesi & Tablo Bölümü */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-border/50 pb-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-3">
                <CircleDollarSign className="w-3.5 h-3.5" />
                <span>Şeffaf İşçilik Tarifesi</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                2026 Parke Döşeme ve Montaj <span className="text-primary">Fiyat Tablosu</span>
              </h2>
            </div>
            <div className="flex items-center gap-2 text-xs text-foreground/60 bg-muted/50 px-3.5 py-2 rounded-xl">
              <Calendar className="w-3.5 h-3.5 text-primary" />
              <span>Son Güncelleme: <strong>{lastUpdatedText}</strong></span>
            </div>
          </div>

          {/* Fiyat Tablosu */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse glass rounded-3xl overflow-hidden shadow-lg border border-border/60">
              <thead>
                <tr className="bg-primary/10 border-b border-border/50 text-foreground text-xs sm:text-sm uppercase tracking-wider font-semibold">
                  <th className="p-4 sm:p-5">Hizmet / İşlem Kalemi</th>
                  <th className="p-4 sm:p-5">Birim</th>
                  <th className="p-4 sm:p-5">Birim İşçilik Fiyatı</th>
                  <th className="p-4 sm:p-5 hidden sm:table-cell">Açıklama & Kapsam</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/40 text-xs sm:text-sm text-foreground/80">
                {tableRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-muted/30 transition-colors">
                    <td className="p-4 sm:p-5 font-bold text-foreground">{row.title}</td>
                    <td className="p-4 sm:p-5 font-mono text-primary font-semibold">{row.unit}</td>
                    <td className="p-4 sm:p-5">
                      <span className={`inline-block px-3 py-1.5 rounded-xl font-semibold ${isDataReady ? 'bg-primary/10 text-primary' : 'bg-muted text-foreground/75'}`}>
                        {row.priceRange}
                      </span>
                    </td>
                    <td className="p-4 sm:p-5 text-foreground/70 hidden sm:table-cell">{row.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Örnek Hesaplar (50 m², 80 m², 100 m²) */}
          <div className="space-y-6 pt-4">
            <div>
              <h3 className="text-2xl font-bold text-foreground">
                Örnek Daire <span className="text-primary">Maliyet Senaryoları</span>
              </h3>
              <p className="text-sm text-foreground/70 mt-1">
                Boş daire standart laminat parke döşeme ve süpürgelik montajı için yaklaşık örnek hesaplamalar:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pricingData.sampleFlats.map((flat, idx) => {
                const approxSkirting = Math.round(flat.m2 * 0.9);
                return (
                  <div key={idx} className="glass p-6 rounded-3xl border border-border/60 hover:border-primary/40 transition-all space-y-4 flex flex-col justify-between shadow-sm">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold">
                          {flat.m2} m² Alan
                        </span>
                        <span className="text-xs text-foreground/50">~{approxSkirting} m süpürgelik</span>
                      </div>
                      <h4 className="text-lg font-bold text-foreground">{flat.title}</h4>
                      <p className="text-xs text-foreground/70 leading-relaxed">{flat.description}</p>
                    </div>

                    <div className="pt-4 border-t border-border/40 space-y-3">
                      {isDataReady && pricingData.labor.laminatePerM2.min ? (
                        <div>
                          <span className="text-xs text-foreground/60 block">Tahmini İşçilik:</span>
                          <span className="text-xl font-extrabold text-foreground">
                            {((flat.m2 * pricingData.labor.laminatePerM2.min) + (approxSkirting * (pricingData.labor.skirtingPerMeter.min ?? 0))).toLocaleString('tr-TR')} TL
                          </span>
                        </div>
                      ) : (
                        <div className="space-y-1">
                          <span className="text-xs font-semibold text-primary block">Ücretsiz Keşif Teklifi</span>
                          <span className="text-[11px] text-foreground/60 block">Lazer ölçüm sonrası net fiyat garantisi</span>
                        </div>
                      )}

                      <a
                        href={`https://wa.me/${siteConfig.whatsappRaw}?text=${encodeURIComponent(
                          `Merhaba Parke Ustam, ${flat.title} için yerinde ücretsiz keşif ve net işçilik teklifi almak istiyorum.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-primary text-primary-foreground text-xs font-semibold hover:bg-primary/90 transition-colors shadow-sm"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Keşif & Fiyat İste</span>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* Maliyet Faktörleri */}
      <section className="py-16 bg-muted/20 border-t border-border/40">
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
                    Eski parke sökümü, harç pürüzlerinin kazınması ve zemin tesviyesi.
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

          {/* Section: İşçilik vs. Malzeme Ayrımı */}
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
                    <span><strong>Parke Paketleri:</strong> Net alan üzerine fire payı eklenerek hesaplanan paket miktarı.</span>
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

          {/* Dedicated Section: Eski Parke Sökümü ve Zemin Hazırlığı (Cross-linked with /hizmetler/eski-parke-sokumu) */}
          <div id="eski-parke-sokumu" className="scroll-mt-24 glass p-8 sm:p-10 rounded-3xl border border-primary/30 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3 text-primary">
                <Trash2 className="w-6 h-6 shrink-0" />
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground">Eski Parke Sökümü ve Zemin Hazırlığı İşçiliği</h3>
              </div>
              <Link
                href="/hizmetler/eski-parke-sokumu"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline underline-offset-4"
              >
                <span>Söküm Hizmet Detayları</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
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
                  Çıkan atıklar düzenli şekilde çuvallanır. Şapta kot farkı varsa lokal tamir harcı veya tesviye şapı uygulanır.
                </p>
              </div>
            </div>
            <div className="p-4 rounded-2xl bg-background/60 border border-border/40 text-xs sm:text-sm text-foreground/70 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <span>* Söküm işçilik fiyatı, mevcut zeminin kilitli laminat mı yoksa ziftli/yapışkanlı masif parke mi olduğuna ve moloz nakliye ihtiyacına göre yerinde keşifte belirlenir.</span>
              <Link href="/hizmetler/eski-parke-sokumu" className="text-primary font-semibold text-xs whitespace-nowrap hover:underline">
                Ayrıntılı Rehber →
              </Link>
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
