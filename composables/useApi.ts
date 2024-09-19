export const useApi: typeof useFetch = (request, opts?) => {
    const config = useRuntimeConfig()

    return useFetch(config.public.apiBaseUrl+request, { query: { apikey: config.public.apiKey }, ...opts } )
  }