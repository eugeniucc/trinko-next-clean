// import { getTranslations } from 'next-intl/server'
import { Container } from '@/components/custom/Container'
import { CustomSectionAria } from '@/components/custom/CustomSectionAria'

// import { getPortfolioImages } from '@/features/portfolio-images/api/portfolio-images.api'

export const PortfolioSection = async () => {
  // const portfolioImages = await getPortfolioImages({ page: 1 })

  // const t = await getTranslations('homePage.portfolioSection')

  return (
    <Container className="py-20">
      <CustomSectionAria aria={'Portfolio'} className="flex flex-col gap-10">
        <h2 className="text-center text-4xl md:text-6xl">Портфолио работ мастеров Trinkotattoo — тату в Кишиневе</h2>
        <p className="mx-auto my-12 max-w-3xl text-center">
          Здесь вы можете увидеть реальные работы наших мастеров. Татуировки, пирсинг, перекрытия и эскизы — всё выполнено с вниманием к деталям и в
          стерильных условиях. Мы гордимся качеством каждой работы.
        </p>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
          {/* {portfolioImages.map((image) => (
            <p key={image.id}>{image.url}</p>
          ))} */}
        </div>
      </CustomSectionAria>
    </Container>
  )
}
