import styled, { css } from 'styled-components'
import { ButtonHTMLAttributes } from 'react'
import { IUIComponentProps } from '../../core/helpers/getStyles'

type ISCCResult = ReturnType<typeof css>
export const defaultButtonType: IButtonType = 'primary'
type IButtonType = 'primary' | 'outline'
interface IExtendedButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  $buttonType?: IButtonType
  loading?: boolean
}

export type IButtonProps = IUIComponentProps<'button', IExtendedButtonProps>

const _Button = (properties: IButtonProps) => {
  const { loading, children, ...rest } = properties
  return (
    <button {...rest} onClick={loading ? undefined : rest.onClick}>
      {children}
    </button>
  )
}

export const Button = styled(_Button).attrs(
  ({ buttonType, loading, ...props }) => ({
    $buttonType: buttonType || defaultButtonType,
    $loading: loading || false,
    ...props
  })
)`
  border: none;
  padding: 15px 30px;
  font-size: 18px;
  cursor: pointer;
  ${({ $buttonType }) => buttonThemes[$buttonType]}
`

const buttonThemes: Record<IButtonType, ISCCResult> = {
  primary: css`
    background-color: #ccf566;
    color: #000;
  `,
  outline: css`
    background-color: transparent;
    color: #000;
    border: 1px solid #000;
  `
}
