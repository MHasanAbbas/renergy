import Image from 'next/image'

type LogoProps = {
  priority?: boolean
  widthClassName?: string
}

export function Logo({ priority = false, widthClassName = 'w-[200px] sm:w-[228px]' }: LogoProps) {
  return (
    <Image
      src="/images/ocean-energy-logo.svg"
      alt="Ocean Energy Middle East Ltd."
      width={320}
      height={80}
      priority={priority}
      className={`${widthClassName} h-auto max-w-full`}
    />
  )
}
