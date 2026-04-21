import Link from 'next/link'
import Image from 'next/image'

interface HeroProps {
  title: string
  subtitle: string
  description?: string
  cta?: {
    label: string
    href: string
  }
  image: string
  imageAlt: string
  imagePosition?: string
}

export function Hero({
  title,
  subtitle,
  description,
  cta,
  image,
  imageAlt,
  imagePosition = 'center center',
}: HeroProps) {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-navy pt-20">
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, #213a63 0%, #1f355a 100%)',
        }}
      />

      {/* Mobile background */}
      <div className="absolute inset-0 md:hidden">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-[0.28] brightness-[0.78] saturate-[0.86]"
          style={{ objectPosition: imagePosition }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(31, 53, 90, 0.62) 0%, rgba(31, 53, 90, 0.8) 46%, #1f355a 100%)',
          }}
        />
      </div>

      {/* Desktop masked artwork */}
      <div className="absolute inset-0 hidden md:block">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-[0.68] brightness-[0.88] saturate-[0.9] scale-[1.03]"
          style={{
            objectPosition: imagePosition,
            WebkitMaskImage:
              'linear-gradient(to left, rgba(0, 0, 0, 1) 4%, rgba(0, 0, 0, 0.98) 24%, rgba(0, 0, 0, 0.86) 42%, rgba(0, 0, 0, 0.58) 60%, rgba(0, 0, 0, 0.18) 78%, transparent 94%)',
            maskImage:
              'linear-gradient(to left, rgba(0, 0, 0, 1) 4%, rgba(0, 0, 0, 0.98) 24%, rgba(0, 0, 0, 0.86) 42%, rgba(0, 0, 0, 0.58) 60%, rgba(0, 0, 0, 0.18) 78%, transparent 94%)',
          }}
        />
      </div>

      <div
        className="absolute inset-0 hidden md:block"
        style={{
          background:
            'linear-gradient(90deg, #1f355a 0%, rgba(31, 53, 90, 0.97) 28%, rgba(31, 53, 90, 0.78) 48%, rgba(31, 53, 90, 0.28) 100%)',
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 78% 28%, rgba(255, 255, 255, 0.12), transparent 18%), radial-gradient(circle at 72% 72%, rgba(30, 123, 124, 0.18), transparent 24%)',
        }}
      />

      <div className="absolute inset-y-0 right-0 hidden lg:block w-[48%] bg-gradient-to-l from-white/10 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 w-full">
        <div className="max-w-2xl py-24 sm:py-28 lg:py-32">
          <p className="text-teal font-semibold text-sm uppercase tracking-wider mb-4">
            {subtitle}
          </p>
          <h1 className="font-heading font-bold text-5xl sm:text-6xl lg:text-7xl text-white mb-6 leading-tight">
            {title}
          </h1>
          {description && (
            <p className="text-lg sm:text-xl text-light-steel mb-8 leading-relaxed max-w-xl">
              {description}
            </p>
          )}
          {cta && (
            <Link
              href={cta.href}
              className="inline-block px-8 py-4 bg-teal hover:bg-teal-dark text-white font-semibold rounded-sm transition-colors"
            >
              {cta.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
