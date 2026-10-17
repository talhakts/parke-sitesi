/**
 * Müşteri ve İşletme Yorumları Veri Dosyası
 * 
 * KESİN KURAL: Uydurma/sahte yorum veya sahte yıldız puanı eklenemez.
 * TODO(sahibi doldurmalı): Gerçek Google Haritalar / müşteri geri bildirimleri buraya girilmelidir.
 * Liste boş olduğu sürece arayüzdeki "Yorumlar" bölümü otomatik olarak gizlenir.
 */

export interface ReviewItem {
  id: string;
  authorName: string; // Gerçek isim veya baş harf, örn: "Ahmet Y."
  district: string;   // Hizmet verilen ilçe, örn: "Pendik"
  city: "İstanbul" | "Kocaeli";
  service: string;    // örn: "Laminat Parke Döşeme"
  date: string;       // YYYY-MM-DD
  comment: string;
  source: "google" | "direct" | "whatsapp";
  rating?: number;    // 1-5 arası (sadece gerçek Google yorumu ise)
  verified: boolean;
}

// TODO(sahibi doldurmalı): Google İşletme Profilinizdeki gerçek yorumları buraya ekleyin.
// Örnek format:
// {
//   id: "rev-1",
//   authorName: "Mehmet K.",
//   district: "Kadıköy",
//   city: "İstanbul",
//   service: "Laminat Parke Döşeme",
//   date: "2025-10-15",
//   comment: "Salon ve koridor parkelerimizi 1 günde titizlikle tamamladılar. Süpürgelik gönyeleri gayet temiz.",
//   source: "google",
//   rating: 5,
//   verified: true
// }
export const reviews: ReviewItem[] = [
  // Sahibi gerçek müşteri onaylı yorumları girene kadar boş bırakılmıştır.
];
