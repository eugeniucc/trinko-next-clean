import { TrendingUp } from 'lucide-react'

type Props = {
  title: string
  arrow?: string
  price: string
}

export const ProductCard = ({ ...props }: Props) => {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-4 shadow-lg transition-all hover:shadow-xl dark:border-gray-700 dark:bg-gray-800">
      <div className="absolute top-4 right-4 h-12 w-12 rounded-full bg-indigo-100 opacity-20 group-hover:opacity-30"></div>
      <div className="relative z-10 flex h-full flex-col items-center justify-between gap-4 text-center sm:items-start sm:text-left">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Чёрно-белая татуировка</h3>

        {props.arrow && (
          <div className="flex items-center justify-between gap-2">
            <TrendingUp className="h-5 w-5 text-red-500" />
            <span className="text-gray-600 dark:text-gray-300">5 – 10 см</span>
          </div>
        )}

        <div className="flex w-full flex-col items-center gap-4 sm:items-start lg:flex-row lg:justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">400 – 1300 лей</span>
          <a
            className="w-fit rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-red-700 focus:outline-none dark:bg-red-500 dark:hover:bg-red-600"
            href="#"
          >
            Записаться
          </a>
        </div>
      </div>
    </div>
  )
}
