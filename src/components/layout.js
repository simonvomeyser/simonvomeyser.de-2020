import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import LangSwitch from '../components/langSwitch';
import { StaticQuery, graphql } from 'gatsby'

import './layout.css'
import { Link } from '@reach/router';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <div
          style={{
            margin: '60px auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
          }}
        >
          <h1>
            <Link to="/">Simon vom Eyser</Link> 
          </h1>
          <LangSwitch />
          <br/>
          <br/>
          {children}
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
