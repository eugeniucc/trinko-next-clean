export interface BlogPost {
  id: number
  title: string
  slug: string
  content: string
  createdAt: string
}

export interface BlogPostResponse {
  items: BlogPost[]
  total: number
  page: number
  totalPages: number
}
