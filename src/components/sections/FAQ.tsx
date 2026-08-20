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
    answer: "Normal büyüklükteki bir evin (yaklaşık 80-100 m²) parke döşeme işlemi genellikle 1-2 iş günü içerisinde tamamlanmaktadır. Eşyalı evlerde bu süre eşya taşıma durumuna göre değişebilir."
  },
  {
    question: "Eşyalı evde parke değişimi yapılıyor mu?",
    answer: "Evet, yapıyoruz. Eşyalarınızı oda oda taşıyarak parke değişimini gerçekleştiriyoruz. Bu işlem ekstra zaman ve işçilik gerektirdiği için fiyata cüzi bir miktar yansıtılmaktadır."
  },
  {
    question: "Fiyatlarınıza malzeme dahil mi?",
    answer: "Sitemizdeki fiyat hesaplama aracı sadece tahmini 'işçilik' bedelini gösterir. Kullanılacak parkenin türüne (laminat, masif, lamine vb.) ve kalitesine göre malzeme fiyatı ayrıca hesaplanır."
  },
  {
    question: "Keşif ücretli mi?",
    answer: "Hayır, İstanbul içi tüm bölgelere ücretsiz keşif hizmetimiz bulunmaktadır. Uzman ekibimiz yerinde ölçüm yapar ve size en uygun fiyatı sunar."
  },
  {
    question: "Süpürgelik montajı fiyata dahil mi?",
    answer: "Süpürgelik montajı ayrı bir işçilik kalemidir. Fiyat hesaplama modülünde veya keşif sırasında süpürgelik talebinizi belirttiğinizde toplam fiyata dahil edilerek size sunulur."
  },
  {
    question: "Hizmet bölgeleriniz nerelerdir?",
    answer: "Öncelikli olarak İstanbul Anadolu Yakası parke döşeme taleplerinizi karşılıyoruz. Ayrıca Kocaeli parke döşeme ve Gebze parke ustası ihtiyaçlarınızda da tecrübeli ekibimizle hizmetinizdeyiz. İstanbul parke döşeme ve İstanbul parke ustası denildiğinde akla ilk gelen firmalardan biri olarak müşteri memnuniyeti garantisi veriyoruz."
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
            Aklınıza takılan soruların cevaplarını burada bulabilirsiniz.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion className="w-full space-y-4">
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


