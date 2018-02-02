import React from 'react'
import Helmet from 'react-helmet'

import Container from '../components/Container'
import Grid from '../components/Grid'
import Card from '../components/Card'

export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <Container>
      <h2>Topics</h2>
      <Grid>
        {posts.filter(post => post.node.frontmatter.title.length > 0).map(({ node: post }) => {
          return (
            <Card
              key={post.id}
              path={post.frontmatter.path}
              title={post.frontmatter.title}
              description={post.frontmatter.description}
              excerpt={post.excerpt}
            />
          )
        })}
      </Grid>
    </Container>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___title] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 60)
          frontmatter {
            path
            tags
            title
            description
          }
        }
      }
    }
  }
`
