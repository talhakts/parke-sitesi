/**
 * Blog Makaleleri Veri Dosyası
 * 
 * KURAL: Uydurma istatistik veya abartılı garanti vaadi içermez.
 * Tüm yazılar varsayılan olarak draft: true (yayına kapalı / noindex) olarak başlatılmıştır.
 * Sahibi inceleyip onayladığında draft: false yaparak Google indeksine açabilir.
 */

export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  date: string;
  readTime: string;
  category: string;
  draft: boolean; // TODO(sahibi onaylayınca false yapabilir)
  excerpt: string;
  sections: Array<{
    heading: string;
    paragraphs: string[];
    tips?: string[];
  }>;
  relatedService: {
    title: string;
    href: string;
  };
}

export const blogPosts: BlogPost[] = [
  {
    slug: "parke-kabarmasi-neden-olur-ve-nasil-onlenir",
    title: "Parke Kabarması Neden Olur ve Nasıl Önlenir?",
    metaTitle: "Parke Kabarması Neden Olur ve Nasıl Önlenir? | Usta Rehberi",
    metaDescription: "Laminat parkelerde kabarma, şişme ve bombe yapma nedenleri. Doğru dilatasyon payı, nem kontrolü ve parke tamiri çözümleri hakkında usta rehberi.",
    date: "2026-02-10",
    readTime: "5 dk okuma",
    category: "Bakım & Tamir",
    draft: true, // TODO(sahibi onaylayınca false yapacak)
    excerpt: "Laminat parkelerde en sık karşılaşılan kabarma, şişme ve bombe yapma sorunlarının nedenleri ve doğru genleşme payı (dilatasyon) teknikleri.",
    sections: [
      {
        heading: "Parke Neden Kabarır ve Bombe Yapar?",
        paragraphs: [
          "Laminat parkelerin çekirdek katmanı yüksek yoğunluklu ahşap lif levhadan (HDF) üretilir. Ahşap lifleri ortamdaki sıcaklık ve bağıl nem değişikliklerine göre mikron düzeyinde genişleyip daralır.",
          "Montaj sırasında duvar diplerinde, petek borusu etrafında veya kapı geçişlerinde yeterli dilatasyon (genleşme) boşluğu bırakılmazsa, parke genişleyecek alan bulamaz ve duvara dayanarak odanın ortasından yukarı doğru bombe yapar."
        ],
        tips: [
          "Duvar diplerinde en az 8–12 mm genleşme payı bırakılmalıdır.",
          "Genişliği veya uzunluğu 8-10 metreyi aşan büyük salonlarda T çıta genleşme profili kullanılmalıdır."
        ]
      },
      {
        heading: "Zemin Nemi ve Su Sızıntıları",
        paragraphs: [
          "Yeni dökülen beton şapın tamamen kurumadan parke döşenmesi veya alt katlardan gelen rutubet, HDF çekirdeğin nem emerek şişmesine neden olur.",
          "Montaj öncesinde beton şapın bağıl neminin ölçülmesi ve mutlaka nem bariyerli kapalı hücreli şilte serilmesi hayati önem taşır."
        ]
      },
      {
        heading: "Kabaran Parke Nasıl Tamir Edilir?",
        paragraphs: [
          "Eğer sorun sadece duvar diplerindeki sıkışmadan kaynaklanıyorsa, tüm evi sökmeye gerek yoktur. İlgili duvarın süpürgelikleri sökülerek kenarlardan pay kesilir ve parke kendiliğinden düzleşir.",
          "Su hasarı sebebiyle kilit tırnakları kırılmış veya şişmiş panellerde ise hasarlı paneller lokal olarak çıkarılıp yenisiyle değiştirilir."
        ]
      }
    ],
    relatedService: {
      title: "Parke Tamiri ve Bakımı Hizmetimiz",
      href: "/hizmetler/parke-tamiri"
    }
  },
  {
    slug: "laminat-parke-mi-spc-zemin-mi",
    title: "Laminat Parke mi SPC Zemin mi? Hangisini Seçmelisiniz?",
    metaTitle: "Laminat Parke mi SPC Zemin mi? Karşılaştırma Rehberi",
    metaDescription: "Mutfak, salon ve ıslak hacimler için laminat ile %100 suya dayanıklı SPC vinil zeminlerin dayanıklılık, ısı yalıtımı ve maliyet karşılaştırması.",
    date: "2026-02-18",
    readTime: "6 dk okuma",
    category: "Malzeme Rehberi",
    draft: true, // TODO(sahibi onaylayınca false yapacak)
    excerpt: "Mutfak, salon ve ıslak hacimler için laminat ile %100 suya dayanıklı SPC vinil zeminlerin dayanıklılık, ısı yalıtımı ve maliyet karşılaştırması.",
    sections: [
      {
        heading: "Temel Fark: Çekirdek Yapısı",
        paragraphs: [
          "Laminat parkeler ahşap talaşının reçineyle preslenmesiyle oluşan HDF tabakasına sahiptir. SPC (Stone Plastic Composite) zeminler ise kireçtaşı tozu ve polimer bağlayıcılardan oluşur.",
          "Bu temel malzeme farkı, SPC zeminlere tam su geçirmezlik kazandırırken laminat parkeleri kuru zeminler için daha doğal ve ekonomik bir alternatif haline getirir."
        ]
      },
      {
        heading: "Hangi Alan İçin Hangi Zemin Doğru?",
        paragraphs: [
          "Salon, yatak odası ve oturma odalarında ahşabın doğal sıcaklığı, tok basma hissi ve geniş renk seçenekleri nedeniyle laminat parke hala 1 numaralı tercihtir.",
          "Mutfak, antre, koridor, çamaşır odası veya evcil hayvan beslenen alanlarda ise sıvı dökülmelerine karşı %100 güvence sağlayan SPC zemin kaplamaları önerilir."
        ],
        tips: [
          "Mutfak için parke görünümü arıyorsanız SPC tercih edebilirsiniz.",
          "Bütçe optimizasyonu için salonlarda laminat, mutfakta SPC kombinasyonu yapılabilir."
        ]
      }
    ],
    relatedService: {
      title: "Suya Dayanıklı SPC & LVT Zemin Hizmetimiz",
      href: "/hizmetler/pvc-lvt-spc-zemin"
    }
  },
  {
    slug: "yerden-isitmali-evde-parke-secimi",
    title: "Yerden Isıtmalı Evde Parke Seçimi ve Döşeme Kuralları",
    metaTitle: "Yerden Isıtmalı Evde Parke Seçimi | Teknik Montaj Kuralları",
    metaDescription: "Yerden ısıtmalı evlerde kullanılacak parke kalınlığı, folyolu delikli şilte tipi ve ilk çalıştırmada dikkat edilmesi gereken termal kurallar.",
    date: "2026-02-25",
    readTime: "4 dk okuma",
    category: "Teknik Bilgi",
    draft: true, // TODO(sahibi onaylayınca false yapacak)
    excerpt: "Yerden ısıtmalı zeminlerde kullanılacak parke kalınlığı, folyolu şilte tipi ve ilk çalıştırmada dikkat edilmesi gereken termal kurallar.",
    sections: [
      {
        heading: "Isıl Direnç (R Değeri) ve Parke Kalınlığı",
        paragraphs: [
          "Yerden ısıtma sistemlerinde amaç, zemindeki sıcak su borularından gelen ısının odaya hızla yayılmasıdır. Bu nedenle parke ve şiltenin toplam ısıl direnci 0.15 m²K/W değerini geçmemelidir.",
          "Genellikle 8 mm veya 10 mm kalınlığındaki onaylı laminat parkeler en dengeli ısı transferini sağlar. Aşırı kalın masif ahşaplar ısıyı hapsederek kombi sarfiyatını artırabilir."
        ]
      },
      {
        heading: "Şilte Seçiminin Önemi",
        paragraphs: [
          "Yerden ısıtmalı evlerde asla standart kalın süngerler kullanılmamalıdır. Alüminyum folyolu, perfore (delikli) veya yüksek yoğunluklu termal şilteler tercih edilmelidir.",
          "Buhar bariyeri, şaptaki nemin parkeye ulaşmasını engellerken delikli doku sıcak havanın homojen yükselmesine izin verir."
        ]
      }
    ],
    relatedService: {
      title: "Yerden Isıtmalı Parke Döşeme Hizmetimiz",
      href: "/hizmetler/yerden-isitmali-zemin-parke"
    }
  },
  {
    slug: "esyali-evde-parke-degisimi-nasil-yapilir",
    title: "Eşyalı Evde Parke Değişimi Nasıl Yapılır?",
    metaTitle: "Eşyalı Evde Parke Değişimi Nasıl Yapılır? | Adım Adım Rehber",
    metaDescription: "Evinizi boşaltmadan oda oda eşya kaydırarak laminat parke yenileme süreci. Toz önlemleri, eşya koruma ve işçilik detayları hakkında usta tavsiyeleri.",
    date: "2026-03-01",
    readTime: "5 dk okuma",
    category: "Uygulama",
    draft: true, // TODO(sahibi onaylayınca false yapacak)
    excerpt: "Evinizi boşaltmadan oda oda eşya kaydırarak parke yenileme süreci, toz önlemleri ve işçilik detayları.",
    sections: [
      {
        heading: "Evi Boşaltmaya Gerek Var mı?",
        paragraphs: [
          "Birçok ev sahibi eşyaların taşınması zahmeti yüzünden parke değişimini erteler. Oysa deneyimli usta kadrosuyla ev tamamen boşaltılmadan da parke değişimi mümkündür.",
          "Çalışma oda oda planlanır: Önce bir odadaki mobilyalar diğer odaya veya koridora kaydırılır, zemin döşenir ve süpürgeliği takıldıktan sonra mobilyalar yerine yerleştirilerek sonraki odaya geçilir."
        ]
      },
      {
        heading: "Toz ve Güvenlik Önlemleri",
        paragraphs: [
          "Laminat parke kesimleri balkon veya açık koridorda vakumlu testereyle yapılır. Kırılacak eşyalar önceden koruma altına alınır ve mobilya ayaklarına keçe takılarak yeni parkenin çizilmesi önlenir."
        ]
      }
    ],
    relatedService: {
      title: "Laminat Parke Döşeme Hizmetimiz",
      href: "/hizmetler/laminat-parke-doseme"
    }
  },
  {
    slug: "derzli-ve-derzsiz-parke-farki",
    title: "Derzli ve Derzsiz Parke Farkı Nedir? Hangisi Daha Kullanışlı?",
    metaTitle: "Derzli ve Derzsiz Parke Farkı | Hangisi Daha Kullanışlı?",
    metaDescription: "V kanallı derzli parkelerin estetik ve dayanıklılık avantajları, temizlik kolaylığı ve derzsiz parkelerle karşılaştırması. Doğru seçim rehberi.",
    date: "2026-03-08",
    readTime: "4 dk okuma",
    category: "Tasarım & Seçim",
    draft: true, // TODO(sahibi onaylayınca false yapacak)
    excerpt: "V kanallı derzli parkelerin estetik ve dayanıklılık avantajları, temizlik kolaylığı ve derzsiz parkelerle karşılaştırması.",
    sections: [
      {
        heading: "Derz Nedir?",
        paragraphs: [
          "Derzli laminat parkelerde, panellerin birleşim kenarlarında 1-2 mm derinliğinde 45 derecelik eğim (V oluk) bulunur. Bu oluk, parke plakalarının tek tek bağımsız ahşap tahtalar gibi görünmesini sağlar.",
          "Derzsiz parkelerde ise paneller birbirine sıfır yanaşır ve zemin yekpare, tek parça bir cam gibi kesintisiz görünür."
        ]
      },
      {
        heading: "Kullanım ve Dayanıklılık Farkı",
        paragraphs: [
          "Mevsim geçişlerinde ahşap mikron düzeyinde çalıştığında derzsiz parkelerde milimetrik açılmalar göze çarpabilir. Derzli parkelerde ise V oluk bu doğal mikro boşlukları estetik bir detay olarak kamufle eder.",
          "Temizlik açısından modern derzli parkelerin kanalları hidrofobik lakla kaplı olduğundan toz veya su birikmesi yapmaz, standart nemli bezle kolayca silinir."
        ]
      }
    ],
    relatedService: {
      title: "Süpürgelik Montajı Hizmetimiz",
      href: "/hizmetler/supurgelik-montaji"
    }
  },
  {
    slug: "parke-doseme-maliyeti-nelere-gore-degisir",
    title: "Parke Döşeme Maliyeti Nelere Göre Değişir?",
    metaTitle: "Parke Döşeme Maliyeti Nelere Göre Değişir? | 2026 Rehberi",
    metaDescription: "Laminat parke m² işçilik fiyatları, süpürgelik tül metresi, eski zemin sökümü ve eşya durumunun toplam bütçeye etkisi hakkında şeffaf rehber.",
    date: "2026-03-15",
    readTime: "6 dk okuma",
    category: "Fiyat Rehberi",
    draft: true, // TODO(sahibi onaylayınca false yapacak)
    excerpt: "Laminat parke m² işçilik fiyatları, süpürgelik tül metresi, eski zemin sökümü ve eşya durumunun toplam bütçeye etkisi.",
    sections: [
      {
        heading: "Maliyeti Oluşturan Ana Kalemler",
        paragraphs: [
          "Bir parke döşeme bütçesi çıkarılırken sadece parke paket fiyatına odaklanmak yanıltıcı olabilir. Toplam maliyet genellikle 3 ana sütundan oluşur:",
          "1. Malzeme Bedeli (Parke paketleri, nem bariyerli şilte, süpürgelikler, eşik çıtaları)",
          "2. Montaj İşçiliği (Metrekare bazında kilitli döşeme ve tül metre bazında 45° gönye kesim süpürgelik işçiliği)",
          "3. Zemin Hazırlığı (Varsa eski parke sökümü, harç kazıma veya lokal tesviye şapı)"
        ]
      },
      {
        heading: "Doğru Keşif Neden Tasarruf Sağlar?",
        paragraphs: [
          "Metrekare hesabı göz kararı yapıldığında paket firesi yetmeyebilir veya fazla malzeme alınarak gereksiz masraf çıkabilir.",
          "Lazer metre ile yapılan yerinde keşif, fire payını net olarak belirler ve kapı altı kotlarını önceden tespit ederek montaj günü sürpriz masraf çıkmasını engeller."
        ]
      }
    ],
    relatedService: {
      title: "2026 Parke Döşeme Fiyat Rehberi",
      href: "/parke-doseme-fiyatlari"
    }
  }
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(p => p.slug === slug);
}
