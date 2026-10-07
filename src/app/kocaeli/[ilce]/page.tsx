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

  const districtInfo = getDistrictInfo(ilce);
  const description = districtInfo?.intro 
    ? `${districtInfo.intro.slice(0, 155)}...`
    : `${district.name} ilçesinde profesyonel laminat parke, sistre cila ve parke döşeme hizmeti. 30 yılı aşkın tecrübemizle ücretsiz keşif için bizi arayın!`;

  return {
    title: `${district.name} Parke Ustası | Kocaeli Parke Döşeme`,
    description,
    keywords: [
      `${district.name} parke ustası`,
      `${district.name} parke döşeme`,
      `${district.name} laminat parke`,
      `${district.name} parke`,
      "kocaeli parke ustası",
      "kocaeli parke döşeme"
    ],
    alternates: {
      canonical: `/kocaeli/${district.slug}`,
    },
    openGraph: {
      title: `${district.name} Parke Ustası | Kocaeli Parke Döşeme`,
      description: `${district.name} genelinde profesyonel ve garantili parke döşeme hizmeti.`,
      url: `https://www.parkeustam.com/kocaeli/${district.slug}`,
      siteName: "Parke Ustam",
      locale: "tr_TR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${district.name} Parke Ustası | Kocaeli Parke Döşeme`,
      description: `${district.name} genelinde profesyonel ve garantili parke döşeme hizmeti.`,
    },
  };
}

export default async function KocaeliDistrictPage({ params }: Props) {
  const { ilce } = await params;
  const district = getDistrictBySlug(ilce);

  if (!district || district.region !== 'Kocaeli') {
    notFound();
  }

  const info = getDistrictInfo(ilce) || {
    slug: district.slug,
    name: district.name,
    region: district.region,
    intro: `${district.name} genelinde sanayi, ticaret ve konut projelerinde uzman ekibimizle kaliteli laminat parke ve süpürgelik montajı sunuyoruz. 30 yılı aşkın tecrübemiz ve yerel ekibimizle aynı gün keşif yapıyoruz.`,
    neighbors: [
      { name: "Gebze", slug: "gebze", region: "kocaeli" as const },
      { name: "İzmit", slug: "izmit", region: "kocaeli" as const },
      { name: "Tuzla", slug: "tuzla", region: "istanbul" as const }
    ],
    highlights: [
      `${district.name} bölgesine aynı gün hızlı ve ücretsiz keşif`,
      "Yoğun kullanıma dayanıklı 32. ve 33. sınıf ticari & konut parkeleri",
      "1 günde temiz teslimat ve işçilik garantisi"
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

  return (
    <div className="flex flex-col w-full">
      {/* Schema.org LocalBusiness / Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HomeAndConstructionBusiness",
            "name": `${district.name} Parke Ustası | Kocaeli Parke Döşeme - Parke Ustam`,
            "image": "https://www.parkeustam.com/images/hero-bg.png",
            "url": `https://www.parkeustam.com/kocaeli/${district.slug}`,
            "telephone": "+905355067130",
            "priceRange": "₺₺",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": district.name,
              "addressRegion": "Kocaeli",
              "addressCountry": "TR"
            },
            "areaServed": {
              "@type": "AdministrativeArea",
              "name": `${district.name}, Kocaeli`
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
        imageAlt={`${district.name} parke ustası kocaeli parke döşeme`}
        customH1={
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
            <span className="block">{district.name} Parke Ustası</span>
            <span className="text-2xl sm:text-3xl lg:text-4xl text-foreground/50 font-light block my-1">|</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent block">
              Kocaeli Parke Döşeme
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
      <Contact initialDistrict={`${district.name} (Kocaeli)`} />
    </div>
  );
}
