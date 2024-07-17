import { create } from 'zustand'
import { IFeatureCreator, leitenFeature, leitenRequest } from 'leiten-zustand'
import { CartApi } from '../../../../../requests/cart'

interface IState {
  orders: CartApi.IOrder[]
  quantityOrders: number
}

export const [useCartFeature, CartProvider] = leitenFeature(
  ({ mount }: IFeatureCreator<null>) => {
    const useStore = create<IState>(() => ({
      orders: [],
      quantityOrders: 0
    }))

    const useRequest = leitenRequest(
      useStore,
      'orders',
      async (_: void) => {
        return await CartApi.get()
      },
      {
        fulfilled: ({ result }) => {
          useStore.setState({ quantityOrders: result?.length || 0 })
        }
      }
    )

    mount(useRequest.action)

    return {
      useStore,
      useRequest
    }
  }
)
