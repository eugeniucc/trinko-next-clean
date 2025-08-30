import type { HomePageSketchesResponse } from '../types/homepage-sketches.types'

export const getHomePageSketches = async (): Promise<HomePageSketchesResponse[]> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN_URL}/api/homepage-sketches`)

  if (!res.ok) throw new Error('Failed to fetch homepage sketches')

  return res.json()
}
