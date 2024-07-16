import { create } from 'zustand'
import {
  IFeatureCreator,
  leitenFeature,
  leitenPrimitive,
  leitenRequest
} from 'leiten-zustand'
import { ProductsApi } from '../../../requests/products'

interface IState {
  product: ProductsApi.IProduct | null
  quantity: number
  cart: ProductsApi.IProduct[] | null
}

export const [useProductFeature, ProductProvider] = leitenFeature(
  ({ useProps, mount }: IFeatureCreator<{ id?: number }>) => {
    const useStore = create<IState>(() => ({
      product: null,
      cart: null,
      quantity: 1
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

    mount(useRequest.action)

    return {
      useStore,
      useRequest,
      useProps,
      useQuantityController,
      incrementAction,
      decrementAction
    }
  }
)
