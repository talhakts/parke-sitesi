const fs = require('fs');
const path = require('path');

const faqPath = path.join(__dirname, 'src', 'components', 'sections', 'FAQ.tsx');
let faqContent = fs.readFileSync(faqPath, 'utf8');

const newFaqs = 
  {
    question: "İstanbul Anadolu Yakası'nda hangi ilçelere parke döşeme hizmeti veriyorsunuz?",
    answer: "Başta Pendik parke döşeme ve Kartal parke döşeme olmak üzere İstanbul Anadolu Yakası'nın tüm ilçelerine profesyonel parke ustası hizmeti sunuyoruz. Pendik parke ustası ve Kartal parke ustası arayışlarınızda hızlı ve güvenilir çözümler için bize ulaşabilirsiniz."
  },
  {
    question: "Hizmet bölgeleriniz nerelerdir?",
    answer: "Öncelikli olarak İstanbul Anadolu Yakası parke döşeme taleplerinizi karşılıyoruz. Ayrıca Kocaeli parke döşeme ve Gebze parke ustası ihtiyaçlarınızda da tecrübeli ekibimizle hizmetinizdeyiz. İstanbul parke döşeme ve İstanbul parke ustası denildiğinde akla ilk gelen firmalardan biri olarak müşteri memnuniyeti garantisi veriyoruz."
  }
];

// Replace the closing bracket of the faqs array
faqContent = faqContent.replace(/}\n\]/, },\n\\n]);
fs.writeFileSync(faqPath, faqContent, 'utf8');

const layoutPath = path.join(__dirname, 'src', 'app', 'layout.tsx');
let layoutContent = fs.readFileSync(layoutPath, 'utf8');

const newKeywords = ["Parke ustası", "istanbul parke döşeme", "istanbul parke ustası", "parke döşeme", "pendik parke döşeme", "pendik parke ustası", "kartal parke ustası", "kartal parke döşeme", "Anadolu Yakası Parke", "Gebze Parke Ustas", "Kocaeli Parke"];
layoutContent = layoutContent.replace(/keywords:\s*\[.*?\]/, \keywords: \\);
fs.writeFileSync(layoutPath, layoutContent, 'utf8');

console.log('Update complete.');
