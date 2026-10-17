"use client"

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { getGalleryItems } from '@/data/gallery'
import { BeforeAfter } from '@/components/sections/BeforeAfter'

interface GalleryProps {
  districtName?: string;
  districtSlug?: string;
}

export function Gallery({ districtName, districtSlug }: GalleryProps) {
  const projects = getGalleryItems(districtSlug || districtName);

  return (
    <>
      <section id="galeri" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
              Uygulama ve Referans <span className="text-primary">Galerisi</span>
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              {districtName 
                ? `${districtName} bölgesinde sunduğumuz profesyonel parke döşeme ve süpürgelik işçiliği standartlarımızı inceleyin.`
                : "Yüksek standartlı laminat parke döşeme ve süpürgelik montajı işçiliklerimizden örnekler."}
            </p>
          </div>

          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {projects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group relative rounded-2xl overflow-hidden glass border border-white/10 shadow-lg aspect-video"
                >
                  <Image
                    src={project.src}
                    alt={project.alt}
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <h3 className="text-white text-lg font-bold">{project.title}</h3>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Gerçek fotoğraf onaylanınca görünür olan Önce/Sonra bileşeni */}
      <BeforeAfter />
    </>
  )
}
