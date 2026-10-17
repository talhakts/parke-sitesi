"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import { galleryConfig } from '@/data/gallery'
import { Sparkles } from 'lucide-react'

export function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50)

  // Gerçek fotoğraflar gelene kadar bileşen tamamen gizli kalır
  if (!galleryConfig.hasRealBeforeAfter) {
    return null;
  }

  const { beforeAfter } = galleryConfig;

  return (
    <section className="py-20 bg-background relative overflow-hidden border-t border-border/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl space-y-8">
        
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Dönüşüm Örneği</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Önce / Sonra <span className="text-primary">Uygulama Sonucu</span>
          </h2>
          <p className="text-sm text-foreground/70 max-w-xl mx-auto">
            {beforeAfter.description}
          </p>
        </div>

        <div className="relative aspect-video rounded-3xl overflow-hidden glass border border-border shadow-2xl select-none">
          {/* Sonra Görseli (Altta) */}
          <Image
            src={beforeAfter.afterSrc}
            alt={beforeAfter.afterAlt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 900px"
          />
          <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-1.5 rounded-full shadow-md z-20">
            Sonra
          </div>

          {/* Önce Görseli (Üstte, clip-path ile kırpılmış) */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${sliderPosition}%` }}
          >
            <div className="relative w-full h-full min-w-[500px] sm:min-w-[800px] lg:min-w-[1000px]">
              <Image
                src={beforeAfter.beforeSrc}
                alt={beforeAfter.beforeAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 900px"
              />
            </div>
            <div className="absolute top-4 left-4 bg-background/90 text-foreground text-xs font-bold px-3 py-1.5 rounded-full shadow-md z-20">
              Önce
            </div>
          </div>

          {/* Sürgü Çizgisi */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl z-30 cursor-ew-resize flex items-center justify-center"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="w-8 h-8 rounded-full bg-white text-foreground shadow-lg flex items-center justify-center text-xs font-bold border border-border">
              ↔
            </div>
          </div>

          {/* Range Input Overlay */}
          <input
            type="range"
            min="0"
            max="100"
            value={sliderPosition}
            onChange={(e) => setSliderPosition(Number(e.target.value))}
            className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-40"
            aria-label="Önce ve sonra karşılaştırma sürgüsü"
          />
        </div>

      </div>
    </section>
  )
}
