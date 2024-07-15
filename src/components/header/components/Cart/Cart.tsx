import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

export const Cart = () => {
  return (
    <Wrapper href="/cart">
      <Icon icon={faShoppingCart} />
      <Title>Корзина</Title>
      <Tag>1</Tag>
    </Wrapper>
  )
}

const Wrapper = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  flex-direction: column;
  position: relative;
  color: #fff;
  font-family: Inter, sans-serif;
  font-size: 12px;
`

const Icon = styled(FontAwesomeIcon)`
  font-size: 20px;
`

const Title = styled.span``

const Tag = styled.span`
  background-color: #18181b;
  border-radius: 6px;
  height: 15px;
  padding: 0 4px;
  position: absolute;
  right: -1px;
  top: -5px;
  z-index: 2;
  font-size: 10px;
`
