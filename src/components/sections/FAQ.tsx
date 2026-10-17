"use client"

import React from 'react'
import { motion } from 'framer-motion'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Parke döşeme işlemi ne kadar sürer?",
    answer: "Standart, boş ve zemin hazırlığı tamamlanmış 80-100 m² bir dairenin laminat parke döşeme ve süpürgelik montajı genellikle 1-2 iş günü içerisinde tamamlanmaktadır. Eşyalı dairelerde mobilyaların oda oda aktarılması veya zemin tesviye ihtiyacı süreyi değiştirebilir."
  },
  {
    question: "Eşyalı evde parke değişimi yapılıyor mu?",
    answer: "Evet, yapıyoruz. Eşyalarınızı oda oda güvenle kaydırarak parke yenilemesini gerçekleştiriyoruz. Bu süreç ek iş gücü ve mesai gerektirdiğinden toplam işçilik bedeline cüzi bir eşya taşıma payı yansıtılmaktadır."
  },
  {
    question: "Fiyatlarınıza malzeme dahil mi?",
    answer: "Sitemizdeki fiyat hesaplama aracı ve genel fiyat bilgilendirmeleri sadece profesyonel 'işçilik' bedelini gösterir. Kullanılacak parkenin sınıfı (AC3, AC4, AC5), kalınlığı (8mm, 10mm, 12mm) ve süpürgelik tipine göre malzeme teminini siz yapabilir veya malzeme dahil anahtar teslim teklif alabilirsiniz."
  },
  {
    question: "Keşif hizmetiniz ücretli mi?",
    answer: "Hayır. İstanbul Anadolu Yakası ve Kocaeli/Gebze başta olmak üzere hizmet verdiğimiz tüm bölgelerde yerinde keşif hizmetimiz ücretsizdir. Alanınızı lazer metreyle ölçüp şap durumunu inceleyerek net ve şeffaf fiyat teklifi sunuyoruz."
  },
  {
    question: "Süpürgelik montajı fiyata dahil mi?",
    answer: "Süpürgelik montajı tül metre (uzunluk) üzerinden hesaplanan ayrı bir işçilik kalemidir. Seçtiğiniz süpürgeliğin yüksekliğine (6 cm, 8 cm, 10 cm lake MDF veya PVC) ve köşe gönye kesim ihtiyacına göre keşif sırasında netleştirilerek teklife eklenir."
  },
  {
    question: "Laminat parke altına hangi şilte kullanılmalıdır?",
    answer: "Parke altına 2-3 mm yüksek yoğunluklu, nem bariyerli kapalı hücreli şilteler serilmelidir. 5 mm ve üzeri aşırı kalın veya yumuşak şilteler esneme yaratarak parke kilit tırnaklarının kırılmasına yol açabilir. Yerden ısıtmalı evlerde ise termal iletkenliği onaylı folyolu özel şilte tercih edilmelidir."
  },
  {
    question: "Parke döşenmeden önce zemin nasıl olmalıdır?",
    answer: "Uygulama yapılacak şapın tamamen kurumuş (nem oranı %2'nin altında), temiz ve düzgün olması şarttır. 2 metrelik mastar altında 2 milimetreden fazla sapma olan engebeli zeminlerde kilit kırılması ve gıcırdama olmaması için önceden self-leveling tesviye şapı veya lokal tamir harcı uygulanmalıdır."
  },
  {
    question: "Hizmet bölgeleriniz nerelerdir?",
    answer: "Öncelikli olarak İstanbul Anadolu Yakası (Pendik, Kartal, Maltepe, Kadıköy, Ataşehir, Ümraniye, Tuzla, Sancaktepe, Sultanbeyli, Çekmeköy) ve Kocaeli Gebze, Darıca, Çayırova bölgelerine hızlı mobil keşif ve usta hizmeti sunuyoruz."
  }
]

export function FAQ() {
  return (
    <section id="sss" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl font-bold text-foreground mb-4"
          >
            Sık Sorulan <span className="text-primary">Sorular</span>
          </motion.h2>
          <p className="text-foreground/70">
            Parke döşeme, zemin hazırlığı ve uygulama süreçleri hakkında merak edilenlerin doğru yanıtları.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion defaultValue={["item-0"]} className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="glass px-6 rounded-xl border-border/50">
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70 leading-relaxed pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
        
        {/* FAQ Schema for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
              }))
            })
          }}
        />
      </div>
    </section>
  )
}
