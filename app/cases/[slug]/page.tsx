import CasePageClient from "./client"

// Mock data for static generation
const casesData: Record<string, any> = {
  "app-produtividade": {
    title: "App de Produtividade",
  },
  "plataforma-ecommerce": {
    title: "Plataforma E-commerce",
  },
  "design-system": {
    title: "Design System",
  },
  "mobile-app": {
    title: "Mobile App",
  },
}

export function generateStaticParams() {
  return Object.keys(casesData).map((slug) => ({
    slug,
  }))
}

export default function CasePage() {
  return <CasePageClient />
}
