import React from 'react'
import CartList from '../features/cartList/CartList'
import { Breadcrumbs } from '../components/breadcrumbs/Breadcrumbs'

const Cart: React.FC = () => {
  return (
    <>
      <Breadcrumbs paths={[{ name: 'Cart' }]} />
      <CartList />
    </>
  )
}

export default Cart
