import React, { Fragment, Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { injectIntl } from 'react-intl'
import Navigation from 'src/components/Navigation'
import GlobalStyles from '../global-styles'
import styled from 'styled-components'
import { vars } from 'src/util/vars'
import { on } from 'src/util/breakpoint'
import posed, { PoseGroup } from 'react-pose'

class Layout extends Component {
  render() {
    const { delayInitialAnimation, children, intl } = this.props
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
          <link rel="stylesheet" type="text/css" href="/fonts.css" />
        </Helmet>
        <Navigation
          shouldAnimate={shouldAnimate}
          delayInitialAnimation={delayInitialAnimation}
        />
        <PosedContentWrapper
          delayInitialAnimation={delayInitialAnimation}
          initialPose={shouldAnimate ? 'hidden' : 'visible'}
          pose="visible"
        >
          {children}
        </PosedContentWrapper>
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

const StyledContentWrapper = styled.div`
  padding-left: ${vars.styles.sizes.navigationWidth};
  min-height: 100vh;

  ${on('onlyMobile')} {
    padding-left: 0 !important; /* Needed for pose not to work mobile */
    min-height: calc(100vh - ${vars.styles.sizes.navigationMobileHeight});
    padding-top: ${vars.styles.sizes.navigationMobileHeight};
  }
`
const PosedContentWrapper = posed(StyledContentWrapper)({
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
