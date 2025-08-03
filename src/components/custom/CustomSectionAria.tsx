import { ReactNode } from 'react'

type Props = {
  aria: string
  className?: string
  children?: ReactNode
}

export const CustomSectionAria = ({ ...props }: Props) => {
  return (
    <section className={props.className} aria-labelledby={props.aria}>
      {props.children}
    </section>
  )
}
