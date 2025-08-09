import { buildSearchParams } from '@/features/helpers/buildSearchParams'
import { PortfolioImagesResponse } from '../types/portfolio-images.types'

type Props = {
  page: number
  limit?: string
}

export const getPortfolioImages = async ({ page, limit }: Props): Promise<PortfolioImagesResponse[]> => {
  const queryString = buildSearchParams({ page, limit })

  const res = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN_URL}/api/portfolio${queryString}`)
  if (!res.ok) throw new Error('Failed to fetch portfolio images')

  return res.json()
}
