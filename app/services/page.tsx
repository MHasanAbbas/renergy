import type { Metadata } from 'next'
import { Hero } from '@/components/Hero'
import { SectionIntro } from '@/components/SectionIntro'
import { ServiceCard } from '@/components/ServiceCard'
import { CTABanner } from '@/components/CTABanner'
import { SERVICES } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Verdant Engineering | Engineering Services',
  description:
    'Our seven core engineering disciplines: process engineering, technical safety, control systems, piping design, mechanical equipment, and pipeline engineering.',
}

export default function Services() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Seven Disciplines. Complete Capability."
        subtitle="Our Services"
        description="We operate across the full spectrum of engineering disciplines required to design complex industrial systems. Integrated, coordinated, efficient."
        image="/images/services-hero.jpg"
        imageAlt="Engineering services overview"
        imagePosition="76% center"
      />

      {/* Introduction */}
      <section className="py-20 sm:py-28 bg-off-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <SectionIntro
            label="Our Expertise"
            title="Rigorous Engineering Across All Disciplines"
            description="Every engineering challenge requires deep technical expertise and seamless coordination across multiple disciplines. We bring both. Our team operates with integrated understanding of how each discipline supports and constrains the others, resulting in optimised, buildable, operable solutions."
          />
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Integrated Approach Section */}
      <section className="py-20 sm:py-28 bg-off-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <SectionIntro
            label="Methodology"
            title="Integration as a Core Strength"
            description="The best engineering solutions emerge when all disciplines work together from the beginning. We don't engineer in silos. We integrate."
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-heading font-bold text-2xl text-navy mb-6">
                Why Integration Matters
              </h3>
              <ul className="space-y-4">
                {[
                  'Process design directly influences equipment selection and cost',
                  'Safety systems must integrate seamlessly with process control',
                  'Piping routes constrain equipment placement; equipment placement constrains piping',
                  'Control strategies depend on instrumentation capability',
                  'Every discipline must accommodate the constraints of others',
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-4 items-start">
                    <span className="text-teal font-bold text-lg mt-1">→</span>
                    <span className="text-graphite">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-heading font-bold text-2xl text-navy mb-6">
                Our Integrated Approach
              </h3>
              <ul className="space-y-4">
                {[
                  'Simultaneous development across disciplines from feasibility stage',
                  'Regular integration meetings ensuring consistency and optimization',
                  'Shared understanding of constraints and opportunities',
                  'Senior engineers collaborating across discipline boundaries',
                  'Single point of coordination with our clients',
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-4 items-start">
                    <span className="text-teal font-bold text-lg mt-1">✓</span>
                    <span className="text-graphite">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Capability Details */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="max-w-4xl mx-auto">
            <SectionIntro
              label="Delivery Model"
              title="From Feasibility Through Commissioning"
              description="We support every stage of project development, bringing disciplined engineering methodology and proven delivery capability to each phase."
            />

            <div className="mt-16 space-y-12">
              {[
                {
                  phase: 'Feasibility Study',
                  activities: [
                    'Understand project objectives and constraints',
                    'Conduct preliminary engineering analysis',
                    'Evaluate alternative technical solutions',
                    'Provide cost and schedule estimates',
                    'Develop business case and recommendations',
                  ],
                },
                {
                  phase: 'FEED (Front-End Engineering Design)',
                  activities: [
                    'Develop detailed process flowsheets',
                    'Conduct equipment sizing and specification',
                    'Perform HAZOP and safety system analysis',
                    'Prepare cost and schedule estimates',
                    'Develop project execution plan',
                  ],
                },
                {
                  phase: 'Detailed Engineering',
                  activities: [
                    'Complete engineering design across all disciplines',
                    'Prepare procurement specifications',
                    'Develop construction and assembly drawings',
                    'Validate safety and performance systems',
                    'Prepare project documentation and manuals',
                  ],
                },
                {
                  phase: 'Procurement Support',
                  activities: [
                    'Evaluate vendor proposals',
                    'Conduct technical bid evaluations',
                    'Support equipment selection and negotiation',
                    'Manage vendor technical queries',
                    'Verify equipment meets specifications',
                  ],
                },
                {
                  phase: 'Commissioning & Startup',
                  activities: [
                    'Support pre-commissioning activities',
                    'Prepare operating procedures and protocols',
                    'Conduct startup supervision',
                    'Perform performance testing',
                    'Provide operations training and handover',
                  ],
                },
              ].map((item, idx) => (
                <div key={idx} className="border-l-4 border-teal pl-6 sm:pl-8">
                  <h4 className="font-heading font-bold text-2xl text-navy mb-4">
                    {item.phase}
                  </h4>
                  <ul className="space-y-2">
                    {item.activities.map((activity, actIdx) => (
                      <li
                        key={actIdx}
                        className="flex items-start gap-3 text-graphite"
                      >
                        <span className="inline-block w-1.5 h-1.5 bg-teal rounded-full mt-2 flex-shrink-0" />
                        <span>{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        title="Let's Discuss Your Engineering Challenge"
        description="Whether you're exploring feasibility or refining detailed design, we're ready to bring rigorous engineering thinking to your project."
        cta={{ label: 'Get in Touch', href: '/contact' }}
      />
    </>
  )
}
