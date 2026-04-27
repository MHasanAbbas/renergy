import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Ocean Energy Middle East | Policy',
  description:
    'Read Ocean Energy Middle East policies covering HSSE commitments and legal compliance standards.',
}

const hsseCommitments = [
  'Protect the health and safety of our people at all times.',
  'Apply our expertise to all HSSE aspects in the design and engineering of our services and products.',
  'Minimise project impact on the environment through pollution prevention and emissions control.',
  'Meet specified customer requirements and ensure continuous customer satisfaction by delivering the highest quality.',
  'Set HSSE performance objectives, measure results, and continually improve process and service quality.',
  'Plan to avoid, and be prepared to handle, emergencies, crises, and business disruption.',
  'Eliminate quality non-conformances and HSSE accidents.',
]

const policyRequirements = [
  'Comply with all applicable laws, regulations, standards, and customer requirements.',
  'Apply company standards where laws do not exist or where additional internal discipline is required.',
]

const personalResponsibilities = [
  'Demonstrate respect and fairness in your interactions with employees and external parties, consistent with OEME core values and general business principles.',
  'Ensure employment-related decisions, including recruitment, evaluation, promotion, training, discipline, development, compensation, and termination, are determined by merit, business need, or legal considerations alone.',
  'Understand related local legislation and employee cultures that may affect workplace decisions.',
  'Do not tolerate unlawful discrimination of any kind.',
  'Seek HR guidance where there is uncertainty about labour-law or workplace conduct obligations.',
  'Report equal-opportunity concerns through the appropriate confidential channels.',
]

const harassmentStandards = [
  'OEME will not tolerate harassment in the workplace, including behaviour that is unwelcome, humiliating, intimidating, or hostile.',
  'Employees must remain aware of cultural diversity within OEME and respect the beliefs and behaviours of each individual, avoiding conduct that may reasonably be viewed as harassment.',
  'If an employee feels harassed, the issue may be raised informally or formally, and advice may be sought from a line manager or the relevant HR representative.',
]

const behaviourStandards = [
  'Employees are prohibited from being at work or on OEME business while impaired by the incorrect or abusive use of prescription drugs, alcohol, or illegal drugs.',
  'The possession, distribution, sale, or use of illegal drugs or alcohol, and the misuse of legal drugs or other substances on OEME business premises, is prohibited.',
  'Where an employee voluntarily discloses dependency on drugs or alcohol, the matter will be treated as a health issue, provided the employee actively seeks help and follows the rehabilitation programme.',
  'Failure to comply with a rehabilitation programme may be regarded as serious misconduct.',
  'A search may be conducted where there is good reason to believe that drugs or alcohol have been brought into the workplace or are in an individual\'s possession on OEME business premises.',
  'In situations giving cause for concern, including after accidents or near misses, OEME may require a medical examination, including alcohol testing. Drug and alcohol testing may also be conducted on a random basis where permitted.',
]

const organisationResponsibilities = [
  'Treat all employees, contract staff, suppliers, customers, and visitors with respect and avoid situations that may be perceived as inappropriate.',
  'Do not make inappropriate jokes or comments, or distribute or display offensive material.',
  'Do not spread malicious rumours or use voicemail, email, or other electronic media to transmit derogatory, harassing, or abusive information.',
  'Be sensitive to cultural differences and adapt behaviour accordingly when travelling or working with people from different cultures.',
  'Speak up and tell a person if their actions or behaviour are upsetting, explain why, and ask them to stop.',
  'Speak to your line manager or HR representative if the behaviour continues.',
  'Use an informal approach to resolve the issue where appropriate before raising a formal grievance.',
  'Use a formal grievance procedure where the matter is serious or the informal approach is unsuccessful.',
]

const staffResponsibilities = [
  'Comply with the standards of behaviour described above.',
  'Advise your line manager, HR representative, or both of any drug or alcohol dependency condition and any current medical treatment being received for dependency.',
  'Advise the relevant manager or occupational health contact if you are in a safety-sensitive role or location and are taking prescribed medication.',
  'Comply with any agreed rehabilitation programme.',
  'Do not ignore a case of substance abuse if you witness one.',
]

function PolicyList({
  items,
  textClassName = 'text-graphite',
}: {
  items: string[]
  textClassName?: string
}) {
  return (
    <ul className="space-y-4">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-4">
          <span className="mt-2 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-teal" />
          <span className={`text-base leading-relaxed ${textClassName}`}>{item}</span>
        </li>
      ))}
    </ul>
  )
}

function PolicyCard({
  title,
  items,
  tone = 'light',
}: {
  title: string
  items: string[]
  tone?: 'light' | 'dark'
}) {
  const isDark = tone === 'dark'

  return (
    <section
      className={
        isDark
          ? 'rounded-sm border border-white/10 bg-navy p-8 shadow-sm sm:p-10'
          : 'rounded-sm border border-light-steel bg-white p-8 shadow-sm sm:p-10'
      }
    >
      <h3 className={`font-heading text-2xl font-bold ${isDark ? 'text-white' : 'text-navy'}`}>
        {title}
      </h3>
      <div className="mt-6">
        <PolicyList items={items} textClassName={isDark ? 'text-light-steel' : 'text-graphite'} />
      </div>
    </section>
  )
}

export default function PolicyPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy pt-20">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,_#1d3457_0%,_#152844_48%,_#0f1f35_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_24%,_rgba(30,123,124,0.18),_transparent_22%),radial-gradient(circle_at_78%_28%,_rgba(183,203,228,0.12),_transparent_18%),radial-gradient(circle_at_70%_78%,_rgba(30,123,124,0.14),_transparent_24%)]" />

        <div className="relative mx-auto grid min-h-[72vh] max-w-7xl items-center gap-12 px-6 py-20 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-teal">
              Policies
            </p>
            <h1 className="font-heading text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl">
              HSSE policy and legal compliance standards.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-light-steel sm:text-xl">
              Ocean Energy Middle East maintains a policy framework that places health, safety, security, and environmental responsibility alongside disciplined engineering quality and lawful business conduct.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="#hsse-policy"
                className="inline-flex items-center rounded-sm bg-teal px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-teal-dark"
              >
                View HSSE Policy
              </Link>
              <Link
                href="#legal-compliance"
                className="inline-flex items-center rounded-sm border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-light-steel backdrop-blur-sm transition-colors hover:border-white/25 hover:bg-white/10"
              >
                View Legal Compliance
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[20px] bg-teal/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-[20px] border border-white/10 bg-white/5 p-6 shadow-[0_26px_80px_rgba(2,10,20,0.36)] backdrop-blur-sm">
              <div className="absolute inset-0 bg-[linear-gradient(145deg,_rgba(255,255,255,0.08),_transparent_46%,_rgba(30,123,124,0.08)_100%)]" />
              <div className="relative grid gap-4 sm:grid-cols-2">
                {[
                  { label: 'Policy 01', title: 'HSSE Policy Statement' },
                  { label: 'Policy 02', title: 'Legal Compliance & Standards' },
                  { label: 'Priority', title: 'People, environment, quality' },
                  { label: 'Scope', title: 'Design through operation' },
                ].map((item) => (
                  <div key={item.title} className="rounded-sm border border-white/10 bg-navy/40 p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">
                      {item.label}
                    </p>
                    <p className="mt-3 text-lg font-semibold leading-snug text-white">
                      {item.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="hsse-policy" className="bg-off-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="rounded-sm border border-light-steel bg-white p-10 shadow-sm sm:p-12">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-teal">
                HSSE Policy Statement
              </p>
              <h2 className="font-heading text-4xl font-bold leading-tight text-navy sm:text-5xl">
                HSSE starts at concept and design phase and continues through operation and maintenance.
              </h2>
              <div className="mt-8 space-y-5 text-lg leading-relaxed text-graphite">
                <p>
                  The main aim of Ocean Energy Middle East is to continually improve the quality of our services and products while protecting people and the environment. Emphasis must be placed on ensuring human health, operational safety, environmental protection, quality enhancement, and community goodwill.
                </p>
                <p>
                  HSSE starts from the concept and design phase of the project and continues to the operation and maintenance phase of the facility.
                </p>
                <p>
                  This commitment is in the best interests of our customers, our employees, and the communities in which we work.
                </p>
                <p>
                  Ocean Energy Middle East requires active commitment to, and accountability for, HSSE from all employees and contractors. Our management plays an important role in communicating, implementing, and ensuring compliance with HSSE policies and standards.
                </p>
              </div>
            </div>

            <div className="rounded-sm bg-navy p-10 text-white shadow-sm sm:p-12">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">
                Policy Focus
              </p>
              <h3 className="mt-4 font-heading text-3xl font-bold leading-tight">
                Protection, prevention, quality, and preparedness must be built into every project stage.
              </h3>
              <div className="mt-8 space-y-6 text-light-steel">
                <div className="border-l-2 border-teal pl-5">
                  Protect people at all times.
                </div>
                <div className="border-l-2 border-teal pl-5">
                  Reduce environmental impact through disciplined engineering decisions.
                </div>
                <div className="border-l-2 border-teal pl-5">
                  Continually improve quality, performance, and emergency readiness.
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 rounded-sm border border-light-steel bg-white p-10 shadow-sm sm:p-12">
            <p className="mb-8 text-sm font-semibold uppercase tracking-[0.18em] text-teal">
              We Are Committed To
            </p>
            <div className="grid gap-x-12 gap-y-6 lg:grid-cols-2">
              <PolicyList items={hsseCommitments} />
            </div>
            <p className="mt-10 text-base leading-relaxed text-graphite">
              This policy shall be regularly reviewed to ensure it continues to meet the particular needs of our clients across the globe. These commitments are in addition to our basic obligation to comply with international and local standards, as well as all applicable laws and regulations relevant to each project location.
            </p>
          </div>
        </div>
      </section>

      <section id="legal-compliance" className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="max-w-4xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-teal">
              Legal Compliance & Standards
            </p>
            <h2 className="font-heading text-4xl font-bold leading-tight text-navy sm:text-5xl">
              OEME is committed to lawful employment practice and professional conduct.
            </h2>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-graphite">
              <p>
                Ocean Energy Middle East is committed to creating and complying with lawful human-resources policies and practices in all aspects of employment, including recruitment, evaluation, promotion, training, discipline, development, compensation, and termination.
              </p>
              <p>
                Ocean Energy Middle East will comply with the applicable laws and regulations of the countries where we operate, including any commitments Ocean Energy Middle East makes in relation to government policy and applicable regulatory requirements.
              </p>
              <p>
                Within the limits of the law, Ocean Energy Middle East will ensure that employment-related decisions are based on relevant qualifications, merit, performance, and other job-related factors.
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            <PolicyCard title="Our Policy Is To" items={policyRequirements} />
            <PolicyCard title="Your Responsibility" items={personalResponsibilities} />
            <PolicyCard title="Harassment & Respect" items={harassmentStandards} />
            <PolicyCard title="Standards of Behaviour" items={behaviourStandards} />
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <PolicyCard title="Our Responsibility" items={organisationResponsibilities} />
            <PolicyCard title="Staff Responsibility" items={staffResponsibilities} tone="dark" />
          </div>
        </div>
      </section>
    </>
  )
}
