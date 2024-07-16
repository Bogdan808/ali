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
  interface IPostResponse extends IProduct {}
  interface IGetResponse extends IProduct {}
  export const get = async (): Promise<IGetResponse[]> => {
    return webFetch<IGetResponse[]>(link, {
      method: 'GET'
    })
  }
  export const post = async (data: IPostResponse): Promise<IProduct> => {
    return webFetch<IProduct>(link, {
      method: 'POST',
      data,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
}
