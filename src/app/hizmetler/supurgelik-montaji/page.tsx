import { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Hero } from '@/components/sections/Hero';
import { TrustBadges } from '@/components/sections/TrustBadges';
import { PriceCalculator } from '@/components/sections/PriceCalculator';
import { WhyUs } from '@/components/sections/WhyUs';
import { Gallery } from '@/components/sections/Gallery';
import { Contact } from '@/components/sections/Contact';
import { CheckCircle2, Scissors, MapPin, HelpCircle } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Süpürgelik Montajı ve Değişimi | İstanbul Parke Ustam",
  description: "Lake, ahşap ve MDF süpürgelik montajı. 6 cm, 8 cm, 10 cm ve 12 cm süpürgeliklerde profesyonel 45° gönye köşe kesimi ve hatasız işçilik. Ücretsiz keşif için arayın.",
  keywords: [
    "süpürgelik montajı",
    "süpürgelik ustası",
    "lake süpürgelik",
    "pendik süpürgelik montajı",
    "pendik süpürgelik",
    "mdf süpürgelik montajı",
    "süpürgelik değişimi"
  ],
  alternates: {
    canonical: "/hizmetler/supurgelik-montaji",
  },
  openGraph: {
    title: "Süpürgelik Montajı ve Değişimi | İstanbul Parke Ustam",
    description: "45 derecelik hassas gönye kesimleriyle kusursuz lake ve MDF süpürgelik montajı hizmeti.",
    url: "https://www.parkeustam.com/hizmetler/supurgelik-montaji",
    siteName: "Parke Ustam",
    locale: "tr_TR",
    type: "website",
  },
};

const skirtingFaqs = [
  {
    question: "Süpürgelik montajında neden 45 derece gönye kesim önemlidir?",
    answer: "İç ve dış köşe birleşimlerinde düz bindirme yapıldığında çirkin boşluklar, kademeli çıkıntılar ve kesik hatlar oluşur. Profesyonel açılı gönye testeresiyle yapılan 45 derecelik açılı kesimler iki parçanın sıfıra sıfır kilitlenmesini sağlayarak mobilya kalitesinde şık bir görünüm sunar."
  },
  {
    question: "Lake süpürgelik mi yoksa PVC süpürgelik mi önerirsiniz?",
    answer: "Lake ve yüksek kaliteli beyaz MDF süpürgelikler (özellikle 8 cm ve 10 cm) duvar ile zemin arasında çok daha modern, tok ve elit bir mimari çizgi oluşturur. PVC süpürgelikler ise doğrudan su alan balkon, çamaşır odası veya nemli bodrum katlarında pratik bir alternatiftir."
  },
  {
    question: "Mevcut parkeyi değiştirmeden sadece süpürgelikleri yenileyebilir misiniz?",
    answer: "Evet, sadece süpürgelik yenileme ve montajı hizmeti veriyoruz. Eski, sararmış, dar veya yıpranmış süpürgeliklerinizi söküp yerine 8 cm veya 10 cm modern beyaz lake süpürgelikler monte edebiliyoruz."
  },
  {
    question: "Süpürgeliklerin arkasından kablo geçirilebilir mi?",
    answer: "Kullandığımız MDF ve PVC süpürgelik modellerinin birçoğunda kablo kanalı boşluğu mevcuttur. TV, internet veya elektrik kablolarını duvar kırmadan süpürgelik arkasına gizleyerek estetik ve düzenli bir görünüm elde ediyoruz."
  },
  {
    question: "Süpürgelik montajında yapıştırma mı yoksa çivileme mi daha sağlıklıdır?",
    answer: "Modern uygulamalarda yüksek tutunma mukavemetine sahip hibrit polimer montaj yapıştırıcıları (silikon mastik) kullanılır. Duvar yüzeyi bozuk veya dalgalı olan noktalarda yapıştırıcı kuruyana kadar süpürgeliği sabitlemek amacıyla başsız ince çivi (pin çivi) ile desteklenir."
  },
  {
    question: "Eğri veya dalgalı duvarlarda süpürgelik montajı nasıl yapılır?",
    answer: "Eski binalarda duvarlar tamamen gönyesinde olmayabilir. Bu gibi durumlarda süpürgelik üst kenarı boyunca duvara uyumlu renkte boyanabilir akrilik mastik çekilerek aradaki boşluklar tamamen kapatılır ve kusursuz bir bitiş sağlanır."
  }
];

export default function SkirtingInstallationPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.parkeustam.com/hizmetler/supurgelik-montaji#service",
        "name": "Süpürgelik Montajı ve Değişimi",
        "serviceType": "Lake Süpürgelik Montajı, MDF Süpürgelik, Gönye Köşe Kesimi",
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
        "description": "6 cm, 8 cm ve 10 cm lake ve MDF süpürgeliklerin hassas 45 derece gönye kesim ile montajı."
      },
      {
        "@type": "FAQPage",
        "mainEntity": skirtingFaqs.map(faq => ({
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
          { name: 'Süpürgelik Montajı' }
        ]} />
      </div>

      <Hero
        title="İstanbul"
        highlight="Süpürgelik Montajı"
        subtitle="Lake ve MDF Çözümleri"
        description="Evinizin ve ofisinizin zemin detaylarını 45° gönye kesimli lüks lake süpürgeliklerle tamamlayın. Milimetrik köşe işçiliği, sağlam yapıştırma ve tozsuz montaj."
        imageAlt="İstanbul lake süpürgelik montajı ve gönye kesim ustası"
      />

      <TrustBadges />

      {/* Süpürgelik Seçimi ve İşçilik Standartları */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl space-y-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <Scissors className="w-4 h-4" />
                <span>Milimetrik Gönye İşçiliği</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight">
                Zemini Gösteren En Önemli Detay: <span className="text-primary">Süpürgelik İşçiliği</span>
              </h2>
              <p className="text-foreground/80 leading-relaxed text-base sm:text-lg">
                Parkenin kalitesi kadar duvara birleştiği süpürgelik hatları da evin genel estetiğini doğrudan belirler. Köşeleri ayrılmış, dalgalı yapıştırılmış veya açık kalan süpürgelikler yaşam alanınızın şıklığını gölgeler.
              </p>
              <p className="text-foreground/70 leading-relaxed text-sm sm:text-base">
                Özel açılı gönye testerelerimizle her köşeyi milimetrik kesiyor, duvar eğriliklerini akrilik mastikle kapatıyor ve kablo kanallarını gizleyerek kusursuz teslim ediyoruz.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                {[
                  "6 cm, 8 cm, 10 cm ve 12 cm lake modeller",
                  "45° hassas iç ve dış köşe gönye kesimi",
                  "Duvar boşluklarını kapatan temiz mastik uygulaması",
                  "Kablo gizleme kanallı montaj imkanı"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-sm font-medium text-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass p-8 sm:p-10 rounded-3xl border border-border/60 shadow-xl space-y-6">
              <h3 className="text-2xl font-bold text-foreground">Süpürgelik Yükseklik ve Model Seçimi</h3>
              <div className="space-y-4 text-sm text-foreground/80">
                <div className="p-4 rounded-2xl bg-background/70 border border-border/40 space-y-1.5">
                  <span className="font-bold text-primary block">6 cm Standart Süpürgelik</span>
                  <p className="text-xs text-foreground/70">
                    Alçak tavanlı veya dar koridorlu mekanlarda sade bir zemin geçişi sağlayan minimal model.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-background/70 border border-border/40 space-y-1.5">
                  <span className="font-bold text-primary block">8 cm Beyaz Lake MDF Süpürgelik</span>
                  <p className="text-xs text-foreground/70">
                    Günümüz modern iç mimarisinde en çok tercih edilen, duvarda belirgin ve tok bir duruş sergileyen ideal ölçü.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-background/70 border border-border/40 space-y-1.5">
                  <span className="font-bold text-primary block">10 - 12 cm Avangart Lüks Süpürgelik</span>
                  <p className="text-xs text-foreground/70">
                    Yüksek tavanlı salonlar, villalar ve geniş dairelerde zemin ile duvarı estetik birleştiren prestijli model.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* İlçelere Doğal İç Bağlantılar */}
          <div className="glass p-8 rounded-3xl border border-border/50 space-y-4">
            <div className="flex items-center gap-2 text-primary font-bold text-lg">
              <MapPin className="w-5 h-5 shrink-0" />
              <h3>Süpürgelik Montaj Hizmeti Sunduğumuz Bölgeler</h3>
            </div>
            <p className="text-sm text-foreground/70 leading-relaxed">
              İstanbul genelinde ve özellikle Anadolu Yakası ilçelerimizde süpürgelik montajı ve değişimi için mobil servis sunuyoruz:
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
                { name: "Gebze", href: "/kocaeli/gebze" },
              ].map((loc, idx) => (
                <Link
                  key={idx}
                  href={loc.href}
                  className="px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium bg-background border border-border hover:border-primary hover:text-primary transition-all shadow-sm"
                >
                  {loc.name} Süpürgelik Montajı
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
              Süpürgelik Montajı Hakkında Merak Edilenler
            </h2>
          </div>

          <Accordion defaultValue={["faq-0"]} className="w-full space-y-3">
            {skirtingFaqs.map((faq, index) => (
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
