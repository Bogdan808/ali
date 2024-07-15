import React from 'react'
import { useParams } from 'react-router-dom'
import { ProductCard } from '../components/productCard/ProductCard'
import { products } from '../mocks/productsList'
import styled from 'styled-components'
import CartButton from '../components/cartButton/CartButton'

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const product = products.find((product) => product.id === Number(id))
  return (
    <>
      <h2>Product Details</h2>
      <Content>
        <Product>{product && <ProductCard product={product} />}</Product>
        <Actions>
          <CartButton price={9} />
        </Actions>
      </Content>
    </>
  )
}

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
`
const Product = styled.div``
const Actions = styled.div``

export default ProductDetails
