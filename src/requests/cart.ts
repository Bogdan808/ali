import webFetch from '../api/fetching/webFetch'
import { baseFetchUrl } from '../core/conts'

export namespace CartApi {
  const link = `${baseFetchUrl}/cart`
  export interface IOrder {
    id: string
    productId: number
    quantity: number
  }

  export const get = async () => {
    return webFetch<IOrder[]>(link, {
      method: 'GET'
    })
  }
  export const post = async (order: Omit<IOrder, 'id'>) => {
    return webFetch<IOrder>(link, {
      method: 'POST',
      data: JSON.stringify(order)
    })
  }
  export const patch = async (order: IOrder) => {
    return webFetch<IOrder>(`${link}/${order.id}`, {
      method: 'PATCH',
      data: JSON.stringify(order)
    })
  }
  export const remove = async (id: string) => {
    return webFetch<IOrder>(`${link}/${id}`, {
      method: 'DELETE'
    })
  }
}
