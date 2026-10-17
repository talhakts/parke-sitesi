import { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Hero } from '@/components/sections/Hero';
import { TrustBadges } from '@/components/sections/TrustBadges';
import { PriceCalculator } from '@/components/sections/PriceCalculator';
import { WhyUs } from '@/components/sections/WhyUs';
import { Contact } from '@/components/sections/Contact';
import { Briefcase, CheckCircle2, ArrowRight, HelpCircle } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { siteConfig } from '@/config/site.config';

export const metadata: Metadata = {
  title: "Ofis ve Ticari Zemin Parke Döşeme | Parke Ustam",
  description: "Ofis, mağaza, kafe ve plazalar için AC4/AC5 yoğun trafik laminat ve modüler LVT vinil zemin kaplama. Mesai saatlerine uygun hızlı teslimat.",
  alternates: {
    canonical: "/hizmetler/ofis-ticari-zemin",
  },
  openGraph: {
    title: "Ofis ve Ticari Zemin Parke Döşeme | Parke Ustam",
    description: "Yoğun ayak trafiğine dayanıklı ticari parke ve modüler ofis zemin döşeme hizmeti.",
    url: "https://www.parkeustam.com/hizmetler/ofis-ticari-zemin",
    siteName: "Parke Ustam",
    locale: "tr_TR",
    type: "website",
  },
};

const commercialFaqs = [
  {
    question: "Ofisler için hangi parke sınıfı tercih edilmelidir?",
    answer: "Ofis ve ticari çalışma alanlarında tekerlekli sandalyeler ve yoğun ayak trafiği nedeniyle en az 32. sınıf (AC4) veya 33. sınıf (AC5) aşınma dirençli laminat parkeler ya da aşınma tabakası kalın LVT modüler vinil zeminler tercih edilmelidir."
  },
  {
    question: "İş yerimizin faaliyetini aksatmamak için hafta sonu veya akşam montajı mümkün mü?",
    answer: "Evet. Ticari işletmelerin mesai saatlerini aksatmamak adına keşif sırasında belirlenen takvim doğrultusunda hafta sonu veya akşam vardiyalı çalışma programı organize edebiliyoruz."
  },
  {
    question: "Tekerlekli çalışma koltukları parkeye zarar verir mi?",
    answer: "Standart ev tipi parkelerde çizilme riski olabilir; ancak AC4/AC5 ticari sınıf parkeler tekerlek sürtünmelerine karşı onaylı aşınma katmanına sahiptir. Ek koruma için şeffaf polikarbonat çalışma matları kullanılması tavsiye edilir."
  },
  {
    question: "Yükseltilmiş döşeme üzerine parke uygulanır mı?",
    answer: "Yükseltilmiş zemin panellerinin rijit ve oynamaz olması şartıyla, uygun nem ve ses yalıtım şiltesi serilerek kilitli laminat veya modüler karo vinil montajı başarıyla uygulanabilir."
  }
];

export default function OfisTicariZeminPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.parkeustam.com/hizmetler/ofis-ticari-zemin#service",
        "name": "Ofis ve Ticari Zemin Parke Döşeme",
        "serviceType": "Ticari Parke Montajı, AC5 Parke Döşeme, Ofis Zemin Kaplama",
        "provider": {
          "@type": "HomeAndConstructionBusiness",
          "name": siteConfig.name,
          "url": siteConfig.url,
          "telephone": siteConfig.phoneRaw
        },
        "areaServed": siteConfig.serviceAreas.cities,
        "description": "Ofis, mağaza ve ticari alanlar için yoğun trafik dayanımlı parke ve LVT zemin montajı."
      },
      {
        "@type": "FAQPage",
        "mainEntity": commercialFaqs.map(f => ({
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
          { name: 'Ofis & Ticari Zemin' }
        ]} />
      </div>

      <Hero
        title="Dayanıklı & Estetik"
        highlight="Ofis ve Ticari Zemin"
        subtitle="Kaplama Hizmetleri"
        description="Plaza, ofis, showroom ve mağazalar için AC4/AC5 yoğun trafik sınıflı laminat parke ve LVT vinil zemin döşeme çözümleri."
        imageAlt="Ofis ve ticari zemin parke döşeme ustası"
      />

      <TrustBadges />

      {/* İçerik */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl space-y-12">
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <Briefcase className="w-4 h-4" />
                <span>Kurumsal Zemin Çözümleri</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                Yoğun Trafiğe Dayanıklı <span className="text-primary">Prestijli Çalışma Alanları</span>
              </h2>
              <p className="text-foreground/80 leading-relaxed text-sm sm:text-base">
                İş yerlerinde zemin yalnızca estetik bir unsur değil, aynı zamanda akustik konfor ve uzun ömürlülük gerektiren teknik bir yatırımdır. Ofis projenize uygun aşınma sınıfı ve ses yalıtımıyla planlama yapıyoruz.
              </p>
              
              <div className="space-y-3 pt-2">
                {[
                  "AC4 (32. Sınıf) ve AC5 (33. Sınıf) yüksek aşınma dirençli zeminler",
                  "Yürüme gürültüsünü azaltan akustik ses kesici özel şilteler",
                  "İş akışınızı aksatmayan esnek mesai dışı ve hafta sonu montaj programı",
                  "Geniş metrajlı kurumsal projelerde şeffaf metrekare maliyet avantajı"
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
                  <span>2026 Kurumsal İşçilik Fiyatları</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="glass p-8 rounded-3xl border border-border/60 shadow-xl space-y-5">
              <h3 className="text-xl font-bold text-foreground">Sektörel Uygulamalar</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-background/60 border border-border/40 space-y-1">
                  <span className="font-semibold text-primary text-sm">Açık Ofisler</span>
                  <p className="text-xs text-foreground/70">Topuk sesi ve gürültü emici akustik şilte destekli AC5 montajı.</p>
                </div>
                <div className="p-4 rounded-2xl bg-background/60 border border-border/40 space-y-1">
                  <span className="font-semibold text-primary text-sm">Yönetici Odaları</span>
                  <p className="text-xs text-foreground/70">10-12 mm derzli lüks planklar ile kurumsal prestij.</p>
                </div>
                <div className="p-4 rounded-2xl bg-background/60 border border-border/40 space-y-1">
                  <span className="font-semibold text-primary text-sm">Perakende Mağaza</span>
                  <p className="text-xs text-foreground/70">Müşteri sirkülasyonu ve temizlik kimyasallarına dayanıklı zeminler.</p>
                </div>
                <div className="p-4 rounded-2xl bg-background/60 border border-border/40 space-y-1">
                  <span className="font-semibold text-primary text-sm">Klinik & Muayenehane</span>
                  <p className="text-xs text-foreground/70">Antibakteriyel ve leke tutmayan derzsiz yüzeyler.</p>
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
              Ticari Zemin Döşeme Hakkında Sıkça Sorulan Sorular
            </h2>
          </div>

          <Accordion defaultValue={["comm-0"]} className="w-full space-y-3">
            {commercialFaqs.map((faq, index) => (
              <AccordionItem key={index} value={`comm-${index}`} className="glass px-6 rounded-xl border border-border/50">
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
