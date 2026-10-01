import { useInView } from '../hooks/useInView'
import { GraduationCap } from 'lucide-react'

const experience = {
  icon: GraduationCap,
  role: 'Full-Stack Developer',
  type: 'Academic Projects',
  org: 'National College of Science and Technology',
  period: '2025 – 2026',
  color: 'from-primary-accent to-secondary-accent',
  description:
    'Architected and developed comprehensive full-stack software systems for advanced academic coursework and independent development. Designed scalable platforms featuring modular integrations such as HRMS, Payroll, POS, and Inventory management.',
}

export default function Experience() {
  const { ref, isInView } = useInView()

  return (
    <section id="experience" className="relative py-28 bg-primary-bg overflow-hidden">
      <div className="absolute top-1/3 left-0 w-96 h-96 rounded-full bg-primary-accent/4 blur-[120px]" />

      <div ref={ref} className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="text-primary-accent font-semibold text-sm tracking-widest uppercase">
            My Journey
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-light-text tracking-tight">
            Experience
          </h2>
          <div className="mt-4 mx-auto w-20 h-1 bg-gradient-to-r from-primary-accent to-secondary-accent rounded-full" />
        </div>

        {/* Featured Card */}
        <div className={`group p-8 sm:p-10 rounded-3xl bg-secondary-bg/80 border border-primary-accent/10 hover:border-primary-accent/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary-accent/5 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8">
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${experience.color} flex items-center justify-center shrink-0 opacity-90 group-hover:opacity-100 transition-opacity shadow-lg`}>
              <experience.icon size={28} className="text-white" />
            </div>
            
            <div className="flex-1">
              <h3 className="font-bold text-light-text text-xl md:text-2xl leading-snug">
                {experience.role}
              </h3>
              <p className="text-primary-accent text-base font-medium mt-1">
                {experience.org}
              </p>
              
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 text-xs font-semibold text-highlight bg-highlight/10 rounded-full">
                  {experience.period}
                </span>
                <span className="px-3 py-1 text-xs font-semibold text-muted-text bg-muted-text/10 rounded-full">
                  {experience.type}
                </span>
              </div>
              
              <p className="mt-5 text-muted-text text-sm md:text-base leading-relaxed">
                {experience.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
