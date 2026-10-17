import { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Hero } from '@/components/sections/Hero';
import { TrustBadges } from '@/components/sections/TrustBadges';
import { PriceCalculator } from '@/components/sections/PriceCalculator';
import { WhyUs } from '@/components/sections/WhyUs';
import { Gallery } from '@/components/sections/Gallery';
import { Contact } from '@/components/sections/Contact';
import { Wrench, CheckCircle2, ShieldAlert, MapPin, HelpCircle } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Parke Tamiri ve Onarımı | İstanbul Parke Ustam",
  description: "Kabaran, şişen, gıcırdayan ve su hasarı görmüş laminat ve lamine parkelerin tamiri. Komple değiştirmeden lokal panel değişimi ve dilatasyon boşluğu açma.",
  keywords: [
    "parke tamiri",
    "kabaran parke tamiri",
    "parke tamiri istanbul",
    "pendik parke tamiri",
    "su almış parke onarımı",
    "gıcırdayan parke tamiri",
    "parke değişimi"
  ],
  alternates: {
    canonical: "/hizmetler/parke-tamiri",
  },
  openGraph: {
    title: "Parke Tamiri ve Onarımı | İstanbul Parke Ustam",
    description: "Kabaran ve hasar gören parkelerinizi komple yenilemeden tasarruflu lokal tamir çözümleri.",
    url: "https://www.parkeustam.com/hizmetler/parke-tamiri",
    siteName: "Parke Ustam",
    locale: "tr_TR",
    type: "website",
  },
};

const repairFaqs = [
  {
    question: "Kabaran parke için komple bütün evi değiştirmek gerekir mi?",
    answer: "Hayır. Parke kabarmalarının %90'ı montaj sırasında duvar kenarlarında genleşme payı (10-15 mm) bırakılmamasından kaynaklanır. Süpürgelikler sökülüp duvara dayanan kısımlar profesyonel testereyle traşlanarak genleşme payı açıldığında parke kendiliğinden yerine oturur."
  },
  {
    question: "Su alan laminat parke kuruyunca düzelir mi?",
    answer: "Laminat parkenin HDF çekirdeği suyu emdiğinde şişer ve kurusa dahi eski orijinal formuna dönemez. Bu durumlarda sadece su hasarı almış paneller sökülerek aynı model ve renkteki yedek parkelerle lokal olarak değiştirilir."
  },
  {
    question: "Gıcırdayan parke tamir edilebilir mi?",
    answer: "Evet. Gıcırdama genellikle alt zemindeki kot farkından, kalitesiz şiltedir veya kilit sürtünmelerinden meydana gelir. Problemli bölge sökülerek zemin tesviyesi düzeltilir ve uygun yalıtım malzemesiyle ses kesilir."
  },
  {
    question: "Tamir için keşif hizmetiniz var mı?",
    answer: "Evet, İstanbul Anadolu Yakası ve Kocaeli bölgelerinde hasar tespit keşfi yapıyoruz. Hasarın boyutuna göre yerinde en uygun maliyetli onarım yöntemini belirliyoruz."
  }
];

export default function ParquetRepairPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.parkeustam.com/hizmetler/parke-tamiri#service",
        "name": "Parke Tamiri ve Bakımı Hizmeti",
        "serviceType": "Laminat Parke Tamiri, Kabarma Düzeltme, Su Hasarı Onarımı",
        "provider": {
          "@type": "HomeAndConstructionBusiness",
          "name": "Parke Ustam",
          "url": "https://www.parkeustam.com",
          "telephone": "+905355067130"
        },
        "areaServed": [
          "İstanbul",
          "İstanbul Anadolu Yakası",
          "Pendik",
          "Kartal",
          "Maltepe",
          "Kadıköy",
          "Tuzla",
          "Ümraniye",
          "Gebze"
        ],
        "description": "Kabaran, su hasarlı, kırık kilitli veya gıcırdayan parkelerin lokal tamir ve onarım hizmeti."
      },
      {
        "@type": "FAQPage",
        "mainEntity": repairFaqs.map(faq => ({
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
          { name: 'Hizmetlerimiz', href: '/#hizmetler' },
          { name: 'Parke Tamiri ve Onarımı' }
        ]} />
      </div>

      <Hero
        title="İstanbul"
        highlight="Parke Tamiri ve Onarımı"
        subtitle="Hızlı Mobil Servis"
        description="Kabaran, şişen, su hasarı gören veya kapı altı sürtmesi yapan zeminlerinizi komple değiştirmeden uygun maliyetle tamir ediyoruz. 30 yıllık tecrübeyle garantili lokal onarım."
        imageAlt="İstanbul parke tamiri ve kabaran laminat onarımı ustası"
      />

      <TrustBadges />

      {/* Tamir Nedenleri ve Yöntemleri */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl space-y-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <Wrench className="w-4 h-4" />
                <span>Ekonomik Çözümler</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight">
                Komple Değiştirmeye Gerek Kalmadan <span className="text-primary">Lokal Parke Tamiri</span>
              </h2>
              <p className="text-foreground/80 leading-relaxed text-base sm:text-lg">
                Zemininizde meydana gelen kabarma veya kırılmalar her zaman tüm parkeleri söküp yenilemenizi gerektirmez. Doğru tespit ve titiz usta müdahalesiyle hasarlı bölge onarılarak bütçeniz korunur.
              </p>
              <p className="text-foreground/70 leading-relaxed text-sm sm:text-base">
                Özellikle kalorifer peteği sızıntısı, klima su damlaması veya genleşme payı bırakılmaması sebebiyle dağın tepesi gibi yükselen zeminleri aynı gün içinde düzeltiyor, eksik süpürgelikleri tamamlıyoruz.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                {[
                  "Duvar diplerinde sıkışan parkelerin dilatasyon traşı",
                  "Su hasarlı panellerin hasarsız lokal değişimi",
                  "Gıcırdayan ve esneyen zeminlerin alt takviyesi",
                  "Kapı altı sürtme ve geçiş profili montajı"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-sm font-medium text-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass p-8 sm:p-10 rounded-3xl border border-border/60 shadow-xl space-y-6">
              <div className="flex items-center gap-3 text-amber-500">
                <ShieldAlert className="w-6 h-6" />
                <h3 className="text-2xl font-bold text-foreground">En Sık Karşılaşılan Parke Arızaları</h3>
              </div>
              <div className="space-y-4 text-sm text-foreground/80">
                <div className="p-4 rounded-2xl bg-background/70 border border-border/40 space-y-1.5">
                  <span className="font-bold text-foreground block">1. Genleşme Kaynaklı Parke Şişmesi (Tümsek Oluşumu)</span>
                  <p className="text-xs text-foreground/70">
                    Odanın ortasında parkenin havaya kalkmasıdır. Parke duvara değdiği için sıkışır. Süpürgelik kenarlarından pay kesilerek 1 saatte kalıcı olarak düzeltilir.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-background/70 border border-border/40 space-y-1.5">
                  <span className="font-bold text-foreground block">2. Su Hasarı ve Kenar Kabarmaları</span>
                  <p className="text-xs text-foreground/70">
                    Sıvı teması nedeniyle şişen kenarlar eski haline gelmez. Hasarlı paneller sökülüp yerine aynı kilit sistemine sahip yeni paneller takılır.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-background/70 border border-border/40 space-y-1.5">
                  <span className="font-bold text-foreground block">3. Kırık Kilitler ve Açılan Derzler</span>
                  <p className="text-xs text-foreground/70">
                    Ağır eşya veya zemin çukurluğu nedeniyle kilitleri birbirinden ayrılan parçalar özel kilit tutucular veya lokal parça değişimiyle onarılır.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* İlçelere Doğal İç Bağlantılar */}
          <div className="glass p-8 rounded-3xl border border-border/50 space-y-4">
            <div className="flex items-center gap-2 text-primary font-bold text-lg">
              <MapPin className="w-5 h-5 shrink-0" />
              <h3>Parke Tamiri Servisi Sunduğumuz Bölgeler</h3>
            </div>
            <p className="text-sm text-foreground/70 leading-relaxed">
              İstanbul genelinde acil parke kabarması ve su hasarı onarımı için aynı gün servis sağlıyoruz:
            </p>
            <div className="flex flex-wrap gap-2.5 pt-2">
              {[
                { name: "Pendik", href: "/istanbul/pendik" },
                { name: "Kartal", href: "/istanbul/kartal" },
                { name: "Maltepe", href: "/istanbul/maltepe" },
                { name: "Tuzla", href: "/istanbul/tuzla" },
                { name: "Kadıköy", href: "/istanbul/kadikoy" },
                { name: "Ümraniye", href: "/istanbul/umraniye" },
                { name: "Ataşehir", href: "/istanbul/atasehir" },
                { name: "Gebze", href: "/kocaeli/gebze" },
              ].map((loc, idx) => (
                <Link
                  key={idx}
                  href={loc.href}
                  className="px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium bg-background border border-border hover:border-primary hover:text-primary transition-all shadow-sm"
                >
                  {loc.name} Parke Tamiri Ustası
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SSS Bölümü */}
      <section className="py-16 bg-muted/20 border-t border-border/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-8">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-2 text-primary text-sm font-semibold">
              <HelpCircle className="w-4 h-4" />
              <span>Sıkça Sorulan Sorular</span>
            </div>
            <h2 className="text-3xl font-bold text-foreground">
              Parke Tamiri Hakkında Merak Edilenler
            </h2>
          </div>

          <Accordion className="w-full space-y-3">
            {repairFaqs.map((faq, index) => (
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

      <PriceCalculator />
      <WhyUs />
      <Gallery />
      <Contact />
    </div>
  );
}
