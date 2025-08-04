import ky from 'ky'

export const apiClient = ky.create({
  prefixUrl: process.env.NEXT_PUBLIC_DOMAIN_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})
