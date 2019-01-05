import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Language from '../components/language';
import { injectIntl } from 'react-intl'

import './layout.css'
import { Link } from '@reach/router';

const Layout = ({ children, data, intl }) => (
  <div>
    <Helmet
      title={intl.formatMessage({ id: 'title' })}
      meta={[
        { name: 'description', content: intl.formatMessage({ id: 'description' }) },
        {
          name: 'keywords',
          content: intl.formatMessage({ id: 'keywords' })
        }
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
        <Link to="/">{intl.formatMessage({id: 'landingTitle1'})}</Link> 
      </h1>
      <h2>
        {intl.formatMessage({id: 'landingTitle2'})}
      </h2>
      <Language/>
      <br/>
      <br/>
      {children}
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default injectIntl(Layout);
