import type { Metadata } from 'next'
import Image from 'next/image'
import { Hero } from '@/components/Hero'
import { SectionIntro } from '@/components/SectionIntro'
import { CTABanner } from '@/components/CTABanner'

export const metadata: Metadata = {
  title: 'Ocean Energy Middle East | About Us',
  description:
    'Learn about our team of senior engineering consultants with 15+ years of expertise in oil & gas, LNG, and industrial engineering serving clients globally.',
}

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="About Our Team"
        subtitle="Professional Engineering Expertise"
        description="We are a team of professional engineers with extensive experience in hydrocarbon processing, providing efficient solutions to engineering challenges."
        image="/images/about-engineering-team.jpg"
        imageAlt="Engineering team"
        imagePosition="66% 35%"
      />

      {/* Mission Section */}
      <section className="py-20 sm:py-28 bg-off-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-teal font-semibold text-sm uppercase tracking-wider mb-4">
                Our Foundation
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

            <div className="relative h-96 rounded-sm overflow-hidden bg-light-steel shadow-lg">
              <Image
                src="/images/about-office-oman.jpg"
                alt="Ocean Energy Middle East office"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <SectionIntro
            label="Our Strength"
            title="Subject Matter Experts"
            description="Our team comprises SMEs each with 15+ years of experience in hydrocarbon projects. We maintain specialized expertise across all engineering disciplines and industrial sectors."
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: 'Deep Technical Knowledge',
                description:
                  'Our SMEs bring 15+ years of direct experience in gas processing, cryogenics, refineries, petrochemicals, storage, and utilities.',
              },
              {
                title: 'Full Capability Scope',
                description:
                  'Complete engineering services from feasibility through commissioning. HAZOP and QRA studies on routine basis.',
              },
              {
                title: 'Global Experience',
                description:
                  'We serve clients in Europe, Middle East, and South Asia. Proven experience with large and small hydrocarbon projects.',
              },
              {
                title: 'Comprehensive Services',
                description:
                  'Feasibility studies, concept selection, FEED, detailed design, procurement support, bid evaluation, commissioning, startup, and performance testing.',
              },
            ].map((item, idx) => (
              <div key={idx} className="border-l-4 border-teal pl-6">
                <h3 className="font-heading font-bold text-2xl text-navy mb-3">
                  {item.title}
                </h3>
                <p className="text-graphite leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Sectors & Expertise Section */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <SectionIntro
            label="Our Experience"
            title="Diverse Industrial Sectors"
            description="We bring proven expertise across the full spectrum of hydrocarbon and industrial engineering."
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                sector: 'Gas Processing',
                description: 'Expertise in gas processing facilities and complex separation systems.',
              },
              {
                sector: 'Cryogenic Plants',
                description: 'Specialized experience with LNG, LPG, and NGL systems operating at extreme temperatures.',
              },
              {
                sector: 'Refineries',
                description: 'Comprehensive services for crude distillation, hydrocracking, and product specifications.',
              },
              {
                sector: 'Petrochemical Plants',
                description: 'Experience with multi-stream petrochemical processing and integration.',
              },
              {
                sector: 'Storage Facilities',
                description: 'Design and engineering of storage terminals and buffer systems.',
              },
              {
                sector: 'Utilities',
                description: 'Complete utility system design including steam, power, cooling, and compressed air.',
              },
            ].map((item, idx) => (
              <div key={idx} className="border-l-4 border-teal pl-6">
                <h3 className="font-heading font-bold text-xl text-navy mb-2">
                  {item.sector}
                </h3>
                <p className="text-graphite">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        title="Ready to Discuss Your Project?"
        description="We work best when engaged early in the process. Whether you're evaluating feasibility or refining detailed design, we bring deep technical expertise and proven delivery capability."
        cta={{ label: 'Contact Us', href: '/contact' }}
      />
    </>
  )
}
