import Link from 'next/link'
import Image from 'next/image'

interface ServiceCardProps {
  id: string
  title: string
  value: string
  description: string
  items: string[]
  image: string
  imageAlt: string
}

export function ServiceCard({
  id,
  title,
  value,
  description,
  items,
  image,
  imageAlt,
}: ServiceCardProps) {
  return (
    <article
      className="group flex h-full flex-col overflow-hidden rounded-sm border border-light-steel bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal/40 hover:shadow-[0_18px_40px_rgba(18,38,62,0.16)]"
      id={id}
    >
      <div className="relative h-56 overflow-hidden border-b border-light-steel bg-off-white">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(10,20,36,0.08)_0%,_rgba(10,20,36,0.2)_100%)]" />
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <div className="mb-4 inline-block rounded-sm bg-teal/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-teal">
          {value}
        </div>

        <h3 className="mb-3 font-heading text-2xl font-bold text-navy">
          {title}
        </h3>

        <p className="mb-6 text-graphite leading-relaxed">
          {description}
        </p>

        <ul className="mb-8 space-y-2">
          {items.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm text-graphite">
              <span className="mt-2 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-teal transition-colors hover:text-teal-dark"
        >
          Learn more
          <span aria-hidden="true">{'->'}</span>
        </Link>
      </div>
    </article>
  )
}
