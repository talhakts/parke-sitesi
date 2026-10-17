import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { blogPosts, getBlogPostBySlug } from '@/data/blogPosts';
import { siteConfig } from '@/config/site.config';
import { Calendar, Clock, ArrowRight, ShieldCheck, CheckCircle2, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {};
  }

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    robots: {
      index: !post.draft, // draft: true iken Google indeksine kapalı (noindex)
      follow: true,
    },
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: `${siteConfig.url}/blog/${post.slug}`,
      siteName: siteConfig.name,
      locale: "tr_TR",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle,
      description: post.metaDescription,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.metaDescription,
    "datePublished": post.date,
    "dateModified": post.date,
    "author": {
      "@type": "Organization",
      "name": siteConfig.name,
      "url": siteConfig.url
    },
    "publisher": {
      "@type": "Organization",
      "name": siteConfig.name,
      "url": siteConfig.url
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/blog/${post.slug}`
    }
  };

  return (
    <div className="flex flex-col w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="pt-24 pb-4 bg-muted/30 border-b border-border/30">
        <Breadcrumb items={[
          { name: 'Blog', href: '/blog' },
          { name: post.title }
        ]} />
      </div>

      <main className="py-12 lg:py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-10">
          
          {/* Taslak Uyarısı (draft: true iken) */}
          {post.draft && (
            <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs sm:text-sm text-amber-800 dark:text-amber-300 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
              <div>
                <strong>Taslak Durumu (Yayına Kapalı / noindex):</strong> Bu yazı şu anda Google indeksine kapalıdır. Sahibi inceleyip onayladığında <code>draft: false</code> yapılarak arama motorlarına açılacaktır.
              </div>
            </div>
          )}

          {/* Başlık ve Meta Bilgisi */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-primary">
              <span className="px-3 py-1 rounded-full bg-primary/10">
                {post.category}
              </span>
              <span>•</span>
              <div className="flex items-center gap-1 text-foreground/60">
                <Clock className="w-3.5 h-3.5" />
                <span>{post.readTime}</span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              {post.title}
            </h1>

            <div className="flex items-center gap-2 text-xs text-foreground/50 pt-1">
              <Calendar className="w-3.5 h-3.5" />
              <span>Yayın Tarihi: {new Date(post.date).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
              <span>•</span>
              <span>Yazar: {siteConfig.name} Usta Ekibi</span>
            </div>
          </div>

          {/* Makale Gövdesi */}
          <article className="space-y-8 text-foreground/80 leading-relaxed text-base sm:text-lg">
            {post.sections.map((sec, idx) => (
              <section key={idx} className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                  {sec.heading}
                </h2>
                {sec.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className="leading-relaxed">
                    {p}
                  </p>
                ))}

                {sec.tips && sec.tips.length > 0 && (
                  <div className="p-5 rounded-2xl bg-primary/5 border border-primary/20 space-y-2 mt-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4" />
                      Usta Tavsiyesi & Püf Noktası
                    </span>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-foreground/85">
                      {sec.tips.map((tip, tIdx) => (
                        <li key={tIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </section>
            ))}
          </article>

          {/* İlgili Hizmet ve Fiyat Rehberi İç Link Kartı */}
          <div className="glass p-8 rounded-3xl border border-primary/20 shadow-xl space-y-4">
            <h3 className="text-xl font-bold text-foreground">Profesyonel Destek mi Arıyorsunuz?</h3>
            <p className="text-sm text-foreground/75 leading-relaxed">
              Zemin yenileme, parke montajı veya süpürgelik işçiliğiniz için alanında uzman usta kadromuzla yanınızdayız. Lazer metre ile yerinde ücretsiz keşif hizmetimizden faydalanın.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <Button asChild size="lg" className="w-full sm:w-auto rounded-full font-semibold">
                <Link href={post.relatedService.href}>
                  <span>{post.relatedService.title}</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto rounded-full border-primary/30">
                <Link href="/parke-doseme-fiyatlari">
                  <span>2026 İşçilik Fiyatlarını Görün</span>
                </Link>
              </Button>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
