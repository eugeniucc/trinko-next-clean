'use client'

import dynamic from 'next/dynamic'
import { CustomLoading } from '@/components/custom/CustomLoading'

const Map = dynamic(() => import('@/components/custom/MapLibre'), { ssr: false, loading: () => <CustomLoading /> })

export const LocationSection = () => {
  return (
    <div>
      <p>LocationSection</p>
      <Map />
    </div>
  )
}
