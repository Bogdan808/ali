// CartButton.tsx
import React, { useState } from 'react'
import styled from 'styled-components'
import { Button } from '../../ui/button/Button'
interface CartButtonProps {
  price: number
}
const CartButton = ({ price }: CartButtonProps) => {
  const [count, setCount] = useState<number>(1)

  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count > 1 ? count - 1 : 1)

  return (
    <Wrapper>
      <Container>
        <Action>
          <Button>Add to Cart</Button>
        </Action>
        <Counter>
          <CounterButton onClick={decrement}>-</CounterButton>
          <Count>{count}</Count>
          <CounterButton onClick={increment}>+</CounterButton>
        </Counter>
      </Container>
      <Footer>
        Total: <strong>{count * price} $</strong>
      </Footer>
    </Wrapper>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
`

const Action = styled.button`
  margin-right: 10px;
`

const Counter = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 5px;
`

const CounterButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  padding: 0 10px;
  cursor: pointer;
`

const Count = styled.span`
  font-size: 16px;
  padding: 0 10px;
`
const Wrapper = styled.div``
const Footer = styled.div``

export default CartButton
