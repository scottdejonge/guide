import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import Container from '../components/Container'

import '../css/reset.css'
import '../css/typography.css'

export default class Template extends React.Component {
  static propTypes = {
    children: PropTypes.func,
  }

  render() {
    const { location } = this.props
    const isRoot = location.pathname === '/'
    return (
      <div>
        <Helmet title="Guide" meta={[{ name: 'description', content: 'Sample' }, { name: 'keywords', content: 'sample, something' }]} />
        <Container>
          <h1>
            <Link to="/" style={{ textDecoration: 'none' }}>
              Guide
            </Link>
          </h1>
          {this.props.children()}
        </Container>
      </div>
    )
  }
}
