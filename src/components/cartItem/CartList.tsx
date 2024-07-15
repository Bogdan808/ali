// CartItem.tsx
import React, { useState } from 'react'
import styled from 'styled-components'
import { Button } from '../../ui/button/Button'

const CartList: React.FC = () => {
  const [count, setCount] = useState<number>(1)
  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count > 1 ? count - 1 : 1)

  return (
    <CartContainer>
      <CartHeader>
        <SelectAll>
          <input type="checkbox" id="selectAll" />
          <SelectAllLabel htmlFor="selectAll">Все</SelectAllLabel>
        </SelectAll>
        <div>Не выбрано ни одного товара</div>
      </CartHeader>
      <CartItemContainer>
        <ItemImage src="/path-to-your-image.jpg" alt="Item" />
        <ItemDetails>
          <ItemTitle>
            2024 Sanrio, Hello Kitty плюшевый брелок Kawaii My Melody Kuromi...
          </ItemTitle>
          <div>
            <ItemPrice>
              $0.99 <OldPrice>$1.99</OldPrice> <Discount>-50%</Discount>
            </ItemPrice>
            <FreeShipping>Доставка бесплатная</FreeShipping>
          </div>
          <QuantityControl>
            <CounterButton onClick={decrement}>-</CounterButton>
            <Count>{count}</Count>
            <CounterButton onClick={increment}>+</CounterButton>
          </QuantityControl>
        </ItemDetails>
      </CartItemContainer>
      <Footer>
        <Button $buttonType={'primary'} onClick={() => alert('by')}>
          К оформлению
        </Button>
      </Footer>
    </CartContainer>
  )
}

const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 12px;
`

const CartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 20px;
  border-bottom: 1px solid #ddd;
`

const SelectAll = styled.div`
  display: flex;
  align-items: center;
`

const SelectAllLabel = styled.label`
  margin-left: 10px;
`

const CartItemContainer = styled.div`
  display: flex;
  padding: 20px;
  border-bottom: 1px solid #ddd;
`

const ItemImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-right: 20px;
`

const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
`

const ItemTitle = styled.div`
  font-size: 16px;
  color: #333;
`

const ItemPrice = styled.div`
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
