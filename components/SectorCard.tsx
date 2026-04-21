import Link from 'next/link'
import Image from 'next/image'

interface SectorCardProps {
  id: string
  name: string
  context: string
  projects: string[]
  expertise: string
  image: string
}

export function SectorCard({
  id,
  name,
  context,
  projects,
  expertise,
  image,
}: SectorCardProps) {
  return (
    <div
      className="group bg-white border border-light-steel rounded-sm overflow-hidden hover:shadow-lg transition-shadow"
      id={id}
    >
      {/* Image */}
      <div className="relative h-48 sm:h-56 overflow-hidden bg-off-white">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-6 sm:p-8">
        {/* Title */}
        <h3 className="font-heading font-bold text-2xl text-navy mb-4">
          {name}
        </h3>

        {/* Context */}
        <p className="text-graphite text-sm mb-6 leading-relaxed">
          {context}
        </p>

        {/* Projects */}
        <div className="mb-6">
          <h4 className="font-semibold text-sm text-navy mb-3">Our Experience</h4>
          <ul className="space-y-2">
            {projects.slice(0, 3).map((project, idx) => (
              <li key={idx} className="flex items-start gap-3 text-xs text-graphite">
                <span className="inline-block w-1 h-1 bg-teal rounded-full mt-1.5 flex-shrink-0" />
                <span>{project}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Expertise */}
        <p className="text-graphite text-xs leading-relaxed mb-6 pb-6 border-t border-light-steel pt-6">
          {expertise}
        </p>

        {/* CTA */}
        <Link
          href="/contact"
          className="inline-block text-teal font-semibold text-sm hover:text-teal-dark transition-colors"
        >
          Discuss Your Project →
        </Link>
      </div>
    </div>
  )
}
