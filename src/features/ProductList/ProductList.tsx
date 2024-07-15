import { ProductCard } from '../../components/ProductCard/ProductCard'
import styled from 'styled-components'
import { products } from '../../mocks/productsList'

export const ProductList = () => {
  return (
    <Wrapper>
      {products.map((product, index) => (
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
