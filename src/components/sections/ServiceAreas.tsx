"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'

const districts = [
  "Kadıköy", "Üsküdar", "Ataşehir", "Maltepe", "Kartal", "Pendik",
  "Beşiktaş", "Şişli", "Sarıyer", "Beykoz", "Ümraniye", "Çekmeköy"
]

export function ServiceAreas() {
  return (
    <section className="py-20 bg-muted/20 border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold text-foreground">
              Hizmet <span className="text-primary">Bölgelerimiz</span>
            </h2>
            <p className="text-lg text-foreground/70 max-w-lg">
              İstanbul'un her iki yakasında da profesyonel parke döşeme hizmeti sunuyoruz. Size bir telefon kadar yakınız.
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
              {districts.map((district, idx) => (
                <div key={idx} className="flex items-center gap-2 text-foreground/80 font-medium">
                  <MapPin className="w-4 h-4 text-primary shrink-0" />
                  <span>{district}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-[400px] w-full rounded-3xl overflow-hidden shadow-2xl glass border border-white/20 relative bg-muted flex items-center justify-center"
          >
            {/* Placeholder for Google Maps */}
            <div className="absolute inset-0 bg-primary/5 flex flex-col items-center justify-center text-center p-8">
              <MapPin className="w-16 h-16 text-primary/30 mb-4" />
              <p className="text-foreground/50 font-medium">Google Haritalar Entegrasyonu</p>
              <p className="text-xs text-foreground/40 mt-2">Bu alana iframe ile harita eklenecektir.</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
