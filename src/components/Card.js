import React from 'react'
import Link from 'gatsby-link'

import Action from '../components/Action'

import '../css/card.css'
import '../css/utils.css'

export default function Card({ className, title, excerpt, path }) {
  return (
    <div className={[`card`].concat(className || []).join(' ')}>
      <div className="flex-none m-b-xs">Tag</div>
      <div className="flex-auto">
        {title && (
          <h3 className="title">
            <Link to={path}>{title}</Link>
          </h3>
        )}
        {excerpt && <p>{excerpt}</p>}
      </div>
      <div className="flex-none m-t-xs">
        <Action to={path}>Read more</Action>
      </div>
    </div>
  )
}
