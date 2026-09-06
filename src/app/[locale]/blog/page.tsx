import { Suspense } from 'react'
import { routing } from '@/i18n/routing'
import { withSeo } from '@/lib/metadata'
import { BlogPosts } from './ui/BlogPosts'

export const generateMetadata = withSeo('metadata.blogPageMetadata', '/blog', [routing.defaultLocale])

export default async function BlogPage() {
  return (
    <main className="flex flex-col">
      <section className="relative flex min-h-screen items-center justify-center bg-zinc-900 pt-30">
        <div className="container flex flex-col gap-10">
          <div className="flex flex-col gap-6 text-white">
            <h1 className="text-center text-3xl font-bold break-all text-white sm:text-4xl">Наш Блог: Актуальные Статьи и Глубокий Анализ</h1>
            <p className="text-center text-xl break-all text-gray-200">
              Добро пожаловать в блог, где мы делимся экспертными знаниями, последними новостями и подробными руководствами по всем аспектам. Мы
              стремимся предоставлять ценный контент, который поможет вам расти и развиваться.
            </p>
            <h2 className="text-center">Последние Публикации, Которые Вы Не Должны Пропустить</h2>
          </div>

          <Suspense
            fallback={
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3" aria-hidden="true">
                {[...Array(6)].map((_, index) => (
                  <div className="h-100 animate-pulse rounded-md border border-zinc-700 bg-zinc-800" key={index} />
                ))}
              </div>
            }
          >
            <BlogPosts />
          </Suspense>

          <div className="flex flex-col gap-6 text-white">
            <h3 className="text-lg font-bold">Почему Наш Блог Полезен Для Вас?</h3>
            <p>
              Мы предлагаем уникальный контент, написанный экспертами, чтобы предоставить вам актуальную и проверенную информацию. Наши статьи помогут
              вам.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
