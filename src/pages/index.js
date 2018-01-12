import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import Grid from '../components/Grid'
import Button from '../components/Button'

export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <div>
      <h2>Topics</h2>
      <Grid>
        {posts.filter(post => post.node.frontmatter.title.length > 0).map(({ node: post }) => {
          return (
            <div className="card" key={post.id}>
              <h3 className="title">
                <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
              </h3>
              <p>{post.excerpt}</p>
              <Button to={post.frontmatter.path}>Read more</Button>
            </div>
          )
        })}
      </Grid>
    </div>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`
