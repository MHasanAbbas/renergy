import Link from 'next/link'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy text-off-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Main Footer Content */}
        <div className="py-16 sm:py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-12">
          {/* Company Info */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6 text-white">Verdant</h3>
            <p className="text-sm text-light-steel leading-relaxed">
              Premium engineering consultancy. We design the systems that power the Gulf's most critical industrial operations.
            </p>
            <div className="mt-6">
              <p className="text-xs text-light-steel mb-1">Muscat, Oman</p>
              <p className="text-xs text-light-steel">+968 90 000 000</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-sm mb-6 text-white">Services</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/services#process" className="text-light-steel hover:text-teal transition-colors">
                  Process Engineering
                </Link>
              </li>
              <li>
                <Link href="/services#safety" className="text-light-steel hover:text-teal transition-colors">
                  Technical Safety
                </Link>
              </li>
              <li>
                <Link href="/services#control" className="text-light-steel hover:text-teal transition-colors">
                  Control & Instrumentation
                </Link>
              </li>
              <li>
                <Link href="/services#piping" className="text-light-steel hover:text-teal transition-colors">
                  Piping & Plot Planning
                </Link>
              </li>
              <li>
                <Link href="/services#mechanical" className="text-light-steel hover:text-teal transition-colors">
                  Mechanical Equipment
                </Link>
              </li>
            </ul>
          </div>

          {/* Sectors */}
          <div>
            <h4 className="font-heading font-semibold text-sm mb-6 text-white">Sectors</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/sectors#oil-gas" className="text-light-steel hover:text-teal transition-colors">
                  Oil & Gas
                </Link>
              </li>
              <li>
                <Link href="/sectors#cryogenic" className="text-light-steel hover:text-teal transition-colors">
                  Cryogenic & LNG
                </Link>
              </li>
              <li>
                <Link href="/sectors#refining" className="text-light-steel hover:text-teal transition-colors">
                  Refining & Petrochemicals
                </Link>
              </li>
              <li>
                <Link href="/sectors#storage" className="text-light-steel hover:text-teal transition-colors">
                  Storage & Infrastructure
                </Link>
              </li>
              <li>
                <Link href="/sectors#utilities" className="text-light-steel hover:text-teal transition-colors">
                  Utilities
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-heading font-semibold text-sm mb-6 text-white">Company</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="text-light-steel hover:text-teal transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-light-steel hover:text-teal transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/compliance" className="text-light-steel hover:text-teal transition-colors">
                  QHSE & Compliance
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-light-steel hover:text-teal transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-heading font-semibold text-sm mb-6 text-white">Connect</h4>
            <p className="text-sm text-light-steel mb-4">
              Let's discuss your engineering challenge.
            </p>
            <p className="text-xs text-light-steel">
              <strong>Email:</strong>
              <br />
              info@verdant-eng.com
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 py-6 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-xs text-light-steel">
            &copy; {currentYear} Verdant Engineering. All rights reserved.
          </p>
          <p className="text-xs text-light-steel mt-4 sm:mt-0">
            Premium engineering consultancy, Oman. Serving the Gulf's most critical industrial operations.
          </p>
        </div>
      </div>
    </footer>
  )
}
