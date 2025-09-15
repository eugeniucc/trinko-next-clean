import { MoveDown } from 'lucide-react'
import Image from 'next/image'
import { Container } from '@/components/custom/Container'
import { CustomSectionAria } from '@/components/custom/CustomSectionAria'
import { FramerMotionContainer } from '@/components/custom/FramerMotionContainer'

export const HeroSection = () => {
  return (
    <CustomSectionAria aria="HeroSection" className="relative flex min-h-screen items-center justify-center bg-zinc-900 py-30 2xl:py-0">
      <Container className="flex flex-col items-center gap-10">
        <FramerMotionContainer className="flex flex-col gap-10" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} duration={0.5}>
          <h1 className="text-center text-3xl font-bold break-all text-white sm:text-4xl">
            Профессиональный пирсинг в Кишиневе - Студия Oblivion Tattoo
          </h1>
          <p className="text-center text-xl break-all text-gray-200">
            Безопасные проколы, стерильные инструменты и качественные украшения. Более 8 лет опыта в сфере боди-модификаций. Индивидуальный подход к
            каждому клиенту в центре Кишинева.
          </p>
        </FramerMotionContainer>

        <FramerMotionContainer className="flex flex-col gap-10" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} duration={0.5}>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 xl:grid-cols-3">
            <Image
              src="/piercing.webp"
              alt="Профессиональный пирсинг в студии Oblivion Tattoo Кишинев"
              width={400}
              height={400}
              unoptimized
              priority
              className="col-span-1 h-full w-full rounded-lg"
            />
            <div className="flex flex-col justify-between gap-10 xl:col-span-2">
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-10">
                <div className="flex flex-col items-center gap-3">
                  <div className="inline-flex size-14 items-center justify-center rounded-full bg-red-500 p-6 text-3xl font-bold text-white">1</div>
                  <MoveDown className="size-10 shrink-0 text-red-500" strokeWidth={2} />
                </div>
                <div className="flex flex-col gap-6 text-white">
                  <h2 className="text-center text-lg font-bold sm:text-left">Все виды пирсинга - от классики до экстремальных проколов</h2>
                  <p className="text-center sm:text-left">
                    Пирсинг ушей, носа, языка, пупка, интимный пирсинг. Используем только титановые и хирургические украшения высшего качества.
                    Стерильные одноразовые иглы и профессиональное оборудование.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-10">
                <div className="flex flex-col items-center gap-3">
                  <div className="inline-flex size-14 items-center justify-center rounded-full bg-red-500 p-6 text-3xl font-bold text-white">2</div>
                  <MoveDown className="size-10 shrink-0 text-red-500" strokeWidth={2} />
                </div>
                <div className="flex flex-col gap-6 text-white">
                  <h2 className="text-center text-lg font-bold sm:text-left">Безопасность и стерильность - наш приоритет в Кишиневе</h2>
                  <p className="text-center sm:text-left">
                    Соблюдаем все санитарные нормы, используем автоклав для стерилизации инструментов. Подробная консультация по уходу за пирсингом.
                    Гарантия качества и безопасности процедуры.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-10">
                <div className="inline-flex size-14 items-center justify-center rounded-full bg-red-500 p-6 text-3xl font-bold text-white">3</div>
                <div className="flex flex-col gap-6 text-white">
                  <h2 className="text-center text-lg font-bold sm:text-left">Опытные мастера и premium украшения в центре Кишинева</h2>
                  <p className="text-center sm:text-left">
                    Сертифицированные пирсеры с многолетним опытом. Большой выбор украшений от ведущих мировых производителей. Индивидуальный подбор
                    украшений под анатомию клиента.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FramerMotionContainer>
      </Container>
    </CustomSectionAria>
  )
}
