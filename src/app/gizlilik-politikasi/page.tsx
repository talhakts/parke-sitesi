import { Metadata } from 'next'
import { Breadcrumb } from '@/components/layout/Breadcrumb'
import { siteConfig } from '@/config/site.config'
import { Lock, AlertCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: "Gizlilik ve Çerez Politikası | Parke Ustam",
  description: "Web sitemizi ziyaretlerinizde uygulanan gizlilik ilkeleri, çerez politikası ve veri güvenliği bilgilendirmesi.",
  alternates: {
    canonical: "/gizlilik-politikasi",
  },
}

export default function GizlilikPolitikasiPage() {
  return (
    <div className="flex flex-col w-full">
      <div className="pt-24 pb-4 bg-muted/30 border-b border-border/30">
        <Breadcrumb items={[{ name: "Gizlilik Politikası" }]} />
      </div>

      <main className="py-12 lg:py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-8">
          
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Lock className="w-4 h-4" />
              <span>Gizlilik & Güvenlik</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
              Gizlilik ve Çerez (Cookie) Politikası
            </h1>
            <p className="text-sm text-foreground/60">
              Son Güncelleme: 1 Ocak 2026
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-800 dark:text-amber-300 text-xs sm:text-sm flex items-start gap-3">
            <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
            <div>
              <strong>Önemli Bilgilendirme:</strong> Bu metin standart web gizlilik ve çerez ilkeleri esas alınarak hazırlanmıştır. Sahibi tarafından işletme gereksinimlerine göre incelenmelidir.
            </div>
          </div>

          <article className="prose prose-neutral dark:prose-invert max-w-none space-y-6 text-foreground/80 leading-relaxed text-sm sm:text-base">
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground">1. Genel Bilgilendirme</h2>
              <p>
                <strong>{siteConfig.name}</strong> ({siteConfig.url}), ziyaretçilerinin ve müşterilerinin kişisel gizliliğine azami ölçüde saygı gösterir. Bu politika, sitemizi ziyaret ettiğinizde toplanan verilerin mahiyetini, kullanım amaçlarını ve çerez yönetimini açıklar.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground">2. Çerezler (Cookies) Nedir?</h2>
              <p>
                Çerezler, ziyaret ettiğiniz web siteleri tarafından tarayıcınız aracılığıyla cihazınıza yerleştirilen küçük metin dosyalarıdır. Çerezler, web sitesinin daha verimli çalışmasını sağlamak ve site sahiplerine istatistiki bilgi sunmak amacıyla kullanılır.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground">3. Sitemizde Kullanılan Çerez Türleri</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Zorunlu Çerezler:</strong> Web sitesinin temel fonksiyonlarının çalışması ve güvenlik için teknik olarak gereklidir.
                </li>
                <li>
                  <strong>Performans ve Analitik Çerezleri:</strong> Sitemizin nasıl kullanıldığını, hangi sayfaların daha çok ziyaret edildiğini anlamamıza ve kullanıcı deneyimini iyileştirmemize yardımcı olan anonim istatistiki çerezlerdir (ör. Google Analytics).
                </li>
                <li>
                  <strong>İşlevsellik Çerezleri:</strong> Tercih ettiğiniz tema (açık/koyu mod) ve çerez onay durumunuz gibi tercihlerin hatırlanmasını sağlar.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground">4. Çerezleri Nasıl Kontrol Edebilirsiniz?</h2>
              <p>
                Tarayıcınızın ayarlarını değiştirerek çerezlerin kaydedilmesini engelleyebilir veya silinmesini sağlayabilirsiniz. Tarayıcınızda çerezleri devre dışı bırakmanız halinde sitemizin bazı özellikleri işlevini yitirebilir.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground">5. İletişim</h2>
              <p>
                Gizlilik politikamız veya çerez uygulamalarımız hakkında sorularınız için <a href={`mailto:${siteConfig.email}`} className="text-primary underline">{siteConfig.email}</a> adresi üzerinden bize ulaşabilirsiniz.
              </p>
            </section>
          </article>

        </div>
      </main>
    </div>
  )
}
