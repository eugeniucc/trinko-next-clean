import Image from 'next/image'
import { Container } from '@/components/custom/Container'
import { CustomSectionAria } from '@/components/custom/CustomSectionAria'
import { getHomePageSlider } from '@/features/home-page-slider/api/homepage-slider.api'

export default async function SketchesSection() {
  const homepageSlider = await getHomePageSlider()

  return (
    <CustomSectionAria aria="sketches-section-title">
      <Container>
        {homepageSlider &&
          homepageSlider.map((item) => (
            <div key={item.id}>
              <Image className="h-auto w-auto" width={200} height={200} src={item.url} alt={item.alt} />
            </div>
          ))}
        <p>test</p>
      </Container>
    </CustomSectionAria>
  )
}
