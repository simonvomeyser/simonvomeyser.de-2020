import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { injectIntl } from 'react-intl'
import Navigation from '../components/navigation';
import GlobalStyles from '../styled-components/globalStyles'
import styled  from 'styled-components';
import {vars} from '../util/vars'

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
    <Navigation/>
    <Wrapper>
      {children}
    </Wrapper>
  </Fragment>
)

const Wrapper = styled.div`
  padding-left: ${vars.styles.sizes.sidebarWidth};
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default injectIntl(Layout);
