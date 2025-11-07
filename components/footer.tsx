export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <p className="text-xs uppercase tracking-wide text-muted-foreground mb-4">Links</p>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Email
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wide text-muted-foreground mb-4">Menu</p>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="/" className="hover:text-foreground transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Casos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Sobre
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex justify-between items-center text-xs text-muted-foreground">
          <p>© 2025 Designer. Todos os direitos reservados.</p>
          <p>Crafted with elegance</p>
        </div>
      </div>
    </footer>
  )
}
