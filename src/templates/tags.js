import React from 'react'
import Link from 'gatsby-link'
import HomeIcon from 'react-icons/lib/fa/home'
import TagsIcon from 'react-icons/lib/fa/tags'

import Container from '../components/Container'
import Grid from '../components/Grid'
import Card from '../components/Card'
import Action from '../components/Action'

import '../css/tags.css'

export default function Tags({ pathContext }) {
  const { posts, post, tag } = pathContext
  if (tag) {
    return (
      <Container>
        <h1>
          {post.length} post{post.length === 1 ? '' : 's'} tagged with {tag}
        </h1>
        <Grid>
          {post.map(({ id, frontmatter, excerpt }) => {
            return <Card key={id} title={frontmatter.title} path={frontmatter.path} excerpt={excerpt} />
          })}
        </Grid>
        <Action to="/tags">
          <TagsIcon /> All tags
        </Action>
      </Container>
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
      <Action to="/">
        <HomeIcon /> All posts
      </Action>
    </div>
  )
}
