import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { CustomLinkAppointment } from '@/app/ui/CustomLinkAppointment'

type Props = {
  imageSrc: string
  imageAlt: string
  priority: boolean
  title: string
  text: string
  description: string
  button: string
}

export const HeroSlide = ({ ...props }: Props) => {
  const t = useTranslations('homePage.heroSection.cards')

  return (
    <div className="relative min-h-screen w-full">
      <Image
        src={props.imageSrc}
        alt={props.imageAlt}
        fill
        unoptimized
        priority={props.priority}
        className="absolute inset-0 -z-10 h-full w-full object-cover grayscale"
        sizes="100vw"
      />
      <div className="pointer-events-none absolute inset-0 z-10 bg-black/50" />
      <div className="relative z-20 container flex min-h-screen items-center justify-center">
        <div className="flex w-full flex-col gap-6 text-white">
          <p className="text-3xl font-bold md:text-5xl">{t(`${props.title}.title`)}</p>
          <p className="text-2xl font-bold lg:text-8xl">{t(`${props.text}.text`)}</p>
          <p className="max-w-3xl text-lg">{t(`${props.description}.description`)}</p>
          <CustomLinkAppointment text={t(`${props.button}.button`)} />
        </div>
      </div>
    </div>
  )
}
