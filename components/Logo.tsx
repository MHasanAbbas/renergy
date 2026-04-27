import Image from 'next/image'

type LogoProps = {
  priority?: boolean
  widthClassName?: string
}

export function Logo({ priority = false, widthClassName = 'w-[180px] sm:w-[210px]' }: LogoProps) {
  return (
    <Image
      src="/images/ocean-energy-logo.svg"
      alt="Ocean Energy Middle East"
      width={290}
      height={72}
      priority={priority}
      className={`${widthClassName} h-auto max-w-full`}
    />
  )
}
