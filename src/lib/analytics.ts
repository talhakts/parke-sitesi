/**
 * Analytics ve Dönüşüm (CRO) Olay Takip Yardımcısı
 * Google Analytics 4 (gtag), Google Tag Manager veya konsol hata ayıklaması ile uyumludur.
 */

declare global {
  interface Window {
    gtag?: (
      command: 'event' | 'config' | 'js' | 'set',
      action: string,
      params?: Record<string, unknown>
    ) => void;
    dataLayer?: Array<Record<string, unknown>>;
  }
}

export function trackEvent(action: string, category: string, label?: string, value?: number) {
  if (typeof window === 'undefined') return;

  const eventData = {
    event_category: category,
    event_label: label,
    value: value,
  };

  // GA4 gtag mevcutsa çağır
  if (typeof window.gtag === 'function') {
    window.gtag('event', action, eventData);
  }

  // GTM dataLayer mevcutsa push et
  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push({
      event: action,
      ...eventData,
    });
  }

  if (process.env.NODE_ENV === 'development') {
    console.debug(`[Analytics Event] ${action}:`, eventData);
  }
}

// Kolay dönüşüm yardımcı fonksiyonları:
export function trackPhoneCall(source: string) {
  trackEvent('contact_phone_click', 'conversion', `phone_${source}`);
}

export function trackWhatsAppClick(source: string) {
  trackEvent('contact_whatsapp_click', 'conversion', `whatsapp_${source}`);
}

export function trackFormSubmission(district?: string) {
  trackEvent('lead_form_submitted', 'conversion', district || 'general');
}

export function trackCalculatorUsage(m2: number, price: number) {
  trackEvent('calculator_estimate_calculated', 'engagement', `${m2}_m2`, price);
}
