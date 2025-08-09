type PrimitiveValue = string | number | boolean | null | undefined

export function buildSearchParams(parameters: Record<string, PrimitiveValue | PrimitiveValue[]>): string {
  const searchParams = new URLSearchParams()

  for (const [parameterName, parameterValue] of Object.entries(parameters)) {
    if (parameterValue === undefined || parameterValue === null) continue

    if (Array.isArray(parameterValue)) {
      for (const arrayItem of parameterValue) {
        if (arrayItem === undefined || arrayItem === null) continue
        searchParams.append(parameterName, String(arrayItem))
      }
    } else {
      searchParams.set(parameterName, String(parameterValue))
    }
  }

  const searchString = searchParams.toString()
  return searchString ? `?${searchString}` : ''
}
