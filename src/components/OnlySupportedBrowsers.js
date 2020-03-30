import React from 'react'
import { on } from 'src/util/breakpoint'
import { vars } from 'src/util/vars'
import styled from 'styled-components'
import { StyledPageHeading } from '../styled-components'
import { StyledTextSection } from '../styled-components/TextSection'
import { isSearchEngineBot } from '../util/isSearchEngineBot'
import { isSupportedBrowser } from '../util/isSupportedBrowser'

import NameAndProfession from './NameAndProfession'
import SocialLinks from '../components/SocialLinks'
import { FormattedHTMLMessage, FormattedMessage } from 'react-intl';


export default function OnlySupportedBrowsers({ children }) {
  if (!isSearchEngineBot() && !isSupportedBrowser()) {
    return <UnsupportedPage />
  } else {
    return <>{children}</>
  }
}

const UnsupportedPage = () => {
  return (
    <StyledWrapper>
      <NameAndProfessionWrapper>
        <NameAndProfession />
      </NameAndProfessionWrapper>

      <StyledPageHeading>
        <FormattedMessage id="oldBrowserHeading" />
      </StyledPageHeading>
      <StyledTextSection>
        <FormattedHTMLMessage id="oldBrowserCopy" />
      </StyledTextSection>
      <SocialLinks />
    </StyledWrapper >
  )
}
const NameAndProfessionWrapper = styled.div`
  margin-bottom: 2rem;
`;

const StyledWrapper = styled.div`
  padding: 1rem 2rem;
  background-color: ${vars.styles.colors.neutral1};
  max-width: 1100px;
  margin: 0 auto;
  min-height: 100vh;

  ${on('onlyMobile')} {
    padding: 1rem;
  }
`
