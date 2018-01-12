import React from 'react'
import Link from 'gatsby-link'

import Container from '../components/Container'

export default function Action({ children, className, to }) {
  return (
    <Container>
      <h1>
        <Link to="/" style={{ textDecoration: 'none' }}>
          Guide
        </Link>
      </h1>
    </Container>
  )
}
