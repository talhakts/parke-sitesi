import { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Hero } from '@/components/sections/Hero';
import { TrustBadges } from '@/components/sections/TrustBadges';
import { PriceCalculator } from '@/components/sections/PriceCalculator';
import { WhyUs } from '@/components/sections/WhyUs';
import { Contact } from '@/components/sections/Contact';
import { Trash2, CheckCircle2, ArrowRight, HelpCircle } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { siteConfig } from '@/config/site.config';

export const metadata: Metadata = {
  title: "Eski Parke Sökümü ve Zemin Temizliği | Parke Ustam",
  description: "Mevcut laminat, yapışkanlı ve masif parkelerin duvara zarar vermeden sökülmesi, harç temizliği ve moloz çuvallama hizmeti. Ücretsiz keşif için arayın.",
  alternates: {
    canonical: "/hizmetler/eski-parke-sokumu",
  },
  openGraph: {
    title: "Eski Parke Sökümü ve Zemin Temizliği | Parke Ustam",
    description: "Yeni parke öncesi zemin temizliği, eski süpürgelik ve parke sökümü, moloz çuvallama hizmeti.",
    url: "https://www.parkeustam.com/hizmetler/eski-parke-sokumu",
    siteName: "Parke Ustam",
    locale: "tr_TR",
    type: "website",
  },
};

const sokumFaqs = [
  {
    question: "Eski parkeyi kendimiz sökebilir miyiz?",
    answer: "Kilitli laminat parkeler dikkatli sökülebilir; ancak duvar diplerindeki eski süpürgeliklerin alçıya zarar vermeden çıkarılması, zemin üzerindeki eski çivi ve harç artıklarının kazınması profesyonel aletler ve zaman gerektirir. Masif ve yapışkanlı zeminlerde ise şapa zarar vermemek için mutlaka usta müdahalesi gerekir."
  },
  {
    question: "Söküm sonrası çıkan molozlar nasıl tahliye edilir?",
    answer: "Sökülen eski parke plakaları, kırık süpürgelikler ve harç kalıntıları dayanıklı moloz çuvallarına düzenli olarak doldurulur. Talep edilmesi durumunda bina yönetimi kurallarına uygun olarak nakliye ve atık alanına taşıma planlanır."
  },
  {
    question: "Eski parke üzerine yeni laminat döşenebilir mi?",
    answer: "Eski parke tamamen düz, oynamayan ve nemsiz ise üzerine şilte serilerek yeni parke döşenebilir; ancak kapı altı kotları yükselir ve olası bir alt zemin rutubeti yeni parkeye sirayet edebilir. Uzun vadeli konfor için eski parkenin sökülerek şapın havalandırılması sektör standardı olarak tavsiye edilir."
  },
  {
    question: "Söküm işlemi ne kadar sürer?",
    answer: "Standart 80-100 m² bir dairenin laminat parke sökümü ve zemin süpürülmesi genellikle yarım gün ile 1 iş günü arasında tamamlanmaktadır. Ziftli ve yapışkanlı eski parkelerde süre keşifte netleştirilir."
  }
];

export default function EskiParkeSokumuPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.parkeustam.com/hizmetler/eski-parke-sokumu#service",
        "name": "Eski Parke Sökümü ve Zemin Hazırlığı",
        "serviceType": "Eski Parke Sökümü, Moloz Çuvallama, Zemin Kazıma",
        "provider": {
          "@type": "HomeAndConstructionBusiness",
          "name": siteConfig.name,
          "url": siteConfig.url,
          "telephone": siteConfig.phoneRaw
        },
        "areaServed": siteConfig.serviceAreas.cities,
        "description": "Mevcut parkelerin zemin şapına zarar verilmeden sökülmesi, harç kazıma ve moloz çuvallama."
      },
      {
        "@type": "FAQPage",
        "mainEntity": sokumFaqs.map(f => ({
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
          { name: 'Eski Parke Sökümü' }
        ]} />
      </div>

      <Hero
        title="Profesyonel"
        highlight="Eski Parke Sökümü"
        subtitle="ve Zemin Hazırlığı"
        description="Eski laminat, lamine veya yapışkanlı ahşap parkelerin duvara ve kapı kasalarına zarar vermeden sökülmesi, çivi/harç kazıma ve moloz çuvallama hizmeti."
        imageAlt="Eski parke sökümü ve zemin hazırlığı ustası"
      />

      <TrustBadges />

      {/* İçerik Bölümü */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl space-y-12">
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <Trash2 className="w-4 h-4" />
                <span>Titiz ve Tozsuz Çalışma</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                Yeni Parkeniz İçin <span className="text-primary">Temiz ve Düz Bir Zemin</span>
              </h2>
              <p className="text-foreground/80 leading-relaxed text-sm sm:text-base">
                Kusursuz bir zemin kaplamasının temeli, altındaki şapın temizliği ve düzlüğüdür. Eskiyen, kabaran veya su hasarı görmüş parkeler uzman ekipmanlarla zeminden ayrıştırılır.
              </p>
              
              <div className="space-y-3 pt-2">
                {[
                  "Duvar boyasına ve kapı kasalarına zarar vermeden söküm",
                  "Eski süpürgeliklerin ve paslı çivilerin temizlenmesi",
                  "Şap üzerindeki harç ve yapıştırıcı pürüzlerinin kazınması",
                  "Çıkan atıkların sağlam çuvallara doldurularak düzenli teslimi"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-sm text-foreground/80">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Fiyat Sayfası Çapraz Linkleme */}
              <div className="p-4 rounded-2xl bg-primary/5 border border-primary/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs sm:text-sm">
                <span className="text-foreground/80">
                  Söküm işçilik maliyetlerini ve hesaplama faktörlerini inceleyin:
                </span>
                <Link
                  href="/parke-doseme-fiyatlari#eski-parke-sokumu"
                  className="inline-flex items-center gap-1 font-semibold text-primary hover:underline underline-offset-4 shrink-0"
                >
                  <span>Söküm Fiyat Rehberi</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="glass p-8 rounded-3xl border border-border/60 shadow-xl space-y-5">
              <h3 className="text-xl font-bold text-foreground">Uygulama Adımları</h3>
              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-background/60 border border-border/40 space-y-1">
                  <span className="font-semibold text-primary text-sm">1. Adım: Süpürgelik ve Profil Sökümü</span>
                  <p className="text-xs text-foreground/70">Duvar dipleri dikkatle açılarak dilatasyon boşluğu temizlenir.</p>
                </div>
                <div className="p-4 rounded-2xl bg-background/60 border border-border/40 space-y-1">
                  <span className="font-semibold text-primary text-sm">2. Adım: Panel Panel Ayrıştırma</span>
                  <p className="text-xs text-foreground/70">Kilitli sistemler kırmadan, yapışkanlı zeminler özel raspalarla kaldırılır.</p>
                </div>
                <div className="p-4 rounded-2xl bg-background/60 border border-border/40 space-y-1">
                  <span className="font-semibold text-primary text-sm">3. Adım: Zemin Süpürme & Çuvallama</span>
                  <p className="text-xs text-foreground/70">Yeni şilte serilmeye hazır temiz beton şap ortaya çıkarılır.</p>
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
              Eski Parke Sökümü Hakkında Sıkça Sorulan Sorular
            </h2>
          </div>

          <Accordion defaultValue={["sokum-0"]} className="w-full space-y-3">
            {sokumFaqs.map((faq, index) => (
              <AccordionItem key={index} value={`sokum-${index}`} className="glass px-6 rounded-xl border border-border/50">
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
