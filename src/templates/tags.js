import React from 'react'
import Link from 'gatsby-link'
import HomeIcon from 'react-icons/lib/fa/home'
import TagsIcon from 'react-icons/lib/fa/tags'

import Button from '../components/Button'

import '../css/tags.css'

export default function Tags({ pathContext }) {
  const { posts, post, tag } = pathContext
  if (tag) {
    return (
      <div>
        <h1>
          {post.length} post{post.length === 1 ? '' : 's'} tagged with {tag}
        </h1>
        <ul>
          {post.map(({ id, frontmatter, excerpt }) => {
            return (
              <li key={id}>
                <h1>
                  <Link to={frontmatter.path}>{frontmatter.title}</Link>
                </h1>
                <p>{excerpt}</p>
              </li>
            )
          })}
        </ul>
        <Button to="/tags">
          <TagsIcon /> All tags
        </Button>
      </div>
    )
  }
  return (
    <div>
      <h1>Tags</h1>
      <ul className="tags">
        {Object.keys(posts).map(tagName => {
          const tags = posts[tagName]
          return (
            <li key={tagName}>
              <Link to={`/tags/${tagName}`}>{tagName}</Link>
            </li>
          )
        })}
      </ul>
      <Button to="/">
        <HomeIcon /> All posts
      </Button>
    </div>
  )
}
