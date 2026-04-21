import type { Metadata } from 'next'
import { Hero } from '@/components/Hero'
import { SectionIntro } from '@/components/SectionIntro'
import { ContactForm } from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Verdant Engineering | Contact Us',
  description:
    'Get in touch with Verdant Engineering. We\'re ready to discuss your engineering challenge or project opportunity.',
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
        imageAlt="Verdant Engineering contact"
        imagePosition="58% center"
      />

      {/* Contact Info & Form */}
      <section className="py-20 sm:py-28 bg-off-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <SectionIntro
                label="Contact Details"
                title="Reach Out"
                description="Multiple ways to get in touch with our team."
                layout="left"
              />

              <div className="mt-12 space-y-8">
                <div>
                  <h3 className="font-heading font-bold text-navy mb-2">
                    Head Office
                  </h3>
                  <p className="text-sm text-graphite leading-relaxed">
                    Muscat, Oman
                    <br />
                    Gulf Region
                  </p>
                </div>

                <div>
                  <h3 className="font-heading font-bold text-navy mb-2">
                    Email
                  </h3>
                  <a
                    href="mailto:info@verdant-eng.com"
                    className="text-sm text-teal hover:text-teal-dark font-medium"
                  >
                    info@verdant-eng.com
                  </a>
                </div>

                <div>
                  <h3 className="font-heading font-bold text-navy mb-2">
                    Telephone
                  </h3>
                  <a
                    href="tel:+96890000000"
                    className="text-sm text-teal hover:text-teal-dark font-medium"
                  >
                    +968 90 000 000
                  </a>
                </div>

                <div>
                  <h3 className="font-heading font-bold text-navy mb-2">
                    Response Time
                  </h3>
                  <p className="text-sm text-graphite">
                    We typically respond to enquiries within 24 hours.
                  </p>
                </div>

                <div className="bg-white border-l-4 border-teal rounded-sm p-4 mt-8">
                  <p className="text-xs text-graphite leading-relaxed">
                    <strong>Confidentiality:</strong> All enquiries are treated as confidential. We maintain strict information security practices.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white border border-light-steel rounded-sm p-8 sm:p-12">
                <h2 className="font-heading font-bold text-3xl text-navy mb-2">
                  Send Us an Enquiry
                </h2>
                <p className="text-graphite mb-8 leading-relaxed">
                  Tell us about your project. The more detail you can provide, the better we can understand your challenge and respond with relevant expertise.
                </p>

                <ContactForm />
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
            description="Answers to common questions about working with Verdant Engineering."
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
                q: 'Do you work with international clients or only Gulf-based?',
                a: 'We work with clients globally, but our deepest expertise and primary focus is Gulf-based industrial operations. Our regional knowledge and operational context are particular strengths.',
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
            Ready to Get Started?
          </h2>
          <p className="text-lg text-light-steel mb-8 leading-relaxed">
            Whether you're ready to discuss a specific project or exploring how we can help, we're ready to listen. Fill out the form above or call us directly.
          </p>
          <a
            href="tel:+96890000000"
            className="inline-block px-8 py-4 bg-teal hover:bg-teal-dark text-white font-semibold rounded-sm transition-colors"
          >
            Call Us Now
          </a>
        </div>
      </section>
    </>
  )
}
