Sen kıdemli bir Next.js + teknik SEO + yerel SEO + dönüşüm (CRO) uzmanısın. Bu repo, İstanbul ve Kocaeli'nde parke döşeme hizmeti veren "Parke Ustam" (https://www.parkeustam.com) sitesidir. Amaç: sitenin "parke ustası", "[ilçe] parke ustası", "laminat parke döşeme", "parke döşeme fiyatları", "süpürgelik montajı", "parke tamiri" gibi anahtar kelimelerde Google'da (özellikle yerel aramalarda) üst sıralara çıkması ve ziyaretçilerin telefon/WhatsApp/form ile dönüşmesi.

## ÇALIŞMA YÖNTEMİ
1. Önce repoyu incele: Next.js sürümü, App Router/Pages Router, metadata yönetimi, sayfa yapısı (ana sayfa, /istanbul/[ilce], /kocaeli/[ilce], /hizmetler/*, /parke-doseme-fiyatlari), ortak bileşenler (header, footer, fiyat hesaplayıcı, form, SSS, galeri, yorumlar), next.config, sitemap/robots durumu.
2. Değişiklik yapmadan önce kısa bir bulgu özeti ve uygulama planı çıkar, sonra aşamalı uygula.
3. Her aşama sonunda build'in (`next build`) ve lint'in hatasız geçtiğini doğrula; neyi neden değiştirdiğini kısaca raporla.

## KESİN KURALLAR
- Uydurma veri üretme: sahte yorum, sahte puan, sahte müşteri sayısı, sahte adres, sahte fiyat YAZMA. Gerçek veri gereken yerlere açık `TODO(sahibi doldurmalı)` işareti ve kolay düzenlenebilir bir veri dosyası (ör. /data/*.ts) koy.
- Doğrulanamayan iddiaları ("1000+ müşteri", "30+ yıl", "%100 garanti", "Google'da 5 yıldız") bir config dosyasında topla; sahibi onaylamadıkça yumuşat veya kaldır. Garanti kapsamı/süresi için placeholder bırak.
- Aynı metni sayfalara kopyalayıp sadece ilçe adını değiştirme. İlçe içeriği gerçekten özgün olmalı (aşağıya bak).
- Mevcut URL yapısını koru; URL değiştirirsen 301 yönlendirme ekle.
- Görünür tasarım dilini koru, bozma; sadece belirtilen iyileştirmeleri yap.

## AŞAMA 1 — Hızlı düzeltmeler (öncelik: yüksek)
1. İç linkleme: Ana sayfadaki hizmet kartlarını (Parke Döşeme, Laminat, PVC, Süpürgelik, Eski Parke Sökümü, Ofis, Villa, Mağaza) ilgili sayfalara gerçek <Link> olarak bağla. Header menüsüne Hizmetler, Fiyat Rehberi, İlçeler (dropdown veya sayfa), Blog, İletişim ekle. Menü tüm sayfalarda aynı ve tutarlı olsun (ana sayfa anchor linkleri `/#hizmetler` formatında olsun ki iç sayfalardan da çalışsın).
2. Tutarlılık: Çalışma saatleri, yanıt süresi ve iletişim bilgileri TEK bir config dosyasından (site.config.ts) okunsun. Şu an "7/24" ile "08:00–21:00" ve "15 dakikada dönüş" ile "mesai saatlerinde" çelişiyor; bunları tek doğruya indir (değeri sahibine sor, geçici olarak 08:00–21:00 yaz).
3. Hero'daki "Google Puanı" etiketinin yanındaki boş/eksik değer hatasını düzelt; gerçek puan yoksa bu rozeti kaldır.
4. Yorumlar bölümü: Aynı 4 kurgu yorumun tüm sayfalarda ve farklı ilçelerle tekrarını kaldır. Yorumları /data/reviews.ts içinde tut; her yorumun gerçek isim (veya baş harf), ilçe, tarih ve kaynak alanı olsun. Gerçek yorum yoksa bölümü gizle. "Google Yorumları" başlığını yalnızca gerçekten Google'dan alınmış yorumlar için kullan. Sahte AggregateRating schema'sı ASLA ekleme.
5. KVKK: Footer'a ve forma "Aydınlatma Metni", "Gizlilik Politikası" sayfaları ve form onay kutusu ekle (şablon metin + sahibi hukukçuya kontrol ettirsin notu). Analitik/çerez kullanılıyorsa çerez bildirimi ekle.
6. Mobilde sabit (sticky) alt bar: "Ara" ve "WhatsApp" butonları. Dönüşüm olayları için (tel tıklama, WhatsApp tıklama, form gönderimi, hesaplayıcı kullanımı) analytics event'leri ekle (GA4/GTM varsa onu kullan).

## AŞAMA 2 — Teknik SEO
1. Metadata: Her sayfa için benzersiz `title` (≤60 karakter) ve `meta description` (140–160 karakter, kesilmesin) üret. İlçe sayfaları: "[İlçe] Parke Ustası | Laminat Parke, Süpürgelik | Ücretsiz Keşif". Mevcut kesik description'ları düzelt. Her sayfada doğru canonical ve og:title/og:description (fiyat sayfasında og:title bozuk, düzelt). `meta keywords`'ü kaldır (etkisiz).
2. `app/sitemap.ts` (veya muadili) ve `robots.ts` oluştur/güncelle: tüm indexlenebilir sayfalar sitemap'te olsun, lastModified doğru olsun.
3. Yapılandırılmış veri (JSON-LD), yalnızca gerçek verilerle:
   - Ana sayfa: `HomeAndConstructionBusiness`/`LocalBusiness` (name, telephone, email, areaServed ilçe listesi, openingHours, url, logo; adres gerçek değilse ekleme), `WebSite`.
   - Hizmet sayfaları: `Service` (provider, areaServed).
   - SSS bulunan her sayfa: `FAQPage`.
   - Tüm iç sayfalar: `BreadcrumbList`.
4. Performans (Core Web Vitals): hero-bg.png ve service-laminate.png dosyalarını WebP/AVIF'e çevir, `next/image` ile doğru `sizes`, hero için `priority`, diğerleri lazy. 3840px genişlik isteğini düşür. Galeri görsellerini sıkıştır, `width/height` ver (CLS). Gereksiz JS'i azalt, mümkün olan bileşenleri Server Component yap, fontlar `next/font` ile.
5. SSS accordion: Cevaplar HTML'de (DOM'da) bulunsun, yalnızca CSS ile gizlensin; JS ile sonradan yüklenmesin. `<details>` veya erişilebilir accordion kullan.
6. www/non-www ve http→https tek yönlü 301 olsun; trailing slash tutarlı olsun.
7. Erişilebilirlik: tek H1/sayfa, mantıklı H2–H3 hiyerarşisi, form label'ları, buton aria-label'ları, yeterli kontrast, klavye ile gezinme.

## AŞAMA 3 — İçerik ve sayfa mimarisi
1. Fiyat sayfası (/parke-doseme-fiyatlari): "2026" başlığına rağmen hiç fiyat yok. Fiyatları /data/pricing.ts dosyasında tut (laminat m² işçilik aralığı, süpürgelik metre fiyatı, söküm m² fiyatı, eşyalı ev/kat/asansör katsayıları) ve sayfada tablo + örnek hesaplar (50/80/100 m² daire) göster. Rakamlar yoksa placeholder ile hazırla ve bana hangi değerleri girmem gerektiğini listele. "Son güncelleme: [tarih]" ekle. Fiyat hesaplayıcı bu aynı veriyi kullansın.
2. Yeni hizmet sayfaları (mevcut laminat sayfasının kalitesinde, özgün ve teknik içerikle): /hizmetler/eski-parke-sokumu, /hizmetler/pvc-lvt-spc-zemin, /hizmetler/masif-parke-ve-sistre-cila, /hizmetler/ofis-ticari-zemin, /hizmetler/yerden-isitmali-zemin-parke. Ana sayfadaki ilgili kartlar bu sayfalara gitsin.
3. İlçe sayfaları şablonu: 8 öncelikli ilçe (Pendik, Kartal, Maltepe, Kadıköy, Tuzla, Ataşehir, Ümraniye, Gebze) için /data/districts.ts içinde ilçeye özgü içerik alanları tanımla: gerçek mahalleler, o bölgeye özgü bina/konut tipi notları (yeni site, eski apartman, villa, sahil nemi vb.), ilçeye özel 4–5 SSS, komşu ilçe linkleri, ilçeye ait gerçek iş fotoğrafı alanı. Hedef: sayfa başına en az 600–800 kelime özgün içerik. Hero'daki paragrafın aşağıda birebir tekrar etmesini düzelt. Özgün içeriği henüz hazır olmayan ilçe sayfalarını `noindex` yap ve sitemap'ten çıkar; içerik hazır olunca açılacak bir bayrak (`indexable: true`) koy.
4. Blog altyapısı (/blog, MDX veya benzeri): ilk 6 yazı taslağı: "Parke kabarması neden olur ve nasıl önlenir?", "Laminat parke mi SPC zemin mi?", "Yerden ısıtmalı evde parke seçimi", "Eşyalı evde parke değişimi nasıl yapılır?", "Derzli ve derzsiz parke farkı", "Parke döşeme maliyeti nelere göre değişir?". Her yazı ilgili hizmet ve fiyat sayfasına link versin, Article schema içersin.
5. Galeri: Tüm sayfalarda aynı 6 görsel yerine sayfaya/ilçeye özel görsel seçimi yapılabilen yapı kur. Önce/sonra karşılaştırma bileşeni ekle (gerçek fotoğraf gelene kadar gizli kalsın). Alt metinleri görsele özgü ve doğal yaz, kalıp tekrar ve anahtar kelime doldurma yapma.

## AŞAMA 4 — Dönüşüm (CRO)
1. Fiyat hesaplayıcı: İl/ilçe seçimlerinin çalıştığını, mobilde düzgün göründüğünü, doğrulama ve hata durumlarını test et. Sonuç ekranına "Bu teklifi WhatsApp'tan gönder" butonu ekle (hesaplanan değerleri mesaja otomatik doldursun) ve telefon alanı iste. Aynı hesaplayıcıyı aynı sayfada 4 kez tekrarlama; tek ve belirgin bir yerde tut.
2. Form: Sunucu tarafı doğrulama, spam koruması (honeypot veya Turnstile/reCAPTCHA), başarı/hata mesajı, talep geldiğinde e-posta ve/veya WhatsApp/Telegram bildirimi. Gönderim başarısız olursa kullanıcıya tel/WhatsApp alternatifi göster. Form alanlarına doğru `autocomplete` ve `inputmode="tel"` ver.
3. Güven bölümü: Ekip/usta tanıtımı, çalışma süreci (keşif → teklif → uygulama → teslim), garanti kapsamı, kullanılan marka/ürünler için veri odaklı bileşenler ekle (içerikler placeholder, sahibi doldurur).
4. Harita: Genel "Anadolu Yakası" embed'ini kaldır; Google İşletme Profili bağlantısı/embed için yapılandırılabilir alan koy (değer yoksa gizle).

## AŞAMA 5 — Teslim
1. Değişen/eklenen dosyaların listesi ve gerekçesi.
2. "Sahibinin doldurması gerekenler" kontrol listesi (fiyatlar, gerçek yorumlar, garanti şartları, firma unvanı/adres, GBP linki, gerçek iş fotoğrafları, çalışma saati).
3. Lighthouse (mobil) öncesi/sonrası skorları, build/lint sonucu.
4. Site dışı (kod dışı) öneriler: Google İşletme Profili optimizasyonu, Search Console/sitemap gönderimi, yorum toplama süreci, yerel dizin kayıtları.

Önce AŞAMA 1'i uygula ve bitirince özet raporla; onay beklemeden AŞAMA 2'ye geç, AŞAMA 3 ve sonrası için ise önce plan çıkarıp bana sor.