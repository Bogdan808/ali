import { ProductCard } from '../../components/productCard/ProductCard'
import styled from 'styled-components'
import {
  ProductListProvider,
  useProductListFeature
} from './store/productListStore'
import { Loading } from '../../components/loading/Loading'

export const ProductList = () => {
  return (
    <ProductListProvider value={null}>
      <ProductListFeature />
    </ProductListProvider>
  )
}

export const ProductListFeature = () => {
  const { useStore, useRequest } = useProductListFeature()
  const products = useStore((state) => state.products)
  const status = useRequest((s) => s.status)

  return (
    <>
      <Loading status={status}>
        <Wrapper>
          {products &&
            products.map((product, index) => (
              <Product key={index}>
                <ProductCard product={product} />
              </Product>
            ))}
        </Wrapper>
      </Loading>
      {!products && status === 'loaded' && <div>No products found</div>}
    </>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
`

const Product = styled.div``
