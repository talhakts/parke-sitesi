import React from 'react'
import Link from 'next/link'
import { Phone, MapPin, Mail, Clock, ShieldCheck } from 'lucide-react'
import { siteConfig } from '@/config/site.config'

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12 lg:py-16 pb-24 md:pb-16 border-t border-background/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary">{siteConfig.name}</h3>
            <p className="text-background/80 text-sm leading-relaxed">
              Uzman usta kadromuzla İstanbul (Anadolu & Avrupa Yakası) ve Kocaeli (Gebze) bölgelerinde profesyonel laminat parke döşeme, süpürgelik montajı ve zemin çözümleri sunuyoruz.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-background/60">
              <ShieldCheck className="w-4 h-4 text-primary" />
              <span>{siteConfig.claims.warrantyPeriod}</span>
            </div>
          </div>

          {/* Hızlı Linkler */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Hizmetlerimiz</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li><Link href="/hizmetler/laminat-parke-doseme" className="hover:text-primary transition-colors">Laminat Parke Döşeme</Link></li>
              <li><Link href="/hizmetler/supurgelik-montaji" className="hover:text-primary transition-colors">Süpürgelik Montajı</Link></li>
              <li><Link href="/hizmetler/parke-tamiri" className="hover:text-primary transition-colors">Parke Tamiri ve Bakımı</Link></li>
              <li><Link href="/parke-doseme-fiyatlari" className="hover:text-primary transition-colors">2026 İşçilik Fiyatları</Link></li>
              <li><Link href="/blog" className="hover:text-primary transition-colors">Zemin Rehberi ve Blog</Link></li>
              <li><Link href="/#hesaplama" className="hover:text-primary transition-colors">Fiyat Hesaplama Aracı</Link></li>
              <li><Link href="/#sss" className="hover:text-primary transition-colors">Sık Sorulan Sorular</Link></li>
            </ul>
          </div>

          {/* İletişim */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">İletişim & Keşif</h4>
            <ul className="space-y-3 text-sm text-background/80">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>{siteConfig.serviceAreas.primary}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href={`tel:${siteConfig.phoneRaw}`} className="hover:text-primary transition-colors">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-primary transition-colors">
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Çalışma Saatleri */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Çalışma Saatleri</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-primary shrink-0" />
                <span>{siteConfig.workingHours}</span>
              </li>
            </ul>
            <p className="text-xs text-background/60 leading-relaxed pt-2">
              {siteConfig.responseTime}
            </p>
          </div>
        </div>

        {/* Öncelikli İlçeler */}
        <div className="mt-12 pt-8 border-t border-background/10">
          <div className="mb-8">
            <h4 className="text-sm font-semibold text-white mb-4">Öncelikli Hizmet Bölgelerimiz (Anadolu Yakası & Gebze)</h4>
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

          {/* Yasal & KVKK Linkleri ve Telif */}
          <div className="pt-6 border-t border-background/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-background/60">
            <p>&copy; {currentYear} {siteConfig.name}. Tüm hakları saklıdır.</p>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/aydinlatma-metni" className="hover:text-primary transition-colors underline-offset-4 hover:underline">
                KVKK Aydınlatma Metni
              </Link>
              <span>•</span>
              <Link href="/gizlilik-politikasi" className="hover:text-primary transition-colors underline-offset-4 hover:underline">
                Gizlilik ve Çerez Politikası
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
