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
    const shouldAnimate = this.shouldAnimate()

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
          <link rel="icon" type="image/png" href="favicon.ico" sizes="16x16" />
        </Helmet>
        <Navigation
          shouldAnimate={shouldAnimate}
          delayInitialAnimation={this.props.delayInitialAnimation}
        />
        <NavigationMobile />
        <PosedWrapper
          delayInitialAnimation={this.props.delayInitialAnimation}
          initialPose={shouldAnimate ? 'hidden' : 'visible'}
          pose="visible"
        >
          {children}
        </PosedWrapper>
      </Fragment>
    )
  }
  shouldAnimate() {
    if (typeof window === 'undefined') {
      return true
    }

    if (!localStorage.navigationAnimation) {
      localStorage.navigationAnimation = Date.now()
      return true
    }

    return false
  }
}

export default injectIntl(Layout)

const StyledWrapper = styled.div`
  padding-left: ${vars.styles.sizes.navigationWidth};
  min-height: 100vh;

  ${on('onlyMobile')} {
    padding-left: 0 !important; /* Needed for pose not to work mobile */
    min-height: calc(100vh - ${vars.styles.sizes.navigationMobileHeight});
    padding-top: ${vars.styles.sizes.navigationMobileHeight};
  }
`

const PosedWrapper = posed(StyledWrapper)({
  visible: {
    paddingLeft: 70,
    delay: ({ delayInitialAnimation }) => {
      return delayInitialAnimation ? 3500 : 500
    },
    transition: { type: 'spring', damping: 20 },
  },
  hidden: {
    paddingLeft: 0,
  },
})

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  delayInitialAnimation: PropTypes.bool,
}

Layout.defaultProps = {
  delayInitialAnimation: false,
}
