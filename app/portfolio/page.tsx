import type { Metadata } from 'next'
import Image from 'next/image'
import { Hero } from '@/components/Hero'
import { SectionIntro } from '@/components/SectionIntro'
import { CTABanner } from '@/components/CTABanner'
import { CASE_STUDIES } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Ocean Energy Middle East | Portfolio & Case Studies',
  description:
    'Case studies showcasing our engineering projects and solutions across oil & gas, LNG, refining, and industrial sectors.',
}

export default function Portfolio() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Project Portfolio & Case Studies"
        subtitle="Our Work"
        description="Every project teaches us something. Every solution we've delivered has made us better engineers. Here's a selection of the work we're proud of."
        image="/images/projects-capabilities.jpg"
        imageAlt="Engineering project portfolio"
        imagePosition="68% center"
      />

      {/* Introduction */}
      <section className="py-20 sm:py-28 bg-off-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <SectionIntro
            label="Our Track Record"
            title="Proven Project Delivery. Consistent Excellence."
            description="Over many years we've supported projects across every sector we serve. From small focused feasibility studies to large integrated engineering campaigns, we maintain the same commitment to rigor, safety, and quality."
          />
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          {CASE_STUDIES.length > 0 ? (
            <div className="space-y-16">
              {CASE_STUDIES.map((study, idx) => (
                <div key={study.id} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {/* Image */}
                  <div
                    className={`relative h-64 sm:h-80 rounded-sm overflow-hidden bg-off-white shadow-lg ${
                      idx % 2 === 1 ? 'lg:order-2' : ''
                    }`}
                  >
                    <Image
                      src={study.image}
                      alt={study.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className={idx % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className="inline-block px-3 py-1 bg-teal/10 text-teal text-xs font-semibold uppercase tracking-wider rounded-sm mb-4">
                      {study.sector}
                    </div>

                    <h3 className="font-heading font-bold text-3xl text-navy mb-4">
                      {study.title}
                    </h3>

                    <div className="mb-6">
                      <h4 className="font-semibold text-sm text-navy mb-3">
                        Disciplines Applied
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {study.disciplines.map((discipline) => (
                          <span
                            key={discipline}
                            className="text-xs bg-navy/5 text-navy px-3 py-1 rounded-sm"
                          >
                            {discipline}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-navy mb-2">The Challenge</h4>
                      <p className="text-graphite leading-relaxed">
                        {study.challenge}
                      </p>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-navy mb-2">Our Solution</h4>
                      <p className="text-graphite leading-relaxed">
                        {study.solution}
                      </p>
                    </div>

                    <div className="pb-6 border-t border-light-steel pt-6">
                      <h4 className="font-semibold text-navy mb-2">The Outcome</h4>
                      <p className="text-graphite leading-relaxed">
                        {study.outcome}
                      </p>
                    </div>

                    <a
                      href="/contact"
                      className="inline-block text-teal font-semibold hover:text-teal-dark transition-colors"
                    >
                      Discuss a Similar Project →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="font-heading font-bold text-2xl text-navy mb-4">
                Project Experience
              </h3>
              <p className="text-graphite max-w-2xl mx-auto mb-8 leading-relaxed">
                We have successfully delivered projects across all our served sectors. Detailed project examples and case studies are available upon request. Contact us to discuss how our engineering expertise can address your specific challenges.
              </p>
              <a
                href="/contact"
                className="inline-block px-8 py-3 bg-teal text-white font-semibold rounded hover:bg-teal-dark transition-colors"
              >
                Get in Touch
              </a>
            </div>
          )}
        </div>
      </section>

      {/* Project Statistics */}
      <section className="py-20 sm:py-28 bg-off-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <SectionIntro
            label="By the Numbers"
            title="Our Team Expertise"
            description="A team of Subject Matter Experts delivering comprehensive engineering solutions."
          />

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: '15+',
                label: 'Years Experience',
                description: 'Subject Matter Experts with deep technical knowledge',
              },
              {
                number: '7',
                label: 'Engineering Disciplines',
                description: 'Complete integrated technical capability',
              },
              {
                number: '5',
                label: 'Key Sectors',
                description: 'Oil & Gas, Cryogenics, Refining, Storage, Utilities',
              },
              {
                number: '3',
                label: 'Regions Served',
                description: 'Europe, Middle East, and South Asia',
              },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="bg-white border border-light-steel rounded-sm p-6 sm:p-8 text-center"
              >
                <div className="text-5xl font-heading font-bold text-teal mb-2">
                  {stat.number}
                </div>
                <h4 className="font-heading font-semibold text-navy mb-2">
                  {stat.label}
                </h4>
                <p className="text-xs text-graphite leading-relaxed">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Categories */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <SectionIntro
            label="Project Range"
            title="Breadth of Experience"
            description="Our portfolio spans the complete range of project types and delivery models, from focused consulting to integrated engineering campaigns."
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Feasibility & Conceptual Studies',
                examples: [
                  'Technology evaluation & selection',
                  'Process route assessment',
                  'Preliminary cost & schedule',
                  'Business case development',
                  'Site & environmental assessment',
                ],
              },
              {
                title: 'FEED Engineering',
                examples: [
                  'Equipment sizing & selection',
                  'Process flowsheet development',
                  'Plot plan optimization',
                  'HAZOP & safety system design',
                  'Cost & schedule refinement',
                ],
              },
              {
                title: 'Detailed Design Engineering',
                examples: [
                  'Complete engineering across all disciplines',
                  'Procurement specification',
                  'Construction drawings',
                  ' Safety system documentation',
                  '3D design models',
                ],
              },
              {
                title: 'Optimization & Debottlenecking',
                examples: [
                  'Capacity enhancement studies',
                  'Performance optimization',
                  'Retrofit feasibility',
                  'Efficiency improvement',
                  'Cost reduction initiatives',
                ],
              },
              {
                title: 'Commissioning & Startup Support',
                examples: [
                  'Pre-commissioning planning',
                  'Operating procedures development',
                  'Startup supervision',
                  'Performance testing',
                  'Training & knowledge transfer',
                ],
              },
              {
                title: 'Technical Consulting',
                examples: [
                  'Design reviews & audits',
                  'Problem-solving & diagnostics',
                  'Regulatory compliance assessment',
                  'Technical advisory support',
                  'Risk & safety assessments',
                ],
              },
            ].map((category, idx) => (
              <div key={idx} className="bg-off-white rounded-sm p-6 sm:p-8">
                <h4 className="font-heading font-bold text-xl text-navy mb-4">
                  {category.title}
                </h4>
                <ul className="space-y-2">
                  {category.examples.map((example, eIdx) => (
                    <li key={eIdx} className="flex items-start gap-3 text-sm text-graphite">
                      <span className="inline-block w-1.5 h-1.5 bg-teal rounded-full mt-1.5 flex-shrink-0" />
                      <span>{example}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        title="Explore Our Full Portfolio or Discuss Your Project"
        description="We're happy to discuss specific case studies, reference clients, or how our experience applies to your particular challenge."
        cta={{ label: 'Get in Touch', href: '/contact' }}
      />
    </>
  )
}
