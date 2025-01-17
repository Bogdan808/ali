import { ProductProvider, useProductFeature } from './store/productStore'
import { ProductCard } from '../../components/productCard/ProductCard'
import { useParams } from 'react-router-dom'
import { Loading } from '../../components/loading/Loading'
import CartButton from './components/cartButton/CartButton'
import React from 'react'
import styled from 'styled-components'
import { useCartFeature } from '../header/components/Cart/store/cartStore'

export const Product = () => {
  const { id } = useParams()
  const { useRequest } = useCartFeature()

  return (
    <ProductProvider
      value={{ id: id, onSuccessOrder: () => useRequest.action() }}
    >
      <ProductFeature />
    </ProductProvider>
  )
}

export const ProductFeature = () => {
  const { useStore, useRequest } = useProductFeature()
  const product = useStore((state) => state.product)
  const status = useRequest((state) => state.status)

  return (
    <>
      <Loading status={status}>
        {product && <ProductCard theme={'card'} product={product} />}
        <Actions>
          <CartButton />
        </Actions>
      </Loading>
    </>
  )
}

const Actions = styled.div``
