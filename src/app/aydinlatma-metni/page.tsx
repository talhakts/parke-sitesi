import { Metadata } from 'next'
import { Breadcrumb } from '@/components/layout/Breadcrumb'
import { siteConfig } from '@/config/site.config'
import { ShieldCheck, AlertCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni | Parke Ustam",
  description: "6698 sayılı Kişisel Verilerin Korunması Kanunu uyarınca kişisel verilerinizin işlenmesi ve korunmasına ilişkin aydınlatma metni.",
  alternates: {
    canonical: "/aydinlatma-metni",
  },
}

export default function AydinlatmaMetniPage() {
  return (
    <div className="flex flex-col w-full">
      <div className="pt-24 pb-4 bg-muted/30 border-b border-border/30">
        <Breadcrumb items={[{ name: "Aydınlatma Metni" }]} />
      </div>

      <main className="py-12 lg:py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-8">
          
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <ShieldCheck className="w-4 h-4" />
              <span>6698 Sayılı Kanun Kapsamında</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
              Kişisel Verilerin Korunması ve İşlenmesi Aydınlatma Metni
            </h1>
            <p className="text-sm text-foreground/60">
              Son Güncelleme: 1 Ocak 2026
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-800 dark:text-amber-300 text-xs sm:text-sm flex items-start gap-3">
            <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
            <div>
              <strong>Önemli Bilgilendirme (Şablon Metin):</strong> Bu metin standart bilgilendirme amacıyla hazırlanmıştır. İşletme sahibi tarafından kendi yasal unvan, MERSİS/vergi numarası ve veri sorumlusu irtibat detayları eklenerek hukuk danışmanı veya avukata kontrol ettirilmelidir.
            </div>
          </div>

          <article className="prose prose-neutral dark:prose-invert max-w-none space-y-6 text-foreground/80 leading-relaxed text-sm sm:text-base">
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground">1. Veri Sorumlusu</h2>
              <p>
                6698 sayılı Kişisel Verilerin Korunması Kanunu (&ldquo;KVKK&rdquo;) uyarınca, <strong>{siteConfig.name}</strong> (&ldquo;İşletme&rdquo;) olarak, veri sorumlusu sıfatıyla, kişisel verilerinizi aşağıda açıklanan amaçlar kapsamında; hukuka ve dürüstlük kurallarına uygun şekilde işleyebilecek, kaydedebilecek, saklayabilecek ve mevzuatın izin verdiği hallerde üçüncü kişilere aktarabilecektir.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground">2. İşlenen Kişisel Veriler</h2>
              <p>
                Web sitemizdeki iletişim ve keşif talep formları, telefon veya WhatsApp görüşmeleri aracılığıyla tarafımızla paylaştığınız aşağıdaki kişisel verileriniz işlenmektedir:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Kimlik Bilgisi:</strong> Adınız, soyadınız</li>
                <li><strong>İletişim Bilgisi:</strong> Telefon numaranız, e-posta adresiniz, hizmet talep edilen ilçe/bölge veya adres bilgisi</li>
                <li><strong>Müşteri İşlem Bilgisi:</strong> Talep ettiğiniz parke türü, tahmini metrekare, keşif notları ve mesaj içeriğiniz</li>
                <li><strong>İşlem Güvenliği Bilgisi:</strong> IP adresi, site içi gezinme logları</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground">3. Kişisel Verilerin İşlenme Amaçları</h2>
              <p>Toplanan kişisel verileriniz aşağıdaki amaçlarla işlenmektedir:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Parke döşeme, süpürgelik montajı veya parke tamiri hizmeti için tarafınızla iletişim kurulması</li>
                <li>Yerinde ücretsiz keşif randevusu oluşturulması ve fiyat teklifinin iletilmesi</li>
                <li>Hizmet sonrası müşteri memnuniyetinin değerlendirilmesi ve soru/taleplerin yanıtlanması</li>
                <li>Yasal yükümlülüklerin yerine getirilmesi ve olası uyuşmazlıklarda ispat yükümlülüğü</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground">4. Kişisel Verilerin Aktarılması</h2>
              <p>
                Kişisel verileriniz, kanuni zorunluluklar ve hizmetin ifası gereği yetkili kamu kurum ve kuruluşları dışında üçüncü şahıslarla ticari amaçla kesinlikle paylaşılmaz ve satılmaz. Keşif hizmetinin koordinasyonu için yalnızca yetkili usta kadromuzla paylaşılır.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground">5. KVKK Madde 11 Kapsamındaki Haklarınız</h2>
              <p>KVKK&apos;nın 11. maddesi uyarınca veri sahibi olarak;</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Kişisel verinizin işlenip işlenmediğini öğrenme,</li>
                <li>İşlenmişse buna ilişkin bilgi talep etme,</li>
                <li>İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme,</li>
                <li>Eksik veya yanlış işlenmişse düzeltilmesini isteme,</li>
                <li>KVKK&apos;da öngörülen şartlar çerçevesinde silinmesini veya yok edilmesini isteme</li>
              </ul>
              <p className="pt-2">
                haklarına sahipsiniz. Bu haklarınızı kullanmak için <a href={`mailto:${siteConfig.email}`} className="text-primary underline">{siteConfig.email}</a> e-posta adresi veya <a href={`tel:${siteConfig.phoneRaw}`} className="text-primary underline">{siteConfig.phone}</a> üzerinden bizimle iletişime geçebilirsiniz.
              </p>
            </section>
          </article>

        </div>
      </main>
    </div>
  )
}
