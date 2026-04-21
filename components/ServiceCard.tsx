import Link from 'next/link'
import Image from 'next/image'

interface ServiceCardProps {
  id: string
  title: string
  value: string
  description: string
  items: string[]
  image: string
  isExpanded?: boolean
}

export function ServiceCard({
  id,
  title,
  value,
  description,
  items,
  image,
  isExpanded = false,
}: ServiceCardProps) {
  return (
    <div
      className="group bg-white border border-light-steel rounded-sm overflow-hidden hover:shadow-lg transition-shadow"
      id={id}
    >
      {/* Image */}
      <div className="relative h-48 sm:h-56 overflow-hidden bg-off-white">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-6 sm:p-8">
        {/* Value badge */}
        <div className="inline-block px-3 py-1 bg-teal/10 text-teal text-xs font-semibold uppercase tracking-wider rounded-sm mb-4">
          {value}
        </div>

        {/* Title */}
        <h3 className="font-heading font-bold text-2xl text-navy mb-3">
          {title}
        </h3>

        {/* Description */}
        <p className="text-graphite mb-6 leading-relaxed">
          {description}
        </p>

        {/* Items List */}
        <ul className="space-y-2 mb-6">
          {items.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm text-graphite">
              <span className="inline-block w-1.5 h-1.5 bg-teal rounded-full mt-2 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          href="/contact"
          className="inline-block text-teal font-semibold text-sm hover:text-teal-dark transition-colors"
        >
          Discuss This Discipline →
        </Link>
      </div>
    </div>
  )
}
