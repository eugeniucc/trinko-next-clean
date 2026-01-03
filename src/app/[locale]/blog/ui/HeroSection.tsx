import { GetBlogPostResult } from '@/lib/blog/blog.types'
import { BlogCard } from './BlogCard'

type Props = {
  initialData: GetBlogPostResult
}

export const HeroSection = ({ initialData }: Props) => {
  return (
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
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {initialData && initialData.items.map((post) => <BlogCard key={post.id} item={post} />)}
        </div>
        <div className="flex flex-col gap-6 text-white">
          <h3 className="text-lg font-bold">Почему Наш Блог Полезен Для Вас?</h3>
          <p>
            Мы предлагаем уникальный контент, написанный экспертами, чтобы предоставить вам актуальную и проверенную информацию. Наши статьи помогут
            вам.
          </p>
        </div>
      </div>
    </section>
  )
}
