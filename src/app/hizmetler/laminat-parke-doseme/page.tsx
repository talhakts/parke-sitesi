import { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Hero } from '@/components/sections/Hero';
import { TrustBadges } from '@/components/sections/TrustBadges';
import { PriceCalculator } from '@/components/sections/PriceCalculator';
import { WhyUs } from '@/components/sections/WhyUs';
import { Gallery } from '@/components/sections/Gallery';
import { Contact } from '@/components/sections/Contact';
import { CheckCircle2, Layers, MapPin, HelpCircle } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Laminat Parke Döşeme Ustası | İstanbul Parke Ustam",
  description: "İstanbul Anadolu Yakası ve genelinde 8mm, 10mm ve 12mm derzli/derzsiz laminat parke döşeme. 30 yılı aşkın tecrübe, 1 günde montaj ve garantili usta işçiliği.",
  keywords: [
    "laminat parke döşeme",
    "laminat parke ustası",
    "istanbul laminat parke",
    "pendik laminat parke ustası",
    "derzli laminat parke",
    "parke montajı"
  ],
  alternates: {
    canonical: "/hizmetler/laminat-parke-doseme",
  },
  openGraph: {
    title: "Laminat Parke Döşeme Ustası | İstanbul Parke Ustam",
    description: "İstanbul genelinde garantili laminat parke döşeme, süpürgelik montajı ve zemin çözümleri.",
    url: "https://www.parkeustam.com/hizmetler/laminat-parke-doseme",
    siteName: "Parke Ustam",
    locale: "tr_TR",
    type: "website",
  },
};

const serviceFaqs = [
  {
    question: "Laminat parke montajı ne kadar sürer?",
    answer: "Ortalama 80-120 m² bir dairenin laminat parke ve süpürgelik montajı, profesyonel 2 kişilik usta ekibimizle 1 iş günü içinde tamamlanarak temiz teslim edilir."
  },
  {
    question: "Derzli parke mi yoksa derzsiz parke mi tercih edilmeli?",
    answer: "Derzli (V kanallı) laminat parkeler ahşap plaka görünümünü güçlendirir ve zamanla oluşabilecek mikronluk genleşme boşluklarını gizler. Derzsiz modeller ise kesintisiz, pürüzsüz bir zemin hissi arayanlar için uygundur. Her iki modelde de doğru usta işçiliği esastır."
  },
  {
    question: "Eski halıfleks veya parke üzerine laminat parke döşenir mi?",
    answer: "Eski halıfleks üzerine parke döşenmesi hijyen ve esneme sorunları nedeniyle kesinlikle önerilmez; sökülmelidir. Ancak zemininde eğrilik ve ses olmayan sağlam düz seramik/fayans üzerine uygun şilte serilerek doğrudan laminat parke döşenebilir."
  },
  {
    question: "Duvar diplerinde neden boşluk (genleşme payı) bırakılır?",
    answer: "Laminat parke ortamın nem ve sıcaklık değişimlerine göre mikron düzeyinde genişler ve daralır. Duvar diplerinde 10-15 mm genleşme (dilatasyon) boşluğu bırakılmazsa parke duvara dayanıp kabarır. Bu boşluk süpürgelik ile tamamen örtülür."
  }
];

export default function LaminateFlooringPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.parkeustam.com/hizmetler/laminat-parke-doseme#service",
        "name": "Laminat Parke Döşeme Hizmeti",
        "serviceType": "Laminat Parke Döşeme, Kilitli Zemin Montajı",
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
          "Ataşehir",
          "Gebze"
        ],
        "description": "İstanbul genelinde 8mm, 10mm ve 12mm laminat parke döşeme, nem bariyerli şilte serimi ve süpürgelik montajı hizmeti."
      },
      {
        "@type": "FAQPage",
        "mainEntity": serviceFaqs.map(faq => ({
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
          { name: 'Laminat Parke Döşeme' }
        ]} />
      </div>

      <Hero
        title="İstanbul"
        highlight="Laminat Parke Döşeme"
        subtitle="ve Uzman Usta İşçiliği"
        description="30 yılı aşkın mesleki tecrübemizle İstanbul genelinde konut, villa ve iş yerleriniz için 1. sınıf laminat parke montajı sunuyoruz. Tozsuz kesim, doğru dilatasyon payı ve 1 günde teslimat garantisi."
        imageAlt="İstanbul profesyonel laminat parke döşeme ustası"
      />

      <TrustBadges />

      {/* Detaylı Bilgilendirme ve Uygulama Standartları */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl space-y-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <Layers className="w-4 h-4" />
                <span>Teknik Uygulama Kriterleri</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight">
                Uzun Ömürlü Laminat Parke İçin <span className="text-primary">Doğru İşçilik Şart</span>
              </h2>
              <p className="text-foreground/80 leading-relaxed text-base sm:text-lg">
                Laminat parke, dayanıklılığı, zengin renk seçenekleri ve kolay temizlenebilir yapısıyla zeminlerin vazgeçilmezidir. Ancak kaliteli bir parke bile ehil ellerde döşenmediğinde kabarma, gıcırdama ve kilit kırılması gibi sorunlar yaratabilir.
              </p>
              <p className="text-foreground/70 leading-relaxed text-sm sm:text-base">
                Parke Ustam olarak her montajda şap nemini kontrol ediyor, 3-5 mm darbe ve nem bariyerli kapalı hücreli şilteler kullanıyor ve tüm duvar diplerinde 10-15 mm genleşme payı bırakarak parkenizin ömrünü onlarca yıl güvenceye alıyoruz.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                {[
                  "AC4 ve AC5 ticari/konut dayanıklılık sınıfları",
                  "3-5 mm ses ve nem bariyerli şilte serimi",
                  "Duvar diplerinde garantili 10-15 mm dilatasyon payı",
                  "Köşe gönyeleri 45° kesilmiş estetik süpürgelikler"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-sm font-medium text-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass p-8 sm:p-10 rounded-3xl border border-border/60 shadow-xl space-y-6">
              <h3 className="text-2xl font-bold text-foreground">Laminat Parke Kalınlık ve Sınıf Rehberi</h3>
              <div className="space-y-4 text-sm text-foreground/80">
                <div className="p-4 rounded-2xl bg-background/70 border border-border/40 space-y-1.5">
                  <span className="font-bold text-primary block">8 mm AC3 / AC4 Laminat Parke</span>
                  <p className="text-xs text-foreground/70">
                    Standart apartman daireleri, yatak odaları ve orta yoğunluktaki ev zeminleri için bütçe dostu, sağlam ve en sık tercih edilen seçenektir.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-background/70 border border-border/40 space-y-1.5">
                  <span className="font-bold text-primary block">10 mm AC4 Derzli Laminat Parke</span>
                  <p className="text-xs text-foreground/70">
                    Geniş salonlar, kalabalık aileler ve yerden ısıtmalı daireler için yüksek tok ses ve ahşap hissi sunan lüks sınıf.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-background/70 border border-border/40 space-y-1.5">
                  <span className="font-bold text-primary block">12 mm AC5 Yoğun Trafik Parkesi</span>
                  <p className="text-xs text-foreground/70">
                    Ofisler, mağazalar, klinik ve villalar için aşınmaya, darbeye ve yoğun insan trafiğine azami dayanım sağlayan en üst seviye zemin çözümü.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* İlçelere Doğal İç Bağlantılar */}
          <div className="glass p-8 rounded-3xl border border-border/50 space-y-4">
            <div className="flex items-center gap-2 text-primary font-bold text-lg">
              <MapPin className="w-5 h-5 shrink-0" />
              <h3>Laminat Parke Döşeme Hizmeti Verdiğimiz Başlıca İlçeler</h3>
            </div>
            <p className="text-sm text-foreground/70 leading-relaxed">
              İstanbul genelinde mobil keşif ve usta ekiplerimizle aynı gün adresinize geliyoruz. Özellikle Anadolu Yakası ilçelerimizdeki projeleriniz için doğrudan ilçe sayfalarımızı inceleyebilirsiniz:
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
                { name: "Sancaktepe", href: "/istanbul/sancaktepe" },
                { name: "Sultanbeyli", href: "/istanbul/sultanbeyli" },
                { name: "Gebze", href: "/kocaeli/gebze" },
              ].map((loc, idx) => (
                <Link
                  key={idx}
                  href={loc.href}
                  className="px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium bg-background border border-border hover:border-primary hover:text-primary transition-all shadow-sm"
                >
                  {loc.name} Laminat Parke Ustası
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
              Laminat Parke Döşeme Hakkında Merak Edilenler
            </h2>
          </div>

          <Accordion className="w-full space-y-3">
            {serviceFaqs.map((faq, index) => (
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
