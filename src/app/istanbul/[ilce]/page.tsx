import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getDistrictBySlug, getDistrictsByRegion } from '@/lib/districts';
import { getDistrictInfo, districtData } from '@/lib/districtData';
import { Hero } from '@/components/sections/Hero';
import { TrustBadges } from '@/components/sections/TrustBadges';
import { Services } from '@/components/sections/Services';
import { PriceCalculator } from '@/components/sections/PriceCalculator';
import { WhyUs } from '@/components/sections/WhyUs';
import { Gallery } from '@/components/sections/Gallery';
import { Testimonials } from '@/components/sections/Testimonials';
import { Contact } from '@/components/sections/Contact';
import { DistrictContent } from '@/components/sections/DistrictContent';

interface Props {
  params: Promise<{
    ilce: string;
  }>;
}

export async function generateStaticParams() {
  const avrupa = getDistrictsByRegion('Avrupa Yakası');
  const anadolu = getDistrictsByRegion('Anadolu Yakası');
  const allIstanbul = [...avrupa, ...anadolu];

  return allIstanbul.map((district) => ({
    ilce: district.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { ilce } = await params;
  const district = getDistrictBySlug(ilce);

  if (!district) {
    return {};
  }

  const districtInfo = getDistrictInfo(ilce);
  const description = districtInfo?.intro 
    ? `${districtInfo.intro.slice(0, 155)}...`
    : `${district.name} parke ustası arayanlar için 30 yılı aşkın tecrübemizle garantili laminat parke, sistre cila ve parke döşeme hizmeti sunuyoruz. Ücretsiz keşif için hemen arayın!`;

  return {
    title: `${district.name} Parke Ustası | İstanbul Parke Döşeme`,
    description,
    keywords: [
      `${district.name} parke ustası`,
      `${district.name} parke döşeme`,
      `${district.name} laminat parke`,
      `${district.name} parke`,
      "istanbul parke ustası",
      "istanbul parke döşeme"
    ],
    alternates: {
      canonical: `/istanbul/${district.slug}`,
    },
    openGraph: {
      title: `${district.name} Parke Ustası | İstanbul Parke Döşeme`,
      description: `${district.name} genelinde profesyonel ve garantili parke döşeme hizmeti.`,
      url: `https://parkeustam.com/istanbul/${district.slug}`,
      siteName: "Parke Ustam",
      locale: "tr_TR",
      type: "website",
    },
  };
}

export default async function DistrictPage({ params }: Props) {
  const { ilce } = await params;
  const district = getDistrictBySlug(ilce);

  if (!district) {
    notFound();
  }

  // İlçe özel veri objesi (varsayılan fallback ile)
  const info = getDistrictInfo(ilce) || {
    slug: district.slug,
    name: district.name,
    region: district.region,
    intro: `${district.name} ilçesinde 30 yılı aşkın deneyimimizle tüm konut, ofis ve villa projelerinde yüksek kaliteli laminat parke, lamine parke ve süpürgelik montajı hizmeti veriyoruz. Doğal ahşap dokusunu yaşam alanlarınıza taşıyarak uzun yıllar dayanıklı, estetik zeminler oluşturuyoruz.`,
    neighbors: [
      { name: "Kadıköy", slug: "kadikoy", region: "istanbul" as const },
      { name: "Üsküdar", slug: "uskudar", region: "istanbul" as const },
      { name: "Beşiktaş", slug: "besiktas", region: "istanbul" as const }
    ],
    highlights: [
      `${district.name} geneline aynı gün ücretsiz keşif ve numune servisi`,
      "1. sınıf suya ve çizilmeye dayanıklı laminat parke çeşitleri",
      "Tozsuz, temiz ve 1 günde garantili montaj işçiliği"
    ],
    faqs: [
      {
        question: `${district.name}'de parke döşeme işlemi ne kadar sürer?`,
        answer: `${district.name} bölgesinde ortalama 80-120 m² bir dairenin laminat parke döşeme ve süpürgelik montajını 1 gün içinde tamamlayıp teslim ediyoruz.`
      },
      {
        question: `${district.name} için keşif hizmetiniz ücretli mi?`,
        answer: `Hayır, ${district.name} genelinde tüm mahallelerimize ücretsiz keşif yapıp yerinde net ölçü ve fiyat teklifi sunuyoruz.`
      }
    ]
  };

  return (
    <div className="flex flex-col w-full">
      {/* Schema.org LocalBusiness / Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HomeAndConstructionBusiness",
            "name": `${district.name} Parke Ustası | İstanbul Parke Döşeme - Parke Ustam`,
            "image": "https://parkeustam.com/images/hero-bg.png",
            "url": `https://parkeustam.com/istanbul/${district.slug}`,
            "telephone": "+905355067130",
            "priceRange": "₺₺",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": district.name,
              "addressRegion": "İstanbul",
              "addressCountry": "TR"
            },
            "areaServed": {
              "@type": "AdministrativeArea",
              "name": `${district.name}, İstanbul`
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "148",
              "bestRating": "5",
              "worstRating": "1"
            }
          })
        }}
      />

      <Hero 
        imageAlt={`${district.name} parke ustası laminat parke döşeme istanbul`}
        customH1={
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
            <span className="block">{district.name} Parke Ustası</span>
            <span className="text-2xl sm:text-3xl lg:text-4xl text-foreground/50 font-light block my-1">|</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent block">
              İstanbul Parke Döşeme
            </span>
          </h1>
        }
        description={info.intro}
      />
      <TrustBadges />
      <Services />
      <DistrictContent district={info} />
      <PriceCalculator />
      <WhyUs />
      <Gallery districtName={district.name} />
      <Testimonials />
      <Contact initialDistrict={`${district.name} (İstanbul)`} />
    </div>
  );
}
