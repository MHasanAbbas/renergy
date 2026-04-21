interface SectionIntroProps {
  label?: string
  title: string
  description: string
  layout?: 'center' | 'left'
}

export function SectionIntro({
  label,
  title,
  description,
  layout = 'center',
}: SectionIntroProps) {
  return (
    <div
      className={
        layout === 'center'
          ? 'max-w-2xl mx-auto text-center'
          : 'max-w-2xl'
      }
    >
      {label && (
        <p className="text-teal font-semibold text-sm uppercase tracking-wider mb-4">
          {label}
        </p>
      )}
      <h2 className="font-heading font-bold text-4xl sm:text-5xl text-navy mb-6 leading-tight">
        {title}
      </h2>
      <p className="text-lg text-graphite leading-relaxed">
        {description}
      </p>
    </div>
  )
}
