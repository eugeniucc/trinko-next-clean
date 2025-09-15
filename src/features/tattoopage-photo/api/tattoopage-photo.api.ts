import { TattooPagePhotoResponse } from '../types/tattoopage-photo.types'

export const revalidate = 86400

export const getTattooPagePhotos = async () => {
  const response = (await fetch(`${process.env.NEXT_PUBLIC_DOMAIN_URL}/api/tattoopage-photo`)).json()

  return response as Promise<TattooPagePhotoResponse>
}
