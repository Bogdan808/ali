import { create } from 'zustand'
import {
  IFeatureCreator,
  leitenFeature,
  leitenPrimitive,
  leitenRequest
} from 'leiten-zustand'
import { ProductsApi } from '../../../requests/products'
import { CartApi } from '../../../requests/cart'

interface IState {
  product: ProductsApi.IProduct | null
  quantity: number
  cart: ProductsApi.IProduct[] | null
  orderRequest: null
}

export const [useProductFeature, ProductProvider] = leitenFeature(
  ({
    useProps,
    mount
  }: IFeatureCreator<{ id?: string; onSuccessOrder?: () => void }>) => {
    const useStore = create<IState>(() => ({
      product: null,
      cart: null,
      quantity: 1,
      orderRequest: null
    }))

    const useQuantityController = leitenPrimitive(useStore, 'quantity')

    const incrementAction = () =>
      useQuantityController.set(useStore.getState().quantity + 1)
    const decrementAction = () =>
      useQuantityController.set(
        useStore.getState().quantity > 1 ? useStore.getState().quantity - 1 : 1
      )

    const useRequest = leitenRequest(useStore, 'product', async (_: void) => {
      const id = useProps.getState().id
      if (id) {
        return await ProductsApi.getProductById(id)
      }
      return null
    })

    const useAddOrderRequest = leitenRequest(
      useStore,
      'orderRequest',
      async (_: void) => {
        const id = useProps.getState().id
        if (id) {
          const orders = (await CartApi.get()) || []
          const order = orders.find((order) => String(order?.productId) === id)

          if (!order) {
            await CartApi.post({
              productId: parseInt(id),
              quantity: useStore.getState().quantity
            })
          } else {
            await CartApi.patch({
              ...order,
              quantity: order.quantity + useStore.getState().quantity
            })
          }
        }
        return null
      },
      {
        fulfilled: () => {
          // useProps.getState()?.onSuccessOrder()
          useQuantityController.set(1)
        },
        rejected: ({ error, payload }) => {
          console.log('payload, error', payload, error)
        }
      }
    )

    mount(useRequest.action)

    return {
      useStore,
      useRequest,
      useProps,
      useQuantityController,
      incrementAction,
      decrementAction,
      useAddOrderRequest
    }
  }
)
