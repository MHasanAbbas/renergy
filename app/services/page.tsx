import type { Metadata } from 'next'
import { SectionIntro } from '@/components/SectionIntro'
import { ServiceCard } from '@/components/ServiceCard'
import { CTABanner } from '@/components/CTABanner'
import { SERVICES } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Ocean Energy Middle East | Engineering Services',
  description:
    'Professional engineering services for oil and gas, cryogenic, refining, and industrial projects across the full project lifecycle.',
}

export default function Services() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy pt-20">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,_#1d3457_0%,_#152844_48%,_#0f1f35_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,_rgba(30,123,124,0.18),_transparent_22%),radial-gradient(circle_at_80%_26%,_rgba(183,203,228,0.12),_transparent_18%),radial-gradient(circle_at_72%_76%,_rgba(30,123,124,0.14),_transparent_22%)]" />

        <div className="relative mx-auto grid min-h-[78vh] max-w-7xl items-center gap-12 px-6 py-20 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-teal">
              Engineering Services
            </p>
            <h1 className="font-heading text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl">
              Seven engineering disciplines. One integrated delivery model.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-light-steel sm:text-xl">
              We provide professional engineering services for oil &amp; gas, cryogenics and refining projects, covering the full project lifecycle from concept selection and FEED through to detailed design and execution support.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                'Process-led design decisions',
                'HSSE and compliance built in',
                'Integrated multi-discipline delivery',
              ].map((item) => (
                <div key={item} className="rounded-sm border border-white/10 bg-white/5 px-4 py-4 text-sm text-light-steel backdrop-blur-sm">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[20px] bg-teal/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-[20px] border border-white/10 bg-white/5 p-6 shadow-[0_26px_80px_rgba(2,10,20,0.36)] backdrop-blur-sm">
              <div className="absolute inset-0 bg-[linear-gradient(145deg,_rgba(255,255,255,0.08),_transparent_46%,_rgba(30,123,124,0.08)_100%)]" />
              <svg
                viewBox="0 0 520 380"
                className="relative h-full w-full"
                role="img"
                aria-label="Interconnected engineering disciplines network diagram"
              >
                <defs>
                  <linearGradient id="services-network" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#7de0dc" stopOpacity="0.95" />
                    <stop offset="100%" stopColor="#dce7f4" stopOpacity="0.4" />
                  </linearGradient>
                </defs>
                <g fill="none" stroke="url(#services-network)" strokeWidth="2">
                  <path d="M138 98h102l46 58 88-18" opacity="0.75" />
                  <path d="M138 98l-36 100 84 70 100-34 88 42" opacity="0.68" />
                  <path d="M242 98l42 136" strokeDasharray="7 8" opacity="0.58" />
                  <path d="M374 138l34 92-80 52" strokeDasharray="7 8" opacity="0.52" />
                  <path d="M186 268l36-108 64-4" opacity="0.72" />
                </g>
                {[
                  { x: 138, y: 98, r: 34, label: 'Process' },
                  { x: 242, y: 98, r: 26, label: 'Safety' },
                  { x: 374, y: 138, r: 30, label: 'Control' },
                  { x: 102, y: 198, r: 28, label: 'Piping' },
                  { x: 186, y: 268, r: 30, label: 'Static' },
                  { x: 286, y: 234, r: 32, label: 'Rotating' },
                  { x: 408, y: 310, r: 34, label: 'Pipeline' },
                ].map((node) => (
                  <g key={node.label}>
                    <circle cx={node.x} cy={node.y} r={node.r + 10} fill="rgba(30,123,124,0.08)" />
                    <circle cx={node.x} cy={node.y} r={node.r} fill="rgba(14,31,54,0.92)" stroke="rgba(125,224,220,0.95)" strokeWidth="2.4" />
                    <text x={node.x} y={node.y + 5} textAnchor="middle" fill="#eef5ff" fontSize="12" fontWeight="700" letterSpacing="0.08em">
                      {node.label}
                    </text>
                  </g>
                ))}
                <rect x="48" y="308" width="132" height="34" rx="8" fill="rgba(255,255,255,0.06)" stroke="rgba(125,224,220,0.2)" />
                <text x="114" y="330" textAnchor="middle" fill="#d9ebf8" fontSize="13">
                  Integrated delivery
                </text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-off-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <SectionIntro
            label="Our Expertise"
            title="Rigorous Engineering Across All Disciplines"
            description="Every engineering challenge requires deep technical expertise and seamless coordination across multiple disciplines. We bring both. Our team operates with integrated understanding of how each discipline supports and constrains the others, resulting in optimised, buildable, operable solutions."
          />
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-off-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <SectionIntro
            label="Methodology"
            title="Integration as a Core Strength"
            description="The best engineering solutions emerge when all disciplines work together from the beginning. We do not engineer in silos. We integrate."
          />

          <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2">
            <div>
              <h3 className="mb-6 font-heading text-2xl font-bold text-navy">
                Why Integration Matters
              </h3>
              <ul className="space-y-4">
                {[
                  'Process design directly influences equipment selection and cost.',
                  'Safety systems must integrate seamlessly with process control.',
                  'Piping routes constrain equipment placement, and equipment placement constrains piping.',
                  'Control strategies depend on instrumentation capability and plant operating philosophy.',
                  'Every discipline must accommodate the constraints and opportunities of the others.',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <span className="mt-1 text-lg font-bold text-teal">-&gt;</span>
                    <span className="text-graphite">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-6 font-heading text-2xl font-bold text-navy">
                Our Integrated Approach
              </h3>
              <ul className="space-y-4">
                {[
                  'Simultaneous development across disciplines from feasibility stage onward.',
                  'Regular integration reviews to maintain consistency, quality, and optimisation.',
                  'Shared understanding of risk, operability, maintainability, and cost drivers.',
                  'Senior engineers collaborating across discipline boundaries, not just within them.',
                  'A clear coordination interface for our clients throughout delivery.',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <span className="mt-1 text-lg font-bold text-teal">+</span>
                    <span className="text-graphite">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-6 sm:px-8">
          <SectionIntro
            label="Delivery Model"
            title="From Concept Selection to Execution Support"
            description="We support every stage of project development, bringing disciplined engineering methodology and proven delivery capability to each phase."
          />

          <div className="mt-16 space-y-12">
            {[
              {
                phase: 'Concept Selection & Feasibility',
                activities: [
                  'Define project objectives, constraints, and design basis.',
                  'Evaluate alternative technical options and risk profiles.',
                  'Develop preliminary engineering assessments and recommendations.',
                  'Support cost, schedule, and technical decision-making.',
                ],
              },
              {
                phase: 'FEED',
                activities: [
                  'Develop process flowsheets, equipment data, and system design intent.',
                  'Advance safety studies, design philosophies, and operability planning.',
                  'Prepare discipline deliverables that de-risk detailed design and procurement.',
                  'Establish realistic execution scope, cost, and schedule inputs.',
                ],
              },
              {
                phase: 'Detailed Engineering',
                activities: [
                  'Complete coordinated engineering deliverables across all required disciplines.',
                  'Produce specifications, layouts, calculations, and construction-ready documentation.',
                  'Support design reviews, interface management, and technical resolution.',
                  'Maintain compliance, traceability, and document control throughout delivery.',
                ],
              },
              {
                phase: 'Execution Support',
                activities: [
                  'Provide procurement and vendor technical support.',
                  'Review supplier documentation, packages, and discipline interfaces.',
                  'Support commissioning readiness, startup planning, and performance verification.',
                  'Assist with technical queries during construction and implementation.',
                ],
              },
            ].map((item) => (
              <div key={item.phase} className="border-l-4 border-teal pl-6 sm:pl-8">
                <h3 className="mb-4 font-heading text-2xl font-bold text-navy">
                  {item.phase}
                </h3>
                <ul className="space-y-2">
                  {item.activities.map((activity) => (
                    <li key={activity} className="flex items-start gap-3 text-graphite">
                      <span className="mt-2 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal" />
                      <span>{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Let's Discuss Your Engineering Challenge"
        description="Whether you are exploring feasibility or refining detailed design, we are ready to bring rigorous engineering thinking to your project."
        cta={{ label: 'Get in Touch', href: '/contact' }}
      />
    </>
  )
}
