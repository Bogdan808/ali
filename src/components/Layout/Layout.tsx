import { Header } from '../Header'
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
`
const Container = styled.div`
  max-width: 1200px;
  width: 100%;
`
