import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getDistrictBySlug, getDistrictsByRegion } from '@/lib/districts';
import { getDistrictInfo } from '@/lib/districtData';
import { Hero } from '@/components/sections/Hero';
import { TrustBadges } from '@/components/sections/TrustBadges';
import { Services } from '@/components/sections/Services';
import { PriceCalculator } from '@/components/sections/PriceCalculator';
import { WhyUs } from '@/components/sections/WhyUs';
import { Gallery } from '@/components/sections/Gallery';
import { Testimonials } from '@/components/sections/Testimonials';
import { Contact } from '@/components/sections/Contact';
import { DistrictContent } from '@/components/sections/DistrictContent';
import { Breadcrumb } from '@/components/layout/Breadcrumb';

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
  const title = districtInfo?.metaTitle || `${district.name} Parke Ustası | Laminat Parke ve Süpürgelik`;
  const description = districtInfo?.metaDescription || (districtInfo?.intro 
    ? `${districtInfo.intro.slice(0, 155)}...`
    : `${district.name}'de laminat parke döşeme, süpürgelik montajı ve parke tamiri hizmeti. Uzman işçilik, şeffaf fiyatlar ve ücretsiz keşif için arayın!`);

  return {
    title,
    description,
    keywords: [
      `${district.name} parke ustası`,
      `${district.name} parke döşeme`,
      `${district.name} laminat parke`,
      `${district.name} süpürgelik montajı`,
      `${district.name} parke tamiri`,
      "istanbul parke ustası",
      "istanbul parke döşeme"
    ],
    alternates: {
      canonical: `/istanbul/${district.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://www.parkeustam.com/istanbul/${district.slug}`,
      siteName: "Parke Ustam",
      locale: "tr_TR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
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
    intro: `${district.name} ilçesinde konut, ofis ve villa projelerinde yüksek kaliteli laminat parke, süpürgelik montajı ve zemin tamiri hizmeti veriyoruz. Doğal ahşap dokusunu yaşam alanlarınıza taşıyarak uzun yıllar dayanıklı, estetik zeminler oluşturuyoruz.`,
    neighbors: [
      { name: "Kadıköy", slug: "kadikoy", region: "istanbul" as const },
      { name: "Üsküdar", slug: "uskudar", region: "istanbul" as const },
      { name: "Beşiktaş", slug: "besiktas", region: "istanbul" as const }
    ],
    highlights: [
      `${district.name} geneline yerinde ücretsiz keşif ve numune servisi`,
      "1. sınıf neme ve çizilmeye dayanıklı laminat parke çeşitleri",
      "Tozsuz, temiz ve özenli usta işçiliği"
    ],
    faqs: [
      {
        question: `${district.name}'de parke döşeme işlemi ne kadar sürer?`,
        answer: `${district.name} bölgesinde standart boş bir dairenin laminat parke döşeme ve süpürgelik montajı genellikle 1 iş günü içinde tamamlanıp teslim edilir.`
      },
      {
        question: `${district.name} için keşif hizmetiniz ücretli mi?`,
        answer: `Hayır, ${district.name} genelinde tüm mahallelerimize ücretsiz keşif yapıp yerinde net ölçü ve fiyat teklifi sunuyoruz.`
      }
    ]
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "HomeAndConstructionBusiness",
        "@id": "https://www.parkeustam.com/#business",
        "name": "Parke Ustam",
        "url": "https://www.parkeustam.com",
        "image": "https://www.parkeustam.com/images/hero-bg.png",
        "telephone": "+905355067130",
        "priceRange": "₺₺",
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": `${district.name}, İstanbul`
        }
      },
      {
        "@type": "Service",
        "name": `${district.name} Parke Döşeme ve Parke Ustası Hizmeti`,
        "provider": {
          "@id": "https://www.parkeustam.com/#business"
        },
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": `${district.name}, İstanbul`
        },
        "description": info.intro,
        "serviceType": "Laminat Parke Döşeme, Süpürgelik Montajı, Parke Tamiri"
      }
    ]
  };

  const h1Heading = info.customH1Text ? (
    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
      <span className="block">{info.customH1Text}</span>
    </h1>
  ) : (
    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
      <span className="block">{district.name} Parke Ustası</span>
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent block">
        ve Laminat Parke Döşeme
      </span>
    </h1>
  );

  return (
    <div className="flex flex-col w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd)
        }}
      />

      <div className="pt-20 bg-background/80 border-b border-border/30">
        <Breadcrumb items={[
          { name: 'İstanbul', href: '/' },
          { name: `${district.name} Parke Ustası` }
        ]} />
      </div>

      <Hero 
        imageAlt={`${district.name} parke ustası laminat parke döşeme istanbul`}
        customH1={h1Heading}
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
