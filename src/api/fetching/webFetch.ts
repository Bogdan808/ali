import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

interface FetchOptions extends AxiosRequestConfig {}

const webFetch = async <T>(
  url: string,
  options: FetchOptions = {}
): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await axios.request<T>({
      url,
      ...options
    })

    return response.data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        throw new Error(`HTTP error! status: ${error.response.status}`)
      }
      throw new Error(`Fetch error: ${error.message}`)
    }
    throw new Error(`Unknown error: ${error}`)
  }
}

export default webFetch
