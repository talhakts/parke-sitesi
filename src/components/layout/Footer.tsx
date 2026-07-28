import React from 'react'
import Link from 'next/link'
import { Phone, MapPin, Mail, Clock } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary">Parke Ustam</h3>
            <p className="text-background/80 text-sm leading-relaxed">
              20 yılı aşkın tecrübemizle İstanbul, Anadolu Yakası, Gebze ve Kocaeli bölgelerinde profesyonel parke döşeme çözümleri sunuyoruz.
            </p>
          </div>

          {/* Hızlı Linkler */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Hızlı Linkler</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li><Link href="#hizmetler" className="hover:text-primary transition-colors">Hizmetlerimiz</Link></li>
              <li><Link href="#hesaplama" className="hover:text-primary transition-colors">Fiyat Hesaplama</Link></li>
              <li><Link href="#galeri" className="hover:text-primary transition-colors">Referanslar</Link></li>
              <li><Link href="#sss" className="hover:text-primary transition-colors">Sık Sorulan Sorular</Link></li>
            </ul>
          </div>

          {/* İletişim */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">İletişim</h4>
            <ul className="space-y-3 text-sm text-background/80">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>İstanbul, Anadolu Yakası, Gebze, Kocaeli</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:+905355067130" className="hover:text-primary transition-colors">+90 535 506 71 30</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:info@parkeustam.com" className="hover:text-primary transition-colors">info@parkeustam.com</a>
              </li>
            </ul>
          </div>

          {/* Çalışma Saatleri */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Çalışma Saatleri</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-primary shrink-0" />
                <span>7 Gün 24 Saat Hizmetinizdeyiz</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/10 text-center text-sm text-background/60">
          <p>&copy; {new Date().getFullYear()} Parke Ustam. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  )
}
