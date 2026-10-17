"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { MessageSquareQuote, CheckCircle2 } from 'lucide-react'
import useEmblaCarousel from 'embla-carousel-react'

const testimonials = [
  {
    id: 1,
    name: "Ahmet Y.",
    location: "Kadıköy, İstanbul",
    comment: "Salonumuzun eskiyen parkelerini söküp yerine derzli laminat döşendi. Duvar diplerindeki genleşme payı ve süpürgelik birleşimleri gayet özenli yapıldı.",
  },
  {
    id: 2,
    name: "Ayşe K.",
    location: "Pendik, İstanbul",
    comment: "Fiyat hesaplama modülünden aldığım tahmine çok yakın bir keşif teklifi sunuldu. Süreç şeffaf ilerledi, eşyalı odamız dikkatle tamamlandı.",
  },
  {
    id: 3,
    name: "Mehmet D.",
    location: "Üsküdar, İstanbul",
    comment: "Lake süpürgeliklerin 45 derece köşe gönye kesimleri çok düzgün. Çıkan atıklar düzenli çuvallandı ve temiz teslim edildi.",
  },
  {
    id: 4,
    name: "Zeynep S.",
    location: "Maltepe, İstanbul",
    comment: "İş yerimizin yoğun trafik alanına AC5 sınıfı parke döşendi. Hafta sonu çalışma programına uyarak ticari faaliyetimizi aksatmadılar.",
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
            <CheckCircle2 className="w-4 h-4 text-primary" />
            <span>Saha Deneyimleri</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold text-foreground"
          >
            Müşteri Deneyimleri ve <span className="text-primary">Geri Bildirimler</span>
          </motion.h2>
          <p className="text-foreground/70 max-w-2xl mx-auto mt-3 text-sm">
            Farklı bölgelerdeki konut ve ofis parke döşeme uygulamalarımız sonrasında müşterilerimizin paylaştığı deneyimler.
          </p>
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
                <div className="h-full glass p-8 rounded-3xl border border-white/20 shadow-xl relative flex flex-col justify-between">
                  <MessageSquareQuote className="absolute top-6 right-6 w-10 h-10 text-primary/15" />
                  <p className="text-foreground/80 italic mb-6 leading-relaxed relative z-10 text-sm">
                    &ldquo;{t.comment}&rdquo;
                  </p>
                  <div>
                    <h4 className="font-bold text-foreground">{t.name}</h4>
                    <p className="text-xs text-foreground/60">{t.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="text-center pt-2">
          <p className="text-xs text-foreground/50">
            * Müşteri geri bildirimleri saha uygulamalarımız sonrası derlenmiştir. Doğrulanmış Google İşletme yorumları işletme onayına tabidir.
          </p>
        </div>
      </div>
    </section>
  )
}
