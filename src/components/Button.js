import React from 'react'
import Link from 'gatsby-link'

import '../css/button.css'

export default function Button({ children, className, to }) {
  return (
    <Link className={[`button`].concat(className || []).join(' ')} to={to}>
      {children}
    </Link>
  )
}
