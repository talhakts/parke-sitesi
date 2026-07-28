"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

const reasons = [
  "Ücretsiz, yerinde ve doğru keşif",
  "Şeffaf fiyatlandırma, sürpriz maliyet yok",
  "Uygulama sonrası temiz teslimat",
  "Kaliteli malzeme kullanımı",
  "Zamanında iş teslim garantisi",
  "Uygulama sonrası destek hizmeti"
]

export function WhyUs() {
  return (
    <section className="py-20 bg-background relative border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Neden Bizi <span className="text-primary">Seçmelisiniz?</span>
              </h2>
              <p className="text-lg text-foreground/70">
                Sadece zemin döşemiyoruz, yaşam alanlarınıza değer katıyoruz. Bizi tercih eden yüzlerce mutlu müşterimiz yanılıyor olamaz.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {reasons.map((reason, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-3 p-4 rounded-xl hover:bg-muted/50 transition-colors"
                >
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                  <span className="text-foreground font-medium">{reason}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[500px] rounded-3xl overflow-hidden glass border border-white/20 shadow-2xl"
          >
            {/* Dekoratif Gradient */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-accent/30 mix-blend-overlay z-10" />
            <img 
              src="/images/service-laminate.png" 
              alt="Parke Döşeme Ustası" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.div>

        </div>
      </div>
    </section>
  )
}
