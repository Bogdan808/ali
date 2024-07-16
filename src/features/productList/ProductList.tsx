import { ProductCard } from '../../components/productCard/ProductCard'
import styled from 'styled-components'
import {
  ProductListProvider,
  useProductListFeature
} from './store/productListStore'

export const ProductList = () => {
  return (
    <ProductListProvider value={null}>
      <ProductListFeature />
    </ProductListProvider>
  )
}

export const ProductListFeature = () => {
  const { useStore, useRequest } = useProductListFeature()
  const products = useStore((state) => state.data)
  const status = useRequest().status
  return (
    <Wrapper>
      {status === 'loading' && <div>Loading...</div>}
      {!products && status === 'Loaded' && <div>No products found</div>}
      {products &&
        products.map((product, index) => (
          <Product key={index}>
            <ProductCard product={product} />
          </Product>
        ))}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
`

const Product = styled.div``
