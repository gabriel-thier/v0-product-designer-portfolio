"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

const cases = [
  {
    id: 1,
    title: "App de Produtividade",
    category: "Product Design",
    year: "2024",
    description: "Redesign completo de uma aplicação de gerenciamento de tarefas",
    slug: "app-produtividade",
    thumbnail: "/productivity-app-design-interface.jpg",
  },
  {
    id: 2,
    title: "Plataforma E-commerce",
    category: "UX/UI Design",
    year: "2024",
    description: "Interface de checkout e catálogo de produtos de alta conversão",
    slug: "plataforma-ecommerce",
    thumbnail: "/ecommerce-platform-design.jpg",
  },
  {
    id: 3,
    title: "Design System",
    category: "Design System",
    year: "2023",
    description: "Sistema de design documentado para equipe de 20+ designers",
    slug: "design-system",
    thumbnail: "/design-system-components.jpg",
  },
  {
    id: 4,
    title: "Mobile App",
    category: "Mobile Design",
    year: "2023",
    description: "Aplicação financeira com foco em acessibilidade e inclusão",
    slug: "mobile-app",
    thumbnail: "/mobile-financial-app-design.jpg",
  },
]

export default function CasesList() {
  return (
    <div className="grid gap-8">
      {cases.map((caseItem) => (
        <Link key={caseItem.id} href={`/cases/${caseItem.slug}`} className="group block">
          <div className="border-b border-border pb-8 flex flex-col md:grid md:grid-cols-3 md:gap-8 md:items-start">
            <div className="mb-6 md:mb-0 overflow-hidden rounded aspect-square md:aspect-video bg-card order-2 md:order-1">
              <Image
                src={caseItem.thumbnail || "/placeholder.svg"}
                alt={caseItem.title}
                width={300}
                height={300}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="order-1 md:order-2 md:col-span-2 flex justify-between items-start">
              <div className="flex-1">
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
                  {caseItem.category} — {caseItem.year}
                </p>
                <h2 className="text-2xl md:text-3xl font-light group-hover:translate-x-2 transition-transform mb-4">
                  {caseItem.title}
                </h2>
                <p className="text-muted-foreground text-sm md:text-base max-w-2xl">{caseItem.description}</p>
              </div>
              <ArrowRight
                size={20}
                className="opacity-0 group-hover:opacity-100 transition-opacity mt-1 ml-4 flex-shrink-0"
              />
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
