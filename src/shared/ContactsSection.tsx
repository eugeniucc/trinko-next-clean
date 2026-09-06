import { Camera, Clock, MapPin, MessageCircleHeart, MessageCircleMore, Phone, Send, UsersRound } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { CONTACT_FACEBOOK, CONTACT_INSTAGRAM, CONTACT_PHONE, CONTACT_TELEGRAM, CONTACT_VIBER, CONTACT_WHATSAPP } from '@/lib/contactLinks'
import { FramerMotionContainer } from '@/shared/FramerMotionContainer'

export const ContactsSection = () => {
  const t = useTranslations('homePage.contactsSection')

  return (
    <section className="bg-zinc-900 pb-20">
      <div className="container flex flex-col items-center gap-20">
        <FramerMotionContainer className="flex flex-col gap-10">
          <h2 className="xl:3xl text-center text-2xl wrap-break-word text-white 2xl:text-5xl">{t('title')}</h2>
          <p className="mx-auto max-w-2xl text-center text-white">{t('text')}</p>
        </FramerMotionContainer>

        <FramerMotionContainer className="flex flex-col gap-4">
          <div className="bg-zinc-900">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="mt-1 h-6 w-6 shrink-0 text-red-600" />
                  <div>
                    <p className="mb-2 text-xl font-semibold text-white">{t('location.title')}</p>
                    <p className="text-lg text-white">{t('location.address')}</p>
                    <p className="mt-1 text-sm text-zinc-400">{t('location.text')}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="mt-1 h-6 w-6 shrink-0 text-red-600" />
                  <div>
                    <p className="mb-2 text-xl font-semibold text-white">{t('workingHours.title')}</p>
                    <p className="text-lg text-white">{t('workingHours.time')} 10:00 - 20:30</p>
                    <p className="mt-1 text-sm text-zinc-400">{t('workingHours.text')}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="mt-1 h-6 w-6 shrink-0 text-red-600" />
                  <div>
                    <p className="mb-2 text-xl font-semibold text-white">{t('contacts.title')}</p>
                    <a href={CONTACT_PHONE} data-gtm="phone" className="inline-block text-white">
                      <span className="block text-lg text-white duration-200 hover:text-red-500">+373 79 146 506</span>
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
                  href={CONTACT_INSTAGRAM}
                  data-gtm="instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-fit items-center gap-4 rounded-full bg-zinc-700 px-4 py-2 text-white transition duration-200 hover:bg-red-600"
                >
                  <Camera className="size-5 shrink-0" />
                  <span>Instagram</span>
                </a>
                <a
                  href={CONTACT_FACEBOOK}
                  data-gtm="facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-fit items-center gap-4 rounded-full bg-zinc-700 px-4 py-2 text-white transition duration-200 hover:bg-red-600"
                >
                  <UsersRound className="size-5 shrink-0" />

                  <span>Facebook</span>
                </a>
                <a
                  href={CONTACT_TELEGRAM}
                  data-gtm="telegram"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-fit items-center gap-4 rounded-full bg-zinc-700 px-4 py-2 text-white transition duration-200 hover:bg-red-600"
                >
                  <Send className="size-5 shrink-0" />
                  <span>Telegram</span>
                </a>
                <a
                  href={CONTACT_WHATSAPP}
                  data-gtm="whatsapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-fit items-center gap-4 rounded-full bg-zinc-700 px-4 py-2 text-white transition duration-200 hover:bg-red-600"
                >
                  <MessageCircleMore className="size-5 shrink-0" />
                  <span>WhatsApp</span>
                </a>
                <a
                  href={CONTACT_VIBER}
                  data-gtm="viber"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-fit items-center gap-4 rounded-full bg-zinc-700 px-4 py-2 text-white transition duration-200 hover:bg-red-600 md:hidden"
                >
                  <MessageCircleHeart className="size-5 shrink-0" />
                  <span>Viber</span>
                </a>
              </div>
            </div>
          </div>
        </FramerMotionContainer>
      </div>
    </section>
  )
}
