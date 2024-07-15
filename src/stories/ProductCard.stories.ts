import type { Meta, StoryObj } from '@storybook/react'
import { ProductCard } from '../components/ProductCard/ProductCard'

const meta = {
  title: 'Components/ProductCard',
  component: ProductCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen'
  },
  args: {
    product: {
      name: 'Example Product',
      image: '/products/1/1.webp',
      rating: 4.5,
      reviews: 150,
      originalPrice: 120,
      discountedPrice: 90,
      discountPercentage: 25,
      deliveryTime: 3,
      deliveryType: 'мгновенная отправка'
    }
  }
} satisfies Meta<typeof ProductCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}