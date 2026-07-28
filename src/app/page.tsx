import { Hero } from "@/components/sections/Hero"
import { TrustBadges } from "@/components/sections/TrustBadges"
import { Services } from "@/components/sections/Services"
import { PriceCalculator } from "@/components/sections/PriceCalculator"
import { WhyUs } from "@/components/sections/WhyUs"
import { Gallery } from "@/components/sections/Gallery"
import { Testimonials } from "@/components/sections/Testimonials"
import { ServiceAreas } from "@/components/sections/ServiceAreas"
import { FAQ } from "@/components/sections/FAQ"
import { Contact } from "@/components/sections/Contact"

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <TrustBadges />
      <Services />
      <PriceCalculator />
      <WhyUs />
      <Gallery />
      <Testimonials />
      <ServiceAreas />
      <FAQ />
      <Contact />
    </div>
  )
}
