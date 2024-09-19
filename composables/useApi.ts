export const useMyFetch: typeof useFetch = (request, opts?) => {
    const config = useRuntimeConfig()

    return useFetch(config.public.apiBaseUrl+request, { query: { apikey: config.apiKey }, ...opts } )
  }