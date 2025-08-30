import Image from 'next/image'
import { cn } from '@/lib/utils'
import { Container } from './Container'

type Props = {
  className?: string
}

export const CustomLoading = ({ className }: Props) => {
  return (
    <Container className={cn('flex h-full min-h-[50dvh] w-full items-center justify-center bg-transparent', className || '')}>
      <Image className="animate-spin" src="/logo/logo.png" alt="тату салон в Кишиневе OblivionTattoo" width={64} height={91} />
    </Container>
  )
}
