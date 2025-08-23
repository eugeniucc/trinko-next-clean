import { Clock, Facebook, Instagram, MapPin, MessageCircleHeart, MessageCircleMore, Phone, Send } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { Container } from '@/components/custom/Container'
import { CustomSectionAria } from '@/components/custom/CustomSectionAria'
import { FramerMotionContainer } from '@/components/custom/FramerMotionContainer'

export const ContactsSection = () => {
  const t = useTranslations('homePage.contactsSection')

  return (
    <CustomSectionAria className="bg-zinc-900 pb-20" aria={t('ariaLabel')}>
      <Container className="flex flex-col items-center gap-20">
        <FramerMotionContainer className="flex flex-col gap-10" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} duration={0.5}>
          <h2 className="xl:3xl text-center text-2xl break-words text-white 2xl:text-5xl">{t('title')}</h2>
          <p className="mx-auto max-w-2xl text-center text-white">{t('text')}</p>
        </FramerMotionContainer>

        <FramerMotionContainer className="flex flex-col gap-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} duration={0.5}>
          <div className="bg-zinc-900">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="mt-1 h-6 w-6 flex-shrink-0 text-red-600" />
                  <div>
                    <p className="mb-2 text-xl font-semibold text-white">{t('location.title')}</p>
                    <p className="text-lg text-white">{t('location.address')}</p>
                    <p className="mt-1 text-sm text-zinc-400">{t('location.text')}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="mt-1 h-6 w-6 flex-shrink-0 text-red-600" />
                  <div>
                    <p className="mb-2 text-xl font-semibold text-white">{t('workingHours.title')}</p>
                    <p className="text-lg text-white">{t('workingHours.time')} 10:00 - 20:30</p>
                    <p className="mt-1 text-sm text-zinc-400">{t('workingHours.text')}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="mt-1 h-6 w-6 flex-shrink-0 text-red-600" />
                  <div>
                    <p className="mb-2 text-xl font-semibold text-white">{t('contacts.title')}</p>
                    <a href="tel:+37379146506" className="text-white">
                      <p className="text-lg text-white duration-200 hover:text-red-500">+373 79 146 506</p>
                    </a>
                    <p className="mt-1 text-sm text-zinc-400">{t('contacts.text')}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-zinc-700 pt-6">
              <p className="mb-4 text-xl font-semibold text-white">{t('social')}</p>

              <div className="flex flex-col flex-wrap gap-6 sm:flex-row">
                <a
                  href="https://www.instagram.com/trinko_tattoo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-fit items-center gap-4 rounded-full bg-zinc-700 px-4 py-2 text-white transition duration-200 hover:bg-red-600"
                >
                  <Instagram className="h-5 w-5" />
                  <span>Instagram</span>
                </a>
                <a
                  href="https://facebook.com/trinkotattoo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-fit items-center gap-4 rounded-full bg-zinc-700 px-4 py-2 text-white transition duration-200 hover:bg-red-600"
                >
                  <Facebook className="h-5 w-5" />

                  <span>Facebook</span>
                </a>
                <a
                  href="https://t.me/Trinkonfox"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-fit items-center gap-4 rounded-full bg-zinc-700 px-4 py-2 text-white transition duration-200 hover:bg-red-600"
                >
                  <Send className="h-5 w-5" />
                  <span>Telegram</span>
                </a>
                <a
                  href="https://wa.me/37360833389"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-fit items-center gap-4 rounded-full bg-zinc-700 px-4 py-2 text-white transition duration-200 hover:bg-red-600"
                >
                  <MessageCircleMore className="h-5 w-5" />
                  <span>WhatsApp</span>
                </a>
                <a
                  href="viber://chat?number=%2B37360833389"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-fit items-center gap-4 rounded-full bg-zinc-700 px-4 py-2 text-white transition duration-200 hover:bg-red-600"
                >
                  <MessageCircleHeart className="h-5 w-5" />
                  <span>Viber</span>
                </a>
              </div>
            </div>
          </div>
        </FramerMotionContainer>
      </Container>
    </CustomSectionAria>
  )
}
