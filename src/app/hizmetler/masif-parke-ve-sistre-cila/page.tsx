import { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Hero } from '@/components/sections/Hero';
import { TrustBadges } from '@/components/sections/TrustBadges';
import { PriceCalculator } from '@/components/sections/PriceCalculator';
import { WhyUs } from '@/components/sections/WhyUs';
import { Contact } from '@/components/sections/Contact';
import { Sparkles, CheckCircle2, ArrowRight, HelpCircle } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { siteConfig } from '@/config/site.config';

export const metadata: Metadata = {
  title: "Masif Parke Döşeme ve Sistre Cila | Parke Ustam",
  description: "Doğal masif ve lamine ahşap parke döşeme, tozsuz sistre zımparalama ve su bazlı/çift komponentli cila uygulaması. Ücretsiz keşif için arayın.",
  alternates: {
    canonical: "/hizmetler/masif-parke-ve-sistre-cila",
  },
  openGraph: {
    title: "Masif Parke Döşeme ve Sistre Cila | Parke Ustam",
    description: "Doğal ahşap masif parke montajı ve profesyonel tozsuz sistre cila hizmeti.",
    url: "https://www.parkeustam.com/hizmetler/masif-parke-ve-sistre-cila",
    siteName: "Parke Ustam",
    locale: "tr_TR",
    type: "website",
  },
};

const sistreFaqs = [
  {
    question: "Sistre cila işlemi evde çok toz yapar mı?",
    answer: "Geleneksel makineler toz çıkarırken, modern uygulamalarımızda vakumlu toz emiş sistemli sistre makineleri kullanılmaktadır. Zımparalama sırasında açığa çıkan tozun büyük kısmı doğrudan filtreli torbalarda toplanır; yine de süpürgelik dipleri ve odalar işlem sonrası titizlikle temizlenir."
  },
  {
    question: "Su bazlı cila mı yoksa solvent bazlı cila mı tercih edilmelidir?",
    answer: "İç mekan hava kalitesi ve insan sağlığı için kokusuz, sararma yapmayan ve çevre dostu su bazlı poliüretan cilalar tavsiye edilir. Yüksek yoğunluklu ticari mekanlar veya restorasyon projelerinde ise çizilme direnci yüksek çift komponentli cilalar uygulanabilir."
  },
  {
    question: "Cila uygulandıktan sonra zemin ne zaman kullanılabilir?",
    answer: "Son kat cila sürüldükten sonra genellikle 24 saat içinde çorapla hafif basılabilir hale gelir. Ancak ağır mobilyaların yerleştirilmesi ve tam sertleşme için sektör standardı olarak 48 ila 72 saat beklenmesi önerilir."
  },
  {
    question: "Laminat parkeye sistre cila yapılır mı?",
    answer: "Hayır. Laminat parkeler melamin reçine kaplı ince desen tabakasından oluşur ve zımparalanamaz. Sistre ve cila işlemi yalnızca gerçek doğal ahşap içeren masif parke ve üst tabakası en az 3-4 mm olan lamine parkelere uygulanabilir."
  }
];

export default function MasifParkeSistrePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.parkeustam.com/hizmetler/masif-parke-ve-sistre-cila#service",
        "name": "Masif Parke Döşeme ve Sistre Cila",
        "serviceType": "Masif Parke Montajı, Tozsuz Sistre, Poliüretan Cila",
        "provider": {
          "@type": "HomeAndConstructionBusiness",
          "name": siteConfig.name,
          "url": siteConfig.url,
          "telephone": siteConfig.phoneRaw
        },
        "areaServed": siteConfig.serviceAreas.cities,
        "description": "Doğal ahşap masif zemin döşeme, tozsuz sistre zımparalama ve kaliteli cila bakımı."
      },
      {
        "@type": "FAQPage",
        "mainEntity": sistreFaqs.map(f => ({
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
          { name: 'Masif Parke & Sistre Cila' }
        ]} />
      </div>

      <Hero
        title="Doğal Ahşap"
        highlight="Masif Parke ve Sistre Cila"
        subtitle="Usta İşçiliği"
        description="Klasik ve modern masif parke döşeme, vakumlu makinelerle tozsuz sistre zımparalama ve uzun ömürlü çift kat cila yenileme hizmeti."
        imageAlt="Masif parke döşeme ve tozsuz sistre cila ustası"
      />

      <TrustBadges />

      {/* İçerik */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl space-y-12">
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <Sparkles className="w-4 h-4" />
                <span>Doğal Ahşaba Yeniden Canlılık</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                Zamanla Yıpranan Zeminleri <span className="text-primary">İlk Günkü Görünümüne</span> Kavuşturun
              </h2>
              <p className="text-foreground/80 leading-relaxed text-sm sm:text-base">
                Doğal masif ahşap zeminler düzenli sistre ve cila bakımıyla onlarca yıl yaşayabilir. Çizilen, matlaşan veya rengi kararan ahşap yüzeyler kademeli zımpara tekniğiyle pürüzsüzleştirilir.
              </p>
              
              <div className="space-y-3 pt-2">
                {[
                  "Geleneksel balıksırtı, macar veya düz masif parke montajı",
                  "Vakumlu toz emişli makinelerle minimum toz oluşumu",
                  "Ahşap aralarındaki boşlukların macunlanarak dolgulanması",
                  "Kokusuz, sararmaz su bazlı veya ağır trafik dayanımlı cila seçenekleri"
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
              <h3 className="text-xl font-bold text-foreground">Sistre Cila Süreci</h3>
              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-background/60 border border-border/40 space-y-1">
                  <span className="font-semibold text-primary text-sm">1. Kalın Zımpara (Eski Cila Temizliği)</span>
                  <p className="text-xs text-foreground/70">Mevcut yıpranmış cila tabakası ve derin çizikler temizlenir.</p>
                </div>
                <div className="p-4 rounded-2xl bg-background/60 border border-border/40 space-y-1">
                  <span className="font-semibold text-primary text-sm">2. Macun Dolgu & İnce Zımpara</span>
                  <p className="text-xs text-foreground/70">Ahşap talaşından hazırlanan macunla derzler kapatılır ve yüzey ipeksi kıvama getirilir.</p>
                </div>
                <div className="p-4 rounded-2xl bg-background/60 border border-border/40 space-y-1">
                  <span className="font-semibold text-primary text-sm">3. Astar ve Katlar Halinde Cila</span>
                  <p className="text-xs text-foreground/70">Katlar arasında ara zımpara yapılarak cam gibi homojen parlaklık veya mat görünüm sağlanır.</p>
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
              Masif Parke ve Sistre Hakkında Sık Sorulan Sorular
            </h2>
          </div>

          <Accordion defaultValue={["sistre-0"]} className="w-full space-y-3">
            {sistreFaqs.map((faq, index) => (
              <AccordionItem key={index} value={`sistre-${index}`} className="glass px-6 rounded-xl border border-border/50">
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
