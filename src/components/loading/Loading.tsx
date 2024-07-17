import React from 'react'
import styled, { keyframes } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { ILoadingStatus } from '../../types/ILoadingStatus'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`
interface ILoadingProps {
  status: ILoadingStatus
  children: React.ReactNode
}
export const Loading = ({ children, status }: ILoadingProps) => (
  <>
    {status === 'loading' && (
      <LoadingWrapper>
        <SpinnerIcon icon={faSpinner} />{' '}
      </LoadingWrapper>
    )}
    {status === 'error' && <div>Error</div>}

    {status === 'loaded' && children}
  </>
)

const SpinnerIcon = styled(FontAwesomeIcon)`
  animation: ${rotate} 2s linear infinite;
  font-size: 2rem;
`

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  min-height: 200px;
`
