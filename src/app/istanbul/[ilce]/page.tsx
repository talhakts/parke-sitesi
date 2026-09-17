import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getDistrictBySlug, getDistrictsByRegion } from '@/lib/districts';
import { Hero } from '@/components/sections/Hero';
import { TrustBadges } from '@/components/sections/TrustBadges';
import { Services } from '@/components/sections/Services';
import { PriceCalculator } from '@/components/sections/PriceCalculator';
import { WhyUs } from '@/components/sections/WhyUs';
import { Gallery } from '@/components/sections/Gallery';
import { Testimonials } from '@/components/sections/Testimonials';
import { FAQ } from '@/components/sections/FAQ';
import { Contact } from '@/components/sections/Contact';

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

  return {
    title: `${district.name} Parke Ustası | Profesyonel Parke Döşeme | Parke Ustam`,
    description: `${district.name} ilçesinde 30 yılı aşkın tecrübemizle garantili laminat parke, sistre cila ve parke döşeme hizmeti sunuyoruz. Ücretsiz keşif için hemen arayın!`,
    keywords: [
      `${district.name} parke`,
      `${district.name} parke ustası`,
      `${district.name} parke döşeme`,
      `${district.name} laminat parke`,
      "istanbul parke",
      "istanbul parke ustası"
    ],
    openGraph: {
      title: `${district.name} Parke Ustası | Profesyonel Parke Döşeme`,
      description: `${district.name} genelinde profesyonel parke döşeme hizmeti.`,
      url: `https://parkeustam.com/istanbul/${district.slug}`,
    },
  };
}

export default async function DistrictPage({ params }: Props) {
  const { ilce } = await params;
  const district = getDistrictBySlug(ilce);

  if (!district) {
    notFound();
  }

  return (
    <div className="flex flex-col w-full">
      <Hero 
        title={district.name}
        highlight="Parke Ustası"
        subtitle="Hizmeti"
        description={`${district.name} bölgesinde 30+ yıllık deneyim ile kaliteli, garantili ve lüks parke uygulaması. Yaşam alanlarınızı modern ve estetik zeminlerle yenileyin.`}
      />
      <TrustBadges />
      <Services />
      <PriceCalculator />
      <WhyUs />
      <Gallery />
      <Testimonials />
      <FAQ />
      <Contact />
    </div>
  );
}
