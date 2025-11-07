"use client"

import Link from "next/link"
import { Linkedin, Mail } from "lucide-react"
import Header from "@/components/header"
import CasesList from "@/components/cases-list"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="px-4 py-20 md:py-32">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16">
              <span className="text-sm uppercase tracking-wide text-muted-foreground mb-4 block">Bem-vindo</span>
              <h1 className="text-4xl md:text-6xl font-light leading-tight mb-8">
                Designer de Produto <span className="font-normal">focado em soluções elegantes</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Criação de interfaces intuitivas e experiências memoráveis através de design que equilibra beleza e
                funcionalidade.
              </p>
            </div>

            <div className="flex gap-4 mb-20 flex-wrap">
              <Link
                href="https://linkedin.com/in/seu-perfil"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
              >
                <Linkedin size={18} />
                LinkedIn
              </Link>
              <a
                href="mailto:gabriel.thier@gmail.com"
                className="flex items-center gap-2 px-6 py-3 border border-border hover:bg-secondary transition-colors"
              >
                <Mail size={18} />
                Email
              </a>
            </div>

            <div className="border-t border-border pt-12 mt-12">
              <p className="text-sm text-muted-foreground mb-4">Selected Work</p>
            </div>
          </div>
        </section>

        {/* Cases Section */}
        <section className="px-4 py-12 md:py-20">
          <div className="max-w-6xl mx-auto">
            <CasesList />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
