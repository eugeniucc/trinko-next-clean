'use client'

import Image from 'next/image'
import { useHomepageSlider } from '@/features/HomePageSlider/model/useHomepageSlider'

export const SketchesSection = () => {
  const { homepageSlider, homepageSliderLoading } = useHomepageSlider()

  if (homepageSliderLoading) return <p>Загрузка...</p>
  if (!homepageSlider) return <p>Нет данных</p>

  return (
    <div>
      {homepageSlider.data.map((item) => (
        <div key={item.id}>
          <Image width={200} height={200} src={item.url} alt={item.alt} />
        </div>
      ))}
    </div>
  )
}
