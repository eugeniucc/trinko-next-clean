import parse from 'html-react-parser'
import { notFound } from 'next/navigation'
import { getBlogPostBySlug } from '@/lib/blog/blog.service'

type Props = {
  params: Promise<{ slug: string }>
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params

  const post = await getBlogPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="flex flex-col">
      {post && (
        <section className="flex min-h-screen items-center justify-center bg-zinc-900 pt-30">
          <div className="container text-white [&>article]:mx-auto [&>article]:max-w-none [&>article]:px-0 [&>article_h1]:mb-6 [&>article_h1]:text-3xl [&>article_h1]:font-bold [&>article_h1]:tracking-tight [&>article_h1]:text-white [&>article_h1]:md:text-4xl [&>article_h2]:mt-8 [&>article_h2]:mb-4 [&>article_h2]:border-b [&>article_h2]:border-gray-700 [&>article_h2]:pb-2 [&>article_h2]:text-2xl [&>article_h2]:font-bold [&>article_h2]:text-white [&>article_h2]:md:text-3xl [&>article_h3]:mt-6 [&>article_h3]:mb-3 [&>article_h3]:text-xl [&>article_h3]:font-semibold [&>article_h3]:text-gray-200 [&>article_h3]:md:text-2xl [&>article_li]:pl-1 [&>article_li]:leading-relaxed [&>article_li]:text-gray-300 [&>article_li>strong]:text-white [&>article_ol]:mb-4 [&>article_ol]:list-decimal [&>article_ol]:space-y-2 [&>article_ol]:pl-5 [&>article_p]:mb-4 [&>article_p]:text-base [&>article_p]:leading-relaxed [&>article_p]:text-gray-300 [&>article_p]:md:text-lg [&>article_section]:mb-8 [&>article_strong]:font-bold [&>article_strong]:text-white [&>article_ul]:mb-4 [&>article_ul]:list-disc [&>article_ul]:space-y-2 [&>article_ul]:pl-5 [&>article>div]:mb-8 [&>article>div:last-child]:mt-10 [&>article>div:last-child]:border-t [&>article>div:last-child]:border-gray-800 [&>article>div:last-child]:pt-6 [&>article>div>p]:text-lg [&>article>div>p]:text-gray-300 [&>article>div>p]:italic [&>article>div>p]:md:text-xl">
            {parse(post.content)}
          </div>
        </section>
      )}
    </main>
  )
}
