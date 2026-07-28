"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { Calculator, Phone, MessageCircle } from 'lucide-react'

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

const formSchema = z.object({
  m2: z.coerce.number().min(1, "En az 1 m² girmelisiniz").max(1000, "Çok yüksek bir değer girdiniz"),
  evDurumu: z.enum(["bos", "esyali"]),
  kat: z.string(),
  asansor: z.boolean().default(false),
  eskiParke: z.boolean().default(false),
  supurgelik: z.boolean().default(false),
  il: z.string().min(2, "İl giriniz"),
  ilce: z.string().min(2, "İlçe giriniz"),
})

export function PriceCalculator() {
  const [estimatedPrice, setEstimatedPrice] = useState<number | null>(null)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema) as any,
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
    const basePricePerM2 = 120 // Örnek taban işçilik fiyatı
    let price = values.m2 * basePricePerM2

    // Eşyalı ev çarpanı (+20%)
    if (values.evDurumu === "esyali") {
      price *= 1.20
    }

    // Kat çarpanı (3. kat ve üzeri +10%)
    if (values.kat === "3+") {
      price *= 1.10
    }

    // Asansör yoksa (+5%)
    if (!values.asansor && values.kat === "3+") {
      price *= 1.05
    }

    // Eski parke sökümü (m2 başına ek 30 TL)
    if (values.eskiParke) {
      price += (values.m2 * 30)
    }

    // Süpürgelik montajı (m2 başına ek 20 TL)
    if (values.supurgelik) {
      price += (values.m2 * 20)
    }

    setEstimatedPrice(Math.round(price))
  }

  return (
    <section id="hesaplama" className="py-20 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-primary/5 -skew-y-3 origin-top-left z-0" />
      
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
              <span className="text-primary">Bedelini Hesaplayın</span>
            </h2>
            <p className="text-lg text-foreground/70">
              Uygulama yapılacak alanın detaylarını girerek anında yaklaşık işçilik maliyetini görün. Unutmayın, kesin fiyat ücretsiz keşif sonrasında belirlenmektedir.
            </p>
            
            {estimatedPrice !== null && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-8 p-6 glass rounded-2xl border border-primary/30 shadow-2xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-3xl rounded-full" />
                <p className="text-sm font-medium text-foreground/70 mb-2">Tahmini İşçilik Tutarı</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-extrabold text-foreground">{estimatedPrice.toLocaleString('tr-TR')}</span>
                  <span className="text-2xl text-primary font-semibold">TL</span>
                </div>
                <p className="text-xs text-foreground/50 mt-4">* Sadece işçilik bedelidir. Malzeme dahil değildir. Net fiyat keşif sonrası verilir.</p>
                
                <div className="flex gap-4 mt-6">
                  <Button className="w-full gap-2" asChild>
                    <a href="tel:+905555555555">
                      <Phone className="w-4 h-4" /> Ara
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full gap-2 border-primary/30 text-primary hover:bg-primary hover:text-white" asChild>
                    <a href="https://wa.me/905555555555" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-4 h-4" /> WhatsApp
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
                            <Input type="number" placeholder="Örn: 50" {...field} />
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
                          <FormLabel>Kat Sayısı</FormLabel>
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
                            <FormLabel className="cursor-pointer">Eski Parke Sökülecek</FormLabel>
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
                            <Input placeholder="İl" {...field} />
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
                            <Input placeholder="İlçe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full text-lg h-12 shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform">
                    Tahmini Fiyatı Hesapla
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
