"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Hammer, Layers, LayoutGrid, Ruler, Trash2, Briefcase, Home, Store } from 'lucide-react'

const services = [
  {
    title: "Parke Döşeme",
    description: "Masif ve lamine parke uygulamalarında profesyonel işçilik.",
    icon: LayoutGrid,
  },
  {
    title: "Laminat Parke",
    description: "Hızlı, pratik ve ekonomik laminat parke döşeme çözümleri.",
    icon: Layers,
  },
  {
    title: "PVC Zemin",
    description: "Suya dayanıklı ve uzun ömürlü LVT/PVC zemin kaplamaları.",
    icon: Hammer,
  },
  {
    title: "Süpürgelik",
    description: "Mekana uygun ahşap, plastik veya MDF süpürgelik montajı.",
    icon: Ruler,
  },
  {
    title: "Eski Parke Sökümü",
    description: "Zemine zarar vermeden mevcut parkelerin sökülüp temizlenmesi.",
    icon: Trash2,
  },
  {
    title: "Ofis Projeleri",
    description: "Çalışma alanlarına özel akustik ve dayanıklı zemin çözümleri.",
    icon: Briefcase,
  },
  {
    title: "Villa ve Ev",
    description: "Lüks konutlar için estetik ve premium zemin tasarımları.",
    icon: Home,
  },
  {
    title: "Mağaza Zeminleri",
    description: "Yoğun trafiğe uygun, şık ticari alan zemin kaplamaları.",
    icon: Store,
  }
]

export function Services() {
  return (
    <section id="hizmetler" className="py-20 bg-background/50 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold text-foreground mb-4"
          >
            Profesyonel <span className="text-primary">Hizmetlerimiz</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-foreground/70 max-w-2xl mx-auto"
          >
            Yaşam alanlarınıza değer katacak, estetik ve dayanıklı zemin kaplama çözümleri sunuyoruz.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
            >
              <Card className="h-full glass border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm text-foreground/70">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
