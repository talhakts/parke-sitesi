import { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Hero } from '@/components/sections/Hero';
import { TrustBadges } from '@/components/sections/TrustBadges';
import { PriceCalculator } from '@/components/sections/PriceCalculator';
import { WhyUs } from '@/components/sections/WhyUs';
import { Contact } from '@/components/sections/Contact';
import { Flame, CheckCircle2, ArrowRight, HelpCircle } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { siteConfig } from '@/config/site.config';

export const metadata: Metadata = {
  title: "Yerden Isıtmalı Zemin Parke Döşeme | Parke Ustam",
  description: "Yerden ısıtma uyumlu laminat ve lamine parke montajı. Termal iletken delikli alüminyum folyolu şilte ve genleşme payı standartları. Ücretsiz keşif için arayın.",
  alternates: {
    canonical: "/hizmetler/yerden-isitmali-zemin-parke",
  },
  openGraph: {
    title: "Yerden Isıtmalı Zemin Parke Döşeme | Parke Ustam",
    description: "Yerden ısıtma sistemlerine özel termal iletken şilte ve profesyonel parke montajı.",
    url: "https://www.parkeustam.com/hizmetler/yerden-isitmali-zemin-parke",
    siteName: "Parke Ustam",
    locale: "tr_TR",
    type: "website",
  },
};

const heatingFaqs = [
  {
    question: "Yerden ısıtmalı evde her laminat parke kullanılabilir mi?",
    answer: "Hayır. Ambalajında veya teknik föyünde 'yerden ısıtma uyumludur' piktogramı bulunan, toplam ısıl direnci (R değeri) 0.15 m²K/W altında olan parkeler seçilmelidir. Çok kalın veya aşırı katmanlı ahşaplar ısı transferini geciktirerek enerji kaybına yol açar."
  },
  {
    question: "Yerden ısıtmalı zemin altına hangi şilte serilmelidir?",
    answer: "Yerden ısıtmalı evlerde kesinlikle standart 5 mm kalın süngerler kullanılmamalıdır. Bunun yerine ısı iletimini engellemeyen, delikli/perfore veya alüminyum buhar bariyerli özel termal şilteler (genellikle 1.5 - 2 mm yüksek yoğunluklu) tercih edilmelidir."
  },
  {
    question: "Montaj öncesinde ısıtma sistemi nasıl ayarlanmalıdır?",
    answer: "Döşeme işleminden en az 48 saat önce yerden ısıtma sistemi kapatılmalı veya zemin yüzey sıcaklığı yaklaşık 18-20°C seviyesine indirilmelidir. Montaj bittikten sonra ise sistem kademeli olarak (günde en fazla 5°C artırılarak) çalıştırılmalıdır."
  },
  {
    question: "Yerden ısıtmalı evde dilatasyon (genleşme) payı neden daha büyüktür?",
    answer: "Sıcaklık farkları ahşap çekirdeğin genleşme-daralma hareketini hızlandırır. Bu nedenle duvar kenarlarında, kapı eşiklerinde ve petek borusu çevrelerinde en az 10-12 mm doğru dilatasyon boşluğu bırakılması kabarmaları önlemek için şarttır."
  }
];

export default function YerdenIsitmaliZeminPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.parkeustam.com/hizmetler/yerden-isitmali-zemin-parke#service",
        "name": "Yerden Isıtmalı Zemin Parke Döşeme",
        "serviceType": "Yerden Isıtma Parke Montajı, Termal Şilte Uygulaması",
        "provider": {
          "@type": "HomeAndConstructionBusiness",
          "name": siteConfig.name,
          "url": siteConfig.url,
          "telephone": siteConfig.phoneRaw
        },
        "areaServed": siteConfig.serviceAreas.cities,
        "description": "Yerden ısıtmalı konut ve villalar için termal onaylı şilte ve teknik dilatasyonlu parke montajı."
      },
      {
        "@type": "FAQPage",
        "mainEntity": heatingFaqs.map(f => ({
          "@type": "Question",
          "name": f.question,
          "acceptedAnswer": { "@type": "Answer", "text": f.answer }
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
          { name: 'Yerden Isıtmalı Parke' }
        ]} />
      </div>

      <Hero
        title="Termal Verimli"
        highlight="Yerden Isıtmalı Zemin"
        subtitle="Parke Döşeme Standartları"
        description="Yerden ısıtma sistemlerine özel termal iletken delikli şilteler, nem bariyeri ve sıcaklık genleşmelerine dayanıklı teknik parke montajı."
        imageAlt="Yerden ısıtmalı ev parke döşeme ustası"
      />

      <TrustBadges />

      {/* İçerik */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl space-y-12">
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <Flame className="w-4 h-4" />
                <span>Maksimum Isı Transferi & Konfor</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                Isıyı Hapsetmeyen <span className="text-primary">Doğru Zemin Mühendisliği</span>
              </h2>
              <p className="text-foreground/80 leading-relaxed text-sm sm:text-base">
                Yerden ısıtmalı evlerde yapılan en büyük hata, kalın ve uygunsuz şilte seçimidir. Isının odaya hızlı geçişini sağlayan düşük termal dirençli zemin katmanları ve doğru genleşme payı ile yakıt tasarrufu sağlayın.
              </p>
              
              <div className="space-y-3 pt-2">
                {[
                  "Alüminyum buhar bariyerli ve perfore (delikli) termal iletken şilte",
                  "Yerden ısıtma standartlarına uygun 8 mm veya 10 mm parke kalınlığı",
                  "Sıcaklık dalgalanmalarına karşı duvar diplerinde geniş dilatasyon payı",
                  "Kademeli çalıştırma ve ilk ısıtma rejimi hakkında teknik bilgilendirme"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-sm text-foreground/80">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  href="/parke-doseme-fiyatlari"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline underline-offset-4"
                >
                  <span>2026 İşçilik Fiyatlarını İnceleyin</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="glass p-8 rounded-3xl border border-border/60 shadow-xl space-y-5">
              <h3 className="text-xl font-bold text-foreground">Montaj Öncesi Altın Kurallar</h3>
              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-background/60 border border-border/40 space-y-1">
                  <span className="font-semibold text-primary text-sm">1. Şap Nem Kontrolü</span>
                  <p className="text-xs text-foreground/70">Şapın tamamen kurumuş (bağıl nem &lt; %1.8) olması zorunludur.</p>
                </div>
                <div className="p-4 rounded-2xl bg-background/60 border border-border/40 space-y-1">
                  <span className="font-semibold text-primary text-sm">2. 48 Saat Ortam Sıcaklığına Uyum</span>
                  <p className="text-xs text-foreground/70">Parke paketleri odada açılmadan en az 48 saat aklimatize edilmelidir.</p>
                </div>
                <div className="p-4 rounded-2xl bg-background/60 border border-border/40 space-y-1">
                  <span className="font-semibold text-primary text-sm">3. Yüzey Sıcaklık Sınırı</span>
                  <p className="text-xs text-foreground/70">Kullanım sırasında parke yüzey sıcaklığı 27°C derecenin üzerine çıkmamalıdır.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SSS */}
      <section className="py-16 bg-muted/20 border-t border-border/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-8">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-2 text-primary text-sm font-semibold">
              <HelpCircle className="w-4 h-4" />
              <span>Merak Edilenler</span>
            </div>
            <h2 className="text-3xl font-bold text-foreground">
              Yerden Isıtmalı Parke Hakkında Sıkça Sorulan Sorular
            </h2>
          </div>

          <Accordion defaultValue={["heat-0"]} className="w-full space-y-3">
            {heatingFaqs.map((faq, index) => (
              <AccordionItem key={index} value={`heat-${index}`} className="glass px-6 rounded-xl border border-border/50">
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
      <Contact />
    </div>
  );
}
