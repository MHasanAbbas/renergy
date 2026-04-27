import type { Metadata } from 'next'
import { Hero } from '@/components/Hero'
import { SectionIntro } from '@/components/SectionIntro'

export const metadata: Metadata = {
  title: 'Ocean Energy Middle East | Contact Us',
  description:
    'Get in touch with Ocean Energy Middle East. We\'re ready to discuss your engineering challenge or project opportunity.',
}

export default function Contact() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Let's Discuss Your Engineering Challenge"
        subtitle="Get in Touch"
        description="We work best when engaged early. Whether you\'re exploring feasibility or refining detailed design, we\'re ready to listen and apply rigorous engineering thinking to your project."
        image="/images/contact-oman-office.jpg"
        imageAlt="Ocean Energy office"
        imagePosition="58% center"
      />

      {/* Contact Info Section */}
      <section className="py-20 sm:py-28 bg-off-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <SectionIntro
            label="Contact Information"
            title="Reach Out to Our Team"
            description="Get in touch with Ocean Energy Middle East to discuss your project requirements."
          />

          <div className="mt-20">
            {/* Main Contact Card */}
            <div className="bg-white border border-light-steel rounded-sm shadow-sm p-12 sm:p-16">
              <div className="space-y-12">
                {/* Office Address */}
                <div>
                  <div className="flex items-start gap-6">
                    <div className="text-teal text-4xl flex-shrink-0">
                      📍
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-2xl text-navy mb-3">
                        Jubail, Saudi Arabia
                      </h3>
                      <p className="text-base text-graphite leading-relaxed mb-2">
                        1st Floor, Business Centre
                      </p>
                      <p className="text-base text-graphite leading-relaxed mb-2">
                        Al Jabal Road
                      </p>
                      <p className="text-base text-graphite leading-relaxed">
                        Jubail, Saudi Arabia
                      </p>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="border-t border-light-steel pt-12">
                  <div className="flex items-start gap-6">
                    <div className="text-teal text-4xl flex-shrink-0">
                      ✉️
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-2xl text-navy mb-3">
                        Email
                      </h3>
                      <a
                        href="mailto:mail@oenergy.co.uk"
                        className="text-lg text-teal hover:text-teal-dark font-medium transition-colors"
                      >
                        mail@oenergy.co.uk
                      </a>
                    </div>
                  </div>
                </div>

                {/* Telephone */}
                <div className="border-t border-light-steel pt-12">
                  <div className="flex items-start gap-6">
                    <div className="text-teal text-4xl flex-shrink-0">
                      📞
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-2xl text-navy mb-3">
                        Telephone
                      </h3>
                      <a
                        href="tel:+447950364456"
                        className="text-lg text-teal hover:text-teal-dark font-medium transition-colors"
                      >
                        +44 7950 364 456
                      </a>
                    </div>
                  </div>
                </div>

                {/* Response Time */}
                <div className="border-t border-light-steel pt-12">
                  <div className="flex items-start gap-6">
                    <div className="text-teal text-4xl flex-shrink-0">
                      ⏱️
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-2xl text-navy mb-3">
                        Response Time
                      </h3>
                      <p className="text-base text-graphite leading-relaxed">
                        We typically respond to enquiries within 24 hours. For urgent matters, please call directly.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Confidentiality Notice */}
              <div className="bg-navy bg-opacity-5 border-l-4 border-teal rounded-sm p-6 mt-12">
                <p className="text-sm text-graphite leading-relaxed">
                  <strong className="text-navy">Confidentiality & Security:</strong> All enquiries are treated as strictly confidential. We maintain rigorous information security practices and full compliance with data protection regulations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <SectionIntro
            label="Common Questions"
            title="Frequently Asked Questions"
            description="Answers to common questions about working with Ocean Energy Middle East."
          />

          <div className="mt-16 space-y-6">
            {[
              {
                q: 'How quickly can you respond to an urgent enquiry?',
                a: 'We maintain flexibility to respond quickly to urgent requests. For time-sensitive opportunities, contact us directly by phone and we can often engage within hours.',
              },
              {
                q: 'What is your typical project engagement model?',
                a: 'We work flexibly across multiple models: focused consulting on specific technical issues, integrated engineering campaigns across multiple disciplines, resource augmentation for larger teams, or advisory roles. We tailor engagement to fit your project needs.',
              },
              {
                q: 'Do you work with international clients or only in specific regions?',
                a: 'We work with clients across Europe, the Middle East, and South Asia. Our experience spans multiple regions and industrial contexts, enabling us to bring regional understanding combined with global best practices.',
              },
              {
                q: 'What are your typical project timelines?',
                a: 'Project timelines vary widely. Feasibility studies might span 6-8 weeks; FEED engineering 3-6 months; detailed engineering 6-18 months depending on project scale. We\'re clear about realistic timelines from the outset.',
              },
              {
                q: 'Can you reference other clients or similar projects?',
                a: 'Yes. We maintain confidentiality on project details per our client agreements, but can discuss similar work experience and connect you with references in comparable sectors where appropriate.',
              },
              {
                q: 'Do you offer retainer arrangements or ongoing advisory?',
                a: 'Yes. Many clients engage us on retainer basis for ongoing technical advisory, review services, or rapid-response consulting. We can structure these arrangements to fit your requirements.',
              },
              {
                q: 'What standards and regulations do you design to?',
                a: 'We design to all applicable international standards (ISO, ASME, API, IEC) and comply with relevant local regulations. Project-specific requirements are confirmed at the outset of engagement.',
              },
              {
                q: 'How do you ensure quality and manage project delivery?',
                a: 'We maintain rigorous quality protocols including peer technical review, design verification, document control, and progress tracking. Clients receive regular status updates and have visibility into project progression.',
              },
            ].map((faq, idx) => (
              <details key={idx} className="group border border-light-steel rounded-sm">
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-off-white transition-colors">
                  <h4 className="font-semibold text-navy">{faq.q}</h4>
                  <span className="text-teal text-xl group-open:rotate-180 transition-transform">
                    +
                  </span>
                </summary>
                <div className="px-6 pb-6 border-t border-light-steel">
                  <p className="text-graphite leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-20 bg-navy">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <h2 className="font-heading font-bold text-4xl sm:text-5xl text-white mb-4">
            Ready to Discuss Your Project?
          </h2>
          <p className="text-lg text-light-steel mb-8 leading-relaxed">
            Contact us via email or phone. We're ready to listen and apply rigorous engineering thinking to your challenge.
          </p>
          <a
            href="tel:+447950364456"
            className="inline-block px-8 py-4 bg-teal hover:bg-teal-dark text-white font-semibold rounded-sm transition-colors"
          >
            Call Us Now
          </a>
        </div>
      </section>
    </>
  )
}
