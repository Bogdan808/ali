export interface IProduct {
  name: string
  image: string
  rating: number
  reviews: number
  originalPrice: number
  discountedPrice: number
  discountPercentage: number
  deliveryTime: number
  deliveryType: 1 | 2
}
