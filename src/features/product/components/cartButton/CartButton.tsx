import React from 'react'
import styled from 'styled-components'
import { Button } from '../../../../ui/button/Button'
import { useProductFeature } from '../../store/productStore'

const CartButton = () => {
  const { useStore, useQuantityController, decrementAction, incrementAction } =
    useProductFeature()
  const { originalPrice, discountedPrice } = useStore((s) => s.product)
  const quantity = useStore((s) => s.quantity)
  const price = discountedPrice || originalPrice

  return (
    <Wrapper>
      <Container>
        <Action>
          <Button>Add to Cart</Button>
        </Action>
        <Counter>
          <CounterButton onClick={decrementAction}>-</CounterButton>
          <Count
            value={quantity}
            onChange={(event) => useQuantityController.set(event.target.value)}
          />
          <CounterButton onClick={incrementAction}>+</CounterButton>
        </Counter>
      </Container>
      <Footer>
        Total: <strong>{quantity * Number(price)} $</strong>
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
  background: #fff;
`

const CounterButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  padding: 0 10px;
  cursor: pointer;
`

const Count = styled.input.attrs({ type: 'number' })`
  font-size: 16px;
  padding: 0 10px;
`
const Wrapper = styled.div``
const Footer = styled.div``

export default CartButton
