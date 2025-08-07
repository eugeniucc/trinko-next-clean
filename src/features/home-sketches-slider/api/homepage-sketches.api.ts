import { HomePageSketchesResponse } from '../types/homepage-sketches.types'

export const getHomePageSketches = async (): Promise<HomePageSketchesResponse[]> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN_URL}/api/homepage-sketches`)

  if (!response.ok) {
    throw new Error('Failed to fetch homepage sketches')
  }

  const data: HomePageSketchesResponse[] = await response.json()
  return data
}
