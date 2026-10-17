"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { Calculator, Phone, MessageCircle, AlertCircle } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Card } from '@/components/ui/card'
import { siteConfig } from '@/config/site.config'
import { trackCalculatorUsage, trackPhoneCall, trackWhatsAppClick } from '@/lib/analytics'
import { calculateEstimate, hasPricingData } from '@/data/pricing'

const formSchema = z.object({
  m2: z.number().min(1, "En az 1 m² girmelisiniz").max(1000, "Çok yüksek bir değer girdiniz"),
  evDurumu: z.enum(["bos", "esyali"]),
  kat: z.string(),
  asansor: z.boolean(),
  eskiParke: z.boolean(),
  supurgelik: z.boolean(),
  il: z.string().min(2, "İl giriniz"),
  ilce: z.string().min(2, "İlçe giriniz"),
})

export function PriceCalculator() {
  const [estimateResult, setEstimateResult] = useState<{
    minTotal: number;
    maxTotal: number;
  } | null>(null)
  const [hasCalculated, setHasCalculated] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      m2: 0,
      evDurumu: "bos",
      kat: "0-2",
      asansor: false,
      eskiParke: false,
      supurgelik: true,
      il: "İstanbul",
      ilce: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    setHasCalculated(true)
    const result = calculateEstimate(values)
    setEstimateResult(result)

    if (result) {
      trackCalculatorUsage(values.m2, result.minTotal)
    } else {
      trackCalculatorUsage(values.m2, 0)
    }
  }

  const currentValues = form.getValues();
  const pricingAvailable = hasPricingData();

  const whatsappCalcMessage = encodeURIComponent(
    `Merhaba Parke Ustam, web sitenizdeki hesaplayıcı üzerinden fiyat talebi oluşturmak istiyorum:\n` +
    `• Alan: ${currentValues.m2 || 0} m²\n` +
    `• Durum: ${currentValues.evDurumu === 'esyali' ? 'Eşyalı' : 'Boş'} Ev\n` +
    `• Konum: ${currentValues.ilce ? currentValues.ilce + ', ' : ''}${currentValues.il}\n` +
    `• Kat / Asansör: ${currentValues.kat}. kat / ${currentValues.asansor ? 'Asansör var' : 'Asansör yok'}\n` +
    `• Ek İşlemler: ${currentValues.eskiParke ? 'Eski parke sökümü var, ' : ''}${currentValues.supurgelik ? 'Süpürgelik montajı var' : ''}\n\n` +
    `Lazer metre ile yerinde ücretsiz keşif ve net işçilik teklifi rica ediyorum.`
  );

  return (
    <section id="hesaplama" className="py-20 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-primary/5 -skew-y-3 origin-top-left z-0 pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
              <Calculator className="w-4 h-4" />
              <span>Hızlı & Şeffaf Fiyatlandırma</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Tahmini İşçilik <br />
              <span className="text-primary">Maliyetini Görün</span>
            </h2>
            <p className="text-lg text-foreground/70">
              Uygulama yapılacak alanın detaylarını girin. Parke döşeme, süpürgelik montajı ve zemin durumuna göre net işçilik teklifinizi hazırlayalım.
            </p>
            
            {hasCalculated && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-8 p-6 glass rounded-2xl border border-primary/30 shadow-2xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-3xl rounded-full" />
                
                {pricingAvailable && estimateResult ? (
                  <>
                    <p className="text-sm font-medium text-foreground/70 mb-2">Tahmini İşçilik Tutarı ({currentValues.m2} m²)</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl sm:text-5xl font-extrabold text-foreground">
                        {estimateResult.minTotal === estimateResult.maxTotal
                          ? estimateResult.minTotal.toLocaleString('tr-TR')
                          : `${estimateResult.minTotal.toLocaleString('tr-TR')} - ${estimateResult.maxTotal.toLocaleString('tr-TR')}`}
                      </span>
                      <span className="text-2xl text-primary font-semibold">TL</span>
                    </div>
                    <p className="text-xs text-foreground/50 mt-4">* Sadece işçilik bedelidir. Kesin fiyat yerinde lazer ölçümüyle verilir.</p>
                  </>
                ) : (
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-primary font-semibold text-base">
                      <AlertCircle className="w-5 h-5 shrink-0" />
                      <span>{currentValues.m2} m² Alan İçin Ücretsiz Keşif Teklifi</span>
                    </div>
                    <p className="text-xs sm:text-sm text-foreground/75 leading-relaxed">
                      Net işçilik bedeli mekanınızın mastar/şap durumu, kapı altı payları ve süpürgelik tül metresine göre netleşir. Sürpriz maliyet çıkmaması için ustamız yerinde ücretsiz keşif yapmaktadır.
                    </p>
                  </div>
                )}
                
                <div className="flex flex-col sm:flex-row gap-3 mt-6">
                  <Button 
                    className="w-full gap-2 rounded-xl h-12" 
                    asChild
                    onClick={() => trackPhoneCall('calculator_result')}
                  >
                    <a href={`tel:${siteConfig.phoneRaw}`}>
                      <Phone className="w-4 h-4" /> Ustayı Ara: {siteConfig.phoneFormatted}
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full gap-2 rounded-xl h-12 border-primary/30 text-primary hover:bg-primary hover:text-white" 
                    asChild
                    onClick={() => trackWhatsAppClick('calculator_result')}
                  >
                    <a href={`https://wa.me/${siteConfig.whatsappRaw}?text=${whatsappCalcMessage}`} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-4 h-4" /> WhatsApp&apos;tan Teklif İste
                    </a>
                  </Button>
                </div>
              </motion.div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-6 md:p-8 glass border-border shadow-xl">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="m2"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Alan (m²)</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              placeholder="Örn: 50"
                              value={field.value ? field.value : ''}
                              onChange={(e) => field.onChange(e.target.value === '' ? 0 : Number(e.target.value))}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="kat"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Kat Durumu</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Kat seçin" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="0-2">Giriş / 1. Kat / 2. Kat</SelectItem>
                              <SelectItem value="3+">3. Kat ve Üzeri</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="evDurumu"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel>Ev Durumu</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-col space-y-1 sm:flex-row sm:space-x-4 sm:space-y-0"
                          >
                            <FormItem className="flex items-center space-x-3 space-y-0 p-3 border rounded-lg flex-1 cursor-pointer hover:bg-muted/50 transition-colors">
                              <FormControl>
                                <RadioGroupItem value="bos" />
                              </FormControl>
                              <FormLabel className="font-normal cursor-pointer w-full">Boş Ev</FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0 p-3 border rounded-lg flex-1 cursor-pointer hover:bg-muted/50 transition-colors">
                              <FormControl>
                                <RadioGroupItem value="esyali" />
                              </FormControl>
                              <FormLabel className="font-normal cursor-pointer w-full">Eşyalı Ev</FormLabel>
                            </FormItem>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <FormField
                      control={form.control}
                      name="asansor"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                          <FormControl>
                            <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel className="cursor-pointer">Asansör Var</FormLabel>
                          </div>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="eskiParke"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                          <FormControl>
                            <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel className="cursor-pointer">Eski Parke Sökümü</FormLabel>
                          </div>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="supurgelik"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                          <FormControl>
                            <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel className="cursor-pointer">Süpürgelik Montajı</FormLabel>
                          </div>
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="il"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>İl</FormLabel>
                          <FormControl>
                            <Input placeholder="İl (İstanbul / Kocaeli)" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="ilce"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>İlçe</FormLabel>
                          <FormControl>
                            <Input placeholder="İlçe (Örn: Pendik)" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full text-base font-semibold h-12 shadow-lg shadow-primary/20 hover:scale-[1.01] transition-transform">
                    {pricingAvailable ? "Tahmini Fiyatı Hesapla" : "Ücretsiz Keşif ve Fiyat Teklifi İste"}
                  </Button>
                </form>
              </Form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
