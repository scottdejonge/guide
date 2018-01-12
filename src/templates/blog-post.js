import React from 'react'
import Helmet from 'react-helmet'
import BackIcon from 'react-icons/lib/md/chevron-left'
import ForwardIcon from 'react-icons/lib/md/chevron-right'

import Container from '../components/Container'
import Button from '../components/Button'
import Tags from '../components/Tags'

export default function Template({ data, pathContext }) {
  const { markdownRemark: post } = data
  const { next, prev } = pathContext
  return (
    <div>
      <Helmet title={`${post.frontmatter.title} -  Guide`} />
      <Container>
        <h1 className="title">{post.frontmatter.title}</h1>
        <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: post.html }} />
        <Tags list={post.frontmatter.tags || []} />
        <div className="navigation">
          {prev && (
            <Button className="link prev" to={prev.frontmatter.path}>
              <BackIcon /> {prev.frontmatter.title}
            </Button>
          )}
          {next && (
            <Button className="link next" to={next.frontmatter.path}>
              {next.frontmatter.title} <ForwardIcon />
            </Button>
          )}
        </div>
      </Container>
    </div>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        tags
        title
      }
    }
  }
`
