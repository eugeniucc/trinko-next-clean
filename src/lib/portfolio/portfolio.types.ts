export type PortfolioImage = {
  id: number
  title: string
  url: string
  alt: string
  createdAt: string
}

export type PortfolioImagesResponse = {
  items: PortfolioImage[]
  total: number
  page: number
  totalPages: number
}
