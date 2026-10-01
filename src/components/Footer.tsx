import { ArrowUp } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-primary-bg border-t border-primary-accent/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10 md:py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left Side: Brand and Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <a href="#" onClick={scrollToTop} className="text-xl font-bold tracking-tight group flex items-center">
              <span className="text-primary-accent group-hover:text-secondary-accent transition-colors duration-300">
                T
              </span>
              <span className="text-light-text group-hover:text-white transition-colors duration-300">
                D
              </span>
              <span className="inline-block w-2 h-2 rounded-full bg-highlight ml-0.5" />
            </a>
            <p className="text-sm text-muted-text/80">
              © {currentYear} Terence Danlag. All rights reserved.
            </p>
          </div>

          {/* Right Side: Back to Top (with padding to clear FAB) */}
          <div className="flex flex-col items-center md:items-end md:pr-16 lg:pr-24">
            <a
              href="#"
              onClick={scrollToTop}
              className="group flex items-center gap-1.5 text-xs font-semibold text-muted-text/70 hover:text-primary-accent transition-colors duration-300"
            >
              BACK TO TOP 
              <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>

        </div>
      </div>
    </footer>
  )
}
