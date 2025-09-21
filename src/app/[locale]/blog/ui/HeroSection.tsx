'use client'

import { useQuery } from '@tanstack/react-query'
import { Container } from '@/components/custom/Container'
import { CustomSectionAria } from '@/components/custom/CustomSectionAria'
import { CustomSkeletonLoader } from '@/components/custom/CustomSkeletonLoader'
import { getBlogPosts } from '@/features/blog/api/blog.api'
import { BlogCard } from './BlogCard'

export const HeroSection = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['posts'],
    queryFn: () => getBlogPosts({ page: 1, limit: 9 })
  })

  return (
    <CustomSectionAria aria="Блог Oblivion Tattoo" className="relative flex min-h-screen items-center justify-center bg-zinc-900 pt-30">
      <Container className="flex flex-col gap-10">
        <div className="flex flex-col gap-6 text-white">
          <h1 className="text-center text-3xl font-bold break-all text-white sm:text-4xl">Наш Блог: Актуальные Статьи и Глубокий Анализ</h1>
          <p className="text-center text-xl break-all text-gray-200">
            Добро пожаловать в блог, где мы делимся экспертными знаниями, последними новостями и подробными руководствами по всем аспектам [тематика
            вашего сайта, например, веб-разработки, маркетинга, технологий]. Мы стремимся предоставлять ценный контент, который поможет вам расти и
            развиваться.
          </p>
          <h2 className="text-center">Последние Публикации, Которые Вы Не Должны Пропустить</h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {isLoading
            ? [...Array(6)].map((_, i) => <CustomSkeletonLoader className="h-[400px]" key={i} />)
            : data && data.items.map((post) => <BlogCard key={post.id} {...post} />)}
        </div>
        <div className="flex flex-col gap-6 text-white">
          <h3 className="text-lg font-bold">Почему Наш Блог Полезен Для Вас?</h3>
          <p>
            Мы предлагаем уникальный контент, написанный экспертами, чтобы предоставить вам актуальную и проверенную информацию. Наши статьи помогут
            вам [конкретные преимущества, например, улучшить навыки, принять обоснованные решения, быть в курсе трендов].
          </p>
        </div>
      </Container>
    </CustomSectionAria>
  )
}
