import React from 'react'
import styled from 'styled-components'
import { Button } from '../../ui/button/Button'
import {
  orderSelector,
  OrdersProvider,
  useOrdersFeature
} from './store/ordersStore'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons/faTrash'

const Orders = () => {
  return (
    <OrdersProvider value={null}>
      <OrderFeature />
    </OrdersProvider>
  )
}

const OrderFeature = () => {
  const { useStore, useRemoveRequest } = useOrdersFeature()
  const { orders, total } = useStore(orderSelector)

  return (
    <Wrapper>
      <CartContainer>
        {orders &&
          orders.map((order) => (
            <Item
              key={order.id}
              image={order.product?.image ?? ''}
              title={order.product?.name ?? ''}
              price={order.product?.originalPrice ?? 0}
              oldPrice={order.product?.originalPrice ?? 0}
              discount={order.product?.originalPrice ?? 0}
              freeShipping={order.product?.deliveryType === 1}
              quantity={order.quantity}
              onRemove={() => useRemoveRequest.action(order.id)}
            />
          ))}

        <Footer>
          <Total>Total {total}$</Total>
          <Button $buttonType={'primary'} onClick={() => alert('by')}>
            К оформлению
          </Button>
        </Footer>
      </CartContainer>
    </Wrapper>
  )
}

interface IItem {
  image: string
  title: string
  price: number
  oldPrice: number
  discount: number
  freeShipping: boolean
  quantity: number
  onRemove?: () => void
}
const Item = ({
  image,
  title,
  price,
  oldPrice,
  discount,
  freeShipping,
  quantity,
  onRemove
}: IItem) => {
  return (
    <Order>
      <Content>
        <Image src={image} alt={title} />
        <Details>
          <Title>{title}</Title>
          <div>
            <Price>
              ${price} <OldPrice>${oldPrice}</OldPrice>
              <Discount>-{discount}%</Discount>
            </Price>
            {freeShipping && <FreeShipping>Доставка бесплатная</FreeShipping>}
          </div>
          <QuantityControl>
            <Count>Quantity {quantity}</Count>
            <Count>Price {quantity * price || oldPrice}$</Count>
          </QuantityControl>
        </Details>
      </Content>
      <Action>
        <Button $buttonType={'outline'} onClick={onRemove}>
          <FontAwesomeIcon icon={faTrash} />
        </Button>
      </Action>
    </Order>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 12px;
`

const CartContainer = styled.div``

const Order = styled.div`
  display: flex;
  padding: 20px;
  border-bottom: 1px solid #ddd;
`
const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
`

const Image = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-right: 20px;
`

const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
`

const Title = styled.div`
  font-size: 16px;
  color: #333;
`

const Price = styled.div`
  font-size: 18px;
  color: #000;
  font-weight: bold;
`

const OldPrice = styled.span`
  font-size: 14px;
  color: #999;
  text-decoration: line-through;
  margin-left: 10px;
`

const Discount = styled.span`
  font-size: 14px;
  color: #f00;
  margin-left: 10px;
`

const FreeShipping = styled.div`
  color: green;
  margin-top: 5px;
`

const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`

const Count = styled.span`
  font-size: 16px;
  margin-right: 10px;
`
const Action = styled.div`
  display: flex;
  align-items: center;
`

const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 20px;
`
const Total = styled.div`
  padding: 20px;
  font-size: 20px;
`

export default Orders
