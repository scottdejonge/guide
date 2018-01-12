import React from 'react'
import Link from 'gatsby-link'

import '../css/action.css'

export default function Action({ children, className, to }) {
  return (
    <Link className={[`action`].concat(className || []).join(' ')} to={to}>
      {children}
    </Link>
  )
}
