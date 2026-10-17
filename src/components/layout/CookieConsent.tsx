"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Cookie, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    try {
      const consent = localStorage.getItem('parke_cookie_consent')
      if (!consent) {
        // İlk girişte ufak bir gecikmeyle göster
        const timer = setTimeout(() => setIsVisible(true), 1200)
        return () => clearTimeout(timer)
      }
    } catch {
      // LocalStorage erişim kısıtlıysa sessizce geç
    }
  }, [])

  const acceptCookies = () => {
    try {
      localStorage.setItem('parke_cookie_consent', 'accepted')
    } catch {
      // ignore
    }
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-20 md:bottom-6 left-4 right-4 md:left-6 md:right-auto md:max-w-md z-50 animate-in fade-in slide-in-from-bottom-5 duration-300">
      <div className="p-4 rounded-2xl bg-background/95 backdrop-blur-xl border border-border shadow-2xl space-y-3">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2 text-primary font-semibold text-sm">
            <Cookie className="w-5 h-5 shrink-0" />
            <span>Çerez ve Gizlilik Tercihleri</span>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="text-foreground/50 hover:text-foreground p-1 rounded-md"
            aria-label="Kapat"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <p className="text-xs text-foreground/75 leading-relaxed">
          Sitemizde deneyiminizi geliştirmek ve ziyaretçi istatistiklerini analiz edebilmek için çerezler kullanılmaktadır. Detaylı bilgi için{' '}
          <Link href="/gizlilik-politikasi" className="text-primary underline underline-offset-2 hover:text-primary/80">
            Gizlilik ve Çerez Politikamızı
          </Link>{' '}
          inceleyebilirsiniz.
        </p>

        <div className="flex items-center gap-2 pt-1">
          <Button
            size="sm"
            onClick={acceptCookies}
            className="flex-1 h-9 rounded-xl text-xs font-semibold"
          >
            Kabul Ediyorum
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => setIsVisible(false)}
            className="h-9 rounded-xl text-xs"
          >
            Kapat
          </Button>
        </div>
      </div>
    </div>
  )
}
