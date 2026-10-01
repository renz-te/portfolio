import { useInView } from '../hooks/useInView'
import { MessageCircle, Mail, Globe } from 'lucide-react'

const GithubIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
)

const LinkedinIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
)



export default function Contact() {
  const { ref, isInView } = useInView()

  return (
    <section id="contact" className="relative py-28 bg-secondary-bg overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-primary-accent/5 blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-highlight/5 blur-[100px]" />

      <div ref={ref} className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="text-primary-accent font-semibold text-sm tracking-widest uppercase">
            Let's Connect
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-light-text tracking-tight">
            Get In Touch
          </h2>
          <div className="mt-4 mx-auto w-20 h-1 bg-gradient-to-r from-primary-accent to-secondary-accent rounded-full" />
          <p className="mt-6 text-muted-text max-w-md mx-auto leading-relaxed">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about tech.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5 mb-14">
          
          {/* Card 1: Mobile & Messaging */}
          <div
            className={`group block p-6 rounded-2xl bg-primary-bg/60 border border-primary-accent/10 hover:border-primary-accent/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary-accent/5 text-center flex flex-col items-center lg:col-span-2 ${
              isInView ? 'animate-fade-in-up' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.2s' }}
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-accent/20 to-secondary-accent/20 flex items-center justify-center group-hover:from-primary-accent/30 group-hover:to-secondary-accent/30 transition-all duration-300 mb-4">
              <MessageCircle size={24} className="text-primary-accent" />
            </div>
            <h3 className="text-light-text font-bold text-sm mb-2">Mobile & Messaging</h3>
            <a href="tel:+639331001712" className="text-muted-text text-xs leading-relaxed hover:text-primary-accent transition-colors block mt-auto">
              0933 100 1712
            </a>
            <a href="tel:+639942133053" className="text-muted-text text-xs leading-relaxed hover:text-primary-accent transition-colors block mt-1">
              0994 213 3053
            </a>
          </div>

          {/* Card 2: Email */}
          <a
            href="mailto:danlagterence01@gmail.com"
            className={`group block p-6 rounded-2xl bg-primary-bg/60 border border-primary-accent/10 hover:border-primary-accent/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary-accent/5 text-center flex flex-col items-center justify-center lg:col-span-2 ${
              isInView ? 'animate-fade-in-up' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.3s' }}
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-accent/20 to-secondary-accent/20 flex items-center justify-center group-hover:from-primary-accent/30 group-hover:to-secondary-accent/30 transition-all duration-300 mb-4">
              <Mail size={24} className="text-primary-accent" />
            </div>
            <h3 className="text-light-text font-bold text-sm mb-2">Email</h3>
            <span className="mt-auto text-muted-text text-xs leading-relaxed group-hover:text-primary-accent transition-colors">
              danlagterence01@gmail.com
            </span>
          </a>

          {/* Card 3: Location & Availability */}
          <a
            href="https://maps.google.com/?q=General+Trias,+Cavite,+Philippines"
            target="_blank"
            rel="noopener noreferrer"
            className={`group block p-6 rounded-2xl bg-primary-bg/60 border border-primary-accent/10 hover:border-primary-accent/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary-accent/5 text-center flex flex-col items-center lg:col-span-2 ${
              isInView ? 'animate-fade-in-up' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.4s' }}
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-accent/20 to-secondary-accent/20 flex items-center justify-center group-hover:from-primary-accent/30 group-hover:to-secondary-accent/30 transition-all duration-300 mb-4">
              <Globe size={24} className="text-primary-accent" />
            </div>
            <h3 className="text-light-text font-bold text-sm mb-2">Location & Availability</h3>
            <span className="text-muted-text text-xs leading-relaxed block mt-auto">
              General Trias, Cavite, PH
            </span>
            <span className="text-muted-text text-xs leading-relaxed block mt-1">
              Open to Remote & Hybrid roles
            </span>
            <div className="mt-3">
              <span className="text-primary-accent text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                View on Map →
              </span>
            </div>
          </a>

          {/* Card 4: GitHub */}
          <a
            href="https://github.com/renz-te"
            target="_blank"
            rel="noopener noreferrer"
            className={`group block p-6 rounded-2xl bg-primary-bg/60 border border-primary-accent/10 hover:border-primary-accent/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary-accent/5 text-center flex flex-col items-center md:col-span-1 lg:col-span-2 lg:col-start-2 ${
              isInView ? 'animate-fade-in-up' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.5s' }}
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-accent/20 to-secondary-accent/20 flex items-center justify-center group-hover:from-primary-accent/30 group-hover:to-secondary-accent/30 transition-all duration-300 mb-4">
              <GithubIcon size={24} className="text-primary-accent" />
            </div>
            <h3 className="text-light-text font-bold text-sm mb-2">GitHub</h3>
            <span className="mt-auto text-muted-text text-xs leading-relaxed group-hover:text-primary-accent transition-colors">
              github.com/renz-te
            </span>
          </a>

          {/* Card 5: LinkedIn */}
          <a
            href="https://linkedin.com/in/terence-danlag-a3500b3ba/"
            target="_blank"
            rel="noopener noreferrer"
            className={`group block p-6 rounded-2xl bg-primary-bg/60 border border-primary-accent/10 hover:border-primary-accent/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary-accent/5 text-center flex flex-col items-center md:col-span-1 lg:col-span-2 ${
              isInView ? 'animate-fade-in-up' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.6s' }}
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-accent/20 to-secondary-accent/20 flex items-center justify-center group-hover:from-primary-accent/30 group-hover:to-secondary-accent/30 transition-all duration-300 mb-4">
              <LinkedinIcon size={24} className="text-primary-accent" />
            </div>
            <h3 className="text-light-text font-bold text-sm mb-2">LinkedIn</h3>
            <span className="mt-auto text-muted-text text-xs leading-relaxed group-hover:text-primary-accent transition-colors">
              Terence Danlag
            </span>
          </a>

        </div>

      </div>
    </section>
  )
}
