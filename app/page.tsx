import type { Metadata } from 'next'
import { Hero } from '@/components/Hero'
import { SectionIntro } from '@/components/SectionIntro'
import { ServiceCard } from '@/components/ServiceCard'
import { SectorCard } from '@/components/SectorCard'
import { CTABanner } from '@/components/CTABanner'
import { SERVICES, SECTORS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Ocean Energy Middle East | Home',
  description:
    'Premium engineering consultancy delivering process engineering, technical safety, and system design for oil & gas, LNG, and industrial operations globally.',
}

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Professional Engineering Solutions for Industrial Facilities"
        subtitle="Engineering Consultancy"
        description="We provide complete engineering services across process design, technical safety, control systems, piping, and mechanical equipment for oil & gas, cryogenic, refining, and petrochemical operations."
        cta={{ label: 'Explore Our Services', href: '/services' }}
        image="/images/home-hero-industrial-oman.jpg"
        imageAlt="Industrial engineering facility"
        imagePosition="78% center"
      />

      {/* About Us Section */}
      <section id="about" className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <div>
              <p className="text-teal font-semibold text-sm uppercase tracking-wider mb-4">
                About Us
              </p>
              <h2 className="font-heading font-bold text-4xl sm:text-5xl text-navy mb-6 leading-tight">
                Professional Engineering Expertise
              </h2>
              <p className="text-lg text-graphite mb-6 leading-relaxed">
                Ocean Energy Middle East is owned and operated by professional engineers providing efficient solutions to engineering challenges. We have extensive experience in gas processing facilities, cryogenic plants (LNG, LPG, NGL), refineries, petrochemical plants, storage facilities, and utilities.
              </p>
              <p className="text-lg text-graphite mb-6 leading-relaxed">
                Our team comprises Subject Matter Experts (SMEs) each with 15+ years of experience in large and small hydrocarbon projects. We provide excellent services to our clients in Europe, Middle East, and South Asia.
              </p>
              <p className="text-lg text-graphite leading-relaxed">
                We perform comprehensive engineering services including feasibility studies, concept selection, FEED, detailed engineering, procurement support, technical bid evaluation, commissioning, startup, and performance testing. We conduct HAZOP and QRA studies on a routine basis.
              </p>
            </div>

            {/* Right: Key Highlights */}
            <div className="bg-off-white rounded-sm p-8 sm:p-12">
              <h3 className="font-heading font-bold text-2xl text-navy mb-8">
                What We Bring
              </h3>
              <div className="space-y-6">
                <div>
                  <div className="flex items-start gap-4">
                    <div className="text-teal text-3xl flex-shrink-0">
                      ✓
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy mb-2">
                        Deep Technical Knowledge
                      </h4>
                      <p className="text-sm text-graphite">
                        15+ years of direct experience in gas processing, cryogenics, refineries, petrochemicals, storage, and utilities.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-start gap-4">
                    <div className="text-teal text-3xl flex-shrink-0">
                      ✓
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy mb-2">
                        Global Experience
                      </h4>
                      <p className="text-sm text-graphite">
                        Serving clients in Europe, Middle East, and South Asia with proven experience on large and small projects.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-start gap-4">
                    <div className="text-teal text-3xl flex-shrink-0">
                      ✓
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy mb-2">
                        Complete Capability
                      </h4>
                      <p className="text-sm text-graphite">
                        All seven engineering disciplines under one roof for integrated, coordinated delivery.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capability Section */}
      <section className="py-20 sm:py-28 bg-off-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <SectionIntro
            label="Our Expertise"
            title="Core Disciplines"
            description="We operate across the complete spectrum of engineering disciplines required to design, specify, and deliver complex industrial projects from concept to operation."
          />

          {/* Services Grid */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <div>
              <p className="text-teal font-semibold text-sm uppercase tracking-wider mb-4">
                Why Choose Us
              </p>
              <h2 className="font-heading font-bold text-4xl sm:text-5xl text-navy mb-6 leading-tight">
                Professional Engineering Excellence
              </h2>
              <p className="text-lg text-graphite mb-6 leading-relaxed">
                We are a group of Subject Matter Experts (SMEs) each with 15+ years of experience in large and small hydrocarbon projects. We bring proven technical expertise, comprehensive capability, and an unwavering commitment to safety and quality.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 bg-teal rounded-sm flex items-center justify-center">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy mb-1">
                      Complete Expertise
                    </h4>
                    <p className="text-sm text-graphite">
                      All seven engineering disciplines under one roof. Integrated, coordinated, efficient delivery.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 bg-teal rounded-sm flex items-center justify-center">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy mb-1">
                      Proven Track Record
                    </h4>
                    <p className="text-sm text-graphite">
                      Experience across Europe, Middle East, and South Asia with gas processing, LNG, refineries, and petrochemical facilities.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 bg-teal rounded-sm flex items-center justify-center">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy mb-1">
                      Safety First
                    </h4>
                    <p className="text-sm text-graphite">
                      HAZOP and QRA studies on routine basis. Every system designed with hazard elimination as core principle.
                    </p>
                  </div>
                </div>
              </div>

              <a
                href="/#about"
                className="inline-block text-teal font-semibold hover:text-teal-dark transition-colors"
              >
                Learn about our team →
              </a>
            </div>

            {/* Right: Full Spectrum */}
            <div className="bg-off-white rounded-sm p-8 sm:p-12">
              <h3 className="font-heading font-bold text-2xl text-navy mb-6">
                Full Spectrum Services
              </h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-teal font-bold">→</span>
                  <span className="text-graphite">Feasibility Studies &amp; Concept Selection</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-teal font-bold">→</span>
                  <span className="text-graphite">Front End Engineering Design (FEED)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-teal font-bold">→</span>
                  <span className="text-graphite">Detailed Engineering &amp; Design</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-teal font-bold">→</span>
                  <span className="text-graphite">Procurement Support &amp; Bid Evaluation</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-teal font-bold">→</span>
                  <span className="text-graphite">Commissioning, Startup &amp; Performance Test</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-teal font-bold">→</span>
                  <span className="text-graphite">HAZOP &amp; QRA Studies</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sectors Section */}
      <section className="py-20 sm:py-28 bg-off-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <SectionIntro
            title="Expertise"
          />

          {/* Sectors Grid */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SECTORS.map((sector) => (
              <SectorCard key={sector.id} {...sector} />
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Process Section */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <SectionIntro
            title="From Concept to Execution"
            description="Every project follows a proven methodology that ensures comprehensive understanding, rigorous analysis, and executable engineering solutions."
          />

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
            {[
              { number: '01', title: 'Feasibility / Concept', desc: 'Understand the opportunity, define scope' },
              { number: '02', title: 'FEED', desc: 'Front-end engineering design & cost assessment' },
              { number: '03', title: 'Detailed Engineering', desc: 'Complete engineering for procurement & build' },
              { number: '04', title: 'Procurement', desc: 'Equipment specification & vendor management' },
              { number: '05', title: 'Commissioning', desc: 'Startup support & performance validation' },
              { number: '06', title: 'Operational Support / Training', desc: 'Operations support & knowledge transfer' },
            ].map((stage, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl font-heading font-bold text-teal mb-3">
                  {stage.number}
                </div>
                <h4 className="font-semibold text-navy mb-2">{stage.title}</h4>
                <p className="text-xs text-graphite leading-relaxed">{stage.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        title="Ready to Discuss Your Project?"
        description="We work best when engaged early. Whether you're exploring feasibility or refining detailed design, we're ready to apply rigorous engineering thinking to your challenge."
        cta={{ label: 'Get in Touch', href: '/contact' }}
      />
    </>
  )
}
