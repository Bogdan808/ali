import { IProduct } from '../../types/data'
import { ProductCard } from '../../components/ProductCard/ProductCard'
import styled from 'styled-components'

export const ProductList = () => {
  const product: IProduct = {
    name: 'Example Product',
    image: '/products/1/1.webp',
    rating: 4.5,
    reviews: 150,
    originalPrice: 120,
    discountedPrice: 90,
    discountPercentage: 25,
    deliveryTime: 3,
    deliveryType: 1
  }
  const mock10Item = new Array(10).fill(product)

  return (
    <Wrapper>
      {mock10Item.map((product, index) => (
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
