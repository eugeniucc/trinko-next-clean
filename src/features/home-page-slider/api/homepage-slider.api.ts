import { apiClient } from '@/lib/apiClient'
import { HomePageSliderResponse } from '../types/homepage-slider.types'

export const getHomePageSlider = async () => {
  return await apiClient.get<HomePageSliderResponse[]>('api/homepageslider').json()
}
