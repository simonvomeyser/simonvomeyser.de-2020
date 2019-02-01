import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { injectIntl } from 'react-intl'
import Navigation from 'components/navigation'
import NavigationMobile from 'components/navigationMobile'
import GlobalStyles from 'styled-components/globalStyles'
import styled from 'styled-components'
import { vars } from 'util/vars'
import { on } from 'util/breakpoint'

const Layout = ({ children, data, intl }) => (
  <Fragment>
    <GlobalStyles />
    <Helmet
      title={intl.formatMessage({ id: 'title' })}
      meta={[
        {
          name: 'description',
          content: intl.formatMessage({ id: 'description' }),
        },
        {
          name: 'keywords',
          content: intl.formatMessage({ id: 'keywords' }),
        },
      ]}
    >
      <html lang="en" />
    </Helmet>
    <Navigation />
    <NavigationMobile />
    <StyledWrapper>{children}</StyledWrapper>
  </Fragment>
)

const StyledWrapper = styled.div`
  padding-left: ${vars.styles.sizes.navigationWidth};
  min-height: 100vh;

  ${on('onlyMobile')} {
    padding-left: 0;
    min-height: calc(100vh - ${vars.styles.sizes.navigationMobileHeight});
    padding-top: ${vars.styles.sizes.navigationMobileHeight};
  }
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default injectIntl(Layout)
