"use client"

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Hammer, Layers, LayoutGrid, Ruler, Trash2, Briefcase, Home, Store } from 'lucide-react'

const services = [
  {
    title: "Laminat Parke Döşeme",
    description: "Hızlı, pratik ve ekonomik derzli/derzsiz laminat parke döşeme çözümleri.",
    icon: Layers,
    href: "/hizmetler/laminat-parke-doseme",
  },
  {
    title: "Süpürgelik Montajı",
    description: "Mekana uygun lake, ahşap veya MDF süpürgeliklerde 45° gönye kesim işçiliği.",
    icon: Ruler,
    href: "/hizmetler/supurgelik-montaji",
  },
  {
    title: "Parke Tamiri ve Bakımı",
    description: "Kabaran, şişen, su hasarı görmüş veya ses yapan parkelerin lokal onarımı.",
    icon: Hammer,
    href: "/hizmetler/parke-tamiri",
  },
  {
    title: "2026 İşçilik Fiyatları",
    description: "Şeffaf metrekare maliyetleri ve canlı fiyat hesaplama rehberi.",
    icon: LayoutGrid,
    href: "/parke-doseme-fiyatlari",
  },
  {
    title: "Eski Parke Sökümü",
    description: "Zemine zarar vermeden mevcut parkelerin sökülmesi, harç temizliği ve moloz çuvallama.",
    icon: Trash2,
    href: "/parke-doseme-fiyatlari#eski-parke-sokumu",
  },
  {
    title: "Ofis Projeleri",
    description: "Çalışma alanlarına özel AC5 yoğun trafik ve tekerlekli sandalye dayanımlı zeminler.",
    icon: Briefcase,
    href: "/hizmetler/laminat-parke-doseme#ofis-projeleri",
  },
  {
    title: "Villa ve Ev",
    description: "Lüks konutlar için 10-12 mm derzli planklar ve yerden ısıtma uyumlu zeminler.",
    icon: Home,
    href: "/hizmetler/laminat-parke-doseme#villa-ve-ev",
  },
  {
    title: "PVC & LVT Zemin",
    description: "Mutfak ve ıslak hacimlere özel 100% suya dayanıklı SPC ve vinil kaplamalar.",
    icon: Store,
    href: "/hizmetler/laminat-parke-doseme#suya-dayanikli-zeminler",
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
              <Link href={service.href} className="block h-full focus:outline-none focus:ring-2 focus:ring-primary rounded-2xl">
                <Card className="h-full glass border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <service.icon className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm text-foreground/70">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
