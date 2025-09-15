import { PermanentPagePhotoResponse } from '../types/permanentpage-photo.types'

export const getPermanentPagePhoto = async () => {
  const res = (await fetch(`${process.env.NEXT_PUBLIC_DOMAIN_URL}/api/permanentpage-photo`)).json()
  return res as Promise<PermanentPagePhotoResponse>
}
