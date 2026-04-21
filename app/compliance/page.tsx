import type { Metadata } from 'next'
import { Hero } from '@/components/Hero'
import { SectionIntro } from '@/components/SectionIntro'
import { CTABanner } from '@/components/CTABanner'
import { QHSE_PILLARS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Verdant Engineering | QHSE & Compliance',
  description:
    'Quality, health, safety, and environmental compliance integrated into every engineering solution. Our QHSE framework and commitments.',
}

export default function Compliance() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Quality, Health, Safety & Environment"
        subtitle="QHSE Excellence"
        description="QHSE is not a checkbox or an afterthought. It is engineered into every system, integrated into every decision, and verified in every deliverable."
        image="/images/qhse-compliance.jpg"
        imageAlt="QHSE and compliance excellence"
        imagePosition="70% 36%"
      />

      {/* Introduction */}
      <section className="py-20 sm:py-28 bg-off-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <SectionIntro
            label="Our Commitment"
            title="Safety & Quality by Design"
            description="The best way to ensure safety, quality, and environmental responsibility is to engineer them in from the start. That's our approach. QHSE excellence isn't achieved through compliance procedures—it's achieved through rigorous technical thinking."
          />
        </div>
      </section>

      {/* QHSE Pillars */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="space-y-12">
            {QHSE_PILLARS.map((pillar, idx) => (
              <div key={idx} className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                <div className="lg:col-span-1">
                  <h3 className="font-heading font-bold text-2xl sm:text-3xl text-navy mb-2">
                    {pillar.title}
                  </h3>
                  <div className="w-12 h-1 bg-teal" />
                </div>
                <div className="lg:col-span-2">
                  <p className="text-lg text-graphite mb-6 leading-relaxed">
                    {pillar.description}
                  </p>
                  <ul className="space-y-3">
                    {pillar.practices.map((practice, pIdx) => (
                      <li
                        key={pIdx}
                        className="flex items-start gap-3 text-graphite"
                      >
                        <span className="inline-block w-1.5 h-1.5 bg-teal rounded-full mt-2 flex-shrink-0" />
                        <span>{practice}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standards & Compliance */}
      <section className="py-20 sm:py-28 bg-off-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <SectionIntro
            label="Regulatory Framework"
            title="Standards, Regulations & Best Practice"
            description="We design to recognised international standards and comply with all applicable regulations. Our work is traceable, defensible, and aligned with industry best practice."
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-heading font-bold text-xl text-navy mb-6">
                Design Standards
              </h4>
              <ul className="space-y-3">
                {[
                  'ISO 10721 - Pressure Equipment Directive',
                  'ASME BPVC - Boiler & Pressure Vessel Code',
                  'API standards (502, 520, 560, etc.)',
                  'IEC 61508/61511 - Functional Safety',
                  'EN standards - European harmonized codes',
                  'Local regulatory requirements',
                ].map((std, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-graphite">
                    <span className="inline-block w-1.5 h-1.5 bg-teal rounded-full mt-2 flex-shrink-0" />
                    <span>{std}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-bold text-xl text-navy mb-6">
                Process & Methodology
              </h4>
              <ul className="space-y-3">
                {[
                  'HAZOP (Hazard & Operability) Studies',
                  'LOPA (Layer of Protection Analysis)',
                  'Risk-based Process Safety (RBPS)',
                  'Process Safety Management (PSM)',
                  'Pre-startup Safety Reviews (PSSR)',
                  'Management of Change (MOC)',
                ].map((method, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-graphite">
                    <span className="inline-block w-1.5 h-1.5 bg-teal rounded-full mt-2 flex-shrink-0" />
                    <span>{method}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Framework */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <SectionIntro
            label="Our Processes"
            title="Quality Management & Continuous Improvement"
            description="Quality is delivered through discipline, process, and continuous verification. We maintain rigorous quality protocols across every project stage."
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-off-white rounded-sm p-8">
              <h4 className="font-heading font-bold text-xl text-navy mb-4">
                Design Quality
              </h4>
              <p className="text-graphite mb-6 leading-relaxed">
                Every engineering deliverable undergoes independent technical review before release. We maintain design standards, apply peer review protocols, and ensure all work is traceable to approved design bases.
              </p>
              <ul className="space-y-2 text-sm text-graphite">
                <li className="flex items-start gap-2">
                  <span className="text-teal font-bold">→</span>
                  <span>Design checklists & verification protocols</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal font-bold">→</span>
                  <span>Independent technical review</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal font-bold">→</span>
                  <span>Design basis documentation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal font-bold">→</span>
                  <span>Traceability & compliance verification</span>
                </li>
              </ul>
            </div>

            <div className="bg-off-white rounded-sm p-8">
              <h4 className="font-heading font-bold text-xl text-navy mb-4">
                Document Control
              </h4>
              <p className="text-graphite mb-6 leading-relaxed">
                We maintain comprehensive document control systems that track design evolution, manage changes, and preserve project history. Every deliverable is controlled, indexed, and accessible.
              </p>
              <ul className="space-y-2 text-sm text-graphite">
                <li className="flex items-start gap-2">
                  <span className="text-teal font-bold">→</span>
                  <span>Version control & change management</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal font-bold">→</span>
                  <span>Document approvals & sign-offs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal font-bold">→</span>
                  <span>Archive & retrieval systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal font-bold">→</span>
                  <span>Audit trail maintenance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Risk Management */}
      <section className="py-20 sm:py-28 bg-off-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <SectionIntro
            label="Safety Engineering"
            title="Hazard Elimination & Risk Management"
            description="We apply a tiered approach: eliminate hazards where possible, design passive protections where elimination isn't feasible, and implement active safety systems as the final layer."
          />

          <div className="mt-16 max-w-3xl">
            {[
              {
                level: 'Level 1',
                title: 'Hazard Elimination',
                description:
                  'Design out the hazard entirely. Change process parameters, substitute materials, or adopt alternative approaches that avoid the hazard.',
              },
              {
                level: 'Level 2',
                title: 'Passive Protection',
                description:
                  'Use design features that protect without active intervention. Barriers, pressure relief systems, design margins, and passive isolation.',
              },
              {
                level: 'Level 3',
                title: 'Active Safety Systems',
                description:
                  'Implement Safety Instrumented Systems (SIS) that detect upset conditions and execute protective actions. Always specified with redundancy and diagnostics.',
              },
              {
                level: 'Level 4',
                title: 'Administrative Controls',
                description:
                  'Procedures, training, and operational controls that mitigate residual risk. Implemented when engineering controls cannot fully eliminate hazards.',
              },
            ].map((layer, idx) => (
              <div key={idx} className="mb-8 last:mb-0 pb-8 last:pb-0 border-b border-light-steel last:border-b-0">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-teal text-white rounded-sm flex items-center justify-center font-heading font-bold">
                    {layer.level.split(' ')[1]}
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-lg text-navy mb-2">
                      {layer.title}
                    </h4>
                    <p className="text-graphite leading-relaxed">
                      {layer.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Environmental Commitment */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <SectionIntro
            label="Environmental"
            title="Responsible Engineering for Industrial Operations"
            description="We design systems that protect the environment while maintaining operational efficiency. Environmental responsibility is engineered, not added."
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h4 className="font-heading font-bold text-2xl text-navy mb-6">
                Our Approach
              </h4>
              <ul className="space-y-4">
                {[
                  {
                    title: 'Emissions Minimisation',
                    desc: 'Design systems that minimize atmospheric emissions, fugitive losses, and environmental discharge.',
                  },
                  {
                    title: 'Waste Management',
                    desc: 'Specify systems for effective waste minimization, segregation, treatment, and responsible disposal.',
                  },
                  {
                    title: 'Resource Efficiency',
                    desc: 'Optimize energy use, water consumption, and material efficiency across all system designs.',
                  },
                  {
                    title: 'Ecosystem Protection',
                    desc: 'Consider regional environmental sensitivities in every design decision.',
                  },
                ].map((item, idx) => (
                  <li key={idx} className="border-l-4 border-teal pl-4">
                    <h5 className="font-semibold text-navy mb-1">{item.title}</h5>
                    <p className="text-sm text-graphite">{item.desc}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-off-white rounded-sm p-8">
              <h4 className="font-heading font-bold text-xl text-navy mb-4">
                Key Environmental Considerations
              </h4>
              <ul className="space-y-3 text-sm text-graphite">
                <li className="flex items-start gap-3">
                  <span className="text-teal font-bold text-lg">→</span>
                  <span>Temperature extremes and cooling water scarcity</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal font-bold text-lg">→</span>
                  <span>High ambient temperatures affecting equipment performance</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal font-bold text-lg">→</span>
                  <span>Sensitive marine ecosystems requiring protection</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal font-bold text-lg">→</span>
                  <span>Limited freshwater availability</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal font-bold text-lg">→</span>
                  <span>Desert climate equipment durability concerns</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        title="Discuss QHSE Integration for Your Project"
        description="We integrate quality, safety, and environmental excellence into every engineering solution. Let's discuss how our QHSE framework supports your project goals."
        cta={{ label: 'Get in Touch', href: '/contact' }}
      />
    </>
  )
}
