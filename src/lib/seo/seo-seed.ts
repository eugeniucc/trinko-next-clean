import type { Metadata } from 'next'
import { BASE_URL } from '../config'

export const baseMetadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  applicationName: 'Oblivion Tattoo',
  robots: {
    index: true,
    follow: true
  }
}
