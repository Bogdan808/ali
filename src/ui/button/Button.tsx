import styled from 'styled-components'

export const Button = (props) => {
  return <ButtonStyled {...props} />
}

const ButtonStyled = styled.button`
  background-color: #ccf566;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 3px;
`
