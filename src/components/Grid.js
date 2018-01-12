import React from 'react'

import '../css/grid.css'

export default function Grid({ children, className, to }) {
  return (
    <div className={[`grid`].concat(className || []).join(' ')} to={to}>
      {children}
    </div>
  )
}
