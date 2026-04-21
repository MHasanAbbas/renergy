import Link from 'next/link'

interface CTABannerProps {
  title: string
  description: string
  cta: {
    label: string
    href: string
  }
  variant?: 'primary' | 'secondary'
}

export function CTABanner({
  title,
  description,
  cta,
  variant = 'primary',
}: CTABannerProps) {
  const bgColor = variant === 'primary' ? 'bg-navy' : 'bg-off-white'
  const titleColor = variant === 'primary' ? 'text-white' : 'text-navy'
  const descColor = variant === 'primary' ? 'text-light-steel' : 'text-graphite'

  return (
    <section className={`${bgColor} py-16 sm:py-20`}>
      <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
        <h2 className={`font-heading font-bold text-4xl sm:text-5xl ${titleColor} mb-4`}>
          {title}
        </h2>
        <p className={`text-lg ${descColor} mb-8 max-w-2xl mx-auto leading-relaxed`}>
          {description}
        </p>
        <Link
          href={cta.href}
          className={`inline-block px-8 py-4 ${
            variant === 'primary'
              ? 'bg-teal hover:bg-teal-dark text-white'
              : 'bg-teal hover:bg-teal-dark text-white'
          } font-semibold rounded-sm transition-colors`}
        >
          {cta.label}
        </Link>
      </div>
    </section>
  )
}
