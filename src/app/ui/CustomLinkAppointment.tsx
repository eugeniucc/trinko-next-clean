import { cn } from '@/lib/utils'

type Props = {
  text: string
  className?: string
}
export const CustomLinkAppointment = ({ ...props }: Props) => {
  return (
    <a
      href="https://t.me/TrinkoTattoo"
      target="_blank"
      rel="noopener noreferrer"
      className={cn('w-fit rounded-md bg-white px-6 py-4 font-bold text-black transition-colors duration-200 hover:text-red-500', props.className)}
    >
      {props.text}
    </a>
  )
}
