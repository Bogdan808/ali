import { create } from 'zustand'
import { IFeatureCreator, leitenFeature, leitenRequest } from 'leiten-zustand'
import { ProductsApi } from '../../../requests/products'

interface IState {
  products: ProductsApi.IProduct[] | null
}

export const [useProductListFeature, ProductListProvider] = leitenFeature(
  ({ mount }: IFeatureCreator<null>) => {
    const useStore = create<IState>(() => ({
      products: null
    }))

    const useRequest = leitenRequest(useStore, 'products', async (_: void) => {
      return await ProductsApi.get()
    })

    mount(useRequest.action)

    return {
      useStore,
      useRequest
    }
  }
)
