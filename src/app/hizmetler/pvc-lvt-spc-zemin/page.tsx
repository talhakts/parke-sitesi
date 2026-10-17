import { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Hero } from '@/components/sections/Hero';
import { TrustBadges } from '@/components/sections/TrustBadges';
import { PriceCalculator } from '@/components/sections/PriceCalculator';
import { WhyUs } from '@/components/sections/WhyUs';
import { Contact } from '@/components/sections/Contact';
import { Droplet, CheckCircle2, ArrowRight, HelpCircle } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { siteConfig } from '@/config/site.config';

export const metadata: Metadata = {
  title: "PVC, LVT ve SPC Zemin Kaplama | Suya Dayanıklı Parke",
  description: "Mutfak, banyo ve ıslak hacimler için %100 suya dayanıklı SPC taş çekirdekli vinil ve LVT zemin döşeme hizmeti. Yerinde ücretsiz keşif için arayın.",
  alternates: {
    canonical: "/hizmetler/pvc-lvt-spc-zemin",
  },
  openGraph: {
    title: "PVC, LVT ve SPC Zemin Kaplama | Parke Ustam",
    description: "Islak hacimlere özel %100 suya dayanıklı SPC ve LVT zemin montajı.",
    url: "https://www.parkeustam.com/hizmetler/pvc-lvt-spc-zemin",
    siteName: "Parke Ustam",
    locale: "tr_TR",
    type: "website",
  },
};

const spcFaqs = [
  {
    question: "SPC zemin ile standart laminat parke arasındaki fark nedir?",
    answer: "Standart laminat parke HDF ahşap tozu çekirdeğe sahipken, SPC (Stone Plastic Composite) zemin kireçtaşı ve polimer bileşiminden üretilir. Bu sayede SPC zeminler sudan, nemden ve sıvı dökülmelerinden kesinlikle etkilenmez, şişme veya kabarma yapmaz."
  },
  {
    question: "Mutfak ve banyoda parke görünümü için SPC uygun mudur?",
    answer: "Evet, özellikle mutfak, antre, çamaşır odası ve ıslak hacim geçişlerinde ahşap sıcaklığını ve dokusunu %100 su geçirmezlikle birleştirmek için SPC zeminler sektör standardı olarak en çok tercih edilen çözümdür."
  },
  {
    question: "SPC zemin altına şilte serilir mi?",
    answer: "Çoğu kaliteli SPC zemin panelinin altında fabrikasyon olarak entegre akustik şilte katmanı (IXPE/EVA) bulunur. Entegre şilteli panellerin altına ilave yumuşak şilte serilmez; zira fazla esneme kilitlerin zorlanmasına sebep olabilir. Alt zeminin pürüzsüz ve mastarında olması çok önemlidir."
  },
  {
    question: "Mevcut seramik veya fayans üzerine döşenebilir mi?",
    answer: "Evet, derz araları 2-3 milimetreden derin olmayan ve sağlam seramik zeminlerin üzerine doğrudan döşenebilir. Derin derzler veya kırık karolar varsa montaj öncesi ince bir dolgu astarı çekilmelidir."
  }
];

export default function PvcLvtSpcPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.parkeustam.com/hizmetler/pvc-lvt-spc-zemin#service",
        "name": "PVC, LVT ve SPC Zemin Döşeme Hizmeti",
        "serviceType": "SPC Zemin Montajı, LVT Vinil Zemin, Suya Dayanıklı Zemin",
        "provider": {
          "@type": "HomeAndConstructionBusiness",
          "name": siteConfig.name,
          "url": siteConfig.url,
          "telephone": siteConfig.phoneRaw
        },
        "areaServed": siteConfig.serviceAreas.cities,
        "description": "Mutfak ve ıslak hacimlere özel 100% suya dayanıklı kilitli SPC ve LVT zemin kaplama uygulamaları."
      },
      {
        "@type": "FAQPage",
        "mainEntity": spcFaqs.map(f => ({
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
          { name: 'PVC & SPC Zemin' }
        ]} />
      </div>

      <Hero
        title="Suya Dayanıklı"
        highlight="SPC & LVT Zemin"
        subtitle="Döşeme ve Montaj Hizmeti"
        description="Mutfak, antre ve ticari alanlar için %100 su geçirmez, çizilmeye dirençli taş çekirdekli SPC ve vinil zemin kaplama çözümleri."
        imageAlt="Suya dayanıklı SPC zemin parke döşeme ustası"
      />

      <TrustBadges />

      {/* İçerik */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl space-y-12">
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <Droplet className="w-4 h-4" />
                <span>%100 Su ve Nem Direnci</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                Islak Hacimlerde <span className="text-primary">Ahşap Estetiği</span>
              </h2>
              <p className="text-foreground/80 leading-relaxed text-sm sm:text-base">
                Mutfak ve koridor gibi su dökülme riski yüksek alanlarda ahşap sıcaklığını kaybetmeden uzun ömürlü kullanım sağlayan SPC zeminler, yüksek yoğunluklu mineral çekirdeği ile deformasyona karşı dirençlidir.
              </p>
              
              <div className="space-y-3 pt-2">
                {[
                  "Kireçtaşı ve polimer bileşimli çekirdekle sıfır nem emilimi",
                  "Yüksek yüzey aşınma tabakası ile evcil hayvan ve darbe direnci",
                  "Mevcut seramik ve şap üzerine hızlı ve temiz kilitli montaj",
                  "Akustik ses yalıtımı ve tok zemin basma hissi"
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
              <h3 className="text-xl font-bold text-foreground">Kullanım Alanları</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-background/60 border border-border/40 space-y-1">
                  <span className="font-semibold text-primary text-sm">Mutfaklar</span>
                  <p className="text-xs text-foreground/70">Bulaşık ve lavabo çevresinde su birikmelerinden etkilenmez.</p>
                </div>
                <div className="p-4 rounded-2xl bg-background/60 border border-border/40 space-y-1">
                  <span className="font-semibold text-primary text-sm">Antre & Koridor</span>
                  <p className="text-xs text-foreground/70">Dışarıdan gelen ıslak ayakkabı ve yoğun ayak trafiğine dayanıklıdır.</p>
                </div>
                <div className="p-4 rounded-2xl bg-background/60 border border-border/40 space-y-1">
                  <span className="font-semibold text-primary text-sm">Ofis & Mağaza</span>
                  <p className="text-xs text-foreground/70">Tekerlekli sandalye ve lekelere karşı AC4/AC5 dayanım.</p>
                </div>
                <div className="p-4 rounded-2xl bg-background/60 border border-border/40 space-y-1">
                  <span className="font-semibold text-primary text-sm">Kış Bahçeleri</span>
                  <p className="text-xs text-foreground/70">Sıcaklık ve nem dalgalanmalarında genleşme toleransı yüksektir.</p>
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
              SPC ve Vinil Zemin Hakkında Sıkça Sorulan Sorular
            </h2>
          </div>

          <Accordion defaultValue={["spc-0"]} className="w-full space-y-3">
            {spcFaqs.map((faq, index) => (
              <AccordionItem key={index} value={`spc-${index}`} className="glass px-6 rounded-xl border border-border/50">
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
