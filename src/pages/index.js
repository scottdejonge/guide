import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import Container from '../components/Container'
import Grid from '../components/Grid'
import Action from '../components/Action'

import '../css/card.css'

export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <Container>
      <h2>Topics</h2>
      <Grid>
        {posts.filter(post => post.node.frontmatter.title.length > 0).map(({ node: post }) => {
          return (
            <section className="card">
              <h3 className="title">
                <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
              </h3>
              <p>{post.excerpt}</p>
              <Action to={post.frontmatter.path}>Read more</Action>
            </section>
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
          excerpt(pruneLength: 120)
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
