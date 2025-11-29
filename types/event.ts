export interface Product {
  id: string
  image: string
  title: string
  price: number
  link?: string
  isReserved: boolean
}

export interface PageSection {
  slug: string
  title: string
  price: string
  period: string
  features: string[]
  isPopular: boolean
  products: Product[]
}

export interface EventData {
  eventTitle: string
  pages: PageSection[]
}
