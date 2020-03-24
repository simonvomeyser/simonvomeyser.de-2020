import React, { Fragment, Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { injectIntl, FormattedMessage } from 'react-intl'
import Navigation from 'src/components/Navigation'
import styled from 'styled-components'
import { vars } from 'src/util/vars'
import { on } from 'src/util/breakpoint'
import posed, { PoseGroup } from 'react-pose'
import OnlySupportedBrowsers from './OnlySupportedBrowsers'

function Layout({ children, intl }) {
  return (
    <>
      <Helmet
        title={intl.formatMessage({ id: 'defaultMetaTitle' })
        }
        meta={[
          {
            name: 'description',
            content: intl.formatMessage({ id: 'defaultMetaDescription' }),
          },
          {
            name: 'keywords',
            content: intl.formatMessage({ id: 'metaKeywords' }),
          },
        ]}
      />
      <OnlySupportedBrowsers>
        <Navigation />
        <PosedContentWrapper>
          {children}
        </PosedContentWrapper>
      </OnlySupportedBrowsers>
    </>
  )
}

export default injectIntl(Layout)

const StyledContentWrapper = styled.div`
  padding-left: ${vars.styles.sizes.navigationWidth};
  min-height: 100vh;
  background-color: ${vars.styles.colors.neutral1};

  ${on('onlyMobile')} {
    padding-left: 0 !important; /* Needed for pose not to work mobile */
    min-height: calc(100vh - ${vars.styles.sizes.navigationMobileHeight});
  }
`
const PosedContentWrapper = posed(StyledContentWrapper)({
  pageFadedIn: {
    paddingLeft: 70,
    transition: { type: 'spring', damping: 20 },
  },
  pageInvisible: {
    paddingLeft: 0,
  },
})