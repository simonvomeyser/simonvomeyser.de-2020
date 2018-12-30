import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import LangSwitch from '../components/langSwitch';
import { injectIntl } from 'react-intl'

import './layout.css'
import { Link } from '@reach/router';

const Layout = ({ children, data, intl }) => (
  <div>
    <Helmet
      title={intl.formatMessage({ id: 'title' })}
      meta={[
        { name: 'description', content: intl.formatMessage({ id: 'welcome' }) },
        {
          name: 'keywords',
          content: 'gatsby, i18n, react-intl, multi language, localization',
        },
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
      <h2>
        Webentwicklung
      </h2>
      <LangSwitch />
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
