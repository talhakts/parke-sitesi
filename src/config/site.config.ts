/**
 * Parke Ustam - Merkezi Site ve İletişim Yapılandırması
 * Tüm bileşenler ve meta veriler tek doğruluk kaynağı (Single Source of Truth) olarak burayı kullanır.
 */

export const siteConfig = {
  name: "Parke Ustam",
  legalName: "Parke Ustam Zemin Kaplama Sistemleri", // TODO(sahibi doldurmalı: Resmi ticari unvan)
  taxNumber: "", // TODO(sahibi doldurmalı: Vergi no/dairesi gerekirse)
  url: "https://www.parkeustam.com",
  
  // İletişim Bilgileri
  phone: "+90 535 506 71 30",
  phoneRaw: "+905355067130",
  phoneFormatted: "0535 506 71 30",
  whatsapp: "+90 535 506 71 30",
  whatsappRaw: "905355067130",
  email: "info@parkeustam.com",
  
  // Çalışma Saatleri ve Dönüş Süresi
  workingHours: "Haftanın 7 Günü: 08:00 – 21:00",
  openingHoursSchema: {
    opens: "08:00",
    closes: "21:00",
    days: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ]
  },
  responseTime: "Mesai saatleri (08:00 – 21:00) içerisinde en kısa sürede dönüş",

  // Hizmet Bölgesi Bilgisi
  serviceAreas: {
    primary: "İstanbul Anadolu Yakası, Gebze ve Tüm İstanbul",
    description: "İstanbul (Anadolu & Avrupa Yakası) ve Kocaeli (Gebze, Darıca, Çayırova) genelinde yerinde ücretsiz keşif.",
    cities: ["İstanbul", "Kocaeli"]
  },

  // Konum / Adres
  address: {
    // TODO(sahibi doldurmalı: Google İşletme Profili doğrulanmış açık adres)
    city: "İstanbul",
    region: "Anadolu Yakası",
    country: "TR",
    hasPhysicalStore: false, // Mobil servis usta modeli olduğu için sabit mağaza yoksa false
  },

  // Doğrulanamayan İddialar ve Sosyal Kanıtlar (Rule 10 gereği config'de toplanmıştır)
  claims: {
    // Sahibi onaylayana ve resmi kaynak bağlanana kadar kurgusal/abartılı değerler gösterilmez.
    googleRating: {
      enabled: false, // TODO(sahibi doldurmalı: Google İşletme Profili API / resmi linki bağlanınca true yapılacak)
      score: null,
      reviewCount: null,
      profileUrl: "" // TODO(sahibi doldurmalı: Google Maps profili linki)
    },
    experienceYears: null, // "30+ yıl" gibi teyitsiz değerler yerine ustanın gerçek tecrübe yılı girilmelidir
    warrantyPeriod: "Uygulama ve işçilik güvencesi", // TODO(sahibi doldurmalı: Garanti kapsamı/süresi)
  }
} as const;

export type SiteConfig = typeof siteConfig;
