import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { injectIntl } from 'react-intl'
import Container from '../styled-components/container';
import GlobalStyles from '../styled-components/globalStyles'

const Layout = ({ children, data, intl }) => (
  <Fragment>
    <GlobalStyles/>
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
    <Container fluid>
      {children}
    </Container>
  </Fragment>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default injectIntl(Layout);
