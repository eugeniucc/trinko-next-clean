'use client'

import { useTranslations } from 'next-intl'
import dynamic from 'next/dynamic'
import { cn } from '@/lib/utils'
import { FramerMotionContainer } from '@/shared/FramerMotionContainer'
import { Skeleton } from '@/components/ui/skeleton'

const Map = dynamic(() => import('./MapLibre'), {
  loading: () => <Skeleton className="h-100 w-full rounded-none bg-zinc-800" aria-label="Loading map" />,
  ssr: false
})

interface Props {
  className?: string
}

export const LocationSection = ({ className }: Props) => {
  const t = useTranslations('homePage.locationSection')

  return (
    <section className={cn('pt-20', className)}>
      <div className="container">
        <FramerMotionContainer className="flex flex-col gap-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} duration={0.5}>
          <h2 className="text-center text-4xl">{t('title')}</h2>
          <div className="mx-auto mb-12 flex max-w-3xl flex-col gap-4 text-center">
            <p>{t('text')}</p>
            <p className="text-xl font-bold">{t('appointment')}</p>
            <p>{t('description')}</p>
          </div>
        </FramerMotionContainer>
      </div>

      <div className="relative min-h-100 bg-zinc-800">
        <Map />
      </div>
    </section>
  )
}
