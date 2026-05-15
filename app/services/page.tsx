import type { Metadata } from 'next'
import Image from 'next/image'
import { SectionIntro } from '@/components/SectionIntro'
import { ServiceCard } from '@/components/ServiceCard'
import { CTABanner } from '@/components/CTABanner'
import { SERVICES } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Ocean Energy Middle East | Engineering Services',
  description:
    'Professional engineering services for oil and gas, cryogenic, refining, and industrial projects across the full project lifecycle.',
}

const heroGears = [
  { x: 164, y: 154, outerRadius: 56, coreRadius: 18, teeth: 14, label: 'Process' },
  { x: 256, y: 220, outerRadius: 40, coreRadius: 14, teeth: 12, label: 'Safety' },
  { x: 342, y: 150, outerRadius: 48, coreRadius: 16, teeth: 12, label: 'Control' },
  { x: 428, y: 234, outerRadius: 62, coreRadius: 20, teeth: 16, label: 'Piping' },
] as const

const heroBadges = [
  { x: 96, y: 78, label: 'Mechanical Static' },
  { x: 350, y: 70, label: 'Instrumentation' },
  { x: 78, y: 308, label: 'Rotating Equipment' },
  { x: 326, y: 328, label: 'Pipeline Systems' },
] as const

function Gear({
  x,
  y,
  outerRadius,
  coreRadius,
  teeth,
  label,
}: {
  x: number
  y: number
  outerRadius: number
  coreRadius: number
  teeth: number
  label: string
}) {
  return (
    <g>
      {Array.from({ length: teeth }).map((_, index) => {
        const angle = (360 / teeth) * index

        return (
          <rect
            key={`${label}-${angle}`}
            x={x - 5}
            y={y - outerRadius - 8}
            width="10"
            height="18"
            rx="2"
            fill="rgba(232, 243, 255, 0.76)"
            opacity="0.82"
            transform={`rotate(${angle} ${x} ${y})`}
          />
        )
      })}
      <circle
        cx={x}
        cy={y}
        r={outerRadius}
        fill="rgba(10, 27, 46, 0.52)"
        stroke="rgba(232, 243, 255, 0.72)"
        strokeWidth="2.5"
      />
      <circle
        cx={x}
        cy={y}
        r={outerRadius - 14}
        fill="rgba(9, 23, 41, 0.28)"
        stroke="rgba(125, 224, 220, 0.72)"
        strokeWidth="1.5"
      />
      <circle
        cx={x}
        cy={y}
        r={coreRadius}
        fill="rgba(125, 224, 220, 0.2)"
        stroke="rgba(255, 255, 255, 0.9)"
        strokeWidth="2"
      />
      <path
        d={`M ${x - outerRadius + 18} ${y} H ${x + outerRadius - 18}`}
        stroke="rgba(125, 224, 220, 0.7)"
        strokeWidth="1.5"
        strokeDasharray="5 7"
      />
      <path
        d={`M ${x} ${y - outerRadius + 18} V ${y + outerRadius - 18}`}
        stroke="rgba(125, 224, 220, 0.7)"
        strokeWidth="1.5"
        strokeDasharray="5 7"
      />
    </g>
  )
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
                Engineering disciplines. One integrated delivery model.
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
            <div className="relative overflow-hidden rounded-[20px] border border-white/10 bg-white/5 shadow-[0_26px_80px_rgba(2,10,20,0.36)] backdrop-blur-sm">
              <div className="relative aspect-[11/8]">
                <Image
                  src="/images/services-hero.jpg"
                  alt="Industrial engineering facility with interconnected service systems"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 44vw"
                  className="object-cover scale-[1.02]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(145deg,_rgba(10,20,36,0.16)_0%,_rgba(10,20,36,0.42)_48%,_rgba(10,20,36,0.68)_100%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,_transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,_transparent_1px)] bg-[size:36px_36px] opacity-15" />

                <svg
                  viewBox="0 0 520 380"
                  className="absolute inset-0 h-full w-full"
                  role="img"
                  aria-label="Interconnected mechanical engineering services diagram"
                >
                  <defs>
                    <linearGradient id="gear-link" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#7de0dc" stopOpacity="0.95" />
                      <stop offset="100%" stopColor="#eef5ff" stopOpacity="0.55" />
                    </linearGradient>
                    <linearGradient id="badge-fill" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="rgba(8, 25, 44, 0.88)" />
                      <stop offset="100%" stopColor="rgba(13, 39, 66, 0.72)" />
                    </linearGradient>
                  </defs>

                  <g fill="none" stroke="url(#gear-link)" strokeWidth="3">
                    <path d="M112 152 H 210" opacity="0.9" />
                    <path d="M296 150 H 366" opacity="0.82" />
                    <path d="M196 184 L 232 208" opacity="0.82" />
                    <path d="M278 210 L 374 230" opacity="0.75" />
                    <path d="M160 258 C 210 310, 286 328, 356 316" opacity="0.56" strokeDasharray="6 10" />
                    <path d="M124 108 C 164 74, 236 60, 322 86" opacity="0.5" strokeDasharray="6 10" />
                  </g>

                  {heroGears.map((gear) => (
                    <Gear key={gear.label} {...gear} />
                  ))}

                  {heroGears.map((gear) => (
                    <text
                      key={`${gear.label}-text`}
                      x={gear.x}
                      y={gear.y + gear.outerRadius + 28}
                      textAnchor="middle"
                      fill="#eef5ff"
                      fontSize="13"
                      fontWeight="700"
                      letterSpacing="0.08em"
                    >
                      {gear.label}
                    </text>
                  ))}

                  {heroBadges.map((badge) => (
                    <g key={badge.label}>
                      <rect
                        x={badge.x}
                        y={badge.y}
                        width="138"
                        height="30"
                        rx="7"
                        fill="rgba(9, 24, 41, 0.78)"
                        stroke="rgba(125, 224, 220, 0.34)"
                      />
                      <text
                        x={badge.x + 69}
                        y={badge.y + 19}
                        textAnchor="middle"
                        fill="#dbe8f6"
                        fontSize="11.5"
                        fontWeight="600"
                        letterSpacing="0.06em"
                      >
                        {badge.label}
                      </text>
                    </g>
                  ))}

                  <rect
                    x="48"
                    y="322"
                    width="168"
                    height="36"
                    rx="9"
                    fill="rgba(255,255,255,0.08)"
                    stroke="rgba(125,224,220,0.28)"
                  />
                  <text x="132" y="345" textAnchor="middle" fill="#eef5ff" fontSize="12.5" fontWeight="700" letterSpacing="0.08em">
                    Integrated delivery
                  </text>
                </svg>

                <div className="absolute bottom-5 right-5 rounded-sm border border-white/10 bg-navy/70 px-4 py-3 backdrop-blur-sm">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-teal">
                    Multi-discipline
                  </p>
                  <p className="mt-1 text-sm text-light-steel">
                    Process, safety, control, piping and mechanical systems engineered together.
                  </p>
                </div>
              </div>
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
