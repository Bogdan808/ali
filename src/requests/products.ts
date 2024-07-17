import webFetch from '../api/fetching/webFetch'
import { baseFetchUrl } from '../core/conts'

export namespace ProductsApi {
  const link = `${baseFetchUrl}/products`
  export interface IProduct {
    id: number
    name: string
    image: string
    rating: number
    reviews: number
    originalPrice: number
    discountedPrice: number
    discountPercentage: number
    deliveryTime: number
    deliveryType: 1 | 2
  }

  export const get = async () => {
    return webFetch<IProduct[]>(link, {
      method: 'GET'
    })
  }

  export const getProductById = async (id: string) => {
    return webFetch<IProduct>(`${link}/${id}`, {
      method: 'GET'
    })
  }
}
