import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>()

  return <h2>Product Details for product {id}</h2>
}

export default ProductDetails
