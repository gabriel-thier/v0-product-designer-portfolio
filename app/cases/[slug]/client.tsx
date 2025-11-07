"use client"

import { useParams } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import Header from "@/components/header"
import CaseContent from "@/components/case-content"
import ExploreOtherCases from "@/components/explore-other-cases"

// Mock data - Replace with your actual cases data
const casesData: Record<string, any> = {
  "app-produtividade": {
    title: "App de Produtividade",
    category: "Product Design",
    year: "2024",
    description:
      "Redesign completo de uma aplicação de gerenciamento de tarefas, focando em melhorar a experiência do usuário",
    content: {
      overview: "Trabalhei no redesign de um app de produtividade existente...",
      challenge: "O desafio era simplificar uma interface complexa mantendo todas as funcionalidades.",
      solution: "Realizei pesquisa com usuários e implementei um novo sistema de navegação...",
    },
  },
  "plataforma-ecommerce": {
    title: "Plataforma E-commerce",
    category: "UX/UI Design",
    year: "2024",
    description: "Interface de checkout e catálogo de produtos de alta conversão",
    content: {
      overview: "Desenvolvimento completo de e-commerce...",
      challenge: "Aumentar a taxa de conversão do checkout.",
      solution: "Redesenhei o fluxo com feedback A/B testing...",
    },
  },
  "design-system": {
    title: "Design System",
    category: "Design System",
    year: "2023",
    description: "Sistema de design documentado para equipe de 20+ designers",
    content: {},
  },
  "mobile-app": {
    title: "Mobile App",
    category: "Mobile Design",
    year: "2023",
    description: "Aplicação financeira com foco em acessibilidade e inclusão",
    content: {},
  },
}

export default function CasePageClient() {
  const params = useParams()
  const slug = params.slug as string
  const caseData = casesData[slug]

  if (!caseData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl mb-4">Caso não encontrado</h1>
          <Link href="/" className="text-primary hover:underline">
            Voltar para início
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 py-16 md:py-24">
        <Link href="/" className="flex items-center gap-2 text-sm hover:text-muted-foreground transition-colors mb-12">
          <ArrowLeft size={18} />
          Voltar
        </Link>

        <div className="mb-16">
          <p className="text-xs uppercase tracking-wider text-muted-foreground mb-4">{caseData.year}</p>
          <h1 className="text-4xl md:text-5xl font-light mb-8 leading-tight">{caseData.title}</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">{caseData.description}</p>
        </div>

        {/* Editable Content Area */}
        <CaseContent caseSlug={slug} />

        <ExploreOtherCases currentSlug={slug} />
      </main>
    </div>
  )
}
