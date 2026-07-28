"use client"

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Phone, ArrowRight, Star } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/hero-bg.png" 
          alt="Lüks Parke Döşeme" 
          fill 
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent z-10" />
      </div>

      <div className="container relative z-20 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20 text-primary font-medium text-sm">
              <Star className="w-4 h-4 fill-primary" />
              <span>Google'da 5 Yıldızlı Hizmet</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
              Profesyonel <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Parke Döşeme
              </span> <br/>
              Hizmeti
            </h1>
            
            <p className="text-lg lg:text-xl text-foreground/80 max-w-xl leading-relaxed">
              20+ yıllık deneyim ile kaliteli, garantili ve lüks parke uygulaması. Yaşam alanlarınızı modern ve estetik zeminlerle yenileyin.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="rounded-full h-14 px-8 text-lg gap-2 shadow-lg shadow-primary/20 hover:scale-105 transition-transform" asChild>
                <a href="tel:+905555555555">
                  <Phone className="w-5 h-5" />
                  Hemen Ara
                </a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full h-14 px-8 text-lg gap-2 glass border-primary/30 hover:bg-primary/10 hover:scale-105 transition-transform" asChild>
                <a href="https://wa.me/905555555555" target="_blank" rel="noopener noreferrer">
                  WhatsApp Danışma
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-8 pt-8 border-t border-border/50">
              <div>
                <p className="text-3xl font-bold text-foreground">1000+</p>
                <p className="text-sm text-foreground/70">Mutlu Müşteri</p>
              </div>
              <div className="w-px h-12 bg-border/50"></div>
              <div>
                <p className="text-3xl font-bold text-foreground">20+</p>
                <p className="text-sm text-foreground/70">Yıllık Deneyim</p>
              </div>
              <div className="w-px h-12 bg-border/50"></div>
              <div className="flex flex-col justify-center">
                <div className="flex gap-1">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-accent text-accent" />)}
                </div>
                <p className="text-sm text-foreground/70 mt-1">Google Puanı</p>
              </div>
            </div>
          </motion.div>

          {/* Right Content / CTA Card */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="hidden lg:block relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 blur-3xl rounded-full" />
            <div className="relative glass p-8 rounded-3xl border border-white/20 shadow-2xl flex flex-col items-center text-center space-y-6">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                  <Star className="w-8 h-8 text-white fill-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-foreground">Ücretsiz Keşif Fırsatı</h3>
              <p className="text-foreground/70">Evinize veya iş yerinize gelip, alanınızı ölçüyor ve size en uygun fiyatı sunuyoruz.</p>
              <Button size="lg" className="w-full rounded-full h-14 text-lg" asChild>
                 <a href="#hesaplama">Tahmini Fiyat Hesapla</a>
              </Button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
