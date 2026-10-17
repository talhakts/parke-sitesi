import { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Hero } from '@/components/sections/Hero';
import { TrustBadges } from '@/components/sections/TrustBadges';
import { PriceCalculator } from '@/components/sections/PriceCalculator';
import { WhyUs } from '@/components/sections/WhyUs';
import { Gallery } from '@/components/sections/Gallery';
import { Contact } from '@/components/sections/Contact';
import { CheckCircle2, Layers, MapPin, HelpCircle, Briefcase, Home, Sparkles } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Laminat Parke Döşeme Ustası | İstanbul Parke Ustam",
  description: "İstanbul genelinde 8mm, 10mm, 12mm derzli laminat parke döşeme. Doğru genleşme payı, nem bariyerli şilte serimi ve usta işçiliği. Ücretsiz keşif için arayın.",
  alternates: {
    canonical: "/hizmetler/laminat-parke-doseme",
  },
  openGraph: {
    title: "Laminat Parke Döşeme Ustası | İstanbul Parke Ustam",
    description: "İstanbul genelinde profesyonel laminat parke döşeme, süpürgelik montajı ve zemin çözümleri. Lazer metre ile yerinde ücretsiz keşif.",
    url: "https://www.parkeustam.com/hizmetler/laminat-parke-doseme",
    siteName: "Parke Ustam",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Laminat Parke Döşeme Ustası | İstanbul Parke Ustam",
    description: "İstanbul genelinde profesyonel laminat parke döşeme, süpürgelik montajı ve zemin çözümleri.",
  },
};

const serviceFaqs = [
  {
    question: "Laminat parke montajı ne kadar sürer?",
    answer: "Standart, boş ve zemin tesviyesi yapılmış ortalama 80-100 m² bir dairenin laminat parke ve süpürgelik montajı, profesyonel 2 kişilik usta ekibimizle genellikle 1 iş günü içinde tamamlanarak teslim edilir. Eşyalı dairelerde veya zemin düzeltmesi gereken mekanlarda süre yerinde keşif sonrasında netleştirilir."
  },
  {
    question: "Derzli parke mi yoksa derzsiz parke mi tercih edilmeli?",
    answer: "Derzli (V kanallı) laminat parkeler ahşap plaka hissini ve derinlik algısını artırır; ayrıca mevsimsel mikro genleşmelerde birleşim çizgilerini gizler. Derzsiz modeller ise pürüzsüz, kesintisiz bir yüzey görünümü arayanlar için uygundur. Her iki seçenekte de alt zeminin düzgünlüğü ve doğru usta işçiliği esastır."
  },
  {
    question: "Eski halıfleks veya parke üzerine laminat parke döşenir mi?",
    answer: "Eski halıfleks üzerine parke döşenmesi toz birikmesi, koku ve esneme sorunları nedeniyle kesinlikle önerilmez; sökülmelidir. Ancak zemininde eğrilik ve gevşeme olmayan sağlam, düz seramik/fayans veya eski masif parke üzerine uygun nem bariyerli şilte serilerek laminat montajı yapılabilir."
  },
  {
    question: "Duvar diplerinde neden boşluk (genleşme payı) bırakılır?",
    answer: "Laminat parkenin HDF ahşap çekirdeği ortamdaki bağıl nem ve sıcaklık değişimlerine göre doğal olarak mikron düzeyinde genişler. Duvar diplerinde 8-12 mm dilatasyon boşluğu bırakılmazsa parke duvara dayanıp odanın ortasında kabarma yapar. Bu boşluk süpürgelik profilleriyle tamamen kapatılır."
  },
  {
    question: "Laminat parke suya tamamen dayanıklı mıdır?",
    answer: "Standart laminat parkeler yüksek yoğunluklu lif levhadan (HDF) üretilir ve yüzeyine damlayan sular hemen silindiğinde zarar görmez. Kenarları parafinli veya neme dirençli modeller dökülmelere karşı ek direnç sağlar; ancak suyun uzun süre zemin üstünde veya altında kalması durumunda ahşap çekirdek şişebilir. Sürekli ıslak hacimler veya su baskını riski olan alanlar için 100% suya dayanıklı SPC veya LVT zemin kaplamaları tercih edilmelidir."
  },
  {
    question: "Yerden ısıtmalı evlerde parke döşenirken nelere dikkat edilmelidir?",
    answer: "Yerden ısıtmalı zeminlerde parke montajı öncesinde ısıtma sistemi en az 48 saat önce kapatılmalı ve zemin ortam sıcaklığına dönmelidir. Isı transferini engellemeyen termal iletken delikli/folyolu özel şilteler kullanılmalı, yüzey sıcaklığı 27°C'yi geçmeyecek şekilde ayarlanmalıdır."
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
        description="İstanbul genelinde konut, ofis ve villa projeleriniz için 1. sınıf laminat parke montajı sunuyoruz. Tozsuz kesim, doğru genleşme payı ve temiz teslimat."
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
                Laminat parke, dayanıklılığı, zengin renk seçenekleri ve kolay temizlenebilir yapısıyla zeminlerin en çok tercih edilen kaplamasıdır. Ancak kaliteli bir parke bile doğru usta işçiliğiyle döşenmediğinde kabarma, gıcırdama ve kilit kırılması gibi sorunlar yaşanabilir.
              </p>
              <p className="text-foreground/70 leading-relaxed text-sm sm:text-base">
                Parke Ustam olarak montaj öncesinde şap nemini ve zemin kotunu kontrol ediyor, 2-3 mm yüksek yoğunluklu kapalı hücreli şilte seriyor ve tüm duvar kenarlarında 8-12 mm genleşme payı bırakarak parkenizin uzun yıllar stabil kalmasını sağlıyoruz.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                {[
                  "AC4 ve AC5 ticari/konut dayanıklılık sınıfları",
                  "2-3 mm ses ve nem bariyerli kapalı hücreli şilte",
                  "Duvar diplerinde 8-12 mm dilatasyon boşluğu",
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

          {/* Dedicated Section: Ofis Projeleri (Priority 2 Anchor Target) */}
          <div id="ofis-projeleri" className="scroll-mt-24 glass p-8 sm:p-10 rounded-3xl border border-border/60 space-y-6">
            <div className="flex items-center gap-3 text-primary">
              <Briefcase className="w-6 h-6" />
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground">Ofis ve Ticari Alan Parke Döşeme Çözümleri</h3>
            </div>
            <p className="text-foreground/80 leading-relaxed text-sm sm:text-base">
              Çalışma alanlarında, kliniklerde ve iş yerlerinde zeminler gün boyu tekerlekli ofis sandalyelerine, ayakkabı trafiğine ve aşınmaya maruz kalır. Bu nedenle ofis projelerinde standart 8mm yerine mutlaka <strong>32. ve 33. sınıf AC4 veya AC5 yoğun trafik laminat parkeleri</strong> tercih edilmelidir.
            </p>
            <div className="grid md:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-background/60 border border-border/40 space-y-1">
                <span className="font-semibold text-foreground text-sm block">Tekerlekli Sandalye Direnci</span>
                <p className="text-xs text-foreground/70">Mikro çizilmelere karşı güçlendirilmiş melamin yüzey kaplaması ile uzun ömürlü kullanım.</p>
              </div>
              <div className="p-4 rounded-2xl bg-background/60 border border-border/40 space-y-1">
                <span className="font-semibold text-foreground text-sm block">Akustik Adım Sesi Yalıtımı</span>
                <p className="text-xs text-foreground/70">Yüksek yoğunluklu akustik şilte ile alt kata ve oda içine yansıyan topuk sesini azaltma.</p>
              </div>
              <div className="p-4 rounded-2xl bg-background/60 border border-border/40 space-y-1">
                <span className="font-semibold text-foreground text-sm block">Hafta Sonu Esnek Montaj</span>
                <p className="text-xs text-foreground/70">İş akışınızı aksatmamak adına kurumsal müşterilerimize hafta sonu veya mesai dışı uygulama imkanı.</p>
              </div>
            </div>
          </div>

          {/* Dedicated Section: Villa ve Ev Projeleri (Priority 2 Anchor Target) */}
          <div id="villa-ve-ev" className="scroll-mt-24 glass p-8 sm:p-10 rounded-3xl border border-border/60 space-y-6">
            <div className="flex items-center gap-3 text-primary">
              <Home className="w-6 h-6" />
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground">Villa ve Konut Zemin Projeleri</h3>
            </div>
            <p className="text-foreground/80 leading-relaxed text-sm sm:text-base">
              Geniş metrekareli villalar, dubleks daireler ve müstakil konutlarda zemin kaplaması mimari prestijin en belirleyici parçasıdır. 10 mm ve 12 mm kalınlığındaki derzli laminat parkeler, geniş salonlarda basıldığında tok bir ahşap hissi sunar.
            </p>
            <div className="grid md:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-background/60 border border-border/40 space-y-1">
                <span className="font-semibold text-foreground text-sm block">Geniş Format Derzli Plakalar</span>
                <p className="text-xs text-foreground/70">Geniş salonlarda ferahlık yaratan, doğal meşe ve ceviz damarlı estetik plank modelleri.</p>
              </div>
              <div className="p-4 rounded-2xl bg-background/60 border border-border/40 space-y-1">
                <span className="font-semibold text-foreground text-sm block">Yerden Isıtma Uyumu</span>
                <p className="text-xs text-foreground/70">Termal iletkenliği test edilmiş şiltelerle villaların yerden ısıtma verimini koruyan doğru montaj.</p>
              </div>
              <div className="p-4 rounded-2xl bg-background/60 border border-border/40 space-y-1">
                <span className="font-semibold text-foreground text-sm block">8-12 cm Lüks Lake Süpürgelik</span>
                <p className="text-xs text-foreground/70">Yüksek tavanlı villalara yakışan 45 derece gönye kesimli beyaz lake süpürgelik işçiliği.</p>
              </div>
            </div>
          </div>

          {/* Dedicated Section: Suya Dirençli Zeminler & PVC/LVT Karşılaştırması (Priority 2 & 5 Anchor Target) */}
          <div id="suya-dayanikli-zeminler" className="scroll-mt-24 glass p-8 sm:p-10 rounded-3xl border border-primary/30 space-y-6">
            <div className="flex items-center gap-3 text-primary">
              <Sparkles className="w-6 h-6" />
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground">Suya ve Neme Dirençli Zeminler: Laminat vs. PVC & LVT</h3>
            </div>
            <p className="text-foreground/80 leading-relaxed text-sm sm:text-base">
              Tüketicilerin en sık sorduğu konulardan biri parkelerin suya dayanıklılık derecesidir. Doğru zemin seçimi için teknik farkları bilmek hayati önem taşır:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 rounded-2xl bg-background/70 border border-border/50 space-y-2">
                <span className="font-bold text-foreground text-base block">Neme Dirençli (Aqua-Stop) Laminat Parke</span>
                <p className="text-xs text-foreground/70 leading-relaxed">
                  İç çekirdeği yüksek yoğunluklu HDF lif levhadır. Kilit kenarları parafin veya hidrofobik reçine ile mühürlenmiştir. Salon, koridor ve yatak odalarında günlük sıvı dökülmelerine (24-72 saate kadar) dayanıklıdır. Ancak uzun süreli su birikintisi veya alt şap neminde kabarma riski taşır; 100% su geçirmez değildir.
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-background/70 border border-border/50 space-y-2">
                <span className="font-bold text-foreground text-base block">100% Su Geçirmez LVT & SPC Zeminler</span>
                <p className="text-xs text-foreground/70 leading-relaxed">
                  Taş-polimer kompozit (SPC) veya lüks vinil karolardan (LVT) üretilir; içinde ahşap lifi bulunmaz. Mutfak, giriş holü, bodrum katı ve ticari ıslak alanlar için idealdir. Suya doğrudan maruz kalsa dahi kesinlikle şişme ve kabarma yapmaz. Mekanınızın kullanım amacına göre doğru ürünü ücretsiz keşfimiz sırasında belirliyoruz.
                </p>
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
              İstanbul genelinde ve özellikle Anadolu Yakası ilçelerimizde yerinde ücretsiz keşif desteği sunuyoruz. İlçe bazlı detaylar için sayfalarımızı ziyaret edebilirsiniz:
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

          <Accordion defaultValue={["faq-0"]} className="w-full space-y-3">
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
