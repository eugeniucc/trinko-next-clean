import { BASE_URL } from './config'

export type ApiError = {
  message: string
}

type ApiOptions = {
  method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'
  body?: unknown
  headers?: HeadersInit
}

async function request<T>(url: string, options: ApiOptions = {}): Promise<T> {
  const res = await fetch(`${BASE_URL}/${url}`, {
    method: options.method,
    body: options.body ? JSON.stringify(options.body) : undefined,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers
    }
  })

  let data: unknown = null

  try {
    data = await res.json()
  } catch {}

  if (!res.ok) {
    throw {
      message: typeof data === 'object' && data !== null && 'message' in data ? String((data as { message: unknown }).message) : 'Request failed'
    } satisfies ApiError
  }

  return data as T
}

export const apiClient = {
  get<T>(url: string) {
    return request<T>(url, { method: 'GET' })
  },

  post<T>(url: string, body?: unknown) {
    return request<T>(url, { method: 'POST', body })
  },

  put<T>(url: string, body?: unknown) {
    return request<T>(url, { method: 'PUT', body })
  },

  patch<T>(url: string, body?: unknown) {
    return request<T>(url, { method: 'PATCH', body })
  },

  delete<T>(url: string) {
    return request<T>(url, { method: 'DELETE' })
  }
}
