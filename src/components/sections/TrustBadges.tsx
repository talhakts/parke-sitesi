"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { ShieldCheck, Award, ThumbsUp, FileText } from 'lucide-react'

const features = [
  {
    icon: Award,
    title: "20+ Yıllık Deneyim",
    description: "Sektörde uzmanlaşmış profesyonel kadro."
  },
  {
    icon: ShieldCheck,
    title: "Garantili İşçilik",
    description: "Tüm uygulamalarımızda %100 memnuniyet garantisi."
  },
  {
    icon: ThumbsUp,
    title: "1000+ Tamamlanan İş",
    description: "Yüzlerce mutlu müşteri ve referans."
  },
  {
    icon: FileText,
    title: "Resmi Firma",
    description: "Vergi levhalı, faturalı ve güvenilir hizmet."
  }
]

export function TrustBadges() {
  return (
    <section className="py-12 bg-background border-b border-border/50 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col items-center text-center space-y-4 p-6 rounded-2xl hover:bg-muted/50 transition-colors"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
                <feature.icon className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-bold text-foreground">{feature.title}</h4>
              <p className="text-sm text-foreground/70">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
