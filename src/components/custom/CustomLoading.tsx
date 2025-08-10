import Image from 'next/image'
import { cn } from '@/lib/utils'
import { Container } from './Container'

type Props = {
  className?: string
}

export const CustomLoading = ({ className }: Props) => {
  return (
    <Container className={cn('flex h-full min-h-[50dvh] w-full items-center justify-center bg-transparent', className || '')}>
      <Image className="size-40 animate-spin" src="/logo/icon.png" alt="тату салон в Кишиневе TrinkoTattoo" width={160} height={160} />
    </Container>
  )
}
