import type { Metadata } from 'next'
import Image from 'next/image'
import { Hero } from '@/components/Hero'
import { SectionIntro } from '@/components/SectionIntro'
import { CTABanner } from '@/components/CTABanner'

export const metadata: Metadata = {
  title: 'Verdant Engineering | About Us',
  description:
    'Learn about our team of senior engineering consultants serving the Gulf region with 16+ years of combined expertise in oil & gas, LNG, and industrial engineering.',
}

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="About Ocean Energy"
        subtitle="Our Story"
        description="We are a team of professional engineers with extensive experience in hydrocarbon processing, committed to delivering rigorous engineering solutions to complex industrial challenges."
        image="/images/about-engineering-team.jpg"
        imageAlt="Ocean Energy engineering team"
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
                Ocean Energy is owned and operated by professional engineers providing efficient solutions to engineering challenges. We have extensive experience in gas processing facilities, cryogenic plants (LNG, LPG, NGL), refineries, petrochemical plants, storage facilities, and utilities.
              </p>
              <p className="text-lg text-graphite mb-6 leading-relaxed">
                Our team comprises Subject Matter Experts (SMEs) each with 15+ years of experience in large and small hydrocarbon projects. We provide excellent services to our clients in Europe, Middle East, and South Asia.
              </p>
              <p className="text-lg text-graphite leading-relaxed">
                We perform comprehensive engineering services including feasibility studies, concept selection, FEED, detailed engineering, procurement support, technical bid evaluation, commissioning, startup, and performance testing.
              </p>
            </div>

            <div className="relative h-96 rounded-sm overflow-hidden bg-light-steel shadow-lg">
              <Image
                src="/images/about-office-oman.jpg"
                alt="Verdant Engineering office"
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

      {/* Values Section */}
      <section className="py-20 sm:py-28 bg-off-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <SectionIntro
            label="How We Work"
            title="Our Core Values"
            description="Every decision we make, every system we design, every interaction with our clients is guided by these principles."
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Rigour',
                description:
                  'We apply disciplined engineering methodology. Every analysis is traceable, every assumption is justified, every conclusion is defensible.',
              },
              {
                title: 'Safety',
                description:
                  'Safety is not added at the end. It is engineered into every system from the beginning. Hazard elimination and risk management are core to everything we do.',
              },
              {
                title: 'Clarity',
                description:
                  'We communicate in clear, precise technical language. Our deliverables are comprehensive, organized, and immediately usable by our clients.',
              },
              {
                title: 'Integrity',
                description:
                  'We provide honest advice based on best technical practice and our clients\' interests. We stand behind our work and our recommendations.',
              },
              {
                title: 'Collaboration',
                description:
                  'We work best as part of an integrated team. We partner with other disciplines, combine expertise, and create solutions greater than any single perspective.',
              },
              {
                title: 'Accountability',
                description:
                  'We take responsibility for our engineering. We deliver on commitments, we manage risk openly, and we continuously improve our processes.',
              },
            ].map((value, idx) => (
              <div
                key={idx}
                className="bg-white border border-light-steel rounded-sm p-6 sm:p-8 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-teal/10 rounded-sm flex items-center justify-center mb-4">
                  <div className="w-3 h-3 bg-teal rounded-full" />
                </div>
                <h3 className="font-heading font-bold text-xl text-navy mb-3">
                  {value.title}
                </h3>
                <p className="text-sm text-graphite leading-relaxed">
                  {value.description}
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
