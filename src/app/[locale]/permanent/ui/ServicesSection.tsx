import { Container } from '@/components/custom/Container'
import { CustomSectionAria } from '@/components/custom/CustomSectionAria'
import { ProductCard } from './ProductCard'

const list = [
  'Естественный эффект напыления без четких линий',
  'Визуальное увеличение густоты бровей',
  'Коррекция формы и асимметрии',
  'Долговременный результат 1.5-3 года',
  'Подходит для всех типов кожи'
]

export const ServicesSection = () => {
  return (
    <CustomSectionAria className="bg-zinc-900 pb-20" aria="Наши услуги перманентного макияжа">
      <Container>
        <div className="flex flex-col gap-20">
          <h3 className="bg-gradient-to-r from-white to-zinc-300 bg-clip-text text-center text-2xl font-bold text-transparent">
            Наши услуги перманентного макияжа
          </h3>
          <div className="grid grid-cols-1 gap-15 lg:grid-cols-2 xl:grid-cols-3">
            <ProductCard
              badge="Брови"
              title="Пудровые брови"
              text=" Создание эффекта легкой тени для идеальной формы и густоты. Естественный результат, который выглядит как профессионально выполненный
              макияж каждый день."
              description="Преимущества профессионального перманентного макияжа:"
              list={list}
            />
            <ProductCard
              badge="Брови"
              title="Пудровые брови"
              text=" Создание эффекта легкой тени для идеальной формы и густоты. Естественный результат, который выглядит как профессионально выполненный
              макияж каждый день."
              description="Преимущества профессионального перманентного макияжа:"
              list={list}
            />
            <ProductCard
              badge="Брови"
              title="Пудровые брови"
              text=" Создание эффекта легкой тени для идеальной формы и густоты. Естественный результат, который выглядит как профессионально выполненный
              макияж каждый день."
              description="Преимущества профессионального перманентного макияжа:"
              list={list}
            />
          </div>
        </div>
      </Container>
    </CustomSectionAria>
  )
}
