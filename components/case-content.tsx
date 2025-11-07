"use client"

import { useState } from "react"
import { Plus, Save, X } from "lucide-react"

interface ContentBlock {
  id: string
  type: "text" | "image" | "video"
  content: string
  title?: string
}

export default function CaseContent({ caseSlug }: { caseSlug: string }) {
  const [blocks, setBlocks] = useState<ContentBlock[]>([
    {
      id: "1",
      type: "text",
      title: "Desafio",
      content: "Clique aqui para adicionar o desafio do projeto...",
    },
    {
      id: "2",
      type: "text",
      title: "Solução",
      content: "Clique aqui para adicionar a solução implementada...",
    },
  ])

  const [editingId, setEditingId] = useState<string | null>(null)
  const [editContent, setEditContent] = useState("")

  const addBlock = (type: "text" | "image" | "video") => {
    const newBlock: ContentBlock = {
      id: Date.now().toString(),
      type,
      content: type === "image" ? "" : type === "video" ? "" : "Novo bloco de texto...",
      title: type === "text" ? "Nova Seção" : undefined,
    }
    setBlocks([...blocks, newBlock])
  }

  const updateBlock = (id: string, content: string) => {
    setBlocks(blocks.map((b) => (b.id === id ? { ...b, content } : b)))
    setEditingId(null)
  }

  const deleteBlock = (id: string) => {
    setBlocks(blocks.filter((b) => b.id !== id))
  }

  const startEdit = (block: ContentBlock) => {
    setEditingId(block.id)
    setEditContent(block.content)
  }

  return (
    <div className="space-y-12">
      {/* Content Blocks */}
      {blocks.map((block) => (
        <div key={block.id} className="group">
          {block.type === "text" && (
            <div>
              {block.title && <h2 className="text-2xl font-light mb-4">{block.title}</h2>}
              {editingId === block.id ? (
                <div className="space-y-4">
                  <textarea
                    value={editContent}
                    onChange={(e) => setEditContent(e.target.value)}
                    className="w-full min-h-32 p-4 border border-border bg-card text-foreground font-sans rounded focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Escreva seu conteúdo aqui..."
                  />
                  <div className="flex gap-2">
                    <button
                      onClick={() => updateBlock(block.id, editContent)}
                      className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground hover:opacity-90 transition-opacity text-sm"
                    >
                      <Save size={16} />
                      Salvar
                    </button>
                    <button
                      onClick={() => setEditingId(null)}
                      className="flex items-center gap-2 px-4 py-2 border border-border hover:bg-secondary transition-colors text-sm"
                    >
                      <X size={16} />
                      Cancelar
                    </button>
                  </div>
                </div>
              ) : (
                <p
                  onClick={() => startEdit(block)}
                  className="text-muted-foreground leading-relaxed cursor-pointer hover:text-foreground transition-colors"
                >
                  {block.content}
                </p>
              )}
            </div>
          )}

          {block.type === "image" && (
            <div className="border border-dashed border-border p-8 rounded flex flex-col items-center justify-center min-h-64 bg-card hover:bg-secondary transition-colors cursor-pointer">
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files?.[0]
                  if (file) {
                    const reader = new FileReader()
                    reader.onload = (event) => {
                      updateBlock(block.id, event.target?.result as string)
                    }
                    reader.readAsDataURL(file)
                  }
                }}
                className="hidden"
                id={`image-${block.id}`}
              />
              <label htmlFor={`image-${block.id}`} className="cursor-pointer flex flex-col items-center">
                <Plus size={24} className="mb-2 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Clique para adicionar imagem</span>
              </label>
            </div>
          )}

          {block.type === "video" && (
            <div className="border border-dashed border-border p-8 rounded flex flex-col items-center justify-center min-h-64 bg-card">
              {editingId === block.id ? (
                <div className="w-full space-y-4">
                  <input
                    type="text"
                    value={editContent}
                    onChange={(e) => setEditContent(e.target.value)}
                    placeholder="Cole a URL do vídeo (YouTube, Vimeo, etc)"
                    className="w-full p-3 border border-border bg-background text-foreground font-sans rounded focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <div className="flex gap-2">
                    <button
                      onClick={() => updateBlock(block.id, editContent)}
                      className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground hover:opacity-90 transition-opacity text-sm"
                    >
                      <Save size={16} />
                      Salvar
                    </button>
                    <button
                      onClick={() => setEditingId(null)}
                      className="flex items-center gap-2 px-4 py-2 border border-border hover:bg-secondary transition-colors text-sm"
                    >
                      <X size={16} />
                      Cancelar
                    </button>
                  </div>
                </div>
              ) : (
                <button
                  onClick={() => startEdit(block)}
                  className="flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Plus size={24} className="mb-2" />
                  <span className="text-sm">Clique para adicionar vídeo</span>
                </button>
              )}
            </div>
          )}

          {/* Block Controls */}
          <div className="mt-6 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              onClick={() => deleteBlock(block.id)}
              className="px-3 py-1 text-xs border border-border hover:bg-destructive hover:text-white transition-colors"
            >
              Deletar
            </button>
          </div>
        </div>
      ))}

      {/* Add Block Buttons */}
      <div className="border-t border-border pt-12">
        <p className="text-xs uppercase tracking-wide text-muted-foreground mb-6">Adicionar novo bloco</p>
        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => addBlock("text")}
            className="px-4 py-2 border border-border hover:bg-secondary transition-colors text-sm flex items-center gap-2"
          >
            <Plus size={16} />
            Texto
          </button>
          <button
            onClick={() => addBlock("image")}
            className="px-4 py-2 border border-border hover:bg-secondary transition-colors text-sm flex items-center gap-2"
          >
            <Plus size={16} />
            Imagem
          </button>
          <button
            onClick={() => addBlock("video")}
            className="px-4 py-2 border border-border hover:bg-secondary transition-colors text-sm flex items-center gap-2"
          >
            <Plus size={16} />
            Vídeo
          </button>
        </div>
      </div>
    </div>
  )
}
