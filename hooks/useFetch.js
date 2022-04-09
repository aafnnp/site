import {useState, useEffect} from 'react'

export default function useFetch(request, init) {
  const [response, setResponse] = useState(null)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const abortController = new AbortController()
    setIsLoading(true)
    ;(async () => {
      try {
        const response = await fetch(request, {
          ...init,
          signal: abortController.signal
        })
        setResponse(await response?.json())
        setIsLoading(false)
      } catch (error) {
        if (error.name === 'AbortError') {
          return
        }
        setError(error)
        setIsLoading(false)
      }
    })()
    return () => {
      abortController.abort()
    }
  }, [init, request])

  return {response, error, isLoading}
}
