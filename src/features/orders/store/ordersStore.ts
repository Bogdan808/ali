import { create } from 'zustand'
import { IFeatureCreator, leitenFeature, leitenRequest } from 'leiten-zustand'
import { CartApi } from '../../../requests/cart'
import { ProductsApi } from '../../../requests/products'

interface IState {
  orders: CartApi.IOrder[] | null
  total: number
  products: ProductsApi.IProduct[] | null
  removeRequest: CartApi.IOrder | null
}

export const [useOrdersFeature, OrdersProvider] = leitenFeature(
  ({ mount }: IFeatureCreator<null>) => {
    const useStore = create<IState>(() => ({
      orders: [],
      products: [],
      total: 0,
      removeRequest: null
    }))

    const useOrdersRequest = leitenRequest(
      useStore,
      'orders',
      async (_: void) => {
        return await CartApi.get()
      }
    )
    const useProductsRequest = leitenRequest(
      useStore,
      'products',
      async (_: void) => {
        return await ProductsApi.get()
      }
    )

    const useRemoveRequest = leitenRequest(
      useStore,
      'removeRequest',
      async (id: string) => {
        return await CartApi.remove(id)
      },
      {
        fulfilled: ({ result }) => {
          if (result) {
            useStore.setState((state) => ({
              ...state,
              orders: state.orders?.filter((order) => order.id !== result.id)
            }))
          }
        }
      }
    )

    mount(() => {
      useOrdersRequest.action()
      useProductsRequest.action()
    })

    return {
      useStore,
      useOrdersRequest,
      useProductsRequest,
      useRemoveRequest
    }
  }
)

interface IOrderSelectorOutput {
  orders: (CartApi.IOrder & { product: ProductsApi.IProduct | null })[] | null
  total: number
}
export const orderSelector = (state: IState): IOrderSelectorOutput => {
  const { orders, products } = state

  if (!orders || !products) return { orders: null, total: 0 }

  const list = state.orders?.map((cartItem) => {
    const product =
      state?.products?.find(
        (product) => String(product.id) === String(cartItem.productId)
      ) || null
    return {
      ...cartItem,
      product: product
    }
  })

  const total =
    list?.reduce(
      (acc, item) =>
        acc +
        (item?.product?.originalPrice || item?.product?.discountedPrice || 0) *
          item.quantity,
      0
    ) || 0

  return {
    orders: list || null,
    total
  }
}
