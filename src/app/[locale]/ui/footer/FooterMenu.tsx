import Image from 'next/image'
import { Container } from '@/components/custom/Container'

export default function FooterMenu() {
  const date = new Date().getFullYear()

  return (
    <footer className="bg-zinc-900 py-10">
      <Container className="grid grid-cols-1 items-center justify-center gap-6 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3">
        <Image src="/logo/icon.png" alt="Тату салон в Кишиневе TrinkoTattoo" width={64} height={64} />
        <p className="text-left text-white sm:text-right lg:text-center">© {date} TrinkoTattoo</p>
        <a className="w-fit text-white transition-colors hover:text-red-500 lg:ml-auto lg:text-right" href="/terms-en.pdf">
          Terms and conditions
        </a>
      </Container>
    </footer>
  )
}
