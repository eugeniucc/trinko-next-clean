type Props = {
  text: string
}
export const CustomLinkAppointment = ({ text }: Props) => {
  return (
    <a
      href="https://t.me/Trinkonfox"
      target="_blank"
      rel="noopener noreferrer"
      className="w-fit rounded-md bg-white px-6 py-4 font-bold text-black transition-colors duration-200 hover:text-red-500"
    >
      {text}
    </a>
  )
}
