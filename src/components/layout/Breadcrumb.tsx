import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  name: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  const allItems: BreadcrumbItem[] = [
    { name: 'Ana Sayfa', href: '/' },
    ...items,
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: allItems.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      ...(item.href ? { item: `https://www.parkeustam.com${item.href}` } : {}),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Breadcrumb" className="py-3 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full text-xs sm:text-sm text-foreground/60">
        <ol className="flex items-center flex-wrap gap-1 sm:gap-2">
          {allItems.map((item, index) => {
            const isLast = index === allItems.length - 1;
            return (
              <li key={index} className="flex items-center gap-1 sm:gap-2">
                {index === 0 && <Home className="w-3.5 h-3.5 text-primary shrink-0" />}
                {isLast || !item.href ? (
                  <span className="font-semibold text-foreground truncate max-w-[200px] sm:max-w-none" aria-current="page">
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="hover:text-primary transition-colors hover:underline underline-offset-2"
                  >
                    {item.name}
                  </Link>
                )}
                {!isLast && <ChevronRight className="w-3 h-3 text-foreground/40 shrink-0" />}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
