import type { HomePageSketchesResponse } from '../types/homepage-sketches.types'

export const getHomePageSketches = async (): Promise<HomePageSketchesResponse[]> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN_URL}/api/homepage-sketches`)
  return res.json()
}
