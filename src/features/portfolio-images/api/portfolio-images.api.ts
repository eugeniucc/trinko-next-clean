import { buildSearchParams } from '@/features/helpers/buildSearchParams'
import { PortfolioImagesResponse } from '../types/portfolio-images.types'

type Props = {
  page: number
  limit?: number
}

export const getPortfolioImages = async ({ page, limit }: Props): Promise<PortfolioImagesResponse> => {
  const queryString = buildSearchParams({ page, limit })

  const res = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN_URL}/api/portfolio${queryString}`)

  return res.json()
}
