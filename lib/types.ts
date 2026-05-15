export interface Service {
  id: string
  title: string
  value: string
  description: string
  items: string[]
  impact: string
  image: string
  imageAlt: string
}

export interface Sector {
  id: string
  name: string
  context: string
  projects: string[]
  expertise: string
  why: string
  image: string
}

export interface NavItem {
  label: string
  href: string
}
