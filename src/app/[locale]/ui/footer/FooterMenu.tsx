import { useTranslations } from 'next-intl'
import Image from 'next/image'

export default function FooterMenu() {
  const date = new Date().getFullYear()

  const t = useTranslations('homePage.footer')

  return (
    <footer className="bg-zinc-900 py-10">
      <div className="container grid grid-cols-1 items-center justify-center gap-6 sm:gap-10 lg:grid-cols-3">
        <Image src="/logo.svg" alt="Тату салон в Кишиневе Oblivion Tattoo" width={64} height={91} unoptimized />
        <p className="= text-left text-white lg:text-center">© {date} Oblivion Tattoo</p>
        <a className="w-fit text-white transition-colors hover:text-red-500 lg:ml-auto lg:text-right" href="/terms-en.pdf">
          {t('terms')}
        </a>
      </div>
    </footer>
  )
}
