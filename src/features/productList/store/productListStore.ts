import { create } from 'zustand'
import { IFeatureCreator, leitenFeature, leitenRequest } from 'leiten-zustand'
import { ProductsApi } from '../../../requests/products'

interface IState {
  data: ProductsApi.IProduct[] | null
}

export const [useProductListFeature, ProductListProvider] = leitenFeature(
  ({ mount }: IFeatureCreator<null>) => {
    const useStore = create<IState>(() => ({
      data: null
    }))

    const useRequest = leitenRequest(useStore, 'data', async (_: void) => {
      return await ProductsApi.get()
    })

    mount(useRequest.action)

    return {
      useStore,
      useRequest
    }
  }
)
