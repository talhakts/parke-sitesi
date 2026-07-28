"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Star, MessageSquareQuote } from 'lucide-react'
import useEmblaCarousel from 'embla-carousel-react'

const testimonials = [
  {
    id: 1,
    name: "Ahmet Yılmaz",
    location: "Kadıköy, İstanbul",
    comment: "Salonumuzun eskiyen parkelerini söküp yerine harika bir laminat döşediler. İşçilik muazzamdı ve söz verdikleri günde bitirdiler.",
    rating: 5,
  },
  {
    id: 2,
    name: "Ayşe K.",
    location: "Beşiktaş, İstanbul",
    comment: "Fiyat hesaplama modülünden aldığım fiyata çok yakın bir teklif sundular. Keşif süreci çok profesyoneldi. Kesinlikle tavsiye ederim.",
    rating: 5,
  },
  {
    id: 3,
    name: "Mehmet Demir",
    location: "Üsküdar, İstanbul",
    comment: "Süpürgelik detaylarına kadar her şey mükemmel. Temiz çalışıyorlar ve çöplerini bile alıp götürüyorlar. Güvenilir usta bulmak zor, Uzman Parke'ye teşekkürler.",
    rating: 5,
  },
  {
    id: 4,
    name: "Zeynep S.",
    location: "Maltepe, İstanbul",
    comment: "Ofisimizin zeminini baştan aşağı yenilediler. Hafta sonu çalışarak işimizi hiç aksatmadılar.",
    rating: 5,
  },
]

export function Testimonials() {
  const [emblaRef] = useEmblaCarousel({ loop: true, dragFree: true })

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
            <Star className="w-4 h-4 fill-primary" />
            <span>Mutlu Müşterilerimiz</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold text-foreground"
          >
            Google <span className="text-primary">Yorumları</span>
          </motion.h2>
        </div>

        <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
          <div className="flex gap-6 pb-8">
            {testimonials.map((t, idx) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4"
              >
                <div className="h-full glass p-8 rounded-3xl border border-white/20 shadow-xl relative">
                  <MessageSquareQuote className="absolute top-6 right-6 w-12 h-12 text-primary/10" />
                  <div className="flex gap-1 mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-foreground/80 italic mb-6 leading-relaxed relative z-10">
                    "{t.comment}"
                  </p>
                  <div>
                    <h4 className="font-bold text-foreground">{t.name}</h4>
                    <p className="text-sm text-foreground/50">{t.location}</p>
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
