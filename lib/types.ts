export interface Service {
  id: string
  title: string
  value: string
  description: string
  items: string[]
  impact: string
  image: string
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

export interface CaseStudy {
  id: string
  title: string
  sector: string
  disciplines: string[]
  challenge: string
  solution: string
  outcome: string
  image: string
}

export interface NavItem {
  label: string
  href: string
}
