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
        </Helmet>
        <PosedContentWrapper
          initialPose={animate ? 'start' : 'fadedIn'}
          pose="fadedIn"
        >
          <Navigation animate={animate} key="navigation" />
          <NavigationMobile key="navigationMobile" />
          <StyledWrapper animate={animate} key="styledWrapper">
            {children}
          </StyledWrapper>
        </PosedContentWrapper>
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

const PosedContentWrapper = posed.div({
  fadedIn: { opacity: 1, transition: { duration: 500 } },
  start: { opacity: 0, delayChildren: 500 },
})

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  animate: PropTypes.bool,
}

Layout.defaultProps = {
  animate: false,
}

export default injectIntl(Layout)
