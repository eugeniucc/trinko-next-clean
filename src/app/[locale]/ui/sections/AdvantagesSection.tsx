import { getTranslations } from 'next-intl/server'
import { Container } from '@/components/custom/Container'
import { CustomSectionAria } from '@/components/custom/CustomSectionAria'

export default async function AdvantagesSection() {
  const t = await getTranslations('homePage.advantagesSection')

  return (
    <CustomSectionAria aria={'advantages-title'}>
      <Container className="grid grid-cols-1 gap-10 py-20 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col gap-6">
          <p className="text-4xl lg:text-6xl">{t('text')}</p>
          <h3 className="text-lg font-semibold">{t('title')}</h3>
          <p>{t('description')}</p>
          <div className="aspect-video overflow-hidden rounded-lg">
            <video
              src="https://weekgblszaodxieblpuz.supabase.co/storage/v1/object/public/homepage-videos/gotovaya-tatu-posle-seansa.mp4"
              muted
              loop
              autoPlay
              playsInline
              preload="metadata"
              title="gotovaya-tatu-posle-seansa"
              aria-label="gotovaya-tatu-posle-seansa"
              className="h-full w-full object-cover"
            />
          </div>
          <p className="max-w-2xl text-left text-lg font-semibold sm:text-right">{t('extra')}</p>
        </div>
        <div className="flex flex-col gap-6">
          <div className="aspect-video overflow-hidden rounded-lg">
            <video
              src="https://weekgblszaodxieblpuz.supabase.co/storage/v1/object/public/homepage-videos/process-nabivki-tatu-kishinev.mp4"
              muted
              loop
              autoPlay
              playsInline
              preload="metadata"
              title="process-nabivki-tatu-kishinev"
              aria-label="process-nabivki-tatu-kishinev"
              className="h-full w-full object-cover"
            />
          </div>
          <p>{t('more_text')}</p>
          <div className="aspect-video overflow-hidden rounded-lg">
            <video
              src="https://weekgblszaodxieblpuz.supabase.co/storage/v1/object/public/homepage-videos/seans-tatu-ot-nachala-do-konca.mp4"
              muted
              loop
              autoPlay
              playsInline
              preload="metadata"
              title="seans-tatu-ot-nachala-do-konca"
              aria-label="seans-tatu-ot-nachala-do-konca"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </Container>
    </CustomSectionAria>
  )
}
