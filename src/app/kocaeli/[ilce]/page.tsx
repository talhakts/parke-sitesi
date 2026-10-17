import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getDistrictBySlug, getDistrictsByRegion } from '@/lib/districts';
import { getDistrictInfo, isDistrictIndexable, DistrictInfo } from '@/lib/districtData';
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
  const kocaeli = getDistrictsByRegion('Kocaeli');

  return kocaeli.map((district) => ({
    ilce: district.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { ilce } = await params;
  const district = getDistrictBySlug(ilce);

  if (!district || district.region !== 'Kocaeli') {
    return {};
  }

  const title = `${district.name} Parke Ustası | Laminat Parke & Süpürgelik`;
  const description = `${district.name} genelinde laminat parke döşeme, süpürgelik montajı ve zemin tamiri. Usta işçiliği, şeffaf fiyatlar ve yerinde ücretsiz keşif için hemen arayın.`;
  const isIndexable = isDistrictIndexable(district.slug);

  return {
    title,
    description,
    robots: {
      index: isIndexable,
      follow: true,
    },
    alternates: {
      canonical: `/kocaeli/${district.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://www.parkeustam.com/kocaeli/${district.slug}`,
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

export default async function KocaeliDistrictPage({ params }: Props) {
  const { ilce } = await params;
  const district = getDistrictBySlug(ilce);

  if (!district || district.region !== 'Kocaeli') {
    notFound();
  }

  const fallbackInfo: DistrictInfo = {
    slug: district.slug,
    name: district.name,
    region: district.region,
    indexable: false,
    verified: false,
    intro: `${district.name} genelinde sanayi, ticaret ve konut projelerinde uzman ekibimizle kaliteli laminat parke ve süpürgelik montajı sunuyoruz. Yerel usta kadromuzla ücretsiz keşif desteği sağlıyoruz.`,
    neighbors: [
      { name: "Gebze", slug: "gebze", region: "kocaeli" as const },
      { name: "İzmit", slug: "izmit", region: "kocaeli" as const },
      { name: "Tuzla", slug: "tuzla", region: "istanbul" as const }
    ],
    highlights: [
      `${district.name} bölgesine yerinde ücretsiz keşif`,
      "Yoğun kullanıma dayanıklı 32. ve 33. sınıf ticari & konut parkeleri",
      "Temiz teslimat ve özenli montaj işçiliği"
    ],
    faqs: [
      {
        question: `${district.name}'de parke montajı ne kadar sürer?`,
        answer: `${district.name} bölgesinde standart bir dairenin laminat parke ve süpürgelik montajı 1 günde tamamlanır.`
      },
      {
        question: `${district.name} için keşif ücretli midir?`,
        answer: `Hayır, ${district.name} ve çevre mahallelerde keşif hizmetimiz tamamen ücretsizdir.`
      }
    ]
  };

  const info = getDistrictInfo(ilce) || fallbackInfo;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "HomeAndConstructionBusiness",
        "@id": "https://www.parkeustam.com/#business",
        "name": "Parke Ustam",
        "url": "https://www.parkeustam.com",
        "image": "https://www.parkeustam.com/images/hero-bg.webp",
        "telephone": "+905355067130",
        "priceRange": "₺₺",
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": `${district.name}, Kocaeli`
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
          "name": `${district.name}, Kocaeli`
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
        ve Kocaeli Parke Döşeme
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
          { name: 'Kocaeli', href: '/' },
          { name: `${district.name} Parke Ustası` }
        ]} />
      </div>

      <Hero 
        imageAlt={`${district.name} parke ustası kocaeli parke döşeme`}
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
      <Contact initialDistrict={`${district.name} (Kocaeli)`} />
    </div>
  );
}
