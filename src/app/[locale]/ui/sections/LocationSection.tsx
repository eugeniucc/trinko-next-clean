'use client'

import dynamic from 'next/dynamic'
import { useInView } from 'react-intersection-observer'
import { CustomLoading } from '@/components/custom/CustomLoading'

const Map = dynamic(() => import('@/components/custom/MapLibre'), {
  ssr: false,
  loading: () => <CustomLoading />
})

export const LocationSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, rootMargin: '200px' })

  return (
    <div ref={ref} className="min-h-[400px]">
      <p>LocationSection</p>
      {inView && <Map />}
    </div>
  )
}
