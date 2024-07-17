import React from 'react'
import { Breadcrumbs } from '../components/breadcrumbs/Breadcrumbs'
import Orders from '../features/orders/Orders'

const Cart: React.FC = () => {
  return (
    <>
      <Breadcrumbs paths={[{ name: 'Cart' }]} />
      <Orders />
    </>
  )
}

export default Cart
