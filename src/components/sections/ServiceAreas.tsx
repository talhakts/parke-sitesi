"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'

const districts = [
  "Kadıköy", "Üsküdar", "Ataşehir", "Maltepe", "Kartal", "Pendik",
  "Tuzla", "Gebze", "Darıca", "Çayırova", "Körfez", "İzmit"
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
              İstanbul Anadolu Yakası, Gebze ve Kocaeli bölgelerinde profesyonel parke döşeme hizmeti sunuyoruz. Size bir telefon kadar yakınız.
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
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d192737.56156540673!2d29.2882372793268!3d40.83295966453965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cad1df6810b411%3A0xcda658516089bd01!2sGebze%2C%20Kocaeli!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-500"
            />
          </motion.div>

        </div>
      </div>
    </section>
  )
}
