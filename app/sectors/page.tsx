import type { Metadata } from 'next'
import { Hero } from '@/components/Hero'
import { SectionIntro } from '@/components/SectionIntro'
import { SectorCard } from '@/components/SectorCard'
import { CTABanner } from '@/components/CTABanner'
import { SECTORS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Verdant Engineering | Industry Sectors',
  description:
    'We specialize in oil & gas, LNG, refining, storage, and utility sectors across the Middle East and Gulf region.',
}

export default function Sectors() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Five Strategic Industrial Sectors"
        subtitle="Market Focus"
        description="We concentrate our expertise on the sectors that define the Gulf's industrial landscape. Deep focus enables deep expertise."
        image="/images/sectors-hero.jpg"
        imageAlt="Industrial sectors overview"
        imagePosition="68% center"
      />

      {/* Introduction */}
      <section className="py-20 sm:py-28 bg-off-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <SectionIntro
            label="Strategic Sectors"
            title="Where Our Expertise Concentrates"
            description="We don't attempt to serve every sector. We concentrate our resources on the five industries that matter most in the Gulf—where our expertise is deepest and our value is greatest."
          />
        </div>
      </section>

      {/* Sectors Grid */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SECTORS.map((sector) => (
              <SectorCard key={sector.id} {...sector} />
            ))}
          </div>
        </div>
      </section>

      {/* Sector Expertise Detail */}
      <section className="py-20 sm:py-28 bg-off-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <SectionIntro
            label="Our Context"
            title="Gulf-Based, Sector-Focused"
            description="Our expertise is rooted in the industrial context of the Middle East. We understand the operational environment, regulatory landscape, and technical challenges unique to this region."
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-white border border-light-steel rounded-sm p-6 sm:p-8">
                <h3 className="font-heading font-bold text-2xl text-navy mb-4">
                  Regional Understanding
                </h3>
                <p className="text-graphite mb-4 leading-relaxed">
                  We operate from Oman with deep connections across the Gulf region. We understand local regulatory requirements, operational practices, environmental context, and business expectations.
                </p>
                <p className="text-graphite leading-relaxed">
                  This isn't generic international engineering applied locally—it's engineering developed specifically for Gulf industrial operations.
                </p>
              </div>

              <div className="bg-white border border-light-steel rounded-sm p-6 sm:p-8">
                <h3 className="font-heading font-bold text-2xl text-navy mb-4">
                  Operational Realism
                </h3>
                <p className="text-graphite mb-4 leading-relaxed">
                  We've supported operations across climate extremes, managed maintenance in remote locations, and engineered systems that tolerate supply chain constraints.
                </p>
                <p className="text-graphite leading-relaxed">
                  Our designs are robust, practical, and optimised for real-world Gulf operations.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white border border-light-steel rounded-sm p-6 sm:p-8">
                <h3 className="font-heading font-bold text-2xl text-navy mb-4">
                  Technical Continuity
                </h3>
                <p className="text-graphite mb-4 leading-relaxed">
                  We track evolving facility standards, follow regulatory updates, and maintain awareness of technical trends across our key sectors.
                </p>
                <p className="text-graphite leading-relaxed">
                  When we engage with a new project, we're not starting from zero. We bring current sector knowledge and proven best practices.
                </p>
              </div>

              <div className="bg-white border border-light-steel rounded-sm p-6 sm:p-8">
                <h3 className="font-heading font-bold text-2xl text-navy mb-4">
                  Relationship Network
                </h3>
                <p className="text-graphite mb-4 leading-relaxed">
                  Over sixteen years we've built trusted relationships with equipment vendors, construction contractors, and operational teams.
                </p>
                <p className="text-graphite leading-relaxed">
                  These connections enhance our ability to source solutions, manage logistics, and deliver successful projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Examples */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <SectionIntro
            label="Track Record"
            title="Proven Delivery Across Sectors"
            description="Our portfolio demonstrates consistent capability across our core sectors, from feasibility studies through operational commissioning."
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                sector: 'Oil & Gas Processing',
                projects: [
                  'Upstream platform design',
                  'Crude stabilisation systems',
                  'Associated gas recovery',
                  'Production debottlenecking',
                ],
              },
              {
                sector: 'Cryogenic & LNG',
                projects: [
                  'LNG liquefaction design',
                  'Cryogenic material engineering',
                  'Thermal system optimization',
                  'LPG/NGL fractionation',
                ],
              },
              {
                sector: 'Refining & Petrochemicals',
                projects: [
                  'Refinery debottlenecking',
                  'Crude distillation upgrade',
                  'Hydroprocessing systems',
                  'Aromatics processing',
                ],
              },
              {
                sector: 'Storage & Infrastructure',
                projects: [
                  'Terminal facility design',
                  'Storage system specification',
                  'Underground cavern engineering',
                  'Import/export terminals',
                ],
              },
              {
                sector: 'Utilities',
                projects: [
                  'Steam generation systems',
                  'Power efficiency optimization',
                  'Cooling water systems',
                  'Gas generation networks',
                ],
              },
              {
                sector: 'Multi-Sector',
                projects: [
                  'Complex integrated projects',
                  'Multi-discipline coordination',
                  'Cross-sector feasibility',
                  'Strategic engineering plans',
                ],
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-off-white rounded-sm p-6 sm:p-8">
                <h4 className="font-heading font-bold text-xl text-navy mb-4">
                  {item.sector}
                </h4>
                <ul className="space-y-2">
                  {item.projects.map((project, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-3 text-sm text-graphite">
                      <span className="inline-block w-1.5 h-1.5 bg-teal rounded-full mt-1.5 flex-shrink-0" />
                      <span>{project}</span>
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
        title="Let's Explore Your Sector Opportunity"
        description="Whether you're entering new markets, optimizing existing operations, or exploring emerging opportunities, we bring proven sector expertise and regional knowledge."
        cta={{ label: 'Get in Touch', href: '/contact' }}
      />
    </>
  )
}
