import { Header } from '../header'
import styled from 'styled-components'

export const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Container>
        <Header />
        {children}
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 16px;
  background: #f3f4f5;
`
const Container = styled.div`
  max-width: 1200px;
  width: 100%;
`
