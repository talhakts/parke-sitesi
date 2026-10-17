"use client"

import React from 'react'
import { Phone, MessageCircle } from 'lucide-react'
import { siteConfig } from '@/config/site.config'
import { trackPhoneCall, trackWhatsAppClick } from '@/lib/analytics'

export function StickyMobileBar() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsappRaw}?text=${encodeURIComponent(
    'Merhaba Parke Ustam, parke döşeme hizmeti ve ücretsiz keşif hakkında bilgi almak istiyorum.'
  )}`;

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-2.5 bg-background/95 backdrop-blur-md border-t border-border shadow-[0_-8px_25px_rgba(0,0,0,0.12)]">
      <div className="container mx-auto px-2 flex items-center gap-2 max-w-md">
        {/* Hemen Ara Butonu */}
        <a
          href={`tel:${siteConfig.phoneRaw}`}
          onClick={() => trackPhoneCall('sticky_bar')}
          className="flex-1 flex items-center justify-center gap-2 h-12 rounded-xl bg-primary text-primary-foreground font-semibold text-sm shadow-md hover:bg-primary/90 active:scale-[0.98] transition-all"
          aria-label="Telefon ile Ustayla Görüş"
        >
          <Phone className="w-4 h-4 animate-bounce" />
          <span>Hemen Ara</span>
        </a>

        {/* WhatsApp Butonu */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsAppClick('sticky_bar')}
          className="flex-1 flex items-center justify-center gap-2 h-12 rounded-xl bg-[#25D366] text-white font-semibold text-sm shadow-md hover:bg-[#20ba59] active:scale-[0.98] transition-all"
          aria-label="WhatsApp ile Teklif İste"
        >
          <MessageCircle className="w-4 h-4 fill-white" />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  )
}
