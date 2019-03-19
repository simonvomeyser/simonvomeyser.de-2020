import React, { Fragment, Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { injectIntl } from 'react-intl'
import Navigation from 'components/Navigation'
import NavigationMobile from 'components/NavigationMobile'
import GlobalStyles from 'styled-components/globalStyles'
import styled from 'styled-components'
import { vars } from 'util/vars'
import { on } from 'util/breakpoint'
import posed, { PoseGroup } from 'react-pose'

class Layout extends Component {
  render() {
    const { animate, children, data, intl } = this.props
    return (
      <Fragment>
        <GlobalStyles />
        <Helmet
          title={
            intl.formatMessage({ id: 'title' }) +
            ' - ' +
            intl.formatMessage({ id: 'titleAddtionOnIndex' })
          }
          meta={[
            {},
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
          <html lang={intl.locale} />
          <link rel="stylesheet" href="https://use.typekit.net/itg5rkc.css" />
        </Helmet>
        <Navigation delayInitialAnimation={this.props.delayInitialAnimation} />
        <NavigationMobile />
        <StyledWrapper>{children}</StyledWrapper>
      </Fragment>
    )
  }
}

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
  delayInitialAnimation: PropTypes.bool,
}

Layout.defaultProps = {
  delayInitialAnimation: false,
}

export default injectIntl(Layout)
