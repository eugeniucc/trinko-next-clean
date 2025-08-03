import { useQuery } from '@tanstack/react-query'
import { getHomePageSlider } from '../api/homepage-slider.api'
import { HOMEPAGE_SLIDER_QUERY_KEY } from '../constants/homepage-slider.constants'

export const useHomepageSlider = () => {
  const { data: homepageSlider, isLoading: homepageSliderLoading } = useQuery({
    queryKey: [HOMEPAGE_SLIDER_QUERY_KEY],
    queryFn: getHomePageSlider
  })

  return {
    homepageSlider,
    homepageSliderLoading
  }
}
