"use client"

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ShieldCheck, MapPin, CheckCircle, HelpCircle, ArrowRight, Home } from 'lucide-react'
import { DistrictInfo } from '@/lib/districtData'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface DistrictContentProps {
  district: DistrictInfo;
}

export function DistrictContent({ district }: DistrictContentProps) {
  const isKocaeli = district.region === "Kocaeli";
  const regionName = isKocaeli ? "Kocaeli" : "İstanbul";

  return (
    <section className="py-16 bg-muted/20 border-y border-border/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl space-y-16">
        
        {/* 1. İlçe Özel Giriş Bölümü */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass p-8 md:p-10 rounded-3xl border border-primary/20 shadow-lg relative overflow-hidden"
        >
          <div className="max-w-4xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Home className="w-4 h-4" />
              <span>{district.name} Bölgesel Zemin ve Parke Uzmanlığı</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
              {district.name} Parke Döşeme ve Zemin Uygulama Hizmetleri
            </h2>

            <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">
              {district.intro}
            </p>

            {/* Doğal Ana Sayfa İç Linki */}
            <div className="pt-2 text-sm text-foreground/70 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
              <span>
                Tüm bölge ve hizmet detaylarımız için{" "}
                <Link 
                  href="/" 
                  className="font-semibold text-primary underline underline-offset-4 hover:text-primary/80 transition-colors"
                >
                  İstanbul Parke Ustası ve Parke Döşeme
                </Link>{" "}
                ana sayfamızı ziyaret edebilir, garantili işçiliğimiz hakkında detaylı bilgi alabilirsiniz.
              </span>
            </div>
          </div>
        </motion.div>

        {/* 2. Neden [İlçe] İçin Bizi Tercih Etmelisiniz? */}
        <div className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h3 className="text-3xl font-bold text-foreground">
              Neden <span className="text-primary">{district.name}</span> İçin Parke Ustam?
            </h3>
            <p className="text-foreground/70">
              {district.name} semtlerinde 30 yılı aşkın süredir sunduğumuz kaliteli ve garantili hizmetin avantajları.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {district.highlights.map((highlight, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass p-6 rounded-2xl border border-border/50 hover:border-primary/40 transition-colors space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-semibold text-foreground">
                  {idx === 0 ? "Hızlı ve Yerinde Keşif" : idx === 1 ? "Bölgeye Özel Malzeme" : "Kusursuz İşçilik"}
                </h4>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  {highlight}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 3. Komşu İlçelere Doğal İç Linkler */}
        {district.neighbors && district.neighbors.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass p-6 sm:p-8 rounded-2xl border border-border/50 space-y-4"
          >
            <div className="flex items-center gap-2 text-primary font-semibold">
              <MapPin className="w-5 h-5 shrink-0" />
              <h4>{district.name} ve Çevresinde Hizmet Verdiğimiz Komşu İlçeler</h4>
            </div>
            
            <p className="text-sm text-foreground/70 leading-relaxed">
              {district.name} parke ustası kadromuz ilçe genelindeki tüm mahallelerde aktif olarak çalışmaktadır. Ayrıca {district.name}'e komşu bölgelerdeki projeleriniz için de aynı gün ücretsiz keşif ve montaj hizmeti veriyoruz:
            </p>

            <div className="flex flex-wrap gap-2.5 pt-2">
              {district.neighbors.map((neighbor, idx) => {
                const neighborRegion = neighbor.region === "kocaeli" ? "Kocaeli" : "İstanbul";
                const href = `/${neighbor.region}/${neighbor.slug}`;
                return (
                  <Link
                    key={idx}
                    href={href}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-sm font-medium bg-background border border-border hover:border-primary hover:text-primary hover:bg-primary/5 transition-all shadow-sm"
                  >
                    <span>{neighbor.name} Parke Ustası | {neighborRegion} Parke Döşeme</span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-60" />
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* 4. İlçeye Özel SSS Bölümü ve Schema */}
        {district.faqs && district.faqs.length > 0 && (
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="text-center space-y-2">
              <div className="inline-flex items-center gap-2 text-primary text-sm font-semibold">
                <HelpCircle className="w-4 h-4" />
                <span>Merak Edilenler</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                {district.name} Parke Döşeme Hakkında Sık Sorulan Sorular
              </h3>
            </div>

            <Accordion className="w-full space-y-3">
              {district.faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`district-faq-${index}`} 
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

            {/* İlçe FAQ Schema */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "FAQPage",
                  "mainEntity": district.faqs.map((faq) => ({
                    "@type": "Question",
                    "name": faq.question,
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": faq.answer
                    }
                  }))
                })
              }}
            />
          </div>
        )}

      </div>
    </section>
  )
}
