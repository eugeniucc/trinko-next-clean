import parse from 'html-react-parser'
import Script from 'next/script'
import { Container } from '@/components/custom/Container'
import { CustomSectionAria } from '@/components/custom/CustomSectionAria'
import { getBlogSinglePost } from '@/features/blog/api/blog.api'
import { buildBlogPostJsonLd } from '../seo/buildBlogPostJsonLd'

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  const post = await getBlogSinglePost(slug)

  const jsonLd = buildBlogPostJsonLd(post, 'ru')

  return (
    <main className="flex flex-col">
      <CustomSectionAria aria="Блог Oblivion Tattoo" className="flex min-h-screen items-center justify-center bg-zinc-900 pt-30">
        <Container className="text-white [&>article]:text-white [&>article>a]:text-red-500 [&>article>a]:underline [&>article>a]:transition-colors [&>article>a]:hover:text-red-500 [&>article>blockquote]:mb-6 [&>article>blockquote]:rounded-r [&>article>blockquote]:border-l-4 [&>article>blockquote]:border-red-500 [&>article>blockquote]:bg-zinc-800/50 [&>article>blockquote]:py-2 [&>article>blockquote]:pl-6 [&>article>blockquote]:text-white [&>article>blockquote]:italic [&>article>code]:rounded [&>article>code]:bg-zinc-800 [&>article>code]:px-2 [&>article>code]:py-1 [&>article>code]:text-sm [&>article>code]:text-red-500 [&>article>em]:text-red-500 [&>article>em]:italic [&>article>h1]:mb-6 [&>article>h1]:text-3xl [&>article>h1]:leading-tight [&>article>h1]:font-bold [&>article>h1]:text-white [&>article>h1]:md:text-4xl [&>article>h2]:mt-8 [&>article>h2]:mb-4 [&>article>h2]:border-b [&>article>h2]:border-red-500/30 [&>article>h2]:pb-2 [&>article>h2]:text-2xl [&>article>h2]:font-semibold [&>article>h2]:text-red-500 [&>article>h2]:md:text-3xl [&>article>h3]:mt-6 [&>article>h3]:mb-3 [&>article>h3]:text-xl [&>article>h3]:font-medium [&>article>h3]:text-red-500 [&>article>h3]:md:text-2xl [&>article>h4]:mt-4 [&>article>h4]:mb-2 [&>article>h4]:text-lg [&>article>h4]:font-medium [&>article>h4]:text-red-500 [&>article>h4]:md:text-xl [&>article>hr]:my-8 [&>article>hr]:border-zinc-700 [&>article>img]:mb-6 [&>article>img]:h-auto [&>article>img]:max-w-full [&>article>img]:rounded-lg [&>article>img]:shadow-lg [&>article>li]:text-base [&>article>li]:leading-relaxed [&>article>li]:text-white [&>article>li]:md:text-lg [&>article>ol]:mb-6 [&>article>ol]:list-decimal [&>article>ol]:space-y-2 [&>article>ol]:pl-6 [&>article>ol]:text-white [&>article>p]:mb-4 [&>article>p]:text-base [&>article>p]:leading-relaxed [&>article>p]:text-white [&>article>p]:md:text-lg [&>article>pre]:mb-6 [&>article>pre]:overflow-x-auto [&>article>pre]:rounded-lg [&>article>pre]:bg-zinc-800 [&>article>pre]:p-4 [&>article>pre]:text-white [&>article>strong]:font-semibold [&>article>strong]:text-red-500 [&>article>ul]:mb-6 [&>article>ul]:list-disc [&>article>ul]:space-y-2 [&>article>ul]:pl-6 [&>article>ul]:text-white">
          {parse(post.content)}
        </Container>
      </CustomSectionAria>
      {jsonLd && (
        <Script
          id="article-jsonld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
    </main>
  )
}
