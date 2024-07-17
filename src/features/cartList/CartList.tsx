// CartItem.tsx
import React, { useState } from 'react'
import styled from 'styled-components'
import { Button } from '../../ui/button/Button'

const CartList: React.FC = () => {
  return (
    <Wrapper>
      <CartContainer>
        <Item
          image="/path-to-your-image.jpg"
          title="Item"
          price={0.99}
          oldPrice={1.99}
          discount={50}
          freeShipping
        />
        <Footer>
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
}
const Item = ({
  image,
  title,
  price,
  oldPrice,
  discount,
  freeShipping
}: IItem) => {
  const [count, setCount] = useState<number>(1)
  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count > 1 ? count - 1 : 1)

  return (
    <Order>
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
          <CounterButton onClick={decrement}>-</CounterButton>
          <Count>{count}</Count>
          <CounterButton onClick={increment}>+</CounterButton>
        </QuantityControl>
      </Details>
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

const CounterButton = styled.button`
  background: none;
  border: 1px solid #ddd;
  font-size: 20px;
  padding: 5px 10px;
  cursor: pointer;
`

const Count = styled.span`
  font-size: 16px;
  padding: 0 10px;
`

const Footer = styled.div`
  display: flex;
  justify-content: flex-end;

  padding: 20px;
`

export default CartList
