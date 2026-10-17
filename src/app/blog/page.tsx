import { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumb } from '@/components/layout/Breadcrumb'
import { BookOpen, ArrowRight, Calendar, Clock } from 'lucide-react'
import { blogPosts } from '@/data/blogPosts'

export const metadata: Metadata = {
  title: "Parke & Zemin Rehberi Blog | Parke Ustam",
  description: "Laminat parke döşeme, süpürgelik montajı, zemin bakımı ve parke kabarması gibi konularda usta tavsiyeleri ve teknik rehberler.",
  alternates: {
    canonical: "/blog",
  },
}

export default function BlogIndexPage() {
  return (
    <div className="flex flex-col w-full">
      <div className="pt-24 pb-4 bg-muted/30 border-b border-border/30">
        <Breadcrumb items={[{ name: "Blog & Zemin Rehberi" }]} />
      </div>

      <main className="py-12 lg:py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <BookOpen className="w-4 h-4" />
              <span>Usta Bilgisi ve Teknik İpuçları</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
              Parke ve Zemin <span className="text-primary">Rehberi</span>
            </h1>
            <p className="text-foreground/70 text-base sm:text-lg">
              Eviniz veya iş yeriniz için doğru parke seçimi, profesyonel montaj standartları ve zemin bakımı hakkında usta tavsiyeleri.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="glass p-7 rounded-3xl border border-border/60 hover:border-primary/40 transition-all flex flex-col justify-between group shadow-sm hover:shadow-xl hover:-translate-y-1"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs text-foreground/60">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h2 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-sm text-foreground/70 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-border/40 flex items-center justify-between">
                  <span className="text-xs text-foreground/50 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {new Date(post.date).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' })}
                  </span>
                  
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline underline-offset-4"
                  >
                    <span>Yazıyı Oku</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

        </div>
      </main>
    </div>
  )
}
