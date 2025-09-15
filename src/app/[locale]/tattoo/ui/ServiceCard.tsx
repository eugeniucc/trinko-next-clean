import { TrendingUp } from 'lucide-react'
import { CustomLinkAppointment } from '@/components/custom/CustomLinkAppointment'

type Props = {
  title: string
  text?: string
  size?: string
  price: string
  button: string
}

export const ServiceCard = (props: Props) => {
  return (
    <div className="flex flex-col justify-between gap-4 rounded-xl border border-gray-200 bg-white p-4">
      <div className="flex h-full flex-col justify-between gap-4">
        <h3 className="text-2xl font-bold break-all text-gray-900 dark:text-white">{props.title}</h3>
        {props.size && (
          <div className="flex items-center gap-2">
            <TrendingUp className="size-5 shrink-0 text-red-500" />
            <span className="text-gray-600">{props.size}</span>
          </div>
        )}
        {props.text && <p className="text-gray-600">{props.text}</p>}
      </div>

      <div className="flex w-full flex-col gap-4">
        <span className="text-3xl font-bold text-gray-900 dark:text-white">{props.price}</span>
        <CustomLinkAppointment className="w-full bg-red-500 text-center text-white hover:text-white" text={props.button} />
      </div>
    </div>
  )
}
