"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Contact() {
  return (
    <section id="iletisim" className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 blur-[100px] rounded-full" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Bizimle <span className="text-primary">İletişime Geçin</span>
              </h2>
              <p className="text-lg text-foreground/70">
                Ücretsiz keşif talebi, fiyat teklifi veya merak ettiğiniz her türlü soru için bize ulaşabilirsiniz.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 glass rounded-2xl border border-white/20">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground/50">Telefon / WhatsApp</p>
                  <a href="tel:+905555555555" className="text-xl font-bold text-foreground hover:text-primary transition-colors">
                    +90 555 555 55 55
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 glass rounded-2xl border border-white/20">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground/50">E-posta</p>
                  <a href="mailto:info@uzmanparke.com" className="text-xl font-bold text-foreground hover:text-primary transition-colors">
                    info@uzmanparke.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 glass rounded-2xl border border-white/20">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground/50">Adres</p>
                  <p className="text-lg font-bold text-foreground">
                    Örnek Mah. Parke Cad. No:123 Kadıköy / İstanbul
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass p-8 md:p-10 rounded-3xl border border-white/20 shadow-2xl relative"
          >
            <div className="text-center space-y-6">
               <div className="w-20 h-20 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-6">
                 <Phone className="w-10 h-10 text-primary" />
               </div>
               <h3 className="text-2xl font-bold text-foreground">Hemen Randevu Alın</h3>
               <p className="text-foreground/70">
                 İletişim formumuz yapım aşamasındadır. Bize telefon veya WhatsApp üzerinden 7/24 ulaşabilirsiniz. 
               </p>
               <Button size="lg" className="w-full text-lg h-14 rounded-full gap-2 shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform" asChild>
                 <a href="https://wa.me/905555555555" target="_blank" rel="noopener noreferrer">
                   WhatsApp'tan Yazın <ArrowRight className="w-5 h-5" />
                 </a>
               </Button>
               <Button size="lg" variant="outline" className="w-full text-lg h-14 rounded-full gap-2 mt-4 glass border-primary/30 text-primary hover:bg-primary hover:text-white transition-all" asChild>
                 <a href="tel:+905555555555">
                   Telefonla Arayın
                 </a>
               </Button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
