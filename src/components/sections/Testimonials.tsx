"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { MessageSquareQuote, CheckCircle2 } from 'lucide-react'
import useEmblaCarousel from 'embla-carousel-react'
import { reviews } from '@/data/reviews'

interface TestimonialsProps {
  districtName?: string;
}

export function Testimonials({ districtName }: TestimonialsProps) {
  const [emblaRef] = useEmblaCarousel({ loop: true, dragFree: true })

  // Eğer gerçek veri eklenmemişse bölümü gizle (Anti-fake review kuralı)
  if (!reviews || reviews.length === 0) {
    return null;
  }

  // İlçeye özel filtreleme veya genel yorumlar
  const filteredReviews = districtName 
    ? reviews.filter(r => r.district.toLowerCase() === districtName.toLowerCase())
    : reviews;

  const displayReviews = filteredReviews.length > 0 ? filteredReviews : reviews;

  return (
    <section id="yorumlar" className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20 text-primary font-medium text-sm mb-4"
          >
            <CheckCircle2 className="w-4 h-4 text-primary" />
            <span>Müşteri Geri Bildirimleri</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold text-foreground"
          >
            Gerçek Müşteri <span className="text-primary">Deneyimleri</span>
          </motion.h2>
          <p className="text-foreground/70 max-w-2xl mx-auto mt-3 text-sm">
            Hizmet verdiğimiz müşterilerimizin tamamlanan zemin ve parke döşeme projeleri sonrasındaki değerlendirmeleri.
          </p>
        </div>

        <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
          <div className="flex gap-6 pb-8">
            {displayReviews.map((t, idx) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4"
              >
                <div className="h-full glass p-8 rounded-3xl border border-white/20 shadow-xl relative flex flex-col justify-between">
                  <MessageSquareQuote className="absolute top-6 right-6 w-10 h-10 text-primary/15" />
                  <p className="text-foreground/80 italic mb-6 leading-relaxed relative z-10 text-sm">
                    &ldquo;{t.comment}&rdquo;
                  </p>
                  <div>
                    <h4 className="font-bold text-foreground">{t.authorName}</h4>
                    <p className="text-xs text-foreground/60">{t.district}, {t.city} • <span className="text-primary font-medium">{t.service}</span></p>
                    <p className="text-[10px] text-foreground/40 mt-1">Kaynak: {t.source === 'google' ? 'Google Haritalar' : 'Doğrulanmış İş Müşterisi'}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
