import { useState } from 'react'
import { useInView } from '../hooks/useInView'
import {
  ExternalLink,
  Code2,
  Layers,
  UtensilsCrossed,
  Landmark,
  BookOpen,
  Car,
  Rocket,
  Globe,
} from 'lucide-react'

/* ── Types ─────────────────────────────────────────────── */

interface ProjectButton {
  label: string
  href: string
  primary?: boolean          // visually prominent CTA
  icon: typeof ExternalLink
}

interface Project {
  title: string
  status: string
  statusColor: string
  description: string
  techStack: string[]
  buttons: ProjectButton[]
  icon: typeof Layers
  gradient: string
  accentRing: string
  categories: FilterType[]
}

type FilterType = 'All' | 'Web' | 'Development' | 'Others'

const filterOptions: FilterType[] = ['All', 'Web', 'Development', 'Others']

/* ── Data ──────────────────────────────────────────────── */

const projects: Project[] = [
  {
    title: 'Fika System',
    status: 'Deployed',
    statusColor: 'bg-green-500/15 text-green-400 border-green-500/25',
    description:
      'A complete web-based café management ecosystem divided into an HRMS and a Point of Sale (POS)/Kiosk module. Features dynamic environment routing and automated FTP deployment pipelines.',
    techStack: ['PHP', 'MySQL', 'GitHub Actions (CI/CD)'],
    buttons: [
      { label: 'Live Demo', href: 'http://fika.freepage.cc', primary: true, icon: Globe },
      { label: 'Source Code', href: 'https://github.com/renz-te/Fika', icon: Code2 },
    ],
    icon: Layers,
    gradient: 'from-primary-accent to-secondary-accent',
    accentRing: 'ring-primary-accent/20',
    categories: ['All', 'Web', 'Development'],
  },
  {
    title: 'OptiMeal',
    status: 'In Development',
    statusColor: 'bg-highlight/15 text-highlight border-highlight/25',
    description:
      'A smart canteen and dietary management SPA. Features an "Instant Merge" real-time syncing engine, an intelligent cart with anti-hoarding limits, and an automated dietary conflict interception system based on user health profiles.',
    techStack: ['Vue 3', 'Vite', 'TailwindCSS', 'Pinia'],
    buttons: [
      { label: 'View Repository', href: 'https://github.com/renz-te/optimeal', icon: Code2 },
    ],
    icon: UtensilsCrossed,
    gradient: 'from-highlight to-secondary-accent',
    accentRing: 'ring-highlight/20',
    categories: ['All', 'Development', 'Web'],
  },
  {
    title: 'MemenLoan',
    status: 'Completed',
    statusColor: 'bg-secondary-accent/15 text-secondary-accent border-secondary-accent/25',
    description:
      'A comprehensive Loan Management System with strict multi-role access control (Admin, Agent, Customer), a custom PIN security layer, and secure document upload management with real-time status notifications.',
    techStack: ['PHP', 'MySQL', 'HTML', 'CSS', 'Vanilla JS'],
    buttons: [
      { label: 'View Repository', href: 'https://github.com/renz-te/MemenLoan', icon: Code2 },
    ],
    icon: Landmark,
    gradient: 'from-secondary-accent to-primary-accent',
    accentRing: 'ring-secondary-accent/20',
    categories: ['All', 'Web'],
  },
  {
    title: 'Comic Book Management System',
    status: 'Completed',
    statusColor: 'bg-secondary-accent/15 text-secondary-accent border-secondary-accent/25',
    description:
      'A desktop application built on the MVC pattern. Integrates a Point of Sale system, interactive dashboard charts, borrow/return tracking, and role-based user management.',
    techStack: ['Python', 'PyQt6', 'MySQL', 'Qt Charts'],
    buttons: [
      { label: 'View Repository', href: 'https://github.com/renz-te/comic_book_system', icon: Code2 },
    ],
    icon: BookOpen,
    gradient: 'from-highlight to-primary-accent',
    accentRing: 'ring-highlight/20',
    categories: ['All', 'Others'],
  },
  {
    title: 'ParkFlow Management',
    status: 'Completed',
    statusColor: 'bg-secondary-accent/15 text-secondary-accent border-secondary-accent/25',
    description:
      'A standard Java application project featuring automated classpath generation and executable JAR packaging for command-line execution.',
    techStack: ['Java'],
    buttons: [
      { label: 'View Repository', href: 'https://github.com/renz-te/ParkFlow-Management', icon: Code2 },
    ],
    icon: Car,
    gradient: 'from-primary-accent to-highlight',
    accentRing: 'ring-primary-accent/20',
    categories: ['All', 'Others'],
  },
]

/* ── Component ─────────────────────────────────────────── */

export default function Projects() {
  const { ref, isInView } = useInView()
  const [activeTab, setActiveTab] = useState<FilterType>('All')

  const filteredProjects = projects.filter(p => p.categories.includes(activeTab))
  const isFikaVisible = filteredProjects.some(p => p.title === 'Fika System')
  const gridProjects = filteredProjects.filter(p => p.title !== 'Fika System')

  return (
    <section id="projects" className="relative py-28 bg-primary-bg overflow-hidden">
      {/* Ambient blobs */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-secondary-accent/4 blur-[140px]" />
      <div className="absolute top-24 left-0 w-[400px] h-[400px] rounded-full bg-primary-accent/4 blur-[120px]" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* ── Section Header ── */}
        <div className={`text-center mb-10 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="text-primary-accent font-semibold text-sm tracking-widest uppercase">
            Featured Work
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-light-text tracking-tight">
            Projects
          </h2>
          <div className="mt-4 mx-auto w-20 h-1 bg-gradient-to-r from-primary-accent to-secondary-accent rounded-full" />
          <p className="mt-5 text-muted-text max-w-xl mx-auto text-sm leading-relaxed">
            Real-world systems I've designed, developed, and deployed — from full-stack web platforms
            to desktop applications.
          </p>
        </div>

        {/* ── Filter Tabs ── */}
        <div
          className={`flex flex-wrap justify-center gap-2 mb-12 ${
            isInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
          style={{ animationDelay: '0.15s' }}
        >
          {filterOptions.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveTab(filter)}
              className={`px-5 py-2 text-sm font-medium rounded-lg transition-all duration-300 cursor-pointer ${
                activeTab === filter
                  ? 'bg-primary-accent text-white shadow-lg shadow-primary-accent/25'
                  : 'text-muted-text bg-secondary-bg/50 border border-primary-accent/10 hover:text-light-text hover:border-primary-accent/25'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* ── Featured Card — Fika System (full-width) ── */}
        {isFikaVisible && (
          <div
            className={`mb-8 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
            style={{ animationDelay: '0.2s' }}
          >
            <FeaturedCard project={projects[0]} />
          </div>
        )}

        {/* ── Grid — remaining projects ── */}
        <div className="grid md:grid-cols-2 gap-6">
          {gridProjects.map((project, i) => (
            <div
              key={project.title}
              className={`${isInView ? 'animate-fade-in-up' : 'opacity-0'} ${
                gridProjects.length % 2 !== 0 && i === gridProjects.length - 1 ? 'md:col-span-2' : ''
              }`}
              style={{ animationDelay: `${0.35 + i * 0.1}s` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Featured Card (Fika — full width, hero-style) ───── */

function FeaturedCard({ project }: { project: Project }) {
  return (
    <div className={`group relative rounded-2xl bg-secondary-bg/80 border border-primary-accent/15 overflow-hidden transition-all duration-500 hover:border-primary-accent/35 hover:shadow-2xl hover:shadow-primary-accent/10 ring-1 ${project.accentRing}`}>
      {/* Top gradient accent */}
      <div className={`h-1.5 bg-gradient-to-r ${project.gradient}`} />

      <div className="p-8 md:p-10 flex flex-col lg:flex-row gap-8">
        {/* Left — icon + content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-4 mb-5">
            {/* Icon */}
            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity duration-300 shadow-lg shadow-primary-accent/10`}>
              <project.icon size={26} className="text-white" />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-light-text group-hover:text-primary-accent transition-colors duration-300">
                {project.title}
              </h3>
              <StatusBadge status={project.status} color={project.statusColor} />
            </div>
            {/* Deployed rocket indicator */}
            <div className="hidden sm:flex items-center gap-1.5 ml-auto px-3.5 py-1.5 rounded-lg bg-green-500/10 border border-green-500/20">
              <Rocket size={14} className="text-green-400" />
              <span className="text-xs font-semibold text-green-400 tracking-wide">LIVE</span>
            </div>
          </div>

          <p className="text-muted-text text-sm md:text-base leading-relaxed mb-6 max-w-2xl">
            {project.description}
          </p>

          {/* Tech Stack */}
          <TechStackTags tags={project.techStack} />
        </div>

        {/* Right — action buttons */}
        <div className="flex flex-row lg:flex-col items-start lg:items-stretch gap-3 lg:min-w-[180px] shrink-0 lg:justify-center">
          {project.buttons.map((btn) => (
            <ActionButton key={btn.label} button={btn} />
          ))}
        </div>
      </div>
    </div>
  )
}

/* ── Standard Project Card ───────────────────────────── */

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className={`group relative h-full rounded-2xl bg-secondary-bg/80 border border-primary-accent/10 overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:border-primary-accent/30 hover:shadow-2xl hover:shadow-primary-accent/8 ring-1 ${project.accentRing} flex flex-col`}>
      {/* Top gradient bar — animates on hover */}
      <div className={`h-1 bg-gradient-to-r ${project.gradient} w-0 group-hover:w-full transition-all duration-700`} />

      <div className="p-7 flex flex-col flex-1">
        {/* Header */}
        <div className="flex items-center gap-3.5 mb-4">
          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity duration-300 shadow-md shadow-primary-accent/10`}>
            <project.icon size={22} className="text-white" />
          </div>
          <div className="min-w-0">
            <h3 className="font-bold text-light-text text-base md:text-lg group-hover:text-primary-accent transition-colors duration-300 leading-snug">
              {project.title}
            </h3>
            <StatusBadge status={project.status} color={project.statusColor} />
          </div>
        </div>

        {/* Description */}
        <p className="text-muted-text text-sm leading-relaxed mb-5 flex-1">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="mb-5">
          <TechStackTags tags={project.techStack} />
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-2.5 mt-auto pt-4 border-t border-primary-accent/8">
          {project.buttons.map((btn) => (
            <ActionButton key={btn.label} button={btn} compact />
          ))}
        </div>
      </div>
    </div>
  )
}

/* ── Shared Sub-components ───────────────────────────── */

function StatusBadge({ status, color }: { status: string; color: string }) {
  return (
    <span className={`inline-flex items-center gap-1.5 mt-1 px-2.5 py-0.5 text-[11px] font-semibold rounded-full border ${color}`}>
      <span className="w-1.5 h-1.5 rounded-full bg-current opacity-70" />
      {status}
    </span>
  )
}

function TechStackTags({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="px-3 py-1.5 text-xs font-semibold tracking-wide text-primary-accent bg-primary-accent/8 border border-primary-accent/15 rounded-lg hover:bg-primary-accent/15 hover:border-primary-accent/30 transition-all duration-300 cursor-default"
        >
          {tag}
        </span>
      ))}
    </div>
  )
}

function ActionButton({ button, compact }: { button: ProjectButton; compact?: boolean }) {
  const Icon = button.icon

  if (button.primary) {
    return (
      <a
        href={button.href}
        target="_blank"
        rel="noopener noreferrer"
        className={`group/btn inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary-accent to-secondary-accent text-white font-semibold shadow-lg shadow-primary-accent/25 hover:shadow-xl hover:shadow-primary-accent/40 hover:-translate-y-0.5 transition-all duration-300 ${
          compact ? 'px-5 py-2.5 text-xs' : 'px-7 py-3.5 text-sm'
        }`}
      >
        <Icon size={compact ? 14 : 16} />
        {button.label}
        <ExternalLink size={compact ? 11 : 13} className="opacity-60 group-hover/btn:opacity-100 transition-opacity" />
      </a>
    )
  }

  return (
    <a
      href={button.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group/btn inline-flex items-center justify-center gap-2 rounded-xl border border-primary-accent/25 text-muted-text font-medium hover:text-light-text hover:border-primary-accent/50 hover:bg-primary-accent/5 transition-all duration-300 ${
        compact ? 'px-5 py-2.5 text-xs' : 'px-7 py-3.5 text-sm'
      }`}
    >
      <Icon size={compact ? 14 : 16} className="opacity-60 group-hover/btn:opacity-100" />
      {button.label}
    </a>
  )
}
