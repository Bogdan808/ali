import React from 'react'
import styled from 'styled-components'
import { Breadcrumbs } from '../components/breadcrumbs/Breadcrumbs'
import { Product } from '../features/product/Product'

const ProductDetails: React.FC = () => {
  return (
    <>
      <Breadcrumbs paths={[{ name: 'Product' }]} />
      <Content>
        <Product />
      </Content>
    </>
  )
}

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
`

export default ProductDetails
