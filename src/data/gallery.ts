/**
 * Galeri ve İş Fotoğrafları Veri Dosyası
 * 
 * KURAL: Uydurma referans veya kalıp tekrar alt metinleri eklenmez.
 * TODO(sahibi doldurmalı): Gerçek saha uygulama fotoğrafları ve önce/sonra kareleri buraya eklenmelidir.
 */

export interface GalleryItem {
  id: string | number;
  title: string;
  alt: string; // Doğal ve görsele özgü açıklama
  src: string;
  district?: string; // İlçe özel eşleşmesi (küçük harf slug)
  service: string;
  isRealPhoto: boolean; // Sahibi gerçek iş fotoğrafı ekleyince true
}

export const galleryConfig = {
  // TODO(sahibi doldurmalı): Gerçek önce/sonra fotoğrafları eklenince true yapılacak
  hasRealBeforeAfter: false,
  beforeAfter: {
    title: "Eski Zemin Sökümü ve Yeni Derzli Parke Uygulaması",
    description: "Hasarlı ve kabarmış eski ahşap zeminin sökülerek yerine nem bariyerli laminat ve lake süpürgelik montajı.",
    beforeSrc: "/images/before-after.webp",
    beforeAlt: "Yıpranmış ve su hasarı görmüş eski parke zemin durumu",
    afterSrc: "/images/service-laminate.webp",
    afterAlt: "Yeni döşenmiş derzli laminat parke ve lake süpürgelik sonucu"
  }
};

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Salon Kilitli Laminat Montajı",
    alt: "Geniş pencere ışığı altında montajı tamamlanmış açık meşe laminat parke yüzeyi",
    src: "/images/gallery/g1.webp",
    service: "Laminat Parke",
    isRealPhoto: false
  },
  {
    id: 2,
    title: "Derzli Plank Zemin Uygulaması",
    alt: "Oda duvar birleşimlerinde genleşme payı bırakılarak döşenen V kanallı derzli parke detayı",
    src: "/images/gallery/g2.webp",
    district: "pendik",
    service: "Derzli Parke",
    isRealPhoto: false
  },
  {
    id: 3,
    title: "Lake Süpürgelik Köşe Birleşimi",
    alt: "45 derece gönye kesimle duvar köşesine sıfır oturtulmuş beyaz lake süpürgelik işçiliği",
    src: "/images/gallery/g3.webp",
    district: "kartal",
    service: "Lake Süpürgelik",
    isRealPhoto: false
  },
  {
    id: 4,
    title: "Modern Konut Zemin Yenileme",
    alt: "Mobilyasız boş salonda süpürgelikleriyle birlikte teslim edilen gri tonlu parke uygulaması",
    src: "/images/gallery/g4.webp",
    district: "kadikoy",
    service: "Zemin Yenileme",
    isRealPhoto: false
  },
  {
    id: 5,
    title: "Kapı Eşiği ve Geçiş Profili",
    alt: "Oda ile koridor kot farkını eşitleyen alüminyum geçiş çıtası ve süpürgelik montajı",
    src: "/images/gallery/g5.webp",
    district: "maltepe",
    service: "Süpürgelik & Profil",
    isRealPhoto: false
  },
  {
    id: 6,
    title: "Koridor Parke Döşeme İşçiliği",
    alt: "Uzun antre zemininde doğrusal eksende döşenmiş ahşap desenli laminat parkeler",
    src: "/images/gallery/g6.webp",
    district: "gebze",
    service: "Laminat Montaj",
    isRealPhoto: false
  }
];

export function getGalleryItems(districtSlug?: string): GalleryItem[] {
  if (!districtSlug) {
    return galleryItems;
  }
  const normalized = districtSlug.toLowerCase();
  const districtSpecific = galleryItems.filter(item => item.district === normalized);
  if (districtSpecific.length > 0) {
    // İlçe eşleşmesi varsa başa al, geri kalanları ekle
    const others = galleryItems.filter(item => item.district !== normalized);
    return [...districtSpecific, ...others].slice(0, 6);
  }
  return galleryItems;
}
