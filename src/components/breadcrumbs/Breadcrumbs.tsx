import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { AppRoutes } from '../../core/routes'
interface BreadcrumbsProps {
  paths?: { name: string; link?: string }[]
}
export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ paths }) => {
  return (
    <Wrapper>
      <Crumb>
        <BreadcrumbLink to={AppRoutes.main}>Home</BreadcrumbLink>
      </Crumb>
      {paths &&
        paths.map((path, index) => (
          <Crumb key={index}>
            {path?.link && (
              <span>
                <BreadcrumbLink to={path.link}>{path.name}</BreadcrumbLink>{' '}
              </span>
            )}
            {!path?.link && <span>{path.name}</span>}
          </Crumb>
        ))}
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  color: #555;
  padding: 16px 0;
`

const Crumb = styled.div`
  &:not(:last-child)::after {
    content: '>';
    margin: 0 0.5rem;
  }
`

const BreadcrumbLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  &:hover {
    text-decoration: underline;
  }
`
