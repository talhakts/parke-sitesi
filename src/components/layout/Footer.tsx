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
              Uzman usta kadromuzla İstanbul, Anadolu Yakası, Gebze ve Kocaeli bölgelerinde profesyonel parke döşeme ve zemin çözümleri sunuyoruz.
            </p>
          </div>

          {/* Hızlı Linkler */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Hizmetlerimiz</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li><Link href="/hizmetler/laminat-parke-doseme" className="hover:text-primary transition-colors">Laminat Parke Döşeme</Link></li>
              <li><Link href="/hizmetler/supurgelik-montaji" className="hover:text-primary transition-colors">Süpürgelik Montajı</Link></li>
              <li><Link href="/hizmetler/parke-tamiri" className="hover:text-primary transition-colors">Parke Tamiri ve Bakımı</Link></li>
              <li><Link href="/parke-doseme-fiyatlari" className="hover:text-primary transition-colors">2026 İşçilik Fiyatları</Link></li>
              <li><Link href="/#hesaplama" className="hover:text-primary transition-colors">Fiyat Hesaplama Aracı</Link></li>
              <li><Link href="/#sss" className="hover:text-primary transition-colors">Sık Sorulan Sorular</Link></li>
            </ul>
          </div>

          {/* İletişim */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">İletişim</h4>
            <ul className="space-y-3 text-sm text-background/80">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>İstanbul Anadolu Yakası, Gebze & Tüm İstanbul</span>
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
                <span>Haftanın 7 Günü: 08:00 - 21:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/10">
          <div className="mb-8">
            <h4 className="text-sm font-semibold text-white mb-4">Öncelikli Hizmet Bölgelerimiz (Anadolu Yakası & Çevresi)</h4>
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-background/60">
              <Link href="/istanbul/pendik" className="hover:text-primary transition-colors font-medium text-white/90">Pendik Parke Ustası</Link>
              <Link href="/istanbul/kartal" className="hover:text-primary transition-colors">Kartal Parke Ustası</Link>
              <Link href="/istanbul/maltepe" className="hover:text-primary transition-colors">Maltepe Parke Ustası</Link>
              <Link href="/istanbul/tuzla" className="hover:text-primary transition-colors">Tuzla Parke Ustası</Link>
              <Link href="/istanbul/kadikoy" className="hover:text-primary transition-colors">Kadıköy Parke Ustası</Link>
              <Link href="/istanbul/umraniye" className="hover:text-primary transition-colors">Ümraniye Parke Ustası</Link>
              <Link href="/istanbul/atasehir" className="hover:text-primary transition-colors">Ataşehir Parke Ustası</Link>
              <Link href="/istanbul/sancaktepe" className="hover:text-primary transition-colors">Sancaktepe Parke Ustası</Link>
              <Link href="/istanbul/sultanbeyli" className="hover:text-primary transition-colors">Sultanbeyli Parke Ustası</Link>
              <Link href="/istanbul/cekmekoy" className="hover:text-primary transition-colors">Çekmeköy Parke Ustası</Link>
              <Link href="/istanbul/uskudar" className="hover:text-primary transition-colors">Üsküdar Parke Ustası</Link>
              <Link href="/kocaeli/gebze" className="hover:text-primary transition-colors">Gebze Parke Ustası</Link>
              <Link href="/kocaeli/darica" className="hover:text-primary transition-colors">Darıca Parke Ustası</Link>
              <Link href="/kocaeli/cayirova" className="hover:text-primary transition-colors">Çayırova Parke Ustası</Link>
            </div>
          </div>
          <div className="text-center text-sm text-background/60">
            <p>&copy; {new Date().getFullYear()} Parke Ustam. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

