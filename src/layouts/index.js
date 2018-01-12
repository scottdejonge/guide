import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import Header from '../components/Header'

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
        <Header />
        {this.props.children()}
      </div>
    )
  }
}
