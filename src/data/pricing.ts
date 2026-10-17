/**
 * Parke Döşeme ve İşçilik Fiyatları Veri Dosyası (2026)
 * 
 * KESİN KURAL: Uydurma/tahmini fiyat yazılmaz.
 * TODO(sahibi doldurmalı): Tüm fiyat ve çarpan alanları işletme sahibi tarafından doldurulmalıdır.
 * Değerler null iken sistem fiyat uydurmaz; kullanıcıyı "Ücretsiz Keşif / WhatsApp Teklifi"ne yönlendirir.
 */

export interface PricingConfig {
  lastUpdated: string | null; // örn: "15 Mart 2026"
  isPricingActive: boolean;   // Sahibi tüm fiyatları onaylayınca true yapılır

  // Birim İşçilik Fiyatları (TL)
  labor: {
    // 1 m² Laminat Parke Döşeme İşçiliği (Taban)
    laminatePerM2: {
      min: number | null; // TODO(sahibi doldurmalı: örn. 120)
      max: number | null; // TODO(sahibi doldurmalı: örn. 160)
    };
    // 1 Tül Metre Süpürgelik Montajı (Lake / MDF / PVC)
    skirtingPerMeter: {
      min: number | null; // TODO(sahibi doldurmalı: örn. 30)
      max: number | null; // TODO(sahibi doldurmalı: örn. 50)
    };
    // 1 m² Eski Parke Sökümü ve Çuvallama
    removalPerM2: {
      min: number | null; // TODO(sahibi doldurmalı: örn. 35)
      max: number | null; // TODO(sahibi doldurmalı: örn. 55)
    };
    // 1 m² Zemin Tesviye / Tamir Harcı Uygulaması
    levelingPerM2: {
      min: number | null; // TODO(sahibi doldurmalı)
      max: number | null; // TODO(sahibi doldurmalı)
    };
  };

  // Hesaplama Katsayıları ve Çarpanlar
  multipliers: {
    furnishedHomePercent: number | null; // TODO(sahibi doldurmalı: Eşyalı ev ek işçilik yüzdesi, örn: 20)
    highFloorPercent: number | null;     // TODO(sahibi doldurmalı: 3. kat ve üzeri yüzdesi, örn: 10)
    noElevatorPercent: number | null;    // TODO(sahibi doldurmalı: Asansörsüz taşıma yüzdesi, örn: 5)
  };

  // Örnek Daire Senaryoları (Boş daire standart işçilik)
  sampleFlats: Array<{
    m2: number;
    title: string;
    description: string;
  }>;
}

export const pricingData: PricingConfig = {
  lastUpdated: null, // TODO(sahibi doldurmalı: örn: "Nisan 2026")
  isPricingActive: false, // TODO(sahibi doldurmalı: Değerler girilince true yapın)

  labor: {
    laminatePerM2: {
      min: null, // TODO(sahibi doldurmalı)
      max: null, // TODO(sahibi doldurmalı)
    },
    skirtingPerMeter: {
      min: null, // TODO(sahibi doldurmalı)
      max: null, // TODO(sahibi doldurmalı)
    },
    removalPerM2: {
      min: null, // TODO(sahibi doldurmalı)
      max: null, // TODO(sahibi doldurmalı)
    },
    levelingPerM2: {
      min: null, // TODO(sahibi doldurmalı)
      max: null, // TODO(sahibi doldurmalı)
    },
  },

  multipliers: {
    furnishedHomePercent: null, // TODO(sahibi doldurmalı)
    highFloorPercent: null,     // TODO(sahibi doldurmalı)
    noElevatorPercent: null,    // TODO(sahibi doldurmalı)
  },

  sampleFlats: [
    {
      m2: 50,
      title: "1+1 Daire (50 m²)",
      description: "Salon ve 1 yatak odası laminat parke döşeme + süpürgelik montajı",
    },
    {
      m2: 80,
      title: "2+1 Daire (80 m²)",
      description: "Salon, 2 oda ve koridor laminat parke döşeme + süpürgelik montajı",
    },
    {
      m2: 100,
      title: "3+1 Daire (100 m²)",
      description: "Geniş salon, 3 oda ve koridor laminat parke döşeme + lake süpürgelik",
    },
  ],
};

/**
 * Fiyat verisinin girilip girilmediğini kontrol eder
 */
export function hasPricingData(): boolean {
  return (
    pricingData.isPricingActive &&
    pricingData.labor.laminatePerM2.min !== null &&
    pricingData.labor.laminatePerM2.min > 0
  );
}

/**
 * Hesaplayıcı için tahmini tutar hesaplama fonksiyonu
 * Değerler eksikse güvenli şekilde null döner.
 */
export function calculateEstimate(params: {
  m2: number;
  evDurumu: 'bos' | 'esyali';
  kat: string;
  asansor: boolean;
  eskiParke: boolean;
  supurgelik: boolean;
}): { minTotal: number; maxTotal: number } | null {
  if (!hasPricingData()) {
    return null;
  }

  const baseMin = pricingData.labor.laminatePerM2.min!;
  const baseMax = pricingData.labor.laminatePerM2.max ?? baseMin;

  let minTotal = params.m2 * baseMin;
  let maxTotal = params.m2 * baseMax;

  // Eşyalı ev çarpanı
  if (params.evDurumu === 'esyali' && pricingData.multipliers.furnishedHomePercent) {
    const factor = 1 + pricingData.multipliers.furnishedHomePercent / 100;
    minTotal *= factor;
    maxTotal *= factor;
  }

  // Kat çarpanı
  if (params.kat === '3+' && pricingData.multipliers.highFloorPercent) {
    const factor = 1 + pricingData.multipliers.highFloorPercent / 100;
    minTotal *= factor;
    maxTotal *= factor;
  }

  // Asansörsüz çarpanı
  if (!params.asansor && params.kat === '3+' && pricingData.multipliers.noElevatorPercent) {
    const factor = 1 + pricingData.multipliers.noElevatorPercent / 100;
    minTotal *= factor;
    maxTotal *= factor;
  }

  // Eski parke sökümü
  if (params.eskiParke && pricingData.labor.removalPerM2.min) {
    minTotal += params.m2 * pricingData.labor.removalPerM2.min;
    maxTotal += params.m2 * (pricingData.labor.removalPerM2.max ?? pricingData.labor.removalPerM2.min);
  }

  // Süpürgelik montajı
  if (params.supurgelik && pricingData.labor.skirtingPerMeter.min) {
    // Ortalama metrekare başına tül metre yaklaşık m2 * 0.9 olarak hesaplanır
    const approxMeters = params.m2 * 0.9;
    minTotal += approxMeters * pricingData.labor.skirtingPerMeter.min;
    maxTotal += approxMeters * (pricingData.labor.skirtingPerMeter.max ?? pricingData.labor.skirtingPerMeter.min);
  }

  return {
    minTotal: Math.round(minTotal),
    maxTotal: Math.round(maxTotal),
  };
}
