import { getTranslations } from 'next-intl/server'
import Image from 'next/image'
import Link from 'next/link'

export default async function NotFound() {
  const t = await getTranslations('notFound')

  return (
    <html>
      <body className="flex min-h-screen flex-col items-center justify-center bg-zinc-900 text-white">
        <div className="flex flex-col items-center justify-center gap-6">
          <div className="flex items-center justify-center gap-4">
            <p className="text-9xl font-bold text-white">4</p>
            <Image className="animate-spin [animation-duration:10s]" src="/logo/logo.png" alt="Логотип OblivionTattoo" width={120} height={120} />
            <p className="text-9xl font-bold text-white">4</p>
          </div>
          <h1 className="text-4xl font-bold">{t('title')}</h1>
          <p className="text-gray-400">{t('text')}</p>
          <Link href="/" className="text-white transition-colors hover:text-red-500">
            {t('button')}
          </Link>
        </div>
      </body>
    </html>
  )
}
