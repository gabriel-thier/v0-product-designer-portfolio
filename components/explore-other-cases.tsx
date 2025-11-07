"use client"

import Link from "next/link"
import Image from "next/image"

const cases = [
  {
    id: 1,
    title: "App de Produtividade",
    category: "Product Design",
    year: "2024",
    slug: "app-produtividade",
    thumbnail: "/productivity-app-design-interface.jpg",
  },
  {
    id: 2,
    title: "Plataforma E-commerce",
    category: "UX/UI Design",
    year: "2024",
    slug: "plataforma-ecommerce",
    thumbnail: "/ecommerce-platform-design.jpg",
  },
  {
    id: 3,
    title: "Design System",
    category: "Design System",
    year: "2023",
    slug: "design-system",
    thumbnail: "/design-system-components.jpg",
  },
  {
    id: 4,
    title: "Mobile App",
    category: "Mobile Design",
    year: "2023",
    slug: "mobile-app",
    thumbnail: "/mobile-financial-app-design.jpg",
  },
]

export default function ExploreOtherCases({ currentSlug }: { currentSlug: string }) {
  const otherCases = cases.filter((c) => c.slug !== currentSlug)

  return (
    <section className="mt-24 pt-16 border-t border-border">
      <p className="text-xs uppercase tracking-wider text-muted-foreground mb-8">Explorar outros cases</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {otherCases.map((caseItem) => (
          <Link key={caseItem.id} href={`/cases/${caseItem.slug}`} className="group">
            <div className="overflow-hidden rounded aspect-video bg-card mb-4">
              <Image
                src={caseItem.thumbnail || "/placeholder.svg"}
                alt={caseItem.title}
                width={400}
                height={300}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">{caseItem.category}</p>
            <h3 className="text-lg font-light group-hover:translate-x-1 transition-transform">{caseItem.title}</h3>
            <p className="text-xs text-muted-foreground mt-2">{caseItem.year}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}
