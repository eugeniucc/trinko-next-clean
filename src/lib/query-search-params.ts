export function querySearchParams(
  params: Record<string, string | number | boolean | undefined>
): string {
  const search = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined) {
      search.append(key, String(value));
    }
  });

  const query = search.toString();
  return query ? `?${query}` : "";
}
