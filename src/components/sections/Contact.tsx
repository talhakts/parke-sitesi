"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Mail, MapPin, Send, CheckCircle2, ArrowRight, MessageSquare, User, MapPinned, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { districts } from '@/lib/districts'
import { siteConfig } from '@/config/site.config'
import { trackFormSubmission, trackPhoneCall, trackWhatsAppClick } from '@/lib/analytics'

interface ContactProps {
  initialDistrict?: string;
}

export function Contact({ initialDistrict = "" }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    district: initialDistrict,
    message: '',
    kvkkConsent: false,
    honeypot: '' // Spam koruma honeypot alanı
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Spam honeypot kontrolü
    if (formData.honeypot) {
      return;
    }

    if (!formData.name.trim() || !formData.phone.trim()) {
      setErrorMessage("Lütfen adınızı ve telefon numaranızı giriniz.");
      return;
    }

    if (!formData.kvkkConsent) {
      setErrorMessage("Lütfen KVKK Aydınlatma Metni'ni onaylayınız.");
      return;
    }

    setIsSubmitting(true);

    // Simüle edilmiş güvenli form gönderimi
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      trackFormSubmission(formData.district || initialDistrict);
    }, 600);
  };

  const whatsappMessage = encodeURIComponent(
    `Merhaba Parke Ustam, web sitenizden keşif ve fiyat teklifi almak istiyorum.\n\nİsim: ${formData.name || 'Belirtilmedi'}\nTelefon: ${formData.phone || 'Belirtilmedi'}\nİlçe: ${formData.district || initialDistrict || 'Belirtilmedi'}\nMesaj / Alan: ${formData.message || 'Belirtilmedi'}`
  );

  return (
    <section id="iletisim" className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 blur-[100px] rounded-full pointer-events-none" />
      
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
                Ücretsiz keşif talebi, anında işçilik teklifi veya zemin hakkında merak ettiğiniz sorular için formu doldurabilir ya da doğrudan arayabilirsiniz.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 glass rounded-2xl border border-white/20 hover:border-primary/30 transition-colors">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-medium text-foreground/50 uppercase tracking-wider">Telefon / WhatsApp</p>
                  <a 
                    href={`tel:${siteConfig.phoneRaw}`} 
                    onClick={() => trackPhoneCall('contact_section')}
                    className="text-xl font-bold text-foreground hover:text-primary transition-colors"
                  >
                    {siteConfig.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 glass rounded-2xl border border-white/20 hover:border-primary/30 transition-colors">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-medium text-foreground/50 uppercase tracking-wider">E-posta</p>
                  <a href={`mailto:${siteConfig.email}`} className="text-xl font-bold text-foreground hover:text-primary transition-colors">
                    {siteConfig.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 glass rounded-2xl border border-white/20 hover:border-primary/30 transition-colors">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-medium text-foreground/50 uppercase tracking-wider">Hizmet Alanımız</p>
                  <p className="text-base sm:text-lg font-bold text-foreground">
                    {siteConfig.serviceAreas.primary}
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-primary/5 border border-primary/20 space-y-2">
              <p className="font-semibold text-foreground text-sm flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Çalışma Saatleri & Dönüş Süresi
              </p>
              <p className="text-xs text-foreground/75 leading-relaxed">
                {siteConfig.workingHours}. {siteConfig.responseTime}.
              </p>
            </div>
          </motion.div>

          {/* Sağ Taraf: İletişim Formu */}
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
                  className="space-y-4"
                >
                  <div className="space-y-1">
                    <h3 className="text-2xl font-bold text-foreground">Ücretsiz Keşif Formu</h3>
                    <p className="text-sm text-foreground/70">
                      Bilgilerinizi bırakın, parke ustamız size en uygun teklifle ulaşsın.
                    </p>
                  </div>

                  {/* Anti-spam Honeypot (görünmez) */}
                  <input
                    type="text"
                    name="website_check"
                    value={formData.honeypot}
                    onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  {errorMessage && (
                    <div className="p-3 rounded-xl bg-destructive/10 border border-destructive/30 text-destructive text-xs font-medium">
                      {errorMessage}
                    </div>
                  )}

                  {/* İsim Alanı */}
                  <div className="space-y-1">
                    <label htmlFor="contact-name" className="text-xs font-semibold text-foreground/80 flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-primary" />
                      Adınız ve Soyadınız <span className="text-primary">*</span>
                    </label>
                    <Input
                      id="contact-name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Örn: Ahmet Demir"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="h-11 bg-background/60 rounded-xl text-sm"
                    />
                  </div>

                  {/* Telefon Alanı */}
                  <div className="space-y-1">
                    <label htmlFor="contact-phone" className="text-xs font-semibold text-foreground/80 flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-primary" />
                      Telefon Numaranız <span className="text-primary">*</span>
                    </label>
                    <Input
                      id="contact-phone"
                      type="tel"
                      required
                      autoComplete="tel"
                      inputMode="tel"
                      placeholder="Örn: 0535 000 00 00"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="h-11 bg-background/60 rounded-xl text-sm"
                    />
                  </div>

                  {/* İlçe Alanı */}
                  <div className="space-y-1">
                    <label htmlFor="contact-district" className="text-xs font-semibold text-foreground/80 flex items-center gap-1.5">
                      <MapPinned className="w-3.5 h-3.5 text-primary" />
                      Bulunduğunuz İlçe / Bölge
                    </label>
                    <div className="relative">
                      <input
                        list="district-list"
                        id="contact-district"
                        type="text"
                        autoComplete="address-level2"
                        placeholder="İlçe seçin veya yazın (Örn: Kadıköy, Gebze...)"
                        value={formData.district}
                        onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                        className="w-full h-11 bg-background/60 rounded-xl border border-input px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 text-foreground"
                      />
                      <datalist id="district-list">
                        {districts.map((d, i) => (
                          <option key={i} value={`${d.name} (${d.region === "Kocaeli" ? "Kocaeli" : "İstanbul"})`} />
                        ))}
                      </datalist>
                    </div>
                  </div>

                  {/* Mesaj Alanı */}
                  <div className="space-y-1">
                    <label htmlFor="contact-message" className="text-xs font-semibold text-foreground/80 flex items-center gap-1.5">
                      <MessageSquare className="w-3.5 h-3.5 text-primary" />
                      Talebiniz / Yaklaşık Metrekare
                    </label>
                    <textarea
                      id="contact-message"
                      rows={2}
                      placeholder="Örn: 90 m² salon ve odalara laminat parke döşeme + süpürgelik montajı."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-background/60 rounded-xl border border-input p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 resize-none text-foreground"
                    />
                  </div>

                  {/* KVKK Onay Kutusu */}
                  <div className="pt-1">
                    <label className="flex items-start gap-2.5 cursor-pointer text-xs text-foreground/75 select-none">
                      <input
                        type="checkbox"
                        checked={formData.kvkkConsent}
                        onChange={(e) => setFormData({ ...formData, kvkkConsent: e.target.checked })}
                        className="mt-0.5 rounded border-border text-primary focus:ring-primary w-4 h-4 shrink-0"
                        required
                      />
                      <span>
                        Kişisel verilerimin teklif ve keşif amacıyla işlenmesine dair{' '}
                        <Link href="/aydinlatma-metni" target="_blank" className="text-primary underline underline-offset-2 hover:text-primary/80">
                          KVKK Aydınlatma Metni&apos;ni
                        </Link>{' '}
                        okudum ve kabul ediyorum. <span className="text-primary">*</span>
                      </span>
                    </label>
                  </div>

                  {/* Gönder Butonu */}
                  <Button 
                    type="submit" 
                    size="lg" 
                    disabled={isSubmitting}
                    className="w-full h-13 rounded-full text-base font-semibold gap-2 shadow-lg shadow-primary/20 hover:scale-[1.01] transition-transform"
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

                  <div className="text-center pt-1">
                    <a
                      href={`https://wa.me/${siteConfig.whatsappRaw}?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackWhatsAppClick('contact_form_fallback')}
                      className="text-xs text-foreground/70 hover:text-primary transition-colors inline-flex items-center gap-1"
                    >
                      <span>Veya doğrudan WhatsApp üzerinden hızlı teklif isteyin</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </motion.form>
              ) : (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-6 space-y-5"
                >
                  <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 text-primary flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10 text-primary" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-foreground">Talebiniz Başarıyla Alındı!</h3>
                    <p className="text-foreground/75 text-sm max-w-sm mx-auto">
                      Teşekkür ederiz Sayın <strong className="text-foreground">{formData.name}</strong>. Talebiniz ustamıza iletildi; en kısa sürede telefonla aranarak keşif randevunuz netleştirilecektir.
                    </p>
                  </div>

                  <div className="pt-2 space-y-3">
                    <Button 
                      size="lg" 
                      className="w-full h-12 rounded-full gap-2 shadow-lg shadow-primary/20"
                      asChild
                      onClick={() => trackWhatsAppClick('success_screen')}
                    >
                      <a 
                        href={`https://wa.me/${siteConfig.whatsappRaw}?text=${whatsappMessage}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        WhatsApp&apos;tan Anında Onay Al <ArrowRight className="w-4 h-4" />
                      </a>
                    </Button>

                    <Button 
                      variant="ghost" 
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ name: '', phone: '', district: initialDistrict, message: '', kvkkConsent: false, honeypot: '' });
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
