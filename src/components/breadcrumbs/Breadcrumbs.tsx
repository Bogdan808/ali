import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ paths }) => {
  return (
    <Wrapper>
      {paths.map((path, index) => (
        <Crumb key={index}>
          <BreadcrumbLink to={path.link}>{path.name}</BreadcrumbLink>
        </Crumb>
      ))}
    </Wrapper>
  )
}

interface BreadcrumbsProps {
  paths: { name: string; link: string }[]
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
