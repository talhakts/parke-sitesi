export interface DistrictInfo {
  slug: string;
  name: string;
  region: "Avrupa Yakası" | "Anadolu Yakası" | "Kocaeli";
  intro: string;
  neighbors: { name: string; slug: string; region: "istanbul" | "kocaeli" }[];
  highlights: string[];
  faqs: { question: string; answer: string }[];
}

export const districtData: Record<string, DistrictInfo> = {
  // --- İSTANBUL ANADOLU YAKASI ---
  "kadikoy": {
    slug: "kadikoy",
    name: "Kadıköy",
    region: "Anadolu Yakası",
    intro: "Kadıköy'ün tarihi apartmanlarından sahil şeridindeki modern rezidanslarına kadar tüm konut tiplerinde uzman zemin çözümleri sunuyoruz. Moda, Caddebostan, Suadiye ve Fenerbahçe gibi nem ve yoğun kullanıma maruz kalan bölgelerde yüksek dayanımlı laminat ve lamine parke montajı yapıyoruz. 30 yılı aşkın tecrübemizle Kadıköy parke ustası arayışınızda titiz işçilik ve garantili montaj sağlıyoruz.",
    neighbors: [
      { name: "Üsküdar", slug: "uskudar", region: "istanbul" },
      { name: "Ataşehir", slug: "atasehir", region: "istanbul" },
      { name: "Maltepe", slug: "maltepe", region: "istanbul" }
    ],
    highlights: [
      "Kadıköy'ün tüm mahallelerine aynı gün ücretsiz keşif ve numune servisi",
      "Tarihi binalara ve modern dairelere özel ses yalıtımlı zemin şiltesi uygulaması",
      "Tozsuz sistre cila ve derzli laminat parke montajında 1. sınıf işçilik"
    ],
    faqs: [
      {
        question: "Kadıköy'de parke döşeme işlemi ne kadar sürer?",
        answer: "Kadıköy bölgesindeki standart 2+1 ve 3+1 dairelerde laminat parke montajını genellikle 1 gün içinde tamamlayıp süpürgelikleriyle teslim ediyoruz."
      },
      {
        question: "Sahil kesimindeki binalar için hangi parkeyi öneriyorsunuz?",
        answer: "Kadıköy sahil hattındaki nem oranını dengelemek için AC4/32. sınıf suya ve neme dirençli derzli laminat parkeleri tavsiye ediyoruz."
      },
      {
        question: "Eski parkelerin sökümü ve zemin düzeltme yapıyor musunuz?",
        answer: "Evet, Kadıköy'deki yenileme projelerinde eski halıfleks veya ahşap zemin sökümünü ve şap düzeltmesini profesyonelce yapıyoruz."
      }
    ]
  },
  "uskudar": {
    slug: "uskudar",
    name: "Üsküdar",
    region: "Anadolu Yakası",
    intro: "Üsküdar'ın köklü semtleri olan Kuzguncuk, Çengelköy, Beylerbeyi ve Altunizade'de ahşap zemin sıcaklığını modern parke çözümleriyle buluşturuyoruz. Boğaz hattının neme duyarlı havasına uygun 1. sınıf laminat ve masif parke seçeneklerimizle evlerinize estetik katıyoruz. Üsküdar parke döşeme hizmetimizle zeminlerinizi kusursuz ve uzun ömürlü hale getiriyoruz.",
    neighbors: [
      { name: "Kadıköy", slug: "kadikoy", region: "istanbul" },
      { name: "Ümraniye", slug: "umraniye", region: "istanbul" },
      { name: "Beykoz", slug: "beykoz", region: "istanbul" },
      { name: "Ataşehir", slug: "atasehir", region: "istanbul" }
    ],
    highlights: [
      "Üsküdar genelinde hızlı mobil keşif ve katalog gösterimi",
      "Tarihi yapılara duyarlı, zemin kotunu bozmayan hassas montaj",
      "Süpürgelik, kapı altı profilleri ve derzlerde milimetrik işçilik"
    ],
    faqs: [
      {
        question: "Üsküdar'da keşif için ücret alıyor musunuz?",
        answer: "Hayır, Üsküdar'ın tüm semtlerine ücretsiz keşif hizmeti sunuyoruz. Alanınızı yerinde ölçüp net fiyat veriyoruz."
      },
      {
        question: "Boğaz kıyısındaki nemli konutlarda hangi parke tercih edilmeli?",
        answer: "Neme dayanıklı HDF çekirdekli ve kenarları parafin kaplamalı suya dayanıklı laminat parkeler en sağlıklı tercihtir."
      }
    ]
  },
  "atasehir": {
    slug: "atasehir",
    name: "Ataşehir",
    region: "Anadolu Yakası",
    intro: "Ataşehir'in modern kuleleri, site içi lüks daireleri ve kurumsal ofisleri için dayanıklı ve estetik parke uygulamaları gerçekleştiriyoruz. Batı Ataşehir, İçerenköy ve Küçükbakkalköy bölgelerinde yoğun yaya trafiğine ve yerden ısıtma sistemlerine tam uyumlu zeminler hazırlıyoruz. Ataşehir parke ustası ekibimiz, taahhüt edilen sürede temiz ve kusursuz teslimat sunar.",
    neighbors: [
      { name: "Kadıköy", slug: "kadikoy", region: "istanbul" },
      { name: "Ümraniye", slug: "umraniye", region: "istanbul" },
      { name: "Maltepe", slug: "maltepe", region: "istanbul" },
      { name: "Sancaktepe", slug: "sancaktepe", region: "istanbul" }
    ],
    highlights: [
      "Yerden ısıtmalı modern rezidanslara özel termal iletken şilte ve parke seçimi",
      "Büyük metrekareli Ataşehir ofis projelerinde hafta sonu esnek çalışma imkanı",
      "Leke tutmayan, çizilmeye dayanıklı 32. ve 33. sınıf ticari laminat seçenekleri"
    ],
    faqs: [
      {
        question: "Yerden ısıtmalı dairelerde parke kabarma yapar mı?",
        answer: "Doğru şilte ve yerden ısıtmaya onaylı laminat parke kullandığımızda kesinlikle kabarma veya genleşme yaşanmaz."
      },
      {
        question: "Ataşehir'de site kurallarına ve çalışma saatlerine uyuyor musunuz?",
        answer: "Evet, sitenizin yönetim kurallarına ve ses kısıtlaması saatlerine harfiyen uyarak hızlıca tamamlıyoruz."
      }
    ]
  },
  "maltepe": {
    slug: "maltepe",
    name: "Maltepe",
    region: "Anadolu Yakası",
    intro: "Maltepe sahil hattından Başıbüyük ve Zümrütevler sırtlarına kadar tüm konut ve iş yerlerinde profesyonel parke döşeme yapıyoruz. Küçükyalı, İdealtepe ve Altayçeşme'deki daire yenilemelerinde şık renk kartelaları ve kaliteli süpürgeliklerle evinizi dönüştürüyoruz. Maltepe parke ustası kadromuz 30 yıllık tecrübesiyle her metrekarede garantili iş sunmaktadır.",
    neighbors: [
      { name: "Kadıköy", slug: "kadikoy", region: "istanbul" },
      { name: "Kartal", slug: "kartal", region: "istanbul" },
      { name: "Ataşehir", slug: "atasehir", region: "istanbul" },
      { name: "Sancaktepe", slug: "sancaktepe", region: "istanbul" }
    ],
    highlights: [
      "Maltepe bölgesinde aynı gün keşif ve detaylı maliyet analizi",
      "Geniş süpürgelik ve kapı geçiş çıtalarında kusursuz köşe birleşimleri",
      "Eşyalı dairelerde oda oda taşıyarak zemin yenileme kolaylığı"
    ],
    faqs: [
      {
        question: "Maltepe'de eşyalı evlerde parke değişimi yapıyor musunuz?",
        answer: "Evet, eşyalarınızı özenle odadan odaya kaydırarak günlük yaşamınızı aksatmadan montaj yapıyoruz."
      },
      {
        question: "Döşeme sonrası garanti veriyor musunuz?",
        answer: "Hem malzeme hem de montaj işçiliğimiz için tam memnuniyet ve garanti sağlıyoruz."
      }
    ]
  },
  "kartal": {
    slug: "kartal",
    name: "Kartal",
    region: "Anadolu Yakası",
    intro: "Kartal'ın kentsel dönüşümle yenilenen modern projelerinde ve sahil sitelerinde yüksek standartlı laminat parke uygulamaları yürütüyoruz. Soğanlık, Uğur Mumcu, Atalar ve Rahmanlar semtlerinde her bütçeye uygun dayanıklı zemin seçenekleri hazırlıyoruz. Kartal parke döşeme hizmetimizle evinizi kısa sürede sıcak ve prestijli bir görünüme kavuşturuyoruz.",
    neighbors: [
      { name: "Maltepe", slug: "maltepe", region: "istanbul" },
      { name: "Pendik", slug: "pendik", region: "istanbul" },
      { name: "Sancaktepe", slug: "sancaktepe", region: "istanbul" },
      { name: "Sultanbeyli", slug: "sultanbeyli", region: "istanbul" }
    ],
    highlights: [
      "Kartal'daki yeni konut projelerine ve tadilattaki evlere uygun fiyat teklifleri",
      "Derzli ve derzsiz laminat modellerinde zengin renk alternatifleri",
      "Zamanında teslimat ve sıfır atık, temiz çalışma prensibi"
    ],
    faqs: [
      {
        question: "Kartal'da metrekare işçilik fiyatları nasıl hesaplanır?",
        answer: "Süpürgelik metre tülü, zemin durumu ve alanın büyüklüğüne göre en şeffaf fiyatı ücretsiz keşifte sunuyoruz."
      }
    ]
  },
  "pendik": {
    slug: "pendik",
    name: "Pendik",
    region: "Anadolu Yakası",
    intro: "Pendik merkezden Kurtköy Yenişehir'deki villa ve rezidanslara kadar uzanan geniş bölgede en çok tercih edilen parke ustasıyız. Kaynarca, Güzelyalı, Batı Mahallesi ve Çamlık'ta hem konutlara hem de ticari alanlara özel sağlam zemin kaplamaları sunuyoruz. Pendik parke ustası arayan müşterilerimize hızlı mobil servisimiz ve 30 yıllık ustalığımızla hizmet veriyoruz.",
    neighbors: [
      { name: "Kartal", slug: "kartal", region: "istanbul" },
      { name: "Tuzla", slug: "tuzla", region: "istanbul" },
      { name: "Sultanbeyli", slug: "sultanbeyli", region: "istanbul" },
      { name: "Gebze", slug: "gebze", region: "kocaeli" }
    ],
    highlights: [
      "Kurtköy ve Pendik sahil hattına 30 dakikada keşif desteği",
      "Yüksek yoğunluklu HDF tabanlı, çizilmez laminat parke çeşitleri",
      "Fiyat-performans odaklı süpürgelik ve kapı altı profil çözümleri"
    ],
    faqs: [
      {
        question: "Kurtköy tarafındaki sitelere servisiniz var mı?",
        answer: "Evet, Pendik Kurtköy ve Yenişehir bölgesindeki tüm site ve villalara düzenli montaj hizmeti veriyoruz."
      }
    ]
  },
  "tuzla": {
    slug: "tuzla",
    name: "Tuzla",
    region: "Anadolu Yakası",
    intro: "Tuzla Marina çevresi, Aydınlı, Postane ve Tepeören villa bölgelerinde modern ve lüks zemin döşeme hizmeti vermekteyiz. Kocaeli sınırına komşu konumuyla Tuzla'da hem konut hem de sanayi/ofis tipi dayanıklı parke montajları yapıyoruz. Tuzla parke ustası ekibimiz nem ve ısı farklarına karşı en dayanıklı ürünleri uzmanlıkla uygular.",
    neighbors: [
      { name: "Pendik", slug: "pendik", region: "istanbul" },
      { name: "Çayırova", slug: "cayirova", region: "kocaeli" },
      { name: "Gebze", slug: "gebze", region: "kocaeli" },
      { name: "Darıca", slug: "darica", region: "kocaeli" }
    ],
    highlights: [
      "Tuzla villaları ve müstakil evleri için özel masif ve lamine parke montajı",
      "Gebze ve Çayırova sanayi bölgelerine yakın hızlı servis ağı",
      "Suya ekstra dayanıklı aqua-stop zemin kaplamaları"
    ],
    faqs: [
      {
        question: "Tuzla Tepeören villaları için hangi zeminleri öneriyorsunuz?",
        answer: "Geniş salonlar için 10mm veya 12mm derzli, doğal meşe desenli lüks laminat ya da masif lamine parkeleri öneriyoruz."
      }
    ]
  },
  "umraniye": {
    slug: "umraniye",
    name: "Ümraniye",
    region: "Anadolu Yakası",
    intro: "İstanbul Finans Merkezi'nin kalbinde yer alan Ümraniye'de hem kurumsal iş yerlerine hem de modern aile konutlarına zemin çözümleri sağlıyoruz. Çakmak, Ihlamurkuyu, Atakent ve Şerifali'de kaliteli laminat parke ve süpürgelik uygulamaları yürütüyoruz. Ümraniye parke ustası kadromuzla hızlı, temiz ve uzun yıllar güvenle kullanacağınız zeminler kuruyoruz.",
    neighbors: [
      { name: "Üsküdar", slug: "uskudar", region: "istanbul" },
      { name: "Ataşehir", slug: "atasehir", region: "istanbul" },
      { name: "Çekmeköy", slug: "cekmekoy", region: "istanbul" },
      { name: "Beykoz", slug: "beykoz", region: "istanbul" }
    ],
    highlights: [
      "Finans Merkezi ofisleri için akustik ses yalıtımlı zemin şilteleri",
      "Geniş metrekarelerde hızlı ekip organizasyonu ile zamanında teslim",
      "Çizilmeye karşı dayanıklı AC4 ve AC5 sınıfı zemin seçenekleri"
    ],
    faqs: [
      {
        question: "Ofis zeminleri için mesai saatleri dışında montaj yapıyor musunuz?",
        answer: "Evet, iş yerlerinizin işleyişini aksatmamak için akşam veya hafta sonu montaj planlaması yapabiliyoruz."
      }
    ]
  },
  "cekmekoy": {
    slug: "cekmekoy",
    name: "Çekmeköy",
    region: "Anadolu Yakası",
    intro: "Çekmeköy'ün doğayla iç içe villa siteleri, Alemdağ ve Taşdelen bölgesindeki modern konutları için estetik parke uygulamaları yapıyoruz. Orman havasının nem dengesini gözeten yalıtımlı şilteler ve yüksek kaliteli laminat parkelerle zeminlerinizi koruyoruz. Çekmeköy parke ustası hizmetimizle yaşam alanlarınıza değer katıyoruz.",
    neighbors: [
      { name: "Ümraniye", slug: "umraniye", region: "istanbul" },
      { name: "Sancaktepe", slug: "sancaktepe", region: "istanbul" },
      { name: "Beykoz", slug: "beykoz", region: "istanbul" },
      { name: "Şile", slug: "sile", region: "istanbul" }
    ],
    highlights: [
      "Taşdelen ve Alemdağ villa projelerine uygun ahşap dokulu parkeler",
      "Doğal yalıtım sağlayan mantar ve kapron şilte uygulamaları",
      "Garantili işçilik ve ücretsiz yerinde katalog inceleme"
    ],
    faqs: [
      {
        question: "Müstakil evlerde parke altı yalıtımı nasıl yapılmalıdır?",
        answer: "Zeminden gelebilecek soğuk ve nemi kesmek için 5mm kapron veya alüminyum folyolu bariyerli şilteler kullanıyoruz."
      }
    ]
  },
  "sancaktepe": {
    slug: "sancaktepe",
    name: "Sancaktepe",
    region: "Anadolu Yakası",
    intro: "Sancaktepe'nin hızla büyüyen konut projelerinde Samandıra ve Sarıgazi genelinde kaliteli ve ekonomik parke döşeme hizmeti veriyoruz. Yeni teslim dairelerin zemin hazırlığı, şap kontrolü ve profesyonel laminat montajını titizlikle yürütüyoruz. Sancaktepe parke ustası olarak dayanıklı malzemeler ve kusursuz işçilik sunuyoruz.",
    neighbors: [
      { name: "Çekmeköy", slug: "cekmekoy", region: "istanbul" },
      { name: "Ataşehir", slug: "atasehir", region: "istanbul" },
      { name: "Maltepe", slug: "maltepe", region: "istanbul" },
      { name: "Kartal", slug: "kartal", region: "istanbul" },
      { name: "Sultanbeyli", slug: "sultanbeyli", region: "istanbul" }
    ],
    highlights: [
      "Yeni teslim site dairelerine özel toplu ve uygun fiyat avantajı",
      "Hızlı süpürgelik montajı ve kapı altı sürtme ayarlamaları",
      "Aynı gün keşif imkanı"
    ],
    faqs: [
      {
        question: "Yeni inşaat dairelerde şap kurumadan parke yapılır mı?",
        answer: "Hayır, nem ölçümü yapıp şapın tam kuruduğundan emin olduktan sonra montaja geçerek kabarmayı önlüyoruz."
      }
    ]
  },
  "sultanbeyli": {
    slug: "sultanbeyli",
    name: "Sultanbeyli",
    region: "Anadolu Yakası",
    intro: "Sultanbeyli genelinde ev ve dükkan yenilemelerinde bütçe dostu, sağlam ve şık parke döşeme hizmetleri sağlıyoruz. Hasanpaşa, Battalgazi ve Mehmet Akif mahallelerinde kaliteli yerli ve ithal parke seçeneklerini ayağınıza getiriyoruz. Sultanbeyli parke ustası tecrübemizle uzun ömürlü zeminler inşa ediyoruz.",
    neighbors: [
      { name: "Sancaktepe", slug: "sancaktepe", region: "istanbul" },
      { name: "Pendik", slug: "pendik", region: "istanbul" },
      { name: "Kartal", slug: "kartal", region: "istanbul" }
    ],
    highlights: [
      "Her bütçeye hitap eden 8mm ve 10mm dayanıklı laminat alternatifleri",
      "Kısa sürede tamamlanan temiz ve titiz montaj",
      "Şeffaf ve sürprizsiz maliyetlendirme"
    ],
    faqs: [
      {
        question: "Dükkan veya iş yeri zeminleri için hangi parke uygundur?",
        answer: "Yoğun ayak trafiğine karşı dayanıklı 32. ve 33. sınıf ticari laminat parkeleri tavsiye ediyoruz."
      }
    ]
  },
  "beykoz": {
    slug: "beykoz",
    name: "Beykoz",
    region: "Anadolu Yakası",
    intro: "Beykoz'un eşsiz yalıları, Riva ve Acarkent'teki prestijli villalarından Kavacık'taki modern ofislere kadar geniş yelpazede parke ustası hizmeti sunuyoruz. Boğaziçi ve Karadeniz ikliminin neme açık yapısında özel izolasyonlu taban uygulamalarıyla ahşabın ömrünü uzatıyoruz. Beykoz parke döşeme çalışmalarımızda lüks ve zarafeti bir arada sunuyoruz.",
    neighbors: [
      { name: "Üsküdar", slug: "uskudar", region: "istanbul" },
      { name: "Ümraniye", slug: "umraniye", region: "istanbul" },
      { name: "Çekmeköy", slug: "cekmekoy", region: "istanbul" },
      { name: "Şile", slug: "sile", region: "istanbul" }
    ],
    highlights: [
      "Acarkent ve Riva villaları için lüks masif, lamine ve chevron/balıksırtı parke uzmanlığı",
      "Yüksek neme karşı ekstra izolasyonlu şilte ve sızdırmazlık bantları",
      "Prestijli projelere özel mimari detay çözümleri"
    ],
    faqs: [
      {
        question: "Balıksırtı (Herringbone) parke montajı yapıyor musunuz?",
        answer: "Evet, özel geometrik kesim balıksırtı ve chevron parke döşemelerinde uzman ustalarımızla kusursuz montaj sağlıyoruz."
      }
    ]
  },
  "sile": {
    slug: "sile",
    name: "Şile",
    region: "Anadolu Yakası",
    intro: "Şile'nin sahil evleri, yazlık villaları ve doğa içindeki ahşap konutlarında dayanıklı laminat ve lamine parke montajları gerçekleştiriyoruz. Kış aylarında boş kalan ve neme maruz kalan yazlıklarda kabarma yapmayan zemin sistemleri kuruyoruz. Şile parke ustası arayışınızda deneyimli ekibimizle her mevsim yanınızdayız.",
    neighbors: [
      { name: "Beykoz", slug: "beykoz", region: "istanbul" },
      { name: "Çekmeköy", slug: "cekmekoy", region: "istanbul" },
      { name: "Pendik", slug: "pendik", region: "istanbul" },
      { name: "Kandıra", slug: "kandira", region: "kocaeli" }
    ],
    highlights: [
      "Yazlık ve dağ evlerine özel rutubet önleyici alt zemin uygulaması",
      "Geniş teras ve kış bahçelerine uygun suya dirençli zeminler",
      "Hızlı teslimat ile yaz sezonuna hazırlık imkanı"
    ],
    faqs: [
      {
        question: "Kışın ısıtılmayan yazlıklarda parke zarar görür mü?",
        answer: "Doğru nem bariyeri ve genleşme boşlukları bırakılarak döşenen kaliteli laminat parkeler kış aylarından etkilenmez."
      }
    ]
  },
  "adalar": {
    slug: "adalar",
    name: "Adalar",
    region: "Anadolu Yakası",
    intro: "Büyükada, Heybeliada, Kınalıada ve Burgazada'daki tarihi köşkler ve nostaljik evler için hassas parke yenileme ve döşeme hizmeti sağlıyoruz. Adalar'ın deniz havası ve tarihi dokusuna uyumlu masif, lamine ve suya dayanıklı laminat parkeler uyguluyoruz. Adalar parke ustası olarak lojistik süreçleri organize ederek zeminlerinizi kusursuzca teslim ediyoruz.",
    neighbors: [
      { name: "Kadıköy", slug: "kadikoy", region: "istanbul" },
      { name: "Maltepe", slug: "maltepe", region: "istanbul" },
      { name: "Kartal", slug: "kartal", region: "istanbul" }
    ],
    highlights: [
      "Tarihi köşk zeminlerine zarar vermeyen profesyonel yenileme",
      "Adalar lojistiğine ve nakliye saatlerine uygun planlama",
      "Deniz tuzu ve neme dayanıklı üst sınıf zemin kaplamaları"
    ],
    faqs: [
      {
        question: "Adalar'a malzeme nakliyesi ve usta ulaşımı nasıl sağlanıyor?",
        answer: "Malzeme nakliyesini ve usta programını Adalar vapur ve nakliye seferlerine göre eksiksiz koordine ediyoruz."
      }
    ]
  },

  // --- İSTANBUL AVRUPA YAKASI ---
  "besiktas": {
    slug: "besiktas",
    name: "Beşiktaş",
    region: "Avrupa Yakası",
    intro: "Beşiktaş'ın Levent, Bebek, Etiler ve Ortaköy gibi prestijli semtlerinde lüks konutlar ve kurumsal ofisler için premium parke döşeme hizmeti sunuyoruz. Tarihi apartmanların mimari dokusuna uyumlu lamine, masif ve derzli parke seçeneklerimizle mekanlarınıza değer katıyoruz. Beşiktaş parke ustası kadromuz yüksek ses yalıtımı ve milimetrik işçilik standartlarıyla çalışır.",
    neighbors: [
      { name: "Şişli", slug: "sisli", region: "istanbul" },
      { name: "Sarıyer", slug: "sariyer", region: "istanbul" },
      { name: "Beyoğlu", slug: "beyoglu", region: "istanbul" },
      { name: "Üsküdar", slug: "uskudar", region: "istanbul" }
    ],
    highlights: [
      "Etiler, Levent ve Bebek bölgesinde aynı gün özel keşif ve numune sunumu",
      "Apartman yaşamına uygun yüksek ses izolasyonlu mantar şilte desteği",
      "Lamine ve balıksırtı parke uygulamalarında kusursuz köşe birleşimleri"
    ],
    faqs: [
      {
        question: "Eski apartman dairelerinde zemin ses yalıtımı nasıl sağlanır?",
        answer: "Parke altına yüksek yoğunluklu ses emici mantar veya kauçuk şilteler sererek alt kata giden darbe sesini %70'e kadar azaltıyoruz."
      }
    ]
  },
  "sisli": {
    slug: "sisli",
    name: "Şişli",
    region: "Avrupa Yakası",
    intro: "Şişli'nin Nişantaşı, Bomonti, Teşvikiye ve Mecidiyeköy bölgelerindeki yüksek tavanlı tarihi dairelerde ve modern rezidanslarda parke ustası hizmeti veriyoruz. Hem şık butik mağazalar hem de konforlu evler için çizilmeye dayanıklı modern zemin tasarımları oluşturuyoruz. Şişli parke döşeme ustalarımızla mekanlarınızı estetik ve konforla buluşturuyoruz.",
    neighbors: [
      { name: "Beşiktaş", slug: "besiktas", region: "istanbul" },
      { name: "Beyoğlu", slug: "beyoglu", region: "istanbul" },
      { name: "Kâğıthane", slug: "kagithane", region: "istanbul" },
      { name: "Eyüpsultan", slug: "eyupsultan", region: "istanbul" }
    ],
    highlights: [
      "Nişantaşı ve Teşvikiye mimarisine uygun geniş süpürgelik ve lüks parkeler",
      "Ofis ve klinik zeminlerinde antistatik ve antibakteriyel parke çözümleri",
      "Tozsuz, temiz ve garantili uygulama"
    ],
    faqs: [
      {
        question: "Nişantaşı'ndaki eski ahşap zeminlerin üzerine direkt laminat yapılır mı?",
        answer: "Eski zemin düz ve sağlamsa şilte serilerek üzerine döşenebilir; eğrilik varsa düzeltme işlemi yapılması gerekir."
      }
    ]
  },
  "sariyer": {
    slug: "sariyer",
    name: "Sarıyer",
    region: "Avrupa Yakası",
    intro: "Sarıyer'in Zekeriyaköy, Tarabya, Yeniköy, Maslak ve İstinye bölgelerindeki lüks villa ve koru manzaralı konutlarında üst düzey parke döşeme hizmeti sağlıyoruz. Doğal ahşap dokulu lamine ve suya dayanıklı kaliteli laminat parkelerimizle villalarınıza sıcaklık katıyoruz. Sarıyer parke ustası ekibimiz, geniş metrekareli mekanlarda kusursuz derz hizalaması ve süpürgelik işçiliği sunar.",
    neighbors: [
      { name: "Beşiktaş", slug: "besiktas", region: "istanbul" },
      { name: "Eyüpsultan", slug: "eyupsultan", region: "istanbul" },
      { name: "Beykoz", slug: "beykoz", region: "istanbul" }
    ],
    highlights: [
      "Zekeriyaköy ve Tarabya villalarına özel geniş ebatlı masif ve lamine parke",
      "Maslak plazalarında mesai dışı hızlı ofis zemin kaplamaları",
      "Yüksek nem ve zemin nemine karşı özel bariyerli şilte sistemleri"
    ],
    faqs: [
      {
        question: "Geniş salonlu villalarda genleşme çıtası kullanmak şart mı?",
        answer: "8-10 metreyi aşan açıklıklarda gizli genleşme profilleri uygulayarak parkenin ömrünü ve düzgünlüğünü koruyoruz."
      }
    ]
  },
  "bakirkoy": {
    slug: "bakirkoy",
    name: "Bakırköy",
    region: "Avrupa Yakası",
    intro: "Bakırköy'ün Ataköy, Florya, Yeşilköy ve Zuhuratbaba semtlerindeki deniz havasına açık daire ve villalarında profesyonel parke montajı yapıyoruz. Sahil şeridinin neme maruz kalan yapısına dayanıklı AC4 sınıfı laminat parke ve lake süpürgelik kombinasyonlarıyla evinizi yeniliyoruz. Bakırköy parke ustası arayışınızda garantili işçilik sunuyoruz.",
    neighbors: [
      { name: "Küçükçekmece", slug: "kucukcekmece", region: "istanbul" },
      { name: "Bahçelievler", slug: "bahcelievler", region: "istanbul" },
      { name: "Zeytinburnu", slug: "zeytinburnu", region: "istanbul" }
    ],
    highlights: [
      "Ataköy ve Florya'da lüks daire tadilatlarına uygun parke modelleri",
      "Suya ve neme dayanıklı derzli laminat parke seçenekleri",
      "Ücretsiz yerinde keşif ve kartela inceleme"
    ],
    faqs: [
      {
        question: "Florya ve Yeşilköy gibi sahil bölgelerinde hangi süpürgelik tercih edilmeli?",
        answer: "Sudan ve nemden etkilenmeyen polimer veya suya dayanıklı lake süpürgelikler en uzun ömürlü çözümdür."
      }
    ]
  },
  "basaksehir": {
    slug: "basaksehir",
    name: "Başakşehir",
    region: "Avrupa Yakası",
    intro: "Başakşehir ve Bahçeşehir'in modern site projelerinde, geniş aile dairelerinde kaliteli parke döşeme hizmetleri gerçekleştiriyoruz. Yerden ısıtma sistemlerine tam uyumlu, ısı transferini engellemeyen şilte ve laminat kombinasyonları uyguluyoruz. Başakşehir parke ustası ekibimiz taahhüt ettiği günde montajı eksiksiz tamamlar.",
    neighbors: [
      { name: "Küçükçekmece", slug: "kucukcekmece", region: "istanbul" },
      { name: "Bağcılar", slug: "bagcilar", region: "istanbul" },
      { name: "Esenyurt", slug: "esenyurt", region: "istanbul" },
      { name: "Arnavutköy", slug: "arnavutkoy", region: "istanbul" },
      { name: "Sultangazi", slug: "sultangazi", region: "istanbul" }
    ],
    highlights: [
      "Bahçeşehir ve Başakşehir sitelerinde toplu zemin yenileme avantajı",
      "Yerden ısıtmaya sertifikalı 8mm ve 10mm dayanıklı laminat parkeler",
      "Temiz, tozsuz ve hızlı montaj"
    ],
    faqs: [
      {
        question: "Başakşehir'deki yeni sitelerde ses yalıtımı nasıl yapılır?",
        answer: "Akustik kauçuk tabanlı şilte sererek adımlardan doğan yankı ve gürültüyü en aza indiriyoruz."
      }
    ]
  },
  "beylikduzu": {
    slug: "beylikduzu",
    name: "Beylikdüzü",
    region: "Avrupa Yakası",
    intro: "Beylikdüzü'nün geniş caddeleri, modern siteleri ve Yakuplu marinası çevresindeki konutlarda estetik parke uygulamaları yapıyoruz. Barış, Adnan Kahveci ve Beykent semtlerinde hem dayanıklı hem de bütçe dostu laminat zemin kaplamaları sağlıyoruz. Beylikdüzü parke ustası ekibimiz kaliteli işçiliği uygun fiyatla buluşturur.",
    neighbors: [
      { name: "Avcılar", slug: "avcilar", region: "istanbul" },
      { name: "Esenyurt", slug: "esenyurt", region: "istanbul" },
      { name: "Büyükçekmece", slug: "buyukcekmece", region: "istanbul" }
    ],
    highlights: [
      "Beykent ve Adnan Kahveci'de hızlı keşif ve geniş renk seçenekleri",
      "Garantili işçilik ve sağlam süpürgelik montajı",
      "Çocuk odaları ve salonlar için hijyenik, antibakteriyel parkeler"
    ],
    faqs: [
      {
        question: "Beylikdüzü'nde parke montajı için randevu ne zaman alınabilir?",
        answer: "Bizi aradığınızda genellikle aynı gün içinde keşif yapıp 24-48 saat içinde montajı başlatıyoruz."
      }
    ]
  },
  "avcilar": {
    slug: "avcilar",
    name: "Avcılar",
    region: "Avrupa Yakası",
    intro: "Avcılar genelinde kentsel dönüşümle inşa edilen yeni binalarda ve mevcut dairelerde profesyonel parke döşeme hizmeti vermekteyiz. Ambarlı, Cihangir ve Denizköşkler'de neme dayanıklı kaliteli laminat zeminleri titizlikle uyguluyoruz. Avcılar parke ustası olarak sağlam işçilik ve müşteri memnuniyeti sunuyoruz.",
    neighbors: [
      { name: "Küçükçekmece", slug: "kucukcekmece", region: "istanbul" },
      { name: "Beylikdüzü", slug: "beylikduzu", region: "istanbul" },
      { name: "Esenyurt", slug: "esenyurt", region: "istanbul" },
      { name: "Bakırköy", slug: "bakirkoy", region: "istanbul" }
    ],
    highlights: [
      "Sahil şeridi nemine dayanıklı parke ve şilte çözümleri",
      "Eski zemin sökümü ve moloz temizliği dahil paket hizmet",
      "Şeffaf fiyatlandırma ve ücretsiz keşif"
    ],
    faqs: [
      {
        question: "Avcılar sahilindeki binalarda parke kabarır mı?",
        answer: "Doğru şilte ve kenar boşlukları ile montaj yapıldığında nemden kaynaklı kabarma yaşanmaz."
      }
    ]
  },
  "kucukcekmece": {
    slug: "kucukcekmece",
    name: "Küçükçekmece",
    region: "Avrupa Yakası",
    intro: "Küçükçekmece Gölü kıyısındaki modern sitelerden Cennet, Halkalı ve Atakent etaplarına kadar her noktada parke döşeme hizmeti sağlıyoruz. Yoğun aile yaşamına uygun, leke tutmayan ve çizilmez laminat parkelerimizle konforlu yaşam alanları oluşturuyoruz. Küçükçekmece parke ustası ekibimiz daima yanınızdadır.",
    neighbors: [
      { name: "Bakırköy", slug: "bakirkoy", region: "istanbul" },
      { name: "Avcılar", slug: "avcilar", region: "istanbul" },
      { name: "Bahçelievler", slug: "bahcelievler", region: "istanbul" },
      { name: "Başakşehir", slug: "basaksehir", region: "istanbul" },
      { name: "Bağcılar", slug: "bagcilar", region: "istanbul" }
    ],
    highlights: [
      "Atakent ve Halkalı sitelerine özel hızlı servis ve montaj",
      "Geniş süpürgelik ve estetik köşe aparatları",
      "Uygun fiyat ve 1. sınıf işçilik garantisi"
    ],
    faqs: [
      {
        question: "Küçükçekmece Atakent sitelerinde çalışma saatleriniz nedir?",
        answer: "Site yönetiminizin belirlediği tadilat saatlerine uygun olarak gün içinde sessiz ve seri çalışıyoruz."
      }
    ]
  },
  "bahcelievler": {
    slug: "bahcelievler",
    name: "Bahçelievler",
    region: "Avrupa Yakası",
    intro: "Bahçelievler, Yayla, Şirinevler ve Yenibosna semtlerindeki konutlarda parke yenileme ve sıfır montaj işlerini profesyonellikle yürütüyoruz. Eski yapıların zemin düzensizliklerini şap ve kapron desteğiyle gidererek düzgün bir yüzey elde ediyoruz. Bahçelievler parke ustası arayanlara 30 yıllık tecrübemizle garantili çözümler sunuyoruz.",
    neighbors: [
      { name: "Bakırköy", slug: "bakirkoy", region: "istanbul" },
      { name: "Bağcılar", slug: "bagcilar", region: "istanbul" },
      { name: "Güngören", slug: "gungoren", region: "istanbul" },
      { name: "Küçükçekmece", slug: "kucukcekmece", region: "istanbul" }
    ],
    highlights: [
      "Zemin dalgalanmalarına karşı uzman tesviye ve kapron uygulaması",
      "Yayla ve Basın Sitesi çevresine aynı gün keşif",
      "Uzun ömürlü süpürgelik montajı"
    ],
    faqs: [
      {
        question: "Düzgün olmayan zeminlerde parke nasıl düzeltilir?",
        answer: "Gerektiğinde akıllı şap veya kalın kapron kullanarak zemini terazisine getirip öyle döşüyoruz."
      }
    ]
  },
  "bagcilar": {
    slug: "bagcilar",
    name: "Bağcılar",
    region: "Avrupa Yakası",
    intro: "Bağcılar genelinde Güneşli Basın Ekspres hattındaki rezidanslardan mahalle konutlarına kadar her alanda parke ustası hizmeti veriyoruz. Yüksek dayanımlı ve ekonomik laminat parkelerimizle ev ve iş yerlerinizin havasını değiştiriyoruz. Bağcılar parke döşeme ekibimiz hızlı ve temiz işçilik ilkesiyle çalışır.",
    neighbors: [
      { name: "Bahçelievler", slug: "bahcelievler", region: "istanbul" },
      { name: "Küçükçekmece", slug: "kucukcekmece", region: "istanbul" },
      { name: "Başakşehir", slug: "basaksehir", region: "istanbul" },
      { name: "Esenler", slug: "esenler", region: "istanbul" },
      { name: "Güngören", slug: "gungoren", region: "istanbul" }
    ],
    highlights: [
      "Güneşli rezidansları ve ofisleri için dayanıklı ticari parkeler",
      "Her bütçeye uygun hesaplı zemin yenileme",
      "Eski parke sökümü ve temiz montaj"
    ],
    faqs: [
      {
        question: "Güneşli bölgesindeki ofisler için laminat öneriniz nedir?",
        answer: "Tekerlekli sandalye trafiğine dayanıklı AC4 veya AC5 sınıfı çizilmez laminatları öneriyoruz."
      }
    ]
  },
  "esenyurt": {
    slug: "esenyurt",
    name: "Esenyurt",
    region: "Avrupa Yakası",
    intro: "Esenyurt'un büyük site komplekslerinde, yeni teslim rezidanslarında ve ticari birimlerinde hızlı parke döşeme hizmeti sağlıyoruz. Geniş metrekareli projelerde deneyimli ekibimizle kısa sürede anahtar teslim zemin kaplamaları gerçekleştiriyoruz. Esenyurt parke ustası ihtiyaçlarınızda en uygun fiyat ve kaliteli malzeme garantisi veriyoruz.",
    neighbors: [
      { name: "Beylikdüzü", slug: "beylikduzu", region: "istanbul" },
      { name: "Avcılar", slug: "avcilar", region: "istanbul" },
      { name: "Başakşehir", slug: "basaksehir", region: "istanbul" },
      { name: "Büyükçekmece", slug: "buyukcekmece", region: "istanbul" }
    ],
    highlights: [
      "Büyük sitelerde toplu daire döşemelerinde özel indirimler",
      "Hızlı montaj ve geniş renk skalası",
      "Yerden ısıtmalı dairelere uygun termal şilteler"
    ],
    faqs: [
      {
        question: "Esenyurt'ta büyük metrekareli daire kaç günde biter?",
        answer: "100-150 m² dairelerin laminat montajını uzman ekibimiz genellikle 1 gün içinde tamamlamaktadır."
      }
    ]
  },
  "buyukcekmece": {
    slug: "buyukcekmece",
    name: "Büyükçekmece",
    region: "Avrupa Yakası",
    intro: "Büyükçekmece göl ve deniz çevresindeki villalarda, Mimaroba ve Sinanoba konutlarında seçkin parke montajı hizmeti vermekteyiz. Neme açık sahil havasına uygun özel parafinli derzli parkelerle uzun ömürlü mekanlar inşa ediyoruz. Büyükçekmece parke ustası olarak villalarınıza ve dairelerinize şıklık katıyoruz.",
    neighbors: [
      { name: "Beylikdüzü", slug: "beylikduzu", region: "istanbul" },
      { name: "Esenyurt", slug: "esenyurt", region: "istanbul" },
      { name: "Çatalca", slug: "catalca", region: "istanbul" },
      { name: "Silivri", slug: "silivri", region: "istanbul" }
    ],
    highlights: [
      "Mimaroba ve Sinanoba'da aynı gün ücretsiz keşif",
      "Göl ve deniz nemine dayanıklı 1. sınıf parkeler",
      "Geniş süpürgelik ve şık geçiş profilleri"
    ],
    faqs: [
      {
        question: "Büyükçekmece villalarında hangi parke tipleri tercih edilir?",
        answer: "Geniş salonlar için 10mm derzli laminat veya doğal meşe lamine parke modelleri çok popülerdir."
      }
    ]
  },
  "beyoglu": {
    slug: "beyoglu",
    name: "Beyoğlu",
    region: "Avrupa Yakası",
    intro: "Beyoğlu'nun Cihangir, Galata, Karaköy ve Taksim gibi tarihi dokuya sahip semtlerinde aslına uygun zemin yenilemeleri yapıyoruz. Yüksek tavanlı tarihi binaların özel taban yapılarına hassasiyetle yaklaşarak masif, lamine ve laminat parke uyguluyoruz. Beyoğlu parke ustası kadromuz estetik ve tarihi mimariyle uyumlu çalışır.",
    neighbors: [
      { name: "Şişli", slug: "sisli", region: "istanbul" },
      { name: "Beşiktaş", slug: "besiktas", region: "istanbul" },
      { name: "Fatih", slug: "fatih", region: "istanbul" },
      { name: "Kâğıthane", slug: "kagithane", region: "istanbul" }
    ],
    highlights: [
      "Cihangir ve Galata binalarına özel ses yalıtımlı mantar taban desteği",
      "Tarihi ahşap zeminlerin tamiri ve restoratif montajı",
      "Butik mekan ve otellere özel estetik çözümler"
    ],
    faqs: [
      {
        question: "Eski ahşap kirişli binalarda parke döşerken nelere dikkat edilir?",
        answer: "Zemin terazisini sağlamak ve alt kata ses geçişini kesmek için özel hafif yalıtım katmanları kullanıyoruz."
      }
    ]
  },
  "fatih": {
    slug: "fatih",
    name: "Fatih",
    region: "Avrupa Yakası",
    intro: "Tarihi Yarımada'nın kalbi Fatih'te, Çapa, Fındıkzade, Aksaray ve Balat semtlerinde güvenilir parke döşeme hizmeti sağlıyoruz. Eski apartman zeminlerindeki kot farklarını ustalıkla gidererek pürüzsüz ve sıcak ahşap zeminler inşa ediyoruz. Fatih parke ustası olarak bütçenize uygun kaliteli malzemelerle hizmetinizdeyiz.",
    neighbors: [
      { name: "Zeytinburnu", slug: "zeytinburnu", region: "istanbul" },
      { name: "Eyüpsultan", slug: "eyupsultan", region: "istanbul" },
      { name: "Beyoğlu", slug: "beyoglu", region: "istanbul" }
    ],
    highlights: [
      "Tarihi semtlerdeki eski konutlara uygun pratik zemin çözümleri",
      "Kısa sürede teslim edilen temiz usta işçiliği",
      "Garantili süpürgelik ve eşik montajı"
    ],
    faqs: [
      {
        question: "Fatih bölgesinde ücretsiz keşif yapıyor musunuz?",
        answer: "Evet, Fatih'in tüm mahallelerine ücretsiz keşif için gelip ölçü alıyoruz."
      }
    ]
  },
  "kagithane": {
    slug: "kagithane",
    name: "Kâğıthane",
    region: "Avrupa Yakası",
    intro: "Kâğıthane'nin kentsel dönüşümle parlayan Cendere vadisi, Seyrantepe ve Çeliktepe semtlerindeki modern konut ve ofislerde parke ustası hizmeti sunuyoruz. Şık plazalardan aile apartmanlarına kadar her mekana uygun çizilmez laminat parkeler uyguluyoruz. Kâğıthane parke döşeme ekibimiz estetik ve sağlamlığı garanti eder.",
    neighbors: [
      { name: "Şişli", slug: "sisli", region: "istanbul" },
      { name: "Beşiktaş", slug: "besiktas", region: "istanbul" },
      { name: "Eyüpsultan", slug: "eyupsultan", region: "istanbul" },
      { name: "Beyoğlu", slug: "beyoglu", region: "istanbul" }
    ],
    highlights: [
      "Vadi İstanbul ve Cendere hattındaki ofislere özel ticari parkeler",
      "Modern süpürgelik modelleri ve hızlı montaj",
      "Uygun fiyat ve güvenilir malzeme"
    ],
    faqs: [
      {
        question: "Ofis zeminlerinde hangi kalınlıkta parke önerirsiniz?",
        answer: "Yoğun insan trafiği olan ofisler için en az 8mm AC4 veya 10mm AC5 sınıfı laminat parkeleri tavsiye ediyoruz."
      }
    ]
  },
  "eyupsultan": {
    slug: "eyupsultan",
    name: "Eyüpsultan",
    region: "Avrupa Yakası",
    intro: "Eyüpsultan'ın tarihi merkezinden Göktürk ve Kemerburgaz'ın seçkin villa yerleşimlerine kadar geniş bir alanda parke döşeme hizmeti sağlıyoruz. Göktürk villalarında lüks lamine ve balıksırtı parkeler uygularken, merkez mahallelerde ekonomik laminat çözümleri sunuyoruz. Eyüpsultan parke ustası olarak her mekana özel titiz işçilik sergiliyoruz.",
    neighbors: [
      { name: "Sarıyer", slug: "sariyer", region: "istanbul" },
      { name: "Şişli", slug: "sisli", region: "istanbul" },
      { name: "Kâğıthane", slug: "kagithane", region: "istanbul" },
      { name: "Gaziosmanpaşa", slug: "gaziosmanpasa", region: "istanbul" },
      { name: "Sultangazi", slug: "sultangazi", region: "istanbul" }
    ],
    highlights: [
      "Göktürk ve Kemerburgaz villalarına özel lüks ahşap parkeler",
      "Doğal orman havasına uygun yalıtımlı zemin şilteleri",
      "Zamanında teslimat ve garanti"
    ],
    faqs: [
      {
        question: "Göktürk bölgesinde villa montajlarında keşif nasıl yapılıyor?",
        answer: "Geniş numune çantamızla villanıza gelip mekanın ışığına ve mobilyalarınıza uygun renkleri yerinde seçmenizi sağlıyoruz."
      }
    ]
  },
  "zeytinburnu": {
    slug: "zeytinburnu",
    name: "Zeytinburnu",
    region: "Avrupa Yakası",
    intro: "Zeytinburnu sahilindeki lüks projelerden Kazlıçeşme ve merkez mahallelerine kadar tüm konutlarda parke ustası hizmeti sunuyoruz. Sahil hattının nemli havasına karşı dayanıklı zemin kaplamaları uygulayarak evlerinizin şıklığını uzun yıllar koruyoruz. Zeytinburnu parke döşeme ekibimiz profesyonel montaj ve süpürgelik işçiliği ile yanınızdadır.",
    neighbors: [
      { name: "Bakırköy", slug: "bakirkoy", region: "istanbul" },
      { name: "Fatih", slug: "fatih", region: "istanbul" },
      { name: "Güngören", slug: "gungoren", region: "istanbul" },
      { name: "Bayrampaşa", slug: "bayrampasa", region: "istanbul" }
    ],
    highlights: [
      "Sahil rezidanslarına özel suya dirençli parkeler",
      "Kısa sürede tamamlanan titiz işçilik",
      "Ücretsiz keşif desteği"
    ],
    faqs: [
      {
        question: "Rezidans dairelerinde parke değişimi için izin süreçlerine uyuyor musunuz?",
        answer: "Evet, site yönetimlerinin çalışma takvimi ve koridor koruma kurallarına harfiyen uyuyoruz."
      }
    ]
  },
  "gungoren": {
    slug: "gungoren",
    name: "Güngören",
    region: "Avrupa Yakası",
    intro: "Güngören ve Merter tekstil merkezindeki iş yerleri ile konutlarda dayanıklı zemin döşeme hizmeti sağlıyoruz. Mağaza ve showroomlarda yoğun trafiğe dayanıklı AC4 ve AC5 sınıfı laminat parkeler uyguluyoruz. Güngören parke ustası ekibimiz uygun fiyat ve sağlam montajla hizmetinizdedir.",
    neighbors: [
      { name: "Bahçelievler", slug: "bahcelievler", region: "istanbul" },
      { name: "Bağcılar", slug: "bagcilar", region: "istanbul" },
      { name: "Zeytinburnu", slug: "zeytinburnu", region: "istanbul" },
      { name: "Esenler", slug: "esenler", region: "istanbul" }
    ],
    highlights: [
      "Merter mağazaları için çizilmez ticari zeminler",
      "Hızlı ve temiz iş teslimi",
      "Bütçe dostu fiyat seçenekleri"
    ],
    faqs: [
      {
        question: "Tekstil showroom zeminleri için hangi parke uygundur?",
        answer: "Ağır askı ve manken trafiğine dayanıklı 33. sınıf ticari laminat parkeleri öneriyoruz."
      }
    ]
  },
  "bayrampasa": {
    slug: "bayrampasa",
    name: "Bayrampaşa",
    region: "Avrupa Yakası",
    intro: "Bayrampaşa'nın konut ve ticaret alanlarında uzun ömürlü parke çözümleri sunuyoruz. Kocatepe, Muratpaşa ve Yıldırım mahallelerinde evlerin zeminini modern laminat parkelerle yeniliyoruz. Bayrampaşa parke ustası tecrübemizle sorunsuz montaj sağlıyoruz.",
    neighbors: [
      { name: "Eyüpsultan", slug: "eyupsultan", region: "istanbul" },
      { name: "Gaziosmanpaşa", slug: "gaziosmanpasa", region: "istanbul" },
      { name: "Esenler", slug: "esenler", region: "istanbul" },
      { name: "Zeytinburnu", slug: "zeytinburnu", region: "istanbul" }
    ],
    highlights: [
      "Hızlı keşif ve güvenilir işçilik",
      "Eski parke söküm desteği",
      "Yüksek müşteri memnuniyeti"
    ],
    faqs: [
      {
        question: "Bayrampaşa'da keşif ne zaman yapılır?",
        answer: "Aynı gün içinde adresinize gelip alan ölçümünü yapabiliyoruz."
      }
    ]
  },
  "gaziosmanpasa": {
    slug: "gaziosmanpasa",
    name: "Gaziosmanpaşa",
    region: "Avrupa Yakası",
    intro: "Gaziosmanpaşa'nın kentsel dönüşümle modernleşen bölgelerinde ve mevcut dairelerinde kaliteli laminat parke döşeme hizmeti veriyoruz. Zemin eğriliklerini kapron ve tesviye şapıyla gidererek pürüzsüz sonuçlar elde ediyoruz. Gaziosmanpaşa parke ustası kadromuzla yanınızdayız.",
    neighbors: [
      { name: "Eyüpsultan", slug: "eyupsultan", region: "istanbul" },
      { name: "Sultangazi", slug: "sultangazi", region: "istanbul" },
      { name: "Bayrampaşa", slug: "bayrampasa", region: "istanbul" },
      { name: "Esenler", slug: "esenler", region: "istanbul" }
    ],
    highlights: [
      "Kentsel dönüşüm konutlarına özel uygun fiyatlı zemin çözümleri",
      "Geniş süpürgelik çeşitleri",
      "1 günde anahtar teslim montaj"
    ],
    faqs: [
      {
        question: "Eski fayansların üzerine laminat parke yapılır mı?",
        answer: "Evet, fayanslar sağlamsa altına uygun şilte serilerek üzerine doğrudan laminat parke döşenebilir."
      }
    ]
  },
  "esenler": {
    slug: "esenler",
    name: "Esenler",
    region: "Avrupa Yakası",
    intro: "Esenler'in tüm mahallelerinde ekonomik ve kaliteli laminat parke montajı yapıyoruz. Dayanıklı malzeme, sağlam işçilik ve şık süpürgeliklerle evinizi yeniliyoruz. Esenler parke ustası arayan müşterilerimize hızlı randevu ve garantili hizmet sağlıyoruz.",
    neighbors: [
      { name: "Bağcılar", slug: "bagcilar", region: "istanbul" },
      { name: "Güngören", slug: "gungoren", region: "istanbul" },
      { name: "Bayrampaşa", slug: "bayrampasa", region: "istanbul" },
      { name: "Gaziosmanpaşa", slug: "gaziosmanpasa", region: "istanbul" }
    ],
    highlights: [
      "Ekonomik ve dayanıklı laminat alternatifleri",
      "Temiz ve titiz çalışma",
      "Ücretsiz keşif hizmeti"
    ],
    faqs: [
      {
        question: "Esenler'de parke döşeme süresi ne kadardır?",
        answer: "Standart bir ev 1 gün içerisinde süpürgelikleriyle birlikte tamamlanmaktadır."
      }
    ]
  },
  "sultangazi": {
    slug: "sultangazi",
    name: "Sultangazi",
    region: "Avrupa Yakası",
    intro: "Sultangazi genelinde dayanıklı ve estetik parke döşeme uygulamaları sunuyoruz. Cebeci, Habibler ve Gazi mahallelerinde konut ve iş yerlerine uygun zeminleri kaliteli malzemelerle hazırlıyoruz. Sultangazi parke ustası ekibimiz uygun fiyatlarla hizmetinizdedir.",
    neighbors: [
      { name: "Gaziosmanpaşa", slug: "gaziosmanpasa", region: "istanbul" },
      { name: "Eyüpsultan", slug: "eyupsultan", region: "istanbul" },
      { name: "Başakşehir", slug: "basaksehir", region: "istanbul" }
    ],
    highlights: [
      "Her bütçeye uygun parke çözümleri",
      "Sağlam montaj ve süpürgelik işçiliği",
      "Hızlı keşif ve teslimat"
    ],
    faqs: [
      {
        question: "Sultangazi'de keşif ücretli midir?",
        answer: "Hayır, keşif ve fiyat teklifimiz tamamen ücretsizdir."
      }
    ]
  },
  "arnavutkoy": {
    slug: "arnavutkoy",
    name: "Arnavutköy",
    region: "Avrupa Yakası",
    intro: "İstanbul Havalimanı çevresinde hızla gelişen Arnavutköy ve Bolluca bölgesindeki yeni konutlarda parke döşeme hizmeti vermekteyiz. Yeni teslim binaların şap durumunu kontrol ederek rutubet önleyici şiltelerle laminat montajı yapıyoruz. Arnavutköy parke ustası ekibimiz garantili işçilik sunar.",
    neighbors: [
      { name: "Başakşehir", slug: "basaksehir", region: "istanbul" },
      { name: "Eyüpsultan", slug: "eyupsultan", region: "istanbul" },
      { name: "Çatalca", slug: "catalca", region: "istanbul" },
      { name: "Sultangazi", slug: "sultangazi", region: "istanbul" }
    ],
    highlights: [
      "Yeni inşaat projelerine uygun toplu zemin döşeme",
      "Nem bariyerli şilte kullanımı",
      "Geniş renk seçenekleri"
    ],
    faqs: [
      {
        question: "Arnavutköy'deki yeni inşaatlarda montaj ne zaman yapılmalı?",
        answer: "Şap dökümünden sonra zemin neminin %2'nin altına düşmesi beklenip ardından parke döşenmelidir."
      }
    ]
  },
  "catalca": {
    slug: "catalca",
    name: "Çatalca",
    region: "Avrupa Yakası",
    intro: "Çatalca'nın doğayla iç içe müstakil evleri, çiftlik konutları ve köylerinde ahşap zemin ve laminat parke döşeme çözümleri sunuyoruz. Geniş ve havadar mekanlarda zemin soğuğunu kesen kalın şilte uygulamaları yapıyoruz. Çatalca parke ustası olarak sağlam ve sıcak zeminler oluşturuyoruz.",
    neighbors: [
      { name: "Büyükçekmece", slug: "buyukcekmece", region: "istanbul" },
      { name: "Silivri", slug: "silivri", region: "istanbul" },
      { name: "Arnavutköy", slug: "arnavutkoy", region: "istanbul" }
    ],
    highlights: [
      "Müstakil ve çiftlik evlerine özel ısı yalıtımlı parke altı tabanları",
      "Doğal ahşap dokulu dayanıklı laminat modelleri",
      "Kırsal bölgelere eksiksiz lojistik ve usta desteği"
    ],
    faqs: [
      {
        question: "Müstakil evlerde zemin soğukluğu nasıl önlenir?",
        answer: "Parke altına 5mm kapron veya mantar şilte uygulayarak zeminden gelen soğuğu etkili şekilde kesiyoruz."
      }
    ]
  },
  "silivri": {
    slug: "silivri",
    name: "Silivri",
    region: "Avrupa Yakası",
    intro: "Silivri'nin sahil siteleri, yazlık konutları ve merkez mahallelerinde neme dayanıklı parke döşeme hizmeti sağlıyoruz. Kış aylarında kapalı kalan yazlıklarda dahi bozulmayan kaliteli laminat parkeler uyguluyoruz. Silivri parke ustası olarak tatil evlerinizi ve dairelerinizi konforla yeniliyoruz.",
    neighbors: [
      { name: "Büyükçekmece", slug: "buyukcekmece", region: "istanbul" },
      { name: "Çatalca", slug: "catalca", region: "istanbul" }
    ],
    highlights: [
      "Yazlık konutlara özel suya ve rutubete dayanıklı parkeler",
      "Sezon öncesi hızlı anahtar teslim montaj",
      "Garantili süpürgelik ve kapı altı işçiliği"
    ],
    faqs: [
      {
        question: "Silivri'de yazlık evler için hangi parke uygundur?",
        answer: "Sıcaklık ve nem değişimlerine dayanıklı derzli ve suya dayanıklı laminat parkeleri öneriyoruz."
      }
    ]
  },

  // --- KOCAELİ BÖLGESİ ---
  "gebze": {
    slug: "gebze",
    name: "Gebze",
    region: "Kocaeli",
    intro: "Gebze'nin dinamik sanayi ve konut merkezinde hem fabrikalar ve kurumsal ofisler hem de modern aile daireleri için parke ustası hizmeti veriyoruz. Mutlukent, Tatlıkuyu, Osman Yılmaz ve Yenikent bölgelerinde yoğun yaya trafiğine dayanıklı laminat zeminler kuruyoruz. 30 yılı aşkın köklü tecrübemizle Gebze parke döşeme alanında en çok güvenilen ekibiz.",
    neighbors: [
      { name: "Darıca", slug: "darica", region: "kocaeli" },
      { name: "Çayırova", slug: "cayirova", region: "kocaeli" },
      { name: "Dilovası", slug: "dilovasi", region: "kocaeli" },
      { name: "Tuzla", slug: "tuzla", region: "istanbul" },
      { name: "Pendik", slug: "pendik", region: "istanbul" }
    ],
    highlights: [
      "Mutlukent ve Tatlıkuyu konutlarına aynı gün 30 dakikada ücretsiz keşif",
      "Organize sanayi ofisleri için hafta sonu hızlı montaj avantajı",
      "32. ve 33. sınıf çizilmez, leke tutmaz ticari laminat parke çeşitleri"
    ],
    faqs: [
      {
        question: "Gebze'de keşif için ne kadar beklemem gerekir?",
        answer: "Gebze merkezli mobil ekiplerimiz sayesinde aynı gün içinde 1-2 saat içinde adresinize ulaşıp keşif yapabiliyoruz."
      },
      {
        question: "Fabrika idari binaları için hangi parkeyi tavsiye edersiniz?",
        answer: "Tekerlekli sandalyeler ve yoğun ayak trafiği için AC5 33. sınıf ticari laminat parkeleri öneriyoruz."
      }
    ]
  },
  "darica": {
    slug: "darica",
    name: "Darıca",
    region: "Kocaeli",
    intro: "Darıca'nın sahil şeridi, Bayramoğlu yarımadası ve Emek mahallesindeki konut ve villalarda profesyonel parke montajı yapıyoruz. Deniz kenarındaki nemli hava şartlarına tam dayanıklı parafinli laminat parkelerle zeminlerin kabarmasını önlüyoruz. Darıca parke ustası ekibimiz şık lake süpürgelikler ve garantili işçilik sunar.",
    neighbors: [
      { name: "Gebze", slug: "gebze", region: "kocaeli" },
      { name: "Çayırova", slug: "cayirova", region: "kocaeli" },
      { name: "Tuzla", slug: "tuzla", region: "istanbul" }
    ],
    highlights: [
      "Bayramoğlu villaları ve sahil evlerine özel suya dayanıklı zeminler",
      "Hızlı montaj ve ücretsiz keşif imkanı",
      "Geniş renk ve doku seçenekleri"
    ],
    faqs: [
      {
        question: "Bayramoğlu'ndaki villalarda nem parkeyi etkiler mi?",
        answer: "Suya dayanıklı özel aquastop parkeler ve nem bariyerli kapron kullandığımız için nemden etkilenmez."
      }
    ]
  },
  "cayirova": {
    slug: "cayirova",
    name: "Çayırova",
    region: "Kocaeli",
    intro: "Çayırova'nın gelişen modern yerleşimlerinde ve yeni site projelerinde kaliteli laminat parke döşeme hizmeti sağlıyoruz. İstanbul Anadolu Yakası ile Kocaeli bağlantı noktasındaki konumuyla hızlı keşif ve montaj imkanı sunuyoruz. Çayırova parke ustası arayışınızda uzman kadromuz ve uygun fiyatlarımızla hizmetinizdeyiz.",
    neighbors: [
      { name: "Gebze", slug: "gebze", region: "kocaeli" },
      { name: "Darıca", slug: "darica", region: "kocaeli" },
      { name: "Tuzla", slug: "tuzla", region: "istanbul" }
    ],
    highlights: [
      "Yeni yapılan site dairelerine özel paket indirimleri",
      "Temiz ve titiz işçilik ile 1 günde montaj",
      "Yerden ısıtmalı dairelere uygun zemin şiltesi"
    ],
    faqs: [
      {
        question: "Çayırova'da daire montajı ne kadar sürer?",
        answer: "Ortalama bir dairenin laminat parke ve süpürgelik montajı 1 günde tamamlanır."
      }
    ]
  },
  "dilovasi": {
    slug: "dilovasi",
    name: "Dilovası",
    region: "Kocaeli",
    intro: "Dilovası'ndaki sanayi tesisleri, lojistik depoların idari ofisleri ve yerleşim alanlarında dayanıklı parke döşeme hizmeti veriyoruz. Ağır kullanıma ve toza dayanıklı ticari zemin kaplamaları uygulayarak uzun ömürlü çözümler sağlıyoruz. Dilovası parke ustası ekibimiz profesyonel yaklaşımıyla yanınızdadır.",
    neighbors: [
      { name: "Gebze", slug: "gebze", region: "kocaeli" },
      { name: "Körfez", slug: "korfez", region: "kocaeli" }
    ],
    highlights: [
      "Sanayi ofisleri için aşınmaz ticari zemin sistemleri",
      "Hızlı planlama ve taahhütlü teslim",
      "Dayanıklı süpürgelik ve profil montajı"
    ],
    faqs: [
      {
        question: "Yoğun tozlu ortamlarda laminat parke temizliği kolay mıdır?",
        answer: "Antistatik yüzey kaplamalı laminat parkeler toz tutmaz ve kolayca silinerek temizlenir."
      }
    ]
  },
  "izmit": {
    slug: "izmit",
    name: "İzmit",
    region: "Kocaeli",
    intro: "Kocaeli'nin merkezi İzmit'te Yahya Kaptan, Alikahya, Bağçeşme ve Bekirdere semtlerinde kaliteli parke döşeme hizmeti vermekteyiz. Hem modern rezidanslara hem de müstakil evlere uygun zengin parke koleksiyonumuzla mekanlarınızı yeniliyoruz. İzmit parke ustası ekibimiz 30 yıllık tecrübeyle garantili zeminler sunmaktadır.",
    neighbors: [
      { name: "Derince", slug: "derince", region: "kocaeli" },
      { name: "Kartepe", slug: "kartepe", region: "kocaeli" },
      { name: "Başiskele", slug: "basiskele", region: "kocaeli" },
      { name: "Kandıra", slug: "kandira", region: "kocaeli" }
    ],
    highlights: [
      "Yahya Kaptan ve Alikahya sitelerinde aynı gün ücretsiz keşif",
      "Lüks derzli laminat ve süpürgelik çeşitleri",
      "Eşyalı evlerde oda oda temiz zemin değişimi"
    ],
    faqs: [
      {
        question: "İzmit Yahya Kaptan'da eşyalı evde parke değişimi yapıyor musunuz?",
        answer: "Evet, eşyalarınızı odadan odaya dikkatlice kaydırarak evinizde kalırken zeminleri yeniliyoruz."
      }
    ]
  },
  "derince": {
    slug: "derince",
    name: "Derince",
    region: "Kocaeli",
    intro: "Derince genelinde konut ve iş yerlerine yönelik güvenilir laminat parke döşeme hizmeti sunuyoruz. Zemin şapının düzeltilmesinden süpürgelik montajına kadar tüm aşamaları titizlikle tamamlıyoruz. Derince parke ustası kadromuzla estetik ve uzun ömürlü mekanlar yaratıyoruz.",
    neighbors: [
      { name: "İzmit", slug: "izmit", region: "kocaeli" },
      { name: "Körfez", slug: "korfez", region: "kocaeli" }
    ],
    highlights: [
      "Ekonomik ve kaliteli parke çeşitleri",
      "Garantili usta işçiliği",
      "Ücretsiz yerinde keşif"
    ],
    faqs: [
      {
        question: "Derince'de süpürgelik modelleriniz nelerdir?",
        answer: "6cm, 8cm ve 10cm lake ve PVC süpürgelik seçeneklerini zemin renginizle uyumlu olarak sunuyoruz."
      }
    ]
  },
  "korfez": {
    slug: "korfez",
    name: "Körfez",
    region: "Kocaeli",
    intro: "Körfez (Tütünçiftlik ve Hereke) bölgesinde konutlara ve işletmelere özel parke çözümleri sunuyoruz. Sahil hattındaki nem faktörünü dikkate alarak alt izolasyonu güçlü laminat parkeler döşüyoruz. Körfez parke ustası arayışınızda 1. sınıf işçilik ve uygun fiyatlarla yanınızdayız.",
    neighbors: [
      { name: "Derince", slug: "derince", region: "kocaeli" },
      { name: "Dilovası", slug: "dilovasi", region: "kocaeli" }
    ],
    highlights: [
      "Tütünçiftlik ve Hereke'de hızlı keşif imkanı",
      "Neme dayanıklı şilte ve parke uygulaması",
      "Zamanında ve temiz teslimat"
    ],
    faqs: [
      {
        question: "Körfez sahil evlerinde parke bakımı nasıl olmalıdır?",
        answer: "Nemli bir mikrofiber bezle silinmesi yeterlidir; fazla su bırakılmadığı sürece parkeler onlarca yıl formunu korur."
      }
    ]
  },
  "karamursel": {
    slug: "karamursel",
    name: "Karamürsel",
    region: "Kocaeli",
    intro: "Karamürsel'in sahil evleri, yazlık konutları ve ferah dairelerinde estetik laminat ve lamine parke montajı yapıyoruz. Körfez manzaralı yaşam alanlarınıza sıcak ahşap dokunuşlar kazandırıyoruz. Karamürsel parke ustası olarak titiz işçilik ve kaliteli malzeme sağlıyoruz.",
    neighbors: [
      { name: "Gölcük", slug: "golcuk", region: "kocaeli" }
    ],
    highlights: [
      "Sahil konutlarına uygun suya dayanıklı parke alternatifleri",
      "Ücretsiz keşif ve numune servisi",
      "Temiz ve özenli montaj"
    ],
    faqs: [
      {
        question: "Karamürsel'e servisiniz var mı?",
        answer: "Evet, Karamürsel'in tüm mahallelerine keşif ve montaj ekibimiz düzenli olarak hizmet vermektedir."
      }
    ]
  },
  "golcuk": {
    slug: "golcuk",
    name: "Gölcük",
    region: "Kocaeli",
    intro: "Gölcük ve Değirmendere sahilindeki modern konutlarda uzman parke döşeme hizmeti sağlıyoruz. Değirmendere'nin nezih semtlerinde şık derzli laminat parkeler ve modern lake süpürgeliklerle evleri yeniliyoruz. Gölcük parke ustası ekibimiz sağlam montaj ve garantiyle çalışır.",
    neighbors: [
      { name: "Başiskele", slug: "basiskele", region: "kocaeli" },
      { name: "Karamürsel", slug: "karamursel", region: "kocaeli" }
    ],
    highlights: [
      "Değirmendere sahil evlerine özel neme dayanıklı parkeler",
      "Modern süpürgelik modelleri",
      "Garantili ve tozsuz işçilik"
    ],
    faqs: [
      {
        question: "Değirmendere'de parke montajı ne kadar sürer?",
        answer: "Standart 3+1 daireler genellikle 1 iş günü içinde tamamlanıp teslim edilir."
      }
    ]
  },
  "basiskele": {
    slug: "basiskele",
    name: "Başiskele",
    region: "Kocaeli",
    intro: "Kocaeli'nin en hızlı değer kazanan villa ve lüks konut bölgesi Başiskele'de birinci sınıf parke ustası hizmeti sunuyoruz. Yuvacık, Kullar ve sahil hattındaki modern villalarda yerden ısıtmaya tam uyumlu, geniş formatlı lamine ve laminat zeminler uyguluyoruz. Başiskele parke döşeme ustalarımızla villalarınıza değer katın.",
    neighbors: [
      { name: "İzmit", slug: "izmit", region: "kocaeli" },
      { name: "Gölcük", slug: "golcuk", region: "kocaeli" },
      { name: "Kartepe", slug: "kartepe", region: "kocaeli" }
    ],
    highlights: [
      "Başiskele villalarına özel lüks geniş ebatlı derzli laminat ve lamine parke",
      "Yerden ısıtmalı mekanlara özel yüksek iletkenlikli şilteler",
      "Milimetrik köşe kesimleri ve şık lake süpürgelikler"
    ],
    faqs: [
      {
        question: "Başiskele villalarında yerden ısıtma için hangi parkeyi seçmeliyim?",
        answer: "Isı direnci düşük, yerden ısıtma onaylı 8mm veya 10mm kaliteli laminat parkeleri özel termal şilteyle birlikte uyguluyoruz."
      }
    ]
  },
  "kartepe": {
    slug: "kartepe",
    name: "Kartepe",
    region: "Kocaeli",
    intro: "Kartepe'nin doğayla iç içe dağ eteklerindeki villalarında, otel projelerinde ve modern sitelerinde dayanıklı parke montajı yapıyoruz. Kış aylarındaki zemin soğuğunu kesen kalın yalıtım tabanları ve ahşabın sıcaklığını hissettiren doğal dokulu zeminler kuruyoruz. Kartepe parke ustası ekibimiz her mevsim güvenilir zeminler sunar.",
    neighbors: [
      { name: "İzmit", slug: "izmit", region: "kocaeli" },
      { name: "Başiskele", slug: "basiskele", region: "kocaeli" },
      { name: "Kandıra", slug: "kandira", region: "kocaeli" }
    ],
    highlights: [
      "Dağ ve kır evlerine özel ısı yalıtımlı zemin şilteleri",
      "Doğal ahşap ve rustik meşe desenli laminat parkeler",
      "Garantili işçilik ve ücretsiz keşif"
    ],
    faqs: [
      {
        question: "Kartepe'deki dağ evlerinde zemin soğuğunu nasıl engelliyorsunuz?",
        answer: "Mantar veya kapron bariyerli şilteler kullanarak zeminden gelen soğuk havayı tamamen kesiyoruz."
      }
    ]
  },
  "kandira": {
    slug: "kandira",
    name: "Kandıra",
    region: "Kocaeli",
    intro: "Kandıra'nın Kerpe, Kefken, Cebeci sahil beldelerindeki yazlıklarında ve merkez konutlarında suya ve neme dayanıklı parke montajı yapıyoruz. Karadeniz sahil ikliminin getirdiği neme karşı kabarma yapmayan parafinli derzli laminat zeminler kuruyoruz. Kandıra parke ustası olarak tatil evlerinizi yaza hazırlıyoruz.",
    neighbors: [
      { name: "İzmit", slug: "izmit", region: "kocaeli" },
      { name: "Kartepe", slug: "kartepe", region: "kocaeli" },
      { name: "Şile", slug: "sile", region: "istanbul" }
    ],
    highlights: [
      "Kerpe ve Kefken yazlıklarına özel neme dayanıklı parke çözümleri",
      "Yaz sezonu öncesi hızlı teslimat",
      "Bütçe dostu ve sağlam malzeme seçenekleri"
    ],
    faqs: [
      {
        question: "Kandıra sahilindeki yazlıklarda kışın parke kabarır mı?",
        answer: "Uyguladığımız suya dayanıklı laminat parkeler ve duvar kenarı genleşme payları sayesinde kışın rutubetten etkilenmez."
      }
    ]
  }
};

export const getDistrictInfo = (slug: string): DistrictInfo | undefined => {
  return districtData[slug];
};
