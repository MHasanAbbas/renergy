import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ocean Energy Middle East Ltd. | Contact',
  description: 'Contact Ocean Energy Middle East Ltd. in Muscat, Oman.',
}

function ContactCard({
  label,
  value,
  href,
  icon,
}: {
  label: string
  value: string
  href: string
  icon: React.ReactNode
}) {
  return (
    <a
      href={href}
      className="rounded-sm border border-light-steel bg-white p-7 shadow-sm transition-colors hover:border-teal/35"
    >
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-sm bg-teal/10 text-teal">
          {icon}
        </div>
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">
            {label}
          </p>
          <p className="mt-3 break-all font-heading text-2xl font-bold leading-tight text-navy sm:text-3xl">
            {value}
          </p>
        </div>
      </div>
    </a>
  )
}

export default function Contact() {
  return (
    <section className="bg-off-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="overflow-hidden rounded-sm border border-light-steel bg-white shadow-[0_24px_70px_rgba(20,31,53,0.10)]">
          <div className="grid gap-0 lg:grid-cols-[1.02fr_0.98fr]">
            <div className="p-8 sm:p-10 lg:p-12">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">
                Contact
              </p>
              <h1 className="mt-4 font-heading text-4xl font-bold leading-tight text-navy sm:text-5xl">
                Ocean Energy Middle East Ltd.
              </h1>

              <div className="mt-10 border-l-4 border-teal pl-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">
                  Registered Office
                </p>
                <address className="mt-5 not-italic text-xl leading-relaxed text-navy sm:text-2xl">
                  <span className="block">Building 49, Way 233, Block 233,</span>
                  <span className="block">South Al Khuwair,</span>
                  <span className="block">Muscat, Oman</span>
                </address>
              </div>
            </div>

            <div className="border-t border-light-steel bg-off-white p-8 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
              <div className="relative overflow-hidden rounded-sm border border-light-steel bg-navy shadow-sm">
                <div className="absolute inset-0 bg-[linear-gradient(135deg,_rgba(255,255,255,0.05)_0%,_transparent_44%,_rgba(30,123,124,0.14)_100%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,_transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,_transparent_1px)] bg-[size:34px_34px] opacity-20" />
                <div className="absolute -right-14 top-10 h-40 w-40 rounded-full border border-white/12" />
                <div className="absolute -right-6 top-18 h-24 w-24 rounded-full border border-teal/30" />
                <div className="absolute left-10 top-10 h-3 w-3 rounded-full bg-teal/70" />
                <div className="absolute left-20 top-24 h-px w-32 bg-gradient-to-r from-teal/60 to-transparent" />

                <div className="relative p-8 sm:p-10">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">
                    Office Location
                  </p>
                  <div className="mt-8 max-w-sm">
                    <p className="font-heading text-4xl font-bold leading-tight text-white sm:text-5xl">
                      Muscat
                    </p>
                    <p className="mt-2 font-heading text-2xl font-semibold text-light-steel sm:text-3xl">
                      Oman
                    </p>
                    <p className="mt-6 text-base leading-relaxed text-light-steel">
                      Corporate contact details for Ocean Energy Middle East Ltd.
                    </p>
                  </div>

                  <div className="mt-10 inline-flex rounded-sm border border-white/14 bg-white/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-light-steel">
                    Registered Office
                  </div>
                </div>
              </div>

              <div className="mt-6 grid gap-6">
                <ContactCard
                  label="Phone"
                  value="+968 9947 2300"
                  href="tel:+96899472300"
                  icon={(
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.62a2 2 0 0 1-.45 2.11L8 9.91a16 16 0 0 0 6.09 6.09l1.46-1.23a2 2 0 0 1 2.11-.45c.84.29 1.72.5 2.62.62A2 2 0 0 1 22 16.92Z" />
                    </svg>
                  )}
                />

                <ContactCard
                  label="Email"
                  value="mail@oenergyme.com"
                  href="mailto:mail@oenergyme.com"
                  icon={(
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <rect x="3" y="5" width="18" height="14" rx="2" />
                      <path d="m4 7 8 6 8-6" />
                    </svg>
                  )}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
