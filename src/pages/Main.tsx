import React from 'react'
import { ProductList } from '../features/productList/ProductList'
import { Breadcrumbs } from '../components/breadcrumbs/Breadcrumbs'
import { AppRoutes } from '../core/routes'

const Home: React.FC = () => {
  return (
    <>
      <Breadcrumbs />
      <ProductList />
    </>
  )
}

export default Home
