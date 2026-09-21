"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Mail, MapPin, Send, CheckCircle2, ArrowRight, MessageSquare, User, MapPinned, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { districts } from '@/lib/districts'

interface ContactProps {
  initialDistrict?: string;
}

export function Contact({ initialDistrict = "" }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    district: initialDistrict,
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setIsSubmitting(true);
    // Form submission simulation
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const whatsappMessage = encodeURIComponent(
    `Merhaba Parke Ustam, web sitenizden keşif ve fiyat teklifi almak istiyorum.\n\nİsim: ${formData.name}\nTelefon: ${formData.phone}\nİlçe: ${formData.district || 'Belirtilmedi'}\nMesaj / Alan: ${formData.message || 'Belirtilmedi'}`
  );

  return (
    <section id="iletisim" className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 blur-[100px] rounded-full" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Sol Taraf: İletişim Bilgileri */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Bizimle <span className="text-primary">İletişime Geçin</span>
              </h2>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Ücretsiz keşif talebi, anında fiyat teklifi veya merak ettiğiniz her türlü soru için formu doldurabilir ya da doğrudan arayabilirsiniz.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 glass rounded-2xl border border-white/20 hover:border-primary/30 transition-colors">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-medium text-foreground/50 uppercase tracking-wider">Telefon / WhatsApp</p>
                  <a href="tel:+905355067130" className="text-xl font-bold text-foreground hover:text-primary transition-colors">
                    +90 535 506 71 30
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 glass rounded-2xl border border-white/20 hover:border-primary/30 transition-colors">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-medium text-foreground/50 uppercase tracking-wider">E-posta</p>
                  <a href="mailto:info@parkeustam.com" className="text-xl font-bold text-foreground hover:text-primary transition-colors">
                    info@parkeustam.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 glass rounded-2xl border border-white/20 hover:border-primary/30 transition-colors">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-medium text-foreground/50 uppercase tracking-wider">Hizmet Alanımız</p>
                  <p className="text-lg font-bold text-foreground">
                    İstanbul (Tüm İlçeler), Gebze ve Kocaeli
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-primary/5 border border-primary/20 space-y-2">
              <p className="font-semibold text-foreground text-sm flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Hızlı Yanıt Garantisi
              </p>
              <p className="text-xs text-foreground/70">
                Form üzerinden veya WhatsApp ile gönderilen taleplere genellikle 15 dakika içerisinde dönüş yapılıp ücretsiz keşif planlanır.
              </p>
            </div>
          </motion.div>

          {/* Sağ Taraf: Çalışır İletişim Formu */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass p-8 md:p-10 rounded-3xl border border-white/20 shadow-2xl relative"
          >
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form 
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-5"
                >
                  <div className="space-y-1">
                    <h3 className="text-2xl font-bold text-foreground">Ücretsiz Keşif Formu</h3>
                    <p className="text-sm text-foreground/70">
                      Bilgilerinizi bırakın, parke ustamız size en uygun teklifle ulaşsın.
                    </p>
                  </div>

                  {/* İsim Alanı */}
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-semibold text-foreground/80 flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-primary" />
                      Adınız ve Soyadınız <span className="text-primary">*</span>
                    </label>
                    <Input
                      id="name"
                      type="text"
                      required
                      placeholder="Örn: Mehmet Demir"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="h-12 bg-background/60 rounded-xl text-sm"
                    />
                  </div>

                  {/* Telefon Alanı */}
                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="text-xs font-semibold text-foreground/80 flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-primary" />
                      Telefon Numaranız <span className="text-primary">*</span>
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      placeholder="Örn: 0535 000 00 00"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="h-12 bg-background/60 rounded-xl text-sm"
                    />
                  </div>

                  {/* İlçe Alanı */}
                  <div className="space-y-1.5">
                    <label htmlFor="district" className="text-xs font-semibold text-foreground/80 flex items-center gap-1.5">
                      <MapPinned className="w-3.5 h-3.5 text-primary" />
                      Bulunduğunuz İlçe / Bölge
                    </label>
                    <div className="relative">
                      <input
                        list="district-list"
                        id="district"
                        type="text"
                        placeholder="İlçe seçin veya yazın (Örn: Kadıköy, Gebze...)"
                        value={formData.district}
                        onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                        className="w-full h-12 bg-background/60 rounded-xl border border-input px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                      />
                      <datalist id="district-list">
                        {districts.map((d, i) => (
                          <option key={i} value={`${d.name} (${d.region === "Kocaeli" ? "Kocaeli" : "İstanbul"})`} />
                        ))}
                      </datalist>
                    </div>
                  </div>

                  {/* Mesaj Alanı */}
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs font-semibold text-foreground/80 flex items-center gap-1.5">
                      <MessageSquare className="w-3.5 h-3.5 text-primary" />
                      Talebiniz / Yaklaşık Metrekare
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      placeholder="Örn: 90 m² daire laminat parke döşeme ve süpürgelik montajı yapılacak."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-background/60 rounded-xl border border-input p-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 resize-none"
                    />
                  </div>

                  {/* Gönder Butonu */}
                  <Button 
                    type="submit" 
                    size="lg" 
                    disabled={isSubmitting}
                    className="w-full h-14 rounded-full text-base font-semibold gap-2 shadow-lg shadow-primary/20 hover:scale-[1.01] transition-transform"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Gönderiliyor...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Ücretsiz Keşif ve Fiyat Teklifi Al
                      </>
                    )}
                  </Button>

                  <div className="text-center pt-2">
                    <a
                      href={`https://wa.me/905355067130?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-foreground/70 hover:text-primary transition-colors inline-flex items-center gap-1"
                    >
                      <span>Veya doğrudan WhatsApp üzerinden yazın</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </motion.form>
              ) : (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8 space-y-6"
                >
                  <div className="w-20 h-20 mx-auto rounded-full bg-primary/10 text-primary flex items-center justify-center">
                    <CheckCircle2 className="w-12 h-12 text-primary" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-foreground">Talebiniz Başarıyla Alındı!</h3>
                    <p className="text-foreground/70 text-sm max-w-sm mx-auto">
                      Teşekkür ederiz Sayın <strong className="text-foreground">{formData.name}</strong>. Uzman parke ustamız en kısa sürede sizi arayarak keşif ve detaylı fiyat teklifinizi iletecektir.
                    </p>
                  </div>

                  <div className="pt-2 space-y-3">
                    <Button 
                      size="lg" 
                      className="w-full h-14 rounded-full gap-2 shadow-lg shadow-primary/20"
                      asChild
                    >
                      <a 
                        href={`https://wa.me/905355067130?text=${whatsappMessage}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        WhatsApp'tan Anında Onay Al <ArrowRight className="w-5 h-5" />
                      </a>
                    </Button>

                    <Button 
                      variant="ghost" 
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ name: '', phone: '', district: initialDistrict, message: '' });
                      }}
                      className="text-xs text-foreground/60 hover:text-foreground"
                    >
                      Yeni Talep Gönder
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
