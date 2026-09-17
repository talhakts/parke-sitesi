export interface District {
  name: string;
  slug: string;
  region: "Avrupa Yakası" | "Anadolu Yakası" | "Kocaeli";
}

const slugify = (text: string) => {
  return text
    .toString()
    .toLowerCase()
    .replace(/ş/g, "s")
    .replace(/ı/g, "i")
    .replace(/ğ/g, "g")
    .replace(/ü/g, "u")
    .replace(/ö/g, "o")
    .replace(/ç/g, "c")
    .replace(/â/g, "a")
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w-]+/g, "") // Remove all non-word chars
    .replace(/--+/g, "-") // Replace multiple - with single -
    .trim();
};

const createDistricts = (names: string[], region: District["region"]): District[] => {
  return names.map((name) => ({
    name,
    slug: slugify(name),
    region,
  }));
};

const istanbulAvrupa = [
  "Arnavutköy", "Avcılar", "Bağcılar", "Bahçelievler", "Bakırköy",
  "Başakşehir", "Bayrampaşa", "Beşiktaş", "Beylikdüzü", "Beyoğlu",
  "Büyükçekmece", "Çatalca", "Esenler", "Esenyurt", "Eyüpsultan",
  "Fatih", "Gaziosmanpaşa", "Güngören", "Kâğıthane", "Küçükçekmece",
  "Sarıyer", "Silivri", "Sultangazi", "Şişli", "Zeytinburnu"
];

const istanbulAnadolu = [
  "Adalar", "Ataşehir", "Beykoz", "Çekmeköy", "Kadıköy",
  "Kartal", "Maltepe", "Pendik", "Sancaktepe", "Sultanbeyli",
  "Şile", "Tuzla", "Ümraniye", "Üsküdar"
];

const kocaeli = [
  "Gebze", "Darıca", "Çayırova", "Dilovası", "İzmit",
  "Derince", "Körfez", "Karamürsel", "Gölcük", "Başiskele",
  "Kartepe", "Kandıra"
];

export const districts: District[] = [
  ...createDistricts(istanbulAvrupa, "Avrupa Yakası"),
  ...createDistricts(istanbulAnadolu, "Anadolu Yakası"),
  ...createDistricts(kocaeli, "Kocaeli"),
];

export const getDistrictBySlug = (slug: string): District | undefined => {
  return districts.find((d) => d.slug === slug);
};

export const getDistrictsByRegion = (region: District["region"]): District[] => {
  return districts.filter((d) => d.region === region);
};
