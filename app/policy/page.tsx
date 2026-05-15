import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Ocean Energy Middle East Ltd. | Policy',
  description:
    'Read Ocean Energy Middle East Ltd. policies covering HSSE commitments and legal compliance standards.',
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
}: {
  title: string
  items: string[]
}) {
  return (
    <section className="rounded-sm border border-light-steel bg-white p-8 shadow-sm sm:p-10">
      <h3 className="font-heading text-2xl font-bold text-navy">
        {title}
      </h3>
      <div className="mt-6">
        <PolicyList items={items} />
      </div>
    </section>
  )
}

export default function PolicyPage() {
  return (
    <section className="bg-off-white py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        <div className="rounded-sm border border-light-steel bg-white p-8 shadow-sm sm:p-12">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-teal">
            Policies
          </p>
          <h1 className="font-heading text-5xl font-bold leading-tight text-navy sm:text-6xl">
            HSSE policy and legal compliance standards.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-graphite">
            Ocean Energy Middle East Ltd. (&quot;OEME&quot;) maintains a policy framework that places health, safety, security, and environmental responsibility alongside disciplined engineering quality and lawful business conduct.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="#hsse-policy"
              className="inline-flex items-center rounded-sm bg-teal px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-teal-dark"
            >
              View HSSE Policy
            </Link>
            <Link
              href="#legal-compliance"
              className="inline-flex items-center rounded-sm border border-light-steel px-6 py-3 text-sm font-semibold text-navy transition-colors hover:border-teal/40 hover:text-teal"
            >
              View Legal Compliance
            </Link>
          </div>
        </div>

        <div className="mt-10 space-y-10">
          <section
            id="hsse-policy"
            className="rounded-sm border border-light-steel bg-white p-8 shadow-sm sm:p-12"
          >
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-teal">
              HSSE Policy Statement
            </p>
            <h2 className="font-heading text-4xl font-bold leading-tight text-navy sm:text-5xl">
              HSSE starts at concept and design phase and continues through operation and maintenance.
            </h2>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-graphite">
              <p>
                The main aim of Ocean Energy Middle East Ltd. is to continually improve the quality of our services and products while protecting people and the environment. Emphasis must be placed on ensuring human health, operational safety, environmental protection, quality enhancement, and community goodwill.
              </p>
              <p>
                HSSE starts from the concept and design phase of the project and continues to the operation and maintenance phase of the facility.
              </p>
              <p>
                This commitment is in the best interests of our customers, our employees, and the communities in which we work.
              </p>
              <p>
                Ocean Energy Middle East Ltd. requires active commitment to, and accountability for, HSSE from all employees and contractors. Our management plays an important role in communicating, implementing, and ensuring compliance with HSSE policies and standards.
              </p>
            </div>

            <div className="mt-10 rounded-sm bg-off-white p-8">
              <p className="mb-6 text-sm font-semibold uppercase tracking-[0.18em] text-teal">
                We Are Committed To
              </p>
              <PolicyList items={hsseCommitments} />
              <p className="mt-8 text-base leading-relaxed text-graphite">
                This policy shall be regularly reviewed to ensure it continues to meet the particular needs of our clients across the globe. These commitments are in addition to our basic obligation to comply with international and local standards, as well as all applicable laws and regulations relevant to each project location.
              </p>
            </div>
          </section>

          <section
            id="legal-compliance"
            className="rounded-sm border border-light-steel bg-white p-8 shadow-sm sm:p-12"
          >
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-teal">
              Legal Compliance & Standards
            </p>
            <h2 className="font-heading text-4xl font-bold leading-tight text-navy sm:text-5xl">
              OEME is committed to lawful employment practice and professional conduct.
            </h2>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-graphite">
              <p>
                Ocean Energy Middle East Ltd. is committed to creating and complying with lawful human-resources policies and practices in all aspects of employment, including recruitment, evaluation, promotion, training, discipline, development, compensation, and termination.
              </p>
              <p>
                Ocean Energy Middle East Ltd. will comply with the applicable laws and regulations of the countries where we operate, including any commitments Ocean Energy Middle East Ltd. makes in relation to government policy and applicable regulatory requirements.
              </p>
              <p>
                Within the limits of the law, Ocean Energy Middle East Ltd. will ensure that employment-related decisions are based on relevant qualifications, merit, performance, and other job-related factors.
              </p>
            </div>

            <div className="mt-14 grid gap-8 lg:grid-cols-2">
              <PolicyCard title="Our Policy Is To" items={policyRequirements} />
              <PolicyCard title="Your Responsibility" items={personalResponsibilities} />
              <PolicyCard title="Harassment & Respect" items={harassmentStandards} />
              <PolicyCard title="Standards of Behaviour" items={behaviourStandards} />
            </div>

            <div className="mt-8 grid gap-8 lg:grid-cols-2">
              <PolicyCard title="Our Responsibility" items={organisationResponsibilities} />
              <PolicyCard title="Staff Responsibility" items={staffResponsibilities} />
            </div>
          </section>
        </div>
      </div>
    </section>
  )
}
