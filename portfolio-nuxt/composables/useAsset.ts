export const useAsset = (path: string): string => {
  const config = useRuntimeConfig()
  const baseURL = config.app.baseURL || '/'
  
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  
  // Ensure baseURL ends with /
  const cleanBase = baseURL.endsWith('/') ? baseURL : `${baseURL}/`
  
  return `${cleanBase}${cleanPath}`
}
