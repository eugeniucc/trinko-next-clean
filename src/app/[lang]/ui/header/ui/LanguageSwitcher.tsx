'use client'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Languages } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useTranslation } from 'react-i18next'

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="flex items-center gap-2">
          <p className="text-white">Languages</p>
          <Languages className="h-4 w-4 text-white" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <Button onClick={() => i18n.changeLanguage('en')} className="w-full" variant={'outline'}>
            EN
          </Button>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Button onClick={() => i18n.changeLanguage('ru')} className="w-full" variant={'outline'}>
            RU
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
